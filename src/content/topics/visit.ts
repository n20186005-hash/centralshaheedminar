import type { Topic } from './types';

/**
 * অবস্থান, মানচিত্র ও যাতায়াত — যাচাইযোগ্য তথ্যের বাইরে গিয়ে কোনো ভাড়া,
 * সময় বা দূরত্ব বানানো হয়নি; যেখানে নিশ্চিত নয় সেখানে স্পষ্টভাবে যাচাইয়ের অনুরোধ।
 */
export const visitTopics: Topic[] = [
  {
    path: 'visit/location-map',
    section: 'visit',
    priority: 'P0',
    related: ['visit/dhaka-university-metro', 'history/dhaka-medical-college-1952', 'guides/short-visit', 'nearby/curzon-hall'],
    bn: {
      seoTitle: 'কেন্দ্রীয় শহীদ মিনার কোথায় অবস্থিত? ঠিকানা, মানচিত্র ও যাওয়ার উপায়',
      description:
        'কেন্দ্রীয় শহীদ মিনারের সঠিক ঠিকানা, প্লাস কোড, স্থানাঙ্ক ও মানচিত্রে চেনার উপায়—সাথে ম্যাপ পিন ও প্রকৃত প্রবেশপথের পার্থক্য সম্পর্কে সতর্ক নির্দেশনা।',
      h1: 'কেন্দ্রীয় শহীদ মিনার কোথায় অবস্থিত?',
      lead:
        'কেন্দ্রীয় শহীদ মিনার ঢাকার সেক্রেটারিয়েট রোডে, ঢাকা মেডিকেল কলেজ গেটের কাছে অবস্থিত; প্লাস কোড P9GW+VJ এবং স্থানাঙ্ক ২৩.৭২৭২৩৮, ৯০.৩৯৬৬২৫।',
      facts: [
        { label: 'ঠিকানা', value: 'সেক্রেটারিয়েট রোড, ঢাকা ১০০০' },
        { label: 'প্লাস কোড', value: 'P9GW+VJ, ঢাকা' },
        { label: 'স্থানাঙ্ক', value: '২৩.৭২৭২৩৮, ৯০.৩৯৬৬২৫' },
        { label: 'নিকটতম মেট্রো', value: 'MRT লাইন ৬ — ঢাকা বিশ্ববিদ্যালয় স্টেশন' },
      ],
      sections: [
        {
          heading: 'ঠিকানা ও প্লাস কোড',
          paragraphs: [
            'Google Maps-এ প্রদর্শিত ঠিকানা হলো “Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd, Dhaka 1000”। সাধারণ ঠিকানা হিসেবে এটি ব্যবহারের সময় “ঢাকা মেডিকেল কলেজ গেটের কাছে” অংশটি সবচেয়ে নির্ভরযোগ্য বর্ণনা।',
            'প্লাস কোড P9GW+VJ ঢাকা। কিছু অ্যাপে Plus Code সরাসরি লিখে সার্চ করলে অবস্থানটি দ্রুত পাওয়া যায়।',
          ],
          bullets: [
            'ঠিকানা: সেক্রেটারিয়েট রোড, ঢাকা ১০০০',
            'Plus Code: P9GW+VJ ঢাকা',
            'স্থানাঙ্ক: ২৩.৭২৭২৩৮, ৯০.৩৯৬৬২৫',
          ],
        },
        {
          heading: 'মানচিত্রে চেনার উপায়',
          paragraphs: [
            'মানচিত্রে স্মৃতিসৌধটি ঢাকা বিশ্ববিদ্যালয়, ঢাকা মেডিকেল কলেজ হাসপাতাল ও বাংলা একাডেমি এলাকার মধ্যে অবস্থিত; পাশ দিয়ে সেক্রেটারিয়েট রোড চলে গেছে।',
            'রাইড-হেইলিং অ্যাপে শুধু “University of Dhaka” লিখলে গন্তব্য ভুল জায়গায় পড়তে পারে—সেক্রেটারিয়েট রোড বা মেডিকেল কলেজ গেট অংশটি যোগ করা ভালো।',
          ],
        },
        {
          heading: 'যাওয়ার আগে যা যাচাই করবেন',
          paragraphs: [
            'ম্যাপে চিহ্নিত পিন কোনো নির্দিষ্ট দিনে কোন প্রবেশপথ খোলা থাকবে তা নিশ্চিত করে না। বিশেষত ২১ ফেব্রুয়ারি ও বড় আয়োজনের সময় প্রবেশ ও বাহির পথ আলাদা থাকতে পারে।',
            'তাই যাত্রার আগে চলমান ট্রাফিক ও মেট্রো সময়সূচি এবং স্থানীয় নির্দেশনা যাচাই করে নেওয়া ভালো।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারের সঠিক ঠিকানা কী?', 'Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd, Dhaka 1000, Bangladesh; Plus Code P9GW+VJ।'],
        ['স্থানাঙ্ক কী?', '২৩.৭২৭২৩৮, ৯০.৩৯৬৬২৫ (দশমিক ডিগ্রি)।'],
        ['ম্যাপ পিন কি প্রবেশপথ নির্দেশ করে?', 'না। পিন পয়েন্ট অবস্থান বোঝায়, তবে নির্দিষ্ট দিনে কোন প্রবেশপথ খোলা থাকবে তা নির্ভর করে স্থানীয় ব্যবস্থাপনার ওপর।'],
      ],
      sources: [
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Where Is the Central Shaheed Minar? Address, Map and Plus Code',
      description:
        'The exact address, Plus Code and coordinates of the Central Shaheed Minar in Dhaka, how to find it on a map, and why a map pin does not guarantee a specific open entrance.',
      h1: 'Where is the Central Shaheed Minar?',
      lead:
        'The Central Shaheed Minar is on Secretariat Road in Dhaka, near the Dhaka Medical College gate. Its Plus Code is P9GW+VJ and its coordinates are 23.727238, 90.396625.',
      facts: [
        { label: 'Address', value: 'Secretariat Road, Dhaka 1000' },
        { label: 'Plus code', value: 'P9GW+VJ, Dhaka' },
        { label: 'Coordinates', value: '23.727238, 90.396625' },
        { label: 'Nearest metro', value: 'MRT Line 6 — Dhaka University station' },
      ],
      sections: [
        {
          heading: 'Address and Plus Code',
          paragraphs: [
            'The address shown on Google Maps is “Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd, Dhaka 1000”. The most reliable part of that address to use is “near Dhaka Medical College gate”.',
            'The Plus Code is P9GW+VJ Dhaka. In some apps, entering the Plus Code directly finds the location quickly.',
          ],
          bullets: [
            'Address: Secretariat Road, Dhaka 1000',
            'Plus Code: P9GW+VJ Dhaka',
            'Coordinates: 23.727238, 90.396625',
          ],
        },
        {
          heading: 'How to find it on a map',
          paragraphs: [
            'On a map the monument sits between the University of Dhaka, Dhaka Medical College Hospital and the Bangla Academy area, with Secretariat Road running beside it.',
            'Entering only “University of Dhaka” in a ride-hailing app can drop you in the wrong place; adding Secretariat Road or “medical college gate” is safer.',
          ],
        },
        {
          heading: 'What to verify before you go',
          paragraphs: [
            'A map pin does not guarantee which entrance will be open on a given day. On 21 February and during major events, entry and exit routes may be separated.',
            'Check live traffic and metro schedules, and follow local instructions, before setting out.',
          ],
        },
      ],
      faq: [
        ['What is the exact address of the Shaheed Minar?', 'Near Dhaka Medical College Gate, Secretariat Road, Secretariate Rd, Dhaka 1000, Bangladesh; Plus Code P9GW+VJ.'],
        ['What are the coordinates?', '23.727238, 90.396625 (decimal degrees).'],
        ['Does the map pin indicate an entrance?', 'No. The pin marks the location, but which entrance is open on a given day depends on local arrangements.'],
      ],
      sources: [
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'visit/dhaka-university-metro',
    section: 'visit',
    priority: 'P0',
    related: ['visit/location-map', 'visit/from-shahbag', 'nearby/tsc', 'guides/short-visit'],
    bn: {
      seoTitle: 'ঢাকা বিশ্ববিদ্যালয় মেট্রো স্টেশন থেকে শহীদ মিনার — MRT লাইন ৬',
      description:
        'MRT লাইন ৬-এর “ঢাকা বিশ্ববিদ্যালয়” স্টেশন থেকে কেন্দ্রীয় শহীদ মিনারে যাওয়ার পথ, স্টেশনের অবস্থান, আশপাশের চেনা ল্যান্ডমার্ক এবং যাচাই করে নেওয়ার বিষয়।',
      h1: 'ঢাকা বিশ্ববিদ্যালয় মেট্রো স্টেশন থেকে শহীদ মিনার',
      lead:
        'ঢাকা মাস ট্রানজিট কোম্পানির MRT লাইন ৬-এ “ঢাকা বিশ্ববিদ্যালয়” স্টেশন রয়েছে, যা শহীদ মিনারের সবচেয়ে কাছের রেলভিত্তিক সংযোগ। স্টেশন থেকে বেরিয়ে চেনা ল্যান্ডমার্ক ধরে সেক্রেটারিয়েট রোডের দিকে এগোলে স্মৃতিসৌধে পৌঁছানো যায়।',
      facts: [
        { label: 'লাইন', value: 'MRT লাইন ৬ (DMTCL পরিচালিত)' },
        { label: 'স্টেশন', value: 'ঢাকা বিশ্ববিদ্যালয়' },
        { label: 'সংযোগ', value: 'উত্তরা থেকে মতিঝিল পর্যন্ত' },
        { label: 'যাচাই করুন', value: 'সময়সূচি, ভাড়া ও প্রবেশপথ' },
      ],
      sections: [
        {
          heading: 'MRT লাইন ৬ কী',
          paragraphs: [
            'MRT লাইন ৬ ঢাকার প্রথম নগর রেল, যা ঢাকা মাস ট্রানজিট কোম্পানি লিমিটেড (DMTCL) পরিচালনা করে এবং উত্তরা থেকে মতিঝিল পর্যন্ত বিস্তৃত।',
            'ঢাকা বিশ্ববিদ্যালয় স্টেশনটি বিশ্ববিদ্যালয় এলাকা ও সেক্রেটারিয়েট অঞ্চলের সংযোগস্থলে অবস্থিত, তাই স্মৃতিসৌধে যাওয়ার জন্য এটি সুবিধাজনক।',
          ],
          bullets: [
            'দুই দিকেই ট্রেন চলাচল করে',
            'ভাড়া দূরত্বভিত্তিক এবং সময়ে সময়ে পরিবর্তিত হতে পারে',
            'চূড়ান্ত সময়সূচি DMTCL-এর ঘোষণা অনুযায়ী',
          ],
        },
        {
          heading: 'স্টেশন থেকে বেরিয়ে কী করবেন',
          paragraphs: [
            'স্টেশন থেকে বেরিয়ে সেক্রেটারিয়েট রোড ও ঢাকা বিশ্ববিদ্যালয় এলাকার দিক ধরে হাঁটলে অথবা স্বল্প দূরত্বের যানবাহন নিলে স্মৃতিসৌধে পৌঁছানো যায়।',
            'চেনা ল্যান্ডমার্ক হিসেবে ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস, বাংলা একাডেমি ও মেডিকেল কলেজ এলাকা কাজে লাগে।',
          ],
        },
        {
          heading: 'যাচাই করে নেওয়ার বিষয়',
          paragraphs: [
            'মেট্রোর চূড়ান্ত সময়সূচি, ভাড়া ও স্টেশনের নির্দিষ্ট প্রবেশ-বাহির পথ পরিবর্তিত হতে পারে; বড় আয়োজনের দিনে নির্দিষ্ট প্রবেশপথ বন্ধও থাকতে পারে।',
            'যাত্রার আগে DMTCL-এর সর্বশেষ তথ্য এবং স্থানীয় নির্দেশনা দেখা উচিত। এই গাইড কোনো নির্দিষ্ট ভাড়া বা যাত্রার সময় উল্লেখ করে না, কারণ সেগুলো বদলায়।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনারের নিকটতম মেট্রো স্টেশন কোনটি?', 'MRT লাইন ৬-এর “ঢাকা বিশ্ববিদ্যালয়” স্টেশনটি সবচেয়ে কাছের রেলভিত্তিক সংযোগ।'],
        ['ভাড়া কত?', 'ভাড়া দূরত্বভিত্তিক এবং পরিবর্তিত হতে পারে; DMTCL-এর সর্বশেষ তালিকা থেকে যাত্রার দিনে যাচাই করে নেওয়া ভালো।'],
        ['স্টেশন থেকে হাঁটা যাবে?', 'হ্যাঁ, বিশ্ববিদ্যালয় ও সেক্রেটারিয়েট এলাকার দিক ধরে হেঁটে বা স্বল্প দূরত্বের যানবাহনে স্মৃতিসৌধে পৌঁছানো যায়।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'University of Dhaka', href: 'https://www.du.ac.bd/' },
      ],
    },
    en: {
      seoTitle: 'How to Reach the Shaheed Minar from Dhaka University Metro Station',
      description:
        'Getting to the Central Shaheed Minar from the Dhaka University station on MRT Line 6: where the station is, which landmarks to follow, and what to verify before travelling.',
      h1: 'From Dhaka University metro station to the Shaheed Minar',
      lead:
        'MRT Line 6, operated by Dhaka Mass Transit Company Limited, has a station called “Dhaka University”, which is the closest rail-based link to the Shaheed Minar. From the station, follow familiar landmarks towards Secretariat Road.',
      facts: [
        { label: 'Line', value: 'MRT Line 6 (operated by DMTCL)' },
        { label: 'Station', value: 'Dhaka University' },
        { label: 'Route', value: 'Uttara to Motijheel' },
        { label: 'Verify', value: 'Timings, fares and exit routes' },
      ],
      sections: [
        {
          heading: 'What MRT Line 6 is',
          paragraphs: [
            'MRT Line 6 is Dhaka’s first urban rail line, operated by Dhaka Mass Transit Company Limited (DMTCL) and running between Uttara and Motijheel.',
            'The Dhaka University station sits where the university area meets the Secretariat district, which makes it convenient for reaching the monument.',
          ],
          bullets: [
            'Trains run in both directions',
            'Fares are distance-based and can change over time',
            'Final schedules follow DMTCL announcements',
          ],
        },
        {
          heading: 'After you leave the station',
          paragraphs: [
            'From the station, walking towards Secretariat Road and the University of Dhaka area — or taking a short ride — brings you to the monument.',
            'Useful landmarks include the University of Dhaka campus, Bangla Academy and the medical college area.',
          ],
        },
        {
          heading: 'What to verify',
          paragraphs: [
            'Metro schedules, fares and specific station entry or exit routes can change, and on major event days particular entrances may be closed.',
            'Check the latest DMTCL information and local instructions before travelling. This guide does not quote a specific fare or journey time because both change.',
          ],
        },
      ],
      faq: [
        ['Which metro station is nearest to the Shaheed Minar?', 'The “Dhaka University” station on MRT Line 6 is the closest rail-based link.'],
        ['How much is the fare?', 'Fares are distance-based and can change; check DMTCL’s latest list on the day of travel.'],
        ['Can I walk from the station?', 'Yes — walking towards the university and Secretariat area, or taking a short ride, reaches the monument.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'University of Dhaka', href: 'https://www.du.ac.bd/' },
      ],
    },
  },

  {
    path: 'visit/from-shahbag',
    section: 'visit',
    priority: 'P1',
    related: ['visit/from-tsc-doel-chattar', 'visit/dhaka-university-metro', 'nearby/bangladesh-national-museum', 'visit/location-map'],
    bn: {
      seoTitle: 'শাহবাগ থেকে কেন্দ্রীয় শহীদ মিনার — যাওয়ার সহজ উপায়',
      description:
        'শাহবাগ থেকে কেন্দ্রীয় শহীদ মিনারে যাওয়ার সহজ উপায়: MRT লাইন ৬, রিকশা ও CNG এবং হাঁটার পথের তুলনা—সম্ভাব্য ঝুঁকি ও যাচাইয়ের বিষয়সহ।',
      h1: 'শাহবাগ থেকে শহীদ মিনার',
      lead:
        'শাহবাগ থেকে শহীদ মিনার—শহরের ভেতরের একটি সংক্ষিপ্ত যাত্রা। MRT লাইন ৬-এর শাহবাগ স্টেশন নেওয়া হলে দ্রুত পৌঁছানো যায়, অন্যথায় রিকশা বা CNG ব্যবহার করা যায়।',
      facts: [
        { label: 'দূরত্বের ধরন', value: 'শহরের ভেতরে সংক্ষিপ্ত' },
        { label: 'দ্রুততম', value: 'MRT লাইন ৬' },
        { label: 'নমনীয়', value: 'রিকশা ও CNG' },
        { label: 'পায়ে হাঁটা', value: 'ঐতিহাসিক ক্যাম্পাস এলাকা হয়ে' },
      ],
      sections: [
        {
          heading: 'তিনটি বাস্তব উপায়',
          paragraphs: [
            'এক, MRT লাইন ৬-এ শাহবাগ স্টেশন থেকে ঢাকা বিশ্ববিদ্যালয় স্টেশন—এই রেলভিত্তিক সংযোগ সাধারণত সবচেয়ে দ্রুত।',
            'দুই, রিকশা বা CNG—শাহবাগ থেকে সেক্রেটারিয়েট রোড অভিমুখে; এতে ভ্রমণ সময় যানজটের ওপর নির্ভর করে। তিন, পায়ে হাঁটা, যদি আপনি ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস ও সড়ক পারাপারের পরিবেশে স্বচ্ছন্দ থাকেন।',
          ],
          bullets: [
            'MRT: শাহবাগ → ঢাকা বিশ্ববিদ্যালয় স্টেশন',
            'রিকশা/CNG: সেক্রেটারিয়েট রোড অভিমুখে',
            'হাঁটা: ক্যাম্পাস এলাকা হয়ে',
          ],
        },
        {
          heading: 'কোনটি বেছে নেবেন',
          paragraphs: [
            'সময় বাঁচাতে চাইলে এবং ভিড়ের ভেতর চলতে অসুবিধা না থাকলে মেট্রো সবচেয়ে নির্ভরযোগ্য। যাতায়াতের পথে শহরের জীবন দেখতে চাইলে রিকশা বা হাঁটা ভালো।',
            'বৃষ্টি বা বিশেষ আয়োজনের দিনে যানজট বেশি হয়; সেক্ষেত্রে রেলভিত্তিক পথ সাধারণত বেশি স্থিতিশীল।',
          ],
        },
        {
          heading: 'যা এই গাইড বলছে না',
          paragraphs: [
            'এই পাতায় নির্দিষ্ট ভাড়া, হাঁটার সময় বা দূরত্ব দেওয়া নেই, কারণ এগুলো যানজট, রাস্তা বন্ধ এবং সময়ের সঙ্গে বদলায়।',
            'দর্শকদের অনুরোধ—যাত্রার দিনে চলমান ট্রাফিক এবং স্থানীয় নির্দেশনা দেখে সিদ্ধান্ত নিন।',
          ],
        },
      ],
      faq: [
        ['শাহবাগ থেকে শহীদ মিনার কত দূরে?', 'এটি শহরের ভেতরের একটি সংক্ষিপ্ত যাত্রা, তবে সুনির্দিষ্ট দূরত্ব বা সময় এখানে দেওয়া হয়নি কারণ এগুলো পরিবর্তনশীল।'],
        ['মেট্রো ব্যবহার করা কি ভালো?', 'সময় নির্ভরযোগ্যতার দিক থেকে MRT লাইন ৬ সাধারণত সুবিধাজনক, বিশেষত যানজটের সময়।'],
        ['CNG নেওয়া যাবে?', 'হ্যাঁ, কিন্তু ভাড়া ও সময় নিয়ে আগে কথা বলে নেওয়া এবং ট্রাফিক পরিস্থিতি বিবেচনা করা ভালো।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'From Shahbagh to the Central Shaheed Minar — How to Get There',
      description:
        'Practical ways to travel from Shahbagh to the Central Shaheed Minar: MRT Line 6, rickshaw or CNG, and walking through the university area, with what to verify and what not to assume.',
      h1: 'From Shahbagh to the Shaheed Minar',
      lead:
        'Shahbagh to the Shaheed Minar is a short trip inside the city. MRT Line 6 from Shahbagh station is usually the quickest option; otherwise take a rickshaw or CNG.',
      facts: [
        { label: 'Trip type', value: 'Short, within the city' },
        { label: 'Fastest', value: 'MRT Line 6' },
        { label: 'Flexible', value: 'Rickshaw and CNG' },
        { label: 'On foot', value: 'Through the historic campus area' },
      ],
      sections: [
        {
          heading: 'Three realistic options',
          paragraphs: [
            'One: MRT Line 6 from Shahbagh station to Dhaka University station — usually the fastest rail-based link.',
            'Two: rickshaw or CNG towards Secretariat Road, where journey time depends on traffic. Three: walking, if you are comfortable with the University of Dhaka campus and road crossings.',
          ],
          bullets: [
            'MRT: Shahbagh → Dhaka University station',
            'Rickshaw/CNG: towards Secretariat Road',
            'Walking: via the campus area',
          ],
        },
        {
          heading: 'Choosing between them',
          paragraphs: [
            'If saving time matters and crowded transit is fine, the metro is the most predictable. To see city life on the way, a rickshaw or a walk works better.',
            'In rain or during major events traffic worsens; on those days the rail option usually stays more stable.',
          ],
        },
        {
          heading: 'What this guide does not state',
          paragraphs: [
            'This page gives no specific fares, walking times or distances, because those change with traffic, road closures and time of day.',
            'Readers are asked to check live traffic and local instructions on the day of travel.',
          ],
        },
      ],
      faq: [
        ['How far is the Shaheed Minar from Shahbagh?', 'It is a short trip within the city, but no specific distance or time is given here because both change with conditions.'],
        ['Is the metro the better choice?', 'For reliability of travel time, MRT Line 6 is usually convenient, especially during heavy traffic.'],
        ['Can I take a CNG?', 'Yes, but agree the fare beforehand and allow for traffic conditions.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'visit/from-tsc-doel-chattar',
    section: 'visit',
    priority: 'P1',
    related: ['nearby/tsc', 'nearby/doel-chattar', 'visit/dhaka-university-metro', 'nearby/curzon-hall'],
    bn: {
      seoTitle: 'TSC ও দোয়েল চত্বর থেকে শহীদ মিনার — ক্যাম্পাস এলাকার পথ',
      description:
        'ঢাকা বিশ্ববিদ্যালয়ের TSC ও দোয়েল চত্বর থেকে কেন্দ্রীয় শহীদ মিনারে যাওয়ার সংক্ষিপ্ত পথ, প্রধান মোড়গুলো এবং ক্যাম্পাস এলাকায় হাঁটার সময় যা মনে রাখা দরকার।',
      h1: 'TSC ও দোয়েল চত্বর থেকে শহীদ মিনার',
      lead:
        'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের TSC ও দোয়েল চত্বর থেকে শহীদ মিনার পুরোপুরি হাঁটার দূরত্বে—এটি একটি সংক্ষিপ্ত, তবে ব্যস্ত ক্যাম্পাস-পথ।',
      facts: [
        { label: 'যাত্রার ধরন', value: 'ক্যাম্পাস এলাকায় সংক্ষিপ্ত' },
        { label: 'উপযুক্ত', value: 'হাঁটা বা রিকশা' },
        { label: 'প্রধান মোড়', value: 'TSC · দোয়েল চত্বর · সেক্রেটারিয়েট রোড' },
        { label: 'সতর্কতা', value: 'সড়ক পারাপার ও ভিড়' },
      ],
      sections: [
        {
          heading: 'পথের ধারণা',
          paragraphs: [
            'TSC থেকে দোয়েল চত্বর ও বিশ্ববিদ্যালয় এলাকার ভেতরের রাস্তা ধরে সেক্রেটারিয়েট রোডের দিকে এগোলে শহীদ মিনার আসে। পুরো পথটিই ক্যাম্পাস ও প্রশাসনিক এলাকার ভেতর দিয়ে যায়।',
            'দোয়েল চত্বর একটি প্রধান মোড়, যেখানে কয়েকটি সড়ক মিলিত হয়; এখান থেকেই স্মৃতিসৌধের দিক সহজে বোঝা যায়।',
          ],
        },
        {
          heading: 'হাঁটার সময় কী মনে রাখবেন',
          paragraphs: [
            'এলাকাটি ছাত্র, শিক্ষক, অফিসগামী মানুষ ও দর্শকে ভরা থাকে, এবং কয়েকটি ব্যস্ত সড়ক পার হতে হয়। তাই সময় একটু বেশি ধরেই পরিকল্পনা করা ভালো।',
            'ছায়াযুক্ত গাছ ও ক্যাম্পাসের পরিবেশ হাঁটার অভিজ্ঞতাকে সহজ করে, তবে বর্ষায় পথ পিচ্ছিল হতে পারে।',
          ],
        },
        {
          heading: 'সংযোগ ও পরবর্তী গন্তব্য',
          paragraphs: [
            'এই পথটি TSC ও দোয়েল চত্বরকে শহীদ মিনারের সঙ্গে যুক্ত করে, ফলে ক্যাম্পাসের সাংস্কৃতিক স্থানগুলো একসঙ্গে দেখা সহজ হয়।',
            'এর পর চাইলে কার্জন হল, বাংলা একাডেমি বা জাতীয় জাদুঘরের দিকে যাত্রা চালিয়ে যাওয়া যায়।',
          ],
        },
      ],
      faq: [
        ['TSC থেকে হেঁটে যাওয়া যায়?', 'হ্যাঁ, এটি ক্যাম্পাস এলাকার সংক্ষিপ্ত পথ; তবে ব্যস্ত মোড় ও সড়ক পারাপার মাথায় রাখতে হবে।'],
        ['দোয়েল চত্বর কী?', 'এটি বিশ্ববিদ্যালয় ও প্রশাসনিক এলাকার সংযোগস্থলে একটি প্রধান মোড়, যেখান থেকে একাধিক সড়ক মেলে।'],
        ['এই পথে আর কী দেখা যায়?', 'কার্জন হল, TSC ও ক্যাম্পাসের সাংস্কৃতিক স্থানগুলো এই পথের আশপাশে।'],
      ],
      sources: [
        { label: 'University of Dhaka', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
    en: {
      seoTitle: 'From TSC and Doel Chattar to the Central Shaheed Minar',
      description:
        'The short campus route from Dhaka University’s TSC and Doel Chattar to the Central Shaheed Minar, the junctions you pass, and what to keep in mind while walking.',
      h1: 'From TSC and Doel Chattar to the Shaheed Minar',
      lead:
        'From Dhaka University’s TSC and Doel Chattar, the Shaheed Minar is within walking distance — a short but busy campus route.',
      facts: [
        { label: 'Trip type', value: 'Short, within the campus area' },
        { label: 'Best for', value: 'Walking or rickshaw' },
        { label: 'Main junctions', value: 'TSC · Doel Chattar · Secretariat Road' },
        { label: 'Caution', value: 'Road crossings and crowds' },
      ],
      sections: [
        {
          heading: 'The route in outline',
          paragraphs: [
            'From TSC, follow the internal roads past Doel Chattar and the university area towards Secretariat Road, and the monument appears ahead. The entire route runs through the campus and administrative district.',
            'Doel Chattar is a major junction where several roads meet; from there the direction of the monument is easy to read.',
          ],
        },
        {
          heading: 'What to keep in mind on foot',
          paragraphs: [
            'The area is busy with students, teachers, office workers and visitors, and a few roads must be crossed. Allow a little extra time.',
            'Shade trees and the campus setting make the walk easier, though paths can be slippery in the monsoon.',
          ],
        },
        {
          heading: 'Connections and onward stops',
          paragraphs: [
            'This route links TSC and Doel Chattar to the Shaheed Minar, making it easy to see the campus cultural sites together.',
            'Onwards, you can continue to Curzon Hall, Bangla Academy or the Bangladesh National Museum.',
          ],
        },
      ],
      faq: [
        ['Can I walk from TSC?', 'Yes, it is a short campus route, though busy junctions and road crossings should be expected.'],
        ['What is Doel Chattar?', 'A major junction where the university and administrative districts meet, with several roads converging.'],
        ['What else is on this route?', 'Curzon Hall, TSC and the cultural spaces of the campus are close to this route.'],
      ],
      sources: [
        { label: 'University of Dhaka', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
  },

  {
    path: 'visit/from-airport',
    section: 'visit',
    priority: 'P1',
    related: ['visit/dhaka-university-metro', 'visit/from-kamalapur', 'visit/location-map', 'guides/short-visit'],
    bn: {
      seoTitle: 'হযরত শাহজালাল বিমানবন্দর থেকে শহীদ মিনার — যাতায়াতের বিকল্প',
      description:
        'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর থেকে কেন্দ্রীয় শহীদ মিনারে যাওয়ার বাস্তব বিকল্প, শহরের ভেতরে যাত্রার ধরন এবং রেলসংযোগ নিয়ে যাচাইয়ের প্রয়োজনীয়তা।',
      h1: 'বিমানবন্দর থেকে শহীদ মিনার',
      lead:
        'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর থেকে শহীদ মিনার যেতে সাধারণত সড়কপথের যানবাহন (ট্যাক্সি/রাইড-হেইলিং) বা শহরে ঢুকে রেলভিত্তিক সংযোগ—দুই ধাপে যাত্রা করতে হয়।',
      facts: [
        { label: 'বিমানবন্দর', value: 'হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর' },
        { label: 'ধরন', value: 'দুই ধাপের যাত্রা' },
        { label: 'বিকল্প', value: 'ট্যাক্সি · রাইড-হেইলিং · রেল' },
        { label: 'যাচাই করুন', value: 'রেলসংযোগ বর্তমানে চালু কি না' },
      ],
      sections: [
        {
          heading: 'যাত্রার কাঠামো',
          paragraphs: [
            'বিমানবন্দর শহরের উত্তরে এবং স্মৃতিসৌধ শহরের কেন্দ্রে, তাই প্রথমে শহরে ঢুকে তারপর শেষ অংশের যাত্রা করতে হয়। সরাসরি গাড়িতে যাওয়া সবচেয়ে সহজ, তবে সময় যানজটের ওপর নির্ভর করে।',
            'বিকল্প হিসেবে বিমানবন্দর রেল স্টেশন থেকে ট্রেন নিয়ে শহরে ঢুকে সেখান থেকে রিকশা, CNG বা মেট্রো নেওয়া যায়।',
          ],
          bullets: [
            'সরাসরি গাড়ি: সবচেয়ে সহজ',
            'রেল + মেট্রো/সড়ক: যানজট এড়ানোর বিকল্প',
            'সতর্কতা: রাতের যাত্রায় আগেই গাড়ি নিশ্চিত করুন',
          ],
        },
        {
          heading: 'রেলসংযোগ নিয়ে যা যাচাই করা জরুরি',
          paragraphs: [
            'ঢাকায় নতুন রেলভিত্তিক প্রকল্প সময়ে সময়ে চালু ও সম্প্রসারিত হয়। তাই কোনো নির্দিষ্ট লাইন বিমানবন্দর পর্যন্ত “এখনই চালু” ধরে নিয়ে পরিকল্পনা করা উচিত নয়।',
            'যাত্রার আগে সংশ্লিষ্ট সংস্থার সর্বশেষ ঘোষণা দেখে নিশ্চিত হয়ে নিন কোন সংযোগ সচল এবং কোন স্টেশন ব্যবহার করা যাবে।',
          ],
        },
        {
          heading: 'যা এই গাইড দেয় না',
          paragraphs: [
            'বিমানবন্দর থেকে নির্দিষ্ট ভাড়া, সময় বা দূরত্ব এখানে দেওয়া হয়নি—এগুলো যানজট, সময় এবং পরিবহন ব্যবস্থার ওপর নির্ভর করে বদলায়।',
            'নিরাপত্তার জন্য অনুমোদিত ট্যাক্সি সার্ভিস বা পরিচিত রাইড-হেইলিং অ্যাপ ব্যবহার করা এবং ভাড়া আগেই নিশ্চিত করা ভালো।',
          ],
        },
      ],
      faq: [
        ['বিমানবন্দর থেকে সরাসরি গাড়ি পাওয়া যায়?', 'হ্যাঁ, ট্যাক্সি বা রাইড-হেইলিং সবচেয়ে সহজ, তবে সময় যানজটের ওপর নির্ভর করে।'],
        ['মেট্রো কি বিমানবন্দর পর্যন্ত যায়?', 'কোন সংযোগ বর্তমানে চালু তা নিশ্চিত নয় বলে এই গাইড কোনো নির্দিষ্ট দাবি করে না; যাত্রার আগে সর্বশেষ তথ্য যাচাই করুন।'],
        ['নিরাপত্তার জন্য কী করব?', 'অনুমোদিত ও পরিচিত পরিবহন ব্যবহার করুন এবং যাত্রার আগে ভাড়া ও গন্তব্য নিশ্চিত করুন।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'From Dhaka Airport to the Central Shaheed Minar',
      description:
        'Realistic options for travelling from Hazrat Shahjalal International Airport to the Central Shaheed Minar, how a two-stage journey works, and what to verify about rail links.',
      h1: 'From the airport to the Shaheed Minar',
      lead:
        'From Hazrat Shahjalal International Airport, reaching the Shaheed Minar usually means a two-stage journey: road transport (taxi or ride-hailing) into the city, or a rail link into the city followed by metro or road.',
      facts: [
        { label: 'Airport', value: 'Hazrat Shahjalal International Airport' },
        { label: 'Journey type', value: 'Two-stage' },
        { label: 'Options', value: 'Taxi · ride-hailing · rail' },
        { label: 'Verify', value: 'Whether a rail link is in service' },
      ],
      sections: [
        {
          heading: 'How the journey is structured',
          paragraphs: [
            'The airport is north of the city and the monument is in the city centre, so you first travel into the city and then complete the final leg. Going by car the whole way is simplest, but time depends on traffic.',
            'Alternatively, take a train from the airport rail station into the city and then continue by rickshaw, CNG or metro.',
          ],
          bullets: [
            'Direct car: simplest',
            'Rail + metro/road: an option to avoid traffic',
            'Caution: arrange transport in advance for late arrivals',
          ],
        },
        {
          heading: 'What you must verify about rail links',
          paragraphs: [
            'New rail-based projects in Dhaka are opened and extended over time. Do not assume that a particular line is “already open” all the way to the airport.',
            'Before travelling, check the latest announcements from the relevant operator to confirm which connections are running and which stations can be used.',
          ],
        },
        {
          heading: 'What this guide does not provide',
          paragraphs: [
            'No specific fares, times or distances from the airport are given here, because they change with traffic, time of day and the transport system.',
            'For safety, use licensed taxi services or well-known ride-hailing apps, and confirm the fare in advance.',
          ],
        },
      ],
      faq: [
        ['Can I get a car directly from the airport?', 'Yes, a taxi or ride-hailing car is simplest, though journey time depends on traffic.'],
        ['Does the metro run to the airport?', 'Because it is not certain which links are currently in service, this guide makes no specific claim; check the latest information before travelling.'],
        ['How do I travel safely?', 'Use licensed, well-known transport and confirm the fare and destination before setting off.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'visit/from-kamalapur',
    section: 'visit',
    priority: 'P2',
    related: ['visit/from-motijheel', 'visit/dhaka-university-metro', 'visit/location-map'],
    bn: {
      seoTitle: 'কমলাপুর রেলস্টেশন থেকে শহীদ মিনার — যাত্রার সংযোগ',
      description:
        'কমলাপুর রেলস্টেশনে পৌঁছে কেন্দ্রীয় শহীদ মিনারে যাওয়ার সংযোগ: মেট্রো, রিকশা ও CNG-এর তুলনা এবং ট্রেন থেকে নেমে প্রথমে যা করবেন।',
      h1: 'কমলাপুর রেলস্টেশন থেকে শহীদ মিনার',
      lead:
        'কমলাপুর রেলস্টেশন দিয়ে ঢাকায় পৌঁছে শহীদ মিনারে যেতে সাধারণত মেট্রো (মতিঝিল বা শাহবাগ হয়ে), রিকশা বা CNG—এই তিন ধরনের সংযোগ ব্যবহার করা হয়।',
      facts: [
        { label: 'স্টেশন', value: 'কমলাপুর রেলস্টেশন, ঢাকা' },
        { label: 'নিকটবর্তী এলাকা', value: 'মতিঝিল' },
        { label: 'সংযোগ', value: 'মেট্রো · রিকশা · CNG' },
        { label: 'সতর্কতা', value: 'স্টেশন এলাকার ভিড়' },
      ],
      sections: [
        {
          heading: 'স্টেশনে নেমে প্রথম কাজ',
          paragraphs: [
            'ট্রেন থেকে নেমে প্রথমে নির্ধারিত বাহির পথ ধরে স্টেশন চত্বরের বাইরে আসুন এবং আনঅফিসিয়াল “হেল্পার”-দের প্রস্তাব এড়িয়ে চলুন।',
            'ভাড়া ও গন্তব্য আগে নিশ্চিত করে তারপর যানবাহনে উঠুন; গন্তব্য হিসেবে সেক্রেটারিয়েট রোড বা ঢাকা মেডিকেল কলেজ গেট বলুন।',
          ],
        },
        {
          heading: 'সংযোগের বিকল্প',
          paragraphs: [
            'মেট্রো ব্যবহার করলে কমলাপুর-সংলগ্ন মতিঝিল এলাকা থেকে MRT লাইন ৬ ধরতে পারেন এবং ঢাকা বিশ্ববিদ্যালয় স্টেশনে নেমে স্মৃতিসৌধে যেতে পারেন।',
            'রিকশা বা CNG একসঙ্গে ব্যবহার করলে সরাসরি সেক্রেটারিয়েট রোড অভিমুখে যাওয়া যায়, তবে যানজটে সময় বাড়তে পারে।',
          ],
          bullets: [
            'মেট্রো: মতিঝিল → ঢাকা বিশ্ববিদ্যালয় স্টেশন',
            'রিকশা/CNG: সরাসরি সেক্রেটারিয়েট রোড অভিমুখে',
            'ট্রেন + হাঁটা: কম সময়ের জন্য উপযুক্ত নয়',
          ],
        },
        {
          heading: 'কখন যাত্রা করবেন',
          paragraphs: [
            'ভোর বা রাতের দিকে সড়ক তুলনায় খালি থাকে; ব্যস্ত সময়ে মেট্রো বেশি নির্ভরযোগ্য।',
            'নির্দিষ্ট সময় বা ভাড়া এখানে উল্লেখ করা হয়নি, কারণ সেগুলো পরিবর্তনশীল।',
          ],
        },
      ],
      faq: [
        ['কমলাপুর থেকে মেট্রো পাওয়া যায়?', 'কাছাকাছি মতিঝিল এলাকা থেকে MRT লাইন ৬ ধরা যায়, যেখান থেকে ঢাকা বিশ্ববিদ্যালয় স্টেশনে নামা যায়।'],
        ['সরাসরি রিকশা নেওয়া যাবে?', 'হ্যাঁ, তবে দূরত্ব বেশি হওয়ায় ভাড়া ও সময় আগে নিশ্চিত করা ভালো।'],
        ['কত সময় লাগবে?', 'নির্দিষ্ট সময় এখানে দেওয়া হয়নি কারণ তা যানজট ও সময়ভেদে বদলায়।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'From Kamalapur Railway Station to the Central Shaheed Minar',
      description:
        'Getting from Kamalapur railway station in Dhaka to the Central Shaheed Minar: metro, rickshaw and CNG connections, and what to do first after leaving the train.',
      h1: 'From Kamalapur railway station to the Shaheed Minar',
      lead:
        'Arriving in Dhaka at Kamalapur railway station, the usual ways to reach the Shaheed Minar are the metro (via Motijheel or Shahbagh), a rickshaw, or a CNG.',
      facts: [
        { label: 'Station', value: 'Kamalapur Railway Station, Dhaka' },
        { label: 'Nearby area', value: 'Motijheel' },
        { label: 'Connections', value: 'Metro · rickshaw · CNG' },
        { label: 'Caution', value: 'Crowds around the station' },
      ],
      sections: [
        {
          heading: 'First steps after leaving the train',
          paragraphs: [
            'Leave by the designated exit and get clear of the station concourse, and avoid offers from unofficial “helpers”.',
            'Agree the fare and destination before boarding: say Secretariat Road or the Dhaka Medical College gate.',
          ],
        },
        {
          heading: 'Connection options',
          paragraphs: [
            'For the metro, head to the nearby Motijheel area and take MRT Line 6, getting off at Dhaka University station for the monument.',
            'A rickshaw or CNG can go directly towards Secretariat Road, though traffic can lengthen the trip.',
          ],
          bullets: [
            'Metro: Motijheel → Dhaka University station',
            'Rickshaw/CNG: directly towards Secretariat Road',
            'Train + walking: not suited to a short visit',
          ],
        },
        {
          heading: 'When to travel',
          paragraphs: [
            'Early morning and late evening roads are comparatively clear; at busy times the metro is more reliable.',
            'Specific times and fares are not quoted here because they change.',
          ],
        },
      ],
      faq: [
        ['Can I take the metro from Kamalapur?', 'The nearby Motijheel area connects to MRT Line 6, from which you can get off at Dhaka University station.'],
        ['Can I take a rickshaw directly?', 'Yes, but because the distance is longer, confirm the fare and time beforehand.'],
        ['How long does it take?', 'No specific time is given here because it varies with traffic and the time of day.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'visit/from-motijheel',
    section: 'visit',
    priority: 'P2',
    related: ['visit/from-kamalapur', 'visit/dhaka-university-metro', 'visit/location-map', 'nearby/suhrawardy-udyan'],
    bn: {
      seoTitle: 'মতিঝিল থেকে কেন্দ্রীয় শহীদ মিনার — মেট্রো ও সড়কপথ',
      description:
        'মতিঝিল থেকে কেন্দ্রীয় শহীদ মিনারে যাওয়ার সহজ উপায়: MRT লাইন ৬-এর মতিঝিল স্টেশন ব্যবহার, সড়কপথের বিকল্প এবং যাচাই করে নেওয়ার বিষয়।',
      h1: 'মতিঝিল থেকে শহীদ মিনার',
      lead:
        'মতিঝিল থেকে শহীদ মিনারে যাওয়ার সহজ উপায় হলো MRT লাইন ৬ ধরে ঢাকা বিশ্ববিদ্যালয় স্টেশনে নেমে যাওয়া; বিকল্প হিসেবে সড়কপথের যানবাহনও ব্যবহার করা যায়।',
      facts: [
        { label: 'এলাকা', value: 'মতিঝিল (বাণিজ্যিক কেন্দ্র)' },
        { label: 'সহজ উপায়', value: 'MRT লাইন ৬' },
        { label: 'গন্তব্য স্টেশন', value: 'ঢাকা বিশ্ববিদ্যালয়' },
        { label: 'বিকল্প', value: 'রিকশা · CNG · ট্যাক্সি' },
      ],
      sections: [
        {
          heading: 'মেট্রো পথ',
          paragraphs: [
            'মতিঝিল MRT লাইন ৬-এর একটি গুরুত্বপূর্ণ স্টেশন। এখান থেকে ট্রেন ধরে ঢাকা বিশ্ববিদ্যালয় স্টেশনে নেমে সেক্রেটারিয়েট রোডের দিকে এগোলেই স্মৃতিসৌধ।',
            'এই পথটি যানজটের প্রভাব এড়ায়, তাই ব্যস্ত সময়ে এটি বেশি নির্ভরযোগ্য।',
          ],
        },
        {
          heading: 'সড়কপথের বিকল্প',
          paragraphs: [
            'রিকশা, CNG বা ট্যাক্সিতে সরাসরি যাওয়া যায়, তবে মতিঝিল এলাকা ও আশপাশের সড়কে যানজট সাধারণত বেশি।',
            'গন্তব্য বলার সময় “ডাক্তারখানা/মেডিকেল কলেজ গেট, সেক্রেটারিয়েট রোড” ব্যবহার করলে বিভ্রান্তি কমে।',
          ],
        },
        {
          heading: 'এলাকার বৈশিষ্ট্য',
          paragraphs: [
            'মতিঝিল ঢাকার প্রধান বাণিজ্যিক এলাকা, তাই অফিস সময়ে ভিড় বেশি। অফিস ছাড়ার সময় এড়িয়ে চললে যাত্রা সহজ হয়।',
            'নির্দিষ্ট সময় ও ভাড়া এখানে উল্লেখ করা হয়নি, কারণ সেগুলো পরিবর্তনশীল।',
          ],
        },
      ],
      faq: [
        ['মতিঝিল থেকে মেট্রো আছে?', 'হ্যাঁ, MRT লাইন ৬-এ মতিঝিল স্টেশন রয়েছে; সেখান থেকে ঢাকা বিশ্ববিদ্যালয় স্টেশনে গিয়ে স্মৃতিসৌধে যাওয়া যায়।'],
        ['সড়কপথে কত সময় লাগে?', 'নির্দিষ্ট সময় দেওয়া হয়নি কারণ এটি যানজটের ওপর নির্ভর করে।'],
        ['অফিস সময়ে যাওয়া কি ঠিক?', 'অফিস ছাড়ার সময় ভিড় বেশি হয়; সম্ভব হলে সেই সময় এড়িয়ে যাত্রা করা ভালো।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'From Motijheel to the Central Shaheed Minar — Metro and Road',
      description:
        'How to travel from Motijheel in Dhaka to the Central Shaheed Minar: using the Motijheel station on MRT Line 6, road alternatives, and what to verify before travelling.',
      h1: 'From Motijheel to the Shaheed Minar',
      lead:
        'From Motijheel, the easiest way to reach the Shaheed Minar is to take MRT Line 6 and get off at Dhaka University station; road transport is the alternative.',
      facts: [
        { label: 'Area', value: 'Motijheel (commercial district)' },
        { label: 'Easiest', value: 'MRT Line 6' },
        { label: 'Exit station', value: 'Dhaka University' },
        { label: 'Alternatives', value: 'Rickshaw · CNG · taxi' },
      ],
      sections: [
        {
          heading: 'The metro route',
          paragraphs: [
            'Motijheel is a major station on MRT Line 6. Take the train and get off at Dhaka University station, then continue towards Secretariat Road for the monument.',
            'This route avoids traffic, so it is more reliable at busy times.',
          ],
        },
        {
          heading: 'Road alternatives',
          paragraphs: [
            'A rickshaw, CNG or taxi can go directly, but traffic around Motijheel and its approach roads is usually heavy.',
            'Naming the destination as “medical college gate, Secretariat Road” reduces confusion.',
          ],
        },
        {
          heading: 'About the area',
          paragraphs: [
            'Motijheel is Dhaka’s main commercial district, so it is crowded during office hours. Travelling outside office rush makes the journey easier.',
            'Specific times and fares are not quoted here because they change.',
          ],
        },
      ],
      faq: [
        ['Is there a metro from Motijheel?', 'Yes, MRT Line 6 has a Motijheel station; from there, travel to Dhaka University station for the monument.'],
        ['How long does the road route take?', 'No specific time is given because it depends on traffic.'],
        ['Should I avoid office hours?', 'Crowds peak when offices close, so travelling outside that window is easier where possible.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'visit/february-21-access',
    section: 'visit',
    priority: 'P1',
    related: ['guides/commemoration-etiquette', 'history/ekushey-february', 'visit/location-map', 'visit/dhaka-university-metro'],
    bn: {
      seoTitle: '২১ ফেব্রুয়ারি শহীদ মিনারে প্রবেশ ও যাতায়াত — কীভাবে পরিকল্পনা করবেন',
      description:
        'একুশে ফেব্রুয়ারিতে কেন্দ্রীয় শহীদ মিনারে প্রবেশপথ, বাহির পথ, সড়ক ব্যবস্থা ও ভিড়ের পরিকল্পনা—প্রতি বছর পরিবর্তনশীল তথ্য আলাদা রেখে দীর্ঘমেয়াদে প্রযোজ্য নীতিমালা।',
      h1: '২১ ফেব্রুয়ারি শহীদ মিনারে প্রবেশ ও যাতায়াত',
      lead:
        'একুশে ফেব্রুয়ারি স্মৃতিসৌধের সবচেয়ে ব্যস্ত দিন, আর সেই দিনের প্রবেশপথ, বাহির পথ, সড়ক ঘেরাও ও সময়সূচি প্রতি বছর কর্তৃপক্ষ আলাদাভাবে ঠিক করে। তাই এই পাতায় নির্দিষ্ট বছরের নির্দেশ নয়, বরং সব বছরে প্রযোজ্য পরিকল্পনার নীতিগুলো দেওয়া হলো।',
      facts: [
        { label: 'ব্যস্ততম দিন', value: '২১ ফেব্রুয়ারি' },
        { label: 'প্রবেশপথ', value: 'প্রতি বছর পরিবর্তনশীল' },
        { label: 'ধরন', value: 'রাষ্ট্রীয় শোক ও শ্রদ্ধা' },
        { label: 'যাচাই করুন', value: 'চলতি বছরের সরকারি ঘোষণা' },
      ],
      sections: [
        {
          heading: 'দিনটির চরিত্র',
          paragraphs: [
            'মধ্যরাত থেকেই প্রভাতফেরি শুরু হয় এবং সারা দিন ধরে পুষ্পস্তবক অর্পণ চলে। সকালের দিকে ভিড় সবচেয়ে বেশি থাকে, আর দুপুরের পর সাধারণত কিছুটা কমে।',
            'দিনটি রাষ্ট্রীয় শোক ও শ্রদ্ধার—কোনো উৎসব বা মেলার মতো আয়োজন নয়। এই স্বরূপ মনে রাখলে বাকি সব সিদ্ধান্ত সহজ হয়।',
          ],
        },
        {
          heading: 'প্রবেশপথ ও বাহির পথ',
          paragraphs: [
            'সাধারণ দিনে খোলা চত্বর দিয়েই ঢোকা যায়, কিন্তু একুশে ফেব্রুয়ারিতে প্রায়ই প্রবেশ ও বাহির আলাদা পথে চালানো হয় এবং স্বেচ্ছাসেবক বা আইনশৃঙ্খলা বাহিনীর নির্দেশনা থাকে।',
            'মানচিত্রে চিহ্নিত পিন বা অন্য দিনে ব্যবহৃত পথ এই দিনেও খোলা থাকবে—এমন নিশ্চয়তা নেই। সাইনবোর্ড ও দায়িত্বপ্রাপ্ত ব্যক্তির নির্দেশ মেনে চলাই সবচেয়ে নিরাপদ।',
            'বড় ব্যাগ, খাবারের প্যাকেট বা প্ল্যাকার্ড নিয়ে প্রবেশে সীমাবদ্ধতা থাকতে পারে; হালকা ব্যাগ আর সহজ পোশাক নিয়ে গেলে সময় বাঁচে।',
          ],
        },
        {
          heading: 'যাতায়াত ও সড়ক',
          paragraphs: [
            'ভিড় ও সড়ক ঘেরাওয়ের কারণে সড়কপথ অনিশ্চিত থাকে, তাই MRT লাইন ৬ সাধারণত সবচেয়ে নির্ভরযোগ্য। “ঢাকা বিশ্ববিদ্যালয়” ও “শাহবাগ”—দুই স্টেশনই স্মৃতিসৌধের কাছাকাছি।',
            'কোন সড়কে কখন সীমাবদ্ধতা থাকবে তা প্রতি বছর আলাদাভাবে ঘোষণা করা হয়; যাত্রার আগের দিন সেই ঘোষণা এবং DMTCL-এর সময়সূচি যাচাই করে নিন।',
            'গাড়ি বা রিকশায় এলে গন্তব্যস্থল নিয়ে অনিশ্চয়তা এড়াতে কাছের পরিচিত রাস্তায় নেমে হেঁটে যাওয়া বাস্তবসম্মত।',
          ],
        },
        {
          heading: 'ভিড়, নিরাপত্তা ও সম্মান',
          paragraphs: [
            'শিশু বা বয়স্ক কেউ সঙ্গে থাকলে ভোরের ভিড় এড়িয়ে যাওয়া ভালো। ভিড়ের মধ্যে দল ছাড়া হয়ে যাওয়া এড়াতে আগেই দেখা করার একটি জায়গা ঠিক করে নিন।',
            'ভেতরে উচ্চ স্বরে কথা বলা, হাসাহাসি বা খাবার খাওয়া এই স্থানের স্বরূপের সঙ্গে যায় না। শ্রদ্ধার সঙ্গে সময় কাটালেই অন্য দর্শকের সম্মান রক্ষা হয়।',
          ],
        },
      ],
      faq: [
        ['একুশে ফেব্রুয়ারিতে প্রবেশপথ কি সবসময় একই থাকে?', 'না। প্রবেশ ও বাহিরের পথ প্রতি বছর কর্তৃপক্ষের ব্যবস্থা অনুযায়ী বদলায়, তাই সেই বছরের ঘোষণা দেখে নেওয়া জরুরি।'],
        ['সড়ক বন্ধ থাকে কি?', 'বড় আয়োজনের সময় সাধারণত কাছের সড়কে সীমিত চলাচল বা ঘেরাও থাকে; নির্দিষ্ট সীমা সেই বছরের ঘোষণা থেকেই জানা যায়।'],
        ['দিনের কোন সময়ে যাওয়া ভালো?', 'ভোরের প্রভাতফেরির ভিড় কাটলে বা দুপুরের পর সাধারণত চাপ কম থাকে। নির্দিষ্ট সময় এখানে বলা হয়নি, কারণ তা প্রতি বছর বদলায়।'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
    en: {
      seoTitle: 'Visiting the Shaheed Minar on 21 February — Access and Travel',
      description:
        'How to plan a visit to the Central Shaheed Minar on 21 February: entry and exit routes, road arrangements and crowds, separated from information that changes every year.',
      h1: 'Access and travel on 21 February',
      lead:
        '21 February is the busiest day at the memorial, and the entry route, exit route, road restrictions and timings are set separately by the authorities each year. This page therefore gives the planning principles that stay true every year, not one year’s instructions.',
      facts: [
        { label: 'Busiest day', value: '21 February' },
        { label: 'Entry routes', value: 'Change year to year' },
        { label: 'Nature', value: 'National mourning and tribute' },
        { label: 'Verify', value: 'The current year’s official announcement' },
      ],
      sections: [
        {
          heading: 'What the day is like',
          paragraphs: [
            'The dawn procession starts in the first hours of the day and wreath-laying continues throughout it. Crowds peak in the morning and usually ease somewhat after midday.',
            'The day is one of national mourning and tribute rather than a festival, and keeping that in mind makes the other decisions simpler.',
          ],
        },
        {
          heading: 'Entry and exit routes',
          paragraphs: [
            'On ordinary days the open plaza is the way in, but on 21 February entry and exit are often separated and directed by volunteers or law-enforcement staff.',
            'A map pin, or the route used on another day, is no guarantee that the same way will be open on this day. Following signs and the instructions of staff on duty is safest.',
            'Large bags, food packets and placards may be restricted; a light bag and simple clothing save time at the entrance.',
          ],
        },
        {
          heading: 'Travel and roads',
          paragraphs: [
            'Road travel is unpredictable because of crowds and closures, so MRT Line 6 is usually the most reliable option. Both the Dhaka University and Shahbag stations are close to the memorial.',
            'Which roads are restricted, and when, is announced separately each year; check that announcement and the DMTCL schedule the day before you travel.',
            'If you come by car or rickshaw, getting out on a familiar nearby road and walking the last part is often more practical than insisting on the exact destination.',
          ],
        },
        {
          heading: 'Crowds, safety and respect',
          paragraphs: [
            'If children or older visitors are with you, avoiding the dawn rush is easier. Agree on a meeting point in advance so that no one is separated in the crowd.',
            'Loud talk, laughter or eating inside do not fit the character of this place. Spending the time quietly preserves both your own experience and other visitors’ dignity.',
          ],
        },
      ],
      faq: [
        ['Are the entry routes the same every 21 February?', 'No. Entry and exit routes change with the arrangements the authorities make each year, so check that year’s announcement.'],
        ['Are roads closed?', 'During major arrangements nearby roads usually have restrictions or closures; the exact extent is known from that year’s announcement.'],
        ['When is the best time to go?', 'Once the dawn procession’s crowd eases, or after midday, is usually quieter. No fixed time is given here because it changes each year.'],
      ],
      sources: [
        { label: 'DMTCL — Dhaka Mass Transit Company Ltd', href: 'https://dmtcl.gov.bd/' },
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
      ],
    },
  },

  {
    path: 'visit/accessibility',
    section: 'visit',
    priority: 'P2',
    related: ['visit/location-map', 'guides/short-visit', 'visit/february-21-access', 'nearby/bangladesh-national-museum'],
    bn: {
      seoTitle: 'প্রতিবন্ধী ও সীমিত চলাচলের দর্শকের জন্য শহীদ মিনার নির্দেশিকা',
      description:
        'হুইলচেয়ার বা সীমিত চলাচলের দর্শকের জন্য কেন্দ্রীয় শহীদ মিনার ভ্রমণের বাস্তব দিক: চত্বর ও উঁচু প্ল্যাটফর্মের গঠন, ভিড়ের সময় এবং আগে থেকে কী যাচাই করা উচিত।',
      h1: 'প্রতিবন্ধী দর্শকের জন্য শহীদ মিনার',
      lead:
        'স্মৃতিসৌধটি একটি খোলা চত্বর, আর মূল কাঠামোটি উঁচু প্ল্যাটফর্মে দাঁড়িয়ে আছে, যেখানে পৌঁছাতে ধাপ পার হতে হয়। এই গাইড নির্দিষ্ট প্রবেশপথের র্যাম্প, লিফট বা শৌচাগারের বর্তমান অবস্থা স্বাধীনভাবে যাচাই করতে পারেনি, তাই যাওয়ার আগে সংশ্লিষ্ট কর্তৃপক্ষের সঙ্গে নিশ্চিত করে নেওয়া জরুরি।',
      facts: [
        { label: 'ভূ-প্রকৃতি', value: 'খোলা চত্বর ও উঁচু প্ল্যাটফর্ম' },
        { label: 'প্ল্যাটফর্মে ওঠা', value: 'ধাপ পার হতে হয়' },
        { label: 'নিশ্চিত নয়', value: 'র্যাম্প, লিফট ও শৌচাগার' },
        { label: 'ব্যস্ততম দিন', value: '২১ ফেব্রুয়ারি' },
      ],
      sections: [
        {
          heading: 'চত্বর ও মূল কাঠামো',
          paragraphs: [
            'দর্শনার্থীরা সাধারণত খোলা চত্বর ধরে হেঁটে স্মৃতিসৌধের কাছে যান। মূল কাঠামোটি একটি উঁচু প্ল্যাটফর্মে অবস্থিত এবং সেখানে পৌঁছাতে ধাপ বা সিঁড়ি ব্যবহার করতে হয়।',
            'চত্বরের ভেতরের পথ সাধারণত সমতল, তবে বৃষ্টির দিনে বা বড় আয়োজনের সময় অস্থায়ী নির্মাণের কারণে পথ বদলে যেতে পারে।',
          ],
        },
        {
          heading: 'যা এই গাইড নিশ্চিত করতে পারেনি',
          paragraphs: [
            'নির্দিষ্ট প্রবেশপথে র্যাম্প আছে কি না, লিফট বা সিঁড়ির পাশে হাতল আছে কি না, বা দর্শকদের জন্য শৌচাগার কোথায়—এমন তথ্য স্বাধীনভাবে যাচাই করা যায়নি।',
            'তাই নিশ্চিত না হওয়া তথ্য অনুমান করে লেখা হয়নি। যাওয়ার আগে ফোনে বা সরেজমিনে জেনে নেওয়াই ভরসাযোগ্য পথ।',
          ],
        },
        {
          heading: 'পরিকল্পনার পরামর্শ',
          paragraphs: [
            'সঙ্গে একজন সহায়ক থাকলে ধাপ পার হওয়া ও ভিড় সামলানো অনেক সহজ হয়। ব্যস্ত দিনগুলো এড়িয়ে সাধারণ দিনে গেলে চলাচলের জায়গা বেশি পাওয়া যায়।',
            'গাড়ি বা রিকশায় এলে সেক্রেটারিয়েট রোডের কাছাকাছি নেমে অল্প হাঁটার পরিকল্পনা করলে যাত্রাটি সহজ হয়।',
          ],
        },
        {
          heading: 'ভিড় ও আবহাওয়া',
          paragraphs: [
            'একুশে ফেব্রুয়ারি বা বড় আয়োজনের দিনে ভিড় এত বেশি হয় যে ধীরে চলা বা থেমে দাঁড়ানো কষ্টকর হতে পারে। ছায়া কম, তাই রোদ ও গরমের কথা ভেবে পানি ও টুপি সঙ্গে রাখা ভালো।',
            'নিজের গতিতে চলার সুযোগ যেখানে নেই, সেখানে বিশ্রামের জায়গা আগেই ঠিক করে নেওয়া সহায়ক।',
          ],
        },
      ],
      faq: [
        ['হুইলচেয়ার নিয়ে চত্বরে ঢোকা যায়?', 'খোলা চত্বর ধরে চলাচল সাধারণত সম্ভব বলে ধরা হয়, তবে উঁচু প্ল্যাটফর্মে ওঠার পথে র্যাম্প আছে কি না নিশ্চিত করা যায়নি—আগে যাচাই করুন।'],
        ['শৌচাগারের তথ্য কি এই পাতায় আছে?', 'না। যাচাই করা শৌচাগারের তথ্য না থাকায় এখানে অনুমান করে কিছু লেখা হয়নি।'],
        ['সহায়তা পাওয়া যাবে?', 'বড় আয়োজনে স্বেচ্ছাসেবক থাকেন, তবে সাধারণ দিনে আগে থেকেই ব্যবস্থা করে যাওয়া ভালো।'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Accessibility at the Central Shaheed Minar — A Practical Guide',
      description:
        'Practical points for visitors using wheelchairs or with limited mobility at the Central Shaheed Minar: the open plaza and raised platform, crowd conditions, and what to confirm in advance.',
      h1: 'Accessibility at the Shaheed Minar',
      lead:
        'The memorial is an open plaza and the main structure stands on a raised platform reached by steps. This guide could not independently confirm the current condition of ramps, lifts or toilets at any particular entrance, so it is important to confirm details with the relevant authorities before you travel.',
      facts: [
        { label: 'Ground', value: 'Open plaza and raised platform' },
        { label: 'To the platform', value: 'Steps must be climbed' },
        { label: 'Not confirmed', value: 'Ramps, lifts and toilets' },
        { label: 'Busiest day', value: '21 February' },
      ],
      sections: [
        {
          heading: 'The plaza and the main structure',
          paragraphs: [
            'Visitors normally walk across the open plaza towards the memorial. The main structure stands on a raised platform, and reaching it involves steps.',
            'Paths inside the plaza are generally level, though rain or temporary structures during major events can change the route.',
          ],
        },
        {
          heading: 'What this guide could not confirm',
          paragraphs: [
            'Whether a particular entrance has a ramp, whether there are handrails beside steps, or where visitor toilets are located, could not be independently verified.',
            'Unconfirmed details have therefore been left out rather than guessed. Asking by phone or on site beforehand is the reliable route.',
          ],
        },
        {
          heading: 'Planning suggestions',
          paragraphs: [
            'Travelling with an assistant makes both the steps and the crowd much easier to manage. Visiting on an ordinary day rather than a peak day leaves more room to move.',
            'If you arrive by car or rickshaw, planning to get out near Secretariat Road and walk a short distance usually makes the journey easier.',
          ],
        },
        {
          heading: 'Crowds and weather',
          paragraphs: [
            'On 21 February and during major events the crowd can be dense enough that moving slowly, or stopping, becomes difficult. Shade is limited, so carrying water and a hat is sensible.',
            'Deciding on a rest point in advance helps when you cannot set your own pace.',
          ],
        },
      ],
      faq: [
        ['Can I enter the plaza in a wheelchair?', 'Movement across the open plaza is generally assumed to be possible, but whether a ramp exists on the way up to the raised platform is not confirmed — check beforehand.'],
        ['Does this page include toilet information?', 'No. No verified toilet information was available, so nothing has been guessed.'],
        ['Is assistance available?', 'Volunteers are present during major events, but on ordinary days it is better to arrange help in advance.'],
      ],
      sources: [
        { label: 'University of Dhaka — public access report', href: 'https://sustainability.du.ac.bd/sdg_menu_details/20' },
        { label: 'Google Maps — Central Shaheed Minar', href: 'https://maps.app.goo.gl/ySi18KGioTbQ5b8d9' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },
];
