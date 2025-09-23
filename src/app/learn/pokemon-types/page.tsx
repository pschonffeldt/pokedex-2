'use client';

import HeroSection from '@/components/hero';
import InfoBox from '@/components/info-box';
import Link from 'next/link';

function Pokeball({ className = 'h-5 w-5 text-red-600' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}

type TypeCard = {
  id: string; // anchor id
  label: string; // Fire, Water...
  emoji: string; // UI cue
  strongVs: string; // offensive super-effective
  strugglesVs: string; // offensive not-very + immunities (as text)
  weakTo: string; // defensive weaknesses
  resists: string; // defensive resists
  immune?: string; // defensive immunities
  statusNote?: string; // notable status/ability/weather notes (1-liner)
  guideHref: string; // /learn/pokemon-types/fire
  pokedexHref: string; // /pokedex?type=fire
};

const types: TypeCard[] = [
  {
    id: 'normal',
    label: 'Normal',
    emoji: '⚪️',
    strongVs: '—',
    strugglesVs: 'Rock, Steel; no effect on Ghost',
    weakTo: 'Fighting',
    resists: '—',
    immune: 'Ghost',
    statusNote: 'Simple movepools; pairs well with Fighting/Ground coverage.',
    guideHref: '/learn/pokemon-types/normal',
    pokedexHref: '/pokedex?type=normal',
  },
  {
    id: 'fire',
    label: 'Fire',
    emoji: '🔥',
    strongVs: 'Bug, Grass, Ice, Steel',
    strugglesVs: 'Dragon, Fire, Rock, Water',
    weakTo: 'Ground, Rock, Water',
    resists: 'Bug, Fairy, Fire, Grass, Ice, Steel',
    statusNote: 'Sun empowers Fire; Fire-types cannot be burned.',
    guideHref: '/learn/pokemon-types/fire',
    pokedexHref: '/pokedex?type=fire',
  },
  {
    id: 'water',
    label: 'Water',
    emoji: '💧',
    strongVs: 'Fire, Ground, Rock',
    strugglesVs: 'Dragon, Grass, Water',
    weakTo: 'Electric, Grass',
    resists: 'Fire, Ice, Steel, Water',
    statusNote: 'Rain boosts Water & softens Fire; great with Electric/Ice (BoltBeam).',
    guideHref: '/learn/pokemon-types/water',
    pokedexHref: '/pokedex?type=water',
  },
  {
    id: 'grass',
    label: 'Grass',
    emoji: '🌿',
    strongVs: 'Ground, Rock, Water',
    strugglesVs: 'Bug, Dragon, Fire, Flying, Grass, Poison, Steel',
    weakTo: 'Bug, Fire, Flying, Ice, Poison',
    resists: 'Electric, Grass, Ground, Water',
    statusNote: 'Immune to powder/Leech Seed; loves Sun (Chlorophyll).',
    guideHref: '/learn/pokemon-types/grass',
    pokedexHref: '/pokedex?type=grass',
  },
  {
    id: 'electric',
    label: 'Electric',
    emoji: '⚡️',
    strongVs: 'Flying, Water',
    strugglesVs: 'Dragon, Electric, Grass; no effect on Ground',
    weakTo: 'Ground',
    resists: 'Electric, Flying, Steel',
    statusNote: 'Electric-types don’t get paralyzed; pairs with Ice (BoltBeam).',
    guideHref: '/learn/pokemon-types/electric',
    pokedexHref: '/pokedex?type=electric',
  },
  {
    id: 'ice',
    label: 'Ice',
    emoji: '❄️',
    strongVs: 'Dragon, Flying, Grass, Ground',
    strugglesVs: 'Fire, Ice, Steel, Water',
    weakTo: 'Fighting, Fire, Rock, Steel',
    resists: 'Ice',
    statusNote: 'Snow favors Ice; amazing coverage, fragile on defense.',
    guideHref: '/learn/pokemon-types/ice',
    pokedexHref: '/pokedex?type=ice',
  },
  {
    id: 'fighting',
    label: 'Fighting',
    emoji: '🥊',
    strongVs: 'Dark, Ice, Normal, Rock, Steel',
    strugglesVs: 'Bug, Fairy, Flying, Poison, Psychic; no effect on Ghost',
    weakTo: 'Fairy, Flying, Psychic',
    resists: 'Bug, Dark, Rock',
    statusNote: 'Breaks Steels/Rocks; appreciates Ghost/Dark coverage.',
    guideHref: '/learn/pokemon-types/fighting',
    pokedexHref: '/pokedex?type=fighting',
  },
  {
    id: 'poison',
    label: 'Poison',
    emoji: '🧪',
    strongVs: 'Fairy, Grass',
    strugglesVs: 'Ghost, Ground, Poison, Rock; no effect on Steel',
    weakTo: 'Ground, Psychic',
    resists: 'Bug, Fairy, Fighting, Grass, Poison',
    statusNote: 'Poison-types can’t be poisoned; grounded Poison absorbs Toxic Spikes.',
    guideHref: '/learn/pokemon-types/poison',
    pokedexHref: '/pokedex?type=poison',
  },
  {
    id: 'ground',
    label: 'Ground',
    emoji: '🏜️',
    strongVs: 'Electric, Fire, Poison, Rock, Steel',
    strugglesVs: 'Bug, Grass; no effect on Flying',
    weakTo: 'Grass, Ice, Water',
    resists: 'Poison, Rock',
    immune: 'Electric (incl. Thunder Wave)',
    statusNote: 'EdgeQuake (Rock+Ground) is elite coverage.',
    guideHref: '/learn/pokemon-types/ground',
    pokedexHref: '/pokedex?type=ground',
  },
  {
    id: 'flying',
    label: 'Flying',
    emoji: '🕊️',
    strongVs: 'Bug, Fighting, Grass',
    strugglesVs: 'Electric, Rock, Steel',
    weakTo: 'Electric, Ice, Rock',
    resists: 'Bug, Fighting, Grass',
    immune: 'Ground (most cases); Spikes/Toxic Spikes',
    statusNote: 'Pairs with Ground (EdgeQuake partners).',
    guideHref: '/learn/pokemon-types/flying',
    pokedexHref: '/pokedex?type=flying',
  },
  {
    id: 'psychic',
    label: 'Psychic',
    emoji: '🔮',
    strongVs: 'Fighting, Poison',
    strugglesVs: 'Psychic, Steel; no effect on Dark',
    weakTo: 'Bug, Dark, Ghost',
    resists: 'Fighting, Psychic',
    statusNote: 'Prefers partners to handle Steels/Darks (Ground/Fairy).',
    guideHref: '/learn/pokemon-types/psychic',
    pokedexHref: '/pokedex?type=psychic',
  },
  {
    id: 'bug',
    label: 'Bug',
    emoji: '🐛',
    strongVs: 'Dark, Grass, Psychic',
    strugglesVs: 'Fairy, Fighting, Fire, Flying, Ghost, Poison, Steel',
    weakTo: 'Fire, Flying, Rock',
    resists: 'Fighting, Grass, Ground',
    statusNote: 'Great early-game utility; shines with pivot moves.',
    guideHref: '/learn/pokemon-types/bug',
    pokedexHref: '/pokedex?type=bug',
  },
  {
    id: 'rock',
    label: 'Rock',
    emoji: '🪨',
    strongVs: 'Bug, Fire, Flying, Ice',
    strugglesVs: 'Fighting, Ground, Steel',
    weakTo: 'Fighting, Grass, Ground, Steel, Water',
    resists: 'Fire, Flying, Normal, Poison',
    statusNote: 'Sand boosts Rock sp. defense; pairs with Ground/Steel walls.',
    guideHref: '/learn/pokemon-types/rock',
    pokedexHref: '/pokedex?type=rock',
  },
  {
    id: 'ghost',
    label: 'Ghost',
    emoji: '👻',
    strongVs: 'Ghost, Psychic',
    strugglesVs: 'Dark; no effect on Normal',
    weakTo: 'Dark, Ghost',
    resists: 'Bug, Poison',
    immune: 'Normal, Fighting; trap immunity',
    statusNote: 'Spinblocks hazards; pairs with Fairy/Fighting offenses.',
    guideHref: '/learn/pokemon-types/ghost',
    pokedexHref: '/pokedex?type=ghost',
  },
  {
    id: 'dragon',
    label: 'Dragon',
    emoji: '🐉',
    strongVs: 'Dragon',
    strugglesVs: 'Steel; no effect on Fairy',
    weakTo: 'Dragon, Fairy, Ice',
    resists: 'Electric, Fire, Grass, Water',
    statusNote: 'Often special attackers; likes Steel/Fairy teammates.',
    guideHref: '/learn/pokemon-types/dragon',
    pokedexHref: '/pokedex?type=dragon',
  },
  {
    id: 'dark',
    label: 'Dark',
    emoji: '🌑',
    strongVs: 'Ghost, Psychic',
    strugglesVs: 'Dark, Fairy, Fighting',
    weakTo: 'Bug, Fairy, Fighting',
    resists: 'Dark, Ghost',
    immune: 'Psychic (defensive); ignores Prankster status (Gen VII+)',
    statusNote: 'Pairs with Fighting/Ground to break Steels.',
    guideHref: '/learn/pokemon-types/dark',
    pokedexHref: '/pokedex?type=dark',
  },
  {
    id: 'steel',
    label: 'Steel',
    emoji: '⚙️',
    strongVs: 'Fairy, Ice, Rock',
    strugglesVs: 'Electric, Fire, Steel, Water',
    weakTo: 'Fighting, Fire, Ground',
    resists: 'Many (incl. Bug, Dragon, Fairy, Flying, Grass, Ice, Normal, Psychic, Rock, Steel)',
    immune: 'Poison (status & moves)',
    statusNote: 'Premier defensive type; set hazards and pivot.',
    guideHref: '/learn/pokemon-types/steel',
    pokedexHref: '/pokedex?type=steel',
  },
  {
    id: 'fairy',
    label: 'Fairy',
    emoji: '✨',
    strongVs: 'Dark, Dragon, Fighting',
    strugglesVs: 'Fire, Poison, Steel',
    weakTo: 'Poison, Steel',
    resists: 'Bug, Dark, Fighting',
    immune: 'Dragon',
    statusNote: 'Checks Dragons/Darks; loves Ground/Fire partners for Steels.',
    guideHref: '/learn/pokemon-types/fairy',
    pokedexHref: '/pokedex?type=fairy',
  },
];

export default function PokemonTypes() {
  return (
    <main className="bg-white text-black">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/learn" className="text-gray-500 hover:text-gray-900">
            Learn
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Types</span>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title="Pokémon Types"
        description={
          <>
            Learn how the 18 types interact—what each type beats, what walls it, and the best ways
            to cover weaknesses. Open any type to see full charts, notable Pokémon, sample sets, and
            team tips.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/types', label: 'Discover Pokémon Types', variant: 'dark' },
        ]}
      />

      {/* Type cards */}
      <section aria-labelledby="types-heading" className="pt-15 pb-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <h2 id="types-heading" className="sr-only">
            All Pokémon Types
          </h2>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {types.map((t) => (
              <article
                id={t.id}
                key={t.id}
                className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      <span className="mr-1 text-lg" aria-hidden="true">
                        {t.emoji}
                      </span>
                      {t.label}
                    </h3>
                  </div>

                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Strong vs:</dt>
                      <dd className="text-gray-700">{t.strongVs}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Struggles vs:</dt>
                      <dd className="text-gray-700">{t.strugglesVs}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Weak to:</dt>
                      <dd className="text-gray-700">{t.weakTo}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Resists:</dt>
                      <dd className="text-gray-700">{t.resists}</dd>
                    </div>
                    {t.immune && (
                      <div className="flex gap-2">
                        <dt className="shrink-0 font-medium text-gray-900">Immune:</dt>
                        <dd className="text-gray-700">{t.immune}</dd>
                      </div>
                    )}
                    {t.statusNote && (
                      <div className="flex gap-2">
                        <dt className="shrink-0 font-medium text-gray-900">Notes:</dt>
                        <dd className="text-gray-700">{t.statusNote}</dd>
                      </div>
                    )}
                  </dl>

                  {/* CTAs pinned bottom */}
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    <Link
                      href={t.guideHref}
                      className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                    >
                      Type Guide
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Coverage recipes */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Coverage Recipes (Quick Wins)</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  'BoltBeam',
                  'Electric + Ice',
                  'Hits most foes neutrally or better; punish Flying/Water/Dragon/Ground.',
                ],
                [
                  'EdgeQuake',
                  'Rock + Ground',
                  'Crushes Fire/Flying/Bug/Poison/Steel; great neutral spread.',
                ],
                [
                  'Fairy + Ground',
                  'Fairy + Ground',
                  'Checks Dragons/Darks and breaks Steels that wall Fairy.',
                ],
                [
                  'Fighting + Ghost',
                  'Fighting + Ghost',
                  'Few safe switch-ins; Normal/Fighting immunities covered.',
                ],
                [
                  'Water + Ground',
                  'Water + Ground',
                  'Answers Fire/Rock/Steel with Electric immunity in the core.',
                ],
                [
                  'Grass + Fire + Water',
                  'FWG Core',
                  'Balanced offensive/defensive triangle for story and ladder.',
                ],
              ].map(([name, combo, why]) => (
                <div key={name} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-sm font-semibold text-gray-900">{name}</div>
                  <div className="text-xs text-gray-600">{combo}</div>
                  <p className="mt-1 text-sm text-gray-700">{why}</p>
                </div>
              ))}
            </div>
            <div className="mt-5">
              <Link
                href="/learn/guides/type-coverage"
                className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
              >
                Learn coverage basics
              </Link>
            </div>
          </div>

          {/* Status & hazards quick notes */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Status, Weather & Hazards — Quick Notes
            </h3>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-700">
              <li>
                <span className="font-medium">Status immunities:</span> Fire can’t be burned • Ice
                can’t be frozen • Electric can’t be paralyzed • Poison/Steel can’t be poisoned •
                Grass ignores powder & Leech Seed.
              </li>
              <li>
                <span className="font-medium">Move immunities:</span> Ground is immune to Electric
                (incl. Thunder Wave) • Flying/Levitate ignore Ground moves • Normal/Ghost block each
                other.
              </li>
              <li>
                <span className="font-medium">Weather:</span> Rain powers Water & weakens Fire • Sun
                powers Fire & weakens Water • Sand chips most non-Rock/Ground/Steel and bolsters
                Rock special defense • Snow favors Ice-types.
              </li>
              <li>
                <span className="font-medium">Hazards:</span> Stealth Rock damage scales with Rock
                weakness/resist • Spikes/Toxic Spikes miss Flying/Levitate • Grounded Poison clears
                Toxic Spikes on switch-in.
              </li>
            </ul>
          </div>

          {/* How to use */}
        </div>
      </section>
      <InfoBox
        title="How to use this page"
        items={[
          <>Use the chips to jump to a generation, then open its full guide.</>,
          <>
            Compare <span className="font-medium text-gray-900">mechanics</span> cards to decide
            which era fits your playstyle.
          </>,
          <>
            Skim the <span className="font-medium text-gray-900">timeline</span> to understand how
            the series evolved.
          </>,
        ]}
      />
    </main>
  );
}
