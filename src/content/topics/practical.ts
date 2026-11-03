import type { Topic } from './types';

/**
 * ব্যবহারিক পরিকল্পনা — পানি, বিশ্রাম ও থাকার এলাকা বাছাই।
 * যাচাই করা যায়নি এমন সুবিধা, হোটেলের নাম বা দাম এখানে লেখা হয়নি।
 */
export const practicalTopics: Topic[] = [
  {
    path: 'planning/restrooms-water-breaks',
    section: 'planning',
    priority: 'P2',
    related: ['visit/accessibility', 'food/tsc-tea-snacks', 'guides/short-visit', 'nearby/bangladesh-national-museum'],
    bn: {
      seoTitle: 'পানি, শৌচাগার ও বিশ্রাম — শহীদ মিনার ভ্রমণের ব্যবহারিক তথ্য',
      description:
        'শহীদ মিনার ভ্রমণে পানি, শৌচাগার, ছায়া ও বিশ্রামের ব্যবহারিক পরিকল্পনা—যা যাচাই করা যায়নি তা আলাদা করে জানিয়ে, অনুমান না করে।',
      h1: 'পানি, শৌচাগার ও বিশ্রামের পরিকল্পনা',
      lead:
        'চত্বরটি খোলা এবং ছায়া সীমিত, আর ভেতরে দর্শকদের জন্য নির্দিষ্ট শৌচাগারের তথ্য এই গাইডে যাচাই করা যায়নি। তাই আগে থেকে পানি, বিশ্রাম ও সুবিধার পরিকল্পনা করে গেলে ভ্রমণ অনেক সহজ হয়।',
      facts: [
        { label: 'ছায়া', value: 'সীমিত' },
        { label: 'পানি', value: 'নিজে সঙ্গে আনুন' },
        { label: 'শৌচাগার', value: 'যাচাই করা যায়নি' },
        { label: 'ব্যস্ততম দিন', value: '২১ ফেব্রুয়ারি' },
      ],
      sections: [
        {
          heading: 'পানি',
          paragraphs: [
            'খোলা চত্বরে রোদের তাপ ভালোই লাগে, বিশেষত দুপুরের দিকে। নিজের পানির বোতল সঙ্গে রাখলে বারবার খোঁজাখুঁজি করতে হয় না।',
            'কেনার ক্ষেত্রে সিল করা বোতল বেছে নেওয়াই নিরাপদ অভ্যাস।',
          ],
        },
        {
          heading: 'শৌচাগার',
          paragraphs: [
            'চত্বরের ভেতরে দর্শকদের জন্য নির্দিষ্ট শৌচাগার কোথায়, তা এই গাইডে নিশ্চিত করা যায়নি—তাই কোনো ঠিকানা অনুমান করে লেখা হয়নি।',
            'সাধারণভাবে কাছের জাদুঘর বা যে রেস্তোরাঁয় খাবেন, সেখানকার সুবিধা ব্যবহার করা যায়; তবে সেটিও আগে জেনে নেওয়া ভালো।',
          ],
        },
        {
          heading: 'ছায়া ও বিশ্রাম',
          paragraphs: [
            'চত্বরের ভেতরে বড় গাছের নিচে বা দেওয়ালের পাশে ছায়া মেলে, যেখানে কিছুক্ষণ দাঁড়িয়ে বা বসে বিশ্রাম নেওয়া যায়।',
            'শিশু বা বয়স্ক কেউ সঙ্গে থাকলে যাওয়ার আগেই বিশ্রামের একটি জায়গা ঠিক করে নিলে সুবিধা হয়।',
          ],
        },
        {
          heading: 'ভিড়ের দিন',
          paragraphs: [
            'একুশে ফেব্রুয়ারি বা বড় আয়োজনের সময় ভিড় এত বাড়ে যে সুবিধা ব্যবহার করা কঠিন হয়ে পড়ে।',
            'সেই দিনগুলোতে আগেই পানি ও বিশ্রামের পরিকল্পনা করে যাওয়া জরুরি।',
          ],
        },
        {
          heading: 'যা যাচাই করে নেবেন',
          paragraphs: [
            'খোলার সময়, প্রবেশের শর্ত এবং সুবিধার অবস্থা—এই তিনটি বদলাতে পারে, তাই যাওয়ার আগে সর্বশেষ তথ্য দেখে নেওয়া ভালো।',
            'এই পাতায় যাচাই না করা কোনো সংখ্যা বা ঠিকানা নেই।',
          ],
        },
      ],
      faq: [
        ['চত্বরের ভেতরে পানি বা শৌচাগার আছে?', 'নিশ্চিত তথ্য পাওয়া যায়নি, তাই অনুমান করা হয়নি; নিজে পানি নিয়ে যাওয়া এবং কাছের সুবিধা আগে জেনে নেওয়া ভালো।'],
        ['বিশ্রামের জায়গা কোথায়?', 'চত্বরের ভেতরে গাছের নিচে বা দেওয়ালের পাশে ছায়া মেলে; নির্দিষ্ট কোনো ঠিকানা এখানে বলা হয়নি।'],
        ['ভিড়ের দিন কী আলাদা করতে হবে?', 'একুশে ফেব্রুয়ারিতে সুবিধা ব্যবহার কঠিন হয়, তাই পানি ও বিশ্রাম আগেই পরিকল্পনা করে নেওয়া জরুরি।'],
      ],
      sources: [
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Water, Toilets and Rest Breaks — Practical Notes for a Shaheed Minar Visit',
      description:
        'Practical planning for water, toilets, shade and rest breaks at the Central Shaheed Minar — with anything unverified clearly marked rather than guessed.',
      h1: 'Planning water, toilets and rest breaks',
      lead:
        'The plaza is open and shade is limited, and this guide could not verify where visitor toilets are inside it. Planning water, rest and facilities in advance makes the visit considerably easier.',
      facts: [
        { label: 'Shade', value: 'Limited' },
        { label: 'Water', value: 'Bring your own' },
        { label: 'Toilets', value: 'Not verified' },
        { label: 'Busiest day', value: '21 February' },
      ],
      sections: [
        {
          heading: 'Water',
          paragraphs: [
            'The heat is noticeable in the open plaza, especially around midday. Carrying your own bottle saves repeated searching.',
            'If you buy, choosing a sealed bottle is the safer habit.',
          ],
        },
        {
          heading: 'Toilets',
          paragraphs: [
            'Where visitor toilets are inside the plaza could not be confirmed for this guide, so no location has been guessed at.',
            'In general you can use the facilities at a museum nearby or at a restaurant you are patronising, but check first.',
          ],
        },
        {
          heading: 'Shade and resting',
          paragraphs: [
            'Inside the plaza there is shade under the larger trees and beside walls, where you can stand or sit for a few minutes.',
            'If children or older visitors are with you, deciding on a rest point before you arrive helps.',
          ],
        },
        {
          heading: 'On crowded days',
          paragraphs: [
            'On 21 February and during major events the crowd grows large enough that using facilities becomes difficult.',
            'On those days, planning water and rest in advance is essential.',
          ],
        },
        {
          heading: 'What to verify',
          paragraphs: [
            'Opening hours, access conditions and the state of facilities can all change, so check the latest information before you go.',
            'This page contains no figures or addresses that have not been verified.',
          ],
        },
      ],
      faq: [
        ['Are there water points or toilets inside the plaza?', 'No confirmed information was available, so nothing has been assumed; bring your own water and check nearby facilities in advance.'],
        ['Where can I rest?', 'There is shade under trees and beside walls inside the plaza; no specific location is given here.'],
        ['What changes on crowded days?', 'On 21 February using facilities becomes difficult, so plan water and rest in advance.'],
      ],
      sources: [
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'stay/shahbag-vs-motijheel',
    section: 'stay',
    priority: 'P2',
    related: ['visit/dhaka-university-metro', 'visit/from-motijheel', 'food/shahbag', 'nearby/bangladesh-national-museum'],
    bn: {
      seoTitle: 'শহীদ মিনারের কাছে থাকবেন কোথায়? শাহবাগ বনাম মতিঝিল',
      description:
        'শহীদ মিনার ভ্রমণে শাহবাগ ও মতিঝিল—দুই এলাকার তুলনা: মেট্রো সংযোগ, কার জন্য কোন এলাকা সুবিধাজনক এবং বুকিংয়ের আগে কী যাচাই করবেন।',
      h1: 'কোথায় থাকবেন: শাহবাগ না মতিঝিল?',
      lead:
        'শহীদ মিনার ভ্রমণের পরিকল্পনায় সবচেয়ে বেশি আলোচনায় আসে শাহবাগ ও মতিঝিল—দুটি এলাকাই MRT লাইন ৬-এ যুক্ত, কিন্তু চরিত্র আলাদা। শাহবাগ স্মৃতিসৌধের কাছে, আর মতিঝিল বাণিজ্যিক এলাকা এবং তুলনামূলক দূরে।',
      facts: [
        { label: 'শাহবাগ', value: 'স্মৃতিসৌধের কাছে' },
        { label: 'মতিঝিল', value: 'বাণিজ্যিক এলাকা' },
        { label: 'মেট্রো', value: 'MRT লাইন ৬ — দুই এলাকাতেই' },
        { label: 'যাচাই করুন', value: 'হোটেলের সাম্প্রতিক তথ্য' },
      ],
      sections: [
        {
          heading: 'দুটি এলাকার চরিত্র',
          paragraphs: [
            'শাহবাগ বিশ্ববিদ্যালয়, হাসপাতাল, জাদুঘর ও উদ্যানের কাছে হওয়ায় দিনের বেলা ব্যস্ত থাকে, আর রাতে তুলনামূলক শান্ত হয়ে যায়।',
            'মতিঝিল অফিস ও ব্যাংকের এলাকা—অফিস সময়ে ব্যস্ত, আর দিন শেষে অনেকটাই ফাঁকা।',
          ],
        },
        {
          heading: 'মেট্রো সংযোগ',
          paragraphs: [
            'MRT লাইন ৬-এর শাহবাগ ও ঢাকা বিশ্ববিদ্যালয় স্টেশন স্মৃতিসৌধের কাছেই; মতিঝিল স্টেশনও একই লাইনে, তবে সেখান থেকে স্মৃতিসৌধে পৌঁছাতে আরও পথ পেরোতে হয়।',
            'এই একটি কারণে ভ্রমণের মূল লক্ষ্য স্মৃতিসৌধ হলে শাহবাগ সাধারণত বেশি সুবিধাজনক।',
          ],
        },
        {
          heading: 'কোন এলাকা কার জন্য',
          paragraphs: [
            'যাঁরা স্মৃতিসৌধের কাছে থেকে অল্প হেঁটে ঘুরতে চান, তাঁদের জন্য শাহবাগ বেশি মানানসই।',
            'আর যাঁদের কাজের সূত্রে অফিস-কেন্দ্রিক এলাকায় থাকার দরকার, তাঁদের জন্য মতিঝিল বেশি সুবিধাজনক হতে পারে—তবে সেক্ষেত্রে যাতায়াতের সময় বেশি ধরতে হবে।',
          ],
        },
        {
          heading: 'বুকিংয়ের আগে যা যাচাই করবেন',
          paragraphs: [
            'হোটেলের সাম্প্রতিক রিভিউ, চেক-ইন ও চেক-আউটের সময় এবং পরিবহন সংযোগ—এই তিনটি দেখে নিলে পরে অসুবিধা কম হয়।',
            'এই গাইডে কোনো নির্দিষ্ট হোটেলের নাম বা দাম দেওয়া হয়নি, কারণ সেগুলো স্বাধীনভাবে যাচাই করা যায়নি।',
          ],
        },
        {
          heading: 'মৌসুমি চাহিদা',
          paragraphs: [
            'একুশে ফেব্রুয়ারি ও বড় আয়োজনের সময় চাহিদা বাড়ে, ফলে কাছের এলাকায় জায়গা পেতে দেরি হয়ে যেতে পারে।',
            'সেই সময়ে পড়লে আগেই বুক করে রাখা নিরাপদ।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারের সবচেয়ে কাছে কোন এলাকা?', 'শাহবাগ; এখান থেকে স্মৃতিসৌধ হেঁটে বা অল্প পথ পেরিয়ে পৌঁছানো যায়।'],
        ['মতিঝিল থেকে যাওয়া কি কঠিন?', 'MRT লাইন ৬-এ সরাসরি যাওয়া যায়, তবে শাহবাগের তুলনায় পথ বেশি।'],
        ['কোন হোটেল ভালো?', 'নির্দিষ্ট সুপারিশ দেওয়া হয়নি, কারণ হোটেলের অবস্থা বদলায়; সাম্প্রতিক রিভিউ দেখে সিদ্ধান্ত নেওয়া ভালো।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Where to Stay Near the Shaheed Minar — Shahbag or Motijheel?',
      description:
        'Comparing Shahbag and Motijheel as bases for a Central Shaheed Minar visit: metro connections, who each area suits, and what to check before booking.',
      h1: 'Where to stay: Shahbag or Motijheel?',
      lead:
        'Two areas come up most often when planning a Central Shaheed Minar visit — Shahbag and Motijheel. Both are on MRT Line 6, but their character differs: Shahbag is close to the memorial, while Motijheel is a commercial district and comparatively further away.',
      facts: [
        { label: 'Shahbag', value: 'Close to the memorial' },
        { label: 'Motijheel', value: 'Commercial district' },
        { label: 'Metro', value: 'MRT Line 6 — both areas' },
        { label: 'Verify', value: 'Current hotel information' },
      ],
      sections: [
        {
          heading: 'The character of each area',
          paragraphs: [
            'Shahbag sits close to the university, hospitals, the museum and the park, so it is busy by day and comparatively quiet at night.',
            'Motijheel is an office and banking district — busy during working hours and considerably emptier once the day ends.',
          ],
        },
        {
          heading: 'Metro connections',
          paragraphs: [
            'The Shahbag and Dhaka University stations of MRT Line 6 are both close to the memorial. Motijheel station is on the same line, but reaching the memorial from there takes longer.',
            'For that reason, if the memorial is the main purpose of the trip, Shahbag is usually the more convenient base.',
          ],
        },
        {
          heading: 'Which area suits whom',
          paragraphs: [
            'If you want to stay near the memorial and walk to what is around it, Shahbag fits better.',
            'If your work or other plans centre on the office district, Motijheel may suit better — but allow more travel time.',
          ],
        },
        {
          heading: 'What to check before booking',
          paragraphs: [
            'Recent reviews, check-in and check-out times, and transport links are the three things worth checking to avoid problems later.',
            'No specific hotel is named and no rates are quoted in this guide, because those could not be independently verified.',
          ],
        },
        {
          heading: 'Seasonal demand',
          paragraphs: [
            'Demand rises around 21 February and during major events, so rooms nearby can become harder to find.',
            'If your trip falls in that window, booking early is safer.',
          ],
        },
      ],
      faq: [
        ['Which area is closest to the Shaheed Minar?', 'Shahbag; from there the memorial is a walk or a short distance away.'],
        ['Is it difficult to get there from Motijheel?', 'MRT Line 6 takes you directly, but the journey is longer than from Shahbag.'],
        ['Which hotel is best?', 'No specific recommendation is given, because hotel conditions change; decide using recent reviews.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },
];
