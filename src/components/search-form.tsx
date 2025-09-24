'use client';

import { FormEvent } from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface Props {
  searchText: string;
  setSearchText: (v: string) => void;
  onSearch: () => void;
}

export default function SearchForm({ searchText, setSearchText, onSearch }: Props) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <SearchIcon
          aria-hidden
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-red-600"
          strokeWidth={3}
        />

        <input
          type="search"
          aria-label="Search Pokémon by name or number"
          className="
            block w-full h-12 rounded-full
            bg-white text-gray-900 placeholder:text-gray-500/80
            pl-11 pr-5
            border border-gray-300 shadow-sm
            transition-colors
            hover:bg-gray-50
            focus-visible:outline-none
            focus:border-indigo-500
            focus-visible:ring-2 focus-visible:ring-indigo-500/60
          "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="e.g. Pikachu or 25"
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
          inputMode="search"
        />
      </div>
    </form>
  );
}
