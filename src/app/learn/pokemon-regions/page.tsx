// app/learn/pokemon-regions/page.tsx
'use client';

import Button from '@/components/button';
import HeroSection from '@/components/hero';
import InfoBox from '@/components/info-box';
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
  guideHref: string;
  pokedexHref: string;
  generationHref: string;
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
    generationHref: '/learn/pokemon-generations/gen-i',
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
    generationHref: '/learn/pokemon-generations/gen-ii',
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
    generationHref: '/learn/pokemon-generations/gen-iii',
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
    generationHref: '/learn/pokemon-generations/gen-iv',
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
    generationHref: '/learn/pokemon-generations/gen-v',
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
    generationHref: '/learn/pokemon-generations/gen-vi',
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
    generationHref: '/learn/pokemon-generations/gen-vii',
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
    generationHref: '/learn/pokemon-generations/gen-viii',
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
    generationHref: '/learn/pokemon-generations/gen-ix',
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
      {/* Component hero */}
      <HeroSection
        title="Regions of the Pokémon World"
        description={
          <>
            From iconic Kanto to open-world Paldea, explore each region’s geography, history, and
            legendary Pokémon. Use this guide as your launchpad to discover unique cultures and
            creatures across the Pokémon world.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          {
            href: '/learn/pokemon-generations',
            label: 'Discover Pokémon Generations',
            variant: 'dark',
          },
        ]}
      />
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
              <div className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3
                    id={`region-${region.id}-title`}
                    className="text-xl font-semibold text-gray-900"
                  >
                    {region.name}
                  </h3>
                  {/* LING TO GENERATION! */}
                  <Link href={region.generationHref}>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200">
                      {region.gen}
                    </span>
                  </Link>
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

                <div className="mt-auto pt-5 flex flex-wrap gap-2">
                  <Button href={region.guideHref}>Discover {region.name} region</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      {/* Info box container */}
      <InfoBox
        title="Make the most of Regions"
        items={[
          <>
            Click any card to open a <span className="font-medium text-gray-900">Region guide</span>
            —cities, gyms, starters, legendaries, and travel tips.
          </>,
          <>
            Planning a new run? Check{' '}
            <Link
              href="/learn/pokemon-generations"
              className="underline underline-offset-4 hover:no-underline"
            >
              Generations
            </Link>{' '}
            for that region’s era—see signature mechanics and the best entry game.
          </>,
          <>
            Prepping gyms or the League? Review the{' '}
            <Link
              href="/learn/pokemon-types"
              className="underline underline-offset-4 hover:no-underline"
            >
              type chart
            </Link>{' '}
            and build dual-typing coverage to counter each leader’s team.
          </>,
        ]}
      />
    </main>
  );
}
