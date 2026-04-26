// Configuration centrale du site - modifiez ici vos coordonnées
export const SITE = {
  name: 'Super Plomb Elec',
  legalName: 'Super Plomb Elec',
  baseline: 'Recherche de fuite non destructive en Île-de-France',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.superplombelec.fr',
  description:
    "Super Plomb Elec : spécialiste de la recherche de fuite non destructive à Rueil-Malmaison et toute l'Île-de-France. Caméra thermique, gaz traceur, corrélateur acoustique — nous localisons votre fuite au millimètre, sans casser vos murs. Rapport assurance fourni. Devis gratuit.",
  phone: process.env.NEXT_PUBLIC_PHONE || '06 50 32 85 96',
  phoneE164: '+33650328596',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@superplombelec.fr',
  address: {
    street: '104 Avenue Albert 1er',
    postalCode: '92500',
    city: 'Rueil-Malmaison',
    region: 'Île-de-France',
    country: 'FR',
  },
  geo: { lat: 48.8763, lng: 2.1833 },
  hours: 'Lundi à Vendredi 8h30 — 19h',
  hoursStructured: { open: '08:30', close: '19:00', days: ['Mo', 'Tu', 'We', 'Th', 'Fr'] as const },
  founded: '2019',
  social: {
    facebook: '',
    instagram: '',
    google: '', // URL fiche Google Business (à remplir)
  },
  // Pour le widget Google Reviews automatique — remplir après avoir créé la clé API Google Places
  googlePlaceId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || '',
  siret: '',
  brandColors: {
    blue: '#3D9FD4',
    blueDark: '#2683B8',
    yellow: '#F2C203',
    yellowDark: '#D4A902',
  },
  gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  gaId: process.env.NEXT_PUBLIC_GA_ID,
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  googleAdsConversionLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL,
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
};
