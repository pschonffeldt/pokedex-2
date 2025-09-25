export type GenerationKey =
  | 'gen-i'
  | 'gen-ii'
  | 'gen-iii'
  | 'gen-iv'
  | 'gen-v'
  | 'gen-vi'
  | 'gen-vii'
  | 'gen-viii'
  | 'gen-ix';

export type GenerationContent = {
  id: GenerationKey;
  label: string; // e.g., "Gen I"
  years: string; // release window
  region: string; // primary region
  emoji: string; // small visual for the hero
  hero: { blurb: string };

  games: {
    main: string[];
    remakesOrExpansions?: string[];
    bestEntries: { title: string; why: string; href: string }[];
  };

  mechanics: string[]; // what this gen added
  metaShifts: string[]; // why it mattered for the way you play
  starters: string[]; // region starters
  legendaries: string[]; // headliners (trimmed)
  ctas?: { label: string; href: string }[];
};

export const GENERATION_CONTENT: Record<GenerationKey, GenerationContent> = {
  /* -------------------------------- Gen I -------------------------------- */
  'gen-i': {
    id: 'gen-i',
    label: 'Gen I',
    years: '1996–1999',
    region: 'Kanto',
    emoji: '🔴',
    hero: {
      blurb:
        'The origin point. 151 Pokémon, simple mechanics, and a fast, punchy campaign that defined the formula.',
    },
    games: {
      main: ['Red/Blue', 'Yellow (special edition)'],
      remakesOrExpansions: [
        'FireRed/LeafGreen (Gen III remake)',
        'Let’s Go Pikachu/Eevee (Gen VII)',
      ],
      bestEntries: [
        {
          title: 'FireRed/LeafGreen',
          why: 'Classic Kanto with modern QoL and a great post-game (Sevii Islands).',
          href: '/learn/pokemon-generations#gen-iii',
        },
        {
          title: 'Let’s Go Pikachu/Eevee',
          why: 'Beginner-friendly catching, beautiful Kanto tour, co-op ready.',
          href: '/learn/pokemon-generations#gen-vii',
        },
      ],
    },
    mechanics: [
      'Special is one combined stat (Atk/Def split arrives in Gen II, Physical/Special split in Gen IV)',
      'No abilities, no held items',
      'Status and crits behave differently vs modern rules',
    ],
    metaShifts: [
      'Fast offensive pacing—limited switch punishment',
      'Early “coverage by TM” identity for many lines',
      'Laid the Gym → League arc and version exclusives',
    ],
    starters: ['Bulbasaur', 'Charmander', 'Squirtle'],
    legendaries: ['Articuno', 'Zapdos', 'Moltres', 'Mewtwo', 'Mew'],
    ctas: [
      { label: 'Open Kanto region guide', href: '/learn/pokemon-regions/kanto' },
      { label: 'See Starters in Pokédex', href: '/pokedex' },
    ],
  },

  /* -------------------------------- Gen II ------------------------------- */
  'gen-ii': {
    id: 'gen-ii',
    label: 'Gen II',
    years: '1999–2002',
    region: 'Johto',
    emoji: '🟡',
    hero: {
      blurb:
        'Day/Night cycles, breeding, and a legendary post-game: beat Johto then revisit Kanto with level curve reimagined.',
    },
    games: {
      main: ['Gold/Silver', 'Crystal'],
      remakesOrExpansions: ['HeartGold/SoulSilver (Gen IV remake)'],
      bestEntries: [
        {
          title: 'HeartGold/SoulSilver',
          why: 'Best Johto experience: Pokéwalker, follower Pokémon, and polished endgame.',
          href: '/learn/pokemon-generations#gen-iv',
        },
      ],
    },
    mechanics: [
      'Day/Night & weekday events',
      'Breeding + baby Pokémon',
      'Held items; Steel & Dark types added',
    ],
    metaShifts: [
      'Ability to customize growth with breeding/egg moves',
      'Defensive cores stronger with new types',
      'Expanded exploration with time-locked content',
    ],
    starters: ['Chikorita', 'Cyndaquil', 'Totodile'],
    legendaries: ['Ho-Oh', 'Lugia', 'Suicune', 'Raikou', 'Entei', 'Celebi'],
    ctas: [{ label: 'Open Johto guide', href: '/learn/pokemon-regions/johto' }],
  },

  /* -------------------------------- Gen III ------------------------------ */
  'gen-iii': {
    id: 'gen-iii',
    label: 'Gen III',
    years: '2002–2006',
    region: 'Hoenn',
    emoji: '🟢',
    hero: {
      blurb:
        'Abilities and natures redefine identity; Hoenn’s water routes, secret bases, and contests give the series big variety.',
    },
    games: {
      main: ['Ruby/Sapphire', 'Emerald'],
      remakesOrExpansions: ['FireRed/LeafGreen (Kanto), Omega Ruby/Alpha Sapphire (Gen VI remake)'],
      bestEntries: [
        {
          title: 'Emerald',
          why: 'Hoenn definitive: Battle Frontier endgame and team Magma/Aqua arc combined.',
          href: '/learn/pokemon-generations#gen-iii',
        },
        {
          title: 'Omega Ruby and Alpha Sapphire',
          why: 'Modern QoL, DexNav hunting, and a fun post-game (Delta Episode).',
          href: '/learn/pokemon-generations#gen-vi',
        },
      ],
    },
    mechanics: ['Abilities', 'Natures', 'Double battles focus', 'Weather as a strategy'],
    metaShifts: [
      'Roles become distinct via abilities (Intimidate, Chlorophyll, etc.)',
      'Sand/Rain/Sun teams emerge',
      'Breeding for natures opens optimization',
    ],
    starters: ['Treecko', 'Torchic', 'Mudkip'],
    legendaries: ['Groudon', 'Kyogre', 'Rayquaza', 'Regis', 'Latias/Latios', 'Jirachi', 'Deoxys'],
    ctas: [{ label: 'Open Hoenn guide', href: '/learn/pokemon-regions/hoenn' }],
  },

  /* -------------------------------- Gen IV ------------------------------- */
  'gen-iv': {
    id: 'gen-iv',
    label: 'Gen IV',
    years: '2006–2010',
    region: 'Sinnoh',
    emoji: '🔷',
    hero: {
      blurb:
        'The Physical/Special split modernizes combat; online battling/trading begins. Many lines get new evolutions.',
    },
    games: {
      main: ['Diamond/Pearl', 'Platinum'],
      remakesOrExpansions: ['HeartGold/SoulSilver (Johto remake)', 'BDSP (Gen VIII remake)'],
      bestEntries: [
        {
          title: 'Platinum',
          why: 'Sinnoh definitive with faster pacing, better dex, and Distortion World.',
          href: '/learn/pokemon-generations#gen-iv',
        },
        {
          title: 'HG/SS',
          why: 'All-time great remake with follower Pokémon & huge post-game.',
          href: '/learn/pokemon-generations#gen-iv',
        },
      ],
    },
    mechanics: [
      'Physical/Special split by move (not by type)',
      'Online features (GTS/Wi-Fi)',
      'Lots of cross-gen evolutions',
    ],
    metaShifts: [
      'True mixed attackers/specialists become viable',
      'Priority and hazards shape teambuilding',
      'Competitive flourishes with online access',
    ],
    starters: ['Turtwig', 'Chimchar', 'Piplup'],
    legendaries: [
      'Dialga',
      'Palkia',
      'Giratina',
      'Uxie/Mesprit/Azelf',
      'Heatran',
      'Shaymin',
      'Darkrai',
      'Arceus',
    ],
    ctas: [{ label: 'Open Sinnoh guide', href: '/learn/pokemon-regions/sinnoh' }],
  },

  /* -------------------------------- Gen V ------------------------------- */
  'gen-v': {
    id: 'gen-v',
    label: 'Gen V',
    years: '2010–2013',
    region: 'Unova',
    emoji: '⚫️',
    hero: {
      blurb:
        'A complete Pokédex reboot at launch, cinematic storytelling, and BW2 as a rare direct sequel pair.',
    },
    games: {
      main: ['Black/White', 'Black 2/White 2'],
      bestEntries: [
        {
          title: 'Black 2/White 2',
          why: 'Peak 2D Pokémon: great dex variety from start, challenge modes, and rich post-game.',
          href: '/learn/pokemon-generations#gen-v',
        },
      ],
    },
    mechanics: [
      'Season cycle affecting encounters',
      'Hidden Grottos/abilities',
      'Reusable TMs (BW2)',
    ],
    metaShifts: [
      'Better movepools and tutors diversify roles',
      'Power-creep introduces fast breakers',
      'Sequel structure = best “modern classic” starting point',
    ],
    starters: ['Snivy', 'Tepig', 'Oshawott'],
    legendaries: ['Reshiram', 'Zekrom', 'Kyurem (forms)', 'Victini', 'Musketeers', 'Genies'],
    ctas: [{ label: 'Open Unova guide', href: '/learn/pokemon-regions/unova' }],
  },

  /* -------------------------------- Gen VI ------------------------------- */
  'gen-vi': {
    id: 'gen-vi',
    label: 'Gen VI',
    years: '2013–2016',
    region: 'Kalos',
    emoji: '💠',
    hero: {
      blurb:
        '3D presentation, Fairy type, and Mega Evolution shake up both aesthetics and balance.',
    },
    games: {
      main: ['X/Y'],
      remakesOrExpansions: ['Omega Ruby/Alpha Sapphire'],
      bestEntries: [
        {
          title: 'Omega Ruby and Alpha Sapphire',
          why: 'Mega evolutions + strong QoL (DexNav) and a fun post-game.',
          href: '/learn/pokemon-generations#gen-vi',
        },
      ],
    },
    mechanics: ['Fairy type', 'Mega Evolution', 'Super Training & QoL breeding'],
    metaShifts: [
      'Fairy curbs Dragons and Dark strategies',
      'Megas create one-time power spikes & new roles',
      'Accessibility boost for team building',
    ],
    starters: ['Chespin', 'Fennekin', 'Froakie'],
    legendaries: ['Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion'],
    ctas: [{ label: 'Open Kalos guide', href: '/learn/pokemon-regions/kalos' }],
  },

  /* -------------------------------- Gen VII ------------------------------ */
  'gen-vii': {
    id: 'gen-vii',
    label: 'Gen VII',
    years: '2016–2019',
    region: 'Alola',
    emoji: '🌺',
    hero: {
      blurb:
        'Trials replace gyms, regional forms arrive, and Z-Moves offer once-per-battle nukes. Let’s Go modernizes Kanto for families.',
    },
    games: {
      main: ['Sun/Moon', 'Ultra Sun/Ultra Moon'],
      remakesOrExpansions: ['Let’s Go Pikachu/Eevee (Kanto reimagining)'],
      bestEntries: [
        {
          title: 'Ultra Sun/Ultra Moon',
          why: 'Definitive Alola with extra content, totems, and harder fights.',
          href: '/learn/pokemon-generations#gen-vii',
        },
      ],
    },
    mechanics: ['Z-Moves', 'Regional forms (Alolan)', 'Ride Pokémon / QoL'],
    metaShifts: [
      'One-off Z-Move nukes change endgame lines',
      'Regional forms refresh dex variety',
      'Trial totems emphasize doubles-style pressure',
    ],
    starters: ['Rowlet', 'Litten', 'Popplio'],
    legendaries: [
      'Solgaleo',
      'Lunala',
      'Necrozma (forms)',
      'Tapus',
      'Ultra Beasts',
      'Magearna',
      'Marshadow',
    ],
    ctas: [{ label: 'Open Alola guide', href: '/learn/pokemon-regions/alola' }],
  },

  /* -------------------------------- Gen VIII ----------------------------- */
  'gen-viii': {
    id: 'gen-viii',
    label: 'Gen VIII',
    years: '2019–2022',
    region: 'Galar / Hisui',
    emoji: '🛡️',
    hero: {
      blurb:
        'Dynamax/Gigantamax, Wild Area raids, and a big side step with Legends: Arceus that experiments with action-forward catching.',
    },
    games: {
      main: ['Sword/Shield (+ Isle of Armor / Crown Tundra)'],
      remakesOrExpansions: ['Brilliant Diamond/Shining Pearl', 'Legends: Arceus (Hisui prequel)'],
      bestEntries: [
        {
          title: 'Sword/Shield + DLC',
          why: 'Raids, a wide roster, and online/co-op friendly content.',
          href: '/learn/pokemon-generations#gen-viii',
        },
        {
          title: 'Legends: Arceus',
          why: 'Unique catching/exploration loop—great side experience for lore and vibe.',
          href: '/learn/pokemon-generations#gen-viii',
        },
      ],
    },
    mechanics: ['Dynamax/Gigantamax', 'Open Wild Area & Raids', 'TMs/TRs split'],
    metaShifts: [
      'Raid ecosystem makes co-op relevant',
      'Powerful Max moves push tempo control',
      'Hisui forms create fresh move typings',
    ],
    starters: ['Grookey', 'Scorbunny', 'Sobble'],
    legendaries: ['Zacian', 'Zamazenta', 'Eternatus', 'Regidrago/Regieleki', 'Calyrex (steeds)'],
    ctas: [{ label: 'Open Galar guide', href: '/learn/pokemon-regions/galar' }],
  },

  /* -------------------------------- Gen IX ------------------------------- */
  'gen-ix': {
    id: 'gen-ix',
    label: 'Gen IX',
    years: '2022–present',
    region: 'Paldea',
    emoji: '💎',
    hero: {
      blurb:
        'True open-world structure with three story paths and raids. Terastallization rewrites coverage and roles.',
    },
    games: {
      main: ['Scarlet/Violet (+ The Teal Mask / The Indigo Disk)'],
      bestEntries: [
        {
          title: 'Scarlet/Violet',
          why: 'Best modern entry point: free-form pathing, raid economy, and flexible team building.',
          href: '/learn/pokemon-generations#gen-ix',
        },
      ],
    },
    mechanics: ['Terastallization', 'Open-world stories (3 paths)', 'TMs craftable, raid loop'],
    metaShifts: [
      'Tera lets any mon flip matchups and roles',
      'Raids = fast progression and item farming',
      'Exploration-first structure changes pacing',
    ],
    starters: ['Sprigatito', 'Fuecoco', 'Quaxly'],
    legendaries: ['Koraidon', 'Miraidon', 'Treasures of Ruin', 'Paradox legendaries'],
    ctas: [{ label: 'Open Paldea guide', href: '/learn/pokemon-regions/paldea' }],
  },
};

export const ALL_GENERATIONS = Object.keys(GENERATION_CONTENT) as GenerationKey[];

export function isGenerationKey(x: string): x is GenerationKey {
  return x in GENERATION_CONTENT;
}
