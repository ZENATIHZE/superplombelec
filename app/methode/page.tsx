import type { Metadata } from 'next';
import Link from 'next/link';
import { METHODS } from '@/lib/services';
import { SITE } from '@/lib/site';
import CTAStrip from '@/components/CTAStrip';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Notre méthode — Recherche de fuite non destructive',
  description:
    'Découvrez les 6 méthodes de détection de fuite que nous utilisons : caméra thermique, gaz traceur, corrélateur acoustique, électroacoustique, caméra endoscopique, fluorescéine.',
  alternates: { canonical: '/methode' },
};

export default function MethodPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px py-14 lg:py-20 max-w-4xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Accueil</Link> / <span className="text-slate-700">Notre méthode</span>
          </nav>
          <span className="eyebrow">Nos technologies de détection</span>
          <h1 className="h1 mt-2">Six méthodes pour localiser votre fuite sans casse</h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            Selon la configuration des lieux, l&apos;emplacement présumé de la fuite et la nature du
            réseau (eau, chauffage, gaz, EU/EV), nous sélectionnons la méthode la plus adaptée
            — et combinons souvent plusieurs techniques pour confirmer le diagnostic.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px max-w-4xl space-y-16">
          {METHODS.map((m, i) => (
            <article id={m.slug} key={m.slug} className="scroll-mt-24">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-accent-500 font-bold text-lg">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="h2">{m.title}</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-lg mb-5">{m.description}</p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-brand-50 border border-brand-200 rounded-xl p-5">
                  <h3 className="font-bold text-brand-700 mb-2 text-sm uppercase tracking-wide">Cas d&apos;usage</h3>
                  <p className="text-sm text-slate-700">{m.whenToUse}</p>
                </div>
                <div className="bg-accent-50 border border-accent-200 rounded-xl p-5">
                  <h3 className="font-bold text-accent-800 mb-2 text-sm uppercase tracking-wide">Avantages</h3>
                  <ul className="space-y-1.5 text-sm text-slate-700">
                    {m.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-accent-600 mt-0.5">✓</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
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
              { name: 'Notre méthode', url: `${SITE.url}/methode` },
            ])
          ),
        }}
      />
    </>
  );
}
