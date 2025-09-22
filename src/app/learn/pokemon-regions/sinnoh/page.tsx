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

export default function SinnohPage() {
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
          <Link href="/learn/pokemon-regions" className="text-gray-500 hover:text-gray-900">
            Regions
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Sinnoh</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-gray-100 bg-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12">
          <div className="flex items-start gap-3">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
                Sinnoh Region
              </h1>
              <p className="mt-3 max-w-prose text-gray-600 sm:text-lg">
                A land of myths crowned by Mt. Coronet.{' '}
                <span className="font-medium text-gray-900">Sinnoh</span> ties the Pokémon world’s
                creation lore to modern adventures—Spear Pillar, the Distortion World, and a rich
                Underground where exploration and discovery thrive.
              </p>
            </div>
          </div>

          {/* Quick meta */}
          <dl className="mt-8 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Generation</dt>
              <dd className="text-gray-600">IV (Pokédex #387–493)</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Games</dt>
              <dd className="text-gray-600">
                Diamond, Pearl, Platinum • Brilliant Diamond, Shining Pearl • Legends: Arceus
                (Hisui)
              </dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Professor</dt>
              <dd className="text-gray-600">Professor Rowan</dd>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-4">
              <dt className="font-medium text-gray-900">Champion</dt>
              <dd className="text-gray-600">Cynthia</dd>
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
                Sinnoh’s routes radiate around Mt. Coronet, splitting climates from snowy peaks to
                flowered meadows. The Pokétch, Super Contests, and the (Grand) Underground add
                layers of side content, while Team Galactic’s pursuit of time and space culminates
                at Spear Pillar—and beyond in Platinum’s Distortion World.
              </p>
            </article>

            {/* Cities */}
            <article className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Key Cities & Towns</h2>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  'Twinleaf Town',
                  'Sandgem Town',
                  'Jubilife City',
                  'Oreburgh City',
                  'Floaroma Town',
                  'Eterna City',
                  'Hearthome City',
                  'Solaceon Town',
                  'Veilstone City',
                  'Pastoria City',
                  'Celestic Town',
                  'Canalave City',
                  'Snowpoint City',
                  'Sunyshore City',
                  'Pokémon League',
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
                  ['Roark', 'Rock – Oreburgh City'],
                  ['Gardenia', 'Grass – Eterna City'],
                  ['Maylene', 'Fighting – Veilstone City'],
                  ['Crasher Wake', 'Water – Pastoria City'],
                  ['Fantina', 'Ghost – Hearthome City'],
                  ['Byron', 'Steel – Canalave City'],
                  ['Candice', 'Ice – Snowpoint City'],
                  ['Volkner', 'Electric – Sunyshore City'],
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
                  <li>Turtwig (Grass)</li>
                  <li>Chimchar (Fire)</li>
                  <li>Piplup (Water)</li>
                </ul>
              </article>

              <article className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Legendary & Mythical</h2>
                <ul className="space-y-2 text-gray-800">
                  <li>Dialga • Palkia • Giratina</li>
                  <li>Uxie • Mesprit • Azelf</li>
                  <li>Heatran • Cresselia • Regigigas</li>
                  <li>Shaymin • Darkrai • Arceus (Mythical)</li>
                </ul>
              </article>
            </div>

            {/* Notable Routes */}
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Notable Routes & Landmarks</h2>
              <ul className="list-disc pl-6 text-gray-800">
                <li>Mt. Coronet &amp; Spear Pillar</li>
                <li>Distortion World (Platinum)</li>
                <li>Great Marsh (Pastoria)</li>
                <li>Snowpoint Temple (Regigigas)</li>
                <li>Stark Mountain (Heatran)</li>
                <li>Solaceon Ruins (Unown)</li>
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
                href="/learn/pokemon-regions"
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
                <li>Generation IV introduced the Physical/Special split for moves.</li>
                <li>Super Contests and the Pokétch expanded side activities.</li>
                <li>
                  The Underground (Grand Underground in remakes) enables digging and Secret Bases.
                </li>
              </ul>
            </div>
            {/* Games & releases box */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Games & Releases</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Original:</dt>
                  <dd className="text-gray-700">Pokémon Diamond &amp; Pearl (2006 JP / 2007 WW)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Third Version:</dt>
                  <dd className="text-gray-700">Pokémon Platinum (2008 JP / 2009 WW)</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Remakes:</dt>
                  <dd className="text-gray-700">
                    Brilliant Diamond &amp; Shining Pearl (2021) • Legends: Arceus (2022, Hisui)
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
                alt="Sinnoh region map"
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
