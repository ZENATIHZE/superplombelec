import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES } from '@/lib/articles';
import { SITE } from '@/lib/site';
import CTAStrip from '@/components/CTAStrip';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Actualités — Recherche de fuite et conseils pratiques',
  description:
    'Conseils, guides et actualités sur la recherche de fuite non destructive : convention IRSI, méthodes de détection, dégâts des eaux, recommandations pratiques.',
  alternates: { canonical: '/actualites' },
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

export default function ActualitesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px py-14 lg:py-20 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Accueil</Link> / <span className="text-slate-700">Actualités</span>
          </nav>
          <span className="eyebrow">Blog · Conseils pratiques</span>
          <h1 className="h1 mt-2">Actualités & conseils</h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            Tout ce qu&apos;il faut savoir sur la recherche de fuite non destructive,
            les démarches d&apos;assurance et les techniques de détection.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">
            {ARTICLES.map((a) => (
              <article key={a.slug} className="group">
                <Link href={`/actualites/${a.slug}`} className="block">
                  <div className="aspect-video bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-5 overflow-hidden relative">
                    <ArticleCover slug={a.slug} />
                    <span className="absolute top-3 left-3 bg-white/95 text-brand-700 px-3 py-1 rounded-full text-xs font-bold">
                      {a.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2">
                    <time dateTime={a.publishedAt}>{formatDate(a.publishedAt)}</time>
                    <span>·</span>
                    <span>{a.readingTime} de lecture</span>
                  </div>
                  <h2 className="text-xl lg:text-2xl font-bold text-brand-700 group-hover:text-brand-600 transition-colors mb-3">
                    {a.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">{a.description}</p>
                  <span className="text-brand-600 font-bold text-sm group-hover:underline">
                    Lire l&apos;article →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', url: SITE.url },
              { name: 'Actualités', url: `${SITE.url}/actualites` },
            ])
          ),
        }}
      />
    </>
  );
}

function ArticleCover({ slug }: { slug: string }) {
  if (slug === 'convention-irsi-recherche-fuite') {
    return (
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <rect width="400" height="225" fill="#1f6993"/>
        <rect x="120" y="40" width="160" height="145" rx="10" fill="white"/>
        <rect x="135" y="65" width="130" height="6" fill="#3D9FD4"/>
        <rect x="135" y="80" width="100" height="4" fill="#cbd5e1"/>
        <rect x="135" y="92" width="110" height="4" fill="#cbd5e1"/>
        <rect x="135" y="104" width="90" height="4" fill="#cbd5e1"/>
        <rect x="135" y="120" width="80" height="4" fill="#cbd5e1"/>
        <rect x="135" y="155" width="60" height="20" rx="4" fill="#F2C203"/>
        <text x="165" y="170" fontFamily="Arial" fontSize="11" fontWeight="700" fill="#185478">IRSI</text>
        <circle cx="320" cy="180" r="32" fill="#F2C203"/>
        <text x="320" y="186" fontFamily="Arial" fontSize="22" fontWeight="900" fill="#185478" textAnchor="middle">€</text>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 225" className="w-full h-full">
      <defs>
        <radialGradient id="hot" cx="30%" cy="50%" r="40%">
          <stop offset="0%" stopColor="#F2C203" stopOpacity="1"/>
          <stop offset="60%" stopColor="#ff6b35" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#1f6993" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="225" fill="#185478"/>
      <ellipse cx="120" cy="115" rx="70" ry="55" fill="url(#hot)"/>
      <g stroke="white" strokeWidth="2" fill="none" opacity="0.9">
        <circle cx="120" cy="115" r="28"/>
      </g>
      <rect x="220" y="60" width="140" height="100" rx="8" fill="#3D9FD4"/>
      <rect x="240" y="80" width="100" height="6" fill="white" opacity="0.9"/>
      <rect x="240" y="95" width="80" height="4" fill="white" opacity="0.6"/>
      <text x="290" y="135" fontFamily="Arial" fontSize="11" fontWeight="700" fill="white" textAnchor="middle">N₂/H₂</text>
      <text x="200" y="200" fontFamily="Arial" fontSize="13" fontWeight="700" fill="#F2C203" textAnchor="middle">VS</text>
    </svg>
  );
}
