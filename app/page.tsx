import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import MethodCard from '@/components/MethodCard';
import CTAStrip from '@/components/CTAStrip';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { FAQ_DATA } from '@/lib/faq-data';
import { METHODS } from '@/lib/services';
import { ZONES } from '@/lib/zones';
import { SITE } from '@/lib/site';
import { faqJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: `${SITE.name} — Recherche de fuite non destructive en Île-de-France`,
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function HomePage() {
  const topZones = ZONES.filter((z) => z.highlight);

  return (
    <>
      <Hero />

      <TrustBar />

      {/* Méthodes */}
      <section className="section bg-white">
        <div className="container-px">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="eyebrow">Nos technologies</span>
            <h2 className="h2 mt-2">Six méthodes complémentaires pour localiser votre fuite</h2>
            <p className="mt-4 text-slate-600 text-lg">
              Selon la nature et l&apos;emplacement de votre fuite, nous combinons les techniques
              les plus adaptées pour un diagnostic précis et sans casse.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {METHODS.map((m) => <MethodCard key={m.slug} method={m} />)}
          </div>
        </div>
      </section>

      {/* Comment on intervient */}
      <section className="section bg-slate-50">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Notre processus</span>
            <h2 className="h2 mt-2">Comment se déroule une intervention</h2>
          </div>
          <ol className="grid md:grid-cols-4 gap-6">
            {[
              { n: '1', t: 'Vous nous appelez', d: 'Nous évaluons par téléphone la nature de la fuite et le délai d\'intervention.' },
              { n: '2', t: 'Diagnostic sur place', d: 'Nos techniciens arrivent avec tout l\'équipement professionnel nécessaire.' },
              { n: '3', t: 'Localisation précise', d: 'Caméra thermique, gaz traceur, corrélateur — la fuite est localisée au mm près.' },
              { n: '4', t: 'Rapport remis', d: 'Document détaillé pour votre assurance avec photos et schémas.' },
            ].map((step) => (
              <li key={step.n} className="bg-white p-6 rounded-2xl border border-slate-200">
                <div className="w-10 h-10 rounded-full bg-accent-500 text-brand-800 font-bold flex items-center justify-center text-lg mb-3">
                  {step.n}
                </div>
                <h3 className="font-bold text-brand-700 mb-2">{step.t}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Zones */}
      <section className="section bg-white">
        <div className="container-px">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Couverture géographique</span>
            <h2 className="h2 mt-2">Une intervention partout en Île-de-France</h2>
            <p className="mt-3 text-slate-600">
              Basés à <strong>Rueil-Malmaison (92)</strong>, nous intervenons très rapidement sur tout l&apos;Île-de-France.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
            {topZones.map((z) => (
              <Link
                key={z.slug}
                href={`/zones/${z.slug}`}
                className="px-4 py-3 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-lg text-center text-sm font-medium text-brand-700 transition-colors"
              >
                {z.name}
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/zones" className="text-brand-600 font-semibold hover:underline">
              Voir toutes les villes desservies →
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <CTAStrip />

      <FAQ />

      {/* Schema FAQ pour Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(FAQ_DATA.map((f) => ({ question: f.q, answer: f.a })))),
        }}
      />
    </>
  );
}
