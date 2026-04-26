import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

// =============================================================================
// POUR REMPLACER PAR VOTRE VRAIE PHOTO DE CAMÉRA THERMIQUE :
// 1. Déposez votre fichier dans /public/hero-camera.jpg (ou .png, .webp)
// 2. Dans <HeroVisual /> ci-dessous, remplacez <ThermalCameraIllustration />
//    par <Image src="/hero-camera.jpg" alt="..." fill className="object-cover" priority />
// 3. (Optionnel) Pour retirer un watermark Redmi/iPhone, recadrez l'image avant.
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
            Caméra thermique, gaz traceur, corrélateur acoustique : nous localisons votre fuite
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
          sizes="(max-width: 768px) 90vw, 400px"
          className="object-cover"
          priority
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

// Illustration vectorielle de la caméra thermique inspirée de la photo réelle.
// Reproduit fidèlement : corps noir compact, écran rainbow (bleu→rouge),
// V-shape thermique, températures 16.6°C/15.4°C, échelle de couleur, boutons.
function ThermalCameraIllustration() {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" aria-label="Caméra thermique en cours d'utilisation">
      <defs>
        <linearGradient id="bgRoom" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5e6d6"/>
          <stop offset="100%" stopColor="#e8d5be"/>
        </linearGradient>
        <linearGradient id="bodyDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a1a"/>
          <stop offset="100%" stopColor="#0a0a0a"/>
        </linearGradient>
        <linearGradient id="bodyHighlight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a2a2a"/>
          <stop offset="50%" stopColor="#1a1a1a"/>
          <stop offset="100%" stopColor="#0a0a0a"/>
        </linearGradient>
        {/* Échelle thermique rainbow (jet colormap) */}
        <linearGradient id="thermalScale" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9c0d0d"/>
          <stop offset="20%" stopColor="#ef4444"/>
          <stop offset="40%" stopColor="#facc15"/>
          <stop offset="60%" stopColor="#22c55e"/>
          <stop offset="80%" stopColor="#3b82f6"/>
          <stop offset="100%" stopColor="#1e3a8a"/>
        </linearGradient>
        {/* Image thermique : V-shape entre zone froide (bleu) et zone chaude (rouge) */}
        <linearGradient id="thermalImg1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dc2626"/>
          <stop offset="40%" stopColor="#facc15"/>
          <stop offset="55%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#dc2626"/>
        </linearGradient>
        <linearGradient id="thermalImg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86efac" stopOpacity="0.85"/>
          <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.85"/>
        </linearGradient>
        <clipPath id="screenClip">
          <rect x="80" y="180" width="240" height="170" rx="3"/>
        </clipPath>
      </defs>

      {/* Fond mur clair (comme dans la photo) */}
      <rect width="400" height="500" fill="url(#bgRoom)"/>
      {/* Coin de mur en haut (le V de la photo) */}
      <path d="M 0 0 L 400 0 L 400 110 L 200 60 L 0 130 Z" fill="#f0e0c8" opacity="0.5"/>
      <path d="M 200 60 L 400 110 L 400 160 L 200 95 Z" fill="#d9c2a3" opacity="0.6"/>

      {/* Caméra thermique - corps principal */}
      <g>
        {/* Ombre portée */}
        <ellipse cx="200" cy="475" rx="120" ry="8" fill="rgba(0,0,0,0.25)"/>

        {/* Capuchon/anneau au-dessus (comme dans la photo) */}
        <rect x="180" y="135" width="40" height="20" rx="4" fill="#3a3a3a"/>
        <rect x="190" y="120" width="20" height="20" rx="3" fill="#dc2626"/>

        {/* Corps de la caméra (forme arrondie comme dans la photo) */}
        <path d="M 60 155 Q 60 145 70 145 L 330 145 Q 340 145 340 155 L 340 410 Q 340 430 320 430 L 80 430 Q 60 430 60 410 Z"
              fill="url(#bodyHighlight)"/>

        {/* Reflet subtil sur le haut */}
        <rect x="65" y="148" width="270" height="4" rx="2" fill="#3a3a3a" opacity="0.6"/>

        {/* Cadre de l'écran (relief) */}
        <rect x="74" y="174" width="252" height="182" rx="6" fill="#000000"/>
        <rect x="78" y="178" width="244" height="174" rx="4" fill="#1a1a1a"/>

        {/* === ÉCRAN === */}
        <rect x="80" y="180" width="240" height="170" rx="3" fill="#1e293b"/>
        <g clipPath="url(#screenClip)">
          {/* Image thermique - moitié haute = vert/jaune (zone neutre) */}
          <rect x="80" y="180" width="240" height="55" fill="#22c55e"/>
          <rect x="80" y="180" width="240" height="55" fill="url(#thermalImg2)" opacity="0.4"/>
          {/* Plafond bleu clair en V */}
          <path d="M 80 180 L 320 180 L 320 200 L 200 230 L 80 195 Z" fill="#60a5fa"/>
          <path d="M 80 195 L 200 230 L 320 200 L 320 240 L 200 250 L 80 230 Z" fill="#22d3ee" opacity="0.85"/>
          {/* Mur droit - rouge/orange dégradé */}
          <path d="M 80 235 L 320 250 L 320 350 L 80 350 Z" fill="#dc2626"/>
          <rect x="80" y="240" width="240" height="110" fill="url(#thermalImg1)" opacity="0.7"/>
          {/* Fissure thermique centrale (la fuite) */}
          <path d="M 195 235 L 200 270 L 196 305 L 198 335 L 200 350"
                stroke="#facc15" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.95"/>
          <path d="M 198 250 L 202 300 L 200 350"
                stroke="#fef08a" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.8"/>
          {/* Bruit pixellisé */}
          {Array.from({ length: 35 }).map((_, i) => (
            <rect key={i}
              x={85 + (i * 13) % 230}
              y={185 + (i * 17) % 160}
              width="2" height="2"
              fill={i % 3 === 0 ? '#fff' : '#000'}
              opacity="0.15"/>
          ))}

          {/* Échelle thermique à droite */}
          <rect x="296" y="195" width="14" height="120" rx="2" fill="url(#thermalScale)"/>
          <rect x="296" y="195" width="14" height="120" rx="2" fill="none" stroke="#000" strokeWidth="0.5" opacity="0.4"/>

          {/* Textes UI */}
          <text x="86" y="194" fill="white" fontFamily="monospace" fontSize="8" fontWeight="700">18.02.2022</text>
          <text x="86" y="204" fill="white" fontFamily="monospace" fontSize="8" fontWeight="700">16:53:32</text>
          <text x="220" y="194" fill="white" fontFamily="monospace" fontSize="8" fontWeight="700">ε = 0.93</text>
          <text x="296" y="194" fill="white" fontFamily="monospace" fontSize="7" fontWeight="700">20.4°C</text>
          <text x="296" y="325" fill="white" fontFamily="monospace" fontSize="7" fontWeight="700">15.4°C</text>

          {/* Croix de visée centrale */}
          <g stroke="white" strokeWidth="1.5" fill="none">
            <circle cx="200" cy="265" r="2"/>
            <line x1="200" y1="258" x2="200" y2="262"/>
            <line x1="200" y1="268" x2="200" y2="272"/>
            <line x1="193" y1="265" x2="197" y2="265"/>
            <line x1="203" y1="265" x2="207" y2="265"/>
          </g>
          <text x="207" y="262" fill="white" fontFamily="monospace" fontSize="9" fontWeight="700">16.6°C</text>
          <text x="207" y="285" fill="white" fontFamily="monospace" fontSize="9" fontWeight="700">15.6°C</text>

          {/* Icône batterie en haut à droite */}
          <rect x="284" y="186" width="9" height="6" rx="0.5" fill="none" stroke="white" strokeWidth="0.6"/>
          <rect x="285" y="187" width="6" height="4" fill="white"/>

          {/* Boutons de contrôle écran */}
          <rect x="86" y="335" width="14" height="10" rx="2" fill="rgba(0,0,0,0.4)" stroke="white" strokeWidth="0.5"/>
          <rect x="290" y="335" width="14" height="10" rx="2" fill="rgba(0,0,0,0.4)" stroke="white" strokeWidth="0.5"/>
        </g>

        {/* === BOUTONS PHYSIQUES === */}
        {/* Boutons supérieurs gauche/droite */}
        <rect x="100" y="370" width="50" height="14" rx="3" fill="#2a2a2a" stroke="#000" strokeWidth="0.5"/>
        <rect x="250" y="370" width="50" height="14" rx="3" fill="#2a2a2a" stroke="#000" strokeWidth="0.5"/>

        {/* Pavé directionnel central */}
        <circle cx="200" cy="400" r="22" fill="#1a1a1a" stroke="#000" strokeWidth="0.5"/>
        <polygon points="200,385 195,392 205,392" fill="#3a3a3a"/>
        <polygon points="200,415 195,408 205,408" fill="#3a3a3a"/>
        <polygon points="186,400 192,395 192,405" fill="#3a3a3a"/>
        <polygon points="214,400 208,395 208,405" fill="#3a3a3a"/>
        {/* Bouton central "Func" */}
        <circle cx="200" cy="400" r="9" fill="#2a2a2a"/>
        <text x="200" y="403" fill="#888" fontFamily="system-ui" fontSize="6" fontWeight="700" textAnchor="middle">Func</text>

        {/* Bouton appareil photo en bas */}
        <rect x="170" y="418" width="22" height="8" rx="1.5" fill="#2a2a2a"/>
        <circle cx="178" cy="422" r="2" fill="#3a3a3a"/>

        {/* Pouce sur le bord (subtil) */}
        <ellipse cx="240" cy="430" rx="35" ry="12" fill="#d4a576" opacity="0.45"/>
      </g>
    </svg>
  );
}
