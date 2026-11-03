import type { Topic } from './types';

/**
 * দর্শন-অভিজ্ঞতা, আচরণবিধি ও শিক্ষামূলক বিষয়।
 * ভাড়া/ছবি-সংক্রান্ত “যাচাইযোগ্য তথ্যের” বাইরে থাকা বিষয় এখানে রাখা হয়নি।
 */
export const guideTopics: Topic[] = [
  {
    path: 'guides/commemoration-etiquette',
    section: 'guides',
    priority: 'P1',
    related: ['history/ekushey-february', 'history/architecture-symbolism', 'guides/short-visit', 'history/language-martyrs', 'guides/school-group-visit'],
    bn: {
      seoTitle: 'শহীদ মিনারে ভ্রমণের আচরণবিধি ও পুষ্পস্তবক অর্পণ',
      description:
        'কেন্দ্রীয় শহীদ মিনারে ভ্রমণের সময় শ্রদ্ধা, পোশাক, ছবি তোলা, পুষ্পস্তবক অর্পণ ও ভিড়ের মধ্যে আচরণবিধি—একটি স্মৃতিস্থান হিসেবে যেভাবে সম্মান দেখানো উচিত।',
      h1: 'শহীদ মিনারে আচরণবিধি ও শ্রদ্ধা জানানোর নিয়ম',
      lead:
        'কেন্দ্রীয় শহীদ মিনার একটি স্মৃতিস্থান, বিনোদনস্থল নয়। শ্রদ্ধা ও বিনয়ের সঙ্গে ভ্রমণ করলে আপনি নিজের অভিজ্ঞতা এবং অন্যান্য দর্শকের সম্মান—দুটোই রক্ষা করবেন।',
      facts: [
        { label: 'স্থানের ধরন', value: 'জাতীয় স্মৃতিস্থান' },
        { label: 'পুষ্পস্তবক', value: 'গুরুত্বপূর্ণ রীতি' },
        { label: 'ছবি', value: 'সতর্কভাবে, অনুমতি নিয়ে' },
        { label: 'বিশেষ দিন', value: '২১ ফেব্রুয়ারি — ভিড় বেশি' },
      ],
      sections: [
        {
          heading: 'সাধারণ নিয়ম',
          paragraphs: [
            'সাধারণ দিনে স্মৃতিসৌধ খোলা চত্বরে দর্শনযোগ্য। শান্ত থেকে, ধীরে হাঁটুন এবং সিঁড়িতে অন্যের পথ আটকে দাঁড়াবেন না।',
            'শিশুদের সাথে থাকলে তাদের আগে থেকেই ব্যাখ্যা করে দিন যে এই স্থানটি যে কারণে গড়া, তা সম্মানের।',
          ],
          bullets: [
            'শান্ত থেকে ধীরে হাঁটুন',
            'মূল অক্ষ (central axis) আটকে দাঁড়াবেন না',
            'শিশুদের স্থানের গুরুত্ব আগেই বলুন',
          ],
        },
        {
          heading: 'ছবি তোলার সময়',
          paragraphs: [
            'কাঠামো ও চত্বরের স্থাপত্য ছবি তোলা সাধারণত সমস্যার নয়। তবে অন্যান্য দর্শকের ছবি—বিশেষত শোকার্ত বা শোক পালনকারী মানুষ—অনুমতি ছাড়া কাছ থেকে ছবি তুলবেন না।',
            'কোনো অনুষ্ঠান চলাকালে ছবির ধরন নিয়ে নিয়ম থাকতে পারে; সেক্ষেত্রে স্থানীয় নির্দেশনা মেনে চলুন।',
          ],
        },
        {
          heading: 'পুষ্পস্তবক ও বিশেষ দিন',
          paragraphs: [
            'ফুল দিয়ে শ্রদ্ধা জানানো এই স্থানের অন্যতম প্রধান রীতি। ২১ ফেব্রুয়ারি রাত থেকে বিপুল ভিড় হয় এবং নিরাপত্তার জন্য নির্দিষ্ট প্রবেশ ও বাহিরপথ থাকতে পারে।',
            'ভিড়ের সময় ধৈর্য ধরে লাইনে চলুন এবং নিরাপত্তাকর্মীদের নির্দেশ অনুসরণ করুন।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারে ছবি তোলা যাবে?', 'কাঠামোর ছবি তোলা যাবে, তবে অন্য দর্শকের ছবি অনুমতি ছাড়া নয় এবং কোনো আয়োজনের সময় স্থানীয় নির্দেশনা মানতে হবে।'],
        ['ফুল দেওয়া যাবে?', 'হ্যাঁ, পুষ্পস্তবক অর্পণ এই স্থানের প্রধান রীতি; বিশেষ দিনে নির্দিষ্ট স্থান ও সময় থাকতে পারে।'],
        ['২১ ফেব্রুয়ারি কেমন হয়?', 'রাত ১২টা থেকেই বিপুল ভিড় হয়, খালি পায়ে প্রভাতফেরি হয় এবং নিরাপত্তা ব্যবস্থা কঠোর থাকে।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
      ],
    },
    en: {
      seoTitle: 'Central Shaheed Minar Etiquette and How to Pay Respect',
      description:
        'How to behave at the Central Shaheed Minar: respect, dress, photography, laying flowers and handling crowds — guidance for visiting a memorial rather than an attraction.',
      h1: 'Etiquette at the Shaheed Minar and paying respect',
      lead:
        'The Central Shaheed Minar is a place of remembrance, not a place of entertainment. Visiting with respect protects both your own experience and the dignity of other visitors.',
      facts: [
        { label: 'Place type', value: 'National memorial' },
        { label: 'Flowers', value: 'An important custom' },
        { label: 'Photography', value: 'Carefully and with consent' },
        { label: 'Special day', value: '21 February — very crowded' },
      ],
      sections: [
        {
          heading: 'General guidelines',
          paragraphs: [
            'On ordinary days the monument can be viewed in the open plaza. Walk calmly and slowly, and avoid blocking others on the steps.',
            'If you are with children, explain beforehand why the place exists and that it is treated with respect.',
          ],
          bullets: [
            'Keep calm and walk slowly',
            'Do not block the central axis',
            'Explain the place’s meaning to children first',
          ],
        },
        {
          heading: 'When taking photographs',
          paragraphs: [
            'Photographing the structures and the plaza is normally fine. Do not photograph other visitors closely — especially people who are mourning — without consent.',
            'During ceremonies there may be rules about photography; follow the site’s instructions on the day.',
          ],
        },
        {
          heading: 'Flowers and special days',
          paragraphs: [
            'Laying flowers is one of the central customs of the place. From midnight on 21 February crowds are very large, and specific entry and exit routes may be enforced for safety.',
            'In crowds, follow the queue patiently and obey security staff.',
          ],
        },
      ],
      faq: [
        ['Can I take photos at the Shaheed Minar?', 'Photographs of the structure are fine, but not close-up photos of other visitors without consent, and follow local instructions during ceremonies.'],
        ['Can I lay flowers?', 'Yes — laying flowers is the central custom. On special days there may be designated places and times.'],
        ['What is 21 February like?', 'Huge crowds arrive from midnight, the probhat feri walks barefoot, and security arrangements are strict.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
      ],
    },
  },

  {
    path: 'guides/short-visit',
    section: 'guides',
    priority: 'P1',
    related: ['visit/location-map', 'history/architecture-symbolism', 'nearby/curzon-hall', 'guides/commemoration-etiquette'],
    bn: {
      seoTitle: '২০, ৪৫ ও ৬০ মিনিটে শহীদ মিনার ভ্রমণ — সময়ভিত্তিক পথ',
      description:
        'হাতে যতটুকু সময় আছে সেই অনুযায়ী কেন্দ্রীয় শহীদ মিনার দেখার পরিকল্পনা: ২০ মিনিটের সংক্ষিপ্ত দর্শন, ৪৫ মিনিটের স্থাপত্য-কেন্দ্রিক ভ্রমণ এবং ৬০ মিনিটের আশপাশসহ ভ্রমণ।',
      h1: '২০, ৪৫ ও ৬০ মিনিটে শহীদ মিনার',
      lead:
        'সময় কম হোক বা বেশি, শহীদ মিনার তিনভাবে দেখা যায়: ২০ মিনিটে মূল দর্শন, ৪৫ মিনিটে স্থাপত্য ও ইতিহাসসহ, আর ৬০ মিনিটে পাশের ক্যাম্পাস এলাকাসহ।',
      facts: [
        { label: '২০ মিনিট', value: 'মূল কাঠামো ও চত্বর' },
        { label: '৪৫ মিনিট', value: 'স্থাপত্য + ইতিহাস' },
        { label: '৬০ মিনিট', value: 'সাথে ক্যাম্পাস এলাকা' },
        { label: 'যথাযথ সময়', value: 'সকাল বা বিকেল' },
      ],
      sections: [
        {
          heading: '২০ মিনিট: মূল দর্শন',
          paragraphs: [
            'সিঁড়ির নিচ থেকে সম্পূর্ণ কাঠামো একবার দেখুন, তারপর ধীরে ধীরে কাছাকাছি যান। পাশ থেকে ৩০–৪৫ ডিগ্রি কোণে দাঁড়িয়ে কাঠামোর স্তর ও ফাঁক দেখুন।',
            'এই সংক্ষিপ্ত দর্শনেই স্মৃতিসৌধের মূল দৃশ্যভাষা ধরা পড়ে।',
          ],
        },
        {
          heading: '৪৫ মিনিট: স্থাপত্য ও ইতিহাস',
          paragraphs: [
            'মূল দর্শন শেষে স্থাপত্যের অংশগুলো ভালোভাবে দেখুন—মাঝের উঁচু কাঠামো, নিচু পাশের কাঠামো ও পিছনের লাল বৃত্তের সম্পর্ক।',
            'তারপর মনের মধ্যে ইতিহাসের ধারাটি সাজান: ১৯৫২-এর ঘটনা, ১৯৫৭–১৯৬৩-এর নকশা এবং ১৯৭১-এর ধ্বংস ও পুনর্নির্মাণ।',
          ],
          bullets: [
            'স্থাপত্য: কাঠামো ও অনুপাত',
            'ইতিহাস: ১৯৫২ → ১৯৬৩ → ১৯৭১ → ১৯৮৩',
            'ছবি: নিচ থেকে ও পাশ থেকে দুটি কোণ',
          ],
        },
        {
          heading: '৬০ মিনিট: আশপাশসহ',
          paragraphs: [
            'এক ঘণ্টা হাতে থাকলে স্মৃতিসৌধ দেখে হেঁটেই কার্জন হল বা দোয়েল চত্বরের দিকে যাওয়া যায়। এতে ভাষা-স্মৃতি ও ক্যাম্পাসের স্থাপত্য একসঙ্গে দেখা হয়।',
            'সময় নির্ধারণে ভিড়, আবহাওয়া ও সড়ক পরিস্থিতি বিবেচনা করুন।',
          ],
        },
      ],
      faq: [
        ['মাত্র ২০ মিনিট থাকলে কী দেখব?', 'সিঁড়ির নিচ থেকে সম্পূর্ণ কাঠামো দেখুন এবং পাশ থেকে ৩০–৪৫ ডিগ্রিতে কাঠামোর স্তর দেখুন।'],
        ['সবচেয়ে ভালো সময় কোনটি?', 'সকাল বা বিকেলের নরম আলোয় কাঠামোর স্তর ও ছায়া ভালোভাবে ধরা পড়ে।'],
        ['আরও সময় থাকলে কোথায় যাব?', 'কার্জন হল, দোয়েল চত্বর বা বাংলা একাডেমির দিকে হেঁটে যাওয়া যায়।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
    en: {
      seoTitle: 'Visiting the Shaheed Minar in 20, 45 or 60 Minutes',
      description:
        'Plan a visit to the Central Shaheed Minar around the time you have: a 20-minute essential visit, a 45-minute architecture and history visit, and a 60-minute visit including the campus area.',
      h1: 'The Shaheed Minar in 20, 45 or 60 minutes',
      lead:
        'Whether you have little time or more, the monument can be seen in three ways: 20 minutes for the essential view, 45 minutes with architecture and history, and 60 minutes including the surrounding campus.',
      facts: [
        { label: '20 minutes', value: 'Main structure and plaza' },
        { label: '45 minutes', value: 'Architecture + history' },
        { label: '60 minutes', value: 'Plus the campus area' },
        { label: 'Best light', value: 'Morning or late afternoon' },
      ],
      sections: [
        {
          heading: '20 minutes: the essential visit',
          paragraphs: [
            'From below the steps, take in the whole structure once, then move gradually closer. Stand about 30–45 degrees to the side to see the layering and the gaps between the structures.',
            'Even this short visit conveys the monument’s core visual language.',
          ],
        },
        {
          heading: '45 minutes: architecture and history',
          paragraphs: [
            'After the essential view, study the architectural parts — the tall central structure, the lower flanking ones and the red disc behind.',
            'Then assemble the historical thread in your mind: the events of 1952, the design of 1957–1963, and the destruction and rebuilding of 1971.',
          ],
          bullets: [
            'Architecture: structure and proportion',
            'History: 1952 → 1963 → 1971 → 1983',
            'Photography: one angle low, one from the side',
          ],
        },
        {
          heading: '60 minutes: including the surroundings',
          paragraphs: [
            'With an hour available, walk from the monument to Curzon Hall or Doel Chattar. This combines the language heritage with the architecture of the campus.',
            'Factor in crowds, weather and road conditions when timing your visit.',
          ],
        },
      ],
      faq: [
        ['What can I see in only 20 minutes?', 'View the whole structure from below the steps and examine the layering from 30–45 degrees to the side.'],
        ['When is the best time?', 'In the soft light of morning or late afternoon, the layering and shadows read best.'],
        ['Where can I go with more time?', 'You can walk onwards to Curzon Hall, Doel Chattar or Bangla Academy.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
  },

  {
    path: 'guides/school-group-visit',
    section: 'guides',
    priority: 'P2',
    related: ['guides/commemoration-etiquette', 'history/language-movement-1952', 'history/ekushey-february', 'guides/short-visit'],
    bn: {
      seoTitle: 'স্কুল ও শিক্ষার্থী দলের জন্য শহীদ মিনার ভ্রমণ পরিকল্পনা',
      description:
        'শিক্ষার্থী দল নিয়ে কেন্দ্রীয় শহীদ মিনার ভ্রমণের পরিকল্পনা: আগে কী পড়ানো উচিত, ভিড় ও নিরাপত্তা ব্যবস্থাপনা এবং দলগত শৃঙ্খলা রক্ষার ব্যবহারিক পরামর্শ।',
      h1: 'স্কুল ও শিক্ষার্থী দলের ভ্রমণ পরিকল্পনা',
      lead:
        'শিক্ষার্থী দল নিয়ে শহীদ মিনার ভ্রমণ কার্যকর হয় যখন আগে শ্রেণিকক্ষে ইতিহাসটি পড়ানো হয়, এরপর দলগত শৃঙ্খলা ও নিরাপত্তা পরিকল্পনা করা হয়।',
      facts: [
        { label: 'উপযোগী সময়', value: 'সকাল (ভিড় কম)' },
        { label: 'আগের প্রস্তুতি', value: 'শ্রেণিকক্ষে ইতিহাস পাঠ' },
        { label: 'দলীয় ব্যবস্থাপনা', value: 'ছোট দল ও নির্দিষ্ট সভাস্থল' },
        { label: 'বিশেষ দিন এড়ান', value: '২১ ফেব্রুয়ারি' },
      ],
      sections: [
        {
          heading: 'ভ্রমণের আগে শ্রেণিকক্ষে',
          paragraphs: [
            'ভ্রমণের আগে শিক্ষার্থীদের ১৯৫২ সালের ভাষা আন্দোলনের মূল ধারা এবং স্মৃতিসৌধের অর্থ ব্যাখ্যা করে দিন। এতে স্মৃতিস্থানে পৌঁছে প্রশ্ন কমে এবং মনোযোগ বাড়ে।',
            'আগেই বলে দিন যে এটি প্রমোদভ্রমণ নয়—শ্রদ্ধা ও শৃঙ্খলা প্রয়োজন।',
          ],
          bullets: [
            '১৯৫২ সালের মূল ঘটনা সংক্ষেপে',
            'স্মৃতিসৌধের স্থাপত্যের প্রতীক',
            'শ্রদ্ধা ও আচরণের প্রত্যাশা',
          ],
        },
        {
          heading: 'দলীয় শৃঙ্খলা',
          paragraphs: [
            'বড় দল ভেঙে ছোট গ্রুপে ভ্রমণ করুন, প্রতিটি গ্রুপে একজন দায়িত্বপ্রাপ্ত শিক্ষক রাখুন এবং একটি নির্দিষ্ট সভাস্থল ঠিক করে নিন।',
            'মূল অক্ষ আটকে না দাঁড়িয়ে পাশে সরে দাঁড়ানো এবং পরিবহনের জন্য নিরাপদ স্থান আগেই চিহ্নিত করা ভালো।',
          ],
        },
        {
          heading: 'নিরাপত্তা ও সময়',
          paragraphs: [
            'সকালের দিকে ভিড় তুলনায় কম থাকে। বিশেষ আয়োজনের দিন—বিশেষত ২১ ফেব্রুয়ারি—শিক্ষার্থী দল নিয়ে যাওয়া পরিকল্পিতভাবে এড়ানো ভালো।',
            'চূড়ান্ত প্রবেশপথ ও নিয়ম পরিবর্তিত হতে পারে, তাই যাওয়ার আগে স্থানীয় নির্দেশনা যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['শিক্ষার্থী দলের জন্য সেরা সময়?', 'সকালের দিকে ভিড় তুলনায় কম থাকে, তাই তখন যাওয়া সুবিধাজনক।'],
        ['আগে কী পড়ানো উচিত?', '১৯৫২ সালের ভাষা আন্দোলনের মূল ঘটনা এবং স্মৃতিসৌধের প্রতীক ও শ্রদ্ধার রীতি।'],
        ['২১ ফেব্রুয়ারি দল নিয়ে যাওয়া যাবে?', 'সেদিন অত্যন্ত ভিড় ও কঠোর নিরাপত্তা থাকে; শিক্ষার্থী দলের জন্য আলাদা পরিকল্পনা করা ভালো।'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Planning a School or Student Group Visit to the Shaheed Minar',
      description:
        'How to plan a student group visit to the Central Shaheed Minar: what to teach beforehand, managing crowds and safety, and practical guidance on group discipline.',
      h1: 'Planning a school or student group visit',
      lead:
        'A student group visit to the Shaheed Minar works best when the history is taught in class beforehand, followed by a plan for group discipline and safety.',
      facts: [
        { label: 'Best time', value: 'Morning (fewer crowds)' },
        { label: 'Advance prep', value: 'Teach the history in class' },
        { label: 'Group handling', value: 'Small groups and a meeting point' },
        { label: 'Avoid', value: '21 February with large groups' },
      ],
      sections: [
        {
          heading: 'In class before the visit',
          paragraphs: [
            'Explain the main thread of the 1952 Language Movement and the meaning of the monument before travelling. Students then arrive with fewer questions and more focus.',
            'State in advance that this is not a leisure outing — it calls for respect and discipline.',
          ],
          bullets: [
            'The key events of 1952 in brief',
            'What the architecture symbolises',
            'Expected behaviour and respect',
          ],
        },
        {
          heading: 'Group discipline',
          paragraphs: [
            'Split a large group into smaller ones, assign a responsible teacher to each, and fix a specific meeting point.',
            'Avoid blocking the central axis, and identify a safe place for transport in advance.',
          ],
        },
        {
          heading: 'Safety and timing',
          paragraphs: [
            'Mornings are comparatively less crowded. On major event days — especially 21 February — a student group visit is better planned around the crowds.',
            'Final entry routes and rules can change, so check local instructions before you go.',
          ],
        },
      ],
      faq: [
        ['What is the best time for a student group?', 'Mornings are comparatively less crowded, which makes them convenient.'],
        ['What should be taught beforehand?', 'The key events of the 1952 Language Movement, the symbolism of the monument, and the customs of respect.'],
        ['Can we go on 21 February?', 'That day brings very large crowds and strict security; a separate plan is advisable for student groups.'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'guides/bengali-terms',
    section: 'guides',
    priority: 'P2',
    related: ['history/language-movement-1952', 'history/ekushey-february', 'guides/commemoration-etiquette'],
    bn: {
      seoTitle: 'ভাষা আন্দোলনের বাংলা পরিভাষা — বিদেশি দর্শকের জন্য শব্দকোষ',
      description:
        'শহীদ, মিনার, একুশে, ভাষা আন্দোলন, প্রভাতফেরি ও একুশে পদক—ভাষা আন্দোলন ও শহীদ মিনার সংক্রান্ত বাংলা শব্দগুলোর অর্থ ও ব্যবহারের সহজ ব্যাখ্যা।',
      h1: 'ভাষা আন্দোলনের বাংলা পরিভাষা',
      lead:
        'শহীদ মিনার ও ভাষা আন্দোলন নিয়ে পড়তে গেলে কয়েকটি বাংলা শব্দ বারবার আসে। নিচে সেগুলোর সহজ অর্থ দেওয়া হলো, যাতে বিদেশি দর্শক বা গবেষক সহজে বিষয়টি বুঝতে পারেন।',
      facts: [
        { label: 'শহীদ', value: 'প্রাণ দেওয়া বা আত্মত্যাগী' },
        { label: 'মিনার', value: 'স্মারক স্তম্ভ/সৌধ' },
        { label: 'একুশে', value: '২১ তারিখের সঙ্গে যুক্ত' },
        { label: 'ভাষা আন্দোলন', value: 'ভাষার জন্য সংগ্রাম' },
      ],
      sections: [
        {
          heading: 'মূল শব্দ',
          paragraphs: [
            '“শহীদ” শব্দের অর্থ আত্মত্যাগী, বিশেষ করে যিনি বিশ্বাস বা নীতির জন্য প্রাণ দেন। “মিনার” অর্থ স্তম্ভ বা স্মারক কাঠামো; “শহীদ মিনার” তাই শহীদদের স্মারক স্তম্ভ।',
            '“ভাষা আন্দোলন” অর্থ ভাষার জন্য আন্দোলন বা ভাষা-সংগ্রাম—এখানে বাংলাকে রাষ্ট্রভাষার মর্যাদা দেওয়ার সংগ্রাম।',
          ],
          bullets: [
            'শহীদ — আত্মত্যাগী / প্রাণ দেওয়া',
            'মিনার — স্তম্ভ, স্মারক কাঠামো',
            'ভাষা আন্দোলন — ভাষার জন্য সংগ্রাম',
          ],
        },
        {
          heading: 'স্মরণ-সংক্রান্ত শব্দ',
          paragraphs: [
            '“একুশে” মানে ২১ তারিখের সঙ্গে সম্পর্কিত—অর্থাৎ ২১ ফেব্রুয়ারি। “প্রভাতফেরি” মানে ভোরের শোভাযাত্রা, যা খালি পায়ে করা হয়।',
            '“পুষ্পস্তবক” হলো ফুলের মালা বা শ্রদ্ধা-অর্পণ। “একুশে পদক” হলো ভাষা ও সংস্কৃতির জন্য দেওয়া জাতীয় পুরস্কার।',
          ],
        },
        {
          heading: 'ইতিহাস-সংক্রান্ত শব্দ',
          paragraphs: [
            '“রাষ্ট্রভাষা” অর্থ রাষ্ট্রের সরকারি ভাষা; ১৯৫২ সালের মূল দাবি ছিল বাংলাকে রাষ্ট্রভাষা করা।',
            '“স্মৃতিসৌধ” অর্থ স্মরণ-স্থাপত্য, যা শহীদ মিনার ও অন্যান্য স্মারকের ক্ষেত্রে ব্যবহৃত হয়।',
          ],
        },
      ],
      faq: [
        ['শহীদ মানে কী?', 'আত্মত্যাগী বা প্রাণ দেওয়া মানুষ; ভাষা আন্দোলনের প্রেক্ষাপটে যাঁরা ভাষার দাবিতে প্রাণ দিয়েছেন।'],
        ['একুশে মানে কী?', '২১ সংখ্যার সঙ্গে যুক্ত, অর্থাৎ ২১ ফেব্রুয়ারি—বাংলায় তারিখ বলার সময় “একুশে ফেব্রুয়ারি” বলা হয়।'],
        ['প্রভাতফেরি কী?', 'ভোরের শোভাযাত্রা, যা একুশে ফেব্রুয়ারির প্রথম প্রহরে খালি পায়ে করা হয়।'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
      ],
    },
    en: {
      seoTitle: 'Bengali Terms of the Language Movement — A Glossary for Visitors',
      description:
        'Simple explanations of Bengali words used around the Central Shaheed Minar and the Language Movement: Shaheed, Minar, Ekushey, Bhasha Andolon, probhat feri and Ekushey Padak.',
      h1: 'Bengali terms of the Language Movement',
      lead:
        'Reading about the Shaheed Minar and the Language Movement brings up a handful of Bengali words again and again. The glossary below gives their plain meanings for visitors and researchers.',
      facts: [
        { label: 'Shaheed', value: 'Martyr / one who gave their life' },
        { label: 'Minar', value: 'Pillar or memorial structure' },
        { label: 'Ekushey', value: 'Related to the 21st' },
        { label: 'Bhasha Andolon', value: 'Language movement' },
      ],
      sections: [
        {
          heading: 'Core words',
          paragraphs: [
            '“Shaheed” means martyr — someone who gave their life for a belief or principle. “Minar” means a pillar or memorial structure, so “Shaheed Minar” is the martyrs’ memorial.',
            '“Bhasha Andolon” means the language movement: here, the struggle to win state-language status for Bengali.',
          ],
          bullets: [
            'Shaheed — martyr, one who gave their life',
            'Minar — pillar, memorial structure',
            'Bhasha Andolon — language movement',
          ],
        },
        {
          heading: 'Words about remembrance',
          paragraphs: [
            '“Ekushey” relates to the 21st — that is, 21 February. “Probhat feri” means a dawn procession, one that is walked barefoot.',
            '“Pushpastabak” is a wreath or floral tribute. “Ekushey Padak” is the national award for contributions to language and culture.',
          ],
        },
        {
          heading: 'Words about history',
          paragraphs: [
            '“Rastrabhasha” means state language; the central demand of 1952 was to make Bengali a state language.',
            '“Sriti soudho” means memorial architecture, and is used for the Shaheed Minar and other memorials.',
          ],
        },
      ],
      faq: [
        ['What does Shaheed mean?', 'A martyr, or one who gave their life — in this context, those who died for the language cause.'],
        ['What does Ekushey mean?', 'Related to the number 21, that is, 21 February; in Bengali, dates are often said as “ekushey February”.'],
        ['What is probhat feri?', 'A dawn procession, walked barefoot in the first hours of 21 February.'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
      ],
    },
  },

  {
    path: 'guides/shaheed-minar-photos',
    section: 'guides',
    priority: 'P1',
    related: ['guides/photography-guide', 'history/architecture-symbolism', 'history/first-shaheed-minar'],
    bn: {
      seoTitle: 'শহীদ মিনারের ছবি — কেন্দ্রীয় শহীদ মিনারের বাস্তব ছবি ও ব্যবহারের শর্ত',
      description:
        'কেন্দ্রীয় শহীদ মিনারের বাস্তব ছবি, সেগুলোতে কী দেখা যায়, কে তুলেছেন এবং কোন লাইসেন্সে ব্যবহার করা হয়েছে—সেই সঙ্গে কৃত্রিম ছবি ব্যবহার না করার নীতি।',
      h1: 'শহীদ মিনারের ছবি: বাস্তব ছবি ও ব্যবহারের শর্ত',
      lead:
        'এই সাইটে দেখা কেন্দ্রীয় শহীদ মিনারের ছবিগুলো বাস্তব ফটোগ্রাফ, যা Salim Khandoker তুলেছেন এবং Wikimedia Commons-এ CC BY-SA 3.0 লাইসেন্সে প্রকাশিত। কোনো কৃত্রিম বা এআই-নির্মিত ছবি এখানে বাস্তব স্থানের ছবি হিসেবে ব্যবহার করা হয় না।',
      facts: [
        { label: 'ছবির ধরন', value: 'বাস্তব ফটোগ্রাফ' },
        { label: 'ফটোগ্রাফার', value: 'Salim Khandoker' },
        { label: 'সূত্র', value: 'Wikimedia Commons' },
        { label: 'লাইসেন্স', value: 'CC BY-SA 3.0' },
      ],
      sections: [
        {
          heading: 'ছবিতে কী দেখা যায়',
          paragraphs: [
            'ছবিগুলোতে সাদা উঁচু ফ্রেমের সারি এবং তার পেছনে লাল বৃত্তাকার গড়নটি দেখা যায়। সামনের খোলা চত্বর, আশপাশের গাছপালা ও ভবনও ছবির অংশ।',
            'ছবি থেকে বোঝা যায় কাঠামোটি কত উঁচু এবং চত্বরটি কতটা খোলা—যা যাওয়ার আগে জায়গাটি সম্পর্কে ধারণা তৈরিতে সহায়ক।',
          ],
        },
        {
          heading: 'সূত্র, স্বীকৃতি ও লাইসেন্স',
          paragraphs: [
            'CC BY-SA 3.0 লাইসেন্সের শর্ত হলো ফটোগ্রাফারের নাম উল্লেখ করা, লাইসেন্সের লিংক দেওয়া, কোনো পরিবর্তন করলে তা জানানো এবং নতুন কাজটিও একই লাইসেন্সে প্রকাশ করা।',
            'সাইটের ফুটারে এই স্বীকৃতি স্থায়ীভাবে রাখা হয়েছে, যাতে ছবির সূত্র প্রতিটি পাতায় দৃশ্যমান থাকে।',
          ],
        },
        {
          heading: 'ছবি পুনর্ব্যবহার করতে চাইলে',
          paragraphs: [
            'লাইসেন্স অনুযায়ী ছবিটি আপনি ব্যবহার করতে পারেন, তবে শর্তগুলো মানতে হবে—স্বীকৃতি, লাইসেন্সের উল্লেখ এবং পরিবর্তনের বিবরণ।',
            'শর্ত না মেনে ব্যবহার করলে লাইসেন্সের সুরক্ষা আর প্রযোজ্য থাকে না; তাই সূত্রের কথাটি হালকাভাবে নেবেন না।',
          ],
        },
        {
          heading: 'কেন কৃত্রিম ছবি ব্যবহার করা হয় না',
          paragraphs: [
            'এআই-নির্মিত ছবিকে বাস্তব স্থানের ছবি বলে দেখানো পাঠককে বিভ্রান্ত করে, আর সেই বিভ্রান্তি বাস্তব জায়গার সৌন্দর্য বা ইতিহাস—দুটোর সঙ্গেই অবিচার করে।',
            'তাই যেখানে নিজস্ব বাস্তব ছবি নেই, সেখানে অনুমানের ছবি না দিয়ে সংশ্লিষ্ট তথ্য যাচাই করে নেওয়ার অনুরোধ করা হয়।',
          ],
        },
        {
          heading: 'নিজে ছবি তুলতে চাইলে',
          paragraphs: [
            'কাঠামোর গঠন, আলো ও শিষ্টাচার নিয়ে আলাদা একটি নির্দেশিকা রয়েছে, যেখানে কোণ ও সময় বাছাইয়ের পরামর্শ দেওয়া হয়েছে।',
          ],
        },
      ],
      faq: [
        ['এই সাইটের ছবি কি সাইটের নিজস্ব?', 'না। ছবির স্বত্ব ফটোগ্রাফারের; সাইট কেবল লাইসেন্সের শর্ত মেনে ছবিগুলো ব্যবহার করছে।'],
        ['ছবি কি অন্য কোথাও ব্যবহার করা যাবে?', 'হ্যাঁ, CC BY-SA 3.0 শর্ত মেনে—স্বীকৃতি দিয়ে, লাইসেন্স উল্লেখ করে এবং একই লাইসেন্সে প্রকাশ করে।'],
        ['সব ছবি কি একই দিনে তোলা?', 'এই গাইডে তা নিশ্চিত করা যায় না, তাই এমন দাবি করা হয়নি।'],
      ],
      sources: [
        { label: 'Creative Commons — CC BY-SA 3.0', href: 'https://creativecommons.org/licenses/by-sa/3.0/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Shaheed Minar Photos — Real Pictures of the Memorial and Their Licence',
      description:
        'Real photographs of the Central Shaheed Minar: what the pictures show, who took them and under which licence they are used, plus why no AI-generated images are presented as real.',
      h1: 'Shaheed Minar photos: real pictures and how they may be used',
      lead:
        'The photographs of the Central Shaheed Minar used on this site are real photographs taken by Salim Khandoker and published on Wikimedia Commons under a CC BY-SA 3.0 licence. No synthetic or AI-generated image is presented here as a photograph of the real place.',
      facts: [
        { label: 'Image type', value: 'Real photographs' },
        { label: 'Photographer', value: 'Salim Khandoker' },
        { label: 'Source', value: 'Wikimedia Commons' },
        { label: 'Licence', value: 'CC BY-SA 3.0' },
      ],
      sections: [
        {
          heading: 'What the pictures show',
          paragraphs: [
            'The photographs show the row of tall white frames with the red circular form behind them, along with the open plaza in front and the trees and buildings around.',
            'They also convey how tall the structure is and how open the plaza is, which helps in forming an idea of the place before you go.',
          ],
        },
        {
          heading: 'Source, attribution and licence',
          paragraphs: [
            'The CC BY-SA 3.0 licence requires you to credit the photographer, link to the licence, note any changes you make, and release your own version under the same licence.',
            'That attribution is kept permanently in the site footer so that the source of the photographs stays visible on every page.',
          ],
        },
        {
          heading: 'Reusing the photographs',
          paragraphs: [
            'The licence allows you to reuse the photographs, provided you meet the conditions: attribution, a licence reference, and a note of any modifications.',
            'If the conditions are not met, the licence protection no longer applies, so the source details are not a formality.',
          ],
        },
        {
          heading: 'Why no synthetic images are used',
          paragraphs: [
            'Presenting an AI-generated image as a photograph of a real place misleads the reader, and does a disservice both to the place itself and to its history.',
            'Where the guide has no genuine photograph of its own, it asks you to verify the detail instead of supplying an invented image.',
          ],
        },
        {
          heading: 'If you want to take your own',
          paragraphs: [
            'A separate guide covers the structure of the monument, lighting and etiquette, with suggestions on choosing angles and times.',
          ],
        },
      ],
      faq: [
        ['Do the photographs on this site belong to the site?', 'No. Copyright stays with the photographer; the site uses them under the terms of the licence.'],
        ['May I reuse the photographs elsewhere?', 'Yes, under CC BY-SA 3.0 — with attribution, a licence reference, and release under the same licence.'],
        ['Were all the photographs taken on the same day?', 'That could not be confirmed, so no such claim is made here.'],
      ],
      sources: [
        { label: 'Creative Commons — CC BY-SA 3.0', href: 'https://creativecommons.org/licenses/by-sa/3.0/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'guides/photography-guide',
    section: 'guides',
    priority: 'P2',
    related: ['guides/shaheed-minar-photos', 'guides/commemoration-etiquette', 'history/architecture-symbolism', 'visit/february-21-access'],
    bn: {
      seoTitle: 'শহীদ মিনারে ছবি তোলার গাইড — কাঠামো, আলো ও শিষ্টাচার',
      description:
        'কেন্দ্রীয় শহীদ মিনারে ছবি তোলার ব্যবহারিক পরামর্শ: কাঠামোর গঠন, আলো ও কোণ বাছাই, ভিড় এড়ানোর সময় এবং শোকের স্থানে ছবি তোলার শিষ্টাচার।',
      h1: 'শহীদ মিনারে ছবি তোলার গাইড',
      lead:
        'স্মৃতিসৌধের সাদা উঁচু ফ্রেম আর পেছনের লাল বৃত্ত—এই দুই উপাদানই ছবির মূল আকর্ষণ। আলো, কোণ ও ভিড় বুঝে ছবি তুললে ফল ভালো আসে; তবে এটি শোকের স্থান, তাই শিষ্টাচার সবসময় আগে।',
      facts: [
        { label: 'মূল উপাদান', value: 'সাদা ফ্রেম ও লাল বৃত্ত' },
        { label: 'নরম আলো', value: 'সকাল ও বিকেল' },
        { label: 'ব্যস্ততম দিন', value: '২১ ফেব্রুয়ারি' },
        { label: 'যাচাই করুন', value: 'ট্রাইপড ও ড্রোনের স্থানীয় নিয়ম' },
      ],
      sections: [
        {
          heading: 'কাঠামো ও কোণ',
          paragraphs: [
            'ফ্রেমগুলো সারিবদ্ধভাবে সাজানো, তাই সামনের দিক থেকে তুললে সমমিতি ধরা পড়ে এবং কাঠামোর উচ্চতা স্পষ্ট বোঝা যায়।',
            'একটু পাশ থেকে তুললে ফ্রেমগুলোর মাঝের ফাঁক ও গভীরতা ফুটে ওঠে—এতে ছবি একরঙা দেখায় না।',
          ],
        },
        {
          heading: 'আলো ও সময়',
          paragraphs: [
            'কড়া দুপুরের রোদে সাদা ফ্রেমে ঝলক পড়ে, ফলে গঠনের খুঁটিনাটি হারিয়ে যেতে পারে। সকাল বা বিকেলের নরম আলোতে সেই ঝলক কম থাকে।',
            'আকাশ মেঘলা থাকলে ছায়া কোমল হয়, যা সাদা কাঠামোর জন্য সহায়ক।',
          ],
        },
        {
          heading: 'ভিড় এড়ানো',
          paragraphs: [
            'সাধারণ দিনে সকালের দিকে ভিড় তুলনামূলক কম থাকে, তাই জনবিরল ছবি পেতে সুবিধা হয়।',
            'একুশে ফেব্রুয়ারিতে ভিড় এত বেশি হয় যে স্থির ছবি তোলা কঠিন; সেই দিন ভিড়ের মাঝে দাঁড়িয়ে ছবি তোলার চেষ্টা না করাই ভালো।',
          ],
        },
        {
          heading: 'শিষ্টাচার',
          paragraphs: [
            'পুষ্পস্তবক অর্পণরত বা শোক পালনকারী মানুষের পথ আটকে ছবি তোলা যায় না। কারও মুখ সরাসরি ধরা বা ফ্ল্যাশ ব্যবহার করা এড়িয়ে চলুন।',
            'গুরুত্বপূর্ণ মুহূর্তে কর্তৃপক্ষ বা স্বেচ্ছাসেবকের নির্দেশ থাকলে তা মেনে চলুন—ছবির চেয়ে স্থানের মর্যাদা বড়।',
          ],
        },
        {
          heading: 'যন্ত্র ও অনুমতি',
          paragraphs: [
            'ট্রাইপড বা ড্রোন ব্যবহারের অনুমতি সম্পর্কে এই গাইডে নিশ্চিত তথ্য নেই, তাই অনুমান করে কিছু বলা হচ্ছে না।',
            'যাওয়ার আগে স্থানীয় নিয়ম জেনে নিলে অপ্রয়োজনীয় ঝামেলা এড়ানো যায়।',
          ],
        },
      ],
      faq: [
        ['কোন সময়ে ছবি ভালো আসে?', 'সকাল বা বিকেলের নরম আলোতে; কড়া দুপুরের রোদে সাদা ফ্রেমে ঝলক পড়ে গঠন কম স্পষ্ট হয়।'],
        ['শোকের সময় ছবি তোলা কি ঠিক?', 'পুষ্পস্তবক অর্পণ বা শোক পালনের দৃশ্যে হস্তক্ষেপ করা যায় না; সম্মান রেখে, দূর থেকে ছবি তুলুন।'],
        ['ট্রাইপড বা ড্রোন ব্যবহার করা যায়?', 'এই গাইডে তা নিশ্চিত করা যায়নি; স্থানীয় নিয়ম আগে জেনে নেওয়া ভালো।'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Photographing the Shaheed Minar — Structure, Light and Etiquette',
      description:
        'Practical advice for photographing the Central Shaheed Minar: the shape of the structure, choosing light and angles, avoiding crowds, and etiquette at a place of mourning.',
      h1: 'Photographing the Shaheed Minar',
      lead:
        'The tall white frames and the red disc behind them are the two elements that make the memorial’s pictures. Reading the light, the angle and the crowd gives better results, but this is a place of mourning, so etiquette comes first.',
      facts: [
        { label: 'Key elements', value: 'White frames and red disc' },
        { label: 'Softer light', value: 'Morning and late afternoon' },
        { label: 'Busiest day', value: '21 February' },
        { label: 'Verify', value: 'Local rules for tripods and drones' },
      ],
      sections: [
        {
          heading: 'Structure and angles',
          paragraphs: [
            'The frames are arranged in a row, so a frontal view captures the symmetry and makes the height of the structure clear.',
            'Shooting slightly from the side brings out the gaps between the frames and the depth, which keeps the picture from looking flat.',
          ],
        },
        {
          heading: 'Light and timing',
          paragraphs: [
            'Harsh midday sun glares off the white frames and can wash out the detail of the structure. The softer light of morning or late afternoon reduces that glare.',
            'Overcast skies soften the shadows too, which suits a white structure.',
          ],
        },
        {
          heading: 'Avoiding crowds',
          paragraphs: [
            'On ordinary days the morning is comparatively quiet, which makes it easier to get an uncluttered picture.',
            'On 21 February the crowd is so dense that a static shot is difficult; it is better not to try to photograph from the middle of that crowd.',
          ],
        },
        {
          heading: 'Etiquette',
          paragraphs: [
            'You cannot block people who are laying wreaths or mourning in order to take a picture. Avoid close portraits of mourners and avoid using flash.',
            'If staff or volunteers give instructions at an important moment, follow them — the dignity of the place matters more than the photograph.',
          ],
        },
        {
          heading: 'Equipment and permission',
          paragraphs: [
            'This guide has no confirmed information about permission for tripods or drones, so nothing is asserted here.',
            'Checking local rules before you go avoids unnecessary trouble.',
          ],
        },
      ],
      faq: [
        ['When do photographs come out best?', 'In the softer light of morning or late afternoon; harsh midday sun glares off the white frames and hides the structure.'],
        ['Is it acceptable to photograph during mourning?', 'You must not interfere with wreath-laying or mourning; photograph from a distance and with respect.'],
        ['Are tripods or drones allowed?', 'That could not be confirmed for this guide; check the local rules beforehand.'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },
];
