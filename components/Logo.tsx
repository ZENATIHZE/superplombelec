type Props = {
  className?: string;
  variant?: 'full' | 'mark';
  priority?: boolean;
};

// Pour mettre votre logo :
// 1. Placez votre fichier dans /public/logo.png (ou .svg, .webp)
// 2. Si le nom diffère, modifiez `src` ci-dessous
//
// On utilise <img> standard plutôt que <Image> de next/image pour préserver
// automatiquement le ratio natif du fichier — sans avoir à le déclarer en dur.
export default function Logo({ className = '', variant = 'full', priority = false }: Props) {
  if (variant === 'mark') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-mark.svg"
        alt="Super Plomb Elec"
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Super Plomb Elec — Recherche de fuite non destructive"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
