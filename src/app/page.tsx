// app/page.tsx
'use client';

import BeginnerPaths from '@/components/beginner-path';
import BossCounters from '@/components/boss-counters';
import Button from '@/components/button';
import HeroSection from '@/components/hero';
import StarterChooser from '@/components/starter-pokemon';
import VersionExclusives from '@/components/version-exclusives';
import Link from 'next/link';

const TYPES = [
  ['normal', '⚪️', 'Normal'],
  ['fire', '🔥', 'Fire'],
  ['water', '💧', 'Water'],
  ['grass', '🌿', 'Grass'],
  ['electric', '⚡️', 'Electric'],
  ['ice', '❄️', 'Ice'],
  ['fighting', '🥊', 'Fighting'],
  ['poison', '🧪', 'Poison'],
  ['ground', '🏜️', 'Ground'],
  ['flying', '🕊️', 'Flying'],
  ['psychic', '🔮', 'Psychic'],
  ['bug', '🐛', 'Bug'],
  ['rock', '🪨', 'Rock'],
  ['ghost', '👻', 'Ghost'],
  ['dragon', '🐉', 'Dragon'],
  ['dark', '🌑', 'Dark'],
  ['steel', '⚙️', 'Steel'],
  ['fairy', '✨', 'Fairy'],
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="font-medium text-gray-900">
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
                  Find by name or # (e.g., Pikachu, 25 — supports Mr. Mime, Nidoran♀/♂)
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Quick view: types & stats (height/weight, base stats at a glance)
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Roll a random Pokémon (discover something new fast)
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
                {(
                  [
                    ['Kanto', '/learn/regions/kanto'],
                    ['Johto', '/learn/regions/johto'],
                    ['Hoenn', '/learn/regions/hoenn'],
                    ['Sinnoh', '/learn/regions/sinnoh'],
                    ['Unova', '/learn/regions/unova'],
                    ['Galar', '/learn/regions/galar'],
                  ] as const
                ).map(([name, href]) => (
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
                  <Button href="/learn/regions" variant="dark">
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

              {/* Emoji grid that links to each type page */}
              <ul className="mt-4 grid grid-cols-6 gap-2">
                {TYPES.map(([id, emoji, label]) => (
                  <li key={id}>
                    <Link
                      href={`/learn/types/${id}`}
                      title={label}
                      aria-label={label}
                      className="block rounded-lg border border-gray-200 bg-white text-xl hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                    >
                      <span className="sr-only">{label}</span>
                      <span className="flex h-10 items-center justify-center">{emoji}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-5">
                <Button href="/learn/types">Explore types</Button>
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
                  ['Gen I', '/learn/generations#gen-i'],
                  ['Gen II', '/learn/generations#gen-ii'],
                  ['Gen III', '/learn/generations#gen-iii'],
                  ['Gen IV', '/learn/generations#gen-iv'],
                  ['Gen V', '/learn/generations#gen-v'],
                  ['Gen VI', '/learn/generations#gen-vi'],
                  ['Gen VII', '/learn/generations#gen-vii'],
                  ['Gen VIII', '/learn/generations#gen-viii'],
                  ['Gen IX', '/learn/generations#gen-ix'],
                ].map(([label]) => (
                  <li key={label}>
                    <div className="block rounded-lg border border-gray-200 bg-white px-3 py-2 hover:bg-gray-50">
                      <p>{label}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-5">
                <Button href="/learn/generations" variant="dark">
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
