'use client';

import { FormEvent } from 'react';

interface Props {
  searchText: string;
  setSearchText: (v: string) => void;
  onSearch: () => void;
}

export default function SearchForm({ searchText, setSearchText, onSearch }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search Pokémon by name or number"
        spellCheck={false}
      />
    </form>
  );
}
