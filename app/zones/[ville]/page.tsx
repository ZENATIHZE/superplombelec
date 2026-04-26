import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ZONES, getZoneBySlug, DEPARTMENTS } from '@/lib/zones';
import { METHODS } from '@/lib/services';
import { SITE } from '@/lib/site';
import MethodCard from '@/components/MethodCard';
import CTAStrip from '@/components/CTAStrip';
import { breadcrumbJsonLd } from '@/lib/jsonld';

type Params = { ville: string };

// Génération statique de toutes les pages au build (idéal SEO + performance)
export async function generateStaticParams() {
  return ZONES.map((z) => ({ ville: z.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const zone = getZoneBySlug(params.ville);
  if (!zone) return {};
  const title = `Recherche de fuite ${zone.name} (${zone.postalCode}) — Sans casse`;
  const description = `Recherche de fuite non destructive à ${zone.name} (${zone.postalCode}) : caméra thermique, gaz traceur, corrélateur acoustique. Intervention sous 1 h. Devis gratuit. Rapport assurance.`;
  return {
    title,
    description,
    alternates: { canonical: `/zones/${zone.slug}` },
    openGraph: { title, description, url: `${SITE.url}/zones/${zone.slug}` },
  };
}

export default function ZonePage({ params }: { params: Params }) {
  const zone = getZoneBySlug(params.ville);
  if (!zone) notFound();

  const deptName = DEPARTMENTS[zone.department] ?? '';
  const otherZones = ZONES.filter((z) => z.department === zone.department && z.slug !== zone.slug).slice(0, 8);

  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px py-12 lg:py-16 max-w-5xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Accueil</Link> /{' '}
            <Link href="/zones" className="hover:text-brand-600">Zones</Link> /{' '}
            <span className="text-slate-700">{zone.name}</span>
          </nav>
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="eyebrow">{zone.postalCode} · {deptName}</span>
              <h1 className="h1 mt-2">
                Recherche de fuite à <span className="text-accent-500">{zone.name}</span>
              </h1>
              <p className="mt-5 text-lg text-slate-700 leading-relaxed">
                Spécialiste de la <strong>recherche de fuite non destructive à {zone.name}</strong>,
                Super Plomb Elec intervient en moins d&apos;1 h sur tout le secteur {zone.postalCode}.
                Caméra thermique infrarouge, gaz traceur azote-hydrogène, corrélateur acoustique :
                nous localisons la fuite au millimètre, sans casser vos murs.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href={`tel:${SITE.phoneE164}`} className="btn-primary text-lg">
                  📞 {SITE.phone}
                </a>
                <Link href="/contact" className="btn-secondary text-lg">Demander un devis</Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-600">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Disponibles aujourd&apos;hui à {zone.name}
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h2 className="font-bold text-brand-700 mb-3">Pourquoi nous choisir à {zone.name} ?</h2>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Intervention sous 1 h</li>
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Diagnostic sans casse ni démolition</li>
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Rapport conforme assurance (IRSI)</li>
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Devis gratuit, paiement après travaux</li>
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Note 4,9/5 sur Google</li>
                  <li className="flex gap-2"><span className="text-accent-500">✓</span> Plus de 15 ans d&apos;expérience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px max-w-5xl">
          <h2 className="h2 text-center mb-3">Nos méthodes de détection à {zone.name}</h2>
          <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
            Selon la nature de votre fuite, nous mobilisons l&apos;une (ou plusieurs) de ces techniques.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODS.slice(0, 3).map((m) => <MethodCard key={m.slug} method={m} />)}
          </div>
        </div>
      </section>

      {otherZones.length > 0 && (
        <section className="section bg-slate-50">
          <div className="container-px max-w-5xl text-center">
            <h2 className="h3 mb-6">Nous intervenons aussi près de {zone.name}</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {otherZones.map((z) => (
                <Link
                  key={z.slug}
                  href={`/zones/${z.slug}`}
                  className="px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-brand-300 hover:text-brand-700"
                >
                  {z.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', url: SITE.url },
              { name: 'Zones', url: `${SITE.url}/zones` },
              { name: zone.name, url: `${SITE.url}/zones/${zone.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: `Recherche de fuite ${zone.name}`,
            provider: { '@id': `${SITE.url}/#business` },
            areaServed: { '@type': 'City', name: zone.name, containedInPlace: { '@type': 'AdministrativeArea', name: deptName } },
            description: `Recherche de fuite non destructive à ${zone.name} ${zone.postalCode}.`,
          }),
        }}
      />
    </>
  );
}
