import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et politique de confidentialité du site Super Plomb Elec.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

export default function MentionsPage() {
  return (
    <article className="container-px py-14 max-w-3xl prose prose-slate">
      <h1 className="h1 mb-6">Mentions légales</h1>
      <h2 className="h3 mt-8 mb-3">Éditeur du site</h2>
      <p>
        {SITE.legalName}<br />
        {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}<br />
        Téléphone : {SITE.phone}<br />
        Email : {SITE.email}<br />
        SIRET : {SITE.siret || '— à compléter —'}
      </p>

      <h2 className="h3 mt-8 mb-3">Hébergement</h2>
      <p>
        Site hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
      </p>

      <h2 className="h3 mt-8 mb-3">Propriété intellectuelle</h2>
      <p>
        L&apos;ensemble du contenu (textes, images, logos, code) est la propriété de {SITE.legalName}.
        Toute reproduction sans accord écrit préalable est interdite.
      </p>

      <h2 className="h3 mt-8 mb-3">Données personnelles (RGPD)</h2>
      <p>
        Les données collectées via le formulaire de contact sont utilisées uniquement
        pour vous recontacter dans le cadre de votre demande. Elles ne sont ni revendues,
        ni partagées. Vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression que vous pouvez exercer en écrivant à <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2 className="h3 mt-8 mb-3">Cookies</h2>
      <p>
        Ce site utilise des cookies de mesure d&apos;audience (Google Analytics, anonymisé)
        et des cookies de conversion (Google Ads). Vous pouvez les refuser via votre navigateur.
      </p>
    </article>
  );
}
