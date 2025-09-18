'use client';

import { useState } from 'react';

export default function SearchForm() {
  const [searchText, setsearchText] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(`Text input on form is "${searchText}"`);
    e.preventDefault();

    if (!searchText) return;
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        value={searchText}
        onChange={(e) => setsearchText(e.target.value)}
        placeholder="Search Pokémon by name or number"
        spellCheck={false}
      />
    </form>
  );
}
