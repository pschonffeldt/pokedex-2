import ActionButons from '@/components/action-buttons';
import AppTitle from '@/components/app-title';
import ContentBlock from '@/components/content-block';
import PokemonStatsBars from '@/components/pokemon-stats-bars';
import PokemonTitle from '@/components/pokemon-title';
import PokemonType from '@/components/pokemon-type';
import SearchForm from '@/components/search-bar';
import SpriteContainer from '@/components/sprite-container';

export default function App() {
  return (
    <main className="px-30 py-20">
      <ContentBlock className="h-[700px] flex flex-col gap-3 p-10  py-6 items-start bg-[#dc0a2d] shadow-[10px_10px_rgba(0,0,0,0.4)]">
        <AppTitle />
        <SearchForm />
        <ActionButons />
        <ContentBlock>
          <PokemonTitle />
          <SpriteContainer />
          <PokemonType />
          <PokemonStatsBars />
        </ContentBlock>
      </ContentBlock>
    </main>
  );
}
