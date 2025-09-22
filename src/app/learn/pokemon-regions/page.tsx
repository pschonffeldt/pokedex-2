// app/learn/pokemon-regions/page.tsx
'use client';

import Link from 'next/link';

// Content types
type Region = {
  id: string;
  name: string;
  gen: string;
  description: string;
  games: string;
  inspiration: string;
  highlights: string;
  legendaries: string;
  guideHref: string; // keeps your /learn/pokemon-regions/* routes
  pokedexHref: string; // optional deep link to region filter
};

// Content as object to later map
const regions: Region[] = [
  {
    id: 'kanto',
    name: 'Kanto',
    gen: 'Gen I',
    description: 'The original adventure—iconic cities and the first 151 Pokémon.',
    games: 'Red/Blue/Yellow, FireRed/LeafGreen, Let’s Go Pikachu/Eevee',
    inspiration: 'Kantō (Japan)',
    highlights: 'Pallet Town, Saffron City, iconic Gym circuit',
    legendaries: 'Articuno, Zapdos, Moltres, Mewtwo',
    guideHref: '/learn/pokemon-regions/kanto',
    pokedexHref: '/pokedex?region=kanto',
  },
  {
    id: 'johto',
    name: 'Johto',
    gen: 'Gen II',
    description: 'Tradition meets balance—day/night cycle, breeding, friendship evolutions.',
    games: 'Gold/Silver/Crystal, HeartGold/SoulSilver',
    inspiration: 'Kansai (Japan)',
    highlights: 'Ecruteak lore, cross-region travel with Kanto',
    legendaries: 'Lugia, Ho-Oh, Raikou, Entei, Suicune',
    guideHref: '/learn/pokemon-regions/johto',
    pokedexHref: '/pokedex?region=johto',
  },
  {
    id: 'hoenn',
    name: 'Hoenn',
    gen: 'Gen III',
    description: 'Seas, weather, and exploration—secret bases and epic sky legends.',
    games: 'Ruby/Sapphire/Emerald, Omega Ruby/Alpha Sapphire',
    inspiration: 'Kyushu (Japan)',
    highlights: 'Weather mechanics, expansive ocean routes',
    legendaries: 'Groudon, Kyogre, Rayquaza',
    guideHref: '/learn/pokemon-regions/hoenn',
    pokedexHref: '/pokedex?region=hoenn',
  },
  {
    id: 'sinnoh',
    name: 'Sinnoh',
    gen: 'Gen IV',
    description: 'Myth and origins—creation lore, the Underground, Distortion World.',
    games: 'Diamond/Pearl/Platinum, Brilliant Diamond/Shining Pearl, Legends: Arceus',
    inspiration: 'Hokkaido (Japan)',
    highlights: 'Physical/Special split era, lore-rich areas',
    legendaries: 'Dialga, Palkia, Giratina, Arceus',
    guideHref: '/learn/pokemon-regions/sinnoh',
    pokedexHref: '/pokedex?region=sinnoh',
  },
  {
    id: 'unova',
    name: 'Unova',
    gen: 'Gen V',
    description: 'A modern metropolis—seasonal changes and a character-driven story.',
    games: 'Black/White, Black 2/White 2',
    inspiration: 'New York & surroundings (USA)',
    highlights: 'Route variety, bold story themes',
    legendaries: 'Reshiram, Zekrom, Kyurem',
    guideHref: '/learn/pokemon-regions/unova',
    pokedexHref: '/pokedex?region=unova',
  },
  {
    id: 'kalos',
    name: 'Kalos',
    gen: 'Gen VI',
    description: 'Elegance and Mega Evolutions—fashion, beauty, and power.',
    games: 'X/Y',
    inspiration: 'Northern France',
    highlights: 'Mega Evolution system, Lumiose City',
    legendaries: 'Xerneas, Yveltal, Zygarde',
    guideHref: '/learn/pokemon-regions/kalos',
    pokedexHref: '/pokedex?region=kalos',
  },
  {
    id: 'alola',
    name: 'Alola',
    gen: 'Gen VII',
    description: 'Island life & Totem Trials—regional (Alolan) forms and guardians.',
    games: 'Sun/Moon, Ultra Sun/Ultra Moon',
    inspiration: 'Hawaii (USA)',
    highlights: 'Island Challenge, regional forms',
    legendaries: 'Solgaleo, Lunala, Tapu guardians',
    guideHref: '/learn/pokemon-regions/alola',
    pokedexHref: '/pokedex?region=alola',
  },
  {
    id: 'galar',
    name: 'Galar',
    gen: 'Gen VIII',
    description: 'League spectacle—Dynamax, Wild Area, industry meets nature.',
    games: 'Sword/Shield',
    inspiration: 'United Kingdom',
    highlights: 'Gym stadiums, Wild Area exploration',
    legendaries: 'Zacian, Zamazenta, Eternatus',
    guideHref: '/learn/pokemon-regions/galar',
    pokedexHref: '/pokedex?region=galar',
  },
  {
    id: 'paldea',
    name: 'Paldea',
    gen: 'Gen IX',
    description: 'Open-world discovery—three story paths and the Terastal phenomenon.',
    games: 'Scarlet/Violet',
    inspiration: 'Iberian Peninsula (Spain & Portugal)',
    highlights: 'Free exploration, school-themed narrative arcs',
    legendaries: 'Koraidon, Miraidon',
    guideHref: '/learn/pokemon-regions/paldea',
    pokedexHref: '/pokedex?region=paldea',
  },
];

// Rendering the page by combining content mapping and
export default function PokemonRegions() {
  return (
    <main className="min-h-screen bg-white">
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
          <span className="font-medium text-gray-900">Regions</span>
        </div>
      </nav>

      {/* Hero (neutral, not blue) */}
      <section className="border-b border-gray-100 bg-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex items-start gap-3">
            {/* <Pokeball className="h-7 w-7 text-red-600" /> */}
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Regions of the Pokémon World
              </h1>
              <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
                From iconic Kanto to open-world Paldea, explore each region’s geography, history,
                and legendary Pokémon. Use this guide as your launchpad to discover unique cultures
                and creatures across the Pokémon world.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/pokedex"
              className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
            >
              Open Pokédex
            </Link>
            <Link
              href="/types"
              className="rounded-full border border-gray-300 bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-colors hover:bg-gray-100"
            >
              Battle & Type Guides
            </Link>
          </div>
        </div>
      </section>
      {/* Regions grid */}
      <section
        aria-labelledby="regions-heading"
        className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12"
      >
        <h2 id="regions-heading" className="sr-only">
          All Pokémon Regions
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <article
              id={region.id}
              key={region.id}
              aria-labelledby={`region-${region.id}-title`}
              aria-describedby={`region-${region.id}-desc`}
              className="group relative rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3
                    id={`region-${region.id}-title`}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {region.name}
                  </h3>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {region.gen}
                  </span>
                </div>

                <p id={`region-${region.id}-desc`} className="mt-2 text-sm text-gray-600">
                  {region.description}
                </p>

                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-gray-900">Games:</dt>
                    <dd className="text-gray-700">{region.games}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-gray-900">Inspiration:</dt>
                    <dd className="text-gray-700">{region.inspiration}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-gray-900">Highlights:</dt>
                    <dd className="text-gray-700">{region.highlights}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium text-gray-900">Legendaries:</dt>
                    <dd className="text-gray-700">{region.legendaries}</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={region.guideHref}
                    className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* How to Use */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="mb-12 rounded-2xl border border-gray-200 bg-indigo-50/50 p-6">
          <h3 className="text-lg font-semibold text-gray-900">How to Use This Guide</h3>
          <ul className="mt-3 list-disc pl-6 text-sm text-gray-700 space-y-2">
            <li>
              Open any <span className="font-medium text-gray-900">Region Guide</span> for maps,
              cities, gyms, and lore.
            </li>
            <li>
              Use <span className="font-medium text-gray-900">View Pokédex</span> to load a Pokémon
              list filtered by region.
            </li>
            <li>
              Jump to{' '}
              <Link href="/types" className="underline underline-offset-4 hover:no-underline">
                Types
              </Link>{' '}
              to plan advantages and cover weaknesses.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
