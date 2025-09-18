'use client';

import { Dispatch, SetStateAction } from 'react';

interface Props {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

export default function SearchForm({ searchText, setSearchText }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText) return;
    console.log(`Text input on form is "${searchText}"`);
    // We should add a toast presenting that use needs to add something on the input in order to search, either a number or a pokemon name
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
