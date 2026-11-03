import type { Locale } from '../i18n';

export type GuideId = 'history' | 'visit' | 'nearby';

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GuideContent = {
  /** bn পাতার পথ; en পাতা একই slug-এর /en/ সংস্করণ। */
  slug: GuideId;
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: GuideSection[];
  faq: [string, string][];
};

/** হেডার ও পাদচরণে ব্যবহারের জন্য ছোট নেভিগেশন লেবেল। */
export const guideNavLabel: Record<GuideId, Record<Locale, string>> = {
  history: { bn: 'ইতিহাস', en: 'History' },
  visit: { bn: 'যাতায়াত', en: 'Getting here' },
  nearby: { bn: 'আশপাশ', en: 'Nearby' },
};

export const guides: Record<GuideId, Record<Locale, GuideContent>> = {
  history: {
    bn: {
      slug: 'history',
      title: 'কেন্দ্রীয় শহীদ মিনারের ইতিহাস — ১৯৫২-এর ভাষা আন্দোলন ও স্মৃতিসৌধ',
      description:
        '১৯৫২ সালের ভাষা আন্দোলন, প্রথম অস্থায়ী স্মৃতিস্তম্ভ, হামিদুর রহমান ও নভেরা আহমেদের নকশা, ১৯৭১-এর ধ্বংস ও পুনর্নির্মাণ এবং আন্তর্জাতিক মাতৃভাষা দিবস—শহীদ মিনারের পুরো ইতিহাস।',
      h1: 'কেন্দ্রীয় শহীদ মিনারের ইতিহাস',
      lead:
        'ঢাকার কেন্দ্রীয় শহীদ মিনার কোনো সাধারণ নিদর্শন নয়—এটি মাতৃভাষার মর্যাদার দাবিতে প্রাণ দেওয়া মানুষদের স্মৃতিতে গড়া জাতীয় প্রতীক। নিচের সময়রেখা ১৯৫২ থেকে বর্তমান পর্যন্ত সেই স্মৃতির যাত্রা।',
      sections: [
        {
          heading: '১৯৫২: যেদিন থেকে শুরু',
          paragraphs: [
            '১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারি বাংলাকে রাষ্ট্রভাষার মর্যাদা দেওয়ার দাবিতে আন্দোলনরত ছাত্র-জনতার ওপর পুলিশ গুলি চালায়। ঢাকা মেডিকেল কলেজের কাছেই এই ঘটনা ঘটে, আর এই রক্তক্ষয়ী স্মৃতি থেকেই শহীদ মিনারের ধারণা জন্ম নেয়।',
            'ভাষার দাবিটি ছিল সাংস্কৃতিক ও রাজনৈতিক—তৎকালীন পাকিস্তানের রাষ্ট্রভাষা নীতির বিরুদ্ধে বাংলাভাষী মানুষের পরিচয় রক্ষার সংগ্রাম।',
          ],
        },
        {
          heading: 'প্রথম স্মৃতিস্তম্ভ ও তার ভাঙা',
          paragraphs: [
            '২৩ ফেব্রুয়ারি ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা রাতারাতি একটি অস্থায়ী স্মৃতিস্তম্ভ তৈরি করেন। অল্প কয়েক দিনের মধ্যেই পুলিশ সেটি ভেঙে দেয়; বিভিন্ন সূত্রে ভাঙার সুনির্দিষ্ট তারিখে সামান্য ভিন্নতা আছে।',
            'তবু স্মরণের ধারণাটি মুছে যায়নি—বারবার স্মৃতিস্তম্ভ গড়ার দাবি জাতীয় আন্দোলনের রূপ নেয়।',
          ],
        },
        {
          heading: '১৯৫৭–১৯৬৩: স্থায়ী স্মৃতিসৌধ',
          paragraphs: [
            'স্থায়ী স্মৃতিসৌধের কাজ শুরু হয় শিল্পী-স্থপতি হামিদুর রহমানের নকশায়; ভাস্কর নভেরা আহমেদ সহযোগিতা করেন। সামরিক শাসনের সময় কাজ থেমে যায় এবং পরে পরিবর্তিত নকশায় কাজ শেষ হয় ১৯৬৩ সালে।',
            'উঁচু সাদা ফ্রেম ও পেছনের লাল সূর্যবৃত্ত—এই গঠনভাষাই পরবর্তীতে বাংলার সাংস্কৃতিক প্রতীক হয়ে ওঠে।',
          ],
          bullets: [
            'নকশা: হামিদুর রহমান (স্থপতি-শিল্পী)',
            'ভাস্কর্য সহযোগিতা: নভেরা আহমেদ',
            'নির্মাণ শুরু: ১৯৫৭ · সমাপ্ত: ১৯৬৩',
          ],
        },
        {
          heading: '১৯৭১ ও তার পর: ধ্বংস, পুনর্নির্মাণ, সম্প্রসারণ',
          paragraphs: [
            'মুক্তিযুদ্ধের শুরুতে পাকিস্তানি বাহিনী স্মৃতিসৌধটি ধ্বংস করে। স্বাধীনতার পরে এটি আবার নির্মাণ করা হয় এবং ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারিত করা হয়।',
            'আজ এই কাঠামো ভাষা আন্দোলন ও জাতীয় চেতনার কেন্দ্রীয় প্রতীক—এবং প্রতি বছর একুশে ফেব্রুয়ারিতে দেশের সবচেয়ে বড় শ্রদ্ধা নিবেদনের স্থান।',
          ],
        },
        {
          heading: 'আন্তর্জাতিক মাতৃভাষা দিবস',
          paragraphs: [
            'বাংলাদেশের উদ্যোগে ইউনেস্কোর সাধারণ সম্মেলন ১৯৯৯ সালে ২১ ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে অনুমোদন করে; ২০০০ সাল থেকে দিনটি বিশ্বজুড়ে পালিত হচ্ছে।',
            'দিনটির আগের রাত থেকে স্মৃতিসৌধে ফুল ও শ্রদ্ধা নিবেদনের ধারা শুরু হয়, এবং সকালে রাষ্ট্রীয় ও জনসাধারণের অনুষ্ঠান হয়।',
          ],
        },
      ],
      faq: [
        ['কেন্দ্রীয় শহীদ মিনার কবে নির্মিত হয়?', 'স্থায়ী স্মৃতিসৌধের কাজ ১৯৫৭ সালে শুরু হয়ে ১৯৬৩ সালে সম্পন্ন হয়; ১৯৭১-এ ধ্বংসের পর পুনর্নির্মিত হয় এবং ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারিত হয়।'],
        ['স্মৃতিসৌধের নকশা কারা করেন?', 'স্থপতি-শিল্পী হামিদুর রহমান মূল নকশা করেন; ভাস্কর নভেরা আহমেদ সহযোগিতা করেন।'],
        ['ভাষা আন্দোলনের সঙ্গে এটির সম্পর্ক কী?', '১৯৫২ সালের ২১–২২ ফেব্রুয়ারি বাংলাকে রাষ্ট্রভাষার মর্যাদার দাবিতে আন্দোলনকারীদের ওপর গুলিবর্ষণের শহীদদের স্মৃতিতেই এই স্মৃতিসৌধ গড়া হয়।'],
        ['আন্তর্জাতিক মাতৃভাষা দিবস কেন ২১ ফেব্রুয়ারি?', 'ভাষা আন্দোলনের স্মরণে বাংলাদেশের উদ্যোগে ইউনেস্কো ১৯৯৯ সালে এই দিনটি অনুমোদন করে; ২০০০ সাল থেকে বিশ্বব্যাপী পালিত হচ্ছে।'],
      ],
    },
    en: {
      slug: 'history',
      title: 'Central Shaheed Minar History — The 1952 Language Movement Monument',
      description:
        'The history of the Central Shaheed Minar in Dhaka: the 1952 Language Movement, the first temporary monument, the design by Hamidur Rahman and Novera Ahmed, destruction in 1971 and rebuilding, and International Mother Language Day.',
      h1: 'History of the Central Shaheed Minar',
      lead:
        'The Central Shaheed Minar is not an ordinary landmark. It is the national symbol built in memory of those who gave their lives demanding dignity for their mother tongue. The timeline below follows that memory from 1952 to today.',
      sections: [
        {
          heading: '1952: where it began',
          paragraphs: [
            'On 21 and 22 February 1952, police fired on students and activists demanding that Bengali be made a state language. The shootings happened close to Dhaka Medical College, and the idea of the Shaheed Minar was born from that bloodshed.',
            'The demand was cultural as much as political: Bengali speakers were defending their identity against the language policy of the then Pakistan state.',
          ],
        },
        {
          heading: 'The first monument and its demolition',
          paragraphs: [
            'On 23 February, students of Dhaka Medical College built a temporary monument overnight. Police demolished it within a few days; sources differ slightly on the exact date of the demolition.',
            'The idea of remembrance, however, could not be erased — the demand to rebuild a monument became a national movement.',
          ],
        },
        {
          heading: '1957–1963: the permanent monument',
          paragraphs: [
            'Work on the permanent monument began with a design by the artist-architect Hamidur Rahman, with sculptor Novera Ahmed collaborating. Martial law halted the work, and a modified design was completed in 1963.',
            'The tall white frames and the red sun disc behind them became the architectural language of Bengali cultural symbolism.',
          ],
          bullets: ['Design: Hamidur Rahman (artist-architect)', 'Sculptural collaboration: Novera Ahmed', 'Construction: started 1957 · completed 1963'],
        },
        {
          heading: '1971 and after: destruction, rebuilding, expansion',
          paragraphs: [
            'The monument was destroyed at the start of the Liberation War in 1971. It was rebuilt after independence and expanded to its present scale in 1983.',
            'Today the structure is the central symbol of the Language Movement and the country’s national consciousness — and every year it is the focal point of the largest tribute on Ekushey February.',
          ],
        },
        {
          heading: 'International Mother Language Day',
          paragraphs: [
            'At Bangladesh’s initiative, the UNESCO General Conference approved 21 February as International Mother Language Day in 1999; it has been observed worldwide since 2000.',
            'Tributes of flowers at the monument begin the night before, and state and public ceremonies are held in the morning.',
          ],
        },
      ],
      faq: [
        ['When was the Central Shaheed Minar built?', 'Work on the permanent monument began in 1957 and was completed in 1963; after being destroyed in 1971 it was rebuilt and expanded to its present scale in 1983.'],
        ['Who designed the monument?', 'The main design was by the artist-architect Hamidur Rahman, with sculptor Novera Ahmed collaborating.'],
        ['How is it connected to the Language Movement?', 'It was built in memory of those martyred on 21–22 February 1952, when protesters demanding state-language status for Bengali were shot.'],
        ['Why is International Mother Language Day on 21 February?', 'At Bangladesh’s initiative UNESCO approved the date in 1999 in memory of the Language Movement, and it has been observed worldwide since 2000.'],
      ],
    },
  },

  visit: {
    bn: {
      slug: 'visit',
      title: 'কেন্দ্রীয় শহীদ মিনার কীভাবে যাবেন — প্রবেশ যাচাই, মেট্রো ও শিষ্টাচার',
      description:
        'কেন্দ্রীয় শহীদ মিনারে যাতায়াত: এমআরটি লাইন–৬-এর ঢাকা বিশ্ববিদ্যালয় স্টেশন, রিকশা/সিএনজি, প্রবেশমূল্য, খোলার সময়, কতক্ষণ দেখবেন, পার্কিং, ২১ ফেব্রুয়ারির ব্যবস্থা ও শিষ্টাচার।',
      h1: 'কেন্দ্রীয় শহীদ মিনার: কীভাবে যাবেন',
      lead:
        'স্মৃতিসৌধটি ঢাকা মেডিকেল কলেজ গেটের কাছে, সেক্রেটারিয়েট রোডে—ঢাকা বিশ্ববিদ্যালয় এলাকার হাঁটার দূরত্বে। নিচে সময়, প্রবেশমূল্য, মেট্রো ও রিকশা রুট এবং বিশেষ দিনের ব্যবস্থা একসাথে দেওয়া আছে।',
      sections: [
        {
          heading: 'ঠিকানা ও স্থানাঙ্ক',
          paragraphs: [
            'ঠিকানা: ঢাকা মেডিকেল কলেজ গেটের কাছে, সেক্রেটারিয়েট রোড, ঢাকা ১০০০। প্লাস কোড: P9GW+VJ, ঢাকা। স্থানাঙ্ক: ২৩.৭২৭২৩৮, ৯০.৩৯৬৬২৫।',
          ],
        },
        {
          heading: 'খোলার সময় ও প্রবেশমূল্য',
          paragraphs: [
            '৩ নভেম্বর ২০২৬ যাচাই করা মূল Google Maps তালিকায় খোলার সময় দেওয়া ছিল না। ঢাকা বিশ্ববিদ্যালয়ের ২০২৪ সালের বিবরণ জনসাধারণের প্রবেশের কথা বলে, কিন্তু বর্তমান ঘণ্টা বা ফি নিশ্চিত করে না। যাওয়ার আগে বর্তমান প্রবেশের শর্ত যাচাই করুন।',
            'দীর্ঘ ছুটি বা বিশেষ তারিখে যাওয়ার আগে সেদিনের ব্যবস্থা যাচাই করাই নিরাপদ।',
          ],
        },
        {
          heading: 'মেট্রোরেলে যাতায়াত',
          paragraphs: [
            'এমআরটি লাইন–৬-এর ঢাকা বিশ্ববিদ্যালয় স্টেশনে নেমে বিশ্ববিদ্যালয় এলাকার ভেতর দিয়ে হাঁটুন, অথবা অল্প দূরত্বে রিকশা নিন। এটি বেশিরভাগ দর্শনার্থীর জন্য সবচেয়ে সহজ ও অনুমানযোগ্য পথ।',
          ],
          bullets: [
            'নামবেন: ঢাকা বিশ্ববিদ্যালয় স্টেশন (MRT Line 6)',
            'সেখান থেকে: হাঁটা / রিকশা / সিএনজি',
            'চিহ্ন: ঢাকা মেডিকেল কলেজ গেটের দিকে সেক্রেটারিয়েট রোড',
          ],
        },
        {
          heading: 'রিকশা, সিএনজি ও গাড়ি',
          paragraphs: [
            'শাহবাগ, টিএসসি, দোয়েল চত্বর বা ঢাকা বিশ্ববিদ্যালয় এলাকা থেকে “কেন্দ্রীয় শহীদ মিনার” বললেই চালকেরা সাধারণত স্থানটি চেনেন।',
            'নিজস্ব পর্যটক পার্কিংয়ের ওপর ভরসা করবেন না; বিশ্ববিদ্যালয় ও মেডিকেল এলাকার অনুমোদিত পার্কিং বা ড্রপ-অফ ব্যবহার করে হাঁটাই বেশি বাস্তবসম্মত।',
          ],
        },
        {
          heading: 'কতক্ষণ ও সেরা সময়',
          paragraphs: [
            'শুধু স্মৃতিসৌধ দেখা ও শ্রদ্ধা জানাতে ২০–৩০ মিনিট যথেষ্ট। ইতিহাস ও স্থাপত্য ধীরে দেখলে ৪৫–৬০ মিনিট রাখুন; আশপাশের কার্জন হল বা দোয়েল চত্বর যোগ করলে আরও সময় লাগবে।',
            'সকাল বা বিকেলের নরম আলোতে সাদা স্তম্ভ ও লাল বৃত্ত সবচেয়ে ভালো দেখায়, আর গরম কম থাকে।',
          ],
        },
        {
          heading: '২১ ফেব্রুয়ারি ও বিশেষ দিন',
          paragraphs: [
            'একুশে ফেব্রুয়ারিতে বিপুল জনসমাগম, ফুল দিয়ে শ্রদ্ধা নিবেদন এবং বিশেষ নিরাপত্তা ব্যবস্থা থাকে; রাস্তা ও প্রবেশপথ নিয়ন্ত্রিত হতে পারে।',
            'নির্ধারিত প্রবেশ ও প্রস্থান পথ অনুসরণ করুন, পুলিশ/কর্তৃপক্ষের নির্দেশনা মানুন এবং অতিরিক্ত সময় রেখে বের হন।',
          ],
        },
        {
          heading: 'শিষ্টাচার ও নিরাপত্তা',
          paragraphs: [
            'এটি বিনোদনকেন্দ্র নয়—স্মৃতিস্থল। নীরবতা বজায় রাখুন, ফুলের বেদির সামনে নাটকীয় পোজ এড়িয়ে চলুন এবং মানুষকে কাছ থেকে ছবি তুললে সম্মতি নিন।',
            'ব্যস্ত সময়ে সঙ্গীদের সাথে একটি মিলনস্থান আগেই ঠিক করে নিন; ভিড়ে মোবাইল নেটওয়ার্ক ধীর হতে পারে।',
          ],
        },
      ],
      faq: [
        ['প্রবেশের টিকিট লাগে কি?', 'বর্তমান ফি বা প্রবেশের শর্ত নির্ভরযোগ্য প্রকাশিত সূত্রে নিশ্চিত করা যায়নি। বিশেষ অনুষ্ঠান ও নিরাপত্তার নির্দেশনা আগে যাচাই করুন।'],
        ['সবচেয়ে কাছের মেট্রো স্টেশন কোনটি?', 'এমআরটি লাইন–৬-এর ঢাকা বিশ্ববিদ্যালয় স্টেশন—সেখান থেকে হাঁটা বা স্বল্প রিকশা যাত্রা।'],
        ['কখন যাওয়া সবচেয়ে ভালো?', 'সকাল বা বিকেল—আলো নরম ও গরম কম। ২১ ফেব্রুয়ারিতে ভিড় ও নিরাপত্তা ব্যবস্থার জন্য বাড়তি সময় রাখুন।'],
        ['কতক্ষণ দেখা উচিত?', 'সংক্ষিপ্ত শ্রদ্ধা নিবেদনে ২০–৩০ মিনিট; ইতিহাস, স্থাপত্য ও আশপাশ মিলিয়ে ৪৫–৬০ মিনিট।'],
        ['গাড়ি পার্কিং আছে কি?', 'এই গাইডে বর্তমান নির্দিষ্ট পর্যটক পার্কিংয়ের ব্যবস্থা নিশ্চিত করা হয়নি। বৈধ পার্কিং বা নামার স্থান আগে যাচাই করুন।'],
      ],
    },
    en: {
      slug: 'visit',
      title: 'Visit Central Shaheed Minar — Access Checks, MRT & Etiquette',
      description:
        'How to get to the Central Shaheed Minar: Dhaka University station on MRT Line 6, rickshaw and CNG options, entry fee, opening hours, how long to allow, parking, 21 February arrangements and visitor etiquette.',
      h1: 'How to visit the Central Shaheed Minar',
      lead:
        'The monument stands near the Dhaka Medical College gate on Secretariat Road, within walking distance of the University of Dhaka area. Use this guide to check access conditions, consider transport options and prepare for special days.',
      sections: [
        {
          heading: 'Address and coordinates',
          paragraphs: [
            'Address: near Dhaka Medical College Gate, Secretariat Road, Dhaka 1000. Plus code: P9GW+VJ, Dhaka. Coordinates: 23.727238, 90.396625.',
          ],
        },
        {
          heading: 'Opening hours and entry fee',
          paragraphs: [
            'The main Google Maps listing checked on 3 November 2026 supplied no opening hours. A University of Dhaka report labelled 2024 describes public access, but does not establish current hours or fees. Confirm current access arrangements before travelling.',
            'On long holidays or special dates it is safer to check that day’s arrangements before setting out.',
          ],
        },
        {
          heading: 'Getting there by metro',
          paragraphs: [
            'Get off at Dhaka University station on MRT Line 6 and walk through the university area, or take a short rickshaw ride. For most visitors this is the easiest and most predictable route.',
          ],
          bullets: [
            'Get off at: Dhaka University station (MRT Line 6)',
            'Then: walk / rickshaw / CNG auto-rickshaw',
            'Landmark: Secretariat Road towards the Dhaka Medical College gate',
          ],
        },
        {
          heading: 'Rickshaw, CNG and car',
          paragraphs: [
            'From Shahbagh, TSC, Doel Chattar or the University of Dhaka area, saying “Central Shaheed Minar” is usually enough for drivers to recognise the place.',
            'Do not rely on dedicated visitor parking; using authorised parking or a drop-off in the university and medical college area and walking is more realistic.',
          ],
        },
        {
          heading: 'How long and when to go',
          paragraphs: [
            'Twenty to thirty minutes is enough to see the monument and pay respects. Allow 45–60 minutes if you want to take in the history and architecture slowly, and more if you add Curzon Hall or Doel Chattar.',
            'Morning or late afternoon gives softer light on the white columns and the red disc, and less heat.',
          ],
        },
        {
          heading: '21 February and special days',
          paragraphs: [
            'Ekushey February brings huge crowds, flower tributes and special security arrangements; roads and entry points may be regulated.',
            'Follow the designated entry and exit routes, obey police and authority instructions, and set out with extra time in hand.',
          ],
        },
        {
          heading: 'Etiquette and safety',
          paragraphs: [
            'This is a place of remembrance, not an entertainment venue. Keep silence, avoid dramatic poses in front of flower tributes, and ask consent before photographing people close up.',
            'Agree on a meeting point with your companions in advance: mobile networks can slow down when the crowds are at their peak.',
          ],
        },
      ],
      faq: [
        ['Is a ticket required?', 'Current fees and entry conditions have not been confirmed by a current published operator notice. Check event and security arrangements before travelling.'],
        ['Which metro station is closest?', 'Dhaka University station on MRT Line 6 — from there it is a walk or a short rickshaw ride.'],
        ['When is the best time to visit?', 'Morning or late afternoon, when the light is soft and the heat is lower. On 21 February allow extra time for crowds and security.'],
        ['How long should I plan for?', '20–30 minutes for a short tribute; 45–60 minutes if you include the history, architecture and surroundings.'],
        ['Is there car parking?', 'This guide has not confirmed current dedicated visitor parking arrangements. Check legal parking or drop-off locations before travelling.'],
      ],
    },
  },

  nearby: {
    bn: {
      slug: 'nearby',
      title: 'কেন্দ্রীয় শহীদ মিনারের আশেপাশে — দর্শনীয় স্থান, খাবার ও থাকার জায়গা',
      description:
        'শহীদ মিনারের হাঁটার দূরত্বে কার্জন হল, দোয়েল চত্বর, সোহরাওয়ার্দী উদ্যান, বাংলাদেশ জাতীয় জাদুঘর, খাবার ও থাকার পরিকল্পনায় যাচাইয়ের বিষয়।',
      h1: 'শহীদ মিনারের আশেপাশে কী দেখবেন',
      lead:
        'স্মৃতিসৌধটি ঢাকা বিশ্ববিদ্যালয় এলাকার মাঝে—তবে বিশ্ববিদ্যালয়ের স্থাপত্য, জাদুঘর ও উদ্যানের বর্তমান প্রবেশ ও সময় আলাদাভাবে নিশ্চিত করতে হবে। নিচে একটি বাস্তবসম্মত হাঁটার ক্রম দেওয়া হলো।',
      sections: [
        {
          heading: 'এক হাঁটায় মিলে যায় এমন স্থান',
          paragraphs: [
            'কার্জন হল: ঢাকা বিশ্ববিদ্যালয়ের ঐতিহাসিক লাল-ইটের স্থাপত্য; শহীদ মিনারের সঙ্গে একটি সুন্দর সাংস্কৃতিক হাঁটা তৈরি করে।',
            'দোয়েল চত্বর: বাংলাদেশের জাতীয় পাখির ভাস্কর্য ও বিশ্ববিদ্যালয় এলাকার পরিচিত মোড়।',
            'সোহরাওয়ার্দী উদ্যান: ঐতিহাসিক জনসমাবেশ, স্বাধীনতার স্মৃতি ও সবুজ পরিসরের জন্য গুরুত্বপূর্ণ।',
            'বাংলাদেশ জাতীয় জাদুঘর: শাহবাগে দেশের ইতিহাস, শিল্প, প্রত্নতত্ত্ব ও সাংস্কৃতিক উত্তরাধিকার সম্পর্কে গভীরতর প্রেক্ষাপট।',
          ],
        },
        {
          heading: 'প্রস্তাবিত হাঁটার ক্রম',
          paragraphs: ['শহীদ মিনার, কার্জন হল/দোয়েল চত্বর, টিএসসি বা শাহবাগ থেকে বর্তমান প্রবেশ ও নিজের চলাচলের উপযোগী স্থান বেছে নিন। খাবারের বিরতির স্থান ও সময় আলাদাভাবে যাচাই করুন।'],
          bullets: [
            '১ · শহীদ মিনার — প্রধান অক্ষ ও লাল বৃত্ত',
            '২ · কার্জন হল — লাল-ইটের ঐতিহাসিক স্থাপত্য',
            '৩ · দোয়েল চত্বর — জাতীয় পাখির ভাস্কর্য',
            '৪ · শাহবাগ — জাতীয় জাদুঘর ও খাবার',
          ],
        },
        {
          heading: 'খাবার',
          paragraphs: [
            'খাবারের বিরতির জন্য মেডিকেল কলেজ, বিশ্ববিদ্যালয় এলাকা বা শাহবাগে আপনার পথের সঙ্গে মানানসই স্থান খুঁজতে পারেন। এই গাইড কোনো বর্তমান দোকান, মেনু বা খোলার সময় যাচাই করেনি।',
            'চা-নাস্তা বা পূর্ণ খাবারের স্থান বাছার আগে বর্তমান ঠিকানা, মেনু, মূল্য, খোলার সময় ও নিজের খাদ্যসংক্রান্ত চাহিদা যাচাই করুন। নিচের এলাকাগুলি খোঁজার প্রস্তাব, যাচাই করা দোকানের তালিকা নয়।',
          ],
        },
        {
          heading: 'থাকার জন্য এলাকা',
          paragraphs: [
            'শাহবাগ: থাকার সম্ভাব্য এলাকা হিসেবে তুলনা করুন; নির্দিষ্ট আবাসন, বর্তমান যাতায়াত ও হাঁটার পথ আলাদাভাবে যাচাই করুন।',
            'মতিঝিল/পল্টন: শহরের অন্য গন্তব্যের সঙ্গে মিলিয়ে থাকার এলাকা হিসেবে তুলনা করতে পারেন; নির্দিষ্ট ঠিকানা ও বর্তমান যাতায়াত যাচাই করুন।',
            'ধানমন্ডি: থাকার সম্ভাব্য এলাকা হিসেবে তুলনা করুন; বর্তমান প্রাপ্যতা, যাতায়াতের খরচ ও যানজট যাচাই করুন।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারের সবচেয়ে কাছের দর্শনীয় স্থান কোনটি?', 'কার্জন হল ও দোয়েল চত্বর—দুটিই ঢাকা বিশ্ববিদ্যালয় এলাকায় হাঁটার দূরত্বে।'],
        ['একদিনে কী কী দেখা যায়?', 'শহীদ মিনার → কার্জন হল → দোয়েল চত্বর → টিএসসি → শাহবাগের জাতীয় জাদুঘর—বর্তমান প্রবেশ, হাঁটার অবস্থা ও জাদুঘরের সময় যাচাই করে বেছে নেওয়ার একটি সম্ভাব্য অর্ধ-দিনের পরিকল্পনা।'],
        ['আশেপাশে কোথায় খাওয়া যায়?', 'মেডিকেল, ক্যাম্পাস, শাহবাগ বা চানখারপুল এলাকায় নিজের পথ অনুযায়ী খোঁজ করতে পারেন; কোনো বর্তমান দোকান, মেনু বা সময় এই গাইড যাচাই করেনি।'],
        ['থাকার জন্য কোন এলাকা ভালো?', 'শাহবাগ, মতিঝিল/পল্টন ও ধানমন্ডি তুলনা করার প্রস্তাব। আবাসনের বর্তমান ঠিকানা, মূল্য, যাতায়াত ও নিজের চাহিদা যাচাই করে বাছুন।'],
      ],
    },
    en: {
      slug: 'nearby',
      title: 'Near Central Shaheed Minar — Attractions, Food and Where to Stay',
      description:
        'Within walking distance of the Central Shaheed Minar: Curzon Hall, Doel Chattar, Suhrawardy Udyan, the Bangladesh National Museum, meal-stop and accommodation planning checks.',
      h1: 'What to see near the Shaheed Minar',
      lead:
        'The monument sits inside the University of Dhaka area, so, subject to current access and separate opening arrangements, you can consider combining the university’s historic architecture with the museum and gardens of Shahbagh. Below is a practical walking order.',
      sections: [
        {
          heading: 'What you can combine in one walk',
          paragraphs: [
            'Curzon Hall: the historic red-brick building of the University of Dhaka; it pairs beautifully with the Shaheed Minar on a cultural walk.',
            'Doel Chattar: the sculpture of Bangladesh’s national bird and a well-known crossing in the university area.',
            'Suhrawardy Udyan: important for historic mass gatherings, memories of the Liberation War and open green space.',
            'Bangladesh National Museum: in Shahbagh, deeper context on the country’s history, art, archaeology and cultural heritage.',
          ],
        },
        {
          heading: 'Suggested walking order',
          paragraphs: [
            'Choose among Shaheed Minar, Curzon Hall / Doel Chattar, TSC and Shahbagh according to current access and your mobility. Verify a meal stop and its hours separately.',
          ],
          bullets: [
            '1 · Shaheed Minar — main axis and the red disc',
            '2 · Curzon Hall — historic red-brick architecture',
            '3 · Doel Chattar — the national bird sculpture',
            '4 · Shahbagh — National Museum and food',
          ],
        },
        {
          heading: 'Food',
          paragraphs: [
            'Consider looking for a meal stop around the medical college, university area or Shahbagh if it fits your route. This guide has not verified current venues, menus or opening hours.',
            'Choose a snack or meal stop only after checking the current address, menu, price, hours and your dietary needs. These areas are search suggestions, not a verified venue directory.',
          ],
        },
        {
          heading: 'Where to stay',
          paragraphs: [
            'Shahbagh: an area to compare; verify the exact accommodation, current transport and walking conditions.',
            'Motijheel / Paltan: candidates to compare with your other destinations; verify current accommodation and transport.',
            'Dhanmondi: another area to compare; check current availability, transport cost and traffic.',
          ],
        },
      ],
      faq: [
        ['What is the closest attraction to the Shaheed Minar?', 'Curzon Hall and Doel Chattar — both are within walking distance in the University of Dhaka area.'],
        ['What can I see in one day?', 'Shaheed Minar → Curzon Hall → Doel Chattar → TSC → the National Museum in Shahbagh is a possible half-day plan, depending on current access, walking conditions and museum opening.'],
        ['Where can I eat nearby?', 'You could search around the medical college, campus, Shahbagh or Chankharpul according to your route; no current venues, menus or hours have been verified by this guide.'],
        ['Which area is best for staying?', 'Shahbagh, Motijheel / Paltan and Dhanmondi are comparison candidates. Choose after checking the actual address, rates, transport and your needs.'],
      ],
    },
  },
};
