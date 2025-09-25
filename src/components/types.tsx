// src/content/pkm-types.ts

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

export const TYPE_CONTENT: Record<TypeId, TypePageContent> = {
  /* =============================== NORMAL =============================== */
  normal: {
    id: 'normal',
    name: 'Normal',
    hero: {
      blurb:
        'Flexible movepools, great bulk, and near-universal neutral hits. Normal lacks super-effective STAB but makes up for it with coverage, utility, and consistency.',
    },
    summary:
      'Normal-types are the definition of role compression: they tank hits well, learn a wide set of support and coverage moves (Knock Off, Thunder Wave, Parting Shot, elemental punches), and hit most foes neutrally with STAB Return/Body Slam/Double-Edge or Hyper Voice. Pair with Fighting or Ground to break Rock/Steel, and bring a Ghost answer since Ghost is immune to Normal STAB.',
    strengths: [
      'Neutral STAB into most of the chart',
      'Often very bulky with strong recovery or utility',
      'Access to premium support (Knock Off, status, pivots)',
    ],
    weaknesses: [
      'No super-effective STAB targets',
      'Ghost is immune to Normal',
      'Struggles vs Rock/Steel without coverage (Fighting/Ground)',
    ],
    recommendedStarters: [
      'Eevee line',
      'Snorlax (later-game)',
      'Staraptor/Noivern style flyers as partners',
    ],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== FIRE ================================ */
  fire: {
    id: 'fire',
    name: 'Fire',
    hero: {
      blurb:
        'High offensive pressure and great late-game sweeping potential. Fire threatens Steel, Bug, Ice, and Grass but must respect Rock, Ground, and Water.',
    },
    summary:
      'Fire Pokémon force progress with burn pressure (Will-O-Wisp/Flame Body) and powerful STAB like Flamethrower/Overheat/Flare Blitz. They pair naturally with Ground or Water to cover opposing Fire checks and Rock/Ground types. Many Fire-types double as hazard removers or setup sweepers (Swords Dance/Nasty Plot).',
    strengths: [
      'Super-effective vs Bug, Grass, Ice, Steel',
      'Punishes contact with burn; deters physical attackers',
      'Frequently potent special movepools for wallbreaking',
    ],
    weaknesses: [
      'Weak to Water, Ground, Rock; Stealth Rock chip matters',
      'Can be stonewalled by bulky Waters without coverage',
    ],
    recommendedStarters: ['Charmander', 'Fennekin', 'Fuecoco'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== WATER =============================== */
  water: {
    id: 'water',
    name: 'Water',
    hero: {
      blurb:
        'The most consistent type in the game. Water checks Fire, Ground, and Rock, offers broad movepools, and fits offense or defense with ease.',
    },
    summary:
      'Water boasts excellent neutral hits, splashable resistances, and many role options: bulky pivots (Milotic, Suicune), hazard control (Quaquaval), rain sweepers (Floatzel, Barraskewda), or utility sponges (Toxapex—Poison dual). Pair with Electric or Grass to pressure opposing Waters and with Ground for Volt immunity.',
    strengths: [
      'Super-effective vs Fire, Ground, Rock',
      'Key resistances (Fire, Ice, Water, Steel)',
      'Deep movepools (Ice Beam, Flip Turn, Calm Mind/Dragon Dance)',
    ],
    weaknesses: ['Weak to Electric and Grass', 'Can become passive without coverage or boosting'],
    recommendedStarters: ['Squirtle', 'Totodile', 'Mudkip', 'Quaxly'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== GRASS =============================== */
  grass: {
    id: 'grass',
    name: 'Grass',
    hero: {
      blurb:
        'Control and utility. Grass checks Water/Ground/Rock, spreads status, and sustains with recovery—just protect it from Fire, Ice, Flying, Bug, and Poison.',
    },
    summary:
      'Grass-types bring premium tools: Leech Seed, Spore/Sleep Powder, Giga Drain, Synthesis, and hazard interactions (Spikes synergy). They check Rain and Ground cores, force swaps, and chip teams over time. They pair well with Fire or Steel to cover shared weaknesses and with Water for classic FWG cores.',
    strengths: [
      'Super-effective vs Water, Ground, Rock',
      'Access to status, drains, and strong sustain',
      'Excellent anti-weather vs rain and sand',
    ],
    weaknesses: [
      'Weak to Fire, Ice, Flying, Bug, Poison',
      'Commonly walled by opposing Grass/Dragon without coverage',
    ],
    recommendedStarters: ['Bulbasaur', 'Chikorita', 'Rowlet', 'Sprigatito'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ============================== ELECTRIC ============================= */
  electric: {
    id: 'electric',
    name: 'Electric',
    hero: {
      blurb:
        'Speed and momentum. Electric punishes Water/Flying and forces switches with Volt Switch—just plan for Ground immunities.',
    },
    summary:
      'Electric excels at tempo. Fast pivots (Volt Switch), great special STAB (Thunderbolt/Discharge), and strong end-game cleaning. Pair with Ground (immunity + Rock/Ground breaking) or Grass (punish Grounds). Coverage like Ice/Grass Knot turns neutral matchups into KOs.',
    strengths: [
      'Super-effective vs Water, Flying',
      'Top-tier speed and pivot options (VoltTurn cores)',
      'Paralysis spread and high accuracy options (Discharge)',
    ],
    weaknesses: [
      'No effect on Ground; requires coverage or partners',
      'Limited STAB variety; can be prediction-reliant',
    ],
    recommendedStarters: ['Pikachu (Let’s Go)', 'Pawmot line (Paldea early-game)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================ ICE ================================= */
  ice: {
    id: 'ice',
    name: 'Ice',
    hero: {
      blurb:
        'The best offensive coverage in one STAB—Dragons, Flyers, Grounds, and Grasses all fear Ice. Defensively frail, it needs support to shine.',
    },
    summary:
      'Ice is the ultimate coverage button: Ice Beam/Icicle Crash threaten meta staples. Defensively it’s fragile (many weaknesses), so support it with hazard control, screens, or bulky partners (Water/Steel). Hail/Snow teams grant Defense boosts and enable Slush Rush sweepers.',
    strengths: [
      'Super-effective vs Dragon, Flying, Ground, Grass',
      'Incredible end-game pressure; pairs with Water/Electric',
      'Snow teams enable bulky offense',
    ],
    weaknesses: ['Weak to Fire, Fighting, Rock, Steel', 'Few resistances; SR chip hurts'],
    recommendedStarters: ['Alolan Vulpix (gift/event)', 'Snover line (early in some regions)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ============================== FIGHTING ============================== */
  fighting: {
    id: 'fighting',
    name: 'Fighting',
    hero: {
      blurb:
        'The premier breaker of Steels, Rocks, and Ice. Fighting flips bulky cores but must answer Fairies, Flyers, and Psychics.',
    },
    summary:
      'Fighting-types punch holes with Close Combat/Drain Punch/Mach Punch and threaten setup (Bulk Up/Swords Dance). They pair well with Dark (covers Psychic) and Electric or Rock (to smash Flying). Priority access makes them excellent revenge killers.',
    strengths: [
      'Super-effective vs Normal, Rock, Steel, Ice, Dark',
      'Priority (Mach Punch/Vacuum Wave) and setup tools',
      'Great with hazards for forced KOs',
    ],
    weaknesses: ['Weak to Flying, Fairy, Psychic', 'Can be worn down by recoil and Intimidate'],
    recommendedStarters: ['Riolu line (gift in some games)', 'Mankey/Primeape (early routes)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== POISON =============================== */
  poison: {
    id: 'poison',
    name: 'Poison',
    hero: {
      blurb:
        'Fairy slayer and status king. Poison walls Grass, sets Toxic Spikes, and shrugs off poison—just avoid Ground and Psychic.',
    },
    summary:
      'Modern metas love Poison: it checks Fairy, absorbs Toxic Spikes, and spreads status. Defensive anchors like Toxapex and Amoonguss or offensive threats like Gengar/Overqwil give teams balance. Pair with Ground/Steel to cover Psychic and stack resistances.',
    strengths: [
      'Super-effective vs Fairy, Grass',
      'Toxic/Toxic Spikes, status absorption, Regenerator options',
      'Great defensive synergy cores (Water/Poison, Grass/Poison)',
    ],
    weaknesses: ['Weak to Ground and Psychic', 'Offense can be prediction heavy vs Steels'],
    recommendedStarters: ['Koffing/Grimer (early options)', 'Foongus (mid-game utility)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== GROUND =============================== */
  ground: {
    id: 'ground',
    name: 'Ground',
    hero: {
      blurb:
        'Electric immunity, Rock/Steel buster, and premium coverage. Ground anchors teams and opens win paths.',
    },
    summary:
      'Ground offers unmatched utility: Volt immunity, Earthquake STAB, and great duals (Ground/Water, Ground/Flying, Ground/Steel). It pairs naturally with Flying (covers Grass and Ground’s Ice weakness) and Water or Grass to punish opposing Grounds.',
    strengths: [
      'Super-effective vs Fire, Electric, Poison, Rock, Steel',
      'Volt immunity; hazard control via common partners',
      'Often excellent physical stats and setup options',
    ],
    weaknesses: ['Weak to Water, Grass, Ice', 'Ground resists are common on rain/Grass cores'],
    recommendedStarters: ['Sandshrew/Geodude (early), Quagsire line (mid-game)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== FLYING =============================== */
  flying: {
    id: 'flying',
    name: 'Flying',
    hero: {
      blurb:
        'Ground immunity and hazard evasion define Flying. It brings speed, pivoting, and strong coverage—keep Electric/Ice/Rock in check.',
    },
    summary:
      'Flying-types enable offensive cores: U-turn/Brave Bird/Hurricane pressure, Ground immunity (free switches), and synergy with Ground/Electric in VoltTurn shells. Heavy-Duty Boots mitigate Rock weakness and enable consistent role execution.',
    strengths: [
      'Super-effective vs Bug, Fighting, Grass',
      'Ground immunity; ignores Spikes/Toxic Spikes',
      'Great speed + pivot moves for tempo control',
    ],
    weaknesses: ['Weak to Electric, Ice, Rock', 'Stealth Rock without Boots can be limiting'],
    recommendedStarters: [
      'Fletchling/Staravia (early routes)',
      'Noibat (fast special core partner)',
    ],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== PSYCHIC ============================== */
  psychic: {
    id: 'psychic',
    name: 'Psychic',
    hero: {
      blurb:
        'Special offense, status, and screens. Psychic melts Fighters and Poisons but must play around Dark and Ghost.',
    },
    summary:
      'Psychic-types range from nukes (Alakazam, Latios) to support (Espeon screens, Indeedee Terrain). They pair with Fairy/Steel for Dark/Ghost insurance and thrive with hazards to turn 2HKOs into OHKOs. Utility like Calm Mind, Recover, Trick, and Teleport keep them relevant.',
    strengths: [
      'Super-effective vs Fighting, Poison',
      'Powerful special movepools; Calm Mind/Trick utility',
      'Terrain and screen support available',
    ],
    weaknesses: ['Weak to Bug, Ghost, Dark', 'Dark immunity to Psychic STAB'],
    recommendedStarters: ['Abra/Ralts (early in many games)', 'Espurr (Gen VI)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================= BUG ================================= */
  bug: {
    id: 'bug',
    name: 'Bug',
    hero: {
      blurb:
        'Early access, great utility, and U-turn tempo. Bug threatens Dark/Psychic/Grass but needs partners to cover Fire/Flying/Rock.',
    },
    summary:
      'Bug-types give teams early power spikes (Heracross, Scizor, Vivillon) and elite utility (Quiver Dance, Sticky Web, Tail Glow in older gens). U-turn forms momentum engines with Electric/Flying cores. With Steel or Water partners, Bug becomes a durable part of balanced squads.',
    strengths: [
      'Super-effective vs Dark, Grass, Psychic',
      'Access to U-turn, Webs, Quiver Dance in various metas',
      'Often early-game availability',
    ],
    weaknesses: ['Weak to Fire, Flying, Rock', 'Many frail options—needs hazard control'],
    recommendedStarters: ['Scyther/Heracross (regional), Kricketune/Vivillon (early sweepers)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================ ROCK ================================ */
  rock: {
    id: 'rock',
    name: 'Rock',
    hero: {
      blurb:
        'High physical bulk, sand synergy, and key resistances. Rock deletes Fire/Flying/Ice/Bug but must dodge Water/Grass/Ground.',
    },
    summary:
      'Rock-types anchor sand teams, set Stealth Rock, and punish Flying/Fire cores. Duals like Rock/Ground and Rock/Steel offer varied roles. Pair with Water/Grass to cover weaknesses and consider Sand Stream partners (Tyranitar/Hippowdon) for passive chip and SpD boosts.',
    strengths: [
      'Super-effective vs Fire, Flying, Ice, Bug',
      'Stealth Rock access and sand synergy',
      'Often excellent physical stats',
    ],
    weaknesses: ['Weak to Water, Grass, Ground, Fighting, Steel', 'Low speed on many options'],
    recommendedStarters: ['Geodude/Onix early; Tyranitar line (late power)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== GHOST =============================== */
  ghost: {
    id: 'ghost',
    name: 'Ghost',
    hero: {
      blurb:
        'Immunities to Normal and Fighting, elite spinblocking, and scary STABs. Ghost breaks bulky cores but fears Dark mirrors.',
    },
    summary:
      'Ghost-types blend offense and utility: Will-O-Wisp + Hex, Nasty Plot, Strength Sap, and immunities that open switch-in windows. They pair excellently with Fairy/Fighting to handle Dark and can form oppressive hazard-stacking teams that deny removal.',
    strengths: [
      'Super-effective vs Ghost, Psychic',
      'Immunities to Normal and Fighting; spinblock utility',
      'Great status synergy (Hex, Will-O-Wisp)',
    ],
    weaknesses: ['Weak to Ghost and Dark', 'Can be pursuit-trapped or checked by strong Darks'],
    recommendedStarters: ['Gastly line (early in towers), Mimikyu (mid-game)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* =============================== DRAGON =============================== */
  dragon: {
    id: 'dragon',
    name: 'Dragon',
    hero: {
      blurb:
        'Late-game titans with top stats and setup potential. Dragon forces respect but must navigate Fairy/Ice/Dark cores.',
    },
    summary:
      'Dragons sweep with Dragon Dance/Calm Mind/Scale Shot and pressure neutral hits. They pair naturally with Steel (to wall Fairy/Ice) and Fairy (defensive switch-ins + status). Mixed sets let them tailor to the metagame (Fire Blast/EQ).',
    strengths: [
      'Great statlines and movepools',
      'Resist Fire/Water/Electric/Grass in many cases',
      'Late-game sweeping with DD/CM',
    ],
    weaknesses: ['Weak to Ice, Dragon, Fairy', 'Fairy immunity to Dragon STAB'],
    recommendedStarters: ['Gible/Dratini (later capture), Tatsugiri as support partner'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================ DARK ================================ */
  dark: {
    id: 'dark',
    name: 'Dark',
    hero: {
      blurb:
        'Knock Off, trap control, and anti-Psychic/Ghost pressure. Dark defines item removal and forces awkward switches.',
    },
    summary:
      'Dark-types are glue: Knock Off, Taunt, Sucker Punch, and strong neutral STAB (Crunch/Fiery Wrath). They pair with Fighting (handles Dark/Steel/Rock) and Poison/Fairy to switch into opposing Fairies. Great on balance, stall, and offense alike.',
    strengths: [
      'Super-effective vs Psychic, Ghost',
      'Knock Off/item control + strong priority options',
      'Great synergy with Fighting and Steel/Poison',
    ],
    weaknesses: ['Weak to Fighting, Bug, Fairy', 'Prediction games around Sucker Punch'],
    recommendedStarters: ['Shinx/Litleo partners; early Stunky/Poochyena lines'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================ STEEL =============================== */
  steel: {
    id: 'steel',
    name: 'Steel',
    hero: {
      blurb:
        'The best defensive type: huge resist list and poison immunity. Steel sets hazards, walls threats, and enables greedy sweepers.',
    },
    summary:
      'Steel-types provide structure: Stealth Rock/Spikes, phazing, and safe pivots into Dragons/Fairies/Ice. Offense is weaker by default, so pair with Fighting, Ground, or strong special attackers. On offense, look for Steel breakers (Gholdengo, Kingambit, Scizor).',
    strengths: [
      'Super-effective vs Rock, Ice, Fairy',
      'Many resistances + Poison immunity',
      'Access to hazards and utility',
    ],
    weaknesses: ['Weak to Fire, Fighting, Ground', 'Can be passive without setup or coverage'],
    recommendedStarters: ['Magnemite/Aron (mid-game), Pawniard (early)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },

  /* ================================ FAIRY =============================== */
  fairy: {
    id: 'fairy',
    name: 'Fairy',
    hero: {
      blurb:
        'Dragon and Dark stopper. Fairy is a premier defensive/offensive piece, combining great resistances with strong STAB and utility.',
    },
    summary:
      'Fairy-types check Dragons and harass Dark/Fighting cores. Many bring cleric tools (Wish/Aromatherapy), setup (Calm Mind), or disruption (Encore/Thunder Wave). Pair with Steel to cover Poison/Steel threats and with Water/Ground to round out resistances.',
    strengths: [
      'Super-effective vs Dragon, Dark, Fighting',
      'Key resistances and strong special movepools',
      'Cleric/utility options for balance builds',
    ],
    weaknesses: ['Weak to Steel and Poison', 'Certain Steels wall mono-Fairy sets'],
    recommendedStarters: ['Ralts (Fairy dual later), Jigglypuff line (support)'],
    ctas: [
      { label: 'See Pokédex', href: '/pokedex' },
      { label: 'Discover generations', href: '/learn/generations' },
    ],
  },
};

/** All valid keys (used by generateStaticParams) */ export const ALL_TYPES = Object.keys(
  TYPE_CONTENT
) as TypeId[];

/** Runtime guard */
export function isTypeKey(x: string): x is TypeId {
  return x in TYPE_CONTENT;
}
