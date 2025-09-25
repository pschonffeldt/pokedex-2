'use client';

import Button from '@/components/button';
import HeroSection from '@/components/hero';
import InfoBox from '@/components/info-box';
import Link from 'next/link';

const regions = [
  { name: 'Kanto', href: '/learn/pokemon-regions/kanto' },
  { name: 'Johto', href: '/learn/pokemon-regions/johto' },
  { name: 'Hoenn', href: '/learn/pokemon-regions/hoenn' },
  { name: 'Sinnoh', href: '/learn/pokemon-regions/sinnoh' },
  { name: 'Unova', href: '/learn/pokemon-regions/unova' },
  { name: 'Kalos', href: '/learn/pokemon-regions/kalos' },
  { name: 'Alola', href: '/learn/pokemon-regions/alola' },
  { name: 'Galar', href: '/learn/pokemon-regions/galar' },
  { name: 'Paldea', href: '/learn/pokemon-regions/paldea' },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Learn</span>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title="Learn Pokémon"
        description={
          <>
            Your gateway to the Pokémon world—start with regions, master type matchups, trace each
            generation, and dive into the Pokédex. Pick a topic below and begin your journey.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/learn/pokemon-types', label: 'Discover Pokémon Types', variant: 'dark' },
        ]}
      />
      {/* Core topics */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <h2 className="sr-only">Core Topics</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Regions */}
          <article className="group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Regions</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  World Guide
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Explore geography, cities, gyms, starters, and legendaries from Kanto to Paldea.
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-700">
                {regions.map((region) => (
                  <li key={region.name}>
                    <Link
                      href={region.href}
                      className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50"
                    >
                      {region.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                <Button href="/learn/pokemon-regions">See all regions</Button>
              </div>
            </div>
          </article>

          {/* Types */}
          <article className="group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Types</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Battle Basics
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Type matchups are the backbone of every battle. With 18 types, strengths,
                resistances, and immunities create the flow of offense and defense.
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Same-Type Attack Bonus (STAB) boosts moves that match your Pokémon’s type, while
                dual-typing can flip a matchup from risky to safe in one turn.
              </p>
              {/* Emoji grid */}
              <ul className="mt-4 grid grid-cols-6 gap-2 sm:grid-cols-9">
                {[
                  { key: 'normal', label: 'Normal', emoji: '⚪️' },
                  { key: 'fire', label: 'Fire', emoji: '🔥' },
                  { key: 'water', label: 'Water', emoji: '💧' },
                  { key: 'grass', label: 'Grass', emoji: '🌿' },
                  { key: 'electric', label: 'Electric', emoji: '⚡️' },
                  { key: 'ice', label: 'Ice', emoji: '❄️' },
                  { key: 'fighting', label: 'Fighting', emoji: '🥊' },
                  { key: 'poison', label: 'Poison', emoji: '🧪' },
                  { key: 'ground', label: 'Ground', emoji: '🏜️' },
                  { key: 'flying', label: 'Flying', emoji: '🕊️' },
                  { key: 'psychic', label: 'Psychic', emoji: '🔮' },
                  { key: 'bug', label: 'Bug', emoji: '🐛' },
                  { key: 'rock', label: 'Rock', emoji: '🪨' },
                  { key: 'ghost', label: 'Ghost', emoji: '👻' },
                  { key: 'dragon', label: 'Dragon', emoji: '🐉' },
                  { key: 'dark', label: 'Dark', emoji: '🌑' },
                  { key: 'steel', label: 'Steel', emoji: '⚙️' },
                  { key: 'fairy', label: 'Fairy', emoji: '✨' },
                ].map(({ key, label, emoji }) => (
                  <li key={key} className="flex items-center justify-center">
                    <Link
                      href={`learn/pokemon-types/${key}`}
                      title={label}
                      aria-label={`Type: ${label}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 bg-white text-2xl leading-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <span aria-hidden="true">{emoji}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                <Button href="learn/pokemon-types">Discover Pokémon Types</Button>
              </div>
            </div>
          </article>

          {/* Generations */}
          <article className="group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Generations</h3>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  Timeline
                </span>
              </div>

              <p className="mt-2 text-sm text-gray-600">
                Each era changed how Pokémon is played—from breeding and Abilities to the
                Physical/Special split, Megas, Z-Moves, Dynamax, and Terastallization. Tap a
                generation to see what it added, best games to start with, and meta shifts.
              </p>

              {/* Mini timeline (click to anchors on /generations) */}
              <ul className="mt-4 grid grid-cols-3 gap-2 text-sm text-gray-700">
                {[
                  {
                    id: 'gen-i',
                    label: 'Gen I',
                  },
                  {
                    id: 'gen-ii',
                    label: 'Gen II',
                  },
                  {
                    id: 'gen-iii',
                    label: 'Gen III',
                  },
                  {
                    id: 'gen-iv',
                    label: 'Gen IV',
                  },
                  { id: 'gen-v', label: 'Gen V' },
                  {
                    id: 'gen-vi',
                    label: 'Gen VI',
                  },
                  {
                    id: 'gen-vii',
                    label: 'Gen VII',
                  },
                  {
                    id: 'gen-viii',
                    label: 'Gen VIII',
                  },
                  {
                    id: 'gen-ix',
                    label: 'Gen IX',
                  },
                ].map(({ id, label }) => (
                  <li key={id}>
                    <Link
                      href={`/learn/pokemon-generations/${id}`}
                      className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50"
                    >
                      <div className="flex items-center justify-between">
                        <span>{label}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-5 flex flex-wrap gap-2">
                <Button href="/learn/pokemon-generations">Explore generations</Button>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* Info box container */}
      <InfoBox
        title="Make the most of Learn"
        items={[
          <>
            Pick a core topic —{' '}
            <Link
              href="/learn/pokemon-regions"
              className="underline underline-offset-4 hover:no-underline"
            >
              Regions
            </Link>
            ,{' '}
            <Link
              href="/learn/pokemon-types"
              className="underline underline-offset-4 hover:no-underline"
            >
              Types
            </Link>{' '}
            or{' '}
            <Link
              href="/learn/pokemon-generations"
              className="underline underline-offset-4 hover:no-underline"
            >
              Generations
            </Link>
            —to get oriented fast.
          </>,

          <>
            Planning a run? Start with a{' '}
            <Link
              href="/learn/pokemon-regions"
              className="underline underline-offset-4 hover:no-underline"
            >
              Region guide
            </Link>{' '}
            for gyms, exclusives, and legendaries.
          </>,
          <>
            Brushing up on systems? Skim{' '}
            <Link
              href="/learn/pokemon-generations"
              className="underline underline-offset-4 hover:no-underline"
            >
              Generations
            </Link>{' '}
            for what changed and the best entry game.
          </>,
          <>
            Building a team? Check the{' '}
            <Link
              href="/learn/pokemon-types"
              className="underline underline-offset-4 hover:no-underline"
            >
              Type chart
            </Link>{' '}
            + coverage tips to patch weaknesses.
          </>,
        ]}
      />
    </main>
  );
}
