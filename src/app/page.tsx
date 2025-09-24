// app/page.tsx
'use client';

import BeginnerPaths from '@/components/beginner-path';
import BossCounters from '@/components/boss-counters';
import Button from '@/components/button';
import HeroSection from '@/components/hero';
import StarterChooser from '@/components/starter-pokemon';
import VersionExclusives from '@/components/version-exclusives';
import Link from 'next/link';

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

      {/* Core topics section */}
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
                <Button href="/pokedex">Open Pokédex</Button>
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
                <div className="mt-auto pt-5">
                  <Button href="/learn/pokemon-regions" variant="dark">
                    Explore regions
                  </Button>
                </div>
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
                <Button href="/learn/pokemon-types">Explore types</Button>
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
                    {/* Here we can enable the buttons to each gen page */}
                    {/* <Link
                      href={href}
                      className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50"
                    >
                      {label}
                    </Link> */}
                    <div className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50">
                      <p>{label}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Button href="/learn/pokemon-generations" variant="dark">
                  Explore generations
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
      {/* Components */}
      <BeginnerPaths />
      <BossCounters />
      <VersionExclusives />
      <StarterChooser />
    </main>
  );
}
