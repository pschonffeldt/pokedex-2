'use client';

import { useState } from 'react';
import ActionButons from '@/components/action-buttons';
import AppTitle from '@/components/app-title';
import ContentBlock from '@/components/content-block';
import PokemonStatsBars from '@/components/pokemon-stats-bars';
import PokemonTitle from '@/components/pokemon-title';
import PokemonType from '@/components/pokemon-type';
import SearchForm from '@/components/search-form';
import SpriteContainer from '@/components/sprite-container';

export default function App() {
  // <-- state is now here
  const [searchText, setSearchText] = useState('');

  return (
    <main className="px-30 py-20">
      <ContentBlock className="h-[700px] flex flex-col gap-3 p-10 py-6 items-start bg-[#dc0a2d] shadow-[10px_10px_rgba(0,0,0,0.4)]">
        <AppTitle />
        {/* pass state + setter to SearchForm */}
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
        <ActionButons />

        <ContentBlock>
          {/* now you can use the value here */}
          <p>{searchText}</p>
          <PokemonTitle />
          <SpriteContainer />
          <PokemonType />
          <PokemonStatsBars />
        </ContentBlock>
      </ContentBlock>
    </main>
  );
}
