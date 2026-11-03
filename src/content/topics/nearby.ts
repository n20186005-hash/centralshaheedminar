import type { Topic } from './types';

/**
 * আশপাশের স্থান ও ভ্রমণ-পথ।
 * কোনো হাঁটার সময়, দূরত্ব, ভাড়া বা বাণিজ্যিক প্রতিষ্ঠানের নাম বানানো হয়নি;
 * যেখানে নিশ্চিত নয় সেখানে অফিসিয়াল সূত্র থেকে যাচাইয়ের অনুরোধ করা হয়েছে।
 */
export const nearbyTopics: Topic[] = [
  {
    path: 'nearby/curzon-hall',
    section: 'nearby',
    priority: 'P1',
    related: ['history/language-movement-1952', 'guides/short-visit', 'nearby/doel-chattar', 'itineraries/half-day-language-heritage'],
    bn: {
      seoTitle: 'কার্জন হল, ঢাকা বিশ্ববিদ্যালয় — ইতিহাস, স্থাপত্য ও ভাষা আন্দোলন',
      description:
        'কার্জন হলের ইতিহাস, ইউরোপীয়-মোগল মিশ্র স্থাপত্য এবং ১৯৪৮ সালে ভাষা আন্দোলনে এর ভূমিকা—ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের এই ঐতিহাসিক ভবন নিয়ে নির্দেশিকা।',
      h1: 'কার্জন হল: ইতিহাস, স্থাপত্য ও ভাষা আন্দোলন',
      lead:
        'কার্জন হল ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের অন্যতম ঐতিহাসিক ভবন। ১৯০৪ সালে ভিত্তি স্থাপনের পর এটি ঢাকা কলেজ এবং পরে ঢাকা বিশ্ববিদ্যালয়ের বিজ্ঞান শাখার অংশ হয়; ১৯৪৮ সালে এখানেই শিক্ষার্থীরা উর্দুকে একমাত্র রাষ্ট্রভাষা করার ঘোষণা প্রত্যাখ্যান করে।',
      facts: [
        { label: 'অবস্থান', value: 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস' },
        { label: 'ভিত্তি স্থাপন', value: '১৯০৪' },
        { label: 'নাম', value: 'লর্ড কার্জনের নামে' },
        { label: 'তাৎপর্য', value: '১৯৪৮ — ভাষা আন্দোলন' },
      ],
      sections: [
        {
          heading: 'ইতিহাস',
          paragraphs: [
            'কার্জন হল মূলত একটি টাউন হল হিসেবে পরিকল্পিত হয়; ভারতের ভাইসরয় লর্ড কার্জন ১৯০৪ সালে এর ভিত্তি স্থাপন করেন। বঙ্গভঙ্গের পর ঢাকা নতুন প্রদেশের রাজধানী হলে ভবনটির গুরুত্ব আরও বাড়ে।',
            '১৯১১ সালে বঙ্গভঙ্গ রদ হলে ভবনটি ঢাকা কলেজের প্রাঙ্গণ হিসেবে ব্যবহৃত হয়। ১৯২১ সালে ঢাকা বিশ্ববিদ্যালয় প্রতিষ্ঠার পর এটি বিশ্ববিদ্যালয়ের বিজ্ঞান শাখার অংশ হয়ে ওঠে, যা আজও চলছে।',
          ],
        },
        {
          heading: 'স্থাপত্যের বৈশিষ্ট্য',
          paragraphs: [
            'কার্জন হল ঢাকার স্থাপত্যের অন্যতম উৎকৃষ্ট উদাহরণ—ইউরোপীয় ও মোগল উপাদানের সংমিশ্রণ। উত্তর দিকের অভিক্ষিপ্ত সম্মুখভাগে ঘোড়ার নালের মতো ও খাঁজকাটা—দুই ধরনের খিলানই দেখা যায়।',
            'লাল রঙ, অলংকৃত ব্র্যাকেট, গভীর ছাদ ও গম্বুজাকৃতি ছত্রী ফতেহপুর সিক্রির দিওয়ান-ই-খাসের কথা মনে করায়; ভবনের সামনে প্রশস্ত ও যত্নে রাখা বাগান রয়েছে।',
          ],
          bullets: ['সম্মুখভাগে দুই ধরনের খিলান', 'ছাদ ও ছত্রীর অলংকরণ', 'সামনের বাগান'],
        },
        {
          heading: 'ভাষা আন্দোলনে ভূমিকা',
          paragraphs: [
            'ভাষা আন্দোলনের ইতিহাসে কার্জন হলের বিশেষ স্থান রয়েছে। ১৯৪৮ সালে এখানেই ঢাকা বিশ্ববিদ্যালয়ের শিক্ষার্থীরা মুহাম্মদ আলী জিন্নাহর “উর্দুই একমাত্র রাষ্ট্রভাষা” ঘোষণা প্রত্যাখ্যান করে।',
            'এই প্রত্যাখ্যান বাংলাকে রাষ্ট্রভাষার মর্যাদা দেওয়ার দীর্ঘ সংগ্রামের একটি গুরুত্বপূর্ণ ধাপ হিসেবে বিবেচিত হয়।',
          ],
        },
      ],
      faq: [
        ['কার্জন হল কী জন্য পরিচিত?', 'ইউরোপীয়-মোগল মিশ্র স্থাপত্য এবং ১৯৪৮ সালের ভাষা আন্দোলনের ঘটনার জন্য।'],
        ['এটি কি ঢাকা বিশ্ববিদ্যালয়ের অংশ?', 'হ্যাঁ, ১৯২১ সালে ঢাকা বিশ্ববিদ্যালয় প্রতিষ্ঠার পর এটি বিশ্ববিদ্যালয়ের বিজ্ঞান শাখার অংশ।'],
        ['কে এই ভবনের নামে?', 'ভারতের ভাইসরয় লর্ড কার্জন, যিনি ১৯০৪ সালে এর ভিত্তি স্থাপন করেন।'],
      ],
      sources: [
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
      ],
    },
    en: {
      seoTitle: 'Curzon Hall, Dhaka University — History, Architecture and the Language Movement',
      description:
        'The history and hybrid European-Mughal architecture of Curzon Hall, and its role in the 1948 Language Movement on the University of Dhaka campus.',
      h1: 'Curzon Hall: history, architecture and the Language Movement',
      lead:
        'Curzon Hall is one of the most historic buildings on the University of Dhaka campus. Founded in 1904, it passed to Dhaka College and later to the university’s science faculty; in 1948 it was here that students rejected the declaration that Urdu alone would be a state language.',
      facts: [
        { label: 'Location', value: 'University of Dhaka campus' },
        { label: 'Founded', value: '1904' },
        { label: 'Name', value: 'After Lord Curzon' },
        { label: 'Significance', value: '1948 — Language Movement' },
      ],
      sections: [
        {
          heading: 'History',
          paragraphs: [
            'Curzon Hall was originally intended as a town hall; Lord Curzon, the Viceroy of India, laid its foundation in 1904. After the partition of Bengal, when Dhaka became the capital of a new province, the building grew in importance.',
            'When the partition was annulled in 1911 the building was used as premises for Dhaka College. After the University of Dhaka was established in 1921, it became part of the university’s science faculty — which it remains today.',
          ],
        },
        {
          heading: 'Architecture',
          paragraphs: [
            'Curzon Hall is one of the finest examples of Dhaka’s architecture — a blend of European and Mughal elements. The projecting north facade shows both horse-shoe and cusped arches.',
            'The red colour, ornate brackets, deep eaves and domed terrace pavilions recall the Diwan-i-Khas at Fatehpur Sikri, and a spacious, carefully kept garden lies in front.',
          ],
          bullets: ['Two kinds of arches on the facade', 'Roof and pavilion ornamentation', 'The garden in front'],
        },
        {
          heading: 'Role in the Language Movement',
          paragraphs: [
            'Curzon Hall holds a particular place in the history of the Language Movement. In 1948, University of Dhaka students here rejected Muhammad Ali Jinnah’s declaration that Urdu alone would be the state language.',
            'That rejection is regarded as an important step in the long struggle to win state-language status for Bengali.',
          ],
        },
      ],
      faq: [
        ['What is Curzon Hall known for?', 'Its hybrid European-Mughal architecture and its role in the events of the 1948 Language Movement.'],
        ['Is it part of Dhaka University?', 'Yes — after the university was established in 1921 it became part of its science faculty.'],
        ['Who is it named after?', 'Lord Curzon, the Viceroy of India, who laid its foundation in 1904.'],
      ],
      sources: [
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
      ],
    },
  },

  {
    path: 'nearby/doel-chattar',
    section: 'nearby',
    priority: 'P1',
    related: ['nearby/curzon-hall', 'visit/from-tsc-doel-chattar', 'guides/short-visit', 'history/ekushey-february'],
    bn: {
      seoTitle: 'দোয়েল চত্বর, ঢাকা বিশ্ববিদ্যালয় — অবস্থান, ভাস্কর্য ও ভ্রমণ',
      description:
        'দোয়েল চত্বরের ভাস্কর্য, নামের অর্থ, ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে এর অবস্থান এবং আশপাশের স্থান নিয়ে সংক্ষিপ্ত ভ্রমণ নির্দেশিকা।',
      h1: 'দোয়েল চত্বর: জাতীয় পাখির ভাস্কর্যের চত্বর',
      lead:
        'দোয়েল চত্বর ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের একটি পরিচিত চত্বর, যার মাঝখানে দুইটি দোয়েল পাখির (ওরিয়েন্টাল ম্যাগপাই-রোবিন) ভাস্কর্য রয়েছে। দোয়েল বাংলাদেশের জাতীয় পাখি, আর চত্বরটি কার্জন হলের সামনে অবস্থিত।',
      facts: [
        { label: 'অবস্থান', value: 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস, শাহবাগ' },
        { label: 'ভাস্কর্য', value: 'দুইটি দোয়েল পাখি' },
        { label: 'দোয়েল', value: 'বাংলাদেশের জাতীয় পাখি' },
        { label: 'নিকটবর্তী', value: 'কার্জন হল' },
      ],
      sections: [
        {
          heading: 'নাম ও ভাস্কর্য',
          paragraphs: [
            'চত্বরটির নাম এসেছে “দোয়েল” থেকে—ওরিয়েন্টাল ম্যাগপাই-রোবিন, যা বাংলাদেশের জাতীয় পাখি। চত্বরের মাঝখানে দুইটি দোয়েলের ভাস্কর্য বসানো হয়েছে।',
            'শাহবাগের এই এলাকা ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের অংশ এবং কার্জন হলের সামনে পড়ে।',
          ],
        },
        {
          heading: 'ক্যাম্পাসের সংযোগস্থল',
          paragraphs: [
            'দোয়েল চত্বর ক্যাম্পাসের ভেতরে একাধিক পথের সংযোগস্থল হিসেবে কাজ করে; এখান থেকে কার্জন হল এবং চারুকলা ইনস্টিটিউটের দিকে যাওয়া যায়।',
            'ক্যাম্পাস ও শহরের কেন্দ্রীয় সড়কপথের সংলগ্ন হওয়ায় একুশে ফেব্রুয়ারির প্রভাতফেরি ও সাংস্কৃতিক শোভাযাত্রার সঙ্গে এই চত্বরের সংযোগ রয়েছে।',
          ],
        },
        {
          heading: 'ভ্রমণে যা মনে রাখবেন',
          paragraphs: [
            'চত্বরটি খোলা ও সবার জন্য প্রবেশযোগ্য, তবে এটি ক্যাম্পাসের অংশ—তাই ভিড়ের সময় চলাচলে শৃঙ্খলা রাখা ভালো।',
            'আশপাশের অনুষ্ঠান বা সড়ক-পরিস্থিতি অনুযায়ী চলাচল সীমিত থাকতে পারে; যাওয়ার আগে স্থানীয় অবস্থা যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['দোয়েল চত্বর কোথায় অবস্থিত?', 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের শাহবাগ অংশে, কার্জন হলের সামনে।'],
        ['দোয়েল চত্বরে কী আছে?', 'দুইটি দোয়েল পাখির—বাংলাদেশের জাতীয় পাখির—ভাস্কর্য।'],
        ['নামের অর্থ কী?', '“দোয়েল” হলো ওরিয়েন্টাল ম্যাগপাই-রোবিন পাখির বাংলা নাম।'],
      ],
      sources: [
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
    en: {
      seoTitle: 'Doel Chattar, Dhaka University — Location, Sculpture and Visiting',
      description:
        'The sculpture at Doel Chattar, what the name means, where it sits on the University of Dhaka campus, and a short guide to the surrounding area.',
      h1: 'Doel Chattar: the square of the national bird',
      lead:
        'Doel Chattar is a well-known square on the University of Dhaka campus, with a sculpture of two doel birds (oriental magpie-robins) at its centre. The doel is the national bird of Bangladesh, and the square sits in front of Curzon Hall.',
      facts: [
        { label: 'Location', value: 'University of Dhaka campus, Shahbag' },
        { label: 'Sculpture', value: 'Two doel birds' },
        { label: 'Doel', value: 'The national bird of Bangladesh' },
        { label: 'Nearby', value: 'Curzon Hall' },
      ],
      sections: [
        {
          heading: 'The name and the sculpture',
          paragraphs: [
            'The square takes its name from the doel — the oriental magpie-robin, which is the national bird of Bangladesh. A sculpture of two doel birds is placed at its centre.',
            'This area of Shahbag is part of the University of Dhaka campus, and lies in front of Curzon Hall.',
          ],
        },
        {
          heading: 'A junction on campus',
          paragraphs: [
            'Doel Chattar works as a junction of several routes inside the campus; from here you can head towards Curzon Hall and the Institute of Fine Arts.',
            'Because it adjoins both the campus and the city’s central road, the square is linked with the probhat feri and cultural processions of 21 February.',
          ],
        },
        {
          heading: 'What to keep in mind',
          paragraphs: [
            'The square is open and publicly accessible, but it is part of the campus, so keeping to orderly movement during busy times is sensible.',
            'Movement can be restricted by nearby events or road conditions; check the local situation before you go.',
          ],
        },
      ],
      faq: [
        ['Where is Doel Chattar?', 'On the Shahbag side of the University of Dhaka campus, in front of Curzon Hall.'],
        ['What is at Doel Chattar?', 'A sculpture of two doel birds — the national bird of Bangladesh.'],
        ['What does the name mean?', '“Doel” is the Bengali name of the oriental magpie-robin.'],
      ],
      sources: [
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
      ],
    },
  },

  {
    path: 'nearby/bangladesh-national-museum',
    section: 'nearby',
    priority: 'P1',
    related: ['nearby/suhrawardy-udyan', 'itineraries/one-day-dhaka-history', 'nearby/curzon-hall', 'history/language-movement-1952'],
    bn: {
      seoTitle: 'বাংলাদেশ জাতীয় জাদুঘর, শাহবাগ — ইতিহাস, সংগ্রহ ও ভ্রমণ তথ্য',
      description:
        'বাংলাদেশ জাতীয় জাদুঘরের ইতিহাস, শাহবাগে এর অবস্থান, সংগ্রহশালার মূল ধরন এবং ঢাকার ইতিহাস-ভ্রমণে এর ভূমিকা।',
      h1: 'বাংলাদেশ জাতীয় জাদুঘর',
      lead:
        'বাংলাদেশ জাতীয় জাদুঘর ঢাকার শাহবাগে অবস্থিত। ১৯১৩ সালে নিমতলীতে “ঢাকা মিউজিয়াম” হিসেবে এর সূচনা হয় এবং পরে শাহবাগের বর্তমান ভবনে স্থানান্তরিত হয়; এখানে প্রত্নতত্ত্ব, শিল্পকলা, মুদ্রা ও ইতিহাস-সংক্রান্ত বিস্তৃত সংগ্রহ রয়েছে।',
      facts: [
        { label: 'অবস্থান', value: 'শাহবাগ, ঢাকা' },
        { label: 'সূচনা', value: '১৯১৩ — ঢাকা মিউজিয়াম' },
        { label: 'শাহবাগে স্থানান্তর', value: '১৯৮৩' },
        { label: 'সংগ্রহ', value: 'প্রত্নতত্ত্ব, শিল্পকলা, মুদ্রা, ইতিহাস' },
      ],
      sections: [
        {
          heading: 'ইতিহাস',
          paragraphs: [
            'জাতীয় জাদুঘরের সূচনা ১৯১৩ সালে নিমতলীতে “ঢাকা মিউজিয়াম” নামে হয়। প্রতিষ্ঠানটি পরে শাহবাগের নতুন ভবনে স্থানান্তরিত হয় এবং ১৯৮৩ সালে বর্তমান ভবনে যাত্রা শুরু করে।',
            'এটি ঢাকার কেন্দ্রীয় সাংস্কৃতিক এলাকায়—বাংলা একাডেমি ও সোহরাওয়ার্দী উদ্যানের সান্নিধ্যে অবস্থিত।',
          ],
        },
        {
          heading: 'সংগ্রহে কী আছে',
          paragraphs: [
            'সংগ্রহে রয়েছে হিন্দু, বৌদ্ধ ও মুসলিম যুগের ভাস্কর্য ও চিত্র, পুরনো মুদ্রা, ধাতব মূর্তি, হাতির দাঁত ও রূপার কাজ, বস্ত্র—যার মধ্যে বিশ্বখ্যাত মসলিনও রয়েছে—এবং নকশি কাঁথা।',
            'ভাষা আন্দোলন ও মুক্তিযুদ্ধ-সংক্রান্ত নিদর্শনও এখানে সংরক্ষিত, যা জাদুঘরটিকে ইতিহাস-ভ্রমণে গুরুত্বপূর্ণ করে তোলে।',
          ],
        },
        {
          heading: 'ভ্রমণের জন্য',
          paragraphs: [
            'জাদুঘর শাহবাগে হওয়ায় শহীদ মিনার ও সোহরাওয়ার্দী উদ্যানসহ একই দিনের ভ্রমণে যুক্ত করা সহজ।',
            'খোলার সময়, প্রবেশমূল্য ও সাপ্তাহিক ছুটি সংক্রান্ত সর্বশেষ তথ্য জাদুঘরের অফিসিয়াল সূত্র থেকে যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['জাতীয় জাদুঘর কোথায়?', 'ঢাকার শাহবাগে।'],
        ['কত সালে সূচনা হয়?', '১৯১৩ সালে নিমতলীতে “ঢাকা মিউজিয়াম” হিসেবে; পরে শাহবাগের বর্তমান ভবনে স্থানান্তরিত হয়।'],
        ['সংগ্রহে কী কী আছে?', 'প্রত্নতত্ত্ব, ভাস্কর্য ও চিত্র, মুদ্রা, ধাতব মূর্তি, মসলিন ও নকশি কাঁথাসহ ইতিহাস-সংক্রান্ত নিদর্শন।'],
      ],
      sources: [
        { label: 'Bangladesh National Museum (official)', href: 'https://bangladeshmuseum.gov.bd/' },
        { label: 'Banglapedia — Bangladesh National Museum', href: 'https://en.banglapedia.org/index.php/Bangladesh_National_Museum' },
      ],
    },
    en: {
      seoTitle: 'Bangladesh National Museum, Shahbag — History, Collection and Visiting',
      description:
        'The history of the Bangladesh National Museum, its location in Shahbag, the main kinds of material it holds, and its place in a history-focused visit to Dhaka.',
      h1: 'Bangladesh National Museum',
      lead:
        'The Bangladesh National Museum is in Shahbag, Dhaka. It began in 1913 as the Dhaka Museum in Nimtali and later moved to its present building in Shahbag; it holds wide collections of archaeology, art, coins and history.',
      facts: [
        { label: 'Location', value: 'Shahbag, Dhaka' },
        { label: 'Origin', value: '1913 — the Dhaka Museum' },
        { label: 'Moved to Shahbag', value: 'Its present building' },
        { label: 'Collections', value: 'Archaeology, art, coins, history' },
      ],
      sections: [
        {
          heading: 'History',
          paragraphs: [
            'The museum began in 1913 as the “Dhaka Museum” in Nimtali. It later moved to a new building in Shahbag, and by 1983 it had settled into its present premises.',
            'It sits in the central cultural area of Dhaka, close to Bangla Academy and Suhrawardy Udyan.',
          ],
        },
        {
          heading: 'What the collection holds',
          paragraphs: [
            'The collection includes sculpture and painting from Hindu, Buddhist and Muslim periods, old coins, metal images, ivory and silver work, textiles — including the world-famous muslin — and nakshi kantha embroidery.',
            'Material relating to the Language Movement and the Liberation War is also preserved, which makes the museum important for a history-focused visit.',
          ],
        },
        {
          heading: 'For visitors',
          paragraphs: [
            'Because it is in Shahbag, the museum can easily be combined with the Shaheed Minar and Suhrawardy Udyan in a single day.',
            'Check the museum’s official source for current opening hours, tickets and weekly closures.',
          ],
        },
      ],
      faq: [
        ['Where is the National Museum?', 'In Shahbag, Dhaka.'],
        ['When did it begin?', 'In 1913, as the “Dhaka Museum” in Nimtali; it later moved to the present building in Shahbag.'],
        ['What is in the collection?', 'Archaeology, sculpture and painting, coins, metal images, muslin, nakshi kantha and historical material.'],
      ],
      sources: [
        { label: 'Bangladesh National Museum (official)', href: 'https://bangladeshmuseum.gov.bd/' },
        { label: 'Banglapedia — Bangladesh National Museum', href: 'https://en.banglapedia.org/index.php/Bangladesh_National_Museum' },
      ],
    },
  },

  {
    path: 'nearby/suhrawardy-udyan',
    section: 'nearby',
    priority: 'P1',
    related: ['nearby/bangladesh-national-museum', 'history/1971-rebuilding', 'itineraries/one-day-dhaka-history', 'nearby/dhakeshwari-temple'],
    bn: {
      seoTitle: 'সোহরাওয়ার্দী উদ্যান — ইতিহাস, ৭ মার্চ ও ১৯৭১ সালের আত্মসমর্পণ',
      description:
        'সোহরাওয়ার্দী উদ্যানের ইতিহাস: রামনা রেসকোর্স থেকে স্বাধীন বাংলাদেশ, ৭ মার্চের ঐতিহাসিক ভাষণ, ১৯৭১ সালের ১৬ ডিসেম্বরের আত্মসমর্পণ ও শিখা চিরন্তন।',
      h1: 'সোহরাওয়ার্দী উদ্যান: রেসকোর্স থেকে স্বাধীনতার সাক্ষী',
      lead:
        'সোহরাওয়ার্দী উদ্যান—পুরনো নাম রামনা রেসকোর্স—বাংলাদেশের ইতিহাসে সবচেয়ে তাৎপর্যপূর্ণ খোলা প্রাঙ্গণগুলোর একটি। ১৯৭১ সালের ৭ মার্চ এখানেই ঐতিহাসিক ভাষণ দেওয়া হয় এবং একই বছর ১৬ ডিসেম্বর পাকিস্তানি বাহিনী এখানেই আনুষ্ঠানিকভাবে আত্মসমর্পণ করে।',
      facts: [
        { label: 'পুরনো নাম', value: 'রামনা রেসকোর্স' },
        { label: 'ঐতিহাসিক ভাষণ', value: '৭ মার্চ ১৯৭১' },
        { label: 'আত্মসমর্পণ', value: '১৬ ডিসেম্বর ১৯৭১' },
        { label: 'শিখা চিরন্তন', value: '১৯৯৬' },
      ],
      sections: [
        {
          heading: 'রেসকোর্স থেকে উদ্যান',
          paragraphs: [
            'মোগল আমলে এলাকাটি বাগ-ই-বাদশাহি নামে পরিচিত ছিল; পরে ব্রিটিশ আমলে রামনা গ্রিন নামে ঘেরা রেসকোর্স হিসেবে গড়ে ওঠে। দীর্ঘকাল এটি ঢাকার অন্যতম বড় খোলা প্রাঙ্গণ ছিল।',
            '১৯৭৫ সালের পর এলাকাটি সবুজ ও পথচলার উদ্যানে রূপান্তরিত হয়; উদ্যানের একাংশে শিশুদের বিনোদনের ব্যবস্থাও রয়েছে।',
          ],
        },
        {
          heading: '৭ মার্চ ও মুক্তিযুদ্ধ',
          paragraphs: [
            '১৯৭১ সালের ৭ মার্চ রামনা রেসকোর্সের বিশাল জনসমাবেশে বঙ্গবন্ধু শেখ মুজিবুর রহমান ঐতিহাসিক ভাষণ দেন, যা স্বাধীনতার ঘোষণার সমতুল্য হিসেবে বিবেচিত হয়।',
            'একই মাঠে ১৬ ডিসেম্বর ১৯৭১ পাকিস্তানি বাহিনী আনুষ্ঠানিকভাবে আত্মসমর্পণ করে; এই দিনটিই বিজয় দিবস হিসেবে পালিত হয়।',
          ],
        },
        {
          heading: 'শিখা চিরন্তন ও আশপাশ',
          paragraphs: [
            'স্বাধীনতার সঙ্গে যুক্ত ঘটনাগুলোর স্মরণে ১৯৯৬ সালে এখানে শিখা চিরন্তন স্থাপন করা হয় এবং আত্মসমর্পণের স্থানের কাছে জাতীয় স্বাধীনতা স্তম্ভ নির্মাণ শুরু হয়।',
            'দক্ষিণ দিকে তিন জাতীয় নেতার মাজার এবং আশপাশে বাংলা একাডেমি, জাতীয় জাদুঘর ও কার্জন হল থাকায় উদ্যানটি অনেক ঐতিহাসিক স্থানের কেন্দ্রে পড়েছে।',
          ],
        },
      ],
      faq: [
        ['সোহরাওয়ার্দী উদ্যানের পুরনো নাম কী?', 'রামনা রেসকোর্স (রেসকোর্স ময়দান)।'],
        ['এখানে কী কী ঐতিহাসিক ঘটনা ঘটেছে?', '১৯৭১ সালের ৭ মার্চের ঐতিহাসিক ভাষণ এবং একই বছর ১৬ ডিসেম্বর পাকিস্তানি বাহিনীর আনুষ্ঠানিক আত্মসমর্পণ।'],
        ['শিখা চিরন্তন কী?', 'মুক্তিযুদ্ধের স্মরণে ১৯৯৬ সালে উদ্যানে স্থাপিত একটি স্মৃতিচিহ্ন।'],
      ],
      sources: [
        { label: 'Banglapedia — Ramna Racecourse (Suhrawardy Udyan)', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
        { label: 'Banglapedia — Seventh March Address', href: 'https://en.banglapedia.org/index.php/Seventh_March_Address' },
      ],
    },
    en: {
      seoTitle: 'Suhrawardy Udyan — History, the 7 March Address and the 1971 Surrender',
      description:
        'The history of Suhrawardy Udyan: from the Ramna Racecourse to independent Bangladesh, the historic 7 March address, the 16 December 1971 surrender and the Eternal Flame.',
      h1: 'Suhrawardy Udyan: from racecourse to witness of independence',
      lead:
        'Suhrawardy Udyan — formerly the Ramna Racecourse — is one of the most historically significant open grounds in Bangladesh. The historic address of 7 March 1971 was delivered here, and on 16 December the same year the Pakistani forces formally surrendered on this ground.',
      facts: [
        { label: 'Former name', value: 'Ramna Racecourse' },
        { label: 'Historic address', value: '7 March 1971' },
        { label: 'Surrender', value: '16 December 1971' },
        { label: 'Eternal Flame', value: '1996' },
      ],
      sections: [
        {
          heading: 'From racecourse to public garden',
          paragraphs: [
            'In Mughal times the area was known as Bagh-e-Badshahi; under British rule it became an enclosed racecourse called Ramna Green. For a long period it was one of the largest open grounds in Dhaka.',
            'After 1975 the ground was converted into a green park with walkways; part of it now has a children’s recreation area.',
          ],
        },
        {
          heading: '7 March and the Liberation War',
          paragraphs: [
            'On 7 March 1971, before a vast gathering at the Ramna Racecourse, Bangabandhu Sheikh Mujibur Rahman delivered the historic address regarded as equivalent to a declaration of independence.',
            'On the same ground, on 16 December 1971, the Pakistani forces formally surrendered — the day now observed as Victory Day.',
          ],
        },
        {
          heading: 'The Eternal Flame and surroundings',
          paragraphs: [
            'To commemorate the events tied to independence, an Eternal Flame (Shikha Chirantan) was installed here in 1996, and construction of the National Independence Tower began near the surrender site.',
            'To the south lie the mausoleums of three national leaders, and around the ground sit Bangla Academy, the National Museum and Curzon Hall — making the park a hub of historic sites.',
          ],
        },
      ],
      faq: [
        ['What was Suhrawardy Udyan’s former name?', 'The Ramna Racecourse (Racecourse Maidan).'],
        ['What historic events happened here?', 'The historic 7 March 1971 address and the formal surrender of the Pakistani forces on 16 December 1971.'],
        ['What is the Eternal Flame?', 'A memorial marker installed in the ground in 1996 to commemorate the Liberation War.'],
      ],
      sources: [
        { label: 'Banglapedia — Ramna Racecourse (Suhrawardy Udyan)', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
        { label: 'Banglapedia — Seventh March Address', href: 'https://en.banglapedia.org/index.php/Seventh_March_Address' },
      ],
    },
  },

  {
    path: 'nearby/tsc',
    section: 'nearby',
    priority: 'P2',
    related: ['nearby/doel-chattar', 'visit/from-tsc-doel-chattar', 'nearby/curzon-hall', 'guides/short-visit'],
    bn: {
      seoTitle: 'ঢাকা বিশ্ববিদ্যালয়ের টিএসসি (TSC) — সাংস্কৃতিক কেন্দ্র ও ক্যাম্পাস জীবন',
      description:
        'ঢাকা বিশ্ববিদ্যালয়ের টিচার-স্টুডেন্ট সেন্টার (TSC): ১৯৬১ সালের প্রতিষ্ঠা, ক্যাম্পাসের সাংস্কৃতিক ও সামাজিক ভূমিকা এবং আশপাশের স্থানের সঙ্গে সংযোগ।',
      h1: 'টিচার-স্টুডেন্ট সেন্টার (TSC), ঢাকা বিশ্ববিদ্যালয়',
      lead:
        'টিচার-স্টুডেন্ট সেন্টার—সাধারণভাবে TSC নামে পরিচিত—ঢাকা বিশ্ববিদ্যালয়ের সাংস্কৃতিক ও সামাজিক জীবনের কেন্দ্র। ১৯৬১ সালে প্রতিষ্ঠিত এই প্রতিষ্ঠানটি ক্যাম্পাসের অনুষ্ঠান, আড্ডা ও সাংস্কৃতিক কার্যক্রমের অন্যতম প্রধান স্থান।',
      facts: [
        { label: 'অবস্থান', value: 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস' },
        { label: 'প্রতিষ্ঠা', value: '১৯৬১' },
        { label: 'ভূমিকা', value: 'সাংস্কৃতিক ও সামাজিক কেন্দ্র' },
        { label: 'নিকটবর্তী', value: 'শাহবাগ ও কার্জন হল এলাকা' },
      ],
      sections: [
        {
          heading: 'পরিচিতি',
          paragraphs: [
            'TSC প্রতিষ্ঠিত হয় ১৯৬১ সালে; এর উদ্দেশ্য ছিল কেবল প্রশাসনিক বা বিনোদনমূলক কিছু নয়, বরং শিক্ষার্থী ও শিক্ষকদের মিলনস্থল হিসেবে ক্যাম্পাসজীবনের সাংস্কৃতিক কেন্দ্র হয়ে ওঠা।',
            'ষাট বছরের বেশি সময় ধরে এটি আলোচনা, সাংস্কৃতিক অনুষ্ঠান, নাটক ও সংগীতের একটি পরিচিত প্রাঙ্গণ।',
          ],
        },
        {
          heading: 'ক্যাম্পাসজীবনে ভূমিকা',
          paragraphs: [
            'চত্বরকে ঘিরে গড়া এই প্রতিষ্ঠানে একটি খোলা প্রাঙ্গণ রয়েছে, যেখানে শিক্ষার্থীরা জড়ো হয়; ক্যাম্পাসের নাটক, সংগীত ও সাংস্কৃতিক আয়োজনের বড় অংশ এখানেই হয়।',
            'শাহবাগ ও কার্জন হল এলাকার কাছে হওয়ায় শহীদ মিনার ও ক্যাম্পাসের অন্যান্য ঐতিহাসিক স্থানের সঙ্গে এটি সহজে যুক্ত হয়।',
          ],
        },
        {
          heading: 'ভ্রমণে যা মনে রাখবেন',
          paragraphs: [
            'এটি একটি সক্রিয় শিক্ষা-প্রতিষ্ঠানের অংশ; তাই ভ্রমণের সময় প্রতিষ্ঠানের নিয়ম ও শিক্ষার্থীদের চলাচলের প্রতি সম্মান রাখা ভালো।',
            'অনুষ্ঠান বা পরীক্ষার সময় প্রবেশ ও চলাচল সীমিত থাকতে পারে—যাওয়ার আগে ক্যাম্পাসের সাম্প্রতিক অবস্থা যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['TSC কী?', 'ঢাকা বিশ্ববিদ্যালয়ের টিচার-স্টুডেন্ট সেন্টার—ক্যাম্পাসের সাংস্কৃতিক ও সামাজিক কেন্দ্র।'],
        ['কত সালে প্রতিষ্ঠিত?', '১৯৬১ সালে।'],
        ['এখানে কী হয়?', 'সাংস্কৃতিক অনুষ্ঠান, আলোচনা, নাটক, সংগীত এবং শিক্ষার্থীদের সামাজিক কার্যক্রম।'],
      ],
      sources: [
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Ramna Racecourse', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
      ],
    },
    en: {
      seoTitle: 'TSC, University of Dhaka — The Campus Cultural Centre',
      description:
        'The Teacher-Student Centre (TSC) at the University of Dhaka: its founding in 1961, its social and cultural role on campus, and how it connects to nearby historic sites.',
      h1: 'The Teacher-Student Centre (TSC), University of Dhaka',
      lead:
        'The Teacher-Student Centre — commonly known as TSC — is the hub of social and cultural life at the University of Dhaka. Established in 1961, it is one of the main venues for campus events, gatherings and cultural activity.',
      facts: [
        { label: 'Location', value: 'University of Dhaka campus' },
        { label: 'Established', value: '1961' },
        { label: 'Role', value: 'Cultural and social centre' },
        { label: 'Nearby', value: 'Shahbag and Curzon Hall area' },
      ],
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'TSC was established in 1961; it was intended not merely as an auditorium or recreation building but as a meeting place for students and teachers and the cultural heart of campus life.',
            'For more than six decades it has been a familiar setting for talks, cultural programmes, theatre and music.',
          ],
        },
        {
          heading: 'Its role on campus',
          paragraphs: [
            'Built around a courtyard, the centre has an open ground where students gather; much of the campus’s theatre, music and cultural programming takes place here.',
            'Being close to Shahbag and the Curzon Hall area, it connects easily with the Shaheed Minar and other historic sites on campus.',
          ],
        },
        {
          heading: 'What to keep in mind',
          paragraphs: [
            'It is part of a working educational institution, so it is best to respect the institution’s rules and the movement of students while visiting.',
            'Access may be limited during events or examinations; check the current campus situation before you go.',
          ],
        },
      ],
      faq: [
        ['What is TSC?', 'The Teacher-Student Centre of the University of Dhaka — the campus’s social and cultural centre.'],
        ['When was it established?', 'In 1961.'],
        ['What happens there?', 'Cultural programmes, talks, theatre, music and student social activity.'],
      ],
      sources: [
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
        { label: 'Banglapedia — Ramna Racecourse', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
      ],
    },
  },

  {
    path: 'nearby/dhakeshwari-temple',
    section: 'nearby',
    priority: 'P2',
    related: ['nearby/suhrawardy-udyan', 'itineraries/one-day-dhaka-history', 'nearby/bangladesh-national-museum', 'history/language-movement-1952'],
    bn: {
      seoTitle: 'ঢাকেশ্বরী মন্দির — ইতিহাস, স্থাপত্য ও ভ্রমণ নির্দেশিকা',
      description:
        'ঢাকেশ্বরী মন্দিরের ইতিহাস ও স্থাপত্য: নামের ব্যুৎপত্তি, মোগল-ধাঁচের বৈশিষ্ট্য, মন্দির-প্রাঙ্গণ এবং ঢাকার কেন্দ্রীয় ঐতিহাসিক এলাকার সঙ্গে এর সংযোগ।',
      h1: 'ঢাকেশ্বরী মন্দির',
      lead:
        'ঢাকেশ্বরী মন্দির ঢাকার সবচেয়ে পরিচিত মন্দির। এটি ঢাকেশ্বরী রোডের উত্তর পাশে, ঢাকা বিশ্ববিদ্যালয়ের সলিমুল্লাহ হলের কাছাকাছি অবস্থিত। মন্দিরটির উৎপত্তি নিয়ে একাধিক ব্যাখ্যা থাকলেও এর স্থাপত্যে মোগল-ধাঁচের স্পষ্ট প্রভাব দেখা যায়।',
      facts: [
        { label: 'অবস্থান', value: 'ঢাকেশ্বরী রোড, ঢাকা' },
        { label: 'পরিচিতি', value: 'ঢাকার সবচেয়ে পরিচিত মন্দির' },
        { label: 'স্থাপত্য', value: 'মোগল-ধাঁচের প্রভাব' },
        { label: 'নিকটবর্তী', value: 'সলিমুল্লাহ হল, ঢাকা বিশ্ববিদ্যালয়' },
      ],
      sections: [
        {
          heading: 'ইতিহাস ও নাম',
          paragraphs: [
            'ঢাকেশ্বরী নামটি এসেছে “ঢাকা” ও “ঈশ্বরী” থেকে—অর্থাৎ ঢাকা শহরের অধিষ্ঠাত্রী দেবী। মন্দিরের উৎপত্তি নিয়ে লোককথা ও একাধিক ব্যাখ্যা প্রচলিত; কোনো একটি সূত্রে এর সঠিক নির্মাণকাল নিশ্চিতভাবে পাওয়া যায় না।',
            'স্থাপত্য ও গঠন-বৈশিষ্ট্য দেখে গবেষকদের অনেকেই মন্দিরটিকে মোগল আমলের নির্মাণ হিসেবে বিবেচনা করেন।',
          ],
        },
        {
          heading: 'স্থাপত্য ও প্রাঙ্গণ',
          paragraphs: [
            'মন্দির-প্রাঙ্গণে মূল মন্দির ছাড়াও নাটমন্দির, কয়েকটি ছোট শিখর-ধাঁচের মন্দির, একটি পুষ্করিণী ও প্রাচীন বটগাছ রয়েছে।',
            'মূল মন্দির তিন কক্ষবিশিষ্ট; এর ছাদ ধাপে ধাপে গড়া শিখর-ধাঁচের। প্রাঙ্গণে তিন-গম্বুজ ও তিন-খিলানযুক্ত প্রবেশপথ মোগল স্থাপত্যের প্রভাব দেখায়।',
          ],
          bullets: ['মূল মন্দির ও নাটমন্দির', 'পুষ্করিণী ও বটগাছ', 'ছোট শিখর-ধাঁচের মন্দির'],
        },
        {
          heading: 'ভ্রমণে যা মনে রাখবেন',
          paragraphs: [
            'এটি একটি সক্রিয় উপাসনাস্থল; তাই দর্শন ও ছবি তোলার সময় স্থানীয় রীতি ও অনুমতি মানা জরুরি।',
            'পূজা বা উৎসবের সময় ভিড় ও প্রবেশবিধি ভিন্ন হতে পারে—যাওয়ার আগে স্থানীয় নির্দেশনা যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['ঢাকেশ্বরী মন্দির কোথায়?', 'ঢাকেশ্বরী রোডের উত্তর পাশে, ঢাকা বিশ্ববিদ্যালয়ের সলিমুল্লাহ হলের কাছাকাছি।'],
        ['নামের অর্থ কী?', '“ঢাকেশ্বরী” অর্থ ঢাকা শহরের অধিষ্ঠাত্রী দেবী (“ঢাকা” + “ঈশ্বরী”)।'],
        ['এর স্থাপত্য কেমন?', 'তিন-গম্বুজ ছাদ ও তিন-খিলানযুক্ত প্রবেশপথসহ মোগল-ধাঁচের প্রভাব স্পষ্ট।'],
      ],
      sources: [
        { label: 'Banglapedia — Dhakeshwari Temple', href: 'https://en.banglapedia.org/index.php/Dhakeshwari_Temple' },
        { label: 'Banglapedia — Ramna Racecourse', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
      ],
    },
    en: {
      seoTitle: 'Dhakeshwari Temple — History, Architecture and Visiting Guide',
      description:
        'The history and architecture of Dhakeshwari Temple in Dhaka: the origin of its name, its Mughal-influenced features, its complex, and its place in the historic central area.',
      h1: 'Dhakeshwari Temple',
      lead:
        'Dhakeshwari Temple is the most prominent temple in Dhaka. It stands on the northern side of Dhakeshwari Road, close to Salimullah Hall of the University of Dhaka. Its origin has several explanations, but its architecture clearly shows Mughal influence.',
      facts: [
        { label: 'Location', value: 'Dhakeshwari Road, Dhaka' },
        { label: 'Repute', value: 'The most prominent temple in Dhaka' },
        { label: 'Architecture', value: 'Mughal-influenced features' },
        { label: 'Nearby', value: 'Salimullah Hall, University of Dhaka' },
      ],
      sections: [
        {
          heading: 'History and the name',
          paragraphs: [
            'The name comes from “Dhaka” and “Ishwari” — the presiding deity of the city of Dhaka. Popular legend and several explanations surround the temple’s origin; no single source fixes its construction date with certainty.',
            'Judging by its architectural and structural features, many scholars consider the temple a construction of the Mughal period.',
          ],
        },
        {
          heading: 'Architecture and complex',
          paragraphs: [
            'Besides the main temple, the complex contains a nat mandir, several smaller shikhara-style temples, a tank and a very old banyan tree.',
            'The main temple has three rooms and a tiered, shikhara-style roof; the three-domed roof and three arched entrances in the complex show Mughal influence.',
          ],
          bullets: ['The main temple and nat mandir', 'The tank and banyan tree', 'Smaller shikhara-style temples'],
        },
        {
          heading: 'What to keep in mind',
          paragraphs: [
            'This is an active place of worship, so following local customs and seeking permission for photography is important.',
            'During puja or festivals, crowds and entry rules differ; check local guidance before you go.',
          ],
        },
      ],
      faq: [
        ['Where is Dhakeshwari Temple?', 'On the northern side of Dhakeshwari Road, close to Salimullah Hall of the University of Dhaka.'],
        ['What does the name mean?', '“Dhakeshwari” means the presiding deity of the city of Dhaka (“Dhaka” + “Ishwari”).'],
        ['What is its architecture like?', 'A three-domed roof and three arched entrances show clear Mughal influence.'],
      ],
      sources: [
        { label: 'Banglapedia — Dhakeshwari Temple', href: 'https://en.banglapedia.org/index.php/Dhakeshwari_Temple' },
        { label: 'Banglapedia — Ramna Racecourse', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
      ],
    },
  },

  {
    path: 'nearby/kazi-nazrul-mausoleum',
    section: 'nearby',
    priority: 'P2',
    related: ['history/language-movement-1952', 'nearby/tsc', 'itineraries/half-day-language-heritage', 'history/ekushey-february'],
    bn: {
      seoTitle: 'কাজী নজরুল ইসলামের সমাধি — জাতীয় কবির স্মৃতিস্থান, ঢাকা বিশ্ববিদ্যালয়',
      description:
        'জাতীয় কবি কাজী নজরুল ইসলামের সমাধি: ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে অবস্থান, তাঁর জীবন-সংক্ষেপ এবং স্মৃতিস্থান হিসেবে এর তাৎপর্য।',
      h1: 'কাজী নজরুল ইসলামের সমাধি',
      lead:
        'জাতীয় কবি কাজী নজরুল ইসলামের সমাধি ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে, বিশ্ববিদ্যালয়ের কেন্দ্রীয় মসজিদের উত্তর পাশে অবস্থিত। ১৯৭৬ সালের ২৯ আগস্ট তাঁর মৃত্যুর পর তাঁকে রাষ্ট্রীয় সম্মানসহ এখানে সমাহিত করা হয়।',
      facts: [
        { label: 'অবস্থান', value: 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাস' },
        { label: 'মৃত্যু', value: '২৯ আগস্ট ১৯৭৬' },
        { label: 'সমাধিস্থান', value: 'মসজিদের উত্তর পাশে' },
        { label: 'পরিচিতি', value: 'বাংলাদেশের জাতীয় কবি' },
      ],
      sections: [
        {
          heading: 'জাতীয় কবি',
          paragraphs: [
            'কাজী নজরুল ইসলাম বাংলাদেশের জাতীয় কবি। ১৯৭৬ সালের জানুয়ারিতে বাংলাদেশ সরকার তাঁকে নাগরিকত্ব দেয় এবং একই বছর ২১ ফেব্রুয়ারি তাঁকে একুশে পদকে ভূষিত করা হয়।',
            '১৯৭৬ সালের ২৯ আগস্ট ঢাকায় তাঁর মৃত্যু হয়; এরপর তাঁকে ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে রাষ্ট্রীয় সম্মানসহ সমাহিত করা হয়।',
          ],
        },
        {
          heading: 'সমাধিস্থল ও পরিদর্শন',
          paragraphs: [
            'সমাধিটি বিশ্ববিদ্যালয়ের কেন্দ্রীয় মসজিদের উত্তর পাশে অবস্থিত এবং ক্যাম্পাসের অন্যান্য ঐতিহাসিক স্থানের সঙ্গে সহজে যুক্ত।',
            'এটি একটি স্মৃতিস্থান—তাই শান্ত থেকে শ্রদ্ধার সঙ্গে পরিদর্শন করা উচিত।',
          ],
        },
      ],
      faq: [
        ['নজরুলের সমাধি কোথায়?', 'ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে, বিশ্ববিদ্যালয়ের কেন্দ্রীয় মসজিদের উত্তর পাশে।'],
        ['তাঁর মৃত্যু কবে?', '১৯৭৬ সালের ২৯ আগস্ট।'],
        ['তাঁকে কেন জাতীয় কবি বলা হয়?', 'তিনি বাংলাদেশের জাতীয় কবি হিসেবে স্বীকৃত এবং তাঁর সাহিত্যকর্ম জাতীয় গুরুত্ব বহন করে।'],
      ],
      sources: [
        { label: 'Banglapedia — Islam, Kazi Nazrul', href: 'https://en.banglapedia.org/index.php/Islam,_Kazi_Nazrul' },
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
      ],
    },
    en: {
      seoTitle: 'Kazi Nazrul Islam’s Mausoleum — The National Poet’s Memorial in Dhaka',
      description:
        'The mausoleum of Kazi Nazrul Islam, national poet of Bangladesh: its location on the University of Dhaka campus, a brief life summary and its meaning as a memorial.',
      h1: 'Kazi Nazrul Islam’s Mausoleum',
      lead:
        'The mausoleum of Kazi Nazrul Islam, national poet of Bangladesh, is on the University of Dhaka campus, on the northern side of the university’s central mosque. After his death on 29 August 1976 he was buried here with state honour.',
      facts: [
        { label: 'Location', value: 'University of Dhaka campus' },
        { label: 'Died', value: '29 August 1976' },
        { label: 'Buried', value: 'North of Dhaka University mosque' },
        { label: 'Repute', value: 'National poet of Bangladesh' },
      ],
      sections: [
        {
          heading: 'The national poet',
          paragraphs: [
            'Kazi Nazrul Islam is the national poet of Bangladesh. In January 1976 the government of Bangladesh granted him citizenship, and on 21 February that year he was awarded the Ekushey Padak.',
            'He died in Dhaka on 29 August 1976; he was then buried on the University of Dhaka campus with state honour.',
          ],
        },
        {
          heading: 'The site and visiting',
          paragraphs: [
            'The grave lies on the northern side of the university’s central mosque and connects easily with the other historic sites on campus.',
            'It is a place of remembrance, so it is best visited quietly and with respect.',
          ],
        },
      ],
      faq: [
        ['Where is Nazrul’s mausoleum?', 'On the University of Dhaka campus, on the northern side of the university’s central mosque.'],
        ['When did he die?', 'On 29 August 1976.'],
        ['Why is he called the national poet?', 'He is recognised as the national poet of Bangladesh, and his work carries national significance.'],
      ],
      sources: [
        { label: 'Banglapedia — Islam, Kazi Nazrul', href: 'https://en.banglapedia.org/index.php/Islam,_Kazi_Nazrul' },
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
      ],
    },
  },

  {
    path: 'itineraries/half-day-language-heritage',
    section: 'itineraries',
    priority: 'P1',
    related: ['history/language-movement-1952', 'nearby/curzon-hall', 'nearby/doel-chattar', 'guides/short-visit'],
    bn: {
      seoTitle: 'অর্ধদিবসের ভাষা ও ঐতিহ্য ভ্রমণপথ — শহীদ মিনার থেকে কার্জন হল',
      description:
        'শহীদ মিনারকে কেন্দ্র করে অর্ধদিবসের ভাষা ও ঐতিহ্য ভ্রমণপথ: স্থাপত্য ও ইতিহাস দেখা, কার্জন হল, দোয়েল চত্বর এবং ঢাকা বিশ্ববিদ্যালয়ের সাংস্কৃতিক এলাকা।',
      h1: 'অর্ধদিবসের ভাষা ও ঐতিহ্য ভ্রমণপথ',
      lead:
        'এই পথটি শহীদ মিনারকে কেন্দ্র করে ভাষা আন্দোলনের ইতিহাস ও ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের স্থাপত্য একসঙ্গে দেখার জন্য সাজানো। ক্রমটি হলো: শহীদ মিনার → কার্জন হল → দোয়েল চত্বর → ক্যাম্পাসের সাংস্কৃতিক এলাকা।',
      facts: [
        { label: 'ভিত্তি', value: 'শহীদ মিনার' },
        { label: 'মূল থিম', value: 'ভাষা আন্দোলন ও স্থাপত্য' },
        { label: 'স্থান', value: 'ঢাকা বিশ্ববিদ্যালয় এলাকা' },
        { label: 'উপযোগী সময়', value: 'সকাল বা বিকেল' },
      ],
      sections: [
        {
          heading: '১. শহীদ মিনার',
          paragraphs: [
            'যাত্রা শুরু করুন স্মৃতিসৌধ থেকে। প্রথমে সিঁড়ির নিচ থেকে সম্পূর্ণ কাঠামো দেখুন, তারপর কাছাকাছি গিয়ে স্তর ও ফাঁক লক্ষ্য করুন। ইতিহাসের প্রেক্ষাপট জানা থাকলে দর্শনটি আরও অর্থবহ হয়।',
            'সময় কম থাকলে সংক্ষিপ্ত দর্শনের পরিকল্পনা সহায়ক।',
          ],
        },
        {
          heading: '২. কার্জন হল ও দোয়েল চত্বর',
          paragraphs: [
            'এরপর ক্যাম্পাসের ভেতরে গিয়ে কার্জন হল দেখুন—ইউরোপীয়-মোগল মিশ্র স্থাপত্য এবং ১৯৪৮ সালের ভাষা আন্দোলনের ঘটনার সঙ্গে যুক্ত এই ভবন।',
            'কার্জন হলের সামনে দোয়েল চত্বর; এখানে জাতীয় পাখি দোয়েলের ভাস্কর্য রয়েছে।',
          ],
        },
        {
          heading: '৩. ক্যাম্পাসের সাংস্কৃতিক এলাকা',
          paragraphs: [
            'শেষে ক্যাম্পাসের সাংস্কৃতিক কেন্দ্র—টিচার-স্টুডেন্ট সেন্টার (TSC) ও চারুকলা ইনস্টিটিউটের দিক—ঘুরে দেখতে পারেন।',
            'দিন বা ভিড় অনুযায়ী ক্রম বদলানো যায়; ক্যাম্পাসের চলাচল-নিয়ম ও সড়ক-পরিস্থিতি যাওয়ার আগে যাচাই করে নিন।',
          ],
        },
      ],
      faq: [
        ['এই পথে কী কী দেখা যাবে?', 'শহীদ মিনার, কার্জন হল, দোয়েল চত্বর এবং ক্যাম্পাসের সাংস্কৃতিক এলাকা।'],
        ['থিম কী?', 'ভাষা আন্দোলনের ইতিহাস ও ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসের স্থাপত্য।'],
        ['কত সময় লাগবে?', 'স্থানভেদে সময় বদলায়; মূল দর্শনের জন্য সংক্ষিপ্ত পরিকল্পনার গাইড দেখুন—সঠিক সময় ভিড় ও সড়ক-পরিস্থিতির ওপর নির্ভর করে।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
      ],
    },
    en: {
      seoTitle: 'Half-Day Language and Heritage Route — Shaheed Minar to Curzon Hall',
      description:
        'A half-day language and heritage route around the Shaheed Minar: the memorial’s history and architecture, Curzon Hall, Doel Chattar and the cultural quarter of Dhaka University.',
      h1: 'A half-day language and heritage route',
      lead:
        'This route is arranged around the Shaheed Minar to combine the history of the Language Movement with the architecture of the University of Dhaka campus. The sequence is: Shaheed Minar → Curzon Hall → Doel Chattar → the campus cultural quarter.',
      facts: [
        { label: 'Starting point', value: 'The Shaheed Minar' },
        { label: 'Theme', value: 'Language Movement and architecture' },
        { label: 'Area', value: 'University of Dhaka' },
        { label: 'Best light', value: 'Morning or late afternoon' },
      ],
      sections: [
        {
          heading: '1. The Shaheed Minar',
          paragraphs: [
            'Begin at the memorial. First take in the whole structure from below the steps, then move closer to observe the layering and the gaps. Knowing the historical background makes the visit more meaningful.',
            'If time is short, a shorter-view plan helps.',
          ],
        },
        {
          heading: '2. Curzon Hall and Doel Chattar',
          paragraphs: [
            'Then walk into the campus to see Curzon Hall — its hybrid European-Mughal architecture, and its link to the events of the 1948 Language Movement.',
            'In front of Curzon Hall is Doel Chattar, with its sculpture of the doel, the national bird.',
          ],
        },
        {
          heading: '3. The campus cultural quarter',
          paragraphs: [
            'Finally, look around the campus’s cultural centre — the Teacher-Student Centre (TSC) and the direction of the Institute of Fine Arts.',
            'The order can be changed to suit the day or the crowds; check campus access rules and road conditions before you set out.',
          ],
        },
      ],
      faq: [
        ['What does this route cover?', 'The Shaheed Minar, Curzon Hall, Doel Chattar and the campus cultural quarter.'],
        ['What is the theme?', 'The history of the Language Movement and the architecture of the University of Dhaka.'],
        ['How long does it take?', 'Timing varies by place; see the short-visit guide for a compact plan — actual time depends on crowds and road conditions.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Banglapedia — Curzon Hall', href: 'https://en.banglapedia.org/index.php/Curzon_Hall' },
        { label: 'University of Dhaka (official)', href: 'https://www.du.ac.bd/' },
      ],
    },
  },

  {
    path: 'itineraries/one-day-dhaka-history',
    section: 'itineraries',
    priority: 'P2',
    related: ['nearby/suhrawardy-udyan', 'nearby/bangladesh-national-museum', 'nearby/dhakeshwari-temple', 'history/language-movement-1952'],
    bn: {
      seoTitle: 'দিবসব্যাপী ঢাকা ইতিহাস ভ্রমণপথ — শহীদ মিনার থেকে ঢাকেশ্বরী মন্দির',
      description:
        'একদিনে ঢাকার কেন্দ্রীয় ইতিহাস ভ্রমণপথ: শহীদ মিনার, ভাষা আন্দোলনের স্মৃতি, বাংলা একাডেমি ও জাতীয় জাদুঘর, সোহরাওয়ার্দী উদ্যান এবং ঢাকেশ্বরী মন্দির।',
      h1: 'দিবসব্যাপী ঢাকা ইতিহাস ভ্রমণপথ',
      lead:
        'এই পথটি ঢাকার কেন্দ্রীয় ঐতিহাসিক এলাকাগুলোকে একদিনে সাজায়। ক্রমটি হলো: শহীদ মিনার → বাংলা একাডেমি ও জাতীয় জাদুঘর → সোহরাওয়ার্দী উদ্যান → (জাতীয় নেতাদের মাজার) → ঢাকেশ্বরী মন্দির।',
      facts: [
        { label: 'ভিত্তি', value: 'শহীদ মিনার' },
        { label: 'মূল থিম', value: 'ভাষা আন্দোলন থেকে মুক্তিযুদ্ধ' },
        { label: 'প্রধান স্থান', value: 'জাদুঘর, সোহরাওয়ার্দী উদ্যান, মন্দির' },
        { label: 'এলাকা', value: 'শাহবাগ ও পুরান ঢাকার প্রান্ত' },
      ],
      sections: [
        {
          heading: '১. সকাল: শহীদ মিনার ও ভাষা-স্মৃতি',
          paragraphs: [
            'দিন শুরু করুন শহীদ মিনার দিয়ে। স্মৃতিসৌধের ইতিহাস ও স্থাপত্য দেখা শেষে আশপাশের ভাষা-স্মৃতি-সংক্রান্ত স্থানের দিকে এগোনো যায়।',
          ],
        },
        {
          heading: '২. দুপুর: বাংলা একাডেমি ও জাতীয় জাদুঘর',
          paragraphs: [
            'এরপর শাহবাগের দিকের বাংলা একাডেমি ও বাংলাদেশ জাতীয় জাদুঘর দেখুন। জাদুঘরে প্রত্নতত্ত্ব, শিল্পকলা ও ইতিহাস-সংক্রান্ত বিস্তৃত সংগ্রহ রয়েছে।',
            'খোলার সময় ও ছুটি আগে যাচাই করে নিলে দিনটি সুষ্ঠুভাবে সাজানো সহজ হয়।',
          ],
        },
        {
          heading: '৩. বিকেল: সোহরাওয়ার্দী উদ্যান',
          paragraphs: [
            'বিকেলে যান সোহরাওয়ার্দী উদ্যানে—৭ মার্চের ঐতিহাসিক ভাষণ ও ১৯৭১ সালের আত্মসমর্পণের সাক্ষী এই প্রাঙ্গণে শিখা চিরন্তন রয়েছে।',
            'দক্ষিণ দিকে তিন জাতীয় নেতার মাজারও এই এলাকার অংশ।',
          ],
        },
        {
          heading: '৪. শেষে: ঢাকেশ্বরী মন্দির',
          paragraphs: [
            'সময় থাকলে শেষে ঢাকেশ্বরী মন্দির দেখে দিনটি শেষ করুন—ঢাকার সবচেয়ে পরিচিত মন্দির, যার স্থাপত্যে মোগল প্রভাব দেখা যায়।',
            'একদিনে অনেক স্থান ঘোরায় যাতায়াত, ভিড় ও আবহাওয়া বিবেচনায় রেখে পরিকল্পনা করুন।',
          ],
        },
      ],
      faq: [
        ['একদিনে কী কী দেখা যাবে?', 'শহীদ মিনার, বাংলা একাডেমি ও জাতীয় জাদুঘর, সোহরাওয়ার্দী উদ্যান এবং ঢাকেশ্বরী মন্দির।'],
        ['থিম কী?', 'ভাষা আন্দোলন থেকে শুরু করে মুক্তিযুদ্ধ ও পুরান ঢাকার কেন্দ্রীয় ইতিহাস।'],
        ['আগে কী যাচাই করব?', 'জাদুঘর ও অন্যান্য স্থানের খোলার সময়, ছুটি এবং চলমান সড়ক-পরিস্থিতি।'],
      ],
      sources: [
        { label: 'Banglapedia — Bangladesh National Museum', href: 'https://en.banglapedia.org/index.php/Bangladesh_National_Museum' },
        { label: 'Banglapedia — Seventh March Address', href: 'https://en.banglapedia.org/index.php/Seventh_March_Address' },
        { label: 'Banglapedia — Dhakeshwari Temple', href: 'https://en.banglapedia.org/index.php/Dhakeshwari_Temple' },
      ],
    },
    en: {
      seoTitle: 'A One-Day Dhaka History Route — Shaheed Minar to Dhakeshwari Temple',
      description:
        'A one-day central Dhaka history route: the Shaheed Minar and Language Movement memory, Bangla Academy and the National Museum, Suhrawardy Udyan, and Dhakeshwari Temple.',
      h1: 'A one-day Dhaka history route',
      lead:
        'This route brings central Dhaka’s historic area together in a single day. The sequence is: Shaheed Minar → Bangla Academy and the National Museum → Suhrawardy Udyan → (mausoleums of the national leaders) → Dhakeshwari Temple.',
      facts: [
        { label: 'Starting point', value: 'The Shaheed Minar' },
        { label: 'Theme', value: 'From the Language Movement to the Liberation War' },
        { label: 'Key sites', value: 'Museum, Suhrawardy Udyan, temple' },
        { label: 'Area', value: 'Shahbag and the edge of Old Dhaka' },
      ],
      sections: [
        {
          heading: '1. Morning: the Shaheed Minar and language memory',
          paragraphs: [
            'Start the day at the Shaheed Minar. After seeing the memorial’s history and architecture, you can move on to the language-heritage sites nearby.',
          ],
        },
        {
          heading: '2. Midday: Bangla Academy and the National Museum',
          paragraphs: [
            'Next, see Bangla Academy and the Bangladesh National Museum towards Shahbag. The museum holds extensive collections of archaeology, art and history.',
            'Checking opening hours and closures in advance makes the day easier to plan.',
          ],
        },
        {
          heading: '3. Afternoon: Suhrawardy Udyan',
          paragraphs: [
            'In the afternoon go to Suhrawardy Udyan — the ground that witnessed the historic 7 March address and the 1971 surrender, and where the Eternal Flame stands.',
            'The mausoleums of three national leaders to its south are part of the same area.',
          ],
        },
        {
          heading: '4. Finally: Dhakeshwari Temple',
          paragraphs: [
            'If time allows, finish at Dhakeshwari Temple — the most prominent temple in Dhaka, with visible Mughal influence in its architecture.',
            'When covering many sites in a day, factor in travel, crowds and weather.',
          ],
        },
      ],
      faq: [
        ['What can be seen in one day?', 'The Shaheed Minar, Bangla Academy and the National Museum, Suhrawardy Udyan, and Dhakeshwari Temple.'],
        ['What is the theme?', 'Central Dhaka’s history, from the Language Movement through the Liberation War.'],
        ['What should be checked in advance?', 'Opening hours and closures of the museum and other sites, and current road conditions.'],
      ],
      sources: [
        { label: 'Banglapedia — Bangladesh National Museum', href: 'https://en.banglapedia.org/index.php/Bangladesh_National_Museum' },
        { label: 'Banglapedia — Seventh March Address', href: 'https://en.banglapedia.org/index.php/Seventh_March_Address' },
        { label: 'Banglapedia — Dhakeshwari Temple', href: 'https://en.banglapedia.org/index.php/Dhakeshwari_Temple' },
      ],
    },
  },

  {
    path: 'itineraries/family-cultural-route',
    section: 'itineraries',
    priority: 'P2',
    related: ['nearby/bangladesh-national-museum', 'nearby/suhrawardy-udyan', 'guides/commemoration-etiquette', 'nearby/dhakeshwari-temple'],
    bn: {
      seoTitle: 'পরিবারের জন্য সাংস্কৃতিক অর্ধদিবস ভ্রমণপথ — শহীদ মিনার, জাদুঘর ও উদ্যান',
      description:
        'শিশু ও পরিবারের জন্য অর্ধদিবসের সাংস্কৃতিক ভ্রমণপথ: শহীদ মিনার, বাংলাদেশ জাতীয় জাদুঘর, সোহরাওয়ার্দী উদ্যানের খোলা প্রাঙ্গণ এবং ঢাকেশ্বরী মন্দির।',
      h1: 'পরিবারের জন্য সাংস্কৃতিক অর্ধদিবস ভ্রমণপথ',
      lead:
        'এই পথটি শিশু ও পরিবারের কথা ভেবে সাজানো—যেখানে শিক্ষা ও বিনোদন একসঙ্গে থাকে। ক্রমটি হলো: শহীদ মিনার → বাংলাদেশ জাতীয় জাদুঘর → সোহরাওয়ার্দী উদ্যান → ঢাকেশ্বরী মন্দির।',
      facts: [
        { label: 'উপযোগী', value: 'পরিবার ও শিশু' },
        { label: 'ভিত্তি', value: 'শহীদ মিনার' },
        { label: 'প্রধান আকর্ষণ', value: 'জাদুঘর ও খোলা উদ্যান' },
        { label: 'ছন্দ', value: 'শিক্ষা + বিশ্রাম' },
      ],
      sections: [
        {
          heading: '১. শহীদ মিনার: প্রথম পাঠ',
          paragraphs: [
            'শিশুদের জন্য যাত্রা শুরু হোক শহীদ মিনার থেকে। যাওয়ার আগে সংক্ষেপে ভাষা আন্দোলনের কথা বলে দিন, যাতে স্থানটি বুঝতে সহজ হয়।',
            'স্মৃতিস্থানে শান্ত থাকা ও শ্রদ্ধা দেখানোর কথা আগেই বলে নিন।',
          ],
        },
        {
          heading: '২. জাতীয় জাদুঘর: দেখা ও শেখা',
          paragraphs: [
            'এরপর বাংলাদেশ জাতীয় জাদুঘর দেখুন, যেখানে প্রাচীন মুদ্রা, ভাস্কর্য, বস্ত্র ও ইতিহাস-সংক্রান্ত অনেক কিছু রয়েছে—শিশুদের জন্য এটি সহজে বোঝার উপযোগী।',
            'খোলার সময় ও ছুটি আগে যাচাই করে নিন।',
          ],
        },
        {
          heading: '৩. সোহরাওয়ার্দী উদ্যান: বিশ্রাম ও খোলা প্রাঙ্গণ',
          paragraphs: [
            'এরপর সোহরাওয়ার্দী উদ্যানে কিছু সময় কাটান—সবুজ ও পথচলার জায়গা এবং একাংশে শিশুদের বিনোদনের ব্যবস্থা রয়েছে।',
            'এখানেই ৭ মার্চের ঐতিহাসিক ভাষণ ও ১৯৭১ সালের আত্মসমর্পণের স্মৃতি জড়িয়ে আছে।',
          ],
        },
        {
          heading: '৪. ঢাকেশ্বরী মন্দির: শেষ পর্ব',
          paragraphs: [
            'সময় থাকলে ঢাকেশ্বরী মন্দির দেখে ভ্রমণ শেষ করুন। এটি সক্রিয় উপাসনাস্থল—তাই স্থানীয় রীতির প্রতি সম্মান রাখুন এবং ছবি তোলার আগে অনুমতি নিন।',
            'পরিবারের সঙ্গে চলার সময় ভিড়, আবহাওয়া ও যাতায়াত বিবেচনায় রেখে পরিকল্পনা করুন।',
          ],
        },
      ],
      faq: [
        ['পরিবারের জন্য এই পথ উপযোগী কেন?', 'কারণ এতে জাদুঘরের শিক্ষা ও উদ্যানের খোলা প্রাঙ্গণ একসঙ্গে আছে, যা শিশুদের জন্য আরামদায়ক।'],
        ['শিশুদের আগে কী বলব?', 'ভাষা আন্দোলনের সংক্ষিপ্ত ইতিহাস এবং স্মৃতিস্থানে শ্রদ্ধা ও শান্ত থাকার কথা।'],
        ['কী যাচাই করব?', 'জাদুঘরের খোলার সময় ও ছুটি, এবং চলমান সড়ক ও ভিড়ের অবস্থা।'],
      ],
      sources: [
        { label: 'Bangladesh National Museum (official)', href: 'https://bangladeshmuseum.gov.bd/' },
        { label: 'Banglapedia — Ramna Racecourse (Suhrawardy Udyan)', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'A Family Cultural Half-Day Route — Shaheed Minar, Museum and Park',
      description:
        'A family-friendly cultural half-day route in central Dhaka: the Shaheed Minar, Bangladesh National Museum, the open grounds of Suhrawardy Udyan, and Dhakeshwari Temple.',
      h1: 'A family cultural half-day route',
      lead:
        'This route is designed with children and families in mind, combining learning with leisure. The sequence is: Shaheed Minar → Bangladesh National Museum → Suhrawardy Udyan → Dhakeshwari Temple.',
      facts: [
        { label: 'Good for', value: 'Families and children' },
        { label: 'Starting point', value: 'The Shaheed Minar' },
        { label: 'Highlights', value: 'The museum and open park' },
        { label: 'Rhythm', value: 'Learning plus rest' },
      ],
      sections: [
        {
          heading: '1. Shaheed Minar: the first lesson',
          paragraphs: [
            'For children, begin at the Shaheed Minar. Explain the Language Movement briefly beforehand so the place is easier to understand.',
            'Tell them in advance to stay calm and show respect at the memorial.',
          ],
        },
        {
          heading: '2. National Museum: seeing and learning',
          paragraphs: [
            'Next, visit the Bangladesh National Museum, which holds ancient coins, sculpture, textiles and much historical material — easy for children to engage with.',
            'Check opening hours and closures in advance.',
          ],
        },
        {
          heading: '3. Suhrawardy Udyan: rest and open space',
          paragraphs: [
            'Then spend some time in Suhrawardy Udyan — a green, walkable space with a children’s recreation area in one part.',
            'This is also where the historic 7 March address and the 1971 surrender are remembered.',
          ],
        },
        {
          heading: '4. Dhakeshwari Temple: the last stop',
          paragraphs: [
            'If time allows, finish at Dhakeshwari Temple. It is an active place of worship, so respect local customs and seek permission before taking photographs.',
            'When moving with a family, plan around crowds, weather and transport.',
          ],
        },
      ],
      faq: [
        ['Why is this route good for families?', 'Because it combines the museum’s learning with the open grounds of the park, which is comfortable for children.'],
        ['What should children be told first?', 'A brief history of the Language Movement, and to stay calm and respectful at the memorial.'],
        ['What should be checked?', 'The museum’s opening hours and closures, and current road and crowd conditions.'],
      ],
      sources: [
        { label: 'Bangladesh National Museum (official)', href: 'https://bangladeshmuseum.gov.bd/' },
        { label: 'Banglapedia — Ramna Racecourse (Suhrawardy Udyan)', href: 'https://en.banglapedia.org/index.php/Ramna_Racecourse' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },
];
