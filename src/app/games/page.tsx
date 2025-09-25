'use client';

import * as React from 'react';
import Button from '@/components/button';
import HeroSection from '@/components/hero';
import Link from 'next/link';

type GameTag = 'main' | 'third' | 'remake' | 'open-world' | 'dlc' | 'legends';
type Platform = 'GB' | 'GBC' | 'GBA' | 'DS' | '3DS' | 'Switch';
type Generation =
  | 'Gen I'
  | 'Gen II'
  | 'Gen III'
  | 'Gen IV'
  | 'Gen V'
  | 'Gen VI'
  | 'Gen VII'
  | 'Gen VIII'
  | 'Gen IX';

type Game = {
  id: string;
  title: string;
  year: number | string;
  gen: Generation;
  region: string;
  platform: Platform;
  tags: GameTag[];
  highlights: string[];
  guideHref?: string; // to an eventual game/guide page
  generationHref?: string; // /learn/pokemon-generations#gen-x
  regionHref: string | URL; // /learn/pokemon-regions/<region>
  pokedexHref?: string; // /pokedex?region=<region>
};

const GAMES: Game[] = [
  /* Gen I */
  {
    id: 'rb',
    title: 'Red & Blue',
    year: 1998,
    gen: 'Gen I',
    region: 'Kanto',
    platform: 'GB',
    tags: ['main'],
    highlights: ['The beginning—151 to catch', 'Classic gym path', 'Version exclusives'],
    generationHref: '/learn/pokemon-generations#gen-i',
    regionHref: '/learn/pokemon-regions/kanto',
    pokedexHref: '/pokedex?region=Kanto',
  },
  {
    id: 'yellow',
    title: 'Yellow',
    year: 1999,
    gen: 'Gen I',
    region: 'Kanto',
    platform: 'GB',
    tags: ['third'],
    highlights: ['Anime-inspired follow-up', 'Pikachu partner', 'QoL tweaks for the run'],
    generationHref: '/learn/pokemon-generations#gen-i',
    regionHref: '/learn/pokemon-regions/kanto',
  },

  /* Gen II */
  {
    id: 'gs',
    title: 'Gold & Silver',
    year: '1999–2000',
    gen: 'Gen II',
    region: 'Johto',
    platform: 'GBC',
    tags: ['main'],
    highlights: ['Day/Night + breeding', 'Post-game Kanto return', '100 new Pokémon'],
    generationHref: '/learn/pokemon-generations#gen-ii',
    regionHref: '/learn/pokemon-regions/johto',
  },
  {
    id: 'crystal',
    title: 'Crystal',
    year: 2001,
    gen: 'Gen II',
    region: 'Johto',
    platform: 'GBC',
    tags: ['third'],
    highlights: ['Suicune story', 'Battle Tower debut', 'First playable female hero'],
    generationHref: '/learn/pokemon-generations#gen-ii',
    regionHref: '/learn/pokemon-regions/johto',
  },

  /* Gen III */
  {
    id: 'rs',
    title: 'Ruby & Sapphire',
    year: 2003,
    gen: 'Gen III',
    region: 'Hoenn',
    platform: 'GBA',
    tags: ['main'],
    highlights: ['Abilities & Natures arrive', 'Double battles', 'Secret Bases'],
    generationHref: '/learn/pokemon-generations#gen-iii',
    regionHref: '/learn/pokemon-regions/hoenn',
  },
  {
    id: 'emerald',
    title: 'Emerald',
    year: 2005,
    gen: 'Gen III',
    region: 'Hoenn',
    platform: 'GBA',
    tags: ['third'],
    highlights: [
      'Battle Frontier',
      'Team Magma/Aqua combined',
      'Best Gen III single-cartridge pick',
    ],
    generationHref: '/learn/pokemon-generations#gen-iii',
    regionHref: '/learn/pokemon-regions/hoenn',
  },
  {
    id: 'frlg',
    title: 'FireRed & LeafGreen (Kanto Remakes)',
    year: 2004,
    gen: 'Gen III',
    region: 'Kanto',
    platform: 'GBA',
    tags: ['remake'],
    highlights: ['Modernized Kanto', 'Wireless adapter multiplayer', 'Sevii Islands post-game'],
    regionHref: '/learn/pokemon-regions/kanto',
  },

  /* Gen IV */
  {
    id: 'dp',
    title: 'Diamond & Pearl',
    year: 2006,
    gen: 'Gen IV',
    region: 'Sinnoh',
    platform: 'DS',
    tags: ['main'],
    highlights: ['Physical/Special split', 'Online trading era begins', 'Underground'],
    generationHref: '/learn/pokemon-generations#gen-iv',
    regionHref: '/learn/pokemon-regions/sinnoh',
  },
  {
    id: 'plat',
    title: 'Platinum',
    year: 2008,
    gen: 'Gen IV',
    region: 'Sinnoh',
    platform: 'DS',
    tags: ['third'],
    highlights: ['Refined Sinnoh pacing', 'Distortion World', 'The “correct” Gen IV pick'],
    generationHref: '/learn/pokemon-generations#gen-iv',
    regionHref: '/learn/pokemon-regions/sinnoh',
  },
  {
    id: 'hgss',
    title: 'HeartGold & SoulSilver',
    year: 2009,
    gen: 'Gen IV',
    region: 'Johto',
    platform: 'DS',
    tags: ['remake'],
    highlights: ['Beloved remakes', 'Pokéwalker accessory', 'Two regions in one save'],
    regionHref: '/learn/pokemon-regions/johto',
  },

  /* Gen V */
  {
    id: 'bw',
    title: 'Black & White',
    year: 2010,
    gen: 'Gen V',
    region: 'Unova',
    platform: 'DS',
    tags: ['main'],
    highlights: ['All-new Dex until post-game', 'Animated sprites', 'Strong story'],
    generationHref: '/learn/pokemon-generations#gen-v',
    regionHref: '/learn/pokemon-regions/unova',
  },
  {
    id: 'bw2',
    title: 'Black 2 & White 2',
    year: 2012,
    gen: 'Gen V',
    region: 'Unova',
    platform: 'DS',
    tags: ['third'],
    highlights: ['Direct sequels', 'Challenge/Assist Modes', 'PokéStar Studios & Join Avenue'],
    generationHref: '/learn/pokemon-generations#gen-v',
    regionHref: '/learn/pokemon-regions/unova',
  },

  /* Gen VI */
  {
    id: 'xy',
    title: 'X & Y',
    year: 2013,
    gen: 'Gen VI',
    region: 'Kalos',
    platform: '3DS',
    tags: ['main'],
    highlights: ['3D jump', 'Fairy type introduced', 'Mega Evolutions'],
    generationHref: '/learn/pokemon-generations#gen-vi',
    regionHref: '/learn/pokemon-regions/kalos',
  },
  {
    id: 'oras',
    title: 'Omega Ruby & Alpha Sapphire',
    year: 2014,
    gen: 'Gen VI',
    region: 'Hoenn',
    platform: '3DS',
    tags: ['remake'],
    highlights: ['Modern Hoenn', 'DexNav hunting', 'Delta Episode post-game'],
    regionHref: '/learn/pokemon-regions/hoenn',
  },

  /* Gen VII */
  {
    id: 'sm',
    title: 'Sun & Moon',
    year: 2016,
    gen: 'Gen VII',
    region: 'Alola',
    platform: '3DS',
    tags: ['main'],
    highlights: ['Trials instead of Gyms', 'Z-Moves', 'Regional forms'],
    generationHref: '/learn/pokemon-generations#gen-vii',
    regionHref: '/learn/pokemon-regions/alola',
  },
  {
    id: 'usum',
    title: 'Ultra Sun & Ultra Moon',
    year: 2017,
    gen: 'Gen VII',
    region: 'Alola',
    platform: '3DS',
    tags: ['third'],
    highlights: ['Expanded story', 'Ultra Wormholes', 'Better endgame'],
    regionHref: '/learn/pokemon-regions/alola',
  },
  {
    id: 'lets-go',
    title: "Let's Go Pikachu & Eevee",
    year: 2018,
    gen: 'Gen VII',
    region: 'Kanto',
    platform: 'Switch',
    tags: ['remake'],
    highlights: ['Streamlined catching', 'Great on-ramp for new players', 'Local co-op'],
    regionHref: '/learn/pokemon-regions/kanto',
  },

  /* Gen VIII */
  {
    id: 'swsh',
    title: 'Sword & Shield',
    year: 2019,
    gen: 'Gen VIII',
    region: 'Galar',
    platform: 'Switch',
    tags: ['main'],
    highlights: ['Dynamax', 'Wild Area hub', 'Strong online/co-op support'],
    regionHref: '/learn/pokemon-regions/galar',
  },
  {
    id: 'swsh-dlc',
    title: 'Isle of Armor & Crown Tundra',
    year: 2020,
    gen: 'Gen VIII',
    region: 'Galar',
    platform: 'Switch',
    tags: ['dlc'],
    highlights: ['Open exploration zones', 'Raid legendaries', 'Great endgame loop'],
    regionHref: '/learn/pokemon-regions/galar',
  },
  {
    id: 'pla',
    title: 'Legends: Arceus',
    year: 2022,
    gen: 'Gen VIII',
    region: 'Hisui',
    platform: 'Switch',
    tags: ['legends', 'open-world'],
    highlights: ['Action-forward catching', 'Agile/Strong styles', 'Exploration-first design'],
    generationHref: '/learn/pokemon-generations#gen-viii',
    regionHref: '/learn/pokemon-regions/sinnoh',
  },

  /* Gen IX */
  {
    id: 'sv',
    title: 'Scarlet & Violet',
    year: 2022,
    gen: 'Gen IX',
    region: 'Paldea',
    platform: 'Switch',
    tags: ['main', 'open-world'],
    highlights: ['Fully open-world', 'Terastallization', 'Three-path campaign'],
    regionHref: '/learn/pokemon-regions/paldea',
  },
  {
    id: 'sv-dlc',
    title: 'Teal Mask & Indigo Disk',
    year: 2023,
    gen: 'Gen IX',
    region: 'Paldea',
    platform: 'Switch',
    tags: ['dlc'],
    highlights: ['New areas & mons', 'BB League & Blueberry quests', 'Great late-game variety'],
    regionHref: '/learn/pokemon-regions/paldea',
  },
];

const GEN_CHIPS: Array<{ label: 'All' | Generation; value: 'All' | Generation }> = [
  { label: 'All', value: 'All' },
  { label: 'Gen I', value: 'Gen I' },
  { label: 'Gen II', value: 'Gen II' },
  { label: 'Gen III', value: 'Gen III' },
  { label: 'Gen IV', value: 'Gen IV' },
  { label: 'Gen V', value: 'Gen V' },
  { label: 'Gen VI', value: 'Gen VI' },
  { label: 'Gen VII', value: 'Gen VII' },
  { label: 'Gen VIII', value: 'Gen VIII' },
  { label: 'Gen IX', value: 'Gen IX' },
];

const TAG_CHIPS: Array<{ label: string; value: GameTag | 'any' }> = [
  { label: 'Any', value: 'any' },
  { label: 'Main series', value: 'main' },
  { label: 'Third version', value: 'third' },
  { label: 'Remakes', value: 'remake' },
  { label: 'Open-world', value: 'open-world' },
  { label: 'DLC', value: 'dlc' },
  { label: 'Legends', value: 'legends' },
];

export default function GamesPage() {
  const [gen, setGen] = React.useState<'All' | Generation>('All');
  const [tag, setTag] = React.useState<GameTag | 'any'>('any');

  const filtered = React.useMemo(() => {
    return GAMES.filter((g) => (gen === 'All' ? true : g.gen === gen)).filter((g) =>
      tag === 'any' ? true : g.tags.includes(tag)
    );
  }, [gen, tag]);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <span className="font-medium text-gray-900">Games</span>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        title="Pokémon Games"
        description={
          <>
            Browse every main entry, remake, and expansion from <b>Kanto</b> to <b>Paldea</b>. See
            the big mechanics each era introduced, which games are best to start with, and quick
            reasons to pick one version over another. Filter by generation or tag and jump straight
            into guides.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/learn', label: 'Open learning hub', variant: 'dark' },
        ]}
      />

      {/* Filters */}
      <section className="mx-auto max-w-7xl pt-12 px-6 sm:px-8 lg:px-12">
        <div className="mb-6 grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-2 text-sm font-semibold text-gray-900">Generation</div>
            <div className="flex flex-wrap gap-2">
              {GEN_CHIPS.map((c) => {
                const active = c.value === gen;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setGen(c.value)}
                    className={[
                      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                      active
                        ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="mb-2 text-sm font-semibold text-gray-900">Tag</div>
            <div className="flex flex-wrap gap-2">
              {TAG_CHIPS.map((c) => {
                const active = c.value === tag;
                return (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => setTag(c.value)}
                    className={[
                      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                      active
                        ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
                    ].join(' ')}
                    aria-pressed={active}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Game list */}
      <section className="mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <article
              key={g.id}
              className="group relative flex h-full flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-gray-900">{g.title}</h3>
                <Link href={g.regionHref}>
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-200">
                    {g.gen}
                  </span>
                </Link>
              </div>

              <div className="mt-1 text-xs text-gray-600">
                {g.region} • {g.platform} • {g.year}
              </div>

              {/* Highlights */}
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {g.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-medium text-gray-700"
                  >
                    {t.replace('-', ' ')}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Page CTAs */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/learn/pokemon-generations" variant="primary">
            Compare by generation
          </Button>
          <Button href="/learn/pokemon-regions" variant="dark">
            Explore by region
          </Button>
        </div>
      </section>
    </main>
  );
}
