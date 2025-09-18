'use client';

import { useState } from 'react';
import ActionButtons from '@/components/action-buttons';
import AppTitle from '@/components/app-title';
import ContentBlock from '@/components/content-block';
import PokemonStatsBars from '@/components/pokemon-stats-bars';
import PokemonTitle from '@/components/pokemon-title';
import PokemonType from '@/components/pokemon-type';
import SearchForm from '@/components/search-form';
import SpriteContainer from '@/components/sprite-container';

// --- API types used on this page ---
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

// --- Helpers ---
function normalizePokemonInput(rawInput: string) {
  return rawInput
    .trim()
    .toLowerCase()
    .replace(/[\s.]+/g, '-') // "Mr. Mime" -> "mr-mime"
    .replace(/['’]/g, '') // "Farfetch’d" -> "farfetchd"
    .replace(/♀/g, '-f')
    .replace(/♂/g, '-m');
}

export default function App() {
  // Explicit state names
  const [searchText, setSearchText] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch based on user query
  const fetchPokemonByUserQuery = async (userQuery: string) => {
    const normalizedQuery = normalizePokemonInput(userQuery);
    if (!normalizedQuery) return;

    setIsLoading(true);
    setErrorMessage(null);
    setPokemon(null);

    try {
      const requestUrl = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${encodeURIComponent(
        normalizedQuery
      )}`;

      const response = await fetch(requestUrl);

      if (!response.ok) {
        if (response.status === 404) throw new Error('Pokémon not found.');
        throw new Error('Failed to fetch Pokémon.');
      }

      const pokemonData: Pokemon = await response.json();
      // QA log
      console.log('Fetched Pokémon:', pokemonData);

      setPokemon(pokemonData);
    } catch (caughtError: unknown) {
      const message = caughtError instanceof Error ? caughtError.message : 'Unexpected error.';
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  };

  // Handlers with descriptive names
  const handleSearch = () => fetchPokemonByUserQuery(searchText);

  const handleRandomSearch = () => {
    const randomId = Math.floor(Math.random() * 1025) + 1; // 1–1025
    const randomQuery = String(randomId);
    setSearchText(randomQuery);
    fetchPokemonByUserQuery(randomQuery);
  };

  const handleClearAll = () => {
    setSearchText('');
    setPokemon(null);
    setErrorMessage(null);
  };

  // --- Derived props for children (keeps JSX tidy) ---
  const titleName = pokemon?.name ?? null;
  const titleId = pokemon?.id ?? null;

  const spriteUrl = pokemon?.sprites.front_default ?? null;
  const spriteAlt = pokemon?.name ?? undefined;

  const typeNames = (pokemon?.types ?? []).map((t) => t.type.name);
  const weight = pokemon?.weight ?? null;
  const height = pokemon?.height ?? null;

  const statProps =
    (pokemon?.stats ?? []).map((s) => ({
      name: s.stat.name as StatName,
      base: s.base_stat,
    })) ?? [];

  return (
    <main className="px-30 py-20">
      <ContentBlock className="flex flex-col h-auto gap-3 p-10 py-6 items-start bg-[#dc0a2d] shadow-[10px_10px_rgba(0,0,0,0.4)]">
        <AppTitle />
        {/* {isLoading && <p className="text-sm">Loading…</p>}
        {errorMessage && <p className="text-sm text-red-400">{errorMessage}</p>} */}

        <SearchForm searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} />

        <ActionButtons
          onSearch={handleSearch}
          onRandom={handleRandomSearch}
          onClear={handleClearAll}
        />

        <ContentBlock>
          {/* Optional: echo the query while debugging */}
          {/* <p className="opacity-80">{searchText}</p> */}

          {/* Dynamic components */}
          <PokemonTitle name={titleName} id={titleId} />

          <SpriteContainer spriteUrl={spriteUrl} alt={spriteAlt} />

          <PokemonType types={typeNames} weight={weight} height={height} />

          <PokemonStatsBars stats={statProps} />
        </ContentBlock>
      </ContentBlock>
    </main>
  );
}
