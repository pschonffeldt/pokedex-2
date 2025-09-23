// app/page.tsx
'use client';

import HeroSection from '@/components/hero';
import Link from 'next/link';
import { useState } from 'react';

const primaryBtn =
  'rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60';
const darkBtn =
  'rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black';

/* ----------------------------- Beginner Paths ----------------------------- */

function BeginnerPathsSection() {
  const cards: {
    title: string;
    steps: Array<[string, string]>;
    cta: [string, string];
  }[] = [
    {
      title: 'New to Pokémon?',
      steps: [
        ['Learn types (10 min)', '/learn/pokemon-types'],
        ['Pick a region to start', '/learn/pokemon-regions'],
        ['Choose a starter', '/learn/guides/starter-picks'],
        ['Open the Pokédex', '/pokedex'],
        ['Build basic coverage', '/learn/guides/type-coverage'],
      ],
      cta: ['Start learning', '/learn'],
    },
    {
      title: 'Returning after Gen IV?',
      steps: [
        ['Skim the Generations timeline', '/learn/pokemon-generations'],
        ['Read new mechanics (Megas → Tera)', '/learn/pokemon-generations#timeline'],
        ['Check regional forms', '/pokedex?query=regional'],
        ['Pick a modern entry', '/learn/pokemon-generations#recommended'],
        ['Plan a team in the Pokédex', '/pokedex'],
      ],
      cta: ['Catch up fast', '/learn/pokemon-generations'],
    },
    {
      title: 'Competitive curious?',
      steps: [
        ['Types & multipliers deep dive', '/learn/pokemon-types'],
        ['Coverage recipes (BoltBeam, etc.)', '/learn/guides/type-coverage'],
        ['Speed control & hazards 101', '/learn/guides/hazards'],
        ['Build a sample core', '/learn/guides/sample-cores'],
        ['Search sets in Pokédex', '/pokedex'],
      ],
      cta: ['Open type chart', '/types'],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Beginner paths: choose a quick-start plan
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Follow a short checklist tailored to your background—every step links to the right spot.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{c.title}</div>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
                {c.steps.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="underline-offset-4 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ol>
              <div className="mt-3">
                <Link
                  href={c.cta[1]}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-900 hover:bg-gray-100"
                >
                  {c.cta[0]}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------- Boss Counters ------------------------------ */

type Boss = {
  name: string;
  tag: string; // Gym/Elite/Trial/Titan
  recommends: string[]; // 3–5 short counter blurbs
};

const bossCountersData: Record<string, Boss[]> = {
  Kanto: [
    {
      name: 'Brock',
      tag: 'Gym — Rock/Ground',
      recommends: [
        'Grass/Water sweepers (Bulbasaur, Squirtle)',
        'Bring status (Leech Seed/Water Gun spam)',
        'Avoid Electric early (immune)',
      ],
    },
    {
      name: 'Misty',
      tag: 'Gym — Water',
      recommends: [
        'Electric (Pikachu/Jolteon)',
        'Grass (Bellsprout/Oddish)',
        'Watch for Ice Beam—pack a bulky Electric',
      ],
    },
    {
      name: 'Lt. Surge',
      tag: 'Gym — Electric',
      recommends: [
        'Ground (Diglett/Dugtrio) — immunity',
        'Rock/Ground covers Volt Switch loops',
        'Avoid Flying/Water if under-leveled',
      ],
    },
    {
      name: 'Erika',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying (Charmeleon/Pidgeotto)',
        'Poison (Beedrill/Muk) resists status',
        'Carry a burn heal substitute',
      ],
    },
    {
      name: 'Koga',
      tag: 'Gym — Poison',
      recommends: [
        'Ground/Psychic (Kadabra/Dugtrio)',
        'Antidotes; switch on Toxic',
        'Rock for Venomoth coverage',
      ],
    },
    {
      name: 'Sabrina',
      tag: 'Gym — Psychic',
      recommends: [
        'Dark/Bug/Ghost (Snorlax/Beedrill/Haunter)',
        'Physical attackers to dodge Sp. Def walls',
        'X-Scissor/Night Slash help',
      ],
    },
    {
      name: 'Blaine',
      tag: 'Gym — Fire',
      recommends: [
        'Water/Ground (Blastoise/Rhydon)',
        'Rock for Fire/Flying',
        'Beware burn—use special Water moves',
      ],
    },
    {
      name: 'Giovanni',
      tag: 'Gym — Ground',
      recommends: [
        'Water/Grass/Ice (Starmie/Venusaur)',
        'Levitate/Flying avoids EQ',
        'Pack status for bulky Nidos',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Ice for Lance’s Dragons',
        'Electric/Grass for Lorelei’s Waters',
        'Psychic/Flying for Bruno',
        'Dark/Ground for Agatha',
        'Flexible core for rival mix',
      ],
    },
  ],
  Johto: [
    {
      name: 'Falkner',
      tag: 'Gym — Flying',
      recommends: [
        'Electric (Mareep line)',
        'Rock (Geodude) early answers',
        'Avoid Bug/Grass leads',
      ],
    },
    {
      name: 'Bugsy',
      tag: 'Gym — Bug',
      recommends: [
        'Flying/Fire (Pidgeotto/Quilava)',
        'Rock vs Scyther U-turn',
        'Keep potions for Fury Cutter snowball',
      ],
    },
    {
      name: 'Whitney',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting (Machop trade)',
        'Status or Ghost to stall Rollout',
        'Disable Attract with female/oblivious',
      ],
    },
    {
      name: 'Morty',
      tag: 'Gym — Ghost',
      recommends: [
        'Dark/Ground (Umbreon/Donphan)',
        'Status cures vs Hypnosis',
        'Avoid Normal/Fighting spam',
      ],
    },
    {
      name: 'Chuck',
      tag: 'Gym — Fighting',
      recommends: [
        'Flying/Psychic (Noctowl/Espeon)',
        'Use Reflect/Intimidate',
        'Beware Dynamic Punch confuse',
      ],
    },
    {
      name: 'Jasmine',
      tag: 'Gym — Steel',
      recommends: [
        'Ground/Fire (Quagsire/Typhlosion)',
        'Special Water vs Steelix',
        'Pack burns or screens',
      ],
    },
    {
      name: 'Pryce',
      tag: 'Gym — Ice',
      recommends: [
        'Fighting/Rock/Steel',
        'Electric for Dewgong/Piloswine coverage',
        'Avoid Grass vs Ice Shard',
      ],
    },
    {
      name: 'Clair',
      tag: 'Gym — Dragon',
      recommends: [
        'Ice/Fairy answers',
        'Dragon Rage countermeasures',
        'Thunder Wave support helps',
      ],
    },
  ],
};

function BossCountersSection() {
  const regions = Object.keys(bossCountersData);
  const [region, setRegion] = useState<string>(regions[0]);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Boss counters: gyms, trials, titans & elite
          </h3>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRegion(r)}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  r === region
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bossCountersData[region].map((b) => (
            <article key={b.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{b.name}</div>
              <div className="text-xs text-gray-600">{b.tag}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {b.recommends.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-5">
          <Link href="/learn/pokemon-regions" className={primaryBtn}>
            Open region guides
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Version Exclusives Matrix -------------------------- */

type Pair = {
  key: string;
  label: string;
  a: { name: string; exclusives: string[]; version: string };
  b: { name: string; exclusives: string[]; version: string };
};

const exclusivePairs: Pair[] = [
  {
    key: 'red-blue',
    label: 'Kanto — Red vs Blue',
    a: { name: 'Red', version: 'red', exclusives: ['Ekans', 'Arcanine', 'Scyther'] },
    b: { name: 'Blue', version: 'blue', exclusives: ['Sandshrew', 'Ninetales', 'Pinsir'] },
  },
  {
    key: 'gold-silver',
    label: 'Johto — Gold vs Silver',
    a: { name: 'Gold', version: 'gold', exclusives: ['Mankey', 'Growlithe', 'Gligar'] },
    b: { name: 'Silver', version: 'silver', exclusives: ['Vulpix', 'Meowth', 'Skarmory'] },
  },
  {
    key: 'scarlet-violet',
    label: 'Paldea — Scarlet vs Violet',
    a: {
      name: 'Scarlet',
      version: 'scarlet',
      exclusives: ['Larvitar line', 'Armarouge', 'Stonjourner'],
    },
    b: { name: 'Violet', version: 'violet', exclusives: ['Bagon line', 'Ceruledge', 'Eiscue'] },
  },
];

function VersionExclusivesSection() {
  const [pairKey, setPairKey] = useState<string>(exclusivePairs[0].key);
  const current = exclusivePairs.find((p) => p.key === pairKey)!;

  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Version exclusives (quick compare)
          </h3>
          <div className="flex flex-wrap gap-2">
            {exclusivePairs.map((p) => (
              <button
                key={p.key}
                type="button"
                onClick={() => setPairKey(p.key)}
                className={`rounded-full border px-3 py-1 text-xs font-medium ${
                  p.key === pairKey
                    ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[current.a, current.b].map((side) => (
            <article key={side.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{side.name}</div>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
                {side.exclusives.map((s) => (
                  <li key={s} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                    <Link
                      href={`/pokedex?version=${side.version}&query=${encodeURIComponent(s)}`}
                      className="hover:underline"
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-5">
          <Link href="/pokedex" className={primaryBtn}>
            Browse exclusives in Pokédex
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Starter Chooser ------------------------------ */

type StarterResult = {
  region: string;
  starter: string;
  teammates: string[];
  rationale: string;
};

function pickStarter(
  region: string,
  style: 'aggressive' | 'balanced' | 'defensive'
): StarterResult {
  // heuristic: Fire → aggressive, Water → balanced, Grass → defensive/utility
  const map: Record<string, Record<string, StarterResult>> = {
    Kanto: {
      aggressive: {
        region,
        starter: 'Charmander (Fire)',
        teammates: ['Gyarados (Water/Flying)', 'Jolteon (Electric)', 'Dugtrio (Ground)'],
        rationale:
          'Fire offense; Water covers Rock/Ground; Ground handles Electric; Electric punishes Water/Flying.',
      },
      balanced: {
        region,
        starter: 'Squirtle (Water)',
        teammates: ['Jolteon (Electric)', 'Venusaur (Grass/Poison)', 'Nidoking (Ground/Poison)'],
        rationale:
          'Water core with Electric/Grass coverage and Ground utility for Electrics/Poison.',
      },
      defensive: {
        region,
        starter: 'Bulbasaur (Grass/Poison)',
        teammates: ['Arcanine (Fire)', 'Lapras (Water/Ice)', 'Alakazam (Psychic)'],
        rationale:
          'Bulky early game; Fire breaks Steels/Grasses, Water/Ice beats Dragons/Ground; Psychic checks Fighting/Poison.',
      },
    },
    Johto: {
      aggressive: {
        region,
        starter: 'Cyndaquil (Fire)',
        teammates: ['Gyarados (Water/Flying)', 'Ampharos (Electric)', 'Donphan (Ground)'],
        rationale: 'Fire offense with Electric + Ground coverage and Water pivot.',
      },
      balanced: {
        region,
        starter: 'Totodile (Water)',
        teammates: ['Magneton (Electric/Steel)', 'Meganium (Grass)', 'Crobat (Poison/Flying)'],
        rationale: 'Round coverage; Steel resistances; Flying utility speed.',
      },
      defensive: {
        region,
        starter: 'Chikorita (Grass)',
        teammates: ['Arcanine (Fire)', 'Lanturn (Water/Electric)', 'Piloswine (Ice/Ground)'],
        rationale:
          'Supportive Grass with Fire breaker, bulky Water/Electric pivot, and Ice/Ground for Dragons/Electrics.',
      },
    },
    Paldea: {
      aggressive: {
        region,
        starter: 'Fuecoco (Fire)',
        teammates: [
          'Kilowattrel (Electric/Flying)',
          'Great Tusk (Ground/Fighting)',
          'Gholdengo (Ghost/Steel)',
        ],
        rationale: 'Fire offense + premium breakers; strong hazard control and resist profile.',
      },
      balanced: {
        region,
        starter: 'Quaxly (Water)',
        teammates: ['Pawmot (Electric/Fighting)', 'Garganacl (Rock)', 'Arboliva (Grass)'],
        rationale:
          'Water pivot with Electric/Fighting pressure, Rock bulk, and Grass terrain utility.',
      },
      defensive: {
        region,
        starter: 'Sprigatito (Grass)',
        teammates: ['Arcanine-H (Fire/Rock)', 'Toxapex (Water/Poison)', 'Orthworm (Steel)'],
        rationale: 'Balance build: bulky cores + Fire breaker to remove Steels/Grasses.',
      },
    },
  };

  const regionMap = map[region] ?? map['Kanto'];
  return regionMap[style] ?? regionMap['balanced'];
}

function StarterQuiz() {
  const [region, setRegion] = useState('Kanto');
  const [style, setStyle] = useState<'aggressive' | 'balanced' | 'defensive'>('balanced');
  const [result, setResult] = useState<StarterResult | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Starter chooser: what fits your playstyle?
        </h3>
        <p className="mt-2 text-sm text-gray-600">
          Pick a region and how you like to play—get a starter plus three suggested teammates with
          solid type coverage.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">1) Choose region</div>
            <select
              aria-label="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
            >
              {['Kanto', 'Johto', 'Paldea'].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">2) Playstyle</div>
            <div className="mt-2 flex flex-col gap-2">
              {[
                ['balanced', 'Balanced / flexible'],
                ['aggressive', 'Aggressive / fast-paced'],
                ['defensive', 'Defensive / supportive'],
              ].map(([val, label]) => (
                <label key={val} className="flex items-center gap-2 text-sm text-gray-800">
                  <input
                    type="radio"
                    name="style"
                    value={val}
                    checked={style === (val as any)}
                    onChange={() => setStyle(val as any)}
                    className="h-4 w-4"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">3) Get recommendation</div>
            <button
              type="button"
              onClick={() => setResult(pickStarter(region, style))}
              className={primaryBtn + ' mt-2'}
            >
              Show my starter
            </button>
          </div>
        </div>

        {result && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">
              {result.region}: {result.starter}
            </div>
            <div className="mt-1 text-sm text-gray-700">{result.rationale}</div>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {result.teammates.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
                >
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link href="/pokedex" className={primaryBtn}>
                Open Pokédex
              </Link>
              <Link href="/learn/pokemon-types" className={darkBtn}>
                Review type coverage
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ---------------------------------- Page ---------------------------------- */

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title="PokéWorld Explorer"
        description={
          <>
            Learn, search, and master the Pokémon universe. Use our cutting-edge Pokédex, region
            guides, type primer, and generation timeline to plan teams and explore from Kanto to
            Paldea.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/types', label: 'Discover Pokémon Types', variant: 'dark' },
        ]}
      />

      {/* Core entry points (kept from your previous version) */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <h2 className="sr-only">Core Entry Points</h2>

        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Pokédex */}
          <article className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <h3 className="text-xl font-semibold text-gray-900">Pokédex</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fast search, regional filters, and type tags. See stats at a glance and build
                shortlists in seconds.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Filter by region (Kanto → Paldea)
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Type chips & weaknesses
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Base stats and evolutions
                </li>
              </ul>
              <div className="mt-auto pt-5">
                <Link href="/pokedex" className={primaryBtn}>
                  Open Pokédex
                </Link>
              </div>
            </div>
          </article>

          {/* Regions */}
          <article className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Regions</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  World Guide
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Geography, cities, gyms, starters, and legendaries—everything you need before a run.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                {[
                  ['Kanto', '/learn/pokemon-regions/kanto'],
                  ['Johto', '/learn/pokemon-regions/johto'],
                  ['Hoenn', '/learn/pokemon-regions/hoenn'],
                  ['Sinnoh', '/learn/pokemon-regions/sinnoh'],
                  ['Unova', '/learn/pokemon-regions/unova'],
                  ['Galar', '/learn/pokemon-regions/galar'],
                ].map(([name, href]) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Link href="/learn/pokemon-regions" className={darkBtn}>
                  Browse regions
                </Link>
              </div>
            </div>
          </article>

          {/* Types */}
          <article className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Types</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Battle Basics
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Master matchups in seconds—18 types with strengths, weaknesses, and coverage tips.
              </p>
              <ul className="mt-4 grid grid-cols-6 gap-2">
                {[
                  '⚪️',
                  '🔥',
                  '💧',
                  '🌿',
                  '⚡️',
                  '❄️',
                  '🥊',
                  '🧪',
                  '🏜️',
                  '🕊️',
                  '🔮',
                  '🐛',
                  '🪨',
                  '👻',
                  '🐉',
                  '🌑',
                  '⚙️',
                  '✨',
                ].map((e, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center rounded-lg border border-gray-200 bg-white text-xl"
                  >
                    <span className="py-1">{e}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Link href="/learn/pokemon-types" className={primaryBtn}>
                  Explore types
                </Link>
              </div>
            </div>
          </article>

          {/* Generations */}
          <article className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Generations</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Timeline
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                What each era added—from Abilities to Terastallization—and the best entry game per
                gen.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                {[
                  ['Gen I', '/learn/pokemon-generations#gen-i'],
                  ['Gen II', '/learn/pokemon-generations#gen-ii'],
                  ['Gen III', '/learn/pokemon-generations#gen-iii'],
                  ['Gen IV', '/learn/pokemon-generations#gen-iv'],
                  ['Gen V', '/learn/pokemon-generations#gen-v'],
                  ['Gen VI', '/learn/pokemon-generations#gen-vi'],
                  ['Gen VII', '/learn/pokemon-generations#gen-vii'],
                  ['Gen VIII', '/learn/pokemon-generations#gen-viii'],
                  ['Gen IX', '/learn/pokemon-generations#gen-ix'],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Link href="/learn/pokemon-generations" className={darkBtn}>
                  Explore generations
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* NEW: the four value-dense sections */}
      <BeginnerPathsSection />
      <BossCountersSection />
      <VersionExclusivesSection />
      <StarterQuiz />
    </main>
  );
}
