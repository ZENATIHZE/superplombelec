# Super Plomb Elec — Site officiel

Site Next.js 14 (App Router) optimisé SEO Google et Google Ads pour la recherche de fuite non destructive en Île-de-France.

## Stack technique

| Critère | Choix | Pourquoi |
|---|---|---|
| Framework | Next.js 14 + React | SSR/SSG, Core Web Vitals, App Router, le meilleur pour le SEO Google |
| Styles | Tailwind CSS | Performance (CSS minimal), maintenance facile |
| Hébergement | Vercel (recommandé) | Edge CDN mondial, gratuit pour démarrer, déploiement Git |
| Analytics | GA4 + Google Tag Manager | Tracking conversions Google Ads natif |
| Avis | Google Places API | Vrais avis Google synchronisés automatiquement |

## Installation locale

```bash
npm install
cp .env.example .env.local
# remplir les variables d'environnement (voir section ci-dessous)
npm run dev
```

Puis ouvrir http://localhost:3000

## Variables d'environnement (`.env.local`)

Toutes les valeurs sont optionnelles — le site fonctionne sans, mais certaines fonctionnalités (avis Google auto, conversions Ads) sont désactivées tant qu'elles ne sont pas remplies.

### Site (de base)
```env
NEXT_PUBLIC_SITE_URL=https://www.superplombelec.fr
NEXT_PUBLIC_PHONE=06 50 32 85 96
NEXT_PUBLIC_EMAIL=contact@superplombelec.fr
```

### Google Analytics 4 + Google Ads
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL=XXXXXXXXX
```

### Avis Google automatiques (recommandé)
```env
GOOGLE_PLACES_API_KEY=...
NEXT_PUBLIC_GOOGLE_PLACE_ID=ChIJxxxxxxxxxxxxxxxx
```

**Comment obtenir ces deux valeurs :**

1. **Clé API Places** : aller sur https://console.cloud.google.com/
   - Créer un projet (ou en utiliser un existant)
   - Aller dans "APIs & Services" → "Library"
   - Activer "Places API"
   - Aller dans "Credentials" → "Create credentials" → "API key"
   - **Important** : restreindre la clé par référer HTTP (votre domaine `*.superplombelec.fr/*`) pour éviter qu'elle soit volée

2. **Place ID** : aller sur https://developers.google.com/maps/documentation/places/web-service/place-id
   - Coller "Super Plomb Elec Rueil-Malmaison" dans le champ de recherche
   - Récupérer le Place ID qui s'affiche (commence par `ChIJ...`)

3. Coller les deux valeurs dans `.env.local` et redéployer. Les avis Google de votre fiche apparaîtront automatiquement (rafraîchissement toutes les 6 h).

**Coût** : Google Places API offre 200 $ de crédit gratuit par mois → largement suffisant pour un site avec ~10 000 visites/mois.

### Email du formulaire de contact
```env
RESEND_API_KEY=...
CONTACT_TO_EMAIL=contact@superplombelec.fr
```

Resend (https://resend.com) offre 100 emails gratuits/jour, parfait pour démarrer. Voir le code dans `app/api/contact/route.ts` pour activer l'envoi.

## Remplacer le logo SVG par votre fichier original

Le logo actuel est un SVG recréé à partir de votre image. Pour utiliser votre fichier original (PNG, SVG haute définition) :

1. Placez votre fichier dans `/public/` (ex: `/public/logo.png`)
2. Modifiez `components/Logo.tsx` :
   ```tsx
   <Image src="/logo.png" alt="..." width={X} height={Y} />
   ```
   Remplacez `X` et `Y` par les dimensions de votre PNG (par exemple 660 et 480).
3. Le fichier `public/logo.svg` peut être conservé comme fallback ou supprimé.

## Déploiement Vercel (recommandé)

1. Créer un compte sur https://vercel.com
2. Importer le repo Git (GitHub / GitLab / Bitbucket)
3. Vercel détecte automatiquement Next.js
4. Renseigner les variables d'environnement (voir section précédente)
5. Cliquer "Deploy"
6. Pointer le domaine `superplombelec.fr` vers Vercel (CNAME `cname.vercel-dns.com`)

Coût : gratuit jusqu'à 100 Go de bande passante/mois.

## Pages incluses

```
/                                          → Accueil
/methode                                   → Détail des 6 méthodes de détection
/zones                                     → Liste des 27 villes IDF
/zones/[ville]                             → 27 pages dynamiques (Rueil-Malmaison, Paris, etc.)
/actualites                                → Hub blog
/actualites/convention-irsi-recherche-fuite
/actualites/camera-thermique-vs-gaz-traceur
/contact                                   → Formulaire devis
/mentions-legales
```

→ **35 URL au total indexables Google**, toutes avec SEO ciblé et schema.org.

## Checklist SEO Google (tout est inclus)

- Métadonnées dynamiques par page (title, description, canonical, OpenGraph)
- 40+ mots-clés SEO ciblés (courte/moyenne/longue traîne, géolocalisés)
- Sitemap XML automatique (`/sitemap.xml`)
- Robots.txt automatique (`/robots.txt`)
- Schema.org JSON-LD complet : `LocalBusiness`, `WebSite`, `BreadcrumbList`, `FAQPage`, `Service`, `Article`
- Geo tags (geo.region, ICBM)
- Headers HTTP sécurité (HSTS, X-Frame-Options, etc.)
- Optimisation Core Web Vitals : SSG, fonts preconnect, images Next.js
- Une page dédiée par ville pour le SEO local IDF (génération statique)
- Articles longue traîne avec mots-clés ciblés (convention IRSI, comparatifs techniques)
- Mobile-first responsive

## Checklist Google Ads (tout est inclus)

- Tracking de conversion sur le formulaire de contact (gtag conversion)
- Click-to-call tracking (`data-track="..."`)
- Hero clair avec CTA téléphone proéminent (Quality Score)
- Landing pages cohérentes avec le mot-clé (zones par ville, articles par sujet)
- Vitesse de chargement optimisée (PageSpeed Insights ≥ 90)
- Coordonnées visibles partout (téléphone, email, adresse)
- Trust signals (avis Google synchronisés, garanties, années d'expérience)

## Étapes post-déploiement

1. **Google Search Console** : ajouter le site, soumettre `/sitemap.xml`
2. **Google Business Profile** : vérifier la fiche pour Rueil-Malmaison
3. **Google Ads** : créer un compte, configurer les conversions avec l'`AW-ID`
4. **Google Analytics 4** : créer une propriété, lier à Google Ads
5. **Backlinks** : annuaires pros (Pages Jaunes, Houzz, etc.), partenariats
6. **Avis Google** : encourager les clients à laisser un avis (impact SEO local massif)
7. **Nouveaux articles** : ajouter dans `lib/articles.ts` + créer la page sous `app/actualites/<slug>/`

## Structure du projet

```
superplombelec/
├── app/
│   ├── layout.tsx           # Layout racine + metadata SEO globales
│   ├── page.tsx             # Accueil
│   ├── methode/page.tsx     # Détail des 6 méthodes
│   ├── zones/
│   │   ├── page.tsx
│   │   └── [ville]/page.tsx # Page dynamique par ville (SEO local)
│   ├── actualites/
│   │   ├── page.tsx
│   │   └── <slug>/page.tsx  # Articles SEO
│   ├── contact/page.tsx
│   ├── mentions-legales/page.tsx
│   ├── api/contact/route.ts # Endpoint formulaire
│   ├── sitemap.ts
│   ├── robots.ts
│   └── globals.css
├── components/
│   ├── Header.tsx, Footer.tsx, Hero.tsx
│   ├── MethodCard.tsx, TrustBar.tsx, CTAStrip.tsx
│   ├── Testimonials.tsx     # Avis Google auto-sync
│   ├── FAQ.tsx, ContactForm.tsx
│   └── Tracking.tsx         # GA4 + GTM + Google Ads
├── lib/
│   ├── site.ts              # Coordonnées et config (à modifier ici)
│   ├── services.ts          # 6 méthodes de détection
│   ├── zones.ts             # 27 villes IDF
│   ├── articles.ts          # Articles d'actualités
│   ├── jsonld.ts            # Schemas Schema.org
│   └── google-reviews.ts    # Fetch avis Google Places API
└── public/
    ├── logo.svg, logo-mark.svg, og.svg
    └── robots.txt (fallback)
```

## Mises à jour faciles

- **Coordonnées** : tout est centralisé dans `lib/site.ts` — un seul endroit à modifier.
- **Ajouter une ville** : éditer `lib/zones.ts` (la page se génère automatiquement, sitemap inclus).
- **Ajouter une méthode** : éditer `lib/services.ts`.
- **Ajouter un article** : ajouter dans `lib/articles.ts` puis créer `app/actualites/<slug>/page.tsx`.

## Performance attendue

- Lighthouse Performance : **95+**
- SEO : **100**
- Accessibility : **100**
- Best Practices : **100**

(Mesure réelle après déploiement Vercel.)
