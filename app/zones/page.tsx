import type { Metadata } from 'next';
import Link from 'next/link';
import { ZONES, DEPARTMENTS } from '@/lib/zones';
import { SITE } from '@/lib/site';
import CTAStrip from '@/components/CTAStrip';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: "Zones d'intervention — Île-de-France",
  description:
    "Recherche de fuite non destructive dans toute l'Île-de-France : Paris (75), Hauts-de-Seine (92), Yvelines (78), Val-d'Oise (95), Seine-Saint-Denis (93), Val-de-Marne (94). Intervention rapide.",
  alternates: { canonical: '/zones' },
};

export default function ZonesPage() {
  // Regrouper par département
  const byDept: Record<string, typeof ZONES> = {};
  ZONES.forEach((z) => {
    byDept[z.department] = byDept[z.department] || [];
    byDept[z.department].push(z);
  });

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px py-14 lg:py-20 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Accueil</Link> / <span className="text-slate-700">Zones d&apos;intervention</span>
          </nav>
          <span className="eyebrow">Couverture Île-de-France</span>
          <h1 className="h1 mt-2">Zones d&apos;intervention</h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            Basés à <strong>Rueil-Malmaison (92)</strong>, nous intervenons dans toute l&apos;Île-de-France
            en moins d&apos;1 heure pour les urgences. Trouvez votre ville ci-dessous pour découvrir
            notre service local.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px space-y-12">
          {Object.entries(byDept).map(([dept, zones]) => (
            <div key={dept}>
              <h2 className="h3 mb-5 flex items-baseline gap-3">
                <span className="text-accent-500 font-mono">{dept}</span>
                <span>{DEPARTMENTS[dept]}</span>
                <span className="text-sm text-slate-500 font-normal">({zones.length} villes)</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {zones.map((z) => (
                  <Link
                    key={z.slug}
                    href={`/zones/${z.slug}`}
                    className={`px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                      z.highlight
                        ? 'bg-accent-50 border-accent-300 text-accent-800 hover:bg-accent-100'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50'
                    }`}
                  >
                    {z.name}
                    <span className="block text-xs text-slate-500 mt-0.5">{z.postalCode}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTAStrip />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', url: SITE.url },
              { name: "Zones d'intervention", url: `${SITE.url}/zones` },
            ])
          ),
        }}
      />
    </>
  );
}
