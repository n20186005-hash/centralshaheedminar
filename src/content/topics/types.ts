import type { Locale } from '../../i18n';

/** সাইটের আটটি বিষয়-শ্রেণি। */
export type TopicSection = 'history' | 'visit' | 'guides' | 'nearby' | 'itineraries' | 'food' | 'planning' | 'stay';

export type TopicSrc = { label: string; href: string };

export type TopicLocaleContent = {
  /** `withSiteName()` দিয়ে যোগ হবে। */
  seoTitle: string;
  description: string;
  h1: string;
  /** পাতার শুরুতে সরাসরি উত্তর। */
  lead: string;
  facts: { label: string; value: string }[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq: [string, string][];
  sources: TopicSrc[];
};

export type Topic = {
  /** ভাষা-নিরপেক্ষ পথ, যেমন 'history/language-movement-1952'; en সংস্করণ /en/ নিচে একই slug। */
  path: string;
  section: TopicSection;
  priority: 'P0' | 'P1' | 'P2';
  /** সম্পর্কিত বিষয়ের পথ, ২–৪টি contextual internal link। */
  related: string[];
  bn: TopicLocaleContent;
  en: TopicLocaleContent;
};

export type { Locale };
