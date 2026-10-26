/** Existing opt-in analytics: refusal takes effect before persistence. */
export function initAnalytics(id: string) {
  const w = window as unknown as Window & { __csmGA?: boolean; dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; [key: string]: unknown };
  const key = 'csm-analytics-consent', vetoKey = key + '-off';
  const banner = document.getElementById('cookie-banner');
  const status = document.getElementById('consent-status');
  const bn = document.documentElement.lang.startsWith('bn');
  let denied = false;
  const read = () => { try { return localStorage.getItem(key); } catch { return null; } };
  const veto = () => { try { return sessionStorage.getItem(vetoKey) !== null; } catch { return true; } };
  const off = () => { denied = true; w['ga-disable-' + id] = true; w.gtag?.('consent', 'update', { analytics_storage: 'denied' }); };
  const refuse = () => {
    try { localStorage.setItem(key, 'denied'); if (localStorage.getItem(key) === 'denied') return true; } catch {}
    try { localStorage.removeItem(key); return localStorage.getItem(key) === null; } catch { return false; }
  };
  const on = () => {
    denied = false; w['ga-disable-' + id] = false;
    if (w.__csmGA) { w.gtag?.('consent', 'update', { analytics_storage: 'granted' }); return; }
    w.__csmGA = true; w.dataLayer ||= [];
    w.gtag = (...args: unknown[]) => { w.dataLayer!.push(args); };
    w.gtag('consent', 'default', { analytics_storage: 'granted' });
    w.gtag('js', new Date()); w.gtag('config', id, { anonymize_ip: true });
    const script = document.createElement('script'); script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id; document.head.appendChild(script);
  };
  const set = (allow: boolean) => {
    off();
    let saved = false, sharedOff = false, tabOff = false;
    try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {}
    if (allow) {
      try {
        sessionStorage.removeItem(vetoKey);
        if (sessionStorage.getItem(vetoKey) !== null) throw Error('veto');
        localStorage.setItem(key, 'accepted');
        if (localStorage.getItem(key) !== 'accepted') throw Error('readback');
        saved = true; on();
      } catch { sharedOff = refuse(); try { sessionStorage.setItem(vetoKey, '1'); tabOff = sessionStorage.getItem(vetoKey) === '1'; } catch {} }
    } else {
      try { localStorage.setItem(key, 'denied'); saved = localStorage.getItem(key) === 'denied'; } catch {}
      sharedOff = saved || refuse();
    }
    if (status) status.textContent = saved ? (bn ? 'পছন্দ সংরক্ষিত হয়েছে।' : 'Choice saved.') :
      (bn ? 'সংরক্ষণ যাচাই করা যায়নি। এই পাতায় GA বন্ধ।' : 'Saving could not be verified. GA is off on this page.') +
      (sharedOff ? (bn ? ' সংরক্ষিত অনুমতি বাতিল হয়েছে।' : ' Stored permission was cleared.') : (bn ? ' অন্য ট্যাব বা পরবর্তী ভিজিটে পুরোনো অনুমতি থাকতে পারে।' : ' Stored permission may remain usable in other tabs or future visits.')) +
      (tabOff ? (bn ? ' এই ট্যাবে প্রত্যাখ্যান রাখা হয়েছে।' : ' Refusal is retained in this tab.') : '');
    if (saved) banner?.classList.add('hidden'); else banner?.classList.remove('hidden');
  };
  w['ga-disable-' + id] = true;
  if (read() === 'accepted' && !veto()) on(); else { off(); if (!read()) banner?.classList.remove('hidden'); }
  banner?.querySelector('[data-consent="accept"]')?.addEventListener('click', () => set(true));
  banner?.querySelector('[data-consent="deny"]')?.addEventListener('click', () => set(false));
  document.getElementById('cookie-settings')?.addEventListener('click', () => banner?.classList.remove('hidden'));
  window.addEventListener('storage', (event) => { if ((event.key === key || event.key === null) && read() !== 'accepted') { off(); try { sessionStorage.setItem(vetoKey, '1'); } catch {} } else if (!denied && !veto() && read() === 'accepted') on(); });
}
