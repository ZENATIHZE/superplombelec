import Link from 'next/link';
import Logo from './Logo';
import { SITE } from '@/lib/site';
import { ZONES } from '@/lib/zones';
import { METHODS } from '@/lib/services';

export default function Footer() {
  const topZones = ZONES.filter((z) => z.highlight).slice(0, 6);

  return (
    <footer className="bg-brand-800 text-white mt-auto">
      <div className="container-px py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg p-3 inline-block">
            <Logo className="h-16 w-auto" />
          </div>
          <p className="mt-4 text-sm text-brand-100 leading-relaxed">
            Spécialiste de la recherche de fuite non destructive en Île-de-France depuis {SITE.founded}.
          </p>
          <p className="mt-4 text-sm">
            <a href={`tel:${SITE.phoneE164}`} className="text-accent-300 font-bold hover:underline">
              {SITE.phone}
            </a>
          </p>
          <p className="text-sm text-brand-100">
            <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-300 mb-4">Nos méthodes</h2>
          <ul className="space-y-2 text-sm">
            {METHODS.slice(0, 5).map((m) => (
              <li key={m.slug}>
                <Link href={`/methode#${m.slug}`} className="text-brand-100 hover:text-white">{m.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-300 mb-4">Zones d&apos;intervention</h2>
          <ul className="space-y-2 text-sm">
            {topZones.map((z) => (
              <li key={z.slug}>
                <Link href={`/zones/${z.slug}`} className="text-brand-100 hover:text-white">
                  {z.name} ({z.postalCode})
                </Link>
              </li>
            ))}
            <li>
              <Link href="/zones" className="text-accent-300 hover:underline">Voir toutes les villes →</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-300 mb-4">Contact</h2>
          <address className="not-italic text-sm text-brand-100 leading-relaxed mb-4">
            {SITE.address.street}<br />
            {SITE.address.postalCode} {SITE.address.city}<br />
            <span className="text-brand-200">{SITE.hours}</span>
          </address>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="text-brand-100 hover:text-white">Demander un devis</Link></li>
            <li><Link href="/actualites" className="text-brand-100 hover:text-white">Actualités</Link></li>
            <li><Link href="/mentions-legales" className="text-brand-100 hover:text-white">Mentions légales</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <div className="container-px py-5 flex flex-col md:flex-row items-center justify-between text-xs text-brand-200 gap-2">
          <p>© {new Date().getFullYear()} {SITE.legalName}. Tous droits réservés.</p>
          <p>Site optimisé SEO · Conformité RGPD · Hébergement France</p>
        </div>
      </div>
    </footer>
  );
}
