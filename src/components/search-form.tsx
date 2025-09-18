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
            block w-full h-[60px] rounded-full
            bg-white text-black placeholder:text-black/60
            pl-12 pr-6
            border border-white
            transition-colors duration-150
            focus-visible:outline-none
            ring-blue-600 focus-visible:ring-2
            ring-offset-0 ring-offset-white
            hover:bg-secondary/90
          "
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="e.g. Pikachu or 25"
          spellCheck={false}
          autoComplete="off"
        />
      </div>
    </form>
  );
}
