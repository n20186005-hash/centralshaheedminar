import type { Locale } from '../i18n';

/**
 * স্মৃতিসৌধ-সংক্রান্ত সব ভাষা-নিরপেক্ষ তথ্যের একমাত্র উৎস।
 * রেটিং, ঠিকানা, স্থানাঙ্ক, মানচিত্র লিংক ও ছবির পথ এখানেই আছে —
 * নতুন তথ্য এলে শুধু এই ফাইলটি বদলালেই পুরো সাইট আপডেট হয়।
 */

/** SEO সাইট নামের ধরন: স্থাপনা + শহর + ভ্রমণ নির্দেশিকা। */
export const SITE_NAME: Record<Locale, string> = {
  bn: 'কেন্দ্রীয় শহীদ মিনার, ঢাকা — ভ্রমণ নির্দেশিকা',
  en: 'Central Shaheed Minar, Dhaka — Travel Guide',
};

/** উপ-পাতার শিরোনামে সাইট নাম যোগ করে। */
export function withSiteName(locale: Locale, title: string): string {
  return `${title} | ${SITE_NAME[locale]}`;
}

export const ATTRACTION = {
  name: {
    bn: 'কেন্দ্রীয় শহীদ মিনার',
    en: 'Central Shaheed Minar',
  },
  alternateName: [
    'Central Shaheed Minar',
    'Shaheed Minar',
    'কেন্দ্রীয় শহীদ মিনার, ঢাকা',
    'Shaheed Minar, Dhaka',
    'Language Martyrs’ Monument',
  ],
  city: { bn: 'ঢাকা', en: 'Dhaka' },
  country: 'BD',
  streetAddress: 'Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd',
  addressLocal: {
    bn: 'ঢাকা মেডিকেল কলেজ গেটের কাছে, সেক্রেটারিয়েট রোড, ঢাকা ১০০০',
    en: 'Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd, Dhaka 1000',
  },
  postalCode: '1000',
  geo: { latitude: 23.727238, longitude: 90.396625 },
  plusCode: 'P9GW+VJ',
  mapsUrl: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6249.30973029436!2d90.3940500770538!3d23.7272379786862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8e89cbec039%3A0xe403f93b9b07d016!2sCentral%20Shaheed%20Minar!5e1!3m2!1sbn!2sBD!4v1788751034003!5m2!1sbn!2sBD',
  /** গুগল ম্যাপ তালিকার সর্বশেষ সারাংশ (২০২৬-১১-০৩ অনুযায়ী)। */
  rating: { value: '4.6', count: 20952 },
  ticket: {
    bn: 'প্রবেশের শর্ত নিশ্চিত করুন',
    en: 'Confirm access conditions',
  },
  photos: {
    hero: '/gallery/central-shaheed-minar-hero.jpg',
    wide: '/gallery/central-shaheed-minar-wide.jpg',
    portrait: '/gallery/central-shaheed-minar-front.jpg',
    alt: '/gallery/central-shaheed-minar-alt.jpg',
    og: '/images/og-cover.jpg',
  },
  photoCredit: {
    bn: 'Salim Khandoker / Wikimedia Commons · CC BY-SA 3.0',
    en: 'Salim Khandoker / Wikimedia Commons · CC BY-SA 3.0',
  },
} as const;

export const SOURCES = [
  { href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92', bn: 'বাংলাদেশ ট্যুরিজম বোর্ড', en: 'Bangladesh Tourism Board' },
  { href: 'https://en.banglapedia.org/index.php/Shaheed_Minar', bn: 'বাংলাপিডিয়া', en: 'Banglapedia' },
  { href: 'https://sustainability.du.ac.bd/sdg_menu_details/20', bn: 'ঢাকা বিশ্ববিদ্যালয়: ২০২৪ সালের জনসাধারণের প্রবেশের বিবরণ', en: 'University of Dhaka: public access report labelled 2024' },
  { href: 'https://www.unesco.org/en/days/mother-language', bn: 'ইউনেস্কো', en: 'UNESCO' },
] as const;

export const GA4_ID = 'G-HXM22WWPKP';
