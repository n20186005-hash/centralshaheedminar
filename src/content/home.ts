import type { Locale } from '../i18n';

export type HomeContent = {
  title: string;
  description: string;
  hero: {
    badge: string;
    headingLead: string;
    headingAccent: string;
    intro: string;
    chips: string[];
    imageAlt: string;
  };
  facts: { type: string; location: string; plusCode: string; duration: string };
  history: {
    label: string;
    title: string;
    lead: string;
    cta: { text: string; href: string };
    cards: { year: string; title: string; text: string }[];
    unesco: { label: string; title: string; text: string; linkText: string; href: string };
  };
  architecture: {
    label: string;
    title: string;
    text: string;
    imageAlt: string;
    facts: { label: string; value: string }[];
  };
  visit: {
    label: string;
    title: string;
    cards: { icon: string; title: string; text: string }[];
    transport: { title: string; items: { title: string; text: string }[] };
    note: string;
  };
  route: { label: string; title: string; text: string; steps: string[] };
  photos: {
    label: string;
    title: string;
    imageAlt: string;
    spots: { label: string; title: string; text: string }[];
    etiquette: { label: string; text: string };
  };
  nearby: {
    label: string;
    title: string;
    places: { title: string; text: string }[];
    food: {
      label: string;
      title: string;
      text: string;
      types: { label: string; value: string }[];
      plan: { title: string; text: string };
    };
  };
  stay: { label: string; title: string; areas: { title: string; text: string }[]; note: string };
  map: { label: string; title: string; iframeTitle: string };
  guides: { label: string; title: string; items: { href: string; title: string; text: string }[] };
  faq: { items: [string, string][] };
};

export const homeContent: Record<Locale, HomeContent> = {
  bn: {
    title: 'কেন্দ্রীয় শহীদ মিনার, ঢাকা — ইতিহাস, যাতায়াত, সময় ও ভ্রমণ নির্দেশিকা',
    description:
      'ঢাকার কেন্দ্রীয় শহীদ মিনার সম্পর্কে ইতিহাস, স্থাপত্য, ১৯৫২-এর ভাষা আন্দোলন, মেট্রো ও রিকশায় যাতায়াত, প্রবেশমূল্য, খোলার সময়, আশপাশের দর্শনীয় স্থান ও ভ্রমণ টিপস।',
    hero: {
      badge: '১৯৫২-এর ভাষা শহীদদের স্মৃতির জাতীয় স্মারক',
      headingLead: 'কেন্দ্রীয়',
      headingAccent: 'শহীদ মিনার',
      intro:
        'একটি স্থাপত্যের চেয়ে বেশি—বাংলা ভাষার মর্যাদা, আত্মত্যাগ এবং সাংস্কৃতিক পরিচয়ের দৃশ্যমান প্রতীক। ঢাকা মেডিকেল কলেজ ও ঢাকা বিশ্ববিদ্যালয় এলাকার হৃদয়ে দাঁড়িয়ে আছে জাতীয় স্মৃতির এই কেন্দ্র।',
      chips: ['Google Maps: ৪.৬/৫ · ২০,৯৫২ · ৩ নভেম্বর ২০২৬', 'প্রবেশের শর্ত নিশ্চিত করুন', 'ঢাকা ১০০০'],
      imageAlt: 'ঢাকার কেন্দ্রীয় শহীদ মিনারের বাস্তব দৃশ্য',
    },
    facts: {
      type: 'ঐতিহাসিক স্মারক',
      location: 'ঢাকা বিশ্ববিদ্যালয় এলাকা',
      plusCode: 'P9GW+VJ, ঢাকা',
      duration: '৩০–৬০ মিনিট',
    },
    history: {
      label: 'কেন এই স্থান গুরুত্বপূর্ণ',
      title: 'ভাষার জন্য জীবন দেওয়ার স্মৃতি',
      lead:
        '১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারি বাংলা ভাষাকে রাষ্ট্রভাষার মর্যাদা দেওয়ার দাবিতে আন্দোলনরত শিক্ষার্থী ও কর্মীদের ওপর গুলি চালানো হয়। ঢাকা মেডিকেল কলেজের কাছেই এই রক্তক্ষয়ী ঘটনার স্মৃতি থেকে শহীদ মিনারের জন্ম।',
      cta: { text: 'বাংলাদেশ ট্যুরিজম বোর্ডের তথ্য →', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      cards: [
        {
          year: '১৯৫২',
          title: 'প্রথম স্মৃতিস্তম্ভ',
          text: 'আন্দোলনের শহীদদের স্মরণে ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা ২৩ ফেব্রুয়ারি একটি অস্থায়ী স্মৃতিস্তম্ভ নির্মাণ করেন। অল্প কয়েক দিনের মধ্যেই পুলিশ সেটি ভেঙে দেয়। তবু স্মরণের ধারণাটি আর মুছে যায়নি।',
        },
        {
          year: '১৯৫৭–১৯৬৩',
          title: 'হামিদুর রহমান ও নভেরা আহমেদের নকশা',
          text: 'শিল্পী-স্থপতি হামিদুর রহমানের নকশা ও ভাস্কর নভেরা আহমেদের সহযোগিতায় স্থায়ী স্মৃতিসৌধ নির্মাণ শুরু হয়। সামরিক শাসনে কাজ থেমে গেলেও পরিবর্তিত নকশায় ১৯৬৩ সালে স্মৃতিসৌধ সম্পন্ন হয়।',
        },
        {
          year: '১৯৭১–১৯৮৩',
          title: 'ধ্বংস, পুনর্নির্মাণ ও সম্প্রসারণ',
          text: 'মুক্তিযুদ্ধের শুরুতে স্মৃতিসৌধটি ধ্বংস করা হয়। স্বাধীনতার পরে আবার নির্মাণ করা হয় এবং ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারণ ঘটে। আজ এটি ভাষা আন্দোলন ও জাতীয় চেতনার কেন্দ্রীয় প্রতীক।',
        },
      ],
      unesco: {
        label: 'বিশ্বজনীন উত্তরাধিকার',
        title: '২১ ফেব্রুয়ারি — আন্তর্জাতিক মাতৃভাষা দিবস',
        text: 'বাংলাদেশের উদ্যোগে ইউনেস্কোর সাধারণ সম্মেলন ১৯৯৯ সালে আন্তর্জাতিক মাতৃভাষা দিবস অনুমোদন করে; ২০০০ সাল থেকে বিশ্বজুড়ে ২১ ফেব্রুয়ারি দিনটি পালিত হচ্ছে।',
        linkText: 'ইউনেস্কোর তথ্য দেখুন',
        href: 'https://www.unesco.org/en/days/mother-language',
      },
    },
    architecture: {
      label: 'স্থাপত্যের ভাষা',
      title: 'সাদা স্তম্ভ, লাল বৃত্ত, শোকের নীরবতা',
      text: 'আধুনিকতাবাদী গঠনভাষায় উঁচু সাদা ফ্রেমগুলো একটি পরিবার—কেন্দ্রে মা, পাশে সন্তানদের—রূপক হিসেবে পড়া হয়। পেছনের লাল সূর্যবৃত্ত রক্ত, উদিত চেতনা ও বাংলার সাংস্কৃতিক প্রতীকের সঙ্গে সংযোগ তৈরি করে।',
      imageAlt: 'কেন্দ্রীয় শহীদ মিনারের সাদা স্তম্ভ ও খোলা প্রাঙ্গণ',
      facts: [
        { label: 'স্থাপত্যধারা', value: 'আধুনিক / স্মারক স্থাপত্য' },
        { label: 'মূল নকশা', value: 'হামিদুর রহমান · নভেরা আহমেদ' },
      ],
    },
    visit: {
      label: 'ভ্রমণ পরিকল্পনা',
      title: 'শ্রদ্ধা ও নীরবতার সঙ্গে দেখুন',
      cards: [
        {
          icon: '🎟️',
          title: 'টিকিট / খরচ',
          text: 'প্রবেশের বর্তমান শর্ত ও ফি আগে যাচাই করুন। ফুল বা যাতায়াতের ব্যক্তিগত খরচ আলাদা হতে পারে।',
        },
        {
          icon: '🕰️',
          title: 'সেরা সময় / কতক্ষণ',
          text: 'সকাল বা বিকেলের নরম আলো আরামদায়ক। সাধারণ ভ্রমণে ৩০–৬০ মিনিট রাখুন। ২১ ফেব্রুয়ারিতে দীর্ঘ অপেক্ষা ও ভিড়ের জন্য বাড়তি সময় ধরুন।',
        },
        {
          icon: '🅿️',
          title: 'পার্কিং',
          text: 'স্মৃতিসৌধে পর্যটকদের জন্য নির্ভরযোগ্য নিজস্ব পার্কিং ধরে পরিকল্পনা করবেন না। বিশ্ববিদ্যালয় ও মেডিকেল এলাকার অনুমোদিত পার্কিং/ড্রপ-অফ ব্যবহার করে হাঁটা বেশি বাস্তবসম্মত।',
        },
      ],
      transport: {
        title: 'বিস্তারিত যাতায়াত',
        items: [
          {
            title: 'মেট্রো',
            text: 'এমআরটি লাইন–৬-এর <strong>ঢাকা বিশ্ববিদ্যালয়</strong> স্টেশনে নামুন। সেখান থেকে বিশ্ববিদ্যালয় এলাকার ভেতর দিয়ে হাঁটা বা রিকশা নিন।',
          },
          {
            title: 'রিকশা / সিএনজি',
            text: 'শাহবাগ, টিএসসি, দোয়েল চত্বর বা ঢাকা বিশ্ববিদ্যালয় এলাকা থেকে “কেন্দ্রীয় শহীদ মিনার” বললেই চালকেরা সাধারণত স্থানটি চেনেন।',
          },
          {
            title: '২১ ফেব্রুয়ারি',
            text: 'বিশেষ দিনে রাস্তা ও প্রবেশপথ নিয়ন্ত্রিত হতে পারে। পুলিশ/কর্তৃপক্ষের নির্ধারিত প্রবেশ–প্রস্থান পথ ও নিরাপত্তা নির্দেশনা অনুসরণ করুন।',
          },
        ],
      },
      note: 'দ্রষ্টব্য: উন্মুক্ত থাকার তথ্য ও যাতায়াত ব্যবস্থা বিশেষ অনুষ্ঠান, নিরাপত্তা নির্দেশনা বা রক্ষণাবেক্ষণের কারণে বদলাতে পারে। যাত্রার আগে বর্তমান অবস্থা যাচাই করা ভালো।',
    },
    route: {
      label: 'একটি সহজ পদচারণা',
      title: 'প্রবেশ → প্রাঙ্গণ → কেন্দ্রীয় স্তম্ভ → নীরব প্রস্থান',
      text: 'প্রথমে সামনের প্রশস্ত ধাপ থেকে পুরো কম্পোজিশন দেখুন। তারপর ধীরে কেন্দ্রীয় স্তম্ভ ও লাল বৃত্তের দিকে এগিয়ে গঠনটি কাছ থেকে দেখুন। ফুল বা স্মরণানুষ্ঠান চললে প্রধান অক্ষ খালি রাখুন এবং দর্শনার্থীর প্রবাহের বিপরীতে দাঁড়াবেন না।',
      steps: [
        'সামনের ধাপ — সামগ্রিক স্থাপত্য পড়ুন',
        'কেন্দ্রীয় অক্ষ — সাদা স্তম্ভ ও লাল বৃত্ত',
        'পাশের কোণ — স্তম্ভের গভীরতা ও ছায়া',
        'প্রস্থান — টিএসসি/কার্জন হলের দিকে হাঁটা',
      ],
    },
    photos: {
      label: 'ছবি তোলা',
      title: 'স্মৃতিস্থলের ছবি কীভাবে তুলবেন',
      imageAlt: 'সামনের দিক থেকে কেন্দ্রীয় শহীদ মিনারের স্তম্ভ',
      spots: [
        {
          label: 'ছবি তোলার জায়গা ০১',
          title: 'সামনের কেন্দ্রীয় অক্ষ',
          text: 'সিঁড়ির নিচের দিক থেকে মাঝ বরাবর ফ্রেম করুন। উল্লম্ব স্তম্ভের সমমিতি ও পেছনের লাল বৃত্ত একই অক্ষে রাখলে স্মৃতিসৌধের প্রতীকী শক্তি স্পষ্ট হয়।',
        },
        {
          label: 'ছবি তোলার জায়গা ০২',
          title: 'হালকা পাশের কোণ',
          text: 'ডান বা বাম পাশ থেকে ৩০–৪৫ ডিগ্রি কোণে দাঁড়ালে ফ্রেমগুলোর স্তর, দূরত্ব ও গভীরতা ধরা পড়ে। বিকেলের তির্যক আলোতে ছায়া বেশি নাটকীয় হয়।',
        },
      ],
      etiquette: {
        label: 'ফটোগ্রাফির শিষ্টাচার',
        text: 'এটি বিনোদনকেন্দ্র নয়, স্মৃতিস্থল। ফুলের বেদি, শোকানুষ্ঠান বা ব্যক্তিগত শ্রদ্ধা নিবেদনের সামনে নাটকীয় পোজ এড়িয়ে চলুন; মানুষকে কাছ থেকে ছবি তুললে সম্মতি নিন।',
      },
    },
    nearby: {
      label: 'আশপাশের দর্শনীয় স্থান',
      title: 'একই হাঁটার পরিধিতে ঢাকার জ্ঞান ও ইতিহাস',
      places: [
        { title: 'কার্জন হল', text: 'ঢাকা বিশ্ববিদ্যালয়ের ঐতিহাসিক লাল-ইটের স্থাপত্য; শহীদ মিনারের সঙ্গে একটি সুন্দর সাংস্কৃতিক হাঁটা তৈরি করে।' },
        { title: 'দোয়েল চত্বর', text: 'বাংলাদেশের জাতীয় পাখির ভাস্কর্য ও ঢাকা বিশ্ববিদ্যালয় এলাকার পরিচিত মোড়।' },
        { title: 'সোহরাওয়ার্দী উদ্যান', text: 'ঐতিহাসিক জনসমাবেশ, স্বাধীনতার স্মৃতি ও সবুজ পরিসরের জন্য গুরুত্বপূর্ণ।' },
        { title: 'বাংলাদেশ জাতীয় জাদুঘর', text: 'শাহবাগে বাংলাদেশের ইতিহাস, শিল্প, প্রত্নতত্ত্ব ও সাংস্কৃতিক উত্তরাধিকার সম্পর্কে গভীরতর প্রেক্ষাপট পাওয়া যায়।' },
      ],
      food: {
        label: 'আশপাশের খাবার',
        title: 'পুরান ঢাকার স্বাদ থেকে ক্যাম্পাসের চা',
        text: 'খাবারের বিরতির জন্য মেডিকেল কলেজ, বিশ্ববিদ্যালয় এলাকা বা শাহবাগে আপনার পথের সঙ্গে মানানসই স্থান খুঁজতে পারেন। এই গাইড কোনো বর্তমান দোকান, মেনু বা খোলার সময় যাচাই করেনি। খাবারের ধরন, মূল্য, খাদ্যসংক্রান্ত চাহিদা ও প্রবেশসুবিধা সরাসরি যাচাই করে পরিকল্পনা করুন।',
        types: [
          { label: 'যাচাই করার নাস্তার ধারণা', value: 'চা · সিঙ্গারা · পরোটা · ভাত' },
          { label: 'যাচাই করার খাবারের ধারণা', value: 'বিরিয়ানি · কাবাব · বাংলা খাবার' },
        ],
        plan: {
          title: 'খাবারের ছোট পরিকল্পনা',
          text: 'শহীদ মিনার, কার্জন হল/দোয়েল চত্বর বা শাহবাগের পরিকল্পনার সঙ্গে খাবারের বিরতি রাখতে পারেন। পথ, বর্তমান প্রবেশ ও খোলা দোকান আগে যাচাই করুন; সবগুলি একই যাত্রায় রাখা জরুরি নয়।',
        },
      },
    },
    stay: {
      label: 'থাকার জায়গা',
      title: 'কোন এলাকায় থাকবেন?',
      areas: [
        { title: 'শাহবাগ', text: 'বিশ্ববিদ্যালয় এলাকা ও জাদুঘর ভ্রমণের পরিকল্পনা করলে থাকার সম্ভাব্য এলাকা হিসেবে তুলনা করুন। নির্দিষ্ট আবাসনের ঠিকানা, বর্তমান যাতায়াত ও হাঁটার পথ যাচাই করুন।' },
        { title: 'মতিঝিল / পল্টন', text: 'শহরের অন্য গন্তব্যের সঙ্গে মিলিয়ে থাকার এলাকা হিসেবে তুলনা করতে পারেন; নির্দিষ্ট ঠিকানা ও বর্তমান যাতায়াত যাচাই করুন।' },
        { title: 'ধানমন্ডি', text: 'থাকার বিকল্প খুঁজলে এই এলাকাও তুলনায় রাখতে পারেন। বর্তমান প্রাপ্যতা, যাতায়াতের খরচ ও যানজট বিবেচনা করুন; স্বল্প যাত্রা ধরে নেবেন না।' },
      ],
      note: 'হোটেলের নাম, মূল্য ও কক্ষের প্রাপ্যতা দ্রুত বদলায়—বুকিংয়ের সময় সাম্প্রতিক রেটিং, বাতিলের নীতি ও যাতায়াতের সময় যাচাই করুন।',
    },
    map: {
      label: 'মানচিত্র ও ঠিকানা',
      title: 'ঢাকা মেডিকেল কলেজের কাছে',
      iframeTitle: 'কেন্দ্রীয় শহীদ মিনার — গুগল মানচিত্র',
    },
    guides: {
      label: 'বিস্তারিত গাইড',
      title: 'গভীরে যেতে চাইলে',
      items: [
        { href: '/history/', title: 'ইতিহাস ও অর্থ', text: '১৯৫২-এর ভাষা আন্দোলন, স্মৃতিসৌধ নির্মাণের সময়রেখা ও আন্তর্জাতিক মাতৃভাষা দিবস।' },
        { href: '/visit/', title: 'কীভাবে যাবেন', text: 'মেট্রো, রিকশা, খোলার সময়, প্রবেশমূল্য, কতক্ষণ দেখবেন ও শিষ্টাচার।' },
        { href: '/nearby/', title: 'আশেপাশে কী দেখবেন', text: 'কার্জন হল, দোয়েল চত্বর, সোহরাওয়ার্দী উদ্যান, জাতীয় জাদুঘর, খাবার ও থাকার জায়গা।' },
      ],
    },
    faq: {
      items: [
        [
          'কেন্দ্রীয় শহীদ মিনারে প্রবেশের টিকিট লাগে কি?',
          'ঢাকা বিশ্ববিদ্যালয়ের ২০২৪ সালের বিবরণ জনসাধারণের প্রবেশের কথা বলে। বর্তমান ফি বা প্রবেশের শর্ত নিশ্চিত করে না; যাত্রার আগে কর্তৃপক্ষের নির্দেশনা যাচাই করুন।',
        ],
        [
          'কেন্দ্রীয় শহীদ মিনার কি ২৪ ঘণ্টা দেখা যায়?',
          '৩ নভেম্বর ২০২৬ যাচাই করা মূল Google Maps তালিকায় সময় ছিল না। পাশের অন্য কোনো স্থাপনার ২৪ ঘণ্টার তালিকা এই স্মৃতিসৌধের সময় নয়। বর্তমান প্রবেশের সময় ও নিয়ন্ত্রণ নিশ্চিত করুন।',
        ],
        [
          'মেট্রোরেলে কীভাবে যাব?',
          'এমআরটি লাইন–৬-এর ঢাকা বিশ্ববিদ্যালয় স্টেশন সবচেয়ে সুবিধাজনক বিকল্পগুলোর একটি। সেখান থেকে বিশ্ববিদ্যালয় এলাকার ভেতর দিয়ে হেঁটে বা অল্প দূরত্ব রিকশায় শহীদ মিনারে পৌঁছানো যায়।',
        ],
        [
          'কতক্ষণ সময় রাখলে ভালো?',
          'শুধু স্মৃতিসৌধ দেখা ও শ্রদ্ধা জানানোর জন্য প্রায় ২০–৩০ মিনিট যথেষ্ট। ইতিহাস, স্থাপত্য ও আশপাশের বিশ্ববিদ্যালয় এলাকা ধীরে দেখলে ৪৫–৬০ মিনিট রাখুন।',
        ],
        [
          '২১ ফেব্রুয়ারিতে গেলে কী জানা দরকার?',
          'একুশে ফেব্রুয়ারিতে বিপুল জনসমাগম, ফুল দিয়ে শ্রদ্ধা নিবেদন এবং বিশেষ নিরাপত্তা ব্যবস্থা থাকে। নির্ধারিত প্রবেশ ও প্রস্থান পথ অনুসরণ করুন এবং সরকারি নির্দেশনা মেনে চলুন।',
        ],
        [
          'ছবি তোলার সেরা সময় কখন?',
          'সকাল বা বিকেলের নরম আলোতে সাদা স্তম্ভ, লাল বৃত্ত ও সামনের ধাপগুলোর রেখা সবচেয়ে পরিষ্কার ফুটে ওঠে। শ্রদ্ধা নিবেদনের সময় অন্য দর্শনার্থীর ব্যক্তিগত পরিসর সম্মান করুন।',
        ],
        [
          'কেন্দ্রীয় শহীদ মিনার কীসের প্রতীক?',
          'এটি ১৯৫২ সালের ভাষা আন্দোলনে শহীদদের স্মৃতির জাতীয় প্রতীক। মাতৃভাষার মর্যাদা ও সাংস্কৃতিক পরিচয়ের এই দাবি থেকেই বাংলাদেশের রাষ্ট্রীয় চেতনা গড়ে উঠেছে।',
        ],
        [
          'সবচেয়ে কাছের মেট্রো স্টেশন কোনটি?',
          'এমআরটি লাইন–৬-এর ঢাকা বিশ্ববিদ্যালয় স্টেশন বেশিরভাগ দর্শনার্থীর জন্য সবচেয়ে ব্যবহারিক। স্টেশন থেকে বিশ্ববিদ্যালয় এলাকা হয়ে কম সময়ে স্মৃতিসৌধে পৌঁছানো যায়।',
        ],
      ],
    },
  },

  en: {
    title: 'Central Shaheed Minar, Dhaka — History, How to Reach, Timings & Travel Guide',
    description:
      'Central Shaheed Minar in Dhaka: the 1952 Language Movement monument — history, architecture, how to reach by MRT Line 6, entry fee, opening hours, nearby attractions and visitor etiquette.',
    hero: {
      badge: 'National memorial to the language martyrs of 1952',
      headingLead: 'Central',
      headingAccent: 'Shaheed Minar',
      intro:
        'More than a structure: the visible symbol of the dignity of the Bengali language, of sacrifice and of cultural identity. It stands at the heart of the Dhaka Medical College and University of Dhaka area.',
      chips: ['Google Maps: 4.6/5 · 20,952 · 3 November 2026', 'Confirm access conditions', 'Dhaka 1000'],
      imageAlt: 'Central Shaheed Minar in Dhaka',
    },
    facts: {
      type: 'Historical landmark',
      location: 'University of Dhaka area',
      plusCode: 'P9GW+VJ, Dhaka',
      duration: '30–60 minutes',
    },
    history: {
      label: 'Why this place matters',
      title: 'A memorial to those who gave their lives for their language',
      lead:
        'On 21 and 22 February 1952, students and activists demanding official status for Bengali were shot by police near Dhaka Medical College. The Shaheed Minar was born out of that bloodshed.',
      cta: { text: 'Bangladesh Tourism Board →', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      cards: [
        {
          year: '1952',
          title: 'The first memorial',
          text: 'Students of Dhaka Medical College built a temporary monument on 23 February to honour the martyrs. Police demolished it within days, yet the idea of remembrance could not be erased.',
        },
        {
          year: '1957–1963',
          title: 'Designed by Hamidur Rahman and Novera Ahmed',
          text: 'Work on the permanent monument began with a design by artist-architect Hamidur Rahman, with sculptor Novera Ahmed collaborating. Martial law interrupted it; a modified design was completed in 1963.',
        },
        {
          year: '1971–1983',
          title: 'Destruction, rebuilding and expansion',
          text: 'The monument was destroyed at the start of the Liberation War, rebuilt after independence and expanded to its present scale in 1983. It is now the central symbol of the Language Movement.',
        },
      ],
      unesco: {
        label: 'Worldwide legacy',
        title: '21 February — International Mother Language Day',
        text: 'At Bangladesh’s initiative, the UNESCO General Conference approved International Mother Language Day in 1999; 21 February has been observed worldwide since 2000.',
        linkText: 'See UNESCO’s page',
        href: 'https://www.unesco.org/en/days/mother-language',
      },
    },
    architecture: {
      label: 'The language of the architecture',
      title: 'White columns, a red circle, the silence of mourning',
      text: 'In a modernist vocabulary, the tall white frames are read as a family — a mother at the centre, her children beside her. The red sun disc behind them links blood, awakening and Bengali cultural symbolism.',
      imageAlt: 'The white columns and open courtyard of the Central Shaheed Minar',
      facts: [
        { label: 'Style', value: 'Modernist memorial architecture' },
        { label: 'Original design', value: 'Hamidur Rahman · Novera Ahmed' },
      ],
    },
    visit: {
      label: 'Planning your visit',
      title: 'Visit with respect and in silence',
      cards: [
        {
          icon: '🎟️',
          title: 'Tickets / cost',
          text: 'Confirm current entry conditions and any charges before travelling. Flowers and transport may involve separate personal expenses.',
        },
        {
          icon: '🕰️',
          title: 'Best time / how long',
          text: 'Soft morning or late-afternoon light is most comfortable. Allow 30–60 minutes for a normal visit, and much longer on 21 February because of crowds and queues.',
        },
        {
          icon: '🅿️',
          title: 'Parking',
          text: 'Do not plan around dedicated visitor parking at the monument. Using authorised parking or a drop-off in the university and medical college area and walking is more realistic.',
        },
      ],
      transport: {
        title: 'Getting here in detail',
        items: [
          {
            title: 'Metro',
            text: 'Get off at <strong>Dhaka University</strong> station on MRT Line 6. From there walk through the university area or take a short rickshaw ride.',
          },
          {
            title: 'Rickshaw / CNG',
            text: 'From Shahbagh, TSC, Doel Chattar or the University of Dhaka area, simply saying “Central Shaheed Minar” is usually enough for drivers.',
          },
          {
            title: '21 February',
            text: 'Roads and entry points may be regulated on the day. Follow the entry and exit routes and security instructions set by the police and authorities.',
          },
        ],
      },
      note: 'Note: opening arrangements and transport access can change because of special programmes, security instructions or maintenance. Check current conditions before you travel.',
    },
    route: {
      label: 'A simple walking order',
      title: 'Entrance → courtyard → central column → quiet exit',
      text: 'First read the whole composition from the broad front steps. Then walk slowly towards the central column and the red disc to see the structure up close. When flowers or commemorations are taking place, keep the main axis clear and do not stand against the flow of visitors.',
      steps: [
        'Front steps — read the whole composition',
        'Central axis — white columns and the red disc',
        'Side angle — depth and shadow of the columns',
        'Exit — walk towards TSC / Curzon Hall',
      ],
    },
    photos: {
      label: 'Photography',
      title: 'How to photograph a place of remembrance',
      imageAlt: 'The columns of the Central Shaheed Minar seen from the front',
      spots: [
        {
          label: 'Photo spot 01',
          title: 'Front central axis',
          text: 'Frame from the bottom of the steps, keeping the symmetry of the vertical columns and the red disc behind them on one axis — this is where the symbolic power of the monument reads best.',
        },
        {
          label: 'Photo spot 02',
          title: 'Slight side angle',
          text: 'Standing 30–45 degrees to the left or right reveals the layering, spacing and depth of the frames. Late-afternoon raking light makes the shadows more dramatic.',
        },
      ],
      etiquette: {
        label: 'Photography etiquette',
        text: 'This is a place of remembrance, not an entertainment venue. Avoid dramatic poses in front of flower tributes, mourning ceremonies or private acts of respect, and ask consent before photographing people close up.',
      },
    },
    nearby: {
      label: 'Nearby attractions',
      title: 'Dhaka’s knowledge and history within one walk',
      places: [
        { title: 'Curzon Hall', text: 'The historic red-brick building of the University of Dhaka; it pairs beautifully with the Shaheed Minar on a cultural walk.' },
        { title: 'Doel Chattar', text: 'The sculpture of Bangladesh’s national bird and a well-known crossing in the university area.' },
        { title: 'Suhrawardy Udyan', text: 'Important for historic mass gatherings, memories of the Liberation War and open green space.' },
        { title: 'Bangladesh National Museum', text: 'In Shahbagh, it gives deeper context on Bangladesh’s history, art, archaeology and cultural heritage.' },
      ],
      food: {
        label: 'Food nearby',
        title: 'From Old Dhaka flavours to campus tea',
        text: 'Consider looking for a meal stop around the medical college, university area or Shahbagh if it fits your route. This guide has not verified current venues, menus or opening hours. Check the actual address, menu, price, dietary needs and access before choosing.',
        types: [
          { label: 'Meal ideas to check', value: 'Tea · singara · paratha · rice' },
          { label: 'Other meal ideas', value: 'Biryani · kebab · Bengali meals' },
        ],
        plan: {
          title: 'A short food plan',
          text: 'You could include a meal break when planning Shaheed Minar, Curzon Hall / Doel Chattar or Shahbagh. Check the route, access and an open venue separately; you do not need to combine every stop.',
        },
      },
    },
    stay: {
      label: 'Where to stay',
      title: 'Which area should you base yourself in?',
      areas: [
        { title: 'Shahbagh', text: 'An area to compare if your plans include the university and museum. Check the exact accommodation address, current transport and walking conditions.' },
        { title: 'Motijheel / Paltan', text: 'Compare this area with your other city destinations, checking exact accommodation addresses and current transport.' },
        { title: 'Dhanmondi', text: 'Another area to compare when searching for accommodation. Verify availability, transport cost and traffic; do not assume a short journey.' },
      ],
      note: 'Hotel names, prices and room availability change quickly — check recent ratings, cancellation policies and the actual commute to the university area before booking.',
    },
    map: {
      label: 'Map and address',
      title: 'Near Dhaka Medical College',
      iframeTitle: 'Central Shaheed Minar — Google Maps',
    },
    guides: {
      label: 'In-depth guides',
      title: 'Go deeper',
      items: [
        { href: '/history/', title: 'History and meaning', text: 'The 1952 Language Movement, the timeline of the monument and International Mother Language Day.' },
        { href: '/visit/', title: 'How to get here', text: 'Metro, rickshaw, opening hours, entry fee, how long to stay and etiquette.' },
        { href: '/nearby/', title: 'What to see nearby', text: 'Curzon Hall, Doel Chattar, Suhrawardy Udyan, the National Museum, food and where to stay.' },
      ],
    },
    faq: {
      items: [
        [
          'Is there an entry fee for the Central Shaheed Minar?',
          'A University of Dhaka report labelled 2024 describes public access, but does not confirm current fees or entry conditions. Check current authority instructions before travelling.',
        ],
        [
          'Is the Central Shaheed Minar open 24 hours?',
          'The main Google Maps listing checked on 3 November 2026 supplied no hours. A nearby separate shrine listing is not evidence of this monument being open 24 hours. Confirm current visiting arrangements.',
        ],
        [
          'How do I get there by metro?',
          'Dhaka University station on MRT Line 6 is one of the most convenient options. From there you can walk through the university area or take a short rickshaw ride to the Shaheed Minar.',
        ],
        [
          'How much time should I allow?',
          'About 20–30 minutes is enough to see the monument and pay respects. If you want to take in the history, the architecture and the surrounding university area slowly, allow 45–60 minutes.',
        ],
        [
          'What should I know about visiting on 21 February?',
          'Ekushey February brings huge crowds, flower tributes and special security arrangements. Follow the designated entry and exit routes and official instructions.',
        ],
        [
          'When is the best time for photographs?',
          'In soft morning or afternoon light the white columns, the red disc and the lines of the front steps read most clearly. Respect other visitors’ privacy while tributes are being paid.',
        ],
        [
          'What does the Central Shaheed Minar symbolise?',
          'It is the national symbol of those martyred in the 1952 Language Movement. The demand for the dignity of the mother tongue and cultural identity shaped Bangladesh’s national consciousness.',
        ],
        [
          'Which metro station is closest?',
          'Dhaka University station on MRT Line 6 is the most practical for most visitors; from the station it is a short walk through the university area to the monument.',
        ],
      ],
    },
  },
};
