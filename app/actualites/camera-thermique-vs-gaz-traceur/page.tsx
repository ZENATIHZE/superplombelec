import type { Metadata } from 'next';
import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';
import { getArticleBySlug } from '@/lib/articles';
import { SITE } from '@/lib/site';
import { breadcrumbJsonLd } from '@/lib/jsonld';

const SLUG = 'camera-thermique-vs-gaz-traceur';

export const metadata: Metadata = (() => {
  const a = getArticleBySlug(SLUG)!;
  return {
    title: a.title,
    description: a.description,
    keywords: a.keywords,
    alternates: { canonical: `/actualites/${SLUG}` },
    openGraph: { title: a.title, description: a.description, type: 'article', publishedTime: a.publishedAt },
  };
})();

export default function Page() {
  const article = getArticleBySlug(SLUG)!;
  return (
    <>
      <article className="container-px py-12 lg:py-16 max-w-3xl mx-auto">
        <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
          <Link href="/" className="hover:text-brand-600">Accueil</Link> /{' '}
          <Link href="/actualites" className="hover:text-brand-600">Actualités</Link> /{' '}
          <span className="text-slate-700">{article.category}</span>
        </nav>

        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full font-bold">{article.category}</span>
          <time dateTime={article.publishedAt}>20 mars 2026</time>
          <span>·</span>
          <span>{article.readingTime} de lecture</span>
        </div>

        <h1 className="h1 mb-4">{article.title}</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">{article.description}</p>

        <div className="aspect-video bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-10 overflow-hidden">
          <svg viewBox="0 0 800 450" className="w-full h-full">
            <defs>
              <radialGradient id="hot2" cx="30%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#F2C203" stopOpacity="1"/>
                <stop offset="60%" stopColor="#ff6b35" stopOpacity="0.7"/>
                <stop offset="100%" stopColor="#1f6993" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <rect width="800" height="450" fill="#185478"/>
            <ellipse cx="240" cy="225" rx="140" ry="110" fill="url(#hot2)"/>
            <g stroke="white" strokeWidth="3" fill="none">
              <circle cx="240" cy="225" r="55"/>
            </g>
            <rect x="450" y="120" width="280" height="200" rx="14" fill="#3D9FD4"/>
            <text x="590" y="240" fontFamily="Arial" fontSize="48" fontWeight="900" fill="white" textAnchor="middle">N₂/H₂</text>
            <text x="400" y="400" fontFamily="Arial" fontSize="32" fontWeight="900" fill="#F2C203" textAnchor="middle">VS</text>
          </svg>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-brand-700">
          <p className="lead text-lg leading-relaxed">
            Devant une fuite, deux technologies se distinguent : la <strong>caméra thermique
            infrarouge</strong> et le <strong>gaz traceur azote-hydrogène</strong>. Laquelle
            choisir ? Tout dépend de la nature et de la localisation de votre fuite.
          </p>

          <h2 className="h2 mt-10 mb-4">La caméra thermique infrarouge</h2>
          <p>
            La caméra thermique détecte les variations de température (à partir de 0,1 °C) sur
            les surfaces. Une fuite d&apos;eau chaude crée un point chaud visible, une fuite
            d&apos;eau froide crée un point froid. C&apos;est immédiat et silencieux.
          </p>
          <h3 className="h3 mt-6 mb-3">Idéal pour</h3>
          <ul>
            <li>Fuites de plancher chauffant (eau chaude, contraste thermique fort)</li>
            <li>Canalisations encastrées dans murs, sols ou plafonds</li>
            <li>Dégât des eaux récent où l&apos;eau est encore tiède</li>
            <li>Identification rapide d&apos;une zone de migration d&apos;humidité</li>
          </ul>
          <h3 className="h3 mt-6 mb-3">Limites</h3>
          <ul>
            <li>Inefficace si la fuite est sèche ou ancienne (température homogène)</li>
            <li>Difficile sur canalisations enterrées profondément</li>
            <li>Sensible aux ponts thermiques (faux positifs)</li>
          </ul>

          <h2 className="h2 mt-10 mb-4">Le gaz traceur azote-hydrogène (95/5)</h2>
          <p>
            Un mélange normalisé d&apos;azote (95 %) et d&apos;hydrogène (5 %) est injecté
            dans le réseau préalablement vidé. L&apos;hydrogène, plus léger que l&apos;air,
            s&apos;échappe précisément au point de fuite et remonte en surface, où il est
            détecté par un capteur très haute sensibilité (jusqu&apos;à 0,5 ppm).
          </p>
          <h3 className="h3 mt-6 mb-3">Idéal pour</h3>
          <ul>
            <li>Réseaux d&apos;eau froide (sans contraste thermique)</li>
            <li>Canalisations enterrées profondes</li>
            <li>Réseaux gaz et chauffage</li>
            <li>Fuites diffuses ou intermittentes</li>
            <li>Toiture-terrasse, dalle béton, vide sanitaire</li>
          </ul>
          <h3 className="h3 mt-6 mb-3">Limites</h3>
          <ul>
            <li>Nécessite de vidanger la canalisation</li>
            <li>Méthode plus longue (1 à 3 heures selon le réseau)</li>
            <li>Coût matériel plus élevé (gaz, capteur)</li>
          </ul>

          <h2 className="h2 mt-10 mb-4">Tableau comparatif</h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-50 text-brand-700">
                  <th className="text-left p-3 font-bold">Critère</th>
                  <th className="text-left p-3 font-bold">Caméra thermique</th>
                  <th className="text-left p-3 font-bold">Gaz traceur</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Précision</td><td className="p-3">±5 cm</td><td className="p-3">±2 mm</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Vitesse</td><td className="p-3">15-30 min</td><td className="p-3">1-3 h</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Vidange réseau</td><td className="p-3">Non</td><td className="p-3">Oui</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Plancher chauffant</td><td className="p-3">⭐⭐⭐⭐⭐</td><td className="p-3">⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Canalisation enterrée</td><td className="p-3">⭐⭐</td><td className="p-3">⭐⭐⭐⭐⭐</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3 font-semibold">Conformité IRSI</td><td className="p-3">Oui</td><td className="p-3">Oui</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="h2 mt-10 mb-4">En pratique : nous combinons les deux</h2>
          <p>
            Dans la majorité des cas, nous commençons par une analyse thermique pour identifier
            rapidement la zone suspecte, puis nous confirmons avec le gaz traceur ou le
            corrélateur acoustique pour une localisation millimétrique. Cette double approche
            garantit le diagnostic le plus fiable possible.
          </p>

          <h2 className="h2 mt-10 mb-4">À retenir</h2>
          <p>
            <strong>Caméra thermique</strong> = rapide, idéale pour les planchers chauffants et
            les fuites récentes. <strong>Gaz traceur</strong> = précision millimétrique, idéal
            pour les réseaux enterrés et les fuites diffuses. La meilleure méthode reste celle
            qui combine plusieurs technologies. <Link href="/contact">Contactez-nous</Link> :
            nous sélectionnons la meilleure technique pour votre cas.
          </p>
        </div>

        <div className="mt-12 p-6 bg-brand-50 border border-brand-200 rounded-2xl">
          <h2 className="font-bold text-brand-700 text-lg mb-2">Une fuite à diagnostiquer ?</h2>
          <p className="text-slate-700 mb-4">Devis gratuit, méthode adaptée à votre situation, intervention rapide en IDF.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE.phoneE164}`} className="btn-primary">📞 {SITE.phone}</a>
            <Link href="/contact" className="btn-secondary">Demander un devis</Link>
          </div>
        </div>
      </article>

      <CTAStrip variant="compact" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.description,
            datePublished: article.publishedAt,
            author: { '@id': `${SITE.url}/#business` },
            publisher: { '@id': `${SITE.url}/#business` },
            mainEntityOfPage: `${SITE.url}/actualites/${SLUG}`,
            keywords: article.keywords.join(', '),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', url: SITE.url },
              { name: 'Actualités', url: `${SITE.url}/actualites` },
              { name: article.title, url: `${SITE.url}/actualites/${SLUG}` },
            ])
          ),
        }}
      />
    </>
  );
}
