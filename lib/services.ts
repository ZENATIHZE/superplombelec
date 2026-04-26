// Méthodes de recherche de fuite non destructive
// Les "services" ici sont en réalité les techniques que vous utilisez
export type Method = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  whenToUse: string;
  keywords: string[];
  benefits: string[];
};

export const METHODS: Method[] = [
  {
    slug: 'camera-thermique',
    title: 'Caméra thermique infrarouge',
    shortDescription:
      'Détection des fuites par variation de température, sans contact ni casse.',
    description:
      "La caméra thermique infrarouge détecte les variations minimes de température sur les surfaces. Une fuite d'eau chaude ou froide modifie la signature thermique du mur, du sol ou du plafond — nous la visualisons immédiatement. Méthode totalement non destructive, idéale pour les fuites de canalisations encastrées et les planchers chauffants.",
    whenToUse:
      "Idéal pour : fuites sur planchers chauffants, canalisations encastrées dans les murs ou dalles, dégâts des eaux de plafond.",
    keywords: [
      'caméra thermique fuite',
      'recherche de fuite infrarouge',
      'détection thermique plancher chauffant',
      'fuite encastrée camera thermique',
    ],
    benefits: [
      'Zéro casse, zéro démolition',
      'Visualisation instantanée',
      'Précis sur planchers chauffants',
      'Rapport thermographique fourni',
    ],
  },
  {
    slug: 'gaz-traceur',
    title: 'Gaz traceur (azote-hydrogène 95/5)',
    shortDescription:
      "Injection d'un mélange inerte sécurisé qui s'échappe au point de fuite et est détecté en surface.",
    description:
      "Le gaz traceur — un mélange d'azote (95 %) et d'hydrogène (5 %) — est injecté dans la canalisation vidée. Plus léger que l'air, il s'échappe à l'endroit exact de la fuite et remonte en surface, où nous le détectons à l'aide d'un capteur très haute sensibilité. Mélange ininflammable, non toxique, normé NF EN 13160.",
    whenToUse:
      'Idéal pour : fuites sur réseaux gaz, eau chaude ou froide encastrés, canalisations enterrées, fuites diffuses non localisables thermiquement.',
    keywords: [
      'gaz traceur fuite',
      "détection fuite par gaz",
      'recherche de fuite hydrogène',
      'fuite canalisation enterrée',
    ],
    benefits: [
      'Détection millimétrique',
      'Inerte et sécurisé',
      'Réseaux profonds détectables',
      'Conforme NF EN 13160',
    ],
  },
  {
    slug: 'correlateur-acoustique',
    title: 'Corrélateur acoustique',
    shortDescription:
      "Localisation précise par analyse du bruit de la fuite captée en deux points.",
    description:
      "Le corrélateur acoustique mesure le décalage temporel entre le bruit de la fuite capté en deux points distincts du réseau (vannes, regards, compteurs). Un calcul de corrélation croisée donne la position exacte de la fuite, au centimètre près, même sur des canalisations enterrées sous chaussée ou sous dalle.",
    whenToUse:
      "Idéal pour : fuites sur réseaux pression (eau de ville), canalisations enterrées, longues distances entre deux points d'accès.",
    keywords: [
      'corrélateur acoustique fuite',
      'détection acoustique canalisation',
      'recherche fuite réseau enterré',
    ],
    benefits: [
      'Précision centimétrique',
      'Idéal canalisations enterrées',
      'Longues distances couvertes',
      'Sans intervention sur le réseau',
    ],
  },
  {
    slug: 'electroacoustique',
    title: 'Détection électroacoustique',
    shortDescription:
      "Amplification du bruit caractéristique d'une fuite sous pression, à l'aide d'un casque et d'une sonde.",
    description:
      "Les fuites sous pression émettent un bruit caractéristique audible avec un équipement amplificateur. Nous parcourons la zone suspecte avec une sonde au sol et un casque haute sensibilité pour repérer le point précis où le bruit est maximal. Technique complémentaire au corrélateur, idéale pour les zones courtes et les recherches en intérieur.",
    whenToUse:
      "Idéal pour : recherche en intérieur, salles de bain, cuisines, vide-sanitaires, complément du corrélateur sur courtes distances.",
    keywords: [
      'détection électroacoustique fuite',
      'recherche fuite sonde acoustique',
      'fuite salle de bain non destructive',
    ],
    benefits: [
      'Idéal en intérieur',
      'Rapide à mettre en œuvre',
      'Précis sur zones courtes',
      'Complémentaire au corrélateur',
    ],
  },
  {
    slug: 'inspection-camera-endoscopique',
    title: 'Inspection caméra endoscopique',
    shortDescription:
      'Caméra flexible insérée dans canalisations et conduits pour inspection visuelle directe.',
    description:
      "Notre caméra endoscopique professionnelle (sonde flexible 30 m, tête HD avec éclairage LED) inspecte l'intérieur des canalisations, gaines techniques, conduits et regards. Elle visualise directement la cause de la fuite : fissure, corrosion, joint défectueux, racines, dépôt calcaire. Capture vidéo et photo annexée au rapport.",
    whenToUse:
      'Idéal pour : inspection canalisations EU/EV, vérification après détection, identification visuelle de la cause exacte.',
    keywords: [
      'caméra endoscopique canalisation',
      'inspection vidéo canalisation',
      'caméra inspection fuite',
    ],
    benefits: [
      'Visualisation directe HD',
      'Vidéo et photo fournies',
      'Sonde 30 mètres',
      'Identifie la cause exacte',
    ],
  },
  {
    slug: 'colorant-fluoresceine',
    title: 'Test au colorant fluorescéine',
    shortDescription:
      "Mise en évidence du parcours de l'eau avec un colorant traceur sans danger.",
    description:
      "La fluorescéine est un colorant traceur (vert sous lumière UV) totalement biodégradable et autorisé par l'ANSES. Injecté dans le réseau ou la zone suspecte, il révèle le parcours de l'eau et localise les infiltrations sur toitures, terrasses, murs enterrés et joints d'étanchéité.",
    whenToUse:
      "Idéal pour : infiltrations toiture-terrasse, murs enterrés, étanchéité piscine, recherche de fissures invisibles.",
    keywords: [
      'fluorescéine fuite',
      'colorant traceur infiltration',
      'recherche infiltration terrasse',
    ],
    benefits: [
      'Sans danger ni casse',
      'Visualise infiltrations',
      'Conforme ANSES',
      'Idéal toiture/terrasse',
    ],
  },
];

export function getMethodBySlug(slug: string) {
  return METHODS.find((m) => m.slug === slug);
}
