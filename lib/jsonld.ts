// Schemas JSON-LD pour Google (Rich Snippets, Knowledge Panel)
import { SITE } from './site';

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    legalName: SITE.legalName,
    image: `${SITE.url}/logo.svg`,
    logo: `${SITE.url}/logo.svg`,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    description: SITE.description,
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postalCode,
      addressLocality: SITE.address.city,
      addressRegion: 'Île-de-France',
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Île-de-France' },
      { '@type': 'City', name: 'Rueil-Malmaison' },
      { '@type': 'City', name: 'Paris' },
      { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' },
    ],
    serviceType: 'Recherche de fuite non destructive',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '22:00',
      },
    ],
    sameAs: Object.values(SITE.social).filter(Boolean),
    foundingDate: SITE.founded,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Méthodes de détection',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Caméra thermique infrarouge' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gaz traceur' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corrélateur acoustique' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Inspection caméra endoscopique' } },
      ],
    },
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'fr-FR',
    publisher: { '@id': `${SITE.url}/#business` },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}
