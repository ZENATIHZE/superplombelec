import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Tracking, { GTMNoScript } from '@/components/Tracking';
import { SITE } from '@/lib/site';
import { localBusinessJsonLd, websiteJsonLd } from '@/lib/jsonld';

export const viewport: Viewport = {
  themeColor: '#3D9FD4',
  width: 'device-width',
  initialScale: 1,
};

// Mots-clés SEO larges, ciblés Google + Google Ads.
// Stratégie : courte traîne (concurrentielle), moyenne traîne (qualifiée),
// longue traîne (forte intention d'achat), géolocalisée (SEO local).
export const SEO_KEYWORDS = [
  // Recherche de fuite — courte traîne
  'recherche de fuite',
  'recherche de fuite non destructive',
  'détection de fuite',
  'détection fuite eau',
  'fuite eau cachée',
  'fuite plomberie invisible',
  // Méthodes — moyenne traîne
  'caméra thermique fuite',
  'thermographie infrarouge fuite',
  'gaz traceur azote-hydrogène',
  'corrélateur acoustique fuite',
  'détection électroacoustique',
  'caméra endoscopique canalisation',
  'fluorescéine traceur fuite',
  // Cas d'usage — longue traîne
  'fuite plancher chauffant',
  'fuite canalisation encastrée',
  'recherche fuite toiture-terrasse',
  'fuite salle de bain non destructive',
  'recherche fuite piscine',
  'fuite sous dalle béton',
  'fuite mur enterré',
  // Assurance / IRSI
  'recherche fuite assurance',
  'convention IRSI',
  'remboursement recherche de fuite',
  'rapport recherche de fuite assureur',
  'CIDRE recherche de fuite',
  'dégât des eaux assurance habitation',
  // Géolocalisé — Île-de-France
  'recherche de fuite Paris',
  'recherche de fuite Île-de-France',
  'recherche de fuite Rueil-Malmaison',
  'recherche de fuite 92',
  'recherche de fuite Hauts-de-Seine',
  'recherche de fuite Nanterre',
  'recherche de fuite Boulogne-Billancourt',
  'recherche de fuite Neuilly-sur-Seine',
  'recherche de fuite La Défense',
  'recherche de fuite Versailles',
  'recherche de fuite Saint-Germain-en-Laye',
  'plombier détection fuite Paris',
  // Urgence
  'recherche fuite urgent',
  'détection fuite 24h',
  'plombier urgence fuite',
  'intervention rapide fuite',
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.baseline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.legalName,
  category: 'Services à domicile',
  applicationName: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    title: `${SITE.name} — ${SITE.baseline}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      { url: '/og.svg', width: 1200, height: 630, alt: SITE.name },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.baseline}`,
    description: SITE.description,
    images: ['/og.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  verification: SITE.gscVerification ? { google: SITE.gscVerification } : undefined,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo-mark.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    // Geo tags - utiles pour Google Ads et SEO local
    'geo.region': 'FR-IDF',
    'geo.placename': 'Rueil-Malmaison',
    'geo.position': `${SITE.geo.lat};${SITE.geo.lng}`,
    'ICBM': `${SITE.geo.lat}, ${SITE.geo.lng}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Tracking />
        <GTMNoScript />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:bg-white focus:text-brand-700 focus:p-3 focus:rounded focus:z-50">
          Aller au contenu
        </a>
        <Header />
        <main id="main" className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
