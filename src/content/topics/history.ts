import type { Topic } from './types';

/**
 * ইতিহাস, ভাষা আন্দোলন ও স্মৃতির তাত্পর্য — সবচেয়ে বড় কনটেন্ট ক্লাস্টার।
 * প্রতিটি পাতার একটিই নিজস্ব প্রশ্ন, নিজস্ব শিরোনাম ও নিজস্ব সূত্র আছে।
 */
export const historyTopics: Topic[] = [
  {
    path: 'history/language-movement-1952',
    section: 'history',
    priority: 'P1',
    related: ['history/first-shaheed-minar', 'history/dhaka-medical-college-1952', 'history/ekushey-february', 'history/language-martyrs'],
    bn: {
      seoTitle: '১৯৫২ সালের ভাষা আন্দোলন — পূর্ণ সময়রেখা ও প্রধান ঘটনা',
      description:
        '১৯৪৭ থেকে ১৯৫২ পর্যন্ত বাংলা ভাষা আন্দোলনের ধারাবাহিক সময়রেখা: রাষ্ট্রভাষার দাবি, ২১ ও ২২ ফেব্রুয়ারির গুলি, শহীদদের স্মৃতি এবং শহীদ মিনার নির্মাণের সিদ্ধান্ত।',
      h1: '১৯৫২ সালের ভাষা আন্দোলনের সময়রেখা',
      lead:
        '১৯৫২ সালের ভাষা আন্দোলন ছিল বাংলাকে পাকিস্তানের অন্যতম রাষ্ট্রভাষা করার দাবিতে গড়ে ওঠা সাংস্কৃতিক ও রাজনৈতিক সংগ্রাম। ২১ ও ২২ ফেব্রুয়ারি আন্দোলনকারীদের ওপর গুলিবর্ষণে প্রাণহানির পর ঢাকা মেডিকেল কলেজের কাছেই প্রথম স্মৃতিস্তম্ভ গড়া হয়, যা আজকের কেন্দ্রীয় শহীদ মিনারের ভিত্তি।',
      facts: [
        { label: 'সময়কাল', value: '১৯৪৭–১৯৫২ (স্বীকৃতি ১৯৫৬)' },
        { label: 'মূল দাবি', value: 'বাংলাকে রাষ্ট্রভাষার স্বীকৃতি' },
        { label: 'নির্ণায়ক দিন', value: '২১–২২ ফেব্রুয়ারি ১৯৫২' },
        { label: 'স্মৃতির স্থান', value: 'কেন্দ্রীয় শহীদ মিনার, ঢাকা' },
      ],
      sections: [
        {
          heading: 'পটভূমি: স্বাধীনতার পরেই যে প্রশ্ন ওঠে',
          paragraphs: [
            '১৯৪৭ সালে দেশভাগের পর পাকিস্তানের দুই অংশের সংখ্যাগরিষ্ঠ মানুষের ভাষা ছিল বাংলা, কিন্তু রাষ্ট্রীয় কাজে উর্দুর প্রাধান্য বাড়তে থাকে। ১৯৪৮ সালেই ঢাকায় ছাত্র ও সাংস্কৃতিক সংগঠনগুলো বাংলাকে রাষ্ট্রভাষার মর্যাদা দেওয়ার দাবি তুলতে শুরু করে।',
            '১৯৪৮ সালের ১১ মার্চ ঢাকায় সাধারণ ধর্মঘট হয় এবং ২১ মার্চ ঢাকায় আসা মুহাম্মদ আলী জিন্নাহ ঘোষণা করেন যে পাকিস্তানের রাষ্ট্রভাষা হবে "উর্দু এবং কেবল উর্দু"। এই ঘোষণার পর ভাষার প্রশ্নটি আর কেবল দাবি নয়, পরিচয়ের প্রশ্নে পরিণত হয়।',
          ],
        },
        {
          heading: '১৯৫২: ২১ ও ২২ ফেব্রুয়ারি',
          paragraphs: [
            '১৯৫২ সালের জানুয়ারিতে করাচিতে পাকিস্তানের প্রধানমন্ত্রী খাজা নাজিমুদ্দিন পুনরায় জানান যে রাষ্ট্রভাষা হবে উর্দু। প্রতিবাদে ঢাকায় ছাত্ররা ২১ ফেব্রুয়ারি সভা ও মিছিলের ডাক দেয়; প্রশাসন ঢাকায় ১৪৪ ধারা জারি করে।',
            '২১ ফেব্রুয়ারি ছাত্ররা ১৪৪ ধারা ভেঙে মিছিল বের করে। ঢাকা মেডিকেল কলেজ এলাকায় পুলিশ গুলি চালায় এবং পরদিন, ২২ ফেব্রুয়ারি, নিহতদের স্মরণে বের হওয়া শোভাযাত্রার ওপরও গুলিবর্ষণ হয়। দুই দিনে একাধিক মানুষ শহীদ হন।',
          ],
          bullets: [
            '২১ ফেব্রুয়ারি: ছাত্র মিছিলে প্রথম গুলিবর্ষণ',
            '২২ ফেব্রুয়ারি: শোকার্ত শোভাযাত্রায় দ্বিতীয় গুলিবর্ষণ',
            'প্রতিবাদ ছড়িয়ে পড়ে ঢাকার বাইরেও',
          ],
        },
        {
          heading: 'গুলির পর: স্মৃতিস্তম্ভ থেকে রাষ্ট্রভাষার স্বীকৃতি',
          paragraphs: [
            '২৩ ফেব্রুয়ারি ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা রাতের ভেতরেই একটি অস্থায়ী স্মৃতিস্তম্ভ তৈরি করেন। অল্প কয়েক দিনের মধ্যেই পুলিশ সেটি ভেঙে দেয়; ভাঙার সঠিক তারিখ নিয়ে সূত্রে ভিন্নতা আছে।',
            'দাবি থেকে যায় এবং আন্দোলন বিস্তৃত হয়। ১৯৫৬ সালের পাকিস্তানের সংবিধানে বাংলা রাষ্ট্রভাষার স্বীকৃতি পায়, আর ১৯৫২-এর স্মৃতি থেকেই জন্ম নেয় কেন্দ্রীয় শহীদ মিনার ও একুশে ফেব্রুয়ারির স্মরণ।',
          ],
        },
      ],
      faq: [
        ['ভাষা আন্দোলন শুরু হয় কবে?', 'বাংলাকে রাষ্ট্রভাষা করার দাবি ১৯৪৭ সালে দেশভাগের পরই উঠতে শুরু করে এবং ১৯৪৮ সালে তা প্রতিষ্ঠানভিত্তিক আন্দোলনের রূপ নেয়; চূড়ান্ত ও রক্তাক্ত পর্ব ঘটে ১৯৫২ সালের ফেব্রুয়ারিতে।'],
        ['২১ ও ২২ ফেব্রুয়ারির মধ্যে পার্থক্য কী?', '২১ ফেব্রুয়ারি ছাত্র মিছিলের ওপর গুলিবর্ষণ হয়; ২২ ফেব্রুয়ারি নিহতদের স্মরণে বের হওয়া শোভাযাত্রার ওপর আবার গুলিবর্ষণ হয়। দুই দিনেই প্রাণহানি ঘটে।'],
        ['বাংলা কবে রাষ্ট্রভাষার স্বীকৃতি পায়?', '১৯৫৬ সালের পাকিস্তানের সংবিধানে বাংলাকে অন্যতম রাষ্ট্রভাষা হিসেবে স্বীকৃতি দেওয়া হয়; তবে ভাষা সংশ্লিষ্ট ঐতিহাসিক নথিতে ১৯৪৮ সালের দিকের স্বীকৃতির আশ্বাসও উল্লেখ করা হয়।'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'The 1952 Language Movement — Full Timeline and Key Events',
      description:
        'A dated timeline of the Bengali Language Movement from 1947 to 1952: the demand for a state language, the shootings of 21 and 22 February, the first memorial, and how the Shaheed Minar came to be built.',
      h1: 'Timeline of the 1952 Language Movement',
      lead:
        'The 1952 Language Movement was the cultural and political struggle to make Bengali a state language of Pakistan. After police fired on demonstrators on 21 and 22 February, students built the first memorial beside Dhaka Medical College — the origin of today’s Central Shaheed Minar.',
      facts: [
        { label: 'Period', value: '1947–1952 (recognised 1956)' },
        { label: 'Core demand', value: 'Bengali as a state language' },
        { label: 'Decisive days', value: '21–22 February 1952' },
        { label: 'Place of memory', value: 'Central Shaheed Minar, Dhaka' },
      ],
      sections: [
        {
          heading: 'Background: the question raised right after 1947',
          paragraphs: [
            'After the 1947 partition, Bengali was the language of the majority of Pakistan’s population, yet Urdu gained precedence in state business. As early as 1948, student and cultural organisations in Dhaka began demanding state-language status for Bengali.',
            'A general strike was observed in Dhaka on 11 March 1948, and on 21 March Muhammad Ali Jinnah declared in Dhaka that Pakistan’s state language would be “Urdu, and only Urdu”. After that declaration the language question became a question of identity, not only of policy.',
          ],
        },
        {
          heading: '1952: 21 and 22 February',
          paragraphs: [
            'In January 1952 Prime Minister Khawaja Nazimuddin again stated in Karachi that Urdu would be the state language. Students in Dhaka called a meeting and procession for 21 February, and the administration imposed Section 144 in the city.',
            'On 21 February students broke Section 144 and marched. Police opened fire near Dhaka Medical College, and on 22 February they fired again on a mourning procession. Several people died across the two days.',
          ],
          bullets: [
            '21 February: first shooting on a student procession',
            '22 February: second shooting on a funeral procession',
            'Protests spread beyond Dhaka',
          ],
        },
        {
          heading: 'After the shootings: from memorial to recognition',
          paragraphs: [
            'On 23 February, students of Dhaka Medical College built a temporary memorial overnight. Police demolished it within days; sources differ on the exact date of demolition.',
            'The demand survived, and the movement widened. Bengali was recognised as a state language in Pakistan’s 1956 constitution, and the memory of 1952 produced both the Central Shaheed Minar and the annual observance of Ekushey February.',
          ],
        },
      ],
      faq: [
        ['When did the Language Movement begin?', 'Demands for Bengali as a state language emerged right after the 1947 partition and became an organised movement in 1948; its decisive and bloodiest phase came in February 1952.'],
        ['What is the difference between 21 and 22 February 1952?', 'On 21 February police fired on a student procession. On 22 February they fired again on a procession mourning the dead. Both days saw loss of life.'],
        ['When was Bengali recognised as a state language?', 'Bengali was recognised as a state language in Pakistan’s 1956 constitution, although the movement also cites earlier assurances around 1948.'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/first-shaheed-minar',
    section: 'history',
    priority: 'P1',
    related: ['history/language-movement-1952', 'history/dhaka-medical-college-1952', 'history/1971-rebuilding', 'history/architecture-symbolism'],
    bn: {
      seoTitle: 'প্রথম শহীদ মিনার — ১৯৫২ সালের অস্থায়ী স্মৃতিস্তম্ভের ইতিহাস',
      description:
        '১৯৫২ সালের ২৩ ফেব্রুয়ারি ঢাকা মেডিকেল কলেজের শিক্ষার্থীদের হাতে গড়া প্রথম অস্থায়ী শহীদ মিনারের ইতিহাস, কারা তৈরি করেছিলেন এবং কেন ও কবে তা ভেঙে ফেলা হয়েছিল।',
      h1: 'প্রথম শহীদ মিনার: ১৯৫২-এর অস্থায়ী স্মৃতিস্তম্ভ',
      lead:
        'প্রথম শহীদ মিনার স্থায়ী স্মৃতিসৌধ নয়—এটি ছিল ১৯৫২ সালের ২৩ ফেব্রুয়ারি ঢাকা মেডিকেল কলেজের শিক্ষার্থীদের রাতভর তৈরি একটি অস্থায়ী স্মৃতিস্তম্ভ। কয়েক দিনের মধ্যেই পুলিশ এটি ভেঙে ফেলে।',
      facts: [
        { label: 'নির্মাণ', value: '২৩ ফেব্রুয়ারি ১৯৫২' },
        { label: 'নির্মাতা', value: 'ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা' },
        { label: 'স্থান', value: 'ঢাকা মেডিকেল কলেজ প্রাঙ্গণ এলাকা' },
        { label: 'ভাঙা', value: 'কয়েক দিনের মধ্যে (সূত্রে তারিখ ভিন্ন)' },
      ],
      sections: [
        {
          heading: 'কে তৈরি করেছিল',
          paragraphs: [
            '২১ ও ২২ ফেব্রুয়ারির গুলিবর্ষণের পর ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা ও অন্যান্য সক্রিয় কর্মীরা মিলে ২৩ ফেব্রুয়ারি রাতভর একটি অস্থায়ী কাঠামো তৈরি করেন। হাতে লেখা সাইনবোর্ডে লেখা ছিল স্মৃতিস্তম্ভের কথা, আর পাশে রাখা হয় ফুল।',
            'এই কাজটি ছিল দ্রুত, স্বতঃস্ফূর্ত ও সাংস্কৃতিক প্রতিবাদের একটি রূপ—কোনো সরকারি নির্দেশ বা বরাদ্দ ছাড়াই তা গড়ে ওঠে।',
          ],
        },
        {
          heading: 'ভাঙা ও তারিখের ভিন্নতা',
          paragraphs: [
            'অস্থায়ী স্মৃতিস্তম্ভটি বেশিদিন টেকেনি—পুলিশ কয়েক দিনের মধ্যে তা ভেঙে দেয় এবং এলাকা পরিষ্কার করে দেওয়া হয়।',
            'ভাঙার তারিখ নিয়ে সূত্রে ভিন্নতা আছে: বাংলাদেশ ট্যুরিজম বোর্ডের বর্ণনায় ২৪ ফেব্রুয়ারি ১৯৫২, আর বাংলাপিডিয়ার ভাষা আন্দোলন-সংক্রান্ত বর্ণনায় ২৬ ফেব্রুয়ারি ১৯৫২ উল্লেখ পাওয়া যায়। এই গাইড কোনোটিকে এককভাবে চূড়ান্ত সত্য বলে চাপিয়ে দেয় না।',
          ],
        },
        {
          heading: 'অস্থায়ী থেকে স্থায়ী স্মৃতিসৌধে',
          paragraphs: [
            'ভেঙে ফেলার পরও স্মৃতিস্তম্ভের দাবি থামেনি; বরং বারবার তা গড়ে তোলার চেষ্টা জাতীয় আন্দোলনের অংশ হয়ে ওঠে। ১৯৫৭ সালে স্থায়ী স্মৃতিসৌধের কাজ শুরু হয় এবং ১৯৬৩ সালে তা সম্পন্ন হয়।',
            'আজ দাঁড়িয়ে থাকা কেন্দ্রীয় শহীদ মিনার সেই প্রথম অস্থায়ী কাঠামোর ধারাবাহিক উত্তরসূরি।',
          ],
        },
      ],
      faq: [
        ['প্রথম শহীদ মিনার কবে তৈরি হয়?', '১৯৫২ সালের ২৩ ফেব্রুয়ারি, ২১ ও ২২ ফেব্রুয়ারির গুলিবর্ষণের পরপরই ঢাকা মেডিকেল কলেজের শিক্ষার্থীরা এটি তৈরি করেন।'],
        ['প্রথম স্মৃতিস্তম্ভ কবে ভাঙা হয়?', 'কয়েক দিনের মধ্যেই পুলিশ এটি ভেঙে ফেলে। সুনির্দিষ্ট তারিখে সূত্রে ভিন্নতা আছে—কোথাও ২৪ ফেব্রুয়ারি, কোথাও ২৬ ফেব্রুয়ারি ১৯৫২ বলা হয়।'],
        ['এটি কি আজও আছে?', 'না। অস্থায়ী কাঠামোটি টেকেনি। ১৯৫৭–১৯৬৩ সালের স্থায়ী নকশা এবং ১৯৮৩ সালের সম্প্রসারণই আজকের কেন্দ্রীয় শহীদ মিনার।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'The First Shaheed Minar — The 1952 Temporary Monument',
      description:
        'The story of the first, temporary Shaheed Minar built overnight on 23 February 1952 beside Dhaka Medical College: who built it, why it was demolished, and why sources disagree on the demolition date.',
      h1: 'The First Shaheed Minar: the 1952 temporary monument',
      lead:
        'The first Shaheed Minar was not the permanent monument standing today. It was a temporary structure built overnight on 23 February 1952 by students of Dhaka Medical College, and police demolished it within days.',
      facts: [
        { label: 'Built', value: '23 February 1952' },
        { label: 'Built by', value: 'Students of Dhaka Medical College' },
        { label: 'Location', value: 'Dhaka Medical College grounds area' },
        { label: 'Demolished', value: 'Within days (date disputed)' },
      ],
      sections: [
        {
          heading: 'Who built it',
          paragraphs: [
            'After the shootings of 21 and 22 February, students of Dhaka Medical College and other activists built a temporary structure overnight on 23 February. It carried a hand-written sign referring to a memorial, with flowers placed beside it.',
            'The act was quick, spontaneous and cultural in form: it was raised without any official order or budget.',
          ],
        },
        {
          heading: 'Demolition and the disputed date',
          paragraphs: [
            'The temporary monument did not last. Police demolished it within days and cleared the area.',
            'Sources give different dates. The Bangladesh Tourism Board describes it as demolished on 24 February 1952, while Banglapedia’s account of the Language Movement gives 26 February 1952. This guide does not present either as a single settled fact.',
          ],
        },
        {
          heading: 'From temporary structure to permanent monument',
          paragraphs: [
            'The demand for a memorial did not disappear after the demolition; rebuilding it became part of a national movement. Work on the permanent monument began in 1957 and was completed in 1963.',
            'The Central Shaheed Minar standing today is the successor to that first, temporary structure.',
          ],
        },
      ],
      faq: [
        ['When was the first Shaheed Minar built?', 'On 23 February 1952, immediately after the shootings of 21 and 22 February, students of Dhaka Medical College built it.'],
        ['When was the first monument demolished?', 'Police demolished it within days. The exact date is disputed: some accounts give 24 February 1952, others 26 February 1952.'],
        ['Does it still exist?', 'No. The temporary structure did not survive. Today’s monument comes from the permanent design of 1957–1963 and the 1983 expansion.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/language-martyrs',
    section: 'history',
    priority: 'P2',
    related: ['history/language-movement-1952', 'history/ekushey-february', 'history/dhaka-medical-college-1952'],
    bn: {
      seoTitle: 'ভাষা শহীদ কারা — ১৯৫২ সালের শহীদদের পরিচিতি',
      description:
        'কেন্দ্রীয় শহীদ মিনার কাদের স্মরণে গড়া—ভাষা আন্দোলনের শহীদদের নাম, ২১ ও ২২ ফেব্রুয়ারির ঘটনাধারা এবং সূত্রে নাম ও বিবরণের ভিন্নতা সম্পর্কে সতর্ক ব্যাখ্যা।',
      h1: 'ভাষা শহীদ কারা',
      lead:
        'কেন্দ্রীয় শহীদ মিনার ১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারি ভাষার দাবিতে প্রাণ দেওয়া মানুষদের স্মরণে গড়া। সবচেয়ে বেশি উল্লেখিত নামগুলোর মধ্যে আছেন সালাম, বরকত, রফিক, জব্বার, শফিউর, আওয়াল ও অহিউল্লাহ।',
      facts: [
        { label: 'ঘটনার দিন', value: '২১ ও ২২ ফেব্রুয়ারি ১৯৫২' },
        { label: 'স্থান', value: 'ঢাকা মেডিকেল কলেজ এলাকা' },
        { label: 'স্মরণ', value: '২১ ফেব্রুয়ারি, প্রভাতফেরি ও পুষ্পস্তবক' },
        { label: 'নামের তালিকা', value: 'সূত্রে সামান্য ভিন্ন' },
      ],
      sections: [
        {
          heading: 'সাধারণভাবে স্মরণ করা নামগুলো',
          paragraphs: [
            'প্রচলিত ও সরকারি স্মরণে সবচেয়ে বেশি উচ্চারিত নামগুলো হলো—আবদুস সালাম, রফিকউদ্দিন আহমদ, বরকত উল্লাহ, আবদুল জব্বার, শফিউর রহমান, আবদুল আওয়াল ও অহিউল্লাহ। এঁদের অনেকেই ছিলেন ছাত্র, কেউ ছিলেন চাকরিজীবী, আর অহিউল্লাহ ছিলেন একজন শিশু।',
            '২১ ফেব্রুয়ারি প্রথম গুলিবর্ষণে এবং ২২ ফেব্রুয়ারি শোকার্ত শোভাযাত্রার ওপর গুলিবর্ষণে মৃত্যু ঘটে। কোন নাম কোন দিনে শহীদ হয়েছেন—এই বিবরণে সূত্রভেদে সামান্য ভিন্নতা আছে।',
          ],
          bullets: [
            'আবদুস সালাম · রফিকউদ্দিন আহমদ · বরকত উল্লাহ',
            'আবদুল জব্বার · শফিউর রহমান',
            'আবদুল আওয়াল · অহিউল্লাহ',
          ],
        },
        {
          heading: 'সূত্রে ভিন্নতা কেন থাকে',
          paragraphs: [
            '১৯৫২ সালের ঘটনাগুলোর তাৎক্ষণিক রেকর্ড কয়েকটি সীমিত সূত্রে সংরক্ষিত হয়েছিল, এবং পরবর্তীতে ঢাকা মেডিকেল কলেজ হাসপাতাল, পুলিশ প্রতিবেদন ও স্মৃতি-ভিত্তিক বিবরণ থেকে তালিকা তৈরি হয়েছে। ফলে ভিন্ন নথিতে ভিন্ন সংখ্যা ও দিন পাওয়া যায়।',
            'তাই এই গাইড একটি নির্দিষ্ট তালিকা বা দিনকে একমাত্র সত্য বলে উপস্থাপন করে না, বরং সবচেয়ে ব্যাপকভাবে স্বীকৃত নামগুলো উল্লেখ করে।',
          ],
        },
        {
          heading: 'স্মরণ কীভাবে হয়',
          paragraphs: [
            'প্রতি বছর ২১ ফেব্রুয়ারির প্রথম প্রহরে খালি পায়ে প্রভাতফেরি ও ফুল দিয়ে কেন্দ্রীয় শহীদ মিনারে শ্রদ্ধা জানানো হয়। সারা দেশে এবং প্রবাসে বাংলাভাষী মানুষও দিনটি পালন করেন।',
            'ভাষা আন্দোলনের স্মৃতির সঙ্গে যুক্ত আরেকটি স্বীকৃতি হলো একুশে পদক, যা ভাষা ও সংস্কৃতিতে অবদানের জন্য দেওয়া হয়।',
          ],
        },
      ],
      faq: [
        ['কেন্দ্রীয় শহীদ মিনার কাদের স্মরণে?', '১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারি ভাষার দাবিতে শহীদ হওয়া মানুষদের স্মরণে; সবচেয়ে বেশি উল্লিখিত নামগুলোর মধ্যে আছেন সালাম, বরকত, রফিক, জব্বার, শফিউর, আওয়াল ও অহিউল্লাহ।'],
        ['শহীদদের সঠিক সংখ্যা কত?', 'ভিন্ন সূত্রে ভিন্ন সংখ্যা পাওয়া যায়, কারণ তাৎক্ষণিক নথি সীমিত। এই গাইড নির্দিষ্ট সংখ্যাকে চূড়ান্ত বলে দাবি করে না।'],
        ['একুশে পদক কী?', 'একুশে পদক ভাষা আন্দোলনের স্মৃতির সঙ্গে যুক্ত একটি জাতীয় স্বীকৃতি, যা ভাষা, সাহিত্য ও সংস্কৃতিতে অবদানের জন্য দেওয়া হয়।'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Who Are the Language Martyrs — Remembering 1952',
      description:
        'Who the Central Shaheed Minar commemorates: the most widely remembered martyrs of the Bengali Language Movement, the events of 21 and 22 February 1952, and why accounts of names and dates vary.',
      h1: 'Who the language martyrs were',
      lead:
        'The Central Shaheed Minar commemorates those who died for the language cause on 21 and 22 February 1952. The names most widely remembered include Salam, Barkat, Rafiq, Jabbar, Shafiur, Awal and Ohiullah.',
      facts: [
        { label: 'Events', value: '21 and 22 February 1952' },
        { label: 'Area', value: 'Dhaka Medical College' },
        { label: 'Commemoration', value: '21 February, flowers and probhat feri' },
        { label: 'Name lists', value: 'Vary slightly by source' },
      ],
      sections: [
        {
          heading: 'The names most often commemorated',
          paragraphs: [
            'The names most frequently invoked are Abdus Salam, Rafiquddin Ahmed, Barkat Ullah, Abdul Jabbar, Shafiur Rahman, Abdul Awal and Ohiullah. Several were students, one was a government employee, and Ohiullah was a child.',
            'Deaths occurred in the first shooting on 21 February and again on 22 February, when police fired on a mourning procession. Sources differ slightly on which person died on which day.',
          ],
          bullets: [
            'Abdus Salam · Rafiquddin Ahmed · Barkat Ullah',
            'Abdul Jabbar · Shafiur Rahman',
            'Abdul Awal · Ohiullah',
          ],
        },
        {
          heading: 'Why accounts differ',
          paragraphs: [
            'Only a limited number of records of the 1952 events survived at the time, and later lists were reconstructed from hospital, police and memory-based accounts. Different documents therefore give different numbers and dates.',
            'For that reason this guide does not present a single list or date as the only truth; it reports the most widely recognised names.',
          ],
        },
        {
          heading: 'How they are remembered',
          paragraphs: [
            'Every year, in the first hours of 21 February, people walk barefoot in the probhat feri and place flowers at the Central Shaheed Minar. Bengali speakers in Bangladesh and abroad observe the day as well.',
            'Another recognition tied to the movement is the Ekushey Padak, awarded for contributions to language, literature and culture.',
          ],
        },
      ],
      faq: [
        ['Who does the Central Shaheed Minar commemorate?', 'Those who died for the language cause on 21 and 22 February 1952. The names most widely cited are Salam, Barkat, Rafiq, Jabbar, Shafiur, Awal and Ohiullah.'],
        ['How many martyrs were there?', 'Sources give different figures, because immediate records were limited. This guide does not present one number as definitive.'],
        ['What is the Ekushey Padak?', 'A national award linked to the memory of the Language Movement, given for contributions to language, literature and culture.'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'history/hamidur-rahman',
    section: 'history',
    priority: 'P2',
    related: ['history/novera-ahmed', 'history/architecture-symbolism', 'history/1971-rebuilding', 'history/language-movement-1952'],
    bn: {
      seoTitle: 'হামিদুর রহমান — কেন্দ্রীয় শহীদ মিনারের নকশাকার',
      description:
        'শিল্পী-স্থপতি হামিদুর রহমানের জীবন ও কাজ: কেন্দ্রীয় শহীদ মিনারের নকশার ভাবনা, নভেরা আহমেদের সঙ্গে সহযোগিতা এবং তাঁর নকশা কীভাবে জাতীয় প্রতীকে পরিণত হলো।',
      h1: 'হামিদুর রহমান: শহীদ মিনারের নকশাকার',
      lead:
        'কেন্দ্রীয় শহীদ মিনারের স্থায়ী নকশাটি করেন শিল্পী-স্থপতি হামিদুর রহমান, যাঁর সঙ্গে ভাস্কর্য সহযোগিতা করেন নভেরা আহমেদ। তাঁর নকশায় স্মৃতিসৌধ কেবল স্মারক নয়, একটি শিল্পকর্ম হিসেবেও গড়ে ওঠে।',
      facts: [
        { label: 'পরিচয়', value: 'শিল্পী ও স্থপতি' },
        { label: 'প্রধান কাজ', value: 'কেন্দ্রীয় শহীদ মিনারের নকশা' },
        { label: 'সহযোগী', value: 'নভেরা আহমেদ (ভাস্কর্য)' },
        { label: 'নির্মাণকাল', value: '১৯৫৭–১৯৬৩' },
      ],
      sections: [
        {
          heading: 'শিল্পী-স্থপতির নকশা ভাবনা',
          paragraphs: [
            'হামিদুর রহমান প্যারিসে শিল্পশিক্ষা নেন এবং দেশে ফিরে স্মৃতিসৌধকে একটি সমন্বিত শিল্পকর্ম হিসেবে ভাবেন—যেখানে স্থাপত্য, ভাস্কর্য ও চিত্রকলা একসঙ্গে কাজ করে।',
            'তাঁর মূল পরিকল্পনায় উঁচু সাদা কাঠামোর পাশাপাশি দেয়ালচিত্র ও রঙিন পটভূমির ভাবনা ছিল, যা স্মৃতিসৌধকে একটি সম্পূর্ণ পরিবেশ হিসেবে গড়ে তোলার লক্ষ্য ছিল।',
          ],
        },
        {
          heading: 'যা বাস্তবায়িত হলো, আর কী বাকি রইল',
          paragraphs: [
            'কাজ শুরুর পর সামরিক শাসন ও রাজনৈতিক পরিস্থিতির কারণে নির্মাণ বন্ধ হয়; পরে পরিবর্তিত পরিকল্পনায় ১৯৬৩ সালে কাঠামোটি সম্পন্ন হয়। ফলে মূল নকশার সব উপাদান বাস্তবায়িত হয়নি।',
            '১৯৭১ সালের পর পুনর্নির্মাণের সময়ও মূলের বিস্তৃত দেয়ালচিত্র ফিরিয়ে আনা হয়নি—আজ আমরা মূলত কাঠামোভাষাটিই দেখি।',
          ],
        },
        {
          heading: 'কেন তাঁর নকশা গুরুত্বপূর্ণ',
          paragraphs: [
            'স্মৃতিসৌধকে তিনি গড়েছিলেন এমনভাবে, যাতে দর্শক কেবল একটি ভাস্কর্য না দেখে বরং একটি অনুভূতির ভেতর দিয়ে হেঁটে যান। এই দৃষ্টিভঙ্গিই পরবর্তী দশকগুলোতে বাংলার সাংস্কৃতিক স্থাপত্যে প্রভাব রাখে।',
          ],
        },
      ],
      faq: [
        ['কেন্দ্রীয় শহীদ মিনারের নকশা কে করেন?', 'স্থায়ী স্মৃতিসৌধের নকশা করেন শিল্পী-স্থপতি হামিদুর রহমান; ভাস্কর্য সহযোগিতা করেন নভেরা আহমেদ।'],
        ['তাঁর মূল পরিকল্পনা পুরোপুরি বাস্তবায়িত হয়েছে?', 'না। সামরিক শাসন ও পরিবর্তিত পরিকল্পনার কারণে মূল নকশার কিছু অংশ, বিশেষ করে দেয়ালচিত্র, বাস্তবায়িত হয়নি; ১৯৭১-পরবর্তী পুনর্নির্মাণেও তা ফেরানো হয়নি।'],
        ['তিনি কে ছিলেন?', 'হামিদুর রহমান ছিলেন বাংলাদেশের একজন শিল্পী ও স্থপতি, যিনি স্মৃতিসৌধকে সমন্বিত শিল্পকর্ম হিসেবে ভেবেছিলেন।'],
      ],
      sources: [
        { label: 'Banglapedia — Rahman, Hamidur', href: 'https://en.banglapedia.org/index.php/Rahman,_Hamidur' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
    en: {
      seoTitle: 'Hamidur Rahman — Designer of the Central Shaheed Minar',
      description:
        'The artist-architect Hamidur Rahman: the ideas behind the Central Shaheed Minar, his collaboration with sculptor Novera Ahmed, and how his design became a national symbol.',
      h1: 'Hamidur Rahman: the designer of the Shaheed Minar',
      lead:
        'The permanent design of the Central Shaheed Minar was made by the artist-architect Hamidur Rahman, with sculptural collaboration by Novera Ahmed. In his design the monument is not only a memorial but also an artwork.',
      facts: [
        { label: 'Role', value: 'Artist and architect' },
        { label: 'Key work', value: 'Design of the Central Shaheed Minar' },
        { label: 'Collaborator', value: 'Novera Ahmed (sculpture)' },
        { label: 'Built', value: '1957–1963' },
      ],
      sections: [
        {
          heading: 'An artist-architect’s concept',
          paragraphs: [
            'Hamidur Rahman studied art in Paris and, on returning, imagined the memorial as a single, integrated work in which architecture, sculpture and painting function together.',
            'His original plan included murals and a coloured background alongside the tall white structure, aiming to create a complete environment rather than an isolated object.',
          ],
        },
        {
          heading: 'What was built, and what was not',
          paragraphs: [
            'Construction began and was then halted under martial law and political upheaval; the structure was eventually completed in 1963 under a modified plan. Not every element of the original design was realised.',
            'After 1971 the extensive original murals were not restored either, so what visitors see today is mainly the architectural form.',
          ],
        },
        {
          heading: 'Why his design matters',
          paragraphs: [
            'He shaped the monument so that a visitor does not simply look at a sculpture but walks through a feeling. That approach influenced cultural architecture in Bengal for decades afterwards.',
          ],
        },
      ],
      faq: [
        ['Who designed the Central Shaheed Minar?', 'The permanent design was made by the artist-architect Hamidur Rahman, with sculptural collaboration by Novera Ahmed.'],
        ['Was his full plan realised?', 'No. Martial law and a changed plan meant parts of the original design, especially the murals, were never built, and they were not restored after 1971.'],
        ['Who was Hamidur Rahman?', 'A Bangladeshi artist and architect who conceived the Shaheed Minar as an integrated work of art.'],
      ],
      sources: [
        { label: 'Banglapedia — Rahman, Hamidur', href: 'https://en.banglapedia.org/index.php/Rahman,_Hamidur' },
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
      ],
    },
  },

  {
    path: 'history/novera-ahmed',
    section: 'history',
    priority: 'P2',
    related: ['history/hamidur-rahman', 'history/architecture-symbolism', 'history/language-movement-1952'],
    bn: {
      seoTitle: 'নভেরা আহমেদ — শহীদ মিনারে ভাস্কর্যের সহযোগী',
      description:
        'ভাস্কর নভেরা আহমেদের পরিচয়, কেন্দ্রীয় শহীদ মিনারের কাজে তাঁর ভূমিকা এবং বাংলাদেশের ভাস্কর্য ঐতিহ্যে তাঁর অবদান সম্পর্কে যাচাইযোগ্য বিবরণ।',
      h1: 'নভেরা আহমেদ ও শহীদ মিনার',
      lead:
        'নভেরা আহমেদ বাংলাদেশের প্রথম নারী ভাস্করদের একজন, যিনি হামিদুর রহমানের সঙ্গে কেন্দ্রীয় শহীদ মিনারের ভাস্কর্য-সংক্রান্ত কাজে সহযোগিতা করেন। তাঁর ভূমিকা নিয়ে সূত্রে ভিন্ন বর্ণনা থাকলেও সহযোগিতার বিষয়টি ব্যাপকভাবে স্বীকৃত।',
      facts: [
        { label: 'পরিচয়', value: 'ভাস্কর' },
        { label: 'জীবনকাল', value: '১৯৩০–২০১৫' },
        { label: 'সহযোগিতা', value: 'কেন্দ্রীয় শহীদ মিনার' },
        { label: 'পরবর্তী জীবন', value: 'প্যারিসে বসবাস' },
      ],
      sections: [
        {
          heading: 'প্রথম নারী ভাস্কর',
          paragraphs: [
            'নভেরা আহমেদ ১৯৩০ সালে জন্মগ্রহণ করেন এবং লন্ডন ও প্যারিসে শিল্পশিক্ষা নেন। স্বাধীনতার আগেই ঢাকায় ভাস্কর্য চর্চা শুরু করায় তাঁকে বাংলাদেশের আধুনিক ভাস্কর্যের পথিকৃৎদের একজন ধরা হয়।',
            'তাঁর কাজ মূলত ধাতু ও শিল্পসম্মত রূপ নিয়ে ছিল, এবং ১৯৫০-এর দশকে ঢাকায় তাঁর প্রদর্শনী অভিনব বলে বিবেচিত হয়।',
          ],
        },
        {
          heading: 'শহীদ মিনারে তাঁর ভূমিকা',
          paragraphs: [
            'হামিদুর রহমানের নকশায় ভাস্কর্য ও রিলিফ সংক্রান্ত কাজে নভেরা আহমেদ সহযোগিতা করেন। কোন অংশে কতটুকু কাজ কে করেছিলেন—এই বিবরণ বিস্তারিতভাবে সর্বত্র সমানভাবে লিপিবদ্ধ নয়।',
            'স্মৃতিসৌধের ইতিহাসচর্চায় তাই দুজনের যৌথ অবদানকেই স্বীকৃতি দেওয়া হয়।',
          ],
        },
        {
          heading: 'পরবর্তী জীবন',
          paragraphs: [
            '১৯৭০-এর দশকে তিনি প্যারিসে চলে যান এবং সেখানেই ২০১৫ সালে মৃত্যুবরণ করেন। দীর্ঘ অনুপস্থিতির পর বাংলাদেশে তাঁর কাজ আবার আলোচনায় আসে এবং তাঁর ভাস্কর্যগুলো আধুনিক শিল্পের অংশ হিসেবে সংরক্ষিত হয়েছে।',
          ],
        },
      ],
      faq: [
        ['নভেরা আহমেদ কে?', 'বাংলাদেশের প্রথম নারী ভাস্করদের একজন, যিনি কেন্দ্রীয় শহীদ মিনারের ভাস্কর্য কাজে হামিদুর রহমানের সঙ্গে সহযোগিতা করেন।'],
        ['শহীদ মিনারে তাঁর অবদান কতটুকু?', 'সহযোগিতার বিষয়টি স্বীকৃত, তবে কোন অংশে তিনি কী কাজ করেছেন তা সূত্রে সবিস্তারে সমানভাবে লিপিবদ্ধ নয়।'],
        ['তিনি কোথায় মারা যান?', '১৯৩০ সালে জন্মগ্রহণকারী নভেরা আহমেদ ২০১৫ সালে প্যারিসে মৃত্যুবরণ করেন, যেখানে তিনি দীর্ঘদিন বসবাস করেছিলেন।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'Novera Ahmed — Sculptor of the Central Shaheed Minar',
      description:
        'The sculptor Novera Ahmed: her identity, her collaboration on the Central Shaheed Minar, and her place in the history of sculpture in Bangladesh — with the limits of what sources confirm.',
      h1: 'Novera Ahmed and the Shaheed Minar',
      lead:
        'Novera Ahmed is among the first women sculptors of Bangladesh and collaborated with Hamidur Rahman on the sculptural work of the Central Shaheed Minar. Accounts of the division of labour vary, but the collaboration itself is widely acknowledged.',
      facts: [
        { label: 'Role', value: 'Sculptor' },
        { label: 'Lived', value: '1930–2015' },
        { label: 'Collaboration', value: 'Central Shaheed Minar' },
        { label: 'Later life', value: 'Based in Paris' },
      ],
      sections: [
        {
          heading: 'A pioneering woman sculptor',
          paragraphs: [
            'Novera Ahmed was born in 1930 and studied art in London and Paris. Because she practised sculpture in Dhaka before independence, she is regarded as one of the founders of modern sculpture in Bangladesh.',
            'Her work centred on metal and sculptural form, and her 1950s exhibitions in Dhaka were considered unusual for their time.',
          ],
        },
        {
          heading: 'Her contribution at the Shaheed Minar',
          paragraphs: [
            'Novera Ahmed collaborated on the sculptural and relief work in Hamidur Rahman’s design. Exactly which part was executed by whom is not equally documented everywhere.',
            'In the historiography of the monument, the two are therefore credited jointly.',
          ],
        },
        {
          heading: 'Later life',
          paragraphs: [
            'She moved to Paris in the 1970s and died there in 2015. After a long absence, her work returned to public discussion in Bangladesh, and her sculptures are preserved as part of modern art history.',
          ],
        },
      ],
      faq: [
        ['Who was Novera Ahmed?', 'One of the first women sculptors of Bangladesh, who collaborated with Hamidur Rahman on the sculptural work of the Central Shaheed Minar.'],
        ['How much did she contribute to the Shaheed Minar?', 'The collaboration is acknowledged, but detailed accounts of which elements she executed are not documented consistently across sources.'],
        ['Where did she die?', 'Born in 1930, Novera Ahmed died in Paris in 2015, where she had lived for many years.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/architecture-symbolism',
    section: 'history',
    priority: 'P1',
    related: ['history/hamidur-rahman', 'history/1971-rebuilding', 'guides/commemoration-etiquette', 'visit/location-map'],
    bn: {
      seoTitle: 'শহীদ মিনারের স্থাপত্য ও প্রতীকী অর্থ',
      description:
        'কেন্দ্রীয় শহীদ মিনারের স্থাপত্য: উঁচু সাদা কাঠামো, লাল বৃত্ত, খোলা চত্বর ও সিঁড়ির ভূমিকা এবং “মা ও সন্তান” ব্যাখ্যা সম্পর্কে সতর্ক ও যাচাইযোগ্য বিবরণ।',
      h1: 'শহীদ মিনারের স্থাপত্য ও প্রতীক',
      lead:
        'কেন্দ্রীয় শহীদ মিনারের উঁচু সাদা কাঠামো, পিছনে লাল বৃত্ত ও খোলা চত্বর মিলে একটি সমন্বিত দৃশ্যভাষা তৈরি করে। স্থাপত্যের অংশগুলোকে প্রায়ই “মা ও তাঁর শহীদ সন্তান” হিসেবে ব্যাখ্যা করা হয়, যদিও এই ব্যাখ্যা সবসময় একইভাবে বলা হয় না।',
      facts: [
        { label: 'ধরন', value: 'আধুনিক স্মারক স্থাপত্য' },
        { label: 'মূল উপাদান', value: 'সাদা কাঠামো ও লাল বৃত্ত' },
        { label: 'নকশা', value: 'হামিদুর রহমান' },
        { label: 'সম্প্রসারণ', value: '১৯৮৩' },
      ],
      sections: [
        {
          heading: 'কাঠামো: উচ্চতা, ফাঁক ও ছায়া',
          paragraphs: [
            'স্মৃতিসৌধের মূল অংশ হলো কয়েকটি উঁচু, সরু ও বাঁকা প্রান্তযুক্ত সাদা কাঠামো। মাঝেরটি তুলনায় উঁচু, আর দুই পাশের কাঠামো ক্রমশ নিচু হয়ে দাঁড়িয়ে থাকে।',
            'এই উচ্চতার পার্থক্য ও মাঝের ফাঁক আলো-ছায়ার সঙ্গে মিলে কাঠামোকে দূর থেকে চেনা যায় এমন রেখায় গড়ে তোলে।',
          ],
          bullets: [
            'মাঝের কাঠামো: সবচেয়ে উঁচু',
            'পাশের কাঠামো: ক্রমশ নিচু',
            'মাঝের ফাঁক: আলো ও দৃষ্টিরেখা তৈরি করে',
          ],
        },
        {
          heading: 'লাল বৃত্ত ও প্রতীকের ব্যাখ্যা',
          paragraphs: [
            'কাঠামোর পিছনে বা পাশে অবস্থিত লাল বৃত্ত সূর্যোদয় ও নতুন দিনের প্রতীক হিসেবে ব্যাখ্যা করা হয়, যা ভাষার সংগ্রামের ধারাবাহিকতার ইঙ্গিত দেয়।',
            'সবচেয়ে পরিচিত ব্যাখ্যাটি হলো—মাঝের কাঠামো মা, আর পাশের নিচু কাঠামোগুলো তাঁর শহীদ সন্তান। এটি ব্যাপকভাবে প্রচলিত হলেও বিভিন্ন বর্ণনায় এর ভিন্ন ভিন্ন ব্যাখ্যাও পাওয়া যায়।',
          ],
        },
        {
          heading: 'চত্বর, সিঁড়ি ও অভিজ্ঞতা',
          paragraphs: [
            'স্মৃতিসৌধের সামনের খোলা চত্বর ও বিস্তীর্ণ সিঁড়ি দর্শকদের ধীরে ধীরে কাঠামোর কাছাকাছি আসার সুযোগ দেয়। এই বিন্যাস একক দর্শনের বদলে একটি অনুষ্ঠানিক অভিজ্ঞতা তৈরি করে, যা বিশেষত ২১ ফেব্রুয়ারি শ্রদ্ধা নিবেদনের সময় স্পষ্ট হয়।',
            '১৯৮৩ সালের সম্প্রসারণের পর বর্তমান পরিসরটি গড়ে ওঠে, যা আজকের সমাবেশ ও পুষ্পস্তবক অর্পণের পরিস্থিতি নির্ধারণ করে।',
          ],
        },
      ],
      faq: [
        ['সাদা কাঠামোর প্রতীক কী?', 'প্রায়ই এটিকে “মা” এবং পাশের নিচু কাঠামোগুলোকে শহীদ সন্তান হিসেবে ব্যাখ্যা করা হয়; তবে বর্ণনায় ভিন্ন ব্যাখ্যাও পাওয়া যায়।'],
        ['লাল বৃত্তের অর্থ কী?', 'লাল বৃত্তকে সাধারণত সূর্যোদয় ও নতুন দিনের প্রতীক হিসেবে ব্যাখ্যা করা হয়, যা ভাষার সংগ্রামের ধারাবাহিকতার ইঙ্গিত দেয়।'],
        ['স্মৃতিসৌধের বর্তমান কাঠামো কবে গড়ে ওঠে?', 'স্থায়ী নকশা সম্পন্ন হয় ১৯৬৩ সালে, ১৯৭১-এ ধ্বংসের পর পুনর্নির্মাণ হয় এবং ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারিত হয়।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'Central Shaheed Minar Architecture and Symbolism',
      description:
        'The architecture of the Central Shaheed Minar: the tall white structures, the red disc, the open plaza and steps, and the widely used but not uniform “mother and children” interpretation.',
      h1: 'Architecture and symbolism of the Shaheed Minar',
      lead:
        'The tall white structures, the red disc behind and the open plaza together form a single visual language. The elements are often interpreted as a mother and her fallen children, though that reading is not stated identically in every account.',
      facts: [
        { label: 'Type', value: 'Modern memorial architecture' },
        { label: 'Main elements', value: 'White structures and red disc' },
        { label: 'Design', value: 'Hamidur Rahman' },
        { label: 'Expansion', value: '1983' },
      ],
      sections: [
        {
          heading: 'Structure: height, gaps and shadow',
          paragraphs: [
            'The core of the monument is a group of tall, slender white structures with curved edges. The central one is the tallest, and the flanking structures step down in height.',
            'That difference in height, together with the gap between them, produces a silhouette that is recognisable from a distance and changes with the light.',
          ],
          bullets: [
            'Central structure: the tallest',
            'Flanking structures: progressively lower',
            'Gap between them: creates light and a sight line',
          ],
        },
        {
          heading: 'The red disc and what the symbols mean',
          paragraphs: [
            'The red disc behind and beside the structures is generally read as sunrise and a new day, suggesting the continuity of the language struggle.',
            'The best-known interpretation is that the central structure is a mother and the lower flanking structures are her fallen children. The image is widely repeated, but descriptions also vary.',
          ],
        },
        {
          heading: 'The plaza, the steps and the experience',
          paragraphs: [
            'The open plaza and broad steps in front of the monument let visitors approach gradually rather than arrive at once. That arrangement creates a ceremonial experience rather than a single viewpoint, and it becomes most evident during the tributes on 21 February.',
            'The present extent took shape after the 1983 expansion, which defines how gatherings and wreath-laying are arranged today.',
          ],
        },
      ],
      faq: [
        ['What do the white structures symbolise?', 'They are most often interpreted as a mother with her fallen children in the lower flanking structures, though accounts vary.'],
        ['What does the red disc mean?', 'It is generally read as sunrise and a new day, suggesting the continuity of the language struggle.'],
        ['When did the monument take its present form?', 'The permanent design was completed in 1963; after destruction in 1971 it was rebuilt and then expanded to its present extent in 1983.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/1971-rebuilding',
    section: 'history',
    priority: 'P2',
    related: ['history/architecture-symbolism', 'history/hamidur-rahman', 'nearby/suhrawardy-udyan', 'history/shaheed-minar-vs-savar'],
    bn: {
      seoTitle: '১৯৭১ সালে শহীদ মিনারের ধ্বংস ও পুনর্নির্মাণ',
      description:
        'মুক্তিযুদ্ধের শুরুতে কেন্দ্রীয় শহীদ মিনার কীভাবে ক্ষতিগ্রস্ত ও ধ্বংস হয়, স্বাধীনতার পর কীভাবে তা পুনর্নির্মিত হয় এবং ১৯৮৩ সালের সম্প্রসারণে কী বদলায়।',
      h1: '১৯৭১: ধ্বংস ও পুনর্নির্মাণ',
      lead:
        '১৯৭১ সালে মুক্তিযুদ্ধের শুরুতেই কেন্দ্রীয় শহীদ মিনার ক্ষতিগ্রস্ত ও ধ্বংস হয়। স্বাধীনতার পর এটি পুনর্নির্মিত হয় এবং ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারিত হয়; তবে মূল নকশার দেয়ালচিত্র আর ফেরানো হয়নি।',
      facts: [
        { label: 'ধ্বংস', value: '১৯৭১ (মুক্তিযুদ্ধের শুরুতে)' },
        { label: 'পুনর্নির্মাণ', value: 'স্বাধীনতার পর' },
        { label: 'সম্প্রসারণ', value: '১৯৮৩' },
        { label: 'অসম্পূর্ণ', value: 'মূল দেয়ালচিত্র আর ফেরেনি' },
      ],
      sections: [
        {
          heading: '১৯৭১: কেন স্মৃতিসৌধও লক্ষ্য হয়',
          paragraphs: [
            '১৯৫২ সালের স্মৃতি ও বাংলা ভাষার পরিচয় ছিল স্বাধীনতা আন্দোলনের অন্যতম ভিত্তি। তাই ১৯৭১ সালের মার্চে সামরিক অভিযান শুরুর সময় স্মৃতিসৌধও ভাঙা হয়—যাতে কেবল কাঠামো নয়, তার প্রতীকী শক্তিও মুছে দেওয়া যায়।',
            'স্মৃতিসৌধের ক্ষতির এই অধ্যায়টি আজ বাংলাদেশের যুদ্ধকালীন ধ্বংসের একটি পরিচিত উদাহরণ হিসেবে স্মরণ করা হয়।',
          ],
        },
        {
          heading: 'স্বাধীনতার পর পুনর্নির্মাণ',
          paragraphs: [
            '১৯৭১ সালের ডিসেম্বরে স্বাধীনতার পর স্মৃতিসৌধ পুনর্নির্মাণের কাজ শুরু হয়। মূল নকশার মূল কাঠামোভাষা ফিরিয়ে আনা হয়, যদিও দেয়ালচিত্র ও বিস্তৃত অলংকরণের মতো কিছু উপাদান নতুন করে করা হয়নি।',
            'এই পুনর্নির্মাণ শেষ পর্যন্ত ১৯৮০-এর দশকে পূর্ণতা পায়।',
          ],
        },
        {
          heading: '১৯৮৩: বর্তমান পরিসর',
          paragraphs: [
            '১৯৮৩ সালের সম্প্রসারণে চত্বর ও আশপাশের এলাকার পরিসর বাড়ানো হয়, যাতে প্রতি বছর ২১ ফেব্রুয়ারি বিপুল সংখ্যক মানুষ শ্রদ্ধা জানাতে পারেন।',
            'আজ দর্শক যে খোলা চত্বর ও সিঁড়ি দেখেন, সেটি মূলত এই সম্প্রসারণের ফল, যেখানে কাঠামোটি তার প্রথম যুগের চেয়ে বড় পরিবেশে অবস্থান করছে।',
          ],
        },
      ],
      faq: [
        ['১৯৭১ সালে শহীদ মিনার ধ্বংস হয়েছিল কেন?', 'স্মৃতিসৌধ ১৯৫২ সালের ভাষা আন্দোলনের প্রতীক ছিল, যা স্বাধীনতার আকাঙ্ক্ষার সঙ্গেও যুক্ত। তাই যুদ্ধের শুরুতেই তা ভেঙে দেওয়া হয়।'],
        ['পুনর্নির্মাণ কবে হয়?', '১৯৭১ সালের ডিসেম্বরে স্বাধীনতার পর পুনর্নির্মাণ শুরু হয় এবং ১৯৮০-এর দশকে তা পূর্ণতা পায়; ১৯৮৩ সালে বর্তমান পরিসরে সম্প্রসারণ হয়।'],
        ['মূল নকশার সবকিছু ফিরে এসেছে?', 'না। মূল নকশার দেয়ালচিত্র ও বিস্তৃত অলংকরণ পুনর্নির্মাণে ফিরিয়ে আনা হয়নি; কাঠামোভাষাই প্রধান উপাদান হিসেবে টিকে আছে।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'The Shaheed Minar in 1971 — Destruction and Rebuilding',
      description:
        'How the Central Shaheed Minar was damaged and destroyed at the start of the 1971 Liberation War, how it was rebuilt after independence, and what the 1983 expansion changed.',
      h1: '1971: destruction and rebuilding',
      lead:
        'The Central Shaheed Minar was damaged and destroyed in 1971 at the start of the Liberation War. It was rebuilt after independence and expanded in 1983, though the original murals were not restored.',
      facts: [
        { label: 'Destroyed', value: '1971 (start of the war)' },
        { label: 'Rebuilt', value: 'After independence' },
        { label: 'Expanded', value: '1983' },
        { label: 'Not restored', value: 'The original murals' },
      ],
      sections: [
        {
          heading: '1971: why the monument was a target',
          paragraphs: [
            'The memory of 1952 and the identity of the Bengali language were among the foundations of the independence struggle. When the military crackdown began in March 1971, the monument was destroyed — an attempt to erase not only a structure but its symbolic force.',
            'The episode is remembered today as a well-known example of wartime destruction in Bangladesh.',
          ],
        },
        {
          heading: 'Rebuilding after independence',
          paragraphs: [
            'After independence in December 1971, work began to rebuild the monument. The essential architectural form was restored, although elements such as the extensive murals were not recreated.',
            'The rebuilding process reached completion in the 1980s.',
          ],
        },
        {
          heading: '1983: the present extent',
          paragraphs: [
            'The 1983 expansion enlarged the plaza and surrounding area so that large numbers of people could pay tribute on 21 February each year.',
            'The open plaza and steps visitors see today largely result from that expansion; the structures now stand within a much larger setting than in their earliest years.',
          ],
        },
      ],
      faq: [
        ['Why was the Shaheed Minar destroyed in 1971?', 'The monument symbolised the 1952 Language Movement, which was also tied to the aspiration for independence, so it was destroyed early in the war.'],
        ['When was it rebuilt?', 'Rebuilding began after independence in December 1971 and was completed during the 1980s; the present extent dates from the 1983 expansion.'],
        ['Were all original elements restored?', 'No. The original murals and extensive decoration were not recreated; the architectural form is the main surviving element.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/ekushey-february',
    section: 'history',
    priority: 'P1',
    related: ['history/international-mother-language-day', 'history/language-martyrs', 'guides/commemoration-etiquette', 'guides/bengali-terms'],
    bn: {
      seoTitle: 'একুশে ফেব্রুয়ারি — স্মরণের রীতিনীতি ও তাৎপর্য',
      description:
        'একুশে ফেব্রুয়ারি কীভাবে পালিত হয়: প্রভাতফেরি, পুষ্পস্তবক, একুশে পদক ও অমর একুশে বইমেলা এবং কেন দিনটি বাংলাদেশে জাতীয় স্মরণের দিন।',
      h1: 'একুশে ফেব্রুয়ারি: স্মরণের দিন',
      lead:
        'একুশে ফেব্রুয়ারি বাংলাদেশে ভাষা শহীদদের স্মরণের জাতীয় দিন। রাত ১২টা থেকে শুরু হয় খালি পায়ে প্রভাতফেরি ও ফুল দেওয়া, আর দিনটিতে সারা দেশে রাষ্ট্রীয় ও সাংস্কৃতিক কর্মসূচি হয়।',
      facts: [
        { label: 'তারিখ', value: '২১ ফেব্রুয়ারি' },
        { label: 'প্রধান রীতি', value: 'প্রভাতফেরি ও পুষ্পস্তবক' },
        { label: 'সংযুক্ত পুরস্কার', value: 'একুশে পদক' },
        { label: 'সাংস্কৃতিক আয়োজন', value: 'অমর একুশে বইমেলা' },
      ],
      sections: [
        {
          heading: 'রাত ১২টা থেকে শ্রদ্ধা',
          paragraphs: [
            '২০ ফেব্রুয়ারির রাত ১২টার পর থেকে মানুষ খালি পায়ে প্রভাতফেরিতে অংশ নিয়ে কেন্দ্রীয় শহীদ মিনারে ফুল দেন। খালি পায়ে যাওয়া শ্রদ্ধা ও বিনয়ের প্রতীক হিসেবে ধরা হয়।',
            'সারাদেশে প্রভাতফেরি হয় এবং ঢাকার শহীদ মিনার থাকে সবচেয়ে বড় সমাবেশের কেন্দ্র।',
          ],
          bullets: [
            'রাত ১২টা: শ্রদ্ধা নিবেদন শুরু',
            'খালি পায়ে প্রভাতফেরি',
            'প্রভাতফেরির পর রাষ্ট্রীয় শ্রদ্ধা',
          ],
        },
        {
          heading: 'পুরস্কার, বইমেলা ও সংস্কৃতি',
          paragraphs: [
            'একুশে পদক ভাষা ও সংস্কৃতিতে অবদানের জন্য দেওয়া জাতীয় স্বীকৃতি, যা একুশে ফেব্রুয়ারির স্মৃতির সঙ্গে যুক্ত।',
            'ফেব্রুয়ারি মাসজুড়ে ঢাকায় অমর একুশে বইমেলা অনুষ্ঠিত হয়, যা বাংলা ভাষা ও সাহিত্যের এক বড় সাংস্কৃতিক আয়োজনে পরিণত হয়েছে।',
          ],
        },
        {
          heading: 'দেশের বাইরেও একুশে',
          paragraphs: [
            'বাংলা ভাষাভাষী মানুষ যুক্তরাজ্য, যুক্তরাষ্ট্র, কানাডা, অস্ট্রেলিয়া ও মধ্যপ্রাচ্যসহ বহু অঞ্চলে একুশে ফেব্রুয়ারি পালন করেন। ১৯৯৯ সালে ইউনেস্কোর স্বীকৃতির পর দিনটি আন্তর্জাতিক মাতৃভাষা দিবসও।',
          ],
        },
      ],
      faq: [
        ['একুশে ফেব্রুয়ারি কী?', 'ভাষা শহীদদের স্মরণে বাংলাদেশে পালিত জাতীয় দিন; ২০ ফেব্রুয়ারির মধ্যরাত থেকে প্রভাতফেরি ও পুষ্পস্তবক অর্পণের মাধ্যমে শ্রদ্ধা জানানো হয়।'],
        ['খালি পায়ে কেন যাওয়া হয়?', 'খালি পায়ে প্রভাতফেরি শ্রদ্ধা ও বিনয়ের প্রতীক হিসেবে ধরা হয়, এবং এটি একুশের অন্যতম পরিচিত রীতি।'],
        ['একুশে পদক কী?', 'ভাষা, সাহিত্য ও সংস্কৃতিতে অবদানের জন্য দেওয়া জাতীয় পুরস্কার, যা একুশের স্মৃতির সঙ্গে যুক্ত।'],
      ],
      sources: [
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
      ],
    },
    en: {
      seoTitle: 'Ekushey February — How Bangladesh Commemorates 21 February',
      description:
        'How Ekushey February is observed in Bangladesh: the midnight probhat feri, barefoot tributes at the Shaheed Minar, the Ekushey Padak award, and the Amar Ekushey book fair.',
      h1: 'Ekushey February: the day of remembrance',
      lead:
        'Ekushey February is Bangladesh’s national day of remembrance for the language martyrs. From midnight, people walk barefoot in the probhat feri and lay flowers, and official and cultural events take place across the country.',
      facts: [
        { label: 'Date', value: '21 February' },
        { label: 'Main custom', value: 'Probhat feri and flowers' },
        { label: 'Linked award', value: 'Ekushey Padak' },
        { label: 'Cultural event', value: 'Amar Ekushey Book Fair' },
      ],
      sections: [
        {
          heading: 'Tribute from midnight',
          paragraphs: [
            'From midnight on 20 February, people join the probhat feri and place flowers at the Central Shaheed Minar. Walking barefoot is understood as a sign of respect and humility.',
            'Probhat feri processions take place nationwide, with the Dhaka monument as the largest focal point.',
          ],
          bullets: [
            'Midnight: tributes begin',
            'Probhat feri on foot, barefoot',
            'Official tributes follow the procession',
          ],
        },
        {
          heading: 'Awards, book fair and culture',
          paragraphs: [
            'The Ekushey Padak is a national award for contributions to language and culture, tied to the memory of 21 February.',
            'Throughout February, Dhaka hosts the Amar Ekushey Book Fair, which has become a major cultural event for Bengali language and literature.',
          ],
        },
        {
          heading: 'Ekushey beyond Bangladesh',
          paragraphs: [
            'Bengali speakers observe the day in the United Kingdom, the United States, Canada, Australia, the Middle East and elsewhere. Following UNESCO recognition in 1999, it is also International Mother Language Day.',
          ],
        },
      ],
      faq: [
        ['What is Ekushey February?', 'A national day of remembrance in Bangladesh for the language martyrs, observed from the midnight before 21 February with processions and flowers at the Shaheed Minar.'],
        ['Why do people walk barefoot?', 'Walking barefoot in the probhat feri is understood as a mark of respect and humility, and it is one of the best-known customs of the day.'],
        ['What is the Ekushey Padak?', 'A national award given for contributions to language, literature and culture, linked to the memory of the Language Movement.'],
      ],
      sources: [
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
      ],
    },
  },

  {
    path: 'history/international-mother-language-day',
    section: 'history',
    priority: 'P1',
    related: ['history/ekushey-february', 'history/language-movement-1952', 'history/shaheed-minar-vs-savar'],
    bn: {
      seoTitle: 'আন্তর্জাতিক মাতৃভাষা দিবস — ইউনেস্কোর স্বীকৃতি ও ইতিহাস',
      description:
        'আন্তর্জাতিক মাতৃভাষা দিবস কীভাবে চালু হলো: বাংলাদেশের প্রস্তাব, ১৯৯৯ সালে ইউনেস্কোর সিদ্ধান্ত, ২০০০ সাল থেকে বিশ্বব্যাপী উদযাপন এবং শহীদ মিনারের সঙ্গে এর সম্পর্ক।',
      h1: 'আন্তর্জাতিক মাতৃভাষা দিবস',
      lead:
        '২১ ফেব্রুয়ারি আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে ১৯৯৯ সালে ইউনেস্কোর সাধারণ সম্মেলনে অনুমোদিত হয় এবং ২০০০ সাল থেকে বিশ্বজুড়ে পালিত হচ্ছে—এর ভিত্তি বাংলাদেশের ভাষা আন্দোলনের স্মৃতি।',
      facts: [
        { label: 'অনুমোদন', value: '১৯৯৯, ইউনেস্কো' },
        { label: 'উদযাপন শুরু', value: '২০০০ সাল থেকে' },
        { label: 'প্রস্তাব', value: 'বাংলাদেশের উদ্যোগ' },
        { label: 'তাৎপর্য', value: 'ভাষিক বৈচিত্র্য রক্ষা' },
      ],
      sections: [
        {
          heading: 'কীভাবে প্রস্তাব এলো',
          paragraphs: [
            'বাংলাদেশ ১৯৯৯ সালে ইউনেস্কোর সাধারণ সম্মেলনে ২১ ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস ঘোষণার প্রস্তাব উত্থাপন করে, যার পেছনে ছিল ভাষা আন্দোলনের স্মৃতি ও প্রবাসী বাংলাদেশিদের উদ্যোগ।',
            'ইউনেস্কোর সিদ্ধান্তের উদ্দেশ্য ছিল মাতৃভাষার গুরুত্ব তুলে ধরা এবং বিশ্বের ক্ষুদ্র ও বিপন্ন ভাষাগুলোর সংরক্ষণে মনোযোগ আনা।',
          ],
        },
        {
          heading: 'স্বীকৃতির পর কী বদলায়',
          paragraphs: [
            '২০০০ সাল থেকে প্রতিবছর ২১ ফেব্রুয়ারি বিশ্বজুড়ে নানা ভাষা ও দেশে দিনটি পালিত হয়—বিদ্যালয়, জাদুঘর, ভাষা-সংস্থা ও প্রবাসী বাংলাভাষী সমাজে শ্রদ্ধা ও আলোচনার আয়োজন হয়।',
            'এতে একুশে ফেব্রুয়ারি স্থানীয় স্মৃতি থেকে আন্তর্জাতিক বিষয় হয়ে ওঠে।',
          ],
        },
        {
          heading: 'একটি গুরুত্বপূর্ণ স্পষ্টীকরণ',
          paragraphs: [
            'ইউনেস্কোর স্বীকৃতি ২১ ফেব্রুয়ারি তারিখটির জন্য, কেন্দ্রীয় শহীদ মিনার নামক কাঠামোর জন্য নয়। কেন্দ্রীয় শহীদ মিনার ইউনেস্কোর বিশ্ব ঐতিহ্যস্থল (ওয়ার্ল্ড হেরিটেজ) নয়।',
            'এই পার্থক্য জানা থাকলে দর্শক ও গবেষকরা স্মৃতিসৌধের সাংস্কৃতিক গুরুত্বকে সঠিকভাবে বুঝতে পারেন।',
          ],
        },
      ],
      faq: [
        ['আন্তর্জাতিক মাতৃভাষা দিবস কবে ঘোষিত হয়?', '১৯৯৯ সালে ইউনেস্কোর সাধারণ সম্মেলন ২১ ফেব্রুয়ারিকে আন্তর্জাতিক মাতৃভাষা দিবস হিসেবে অনুমোদন করে; ২০০০ সাল থেকে দিনটি পালিত হচ্ছে।'],
        ['এটি কে প্রস্তাব করেছিল?', '২১ ফেব্রুয়ারিকে আন্তর্জাতিক দিবস হিসেবে স্বীকৃতি দেওয়ার প্রস্তাব এসেছিল বাংলাদেশের উদ্যোগে।'],
        ['শহীদ মিনার কি ইউনেস্কোর বিশ্ব ঐতিহ্যস্থল?', 'না। ইউনেস্কোর স্বীকৃতি ২১ ফেব্রুয়ারি তারিখটির জন্য, শহীদ মিনার কাঠামোর জন্য নয়; শহীদ মিনার বিশ্ব ঐতিহ্যস্থল নয়।'],
      ],
      sources: [
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
      ],
    },
    en: {
      seoTitle: 'International Mother Language Day — UNESCO Recognition and Origin',
      description:
        'How International Mother Language Day began: the Bangladeshi proposal, the 1999 UNESCO decision, global observance since 2000, and the relationship to the Central Shaheed Minar.',
      h1: 'International Mother Language Day',
      lead:
        '21 February was approved as International Mother Language Day at the 1999 UNESCO General Conference and has been observed worldwide since 2000. Its foundation is the memory of Bangladesh’s Language Movement.',
      facts: [
        { label: 'Approved', value: '1999, UNESCO' },
        { label: 'Observed since', value: '2000' },
        { label: 'Proposed by', value: 'Bangladesh' },
        { label: 'Purpose', value: 'Protecting linguistic diversity' },
      ],
      sections: [
        {
          heading: 'How the proposal came about',
          paragraphs: [
            'Bangladesh put forward the proposal at the 1999 UNESCO General Conference to declare 21 February International Mother Language Day, driven by the memory of the Language Movement and by expatriate Bengali initiatives.',
            'The aim of the UNESCO decision was to highlight the importance of mother tongues and to draw attention to the preservation of smaller and endangered languages.',
          ],
        },
        {
          heading: 'What changed after recognition',
          paragraphs: [
            'Since 2000, 21 February has been observed worldwide in many languages and countries, with tributes and discussions in schools, museums, language organisations and Bengali communities abroad.',
            'The local day of remembrance thus became an international occasion.',
          ],
        },
        {
          heading: 'An important clarification',
          paragraphs: [
            'The UNESCO recognition concerns the date, 21 February — not the structure called the Central Shaheed Minar. The Central Shaheed Minar is not a UNESCO World Heritage Site.',
            'Knowing this distinction helps visitors and researchers place the monument’s cultural importance accurately.',
          ],
        },
      ],
      faq: [
        ['When was International Mother Language Day declared?', 'The UNESCO General Conference approved 21 February as International Mother Language Day in 1999, and it has been observed since 2000.'],
        ['Who proposed it?', 'The proposal to recognise 21 February as an international day came from Bangladesh.'],
        ['Is the Shaheed Minar a UNESCO World Heritage Site?', 'No. The UNESCO recognition concerns the date 21 February, not the monument, which is not a World Heritage Site.'],
      ],
      sources: [
        { label: 'UNESCO — International Mother Language Day', href: 'https://www.unesco.org/en/days/mother-language' },
        { label: 'Banglapedia — International Mother Language Day', href: 'https://en.banglapedia.org/index.php/International_Mother_Language_Day' },
      ],
    },
  },

  {
    path: 'history/shaheed-minar-vs-savar',
    section: 'history',
    priority: 'P1',
    related: ['history/language-movement-1952', 'history/international-mother-language-day', 'nearby/suhrawardy-udyan', 'visit/from-airport'],
    bn: {
      seoTitle: 'কেন্দ্রীয় শহীদ মিনার ও সাভার জাতীয় স্মৃতিসৌধের পার্থক্য',
      description:
        'কেন্দ্রীয় শহীদ মিনার ও সাভারের জাতীয় স্মৃতিসৌধ—দুই স্মৃতিসৌধ কী স্মরণ করে, কোথায় অবস্থিত এবং কেন আন্তর্জাতিক দর্শকদের কাছে এরা সহজে গুলিয়ে যায়।',
      h1: 'কেন্দ্রীয় শহীদ মিনার বনাম সাভার জাতীয় স্মৃতিসৌধ',
      lead:
        'দুটি স্মৃতিসৌধ দেখতে আলাদা এবং ভিন্ন ইতিহাস বহন করে: ঢাকার কেন্দ্রীয় শহীদ মিনার ১৯৫২ সালের ভাষা আন্দোলনের শহীদদের স্মরণে, আর সাভারের জাতীয় স্মৃতিসৌধ ১৯৭১ সালের মুক্তিযুদ্ধের শহীদদের স্মরণে গড়া।',
      facts: [
        { label: 'কেন্দ্রীয় শহীদ মিনার', value: '১৯৫২ ভাষা আন্দোলন · ঢাকা' },
        { label: 'জাতীয় স্মৃতিসৌধ', value: '১৯৭১ মুক্তিযুদ্ধ · সাভার' },
        { label: 'নকশা (সাভার)', value: 'সৈয়দ মাইনুল হোসেন' },
        { label: 'সাধারণ ভুল', value: 'দুটিকে একই স্মারক ভাবা' },
      ],
      sections: [
        {
          heading: 'দুটি স্মারক, দুটি ইতিহাস',
          paragraphs: [
            'কেন্দ্রীয় শহীদ মিনার বাংলা ভাষার মর্যাদার দাবিতে ১৯৫২ সালে প্রাণ দেওয়া মানুষদের স্মরণ করে এবং ঢাকা মেডিকেল কলেজ ও ঢাকা বিশ্ববিদ্যালয় এলাকায় অবস্থিত।',
            'সাভারের জাতীয় স্মৃতিসৌধ ১৯৭১ সালের মুক্তিযুদ্ধে প্রাণ দেওয়া মানুষদের স্মরণ করে। এটি ঢাকার উত্তর-পশ্চিমে সাভারে, ঢাকা–আরিচা মহাসড়কের পাশে অবস্থিত এবং এর নকশা করেন সৈয়দ মাইনুল হোসেন।',
          ],
        },
        {
          heading: 'গঠন ও পরিবেশের পার্থক্য',
          paragraphs: [
            'সাভারের স্মৃতিসৌধ কয়েকটি ত্রিভুজাকৃতি কাঠামোর সমন্বয়ে গড়া, যা প্রশস্ত প্রাঙ্গণ ও সবুজ পরিবেশে দাঁড়িয়ে আছে; সেখানে যেতে সড়কপথে যাত্রার প্রয়োজন হয়।',
            'কেন্দ্রীয় শহীদ মিনার নগরকেন্দ্রের ভেতরে, খোলা চত্বরে অবস্থিত এবং হেঁটে বা স্বল্প দূরত্বের যানবাহনে সহজে পৌঁছানো যায়।',
          ],
        },
        {
          heading: 'কেন দুটিকে গুলিয়ে ফেলা হয়',
          paragraphs: [
            'দুটিই “স্মৃতিসৌধ” নামে পরিচিত, দুটিতেই ফুল দেওয়া হয় এবং দুটি জাতীয় স্মরণের কেন্দ্র—তাই বিদেশি দর্শকদের কাছে এরা সহজে মিলিয়ে যায়।',
            'তফাতটি হলো সময় ও বিষয়: ভাষা আন্দোলন (১৯৫২) এবং মুক্তিযুদ্ধ (১৯৭১) ভিন্ন ঐতিহাসিক পর্ব।',
          ],
        },
      ],
      faq: [
        ['সাভারের জাতীয় স্মৃতিসৌধ কী স্মরণ করে?', '১৯৭১ সালের মুক্তিযুদ্ধে প্রাণ দেওয়া মানুষদের স্মরণে এটি গড়া; নকশা করেন সৈয়দ মাইনুল হোসেন।'],
        ['কেন্দ্রীয় শহীদ মিনার কোন যুদ্ধের?', 'এটি কোনো যুদ্ধের নয়—এটি ১৯৫২ সালের ভাষা আন্দোলনের শহীদদের স্মৃতিসৌধ।'],
        ['কোনটি ঢাকায়?', 'কেন্দ্রীয় শহীদ মিনার ঢাকা শহরের কেন্দ্রে; জাতীয় স্মৃতিসৌধ ঢাকার বাইরে সাভারে।'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
    en: {
      seoTitle: 'Central Shaheed Minar vs Savar National Martyrs’ Memorial',
      description:
        'How the Central Shaheed Minar in Dhaka differs from the National Martyrs’ Memorial in Savar: what each commemorates, where each is located, and why visitors confuse them.',
      h1: 'Central Shaheed Minar vs the National Martyrs’ Memorial at Savar',
      lead:
        'The two monuments look different and carry different histories. The Central Shaheed Minar in Dhaka commemorates those who died in the 1952 Language Movement; the National Martyrs’ Memorial at Savar commemorates those who died in the 1971 Liberation War.',
      facts: [
        { label: 'Central Shaheed Minar', value: '1952 Language Movement · Dhaka' },
        { label: 'National Martyrs’ Memorial', value: '1971 Liberation War · Savar' },
        { label: 'Savar design', value: 'Syed Mainul Hossain' },
        { label: 'Common mix-up', value: 'Treating the two as one monument' },
      ],
      sections: [
        {
          heading: 'Two monuments, two histories',
          paragraphs: [
            'The Central Shaheed Minar commemorates those who died in 1952 demanding dignity for the Bengali language, and it stands in the Dhaka Medical College and University of Dhaka area.',
            'The National Martyrs’ Memorial at Savar commemorates those who died in the 1971 Liberation War. It stands at Savar, north-west of Dhaka, beside the Dhaka–Aricha highway, and was designed by Syed Mainul Hossain.',
          ],
        },
        {
          heading: 'Differences in form and setting',
          paragraphs: [
            'The Savar memorial is composed of several triangular structures set in a broad, green landscape, and reaching it requires a road journey out of the city.',
            'The Central Shaheed Minar sits inside the city centre in an open plaza, reachable on foot or by a short ride.',
          ],
        },
        {
          heading: 'Why the two get confused',
          paragraphs: [
            'Both are known as “sriti soudho” (memorial), both receive flowers, and both are national focal points of remembrance, so international visitors easily merge them.',
            'The distinction is one of period and subject: the Language Movement (1952) and the Liberation War (1971) are different historical chapters.',
          ],
        },
      ],
      faq: [
        ['What does the National Martyrs’ Memorial at Savar commemorate?', 'Those who died in the 1971 Liberation War. It was designed by Syed Mainul Hossain.'],
        ['Which war does the Central Shaheed Minar relate to?', 'None. It is the memorial to those who died in the 1952 Language Movement.'],
        ['Which one is in Dhaka?', 'The Central Shaheed Minar is in central Dhaka; the National Martyrs’ Memorial is outside the city at Savar.'],
      ],
      sources: [
        { label: 'Banglapedia — Shaheed Minar', href: 'https://en.banglapedia.org/index.php/Shaheed_Minar' },
        { label: 'Bangladesh Tourism Board', href: 'https://beautifulbangladesh.gov.bd/loc/dhaka/92' },
      ],
    },
  },

  {
    path: 'history/dhaka-medical-college-1952',
    section: 'history',
    priority: 'P1',
    related: ['history/language-movement-1952', 'history/first-shaheed-minar', 'visit/location-map', 'history/language-martyrs'],
    bn: {
      seoTitle: 'ঢাকা মেডিকেল কলেজ ও ১৯৫২ সালের ভাষা আন্দোলন',
      description:
        'কেন কেন্দ্রীয় শহীদ মিনার ঢাকা মেডিকেল কলেজের কাছে অবস্থিত: ২১ ফেব্রুয়ারির গুলিবর্ষণ, আহতদের হাসপাতালে নেওয়া এবং প্রথম অস্থায়ী স্মৃতিস্তম্ভ গড়ার স্থান।',
      h1: 'ঢাকা মেডিকেল কলেজ ও ভাষা আন্দোলন',
      lead:
        'কেন্দ্রীয় শহীদ মিনার ঢাকা মেডিকেল কলেজের কাছেই অবস্থিত, কারণ ১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারির গুলিবর্ষণ এই এলাকাতেই ঘটে এবং প্রথম অস্থায়ী স্মৃতিস্তম্ভও এখানেই গড়া হয়।',
      facts: [
        { label: 'ঘটনার এলাকা', value: 'ঢাকা মেডিকেল কলেজ ও হাসপাতাল' },
        { label: 'তারিখ', value: '২১–২২ ফেব্রুয়ারি ১৯৫২' },
        { label: 'প্রথম স্মৃতিস্তম্ভ', value: 'একই এলাকায়, ২৩ ফেব্রুয়ারি' },
        { label: 'বর্তমান অবস্থান', value: 'সেক্রেটারিয়েট রোড সংলগ্ন' },
      ],
      sections: [
        {
          heading: 'গুলিবর্ষণের স্থান',
          paragraphs: [
            '২১ ফেব্রুয়ারি ছাত্র মিছিল ঢাকা মেডিকেল কলেজ এলাকায় পৌঁছালে পুলিশ গুলি চালায়। আহতদের অনেককে ঢাকা মেডিকেল কলেজ হাসপাতালে নেওয়া হয়, আর সেখানেই কেউ কেউ প্রাণ হারান।',
            'মেডিকেল কলেজের শিক্ষার্থীরা নিজেরাই আন্দোলনে সক্রিয় ছিলেন এবং আহতদের সেবায় অংশ নেন—এইভাবে প্রতিষ্ঠানটি ঘটনার কেন্দ্রে চলে আসে।',
          ],
        },
        {
          heading: 'প্রথম স্মৃতিস্তম্ভ এখানেই',
          paragraphs: [
            '২৩ ফেব্রুয়ারি রাতভর শিক্ষার্থীরা কলেজ প্রাঙ্গণ এলাকায় একটি অস্থায়ী স্মৃতিস্তম্ভ তৈরি করেন। সেই স্থান ও তার আশপাশই পরে স্থায়ী স্মৃতিসৌধের জায়গা হিসেবে বিবেচিত হয়।',
            'ফলে স্মৃতিসৌধের অবস্থান ঐতিহাসিক ঘটনার সঙ্গে সরাসরি যুক্ত, কেবল আনুষ্ঠানিক নয়।',
          ],
        },
        {
          heading: 'আজ কী দেখবেন',
          paragraphs: [
            'বর্তমানে স্মৃতিসৌধটি সেক্রেটারিয়েট রোড সংলগ্ন এলাকায়, ঢাকা মেডিকেল কলেজ গেটের কাছে। এর পাশেই হাসপাতাল ও কলেজ ক্যাম্পাস, এবং সামান্য দূরেই ঢাকা বিশ্ববিদ্যালয় ও বাংলা একাডেমি এলাকা।',
            'দর্শকদের জন্য এটি বোঝা সহজ করে দেয় যে কেন এই এলাকাটি ভাষা আন্দোলনের স্মৃতির কেন্দ্র।',
          ],
        },
      ],
      faq: [
        ['শহীদ মিনার কেন ঢাকা মেডিকেল কলেজের কাছে?', 'কারণ ১৯৫২ সালের ২১ ও ২২ ফেব্রুয়ারির গুলিবর্ষণ এই এলাকাতেই ঘটে এবং আহতদের হাসপাতালে নেওয়া হয়; ২৩ ফেব্রুয়ারি প্রথম অস্থায়ী স্মৃতিস্তম্ভও এখানেই গড়া হয়।'],
        ['ঢাকা মেডিকেল কলেজের শিক্ষার্থীদের ভূমিকা কী ছিল?', 'শিক্ষার্থীরা আন্দোলনে সক্রিয় ছিলেন, আহতদের সেবায় অংশ নেন এবং প্রথম অস্থায়ী স্মৃতিস্তম্ভ নির্মাণ করেন।'],
        ['আজ স্মৃতিসৌধের ঠিকানা কী?', 'সেক্রেটারিয়েট রোড সংলগ্ন এলাকা, ঢাকা মেডিকেল কলেজ গেটের কাছে; প্লাস কোড P9GW+VJ, ঢাকা।'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
      ],
    },
    en: {
      seoTitle: 'Dhaka Medical College and the 1952 Language Movement',
      description:
        'Why the Central Shaheed Minar stands beside Dhaka Medical College: the shootings of 21 February 1952, the wounded taken to the hospital, and where the first temporary memorial was built.',
      h1: 'Dhaka Medical College and the Language Movement',
      lead:
        'The Central Shaheed Minar stands close to Dhaka Medical College because the shootings of 21 and 22 February 1952 happened in this area, and the first temporary memorial was built here too.',
      facts: [
        { label: 'Area of events', value: 'Dhaka Medical College and Hospital' },
        { label: 'Dates', value: '21–22 February 1952' },
        { label: 'First memorial', value: 'Same area, 23 February' },
        { label: 'Present site', value: 'Beside Secretariat Road' },
      ],
      sections: [
        {
          heading: 'Where the shooting happened',
          paragraphs: [
            'On 21 February, when the student procession reached the Dhaka Medical College area, police opened fire. Many of the wounded were taken to Dhaka Medical College Hospital, and some died there.',
            'Medical college students were themselves active in the movement and helped care for the wounded, which placed the institution at the centre of the events.',
          ],
        },
        {
          heading: 'The first memorial was built here',
          paragraphs: [
            'On 23 February, students built a temporary memorial overnight in the college grounds area. That site and its surroundings were later treated as the location for the permanent monument.',
            'The monument’s location is therefore tied directly to the historical events, not only to administrative choice.',
          ],
        },
        {
          heading: 'What you see today',
          paragraphs: [
            'The monument now stands beside Secretariat Road, near the Dhaka Medical College gate. The hospital and college campus are adjacent, and the University of Dhaka and Bangla Academy area are a short distance away.',
            'This helps visitors understand why this particular area became the focal point of the Language Movement’s memory.',
          ],
        },
      ],
      faq: [
        ['Why is the Shaheed Minar near Dhaka Medical College?', 'Because the shootings of 21 and 22 February 1952 happened in this area, the wounded were taken to the hospital here, and the first temporary memorial was built here on 23 February.'],
        ['What was the role of Dhaka Medical College students?', 'They were active in the movement, helped care for the wounded and built the first temporary memorial.'],
        ['What is the monument’s address today?', 'Beside Secretariat Road, near the Dhaka Medical College gate; Plus Code P9GW+VJ, Dhaka.'],
      ],
      sources: [
        { label: 'Banglapedia — Language Movement', href: 'https://en.banglapedia.org/index.php/Language_Movement' },
        { label: 'Dhaka Medical College (official)', href: 'https://dmc.gov.bd/' },
      ],
    },
  },
];
