'use client';

import { useState } from 'react';
import Link from 'next/link';
import ActionButtons from '@/components/action-buttons';
import PokemonStatsBars from '@/components/pokemon-stats-bars';
import PokemonTitle from '@/components/pokemon-title';
import PokemonType from '@/components/pokemon-type';
import SearchForm from '@/components/search-form';
import SpriteContainer from '@/components/sprite-container';
import HeroSection from '@/components/hero';
import Button from '@/components/button';

/* --------------------------- Types from your page --------------------------- */
type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

type Pokemon = {
  id: number;
  name: string;
  height: number; // decimeters
  weight: number; // hectograms
  sprites: { front_default: string | null };
  types: { slot: number; type: { name: string } }[];
  stats: { base_stat: number; stat: { name: StatName } }[];
};

/* --------------------------------- Helpers -------------------------------- */
function normalizePokemonInput(rawInput: string) {
  return rawInput
    .trim()
    .toLowerCase()
    .replace(/[\s.]+/g, '-') // "Mr. Mime" -> "mr-mime"
    .replace(/['’]/g, '') // "Farfetch’d" -> "farfetchd"
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m');
}

/* --------------------------------- Page ----------------------------------- */
export default function PokedexPage() {
  // Explicit state names
  const [searchText, setSearchText] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchPokemonByUserQuery = async (userQuery: string) => {
    const normalizedQuery = normalizePokemonInput(userQuery);

    // Empty input: show an error and stop.
    if (!normalizedQuery) {
      setErrorMessage('Please enter a Pokémon name or number (e.g., "Pikachu" or "25").');
      setPokemon(null); // optional: clear any previous result
      return;
    }
    // Easter egg for Chileans
    if (normalizedQuery === 'tula') {
      setErrorMessage('Que importa el nombre');
      setPokemon(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const requestUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${encodeURIComponent(
        normalizedQuery
      )}`;
      const response = await fetch(requestUrl);

      if (!response.ok) {
        if (response.status === 404)
          throw new Error('Pokémon not found. Check spelling or try a Dex #.');
        throw new Error('Failed to fetch Pokémon.');
      }

      const pokemonData: Pokemon = await response.json();
      setPokemon(pokemonData);
    } catch (caughtError: unknown) {
      const message = caughtError instanceof Error ? caughtError.message : 'Unexpected error.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handlers
  const handleSearch = () => fetchPokemonByUserQuery(searchText);

  const handleRandomSearch = () => {
    const randomId = Math.floor(Math.random() * 1025) + 1; // 1–1025
    setSearchText(String(randomId));
    fetchPokemonByUserQuery(String(randomId));
  };

  const handleClearAll = () => {
    setSearchText('');
    setPokemon(null);
    setErrorMessage(null);
  };

  // Derived
  const typeNames = (pokemon?.types ?? []).map((t) => t.type.name);
  const statProps =
    (pokemon?.stats ?? []).map((s) => ({
      name: s.stat.name as StatName,
      base: s.base_stat,
    })) ?? [];

  // Reusable button styles (match your system)
  const primaryBtn =
    'rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60';
  const darkBtn =
    'rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black';

  // Example chips (showcases normalization too)
  const examples = [
    'Pikachu',
    'Gengar',
    'Mr. Mime',
    'Farfetch’d',
    'Nidoran♀',
    'Nidoran♂',
    '#150',
    'Rayquaza',
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Pokédex</span>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title="Pokédex"
        description={
          <>
            Fast, readable Pokémon profiles. Search by name or Pokédex #, then scan types,
            height/weight, and base stats. Use examples below to try special names (Mr. Mime,
            Nidoran forms) and see how our input normalization works.
          </>
        }
        actions={[
          { href: '/learn', label: 'Start learning', variant: 'primary' },
          { href: '/learn/pokemon-types', label: 'Discover Pokémon Types', variant: 'dark' },
        ]}
      />
      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Search panel */}
          <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Search</h2>
            <p className="mt-1 text-sm text-gray-600">
              Type a name (e.g., <span className="font-medium">pikachu</span>,{' '}
              <span className="font-medium">mr mime</span>) or a number (e.g.,{' '}
              <span className="font-medium">25</span>, <span className="font-medium">150</span>).
            </p>

            <div className="mt-4 space-y-4">
              <SearchForm
                searchText={searchText}
                setSearchText={setSearchText}
                onSearch={handleSearch}
              />

              <ActionButtons
                onSearch={handleSearch}
                onRandom={handleRandomSearch}
                onClear={handleClearAll}
              />

              {/* Tips */}
              <div className="rounded-lg border border-gray-200 bg-white p-4">
                <div className="text-sm font-semibold text-gray-900">Tips</div>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-gray-700">
                  <li>
                    <span className="font-medium text-gray-900">Direct by Dex number:</span> type{' '}
                    <span className="font-mono">384</span> for Rayquaza,{' '}
                    <span className="font-mono">6</span> for Charizard, etc.
                  </li>

                  <li>
                    <span className="font-medium text-gray-900">Name normalization:</span>{' '}
                    case-insensitive; spaces & periods → hyphens; apostrophes removed. e.g. “Mr.
                    Mime” → <span className="font-mono">mr-mime</span>, “Farfetch’d” →{' '}
                    <span className="font-mono">farfetchd</span>. Gender symbols work: “Nidoran
                    ♀/♂” or <span className="font-mono">nidoran-f</span>/
                    <span className="font-mono">nidoran-m</span>.
                  </li>

                  <li>
                    <span className="font-medium text-gray-900">
                      Forms & regionals (use hyphens):
                    </span>{' '}
                    <span className="font-mono">giratina-origin</span>,{' '}
                    <span className="font-mono">deoxys-attack</span>,{' '}
                    <span className="font-mono">lycanroc-dusk</span>,{' '}
                    <span className="font-mono">charizard-gmax</span>,{' '}
                    <span className="font-mono">meowth-galar</span>,{' '}
                    <span className="font-mono">growlithe-hisui</span>,{' '}
                    <span className="font-mono">tauros-paldea-combat</span>.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          {/* Result panel */}
          <article className="lg:col-span-2 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">Result</h2>

            {/* Status */}
            <div className="min-h-[28px] text-sm">
              {isLoading && <span className="text-gray-600">Loading Pokémon…</span>}
              {!isLoading && errorMessage && <span className="text-red-600">{errorMessage}</span>}
              {!isLoading && !errorMessage && !pokemon && (
                <span className="text-gray-500">Search for a Pokémon to see details.</span>
              )}
            </div>

            {/* Details */}
            {pokemon && (
              <div className="grid gap-2 md:grid-cols-2">
                <div className="space-y-2">
                  <PokemonTitle name={pokemon.name} id={pokemon.id} />
                  <SpriteContainer
                    spriteUrl={pokemon.sprites.front_default ?? null}
                    alt={pokemon.name}
                  />
                  <PokemonType
                    types={typeNames}
                    weight={pokemon.weight ?? null}
                    height={pokemon.height ?? null}
                  />
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-2">
                    <div className="mt-2">
                      <PokemonStatsBars apiStats={pokemon.stats ?? []} />
                    </div>
                  </div>

                  {/* <div className="rounded-lg border border-gray-200 bg-white p-4">
                    <div className="text-sm font-semibold text-gray-900">Quick Actions</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Button href={`/pokedex?share=${pokemon.id}`} variant="outline" size="xs">
                        Share
                      </Button>
                      <Button href={`/learn/pokemon-regions`} variant="outline" size="xs">
                        Browse regions
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
