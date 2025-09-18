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

type Pokemon = {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string | null };
  types: { slot: number; type: { name: string } }[];
  // add fields you need later (stats, etc.)
};

export default function App() {
  const [searchText, setSearchText] = useState('');
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPokemon = async (query: string) => {
    const q = query.trim().toLowerCase();
    if (!q) return;

    setLoading(true);
    setError(null);
    setPokemon(null);

    try {
      const res = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${encodeURIComponent(q)}`
      );
      if (!res.ok) {
        if (res.status === 404) throw new Error('Pokémon not found.');
        throw new Error('Failed to fetch Pokémon.');
      }
      const data: Pokemon = await res.json();
      // Log fetched data for QA
      console.log('Fetched Pokémon:', data);

      setPokemon(data);
    } catch (err: any) {
      setError(err?.message ?? 'Unexpected error.');
    } finally {
      setLoading(false);
    }
  };

  const onSearch = () => fetchPokemon(searchText);
  const onRandom = () => {
    const randomId = Math.floor(Math.random() * 1025) + 1; // 1–1025
    setSearchText(String(randomId));
    fetchPokemon(String(randomId));
  };
  const onClear = () => {
    setSearchText('');
    setPokemon(null);
    setError(null);
  };

  return (
    <main className="px-30 py-20">
      <ContentBlock className="h-[700px] flex flex-col gap-3 p-10 py-6 items-start bg-[#dc0a2d] shadow-[10px_10px_rgba(0,0,0,0.4)]">
        <AppTitle />

        <SearchForm searchText={searchText} setSearchText={setSearchText} onSearch={onSearch} />

        <ActionButtons onSearch={onSearch} onRandom={onRandom} onClear={onClear} />

        <ContentBlock>
          {/* You can remove this once you show a proper title */}
          <p className="opacity-80">{searchText}</p>

          {/* Example: pass fetched data to your UI components as needed */}
          <PokemonTitle name={pokemon?.name} id={pokemon?.id} />
          <SpriteContainer spriteUrl={pokemon?.sprites.front_default ?? null} />
          <PokemonType types={pokemon?.types?.map((t) => t.type.name) ?? []} />
          <PokemonStatsBars /* stats={pokemon?.stats} */ />

          {loading && <p className="text-sm">Loading…</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
        </ContentBlock>
      </ContentBlock>
    </main>
  );
}
