'use client';

import Image from 'next/image';
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

export default function JohtoPage() {
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
          <Link href="/learn/regions" className="text-gray-500 hover:text-gray-900">
            Regions
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Johto</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex items-start gap-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Johto Region
              </h1>
              <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
                Nestled west of Kanto, <span className="font-medium text-gray-900">Johto</span>{' '}
                blends tradition and nature—home to ancient towers, roaming beasts, and a league
                that tests mastery across two regions.
              </p>
            </div>
          </div>

          {/* Quick meta */}
          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Generation</dt>
              <dd className="text-gray-600">II (Pokédex #152–251)</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Games</dt>
              <dd className="text-gray-600">Gold, Silver, Crystal • HeartGold, SoulSilver</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Professor</dt>
              <dd className="text-gray-600">Professor Elm</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Champion</dt>
              <dd className="text-gray-600">Lance</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-10 lg:col-span-2">
            {/* Overview */}
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              <p className="text-gray-700">
                Johto emphasizes harmony with nature and history—Ecruteak’s Twin Towers, traditional
                architecture, and myths surrounding Ho-Oh and Lugia. Players begin in New Bark Town
                and can eventually travel to Kanto, making Johto a rare campaign with two regional
                adventures in one journey.
              </p>
            </article>

            {/* Cities */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Key Cities & Towns</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'New Bark Town',
                  'Cherrygrove City',
                  'Violet City',
                  'Azalea Town',
                  'Goldenrod City',
                  'Ecruteak City',
                  'Olivine City',
                  'Cianwood City',
                  'Mahogany Town',
                  'Blackthorn City',
                ].map((name) => (
                  <li
                    key={name}
                    className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-800"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </article>

            {/* Gym Leaders */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Gym Leaders</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  ['Falkner', 'Flying – Violet City'],
                  ['Bugsy', 'Bug – Azalea Town'],
                  ['Whitney', 'Normal – Goldenrod City'],
                  ['Morty', 'Ghost – Ecruteak City'],
                  ['Chuck', 'Fighting – Cianwood City'],
                  ['Jasmine', 'Steel – Olivine City'],
                  ['Pryce', 'Ice – Mahogany Town'],
                  ['Clair', 'Dragon – Blackthorn City'],
                ].map(([leader, info]) => (
                  <li key={leader} className="rounded-lg border border-gray-200 bg-white px-4 py-3">
                    <div className="font-medium text-gray-900">{leader}</div>
                    <div className="text-sm text-gray-600">{info}</div>
                  </li>
                ))}
              </ul>
            </article>

            {/* Starters & Legendaries */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Starter Pokémon</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>Chikorita (Grass)</li>
                  <li>Cyndaquil (Fire)</li>
                  <li>Totodile (Water)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Legendary & Mythical</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>Ho-Oh • Lugia</li>
                  <li>Raikou • Entei • Suicune</li>
                  <li>Celebi (Mythical, event)</li>
                </ul>
              </article>
            </div>

            {/* Notable Routes */}
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Notable Routes & Landmarks</h2>
              <ul className="list-disc pl-6 text-gray-800">
                <li>National Park & Bug-Catching Contest</li>
                <li>Bell Tower & Whirl Islands</li>
                <li>Mt. Mortar & Ice Path</li>
                <li>Lake of Rage (Red Gyarados)</li>
              </ul>
            </article>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pokedex"
                className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
              >
                Open Pokédex
              </Link>
              <Link
                href="/learn/regions"
                className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
              >
                Back to Regions
              </Link>
            </div>
          </div>

          {/* Right column / Sidebar */}
          {/* Trivia box */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Pokeball className="h-5 w-5 text-indigo-600" />
                Trivia
              </h3>
              <ul className="space-y-2 text-gray-800">
                <li>Johto connects to Kanto, unlocking a rare two-region post-game.</li>
                <li>Ecruteak’s towers reference phoenix and guardian myths (Ho-Oh & Lugia).</li>
                <li>HeartGold/SoulSilver added the Pokéwalker accessory.</li>
              </ul>
            </div>
            {/* Games & releases box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Games & Releases</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Original:</dt>
                  <dd className="text-gray-700">Pokémon Gold & Silver (1999 JP / 2000-01 WW)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Third Version:</dt>
                  <dd className="text-gray-700">Pokémon Crystal (2000 JP / 2001 WW)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Remakes:</dt>
                  <dd className="text-gray-700">HeartGold & SoulSilver (2009 JP / 2010 WW)</dd>
                </div>
              </dl>
            </div>
            {/* Map box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-gray-900">
                <Pokeball className="h-5 w-5 text-indigo-600" />
                Region map
              </h3>
              <Image
                src="/images/jhoto-map.svg" // put the file in /public/og-image.png
                alt="Johto region map"
                width={350}
                height={300}
                className="rounded-lg"
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
