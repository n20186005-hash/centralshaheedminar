export const locales = ['bn', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'bn';

/** সাইটের চূড়ান্ত ডোমেইন — hreflang / canonical / sitemap সবখানে এখান থেকে বের হয়। */
export const SITE = 'https://centralshaheedminar.com';

export const htmlLang: Record<Locale, string> = { bn: 'bn', en: 'en' };
export const ogLocale: Record<Locale, string> = { bn: 'bn_BD', en: 'en_US' };
export const hreflangCode: Record<Locale, string> = { bn: 'bn-BD', en: 'en' };

/** সবচেয়ে সাধারণ ভাষা-নির্দিষ্ট পথ তৈরি করে: bn → /history/, en → /en/history/ */
export function localizedPath(locale: Locale, path = '/'): string {
  const clean = path === '/' || path === '' ? '/' : `/${path.replace(/^\/+|\/+$/g, '')}/`;
  if (locale === defaultLocale) return clean;
  return clean === '/' ? `/${locale}/` : `/${locale}${clean}`;
}

/** প্রতিটি পাতার জন্য bn / en / x-default হ্রেফ্ল্যাং বিকল্প। */
export function hreflangAlternates(path = '/'): { hreflang: string; href: string }[] {
  return [
    { hreflang: hreflangCode.bn, href: new URL(localizedPath('bn', path), SITE).toString() },
    { hreflang: hreflangCode.en, href: new URL(localizedPath('en', path), SITE).toString() },
    { hreflang: 'x-default', href: new URL(localizedPath('en', path), SITE).toString() },
  ];
}

type Ui = {
  langName: string;
  langSwitchLabel: string;
  skipToContent: string;
  nav: { href: string; label: string }[];
  footer: {
    about: string;
    linksLabel: string;
    cookieSettings: string;
    photoCredit: string;
    copyright: string;
  };
  consent: {
    title: string;
    body: string;
    accept: string;
    deny: string;
  };
  home: string;
  breadcrumbHome: string;
  readMore: string;
  sourcesLabel: string;
  notFound: { title: string; body: string; cta: string };
  facts: { type: string; location: string; plusCode: string; duration: string };
  labels: {
    address: string;
    coordinates: string;
    plusCode: string;
    openMap: string;
    sources: string;
    faq: string;
    faqLabel: string;
    related: string;
    onThisPage: string;
    backHome: string;
  };
};

export const ui: Record<Locale, Ui> = {
  bn: {
    langName: 'বাংলা',
    langSwitchLabel: 'ভাষা বদল',
    skipToContent: 'মূল তথ্যাংশে যান',
    nav: [
      { href: '#history', label: 'ইতিহাস' },
      { href: '#visit', label: 'ভ্রমণ' },
      { href: '#nearby', label: 'আশপাশ' },
      { href: '#map', label: 'মানচিত্র' },
      { href: '#faq', label: 'প্রশ্নোত্তর' },
    ],
    footer: {
      about:
        'এই ওয়েবসাইটটি একটি স্বাধীন, অলাভজনক পর্যটন ও শিক্ষামূলক তথ্য-গাইড; এটি কেন্দ্রীয় শহীদ মিনার, ঢাকা বিশ্ববিদ্যালয়, বাংলাদেশ সরকার বা কোনো সরকারি প্রতিষ্ঠানের অফিসিয়াল ওয়েবসাইট নয়।',
      linksLabel: 'বিষয়শ্রেণী',
      cookieSettings: 'কুকি পছন্দ',
      photoCredit:
        'ছবি: Salim Khandoker, Wikimedia Commons, CC BY-SA 3.0. ঐতিহাসিক তথ্যের মূল সূত্র: বাংলাদেশ ট্যুরিজম বোর্ড, বাংলাপিডিয়া ও ইউনেস্কো।',
      copyright: 'ছবির ব্যবহার সংশ্লিষ্ট CC BY-SA 3.0 লাইসেন্সের অধীন; সূত্র, স্বীকৃতি ও পরিবর্তনের বিবরণ উপরের লিংকে।',
    },
    consent: {
      title: 'পরিমাপের কুকি',
      body: 'সাইটের ব্যবহার বুঝতে Google Analytics 4 ব্যবহার করা হয়। চাইলে অনুমতি দিতে বা প্রত্যাখ্যান করতে পারেন।',
      accept: 'অনুমতি দিন',
      deny: 'প্রত্যাখ্যান',
    },
    home: 'মূল পাতা',
    breadcrumbHome: 'প্রচ্ছদ',
    readMore: 'বিস্তারিত পড়ুন',
    sourcesLabel: 'বিশ্বস্ত তথ্যসূত্র',
    notFound: {
      title: 'পৃষ্ঠা পাওয়া যায়নি',
      body: 'আপনি যে ঠিকানাটি খুঁজছেন তা এই গাইডে নেই।',
      cta: 'মূল পাতায় ফিরুন',
    },
    facts: {
      type: 'ধরন',
      location: 'অবস্থান',
      plusCode: 'প্লাস কোড',
      duration: 'পরামর্শকৃত সময়',
    },
    labels: {
      address: 'ঠিকানা',
      coordinates: 'স্থানাঙ্ক',
      plusCode: 'প্লাস কোড',
      openMap: 'গুগল ম্যাপে খুলুন ↗',
      sources: 'স্মৃতি বোঝার জন্য উৎসে ফিরে যান',
      faq: 'যাওয়ার আগে যা জানা ভালো',
      faqLabel: 'সাধারণ প্রশ্ন',
      related: 'সম্পর্কিত পাতা',
      onThisPage: 'এই পাতায়',
      backHome: 'মূল পাতায় ফিরুন',
    },
  },
  en: {
    langName: 'English',
    langSwitchLabel: 'Language',
    skipToContent: 'Skip to main content',
    nav: [
      { href: '#history', label: 'History' },
      { href: '#visit', label: 'Visit' },
      { href: '#nearby', label: 'Nearby' },
      { href: '#map', label: 'Map' },
      { href: '#faq', label: 'FAQ' },
    ],
    footer: {
      about:
        'This website is an independent, nonprofit tourism and educational information guide. It is not the official website of the Central Shaheed Minar, the University of Dhaka, the Government of Bangladesh or any public institution.',
      linksLabel: 'Sections',
      cookieSettings: 'Cookie preferences',
      photoCredit:
        'Photos: Salim Khandoker, Wikimedia Commons, CC BY-SA 3.0. Historical sources: Bangladesh Tourism Board, Banglapedia and UNESCO.',
      copyright: 'Photographs are used under CC BY-SA 3.0; source, attribution and modification details are linked above.',
    },
    consent: {
      title: 'Measurement cookies',
      body: 'Google Analytics 4 is used to understand how the site is used. You may allow or decline it.',
      accept: 'Allow',
      deny: 'Decline',
    },
    home: 'Home',
    breadcrumbHome: 'Home',
    readMore: 'Read more',
    sourcesLabel: 'Trusted sources',
    notFound: {
      title: 'Page not found',
      body: 'The address you are looking for is not part of this guide.',
      cta: 'Back to home',
    },
    facts: {
      type: 'Type',
      location: 'Location',
      plusCode: 'Plus code',
      duration: 'Suggested time',
    },
    labels: {
      address: 'Address',
      coordinates: 'Coordinates',
      plusCode: 'Plus code',
      openMap: 'Open in Google Maps ↗',
      sources: 'Go back to the sources to understand the memorial',
      faq: 'Good to know before you go',
      faqLabel: 'Frequently asked questions',
      related: 'Related pages',
      onThisPage: 'On this page',
      backHome: 'Back to home',
    },
  },
};

export function t<K extends keyof Ui>(locale: Locale, key: K): Ui[K] {
  return ui[locale][key];
}
