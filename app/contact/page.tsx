import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site';
import ContactForm from '@/components/ContactForm';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = {
  title: 'Contact & devis gratuit',
  description:
    'Demandez un devis gratuit pour une recherche de fuite non destructive en Île-de-France. Réponse sous 24 h. Intervention rapide en urgence.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white">
        <div className="container-px py-12 lg:py-16 max-w-5xl">
          <nav aria-label="Fil d'Ariane" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:text-brand-600">Accueil</Link> / <span className="text-slate-700">Contact</span>
          </nav>
          <span className="eyebrow">Devis gratuit · Réponse sous 24 h</span>
          <h1 className="h1 mt-2">Contactez-nous</h1>
          <p className="mt-4 text-lg text-slate-700 max-w-2xl">
            Décrivez-nous votre situation : nous vous rappelons dans la journée et organisons l&apos;intervention.
            Pour une urgence, appelez directement.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-px grid lg:grid-cols-3 gap-10 max-w-6xl">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          <aside className="space-y-6">
            <div className="bg-accent-500 text-brand-800 rounded-2xl p-6">
              <h2 className="font-bold text-xl mb-2">🔴 Urgence ?</h2>
              <p className="text-sm mb-4">Intervention rapide en Île-de-France, 7 j/7.</p>
              <a href={`tel:${SITE.phoneE164}`} className="block bg-brand-700 text-white font-bold text-center py-3 rounded-lg text-lg" data-track="contact-call">
                📞 {SITE.phone}
              </a>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4">
              <h2 className="font-bold text-brand-700">Nos coordonnées</h2>
              <div>
                <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Adresse</div>
                <address className="not-italic text-slate-700 text-sm">
                  {SITE.address.street}<br />
                  {SITE.address.postalCode} {SITE.address.city}
                </address>
              </div>
              <div>
                <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Téléphone</div>
                <a className="text-brand-600 font-bold hover:underline" href={`tel:${SITE.phoneE164}`}>{SITE.phone}</a>
              </div>
              <div>
                <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Email</div>
                <a className="text-brand-600 font-bold hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
              <div>
                <div className="text-xs uppercase text-slate-500 font-semibold mb-1">Horaires</div>
                <p className="text-slate-700 text-sm">{SITE.hours}</p>
              </div>
            </div>

            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <h2 className="font-bold text-brand-700 mb-2">Plan d&apos;accès</h2>
              <p className="text-sm text-slate-700 mb-3">
                Notre siège est à Rueil-Malmaison, idéalement situé pour intervenir rapidement à Paris, dans les Hauts-de-Seine et les Yvelines.
              </p>
              <div className="aspect-video rounded-lg overflow-hidden bg-slate-200">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.16,48.86,2.21,48.89&layer=mapnik&marker=48.876,2.183"
                  className="w-full h-full"
                  loading="lazy"
                  title="Carte de localisation Super Plomb Elec"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: 'Accueil', url: SITE.url },
              { name: 'Contact', url: `${SITE.url}/contact` },
            ])
          ),
        }}
      />
    </>
  );
}
