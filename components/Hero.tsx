import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

// =============================================================================
// POUR REMPLACER PAR VOTRE VRAIE PHOTO DE CAMÉRA THERMIQUE :
// 1. Déposez votre fichier dans /public/hero-camera.jpg (ou .png, .webp)
// 2. Idéalement en 1200x1500px ou plus pour un rendu net sur écran Retina
// =============================================================================

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-px py-14 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
            Sans casse · Sans démolition · Rapport assurance fourni
          </span>

          <h1 className="h1 mt-5">
            Recherche de fuite <span className="text-accent-500">non destructive</span> en Île-de-France
          </h1>

          <p className="mt-5 text-lg text-slate-700 max-w-2xl leading-relaxed">
            Caméra thermique, gaz traceur, générateur de fumée : nous localisons votre fuite
            <strong> au millimètre près </strong>
            — sans casser le moindre mur. Intervention rapide en région parisienne.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={`tel:${SITE.phoneE164}`} className="btn-primary text-lg" data-track="hero-call">
              <PhoneIcon /> Appeler {SITE.phone}
            </a>
            <Link href="/contact" className="btn-secondary text-lg" data-track="hero-quote">
              Demander un devis gratuit
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            <Stat value="2019" label="depuis" />
            <Stat value="1 200+" label="fuites détectées" />
            <Stat value="4,9/5" label="note Google" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto">
      <div className="absolute inset-0 rounded-3xl shadow-2xl overflow-hidden">
        {/* Photo réelle de notre caméra thermique en intervention.
            Pour la remplacer : déposez votre nouvelle photo dans /public/hero-camera.jpg */}
        <Image
          src="/hero-camera.jpg"
          alt="Caméra thermique Super Plomb Elec en intervention - détection de fuite par thermographie infrarouge"
          fill
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 500px"
          className="object-cover"
          priority
          quality={95}
        />
      </div>
      <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 max-w-[220px]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-accent-500 text-lg">★★★★★</span>
          <span className="text-sm font-bold">4,9/5</span>
        </div>
        <p className="text-xs text-slate-600">« Fuite trouvée en 20 min, sans aucun trou. »</p>
        <p className="text-xs text-slate-400 mt-1">— Marie L., Rueil-Malmaison</p>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-extrabold text-brand-700">{value}</div>
      <div className="text-xs text-slate-600 mt-1 leading-tight">{label}</div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
