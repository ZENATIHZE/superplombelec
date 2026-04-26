import Script from 'next/script';
import { SITE } from '@/lib/site';

export default function Tracking() {
  // Google Tag Manager + Google Analytics 4 + Google Ads
  // Les IDs sont gérés via les variables d'environnement (.env.local)
  if (!SITE.gtmId && !SITE.gaId && !SITE.googleAdsId) return null;

  return (
    <>
      {SITE.gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${SITE.gtmId}');
            `,
          }}
        />
      )}

      {SITE.gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${SITE.gaId}', { anonymize_ip: true });
                ${SITE.googleAdsId ? `gtag('config', '${SITE.googleAdsId}');` : ''}
              `,
            }}
          />
        </>
      )}
    </>
  );
}

export function GTMNoScript() {
  if (!SITE.gtmId) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${SITE.gtmId}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
}
