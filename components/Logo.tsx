import Image from 'next/image';

type Props = {
  className?: string;
  variant?: 'full' | 'mark';
  priority?: boolean;
};

// Le SVG du logo a une aspect ratio 480:320 (3:2). Pour respecter les proportions
// dans toute la maquette, on passe width/height correspondants et `w-auto h-…` côté CSS.
//
// Pour utiliser votre fichier logo original (PNG haute résolution) :
// 1. Placez votre fichier dans /public/logo.png
// 2. Remplacez `src="/logo.svg"` par `src="/logo.png"` ci-dessous
// 3. Ajustez width/height selon les dimensions exactes de votre PNG
export default function Logo({ className = '', variant = 'full', priority = false }: Props) {
  if (variant === 'mark') {
    return (
      <Image
        src="/logo-mark.svg"
        alt="Super Plomb Elec"
        width={48}
        height={48}
        priority={priority}
        className={className}
      />
    );
  }
  return (
    <Image
      src="/logo.svg"
      alt="Super Plomb Elec — Recherche de fuite non destructive"
      width={240}
      height={160}
      priority={priority}
      className={className}
    />
  );
}
