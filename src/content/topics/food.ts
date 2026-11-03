import type { Topic } from './types';

/**
 * আশপাশের খাবার ও বিশ্রাম — এলাকা-ভিত্তিক সিদ্ধান্তের নির্দেশিকা।
 * নির্দিষ্ট রেস্তোরাঁর নাম, দাম বা “সেরা” তালিকা স্বাধীনভাবে যাচাই করা যায়নি,
 * তাই এখানে কিছু বানানো হয়নি; বদলে এলাকা চেনা ও যাচাইয়ের নিয়ম দেওয়া হয়েছে।
 */
export const foodTopics: Topic[] = [
  {
    path: 'food/shahbag',
    section: 'food',
    priority: 'P2',
    related: ['food/tsc-tea-snacks', 'nearby/bangladesh-national-museum', 'visit/from-shahbag', 'nearby/suhrawardy-udyan'],
    bn: {
      seoTitle: 'শহীদ মিনারের কাছে খাবার — শাহবাগ এলাকার ব্যবহারিক গাইড',
      description:
        'শহীদ মিনার থেকে শাহবাগ এলাকায় খাবার খোঁজার ব্যবহারিক দিক: এলাকা চেনা, দোকান বাছাইয়ের নিয়ম, সময় ও ভিড়—নির্দিষ্ট দোকানের নাম বা দাম ছাড়াই।',
      h1: 'শহীদ মিনারের কাছে খাবার: শাহবাগ এলাকা',
      lead:
        'স্মৃতিসৌধ থেকে হেঁটে বা অল্প পথ পেরিয়ে পৌঁছানো যায় এমন কেন্দ্রীয় এলাকা হলো শাহবাগ—ঢাকা বিশ্ববিদ্যালয়, হাসপাতাল ও দপ্তর-অফিসের মিলনস্থল। এখানে খাবারের দোকান ও রেস্তোরাঁ রয়েছে, তবে এই গাইডে নির্দিষ্ট দোকানের নাম বা দাম দেওয়া হয়নি, কারণ সেগুলো স্বাধীনভাবে যাচাই করা যায়নি।',
      facts: [
        { label: 'এলাকা', value: 'শাহবাগ, ঢাকা' },
        { label: 'মেট্রো', value: 'MRT লাইন ৬ — শাহবাগ স্টেশন' },
        { label: 'নিকটস্থ', value: 'ঢাকা বিশ্ববিদ্যালয়, জাতীয় জাদুঘর' },
        { label: 'এই পাতায় নেই', value: 'দোকানের নাম ও দাম' },
      ],
      sections: [
        {
          heading: 'এলাকাটি চেনা',
          paragraphs: [
            'শাহবাগ ঢাকার একটি কেন্দ্রীয় মোড়, যার আশপাশেই ঢাকা বিশ্ববিদ্যালয়, সোহরাওয়ার্দী উদ্যান, বাংলা একাডেমি ও জাতীয় জাদুঘরের মতো স্থানগুলো রয়েছে।',
            'এই ঘনত্বের কারণেই শিক্ষার্থী, হাসপাতালে আসা মানুষ ও অফিসযাত্রীদের চলাচল সারা দিন লেগে থাকে—খাবারের জন্য এলাকা বাছাইয়ের সময় এটি মনে রাখা ভালো।',
          ],
        },
        {
          heading: 'দোকান বাছাইয়ের ব্যবহারিক নিয়ম',
          paragraphs: [
            'কাছাকাছি খাবারের দোকান খুঁজতে ম্যাপ অ্যাপই সবচেয়ে সহজ পথ, তবে সেখানকার সাম্প্রতিক রিভিউ ও ছবি দেখে নেওয়া জরুরি—বছরখানেক আগের তথ্য এখন আর ঠিক নাও থাকতে পারে।',
            'ছুটির দিনে বা বিশেষ আয়োজনে দোকান বন্ধ থাকতে পারে, তাই যাওয়ার আগে খোলার সময় যাচাই করে নিন।',
            'যেখানে স্থানীয় ভিড় স্বাভাবিকভাবে থাকে, সেখানে সাধারণত খাবারের সরবরাহ ও গতি ভালো থাকে—এটি বাছাইয়ের একটি সরল সূত্র।',
          ],
        },
        {
          heading: 'সময় ও ভিড়',
          paragraphs: [
            'দুপুরের খাবারের সময় এবং অফিস ছাড়ার সময় শাহবাগ এলাকায় ভিড় বাড়ে; হাসপাতালের ভিজিটিং আওয়ারেও চাপ থাকে।',
            'এই সময়গুলো এড়িয়ে গেলে বসে খাওয়ার জায়গা মেলার সম্ভাবনা বেড়ে যায়, আর রাস্তা পার হওয়াও সহজ হয়।',
          ],
        },
        {
          heading: 'খরচ নিয়ে বাস্তবতা',
          paragraphs: [
            'দাম দোকানভেদে আলাদা হয় এবং সময়ের সঙ্গে বদলায়, তাই এই গাইডে কোনো অঙ্ক লেখা হয়নি।',
            'কার্ড সব জায়গায় চলে—এমন ধরে নেওয়া ঠিক নয়; নগদ টাকা সঙ্গে রাখলে ঝামেলা কমে।',
          ],
        },
        {
          heading: 'স্থানের শিষ্টাচার',
          paragraphs: [
            'স্মৃতিসৌধ চত্বরের ভেতরে খাবার খাওয়া বা পিকনিকের মতো আয়োজন করা যায় না; স্থানটি শোকের এবং শ্রদ্ধার।',
            'খাওয়া-দাওয়ার পরিকল্পনা তাই কাছের এলাকায় রেখে দেওয়াই ভালো, আর চত্বরে ঢোকার সময় খাবারের প্যাকেট সঙ্গে না নেওয়াই সুবিধাজনক।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারের ভেতরে খাবার পাওয়া যায়?', 'না। চত্বরটি স্মৃতিস্থান, খাবারের জায়গা নয়; কাছের এলাকায় গিয়ে খাওয়া উচিত।'],
        ['নির্দিষ্ট রেস্তোরাঁর নাম কেন দেওয়া হয়নি?', 'স্বাধীনভাবে যাচাই করা যায়নি বলে। বাসি বা ভুল তথ্যের চেয়ে দোকান বাছাইয়ের নিয়ম দেওয়া বেশি কাজে লাগে।'],
        ['কখন গেলে ভিড় কম থাকে?', 'অফিস ছাড়ার সময় ও হাসপাতালের ভিজিটিং আওয়ার এড়িয়ে গেলে ভিড় সাধারণত কম থাকে।'],
      ],
      sources: [
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Food Near the Shaheed Minar — A Practical Shahbag Area Guide',
      description:
        'Practical points on finding food near the Central Shaheed Minar in the Shahbag area: knowing the area, how to choose a place, timing and crowds — without naming businesses or prices.',
      h1: 'Food near the Shaheed Minar: the Shahbag area',
      lead:
        'Shahbag is the central area you can reach from the memorial on foot or after a short distance — a meeting point for Dhaka University, hospitals and government offices. It does have food shops and restaurants, but this guide names no particular business and quotes no prices, because those could not be independently verified.',
      facts: [
        { label: 'Area', value: 'Shahbag, Dhaka' },
        { label: 'Metro', value: 'MRT Line 6 — Shahbag station' },
        { label: 'Nearby', value: 'University of Dhaka, National Museum' },
        { label: 'Not in this page', value: 'Business names and prices' },
      ],
      sections: [
        {
          heading: 'Knowing the area',
          paragraphs: [
            'Shahbag is one of Dhaka’s central junctions, and the University of Dhaka, Suhrawardy Udyan, Bangla Academy and the National Museum are all close by.',
            'That concentration keeps students, hospital visitors and office commuters moving through the area all day — worth bearing in mind when choosing where to eat.',
          ],
        },
        {
          heading: 'How to choose a place',
          paragraphs: [
            'A map app is the simplest way to find food nearby, but check recent reviews and photographs: information from a year ago may no longer be accurate.',
            'Places can be closed on holidays or during special events, so confirm opening hours before setting out.',
            'Where there is a steady local crowd, supplies and service are usually in good order — a simple rule of thumb.',
          ],
        },
        {
          heading: 'Timing and crowds',
          paragraphs: [
            'Shahbag gets busier at lunchtime, when offices close, and during hospital visiting hours.',
            'Avoiding those windows makes it more likely you will find a seat and easier to cross the roads.',
          ],
        },
        {
          heading: 'Being realistic about cost',
          paragraphs: [
            'Prices differ from place to place and change over time, so no figures are quoted here.',
            'Do not assume cards are accepted everywhere; carrying some cash avoids inconvenience.',
          ],
        },
        {
          heading: 'Etiquette at the memorial',
          paragraphs: [
            'Eating inside the memorial plaza, or treating it as a picnic spot, is not appropriate; it is a place of mourning and respect.',
            'Keeping your meal plans in the surrounding area, and leaving food packets behind when you enter the plaza, is the easier choice.',
          ],
        },
      ],
      faq: [
        ['Is food available inside the Shaheed Minar?', 'No. The plaza is a memorial, not a place to eat; plan your meal in the surrounding area instead.'],
        ['Why are no specific restaurants named?', 'Because they could not be independently verified. Rules for choosing a place are more useful than stale or inaccurate detail.'],
        ['When is it less crowded?', 'Outside the office-closing rush and outside hospital visiting hours, the area is usually quieter.'],
      ],
      sources: [
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'food/tsc-tea-snacks',
    section: 'food',
    priority: 'P2',
    related: ['food/shahbag', 'nearby/tsc', 'guides/short-visit', 'nearby/curzon-hall'],
    bn: {
      seoTitle: 'TSC ও বিশ্ববিদ্যালয় এলাকায় চা-নাস্তা — ব্যবহারিক নির্দেশিকা',
      description:
        'ঢাকা বিশ্ববিদ্যালয়ের TSC ও আশপাশের এলাকায় চা, নাস্তা ও বিশ্রামের ব্যবহারিক দিক: ক্যাম্পাস-সুবিধা ব্যবহারে সতর্কতা, সময় এবং আগে থেকে যাচাই করার বিষয়।',
      h1: 'TSC ও বিশ্ববিদ্যালয় এলাকায় চা ও নাস্তা',
      lead:
        'শহীদ মিনার থেকে অল্প পথেই ঢাকা বিশ্ববিদ্যালয়ের TSC (শিক্ষক-শিক্ষার্থী কেন্দ্র) এলাকা, যেখানে শিক্ষার্থীদের চলাচল সারা দিন চলে। এই গাইডে নির্দিষ্ট ক্যাফে বা দোকানের নাম নেই, কারণ ক্যাম্পাসের সুবিধা কাদের জন্য খোলা—সেটি আগে যাচাই করা প্রয়োজন।',
      facts: [
        { label: 'এলাকা', value: 'TSC, ঢাকা বিশ্ববিদ্যালয়' },
        { label: 'ধরন', value: 'ক্যাম্পাস-কেন্দ্রিক এলাকা' },
        { label: 'যাচাই করুন', value: 'কারা সুবিধা ব্যবহার করতে পারেন' },
        { label: 'এই পাতায় নেই', value: 'দোকানের নাম ও দাম' },
      ],
      sections: [
        {
          heading: 'এলাকাটি চেনা',
          paragraphs: [
            'TSC ঢাকা বিশ্ববিদ্যালয়ের সাংস্কৃতিক কার্যক্রমের একটি কেন্দ্র হিসেবে পরিচিত, আর সন্ধান করলে আশপাশেই শিক্ষার্থীদের চলাচলের মূল পথগুলো পাওয়া যায়।',
            'শহীদ মিনার থেকে এখানে পৌঁছাতে হলে ক্যাম্পাসের ভেতরের পথ ধরতে হয়, তাই মানচিত্রে আগে পথটি দেখে নেওয়া ভালো।',
          ],
        },
        {
          heading: 'ক্যাম্পাস-সুবিধা ব্যবহারে সতর্কতা',
          paragraphs: [
            'বিশ্ববিদ্যালয়ের কিছু ক্যাফে বা ক্যান্টিন কেবল শিক্ষার্থী ও শিক্ষকদের জন্য নির্ধারিত থাকে। বাইরের দর্শক ঢুকতে পারবেন কি না, তা এই গাইডে নিশ্চিত করা যায়নি।',
            'অতএব কোনো সুবিধার কথা নিশ্চিত ধরে নিয়ে যাওয়ার আগে সংশ্লিষ্ট দপ্তর বা পরিচিত কারও কাছে জেনে নেওয়া বুদ্ধিমানের কাজ।',
          ],
        },
        {
          heading: 'আশপাশের বিকল্প',
          paragraphs: [
            'ক্যাম্পাসের বাইরে রাস্তার ধারেও চা ও নাস্তার দোকান থাকে, যা সাধারণত সবার জন্য খোলা।',
            'সেখানে যাওয়ার আগেও একই নিয়ম—খোলার সময়, পরিচ্ছন্নতা ও সাম্প্রতিক রিভিউ যাচাই করে নেওয়া।',
          ],
        },
        {
          heading: 'সময়',
          paragraphs: [
            'ক্লাস শুরুর আগে ও ছাড়ার পর ক্যাম্পাস এলাকায় ভিড় বাড়ে; পরীক্ষার সময়সূচি আলাদা ধরনের ভিড় তৈরি করে।',
            'সাথে ছুটির দিনে বিশ্ববিদ্যালয় এলাকা অনেকটাই ফাঁকা হয়ে যায়, তাই সে দিন খাবারের দোকানও বন্ধ থাকতে পারে।',
          ],
        },
        {
          heading: 'শিষ্টাচার',
          paragraphs: [
            'এটি পড়ার ও সাংস্কৃতিক কাজের পরিবেশ—উচ্চ স্বরে কথা বলা বা দলবেঁধে হৈচৈ করা এখানে মানায় না।',
            'ক্যাম্পাসের নিয়ম ও নির্দেশনা মানলে দর্শক হিসেবে আপনার উপস্থিতি কারও জন্য অসুবিধার কারণ হয় না।',
          ],
        },
      ],
      faq: [
        ['TSC-তে বাইরের দর্শক ঢুকতে পারেন?', 'এটি ক্যাম্পাস-নির্ভর বিষয় এবং এখানে নিশ্চিত করা যায়নি; যাওয়ার আগে জেনে নেওয়া ভালো।'],
        ['দাম কত?', 'এই গাইডে কোনো দাম লেখা হয়নি, কারণ স্বাধীনভাবে যাচাই করা যায়নি।'],
        ['শহীদ মিনার থেকে কত দূরে?', 'নির্দিষ্ট দূরত্ব বা সময় এখানে বলা হয়নি; মানচিত্রে পথ দেখে যাওয়াই ভালো।'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Tea and Snacks Around TSC and the University Area — Practical Guide',
      description:
        'Practical points on tea, snacks and resting around the TSC and the wider University of Dhaka area: campus facilities and who they are open to, timing, and what to check in advance.',
      h1: 'Tea and snacks around TSC and the university area',
      lead:
        'The TSC (Teacher-Student Centre) area of the University of Dhaka is a short distance from the Shaheed Minar, with students moving through it all day. This guide names no particular café or shop, because whether campus facilities are open to outside visitors needs verification first.',
      facts: [
        { label: 'Area', value: 'TSC, University of Dhaka' },
        { label: 'Type', value: 'Campus-oriented area' },
        { label: 'Verify', value: 'Who may use the facilities' },
        { label: 'Not in this page', value: 'Business names and prices' },
      ],
      sections: [
        {
          heading: 'Knowing the area',
          paragraphs: [
            'TSC is known as a centre of cultural activity at the University of Dhaka, and the main student routes run close to it.',
            'Reaching it from the Shaheed Minar means taking paths inside the campus, so looking up the route on a map first is worthwhile.',
          ],
        },
        {
          heading: 'Campus facilities and who they serve',
          paragraphs: [
            'Some campus cafés or canteens are reserved for students and staff. Whether outside visitors may enter could not be confirmed for this guide.',
            'So rather than assuming a facility is open to you, ask the relevant office or someone who knows the campus before setting out.',
          ],
        },
        {
          heading: 'Alternatives nearby',
          paragraphs: [
            'Along the roads outside the campus there are tea and snack shops that are generally open to everyone.',
            'The same rule applies there: check opening hours, cleanliness and recent reviews first.',
          ],
        },
        {
          heading: 'Timing',
          paragraphs: [
            'The campus area gets busier before classes begin and when they finish; exam periods create a different pattern of activity.',
            'On holidays the university area empties out considerably, so food shops may be closed as well.',
          ],
        },
        {
          heading: 'Etiquette',
          paragraphs: [
            'This is a place for study and cultural work — loud conversation or noisy groups do not fit here.',
            'Following campus rules and instructions keeps your visit from becoming an inconvenience to anyone.',
          ],
        },
      ],
      faq: [
        ['May outside visitors enter TSC?', 'This depends on campus arrangements and could not be confirmed here; it is better to ask before you go.'],
        ['How much does it cost?', 'No prices are quoted in this guide because they could not be independently verified.'],
        ['How far is it from the Shaheed Minar?', 'No specific distance or time is given; look at the route on a map before setting out.'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'food/chankharpul',
    section: 'food',
    priority: 'P2',
    related: ['food/shahbag', 'nearby/dhakeshwari-temple', 'history/dhaka-medical-college-1952', 'visit/accessibility'],
    bn: {
      seoTitle: 'চাঁখরপুল এলাকায় খাবার — শহীদ মিনারের অপর পাশের গাইড',
      description:
        'শহীদ মিনারের অপর দিকের চাঁখরপুল এলাকায় খাবারের ব্যবহারিক নির্দেশিকা: এলাকা চেনা, হাসপাতাল-কেন্দ্রিক ভিড়, সময় এবং যাচাই করে নেওয়ার বিষয়।',
      h1: 'চাঁখরপুল এলাকায় খাবার: শহীদ মিনারের অপর পাশ',
      lead:
        'সেক্রেটারিয়েট রোডের অপর দিকে, ঢাকা মেডিকেল কলেজ হাসপাতালের কাছাকাছি চাঁখরপুল এলাকা। হাসপাতাল-কেন্দ্রিক চলাচলের কারণে এখানকার খাবারের দোকানগুলো দিনের নির্দিষ্ট সময়ে ব্যস্ত থাকে। এই গাইডে নির্দিষ্ট দোকানের নাম বা দাম নেই—স্বাধীনভাবে যাচাই করা যায়নি বলে।',
      facts: [
        { label: 'এলাকা', value: 'চাঁখরপুল, ঢাকা' },
        { label: 'নিকটস্থ', value: 'ঢাকা মেডিকেল কলেজ হাসপাতাল' },
        { label: 'ধরন', value: 'হাসপাতাল-কেন্দ্রিক ভিড়' },
        { label: 'এই পাতায় নেই', value: 'দোকানের নাম ও দাম' },
      ],
      sections: [
        {
          heading: 'এলাকাটি চেনা',
          paragraphs: [
            'চাঁখরপুল সেক্রেটারিয়েট রোডের অপর প্রান্তে অবস্থিত এবং ঢাকা মেডিকেল কলেজ হাসপাতাল এর কাছেই—যে হাসপাতালের নাম ১৯৫২ সালের ভাষা আন্দোলনের ঘটনার সঙ্গে যুক্ত।',
            'তাই স্মৃতিসৌধ দেখে ঘুরে দাঁড়ালেই হাসপাতাল ও হাসপাতাল-কেন্দ্রিক এই এলাকার দিকে চলে যাওয়া যায়।',
          ],
        },
        {
          heading: 'হাসপাতাল-কেন্দ্রিক ভিড়',
          paragraphs: [
            'রোগী, অভিভাবক ও হাসপাতালকর্মীদের চলাচলে দিনের বেলা এলাকাটি ব্যস্ত থাকে; সকাল ও দুপুরের দিকে চাপ সাধারণত বেশি।',
            'ভিড় বোঝা থাকলে হাঁটার পথ ও রাস্তা পার হওয়ার জন্য বেশি সময় ধরে নেওয়া ভালো।',
          ],
        },
        {
          heading: 'দোকান বাছাই',
          paragraphs: [
            'ম্যাপ অ্যাপে এলাকাটি দেখে সাম্প্রতিক রিভিউ মিলিয়ে নিলে দোকান বাছাই সহজ হয়; পুরনো তথ্য এখন আর ঠিক না-ও থাকতে পারে।',
            'পরিচ্ছন্নতা, ভিড় এবং খোলার সময়—এই তিনটি দেখে সিদ্ধান্ত নিলে ঝুঁকি কমে।',
          ],
        },
        {
          heading: 'যে বিষয়গুলো আগে যাচাই করবেন',
          paragraphs: [
            'ছুটির দিনে খোলা থাকবে কি না, হুইলচেয়ার নিয়ে ঢোকার সুবিধা আছে কি না—এমন বিষয় দোকানভেদে আলাদা এবং এখানে নিশ্চিত করা যায়নি।',
            'নিশ্চিত না হওয়া তথ্য অনুমান করে না লিখে যাচাই করে নেওয়ার পরামর্শই দেওয়া হচ্ছে।',
          ],
        },
        {
          heading: 'শিষ্টাচার',
          paragraphs: [
            'হাসপাতালের আশপাশে উচ্চ শব্দ ও ভিড় তৈরি করা এড়িয়ে চলুন; এখানে অসুস্থ মানুষ ও তাদের পরিবার রয়েছে।',
            'স্মৃতিসৌধ চত্বরের ভেতরে খাবার খাওয়া যায় না—সেটি শ্রদ্ধার স্থান।',
          ],
        },
      ],
      faq: [
        ['চাঁখরপুল কোথায়?', 'সেক্রেটারিয়েট রোডের অপর প্রান্তে, ঢাকা মেডিকেল কলেজ হাসপাতালের কাছাকাছি।'],
        ['নির্দিষ্ট দোকানের নাম কেন নেই?', 'স্বাধীনভাবে যাচাই করা যায়নি বলে; অনুমানের নাম বা দাম লেখা হয়নি।'],
        ['সবচেয়ে কম ভিড় কখন?', 'হাসপাতালের ভিজিটিং আওয়ারের বাইরে সাধারণত চাপ কম থাকে।'],
      ],
      sources: [
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Food in the Chankharpul Area — The Other Side of the Shaheed Minar',
      description:
        'A practical guide to food in the Chankharpul area on the other side of the Central Shaheed Minar: knowing the area, hospital-related crowds, timing, and what to check.',
      h1: 'Food in Chankharpul: the other side of the Shaheed Minar',
      lead:
        'Chankharpul lies on the other side of Secretariat Road, close to Dhaka Medical College Hospital. Because of the hospital traffic, food shops here are busy at particular times of day. This guide names no specific business and quotes no prices, because those could not be independently verified.',
      facts: [
        { label: 'Area', value: 'Chankharpul, Dhaka' },
        { label: 'Nearby', value: 'Dhaka Medical College Hospital' },
        { label: 'Character', value: 'Hospital-related crowds' },
        { label: 'Not in this page', value: 'Business names and prices' },
      ],
      sections: [
        {
          heading: 'Knowing the area',
          paragraphs: [
            'Chankharpul sits at the other end of Secretariat Road, close to Dhaka Medical College Hospital — the hospital associated with the events of the 1952 Language Movement.',
            'So having seen the memorial, you can simply turn towards the hospital and this hospital-oriented part of the city.',
          ],
        },
        {
          heading: 'Hospital-related crowds',
          paragraphs: [
            'Patients, relatives and hospital staff keep the area busy during the day, with pressure usually heavier in the morning and at midday.',
            'If you expect crowds, allow more time for walking and for crossing roads.',
          ],
        },
        {
          heading: 'Choosing a place',
          paragraphs: [
            'Looking at the area on a map app and cross-checking recent reviews makes choosing simpler; older information may no longer be accurate.',
            'Cleanliness, the amount of trade and opening hours are three useful signals.',
          ],
        },
        {
          heading: 'What to check beforehand',
          paragraphs: [
            'Whether a place is open on holidays, or whether it has step-free access, varies from one business to another and could not be confirmed here.',
            'Rather than guessing at unconfirmed detail, the advice is to check.',
          ],
        },
        {
          heading: 'Etiquette',
          paragraphs: [
            'Avoid making noise or adding to congestion around the hospital; there are unwell people and their families here.',
            'Eating inside the memorial plaza is not permitted — it is a place of respect.',
          ],
        },
      ],
      faq: [
        ['Where is Chankharpul?', 'At the other end of Secretariat Road, close to Dhaka Medical College Hospital.'],
        ['Why are no specific businesses named?', 'Because they could not be independently verified, and no invented names or prices have been added.'],
        ['When is it least crowded?', 'Outside hospital visiting hours the area is usually quieter.'],
      ],
      sources: [
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
        { label: 'Bangladesh Tourism Board — Dhaka', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },
];
