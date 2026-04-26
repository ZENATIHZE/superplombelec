// Zones d'intervention - 1 page par ville pour SEO local
// Priorité : Hauts-de-Seine (92) puis le reste de l'IDF
export type Zone = {
  slug: string;
  name: string;
  postalCode: string;
  department: string;
  highlight?: boolean; // Ville HQ ou prioritaire
};

export const ZONES: Zone[] = [
  // --- Hauts-de-Seine (92) - Département HQ ---
  { slug: 'rueil-malmaison', name: 'Rueil-Malmaison', postalCode: '92500', department: '92', highlight: true },
  { slug: 'nanterre', name: 'Nanterre', postalCode: '92000', department: '92', highlight: true },
  { slug: 'suresnes', name: 'Suresnes', postalCode: '92150', department: '92', highlight: true },
  { slug: 'puteaux', name: 'Puteaux', postalCode: '92800', department: '92', highlight: true },
  { slug: 'courbevoie', name: 'Courbevoie', postalCode: '92400', department: '92' },
  { slug: 'la-defense', name: 'La Défense', postalCode: '92800', department: '92' },
  { slug: 'neuilly-sur-seine', name: 'Neuilly-sur-Seine', postalCode: '92200', department: '92' },
  { slug: 'levallois-perret', name: 'Levallois-Perret', postalCode: '92300', department: '92' },
  { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', postalCode: '92100', department: '92' },
  { slug: 'issy-les-moulineaux', name: 'Issy-les-Moulineaux', postalCode: '92130', department: '92' },
  { slug: 'meudon', name: 'Meudon', postalCode: '92190', department: '92' },
  { slug: 'saint-cloud', name: 'Saint-Cloud', postalCode: '92210', department: '92' },
  { slug: 'garches', name: 'Garches', postalCode: '92380', department: '92' },
  { slug: 'asnieres-sur-seine', name: 'Asnières-sur-Seine', postalCode: '92600', department: '92' },
  // --- Paris (75) ---
  { slug: 'paris', name: 'Paris', postalCode: '75000', department: '75', highlight: true },
  { slug: 'paris-16', name: 'Paris 16e', postalCode: '75016', department: '75' },
  { slug: 'paris-17', name: 'Paris 17e', postalCode: '75017', department: '75' },
  { slug: 'paris-15', name: 'Paris 15e', postalCode: '75015', department: '75' },
  // --- Yvelines (78) ---
  { slug: 'versailles', name: 'Versailles', postalCode: '78000', department: '78' },
  { slug: 'saint-germain-en-laye', name: 'Saint-Germain-en-Laye', postalCode: '78100', department: '78' },
  { slug: 'le-vesinet', name: 'Le Vésinet', postalCode: '78110', department: '78' },
  { slug: 'chatou', name: 'Chatou', postalCode: '78400', department: '78' },
  // --- Val-d'Oise (95) ---
  { slug: 'argenteuil', name: 'Argenteuil', postalCode: '95100', department: '95' },
  { slug: 'cergy', name: 'Cergy', postalCode: '95000', department: '95' },
  // --- Seine-Saint-Denis (93) ---
  { slug: 'saint-denis', name: 'Saint-Denis', postalCode: '93200', department: '93' },
  // --- Val-de-Marne (94) ---
  { slug: 'creteil', name: 'Créteil', postalCode: '94000', department: '94' },
  { slug: 'vincennes', name: 'Vincennes', postalCode: '94300', department: '94' },
];

export const DEPARTMENTS: Record<string, string> = {
  '75': 'Paris',
  '77': 'Seine-et-Marne',
  '78': 'Yvelines',
  '91': 'Essonne',
  '92': 'Hauts-de-Seine',
  '93': 'Seine-Saint-Denis',
  '94': 'Val-de-Marne',
  '95': "Val-d'Oise",
};

export function getZoneBySlug(slug: string) {
  return ZONES.find((z) => z.slug === slug);
}
