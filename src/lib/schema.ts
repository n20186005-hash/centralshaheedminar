import { ATTRACTION } from '../data/site';
import { SITE, type Locale } from '../i18n';

type Faq = [string, string][];

/** দুই ভাষার পাতায় যেন একই সত্তা বোঝায়, তাই @id সবসময় সাইটের মূল ঠিকানায় বাঁধা। */
const ATTRACTION_ID = `${SITE}/#attraction`;

export function websiteSchema(locale: Locale) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE}/#website`,
    url: SITE,
    name: locale === 'bn' ? 'কেন্দ্রীয় শহীদ মিনার — ঢাকা ভ্রমণ নির্দেশিকা' : 'Central Shaheed Minar — Dhaka Travel Guide',
    inLanguage: locale === 'bn' ? 'bn-BD' : 'en',
    publisher: { '@id': `${SITE}/#organization` },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE}/#organization`,
    name: 'Central Shaheed Minar Guide',
    url: SITE,
    description:
      'Independent, non-commercial visitor guide to the Central Shaheed Minar (কেন্দ্রীয় শহীদ মিনার) in Dhaka, Bangladesh.',
  };
}

export function attractionSchema(locale: Locale, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarksOrHistoricalBuildings'],
    '@id': ATTRACTION_ID,
    name: ATTRACTION.name[locale],
    alternateName: ATTRACTION.alternateName,
    description,
    url: locale === 'bn' ? `${SITE}/` : `${SITE}/en/`,
    image: [ATTRACTION.photos.hero, ATTRACTION.photos.wide, ATTRACTION.photos.portrait],
    inLanguage: locale === 'bn' ? 'bn-BD' : 'en',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ATTRACTION.streetAddress,
      addressLocality: ATTRACTION.city[locale],
      postalCode: ATTRACTION.postalCode,
      addressCountry: ATTRACTION.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ATTRACTION.geo.latitude,
      longitude: ATTRACTION.geo.longitude,
    },
    hasMap: ATTRACTION.mapsUrl,
    isAccessibleForFree: true,
    touristType: ['history', 'culture', 'language heritage'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ATTRACTION.rating.value,
      reviewCount: ATTRACTION.rating.count,
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [ATTRACTION.mapsUrl, 'https://en.banglapedia.org/index.php?title=Shaheed_Minar'],
  };
}

export function faqSchema(items: Faq) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
