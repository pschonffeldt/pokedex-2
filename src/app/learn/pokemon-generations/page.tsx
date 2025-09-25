// app/learn/pokemon-generations/page.tsx
'use client';

import Button from '@/components/button';
import HeroSection from '@/components/hero';
import InfoBox from '@/components/info-box';
import Link from 'next/link';

type GenCard = {
  id: string;
  label: string; // Gen I, Gen II...
  dex: string; // #001–151
  years: string; // 1996–1999
  games: string;
  mechanics: string; // signature additions
  highlights: string; // short notable items
  guideHref: string;
  pokedexHref: string;
};

const generations: GenCard[] = [
  {
    id: 'gen-i',
    label: 'Gen I',
    dex: '#001–151',
    years: '1996–1999',
    games: 'Red/Blue/Yellow (LGPE as modern revisit)',
    mechanics: 'Foundations: types, badges, Elite Four',
    highlights: 'Kanto classics; simple meta; nostalgia run',
    guideHref: '/learn/pokemon-generations/gen-i',
    pokedexHref: '/pokedex?gen=1',
  },
  {
    id: 'gen-ii',
    label: 'Gen II',
    dex: '#152–251',
    years: '1999–2002',
    games: 'Gold/Silver/Crystal (HG/SS remakes)',
    mechanics: 'Day/Night, breeding, hold items, friendship',
    highlights: 'Johto + Kanto post-game; roaming beasts',
    guideHref: '/learn/pokemon-generations/gen-ii',
    pokedexHref: '/pokedex?gen=2',
  },
  {
    id: 'gen-iii',
    label: 'Gen III',
    dex: '#252–386',
    years: '2002–2006',
    games: 'Ruby/Sapphire/Emerald (Omega Ruby and Alpha Sapphire remakes); FR/LG',
    mechanics: 'Abilities, Natures, weather meta',
    highlights: 'Hoenn seas; Battle Frontier; wireless link',
    guideHref: '/learn/pokemon-generations/gen-iii',
    pokedexHref: '/pokedex?gen=3',
  },
  {
    id: 'gen-iv',
    label: 'Gen IV',
    dex: '#387–493',
    years: '2006–2010',
    games: 'Diamond/Pearl/Platinum; BDSP; Legends: Arceus*',
    mechanics: 'Physical/Special split; online Wi-Fi',
    highlights: 'Sinnoh myths; Distortion World; Underground',
    guideHref: '/learn/pokemon-generations/gen-iv',
    pokedexHref: '/pokedex?gen=4',
  },
  {
    id: 'gen-v',
    label: 'Gen V',
    dex: '#494–649',
    years: '2010–2013',
    games: 'Black/White; Black 2/White 2',
    mechanics: 'Seasons; animated sprites; reusable TMs (B2W2)',
    highlights: 'Unova story; PWT; great 2D peak',
    guideHref: '/learn/pokemon-generations/gen-v',
    pokedexHref: '/pokedex?gen=5',
  },
  {
    id: 'gen-vi',
    label: 'Gen VI',
    dex: '#650–721',
    years: '2013–2016',
    games: 'X/Y; Omega Ruby and Alpha Sapphire',
    mechanics: 'Fairy type; Mega Evolution; 3D engine',
    highlights: 'Kalos style; Friend Safari; hordes',
    guideHref: '/learn/pokemon-generations/gen-vi',
    pokedexHref: '/pokedex?gen=6',
  },
  {
    id: 'gen-vii',
    label: 'Gen VII',
    dex: '#722–809',
    years: '2016–2019',
    games: 'Sun/Moon; Ultra Sun/Ultra Moon; Let’s Go',
    mechanics: 'Z-Moves; Island Trials; regional forms',
    highlights: 'Alola vibes; Totem bosses; Festival Plaza',
    guideHref: '/learn/pokemon-generations/gen-vii',
    pokedexHref: '/pokedex?gen=7',
  },
  {
    id: 'gen-viii',
    label: 'Gen VIII',
    dex: '#810–905',
    years: '2019–2022',
    games: 'Sword/Shield (+DLC); BDSP; Legends: Arceus*',
    mechanics: 'Dynamax/Gigantamax; Raids; Wild Area',
    highlights: 'Galar stadiums; co-op raids; QoL leaps',
    guideHref: '/learn/pokemon-generations/gen-viii',
    pokedexHref: '/pokedex?gen=8',
  },
  {
    id: 'gen-ix',
    label: 'Gen IX',
    dex: '#906–1025',
    years: '2022–',
    games: 'Scarlet/Violet (+DLC)',
    mechanics: 'Terastallization; open world; TM crafting',
    highlights: 'Paldea’s three paths; Area Zero mysteries',
    guideHref: '/learn/pokemon-generations/gen-ix',
    pokedexHref: '/pokedex?gen=9',
  },
];

export default function PokemonGenerations() {
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
          <span className="font-medium text-gray-900">Generations</span>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title="Pokémon Generations"
        description={
          <>
            A fast, practical overview of every era—from Kanto’s beginnings to Paldea’s open world.
            Compare signature mechanics, best entry games, and what each generation changed about
            exploration and battles. Dive deeper into a full guide for each gen.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/games', label: 'Discover Pokémon Games', variant: 'dark' },
        ]}
      />
      {/* Generation cards */}
      <section aria-labelledby="gens-heading" className="pb-1">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <h2 id="gens-heading" className="sr-only">
            All Pokémon Generations
          </h2>

          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {generations.map((gen) => (
              <article
                id={gen.id}
                key={gen.id}
                className="group h-full rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="flex h-full flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">{gen.label}</h3>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {gen.years}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-gray-600">{gen.mechanics}</p>

                  <dl className="mt-4 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Pokédex:</dt>
                      <dd className="text-gray-700">{gen.dex}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Games:</dt>
                      <dd className="text-gray-700">{gen.games}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="shrink-0 font-medium text-gray-900">Highlights:</dt>
                      <dd className="text-gray-700">{gen.highlights}</dd>
                    </div>
                  </dl>

                  {/* CTAs pinned bottom */}
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    <Button href={gen.guideHref}>Read {gen.label} Guide</Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Mechanics glossary */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Signature mechanics by era</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [
                  'Breeding & Day/Night',
                  'Introduced in Gen II; time-based evolution and egg moves created deeper teambuilding.',
                ],
                [
                  'Abilities & Natures',
                  'Gen III added passive effects and stat personalities, shaping roles and viability.',
                ],
                [
                  'Physical/Special Split',
                  'Gen IV reclassified moves by effect, fixing oddities (e.g., physical Punches now Physical).',
                ],
                [
                  'Mega Evolution',
                  'Gen VI burst-power forms per battle; team-defining but limited to certain species.',
                ],
                [
                  'Z-Moves',
                  'Gen VII one-time, type- or move-specific nukes; powerful but prediction-heavy.',
                ],
                [
                  'Dynamax & Raids',
                  'Gen VIII size up for three turns; co-op Max Raid Battles introduced shared challenges.',
                ],
                [
                  'Terastallization',
                  'Gen IX changes a Pokémon’s type mid-battle, enabling surprise offense or new resistances.',
                ],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-xl border border-gray-200 bg-white p-4">
                  <div className="text-sm font-semibold text-gray-900">{title}</div>
                  <p className="mt-1 text-sm text-gray-700">{copy}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended entry points */}
          <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Start Here: Best entry games by playstyle
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Not sure where to begin? We compare each pick by playstyle, map size, story pace, and
              convenience features, then explain why it’s a great first stop. You’ll see who the
              game suits, what’s new this era, and a simple next step once the credits roll.
            </p>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* Beginner-friendly */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Beginner-friendly</div>
                <p className="mt-1 text-sm text-gray-700">
                  Let’s Go Pikachu/Eevee — Kanto refresher with streamlined catching.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>No held items/Abilities—focus on clean type basics.</li>
                  <li>Drop-in local co-op; great for younger/new players.</li>
                </ul>
              </div>

              {/* Classic + Polished */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Classic + Polished</div>
                <p className="mt-1 text-sm text-gray-700">
                  HeartGold/SoulSilver — Johto story with a full Kanto post-game.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Two regions in one save; generous exploration loop.</li>
                  <li>Gen IV QoL + Pokéwalker extras for collectors.</li>
                </ul>
              </div>

              {/* Modern Remake */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Modern Remake</div>
                <p className="mt-1 text-sm text-gray-700">
                  Omega Ruby/Alpha Sapphire — Gen III with convenience and strong post-game.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>DexNav for targeted encounters; Secret Bases & Contests.</li>
                  <li>Faster move relearning/leveling; great starter teams.</li>
                </ul>
              </div>

              {/* Open-World */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Open-World</div>
                <p className="mt-1 text-sm text-gray-700">
                  Scarlet/Violet — choose your path; rich dex; fast teambuilding.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Do Gyms, Titans, or Team Star in any order.</li>
                  <li>Terastallization flips matchups; breeding/QoL are quick.</li>
                </ul>
              </div>

              {/* Lore & Exploration */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Lore & Exploration</div>
                <p className="mt-1 text-sm text-gray-700">
                  Legends: Arceus — Hisui/Sinnoh prequel with agile/strong styles.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Seamless catching, stealth routes, and research tasks.</li>
                  <li>Great for dex completionists and worldbuilding fans.</li>
                </ul>
              </div>

              {/* Co-op Friendly */}
              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Co-op Friendly</div>
                <p className="mt-1 text-sm text-gray-700">
                  Sword/Shield — Raids, trading, and wide online support.
                </p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>4-player Max Raids are perfect for quick co-op sessions.</li>
                  <li>Wild Area makes hunting, breeding, and events easy.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Release timeline */}
          <div id="timeline" className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Videogame release timeline</h3>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {[
                ['Gen I (1996–1999)', 'Red/Blue/Yellow'],
                ['Gen II (1999–2002)', 'Gold/Silver/Crystal'],
                ['Gen III (2002–2006)', 'Ruby/Sapphire/Emerald • FireRed/LeafGreen'],
                ['Gen IV (2006–2010)', 'Diamond/Pearl/Platinum'],
                ['Gen V (2010–2013)', 'Black/White • Black 2/White 2'],
                ['Gen VI (2013–2016)', 'X/Y • Omega Ruby/Alpha Sapphire'],
                ['Gen VII (2016–2019)', 'Sun/Moon • Ultra Sun/Ultra Moon • Let’s Go'],
                ['Gen VIII (2019–2022)', 'Sword/Shield (+DLC) • BDSP • Legends: Arceus'],
                ['Gen IX (2022– )', 'Scarlet/Violet (+DLC)'],
              ].map(([era, titles]) => (
                <li key={era} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                  <div className="font-medium text-gray-900">{era}</div>
                  <div className="text-gray-700">{titles}</div>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button href="/games">Browse Games</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Info box container */}
      <InfoBox
        title="Make the most of Generations"
        items={[
          <>
            Tap a gen chip to open its full guide—signature mechanics, best entry games, notable
            QoL, starters, and legendaries.
          </>,
          <>
            Picking where to play? Pair the era with a world you’ll like in{' '}
            <Link
              href="/learn/pokemon-regions"
              className="underline underline-offset-4 hover:no-underline"
            >
              Regions
            </Link>
            .
          </>,
          <>
            Building a team? Review the{' '}
            <Link
              href="/learn/pokemon-types"
              className="underline underline-offset-4 hover:no-underline"
            >
              type chart
            </Link>{' '}
            and then use the{' '}
            <Link href="/pokedex" className="underline underline-offset-4 hover:no-underline">
              Pokédex
            </Link>{' '}
            with <span className="font-medium text-gray-900">generation filters</span> to find
            starters and early-game options.
          </>,
        ]}
      />
    </main>
  );
}
