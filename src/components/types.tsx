export type TypeId =
  | 'normal'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'ice'
  | 'fighting'
  | 'poison'
  | 'ground'
  | 'flying'
  | 'psychic'
  | 'bug'
  | 'rock'
  | 'ghost'
  | 'dragon'
  | 'dark'
  | 'steel'
  | 'fairy';

export type TypePageContent = {
  id: TypeId;
  name: string;
  hero: { blurb: string };
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendedStarters?: string[];
  ctas?: { label: string; href: string }[];
};

export const TYPE_CONTENT = {
  fire: {
    id: 'fire',
    name: 'Fire',
    hero: {
      blurb:
        'High offensive pressure and great late-game sweeping potential. Fire-types threaten Steel, Bug, Ice, and Grass but must watch out for Rock, Ground, and Water.',
    },
    summary:
      'Fire Pokémon excel at forcing progress with burn pressure and strong special attacks. They pair well with Ground or Water teammates to cover typical checks.',
    strengths: ['Super-effective vs Bug, Grass, Ice, Steel', 'Often strong special movepools'],
    weaknesses: ['Weak to Water, Ground, Rock', 'Commonly walled by bulky Waters'],
    recommendedStarters: ['Charmander', 'Fennekin', 'Fuecoco'],
    ctas: [
      { label: 'See Fire Pokédex', href: '/pokedex?type=fire' },
      { label: 'Type chart', href: '/learn/pokemon-types' },
    ],
  },

  electric: {
    id: 'electric',
    name: 'Electric',
    hero: {
      blurb:
        'Speed and momentum. Electric-types punish Water/Flying and force switches with Volt Switch—beware Ground immunities.',
    },
    summary:
      'Electric pairs perfectly with Ground or Grass to handle immunities. Fast pivot sets let you control tempo and scout counters.',
    strengths: ['Super-effective vs Water, Flying', 'Great speed and pivot options'],
    weaknesses: ['No effect on Ground', 'Limited coverage without Tera/Hidden Power'],
    recommendedStarters: ['Pikachu (Let’s Go)', 'Pawmi line (Paldea)'],
    ctas: [
      { label: 'See Electric Pokédex', href: '/pokedex?type=electric' },
      { label: 'Build coverage', href: '/learn/guides/type-coverage' },
    ],
  },
  // add more types as you author them…
} satisfies Partial<Record<TypeId, TypePageContent>>;

// Derive the valid keys from what you actually provided:
export type TypeKey = keyof typeof TYPE_CONTENT;
export const ALL_TYPES = Object.keys(TYPE_CONTENT) as TypeKey[];

// (Optional) guard for runtime checks
export function isTypeKey(x: string): x is TypeKey {
  return x in TYPE_CONTENT;
}
