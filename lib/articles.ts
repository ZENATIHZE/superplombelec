// Articles d'actualité - éditoriaux SEO longue traîne
// Pour ajouter un article : ajouter une entrée + créer app/actualites/<slug>/page.tsx
export type Article = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  publishedAt: string; // ISO
  readingTime: string;
  category: string;
};

export const ARTICLES: Article[] = [
  {
    slug: 'convention-irsi-recherche-fuite',
    title: 'Convention IRSI : votre recherche de fuite remboursée par l\'assurance',
    description:
      "Comment fonctionne la convention IRSI ? Quels sont les plafonds de remboursement de la recherche de fuite ? Notre guide complet pour obtenir une prise en charge à 100 % par votre assurance habitation.",
    keywords: [
      'convention IRSI',
      'recherche de fuite assurance',
      'remboursement recherche de fuite',
      'plafond IRSI',
      'dégât des eaux assurance',
      'CIDRE recherche de fuite',
      'assurance habitation fuite eau',
    ],
    publishedAt: '2026-04-15',
    readingTime: '6 min',
    category: 'Assurance',
  },
  {
    slug: 'camera-thermique-vs-gaz-traceur',
    title: 'Caméra thermique ou gaz traceur : quelle méthode pour quelle fuite ?',
    description:
      "Caméra thermique infrarouge ou gaz traceur azote-hydrogène ? Comparatif détaillé des deux principales méthodes de recherche de fuite non destructive : précision, cas d'usage, limites, coûts.",
    keywords: [
      'caméra thermique fuite',
      'gaz traceur azote-hydrogène',
      'comparatif recherche de fuite',
      'détection fuite plancher chauffant',
      'recherche fuite canalisation enterrée',
      'thermographie infrarouge fuite',
      'NF EN 13160',
    ],
    publishedAt: '2026-03-20',
    readingTime: '5 min',
    category: 'Méthodes',
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
