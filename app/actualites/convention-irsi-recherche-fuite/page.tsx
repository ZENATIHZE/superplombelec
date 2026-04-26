import type { Metadata } from 'next';
import Link from 'next/link';
import CTAStrip from '@/components/CTAStrip';
import { getArticleBySlug } from '@/lib/articles';
import { SITE } from '@/lib/site';
import { breadcrumbJsonLd } from '@/lib/jsonld';

const SLUG = 'convention-irsi-recherche-fuite';

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
          <time dateTime={article.publishedAt}>15 avril 2026</time>
          <span>·</span>
          <span>{article.readingTime} de lecture</span>
        </div>

        <h1 className="h1 mb-4">{article.title}</h1>
        <p className="text-xl text-slate-600 leading-relaxed mb-8">{article.description}</p>

        <div className="aspect-video bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl mb-10 overflow-hidden">
          <svg viewBox="0 0 800 450" className="w-full h-full">
            <rect width="800" height="450" fill="#1f6993"/>
            <rect x="240" y="80" width="320" height="290" rx="15" fill="white"/>
            <rect x="270" y="130" width="260" height="10" fill="#3D9FD4"/>
            <rect x="270" y="160" width="200" height="6" fill="#cbd5e1"/>
            <rect x="270" y="180" width="220" height="6" fill="#cbd5e1"/>
            <rect x="270" y="200" width="180" height="6" fill="#cbd5e1"/>
            <rect x="270" y="220" width="160" height="6" fill="#cbd5e1"/>
            <rect x="270" y="290" width="120" height="40" rx="8" fill="#F2C203"/>
            <text x="330" y="316" fontFamily="Arial" fontSize="22" fontWeight="900" fill="#185478" textAnchor="middle">IRSI</text>
            <circle cx="640" cy="360" r="60" fill="#F2C203"/>
            <text x="640" y="372" fontFamily="Arial" fontSize="44" fontWeight="900" fill="#185478" textAnchor="middle">€</text>
          </svg>
        </div>

        <div className="prose prose-slate max-w-none prose-headings:text-brand-700 prose-h2:h2 prose-h3:h3 prose-a:text-brand-600">
          <p className="lead text-lg leading-relaxed">
            Vous avez subi un dégât des eaux ? La <strong>convention IRSI</strong> peut prendre en
            charge tout ou partie de votre <strong>recherche de fuite non destructive</strong>. Voici
            comment elle fonctionne et comment en bénéficier sans avancer le moindre euro.
          </p>

          <h2 className="h2 mt-10 mb-4">Qu&apos;est-ce que la convention IRSI ?</h2>
          <p>
            La convention <strong>IRSI</strong> (Indemnisation et Recours des Sinistres Immeubles)
            est entrée en vigueur le 1<sup>er</sup> juin 2018. Elle simplifie la gestion des dégâts
            des eaux entre assureurs et remplace l&apos;ancienne convention CIDRE pour les sinistres
            au-delà de 1 600 € HT, avec un plafond de 5 000 € HT.
          </p>
          <p>
            Concrètement, elle permet à un seul assureur — celui de l&apos;occupant chez qui le
            sinistre est constaté — d&apos;instruire le dossier et d&apos;indemniser, puis de se
            retourner contre l&apos;assureur du responsable. Pour vous, c&apos;est un gain de temps
            considérable.
          </p>

          <h2 className="h2 mt-10 mb-4">Quel plafond pour la recherche de fuite ?</h2>
          <ul>
            <li><strong>Sinistres entre 0 et 1 600 € HT</strong> : convention CIDRE, recherche de fuite plafonnée à 1 600 € HT.</li>
            <li><strong>Sinistres entre 1 600 € HT et 5 000 € HT</strong> : convention IRSI niveau 1, recherche de fuite incluse.</li>
            <li><strong>Sinistres au-delà de 5 000 € HT</strong> : IRSI niveau 2, expertise contradictoire, recherche de fuite remboursée sur facture.</li>
          </ul>

          <h2 className="h2 mt-10 mb-4">Comment se faire rembourser sa recherche de fuite ?</h2>
          <ol>
            <li><strong>Déclarez le sinistre à votre assurance habitation</strong> dans les 5 jours ouvrés.</li>
            <li><strong>Demandez l&apos;accord</strong> de votre assureur avant de mandater un prestataire de recherche de fuite (sauf urgence).</li>
            <li><strong>Faites intervenir un professionnel certifié</strong>, équipé pour la recherche non destructive (caméra thermique, gaz traceur, corrélateur acoustique). Un rapport conforme est indispensable.</li>
            <li><strong>Transmettez la facture et le rapport</strong> à votre assureur, qui rembourse selon le plafond IRSI applicable.</li>
          </ol>

          <h2 className="h2 mt-10 mb-4">Pourquoi choisir une recherche de fuite non destructive ?</h2>
          <p>
            Les compagnies d&apos;assurance privilégient massivement la recherche de fuite non
            destructive. La raison ? Elle permet d&apos;éviter les <strong>dégâts collatéraux</strong>
            (casser un mur ou un sol pour rien) et limite les frais de remise en état.
          </p>
          <p>
            Notre rapport, conforme à la <strong>norme NF EN 13160</strong>, est accepté par
            l&apos;ensemble des assureurs (AXA, Allianz, MAIF, MACIF, Generali, Groupama, Matmut…).
          </p>

          <h2 className="h2 mt-10 mb-4">Combien coûte une recherche de fuite en 2026 ?</h2>
          <p>
            En Île-de-France, le tarif d&apos;une recherche de fuite non destructive se situe entre
            <strong> 250 et 600 € TTC</strong> selon la complexité, la durée et les techniques mobilisées.
            La majorité des cas est résolue en moins de 2 heures.
          </p>

          <h2 className="h2 mt-10 mb-4">À retenir</h2>
          <p>
            La convention IRSI vous permet d&apos;obtenir le <strong>remboursement intégral</strong>
            de votre recherche de fuite dans la majorité des cas, à condition de passer par un
            professionnel équipé et certifié. <Link href="/contact">Contactez-nous</Link> pour un
            devis gratuit et nous nous occupons du dossier avec votre assureur.
          </p>
        </div>

        <div className="mt-12 p-6 bg-brand-50 border border-brand-200 rounded-2xl">
          <h2 className="font-bold text-brand-700 text-lg mb-2">Besoin d&apos;une recherche de fuite ?</h2>
          <p className="text-slate-700 mb-4">Devis gratuit, intervention sous 1 h en Île-de-France, dossier IRSI géré pour vous.</p>
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
