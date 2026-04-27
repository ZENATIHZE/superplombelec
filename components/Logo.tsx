type Props = {
  className?: string;
  variant?: 'full' | 'mark';
  priority?: boolean;
};

// Le composant utilise une balise <img> standard pour respecter automatiquement
// le ratio natif du fichier, sans le forcer.
//
// Pour utiliser le PNG à la place du SVG :
// 1. Place ton fichier PNG dans /public/logo.png
// 2. Remplace `src="/logo.svg"` ci-dessous par `src="/logo.png"`
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
      src="/logo.svg"
      alt="Super Plomb Elec — Recherche de fuite non destructive"
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}
