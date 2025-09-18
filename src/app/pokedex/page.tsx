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

// --- API types you actually use on this page ---
type Pokemon = {
  id: number;
  name: string;
  height: number; // decimeters
  weight: number; // hectograms
  sprites: { front_default: string | null };
  types: { slot: number; type: { name: string } }[];
  stats: { base_stat: number; stat: { name: StatName } }[];
};

type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

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
      console.log('Fetched Pokémon:', data); // QA log
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
    const q = String(randomId);
    setSearchText(q);
    fetchPokemon(q);
  };
  const onClear = () => {
    setSearchText('');
    setPokemon(null);
    setError(null);
  };

  // --- Derived props for children (keeps JSX tidy) ---
  const titleName = pokemon?.name ?? null;
  const titleId = pokemon?.id ?? null;

  const spriteUrl = pokemon?.sprites.front_default ?? null;
  const spriteAlt = pokemon?.name ?? undefined;

  const typeNames = (pokemon?.types ?? []).map((t) => t.type.name);
  const weight = pokemon?.weight;
  const height = pokemon?.height;

  const statProps =
    (pokemon?.stats ?? []).map((s) => ({
      name: s.stat.name as StatName,
      base: s.base_stat,
    })) ?? [];

  return (
    <main className="px-30 py-20">
      <ContentBlock className="h-[700px] flex flex-col gap-3 p-10 py-6 items-start bg-[#dc0a2d] shadow-[10px_10px_rgba(0,0,0,0.4)]">
        <AppTitle />

        <SearchForm searchText={searchText} setSearchText={setSearchText} onSearch={onSearch} />

        <ActionButtons onSearch={onSearch} onRandom={onRandom} onClear={onClear} />

        <ContentBlock>
          {/* Dynamic components */}
          <PokemonTitle name={titleName} id={titleId} />

          <SpriteContainer spriteUrl={spriteUrl} alt={spriteAlt} />

          <PokemonType types={typeNames} weight={weight ?? null} height={height ?? null} />

          <PokemonStatsBars stats={statProps} />

          {loading && <p className="text-sm">Loading…</p>}
          {error && <p className="text-sm text-red-400">{error}</p>}
        </ContentBlock>
      </ContentBlock>
    </main>
  );
}
