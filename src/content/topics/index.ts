import type { Topic, TopicSection } from './types';
import { historyTopics } from './history';
import { visitTopics } from './visit';
import { guideTopics } from './guides';
import { nearbyTopics } from './nearby';
import { foodTopics } from './food';
import { practicalTopics } from './practical';

/** আটটি শ্রেণির সব বিষয়পাতা এক জায়গায়। */
export const allTopics: Topic[] = [...historyTopics, ...visitTopics, ...guideTopics, ...nearbyTopics, ...foodTopics, ...practicalTopics];

const byPath = new Map(allTopics.map((topic) => [topic.path, topic]));

export function getTopic(path: string): Topic | undefined {
  return byPath.get(path);
}

export function topicsBySection(section: TopicSection): Topic[] {
  return allTopics.filter((topic) => topic.section === section);
}

export const sectionLabels: Record<TopicSection, { bn: string; en: string }> = {
  history: { bn: 'ইতিহাস ও ঐতিহ্য', en: 'History and heritage' },
  visit: { bn: 'পরিকল্পনা ও যাতায়াত', en: 'Planning and getting there' },
  guides: { bn: 'পরিদর্শন নির্দেশিকা', en: 'Visit guides' },
  nearby: { bn: 'আশপাশের স্থান', en: 'Nearby places' },
  itineraries: { bn: 'ভ্রমণপথ', en: 'Itineraries' },
  food: { bn: 'খাবার ও বিশ্রাম', en: 'Food and rest' },
  planning: { bn: 'ব্যবহারিক তথ্য', en: 'Practical information' },
  stay: { bn: 'থাকার ব্যবস্থা', en: 'Where to stay' },
};

export type { Topic, TopicSection } from './types';
