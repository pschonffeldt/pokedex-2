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
          <span className="font-medium text-gray-900">Kanto</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex items-start gap-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Kanto Region
              </h1>
              <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
                The birthplace of the Pokémon journey,{' '}
                <span className="font-medium text-gray-900">Kanto</span> is a compact and iconic
                region of bustling cities, mysterious caves, and a classic gym circuit. From Pallet
                Town to the Indigo Plateau, it’s where the original 151 were discovered and legends
                first took flight.
              </p>
            </div>
          </div>

          {/* Quick meta */}
          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Generation</dt>
              <dd className="text-gray-600">I (Pokédex #001–151)</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Games</dt>
              <dd className="text-gray-600">
                Red, Blue, Yellow • FireRed, LeafGreen • Let’s Go Pikachu/Eevee
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Professor</dt>
              <dd className="text-gray-600">Professor Oak</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Champion</dt>
              <dd className="text-gray-600">Blue (Rival)</dd>
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
                Kanto blends modern industry with natural landmarks—Silph Co. in Saffron City,
                Pokémon Tower in Lavender Town, and volcanic Cinnabar Island. Trainers start in
                Pallet Town and head up Route 1 toward a gym tour that culminates at the Indigo
                Plateau. Team Rocket’s schemes and legendary birds shape a journey that’s simple to
                learn and endlessly replayable.
              </p>
            </article>

            {/* Cities */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Key Cities & Towns</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Pallet Town',
                  'Viridian City',
                  'Pewter City',
                  'Cerulean City',
                  'Vermilion City',
                  'Lavender Town',
                  'Celadon City',
                  'Fuchsia City',
                  'Saffron City',
                  'Cinnabar Island',
                  'Indigo Plateau',
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
                  ['Brock', 'Rock – Pewter City'],
                  ['Misty', 'Water – Cerulean City'],
                  ['Lt. Surge', 'Electric – Vermilion City'],
                  ['Erika', 'Grass – Celadon City'],
                  ['Koga', 'Poison – Fuchsia City'],
                  ['Sabrina', 'Psychic – Saffron City'],
                  ['Blaine', 'Fire – Cinnabar Island'],
                  ['Giovanni', 'Ground – Viridian City'],
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
                  <li>Bulbasaur (Grass/Poison)</li>
                  <li>Charmander (Fire)</li>
                  <li>Squirtle (Water)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Legendary & Mythical</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>Articuno • Zapdos • Moltres</li>
                  <li>Mewtwo</li>
                  <li>Mew (Mythical, special distributions)</li>
                </ul>
              </article>
            </div>

            {/* Notable Routes */}
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Notable Routes & Landmarks</h2>
              <ul className="list-disc pl-6 text-gray-800">
                <li>Mt. Moon & Rock Tunnel</li>
                <li>Power Plant & Seafoam Islands</li>
                <li>Pokémon Tower (Lavender Town)</li>
                <li>Victory Road → Indigo Plateau</li>
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
                <li>The original 151 Pokémon were first cataloged in Kanto.</li>
                <li>Silph Co. created the Master Ball in Saffron City.</li>
                <li>Team Rocket hides in Celadon’s Game Corner.</li>
              </ul>
            </div>
            {/* Games & releases box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Games & Releases</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Original:</dt>
                  <dd className="text-gray-700">
                    Pokémon Red & Green (1996 JP) • Red & Blue (1998–99 WW)
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Third Version:</dt>
                  <dd className="text-gray-700">Pokémon Yellow (1998 JP / 1999–2000 WW)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Remakes:</dt>
                  <dd className="text-gray-700">
                    FireRed & LeafGreen (2004) • Let’s Go Pikachu/Eevee (2018)
                  </dd>
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
                alt="Kanto region map"
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
