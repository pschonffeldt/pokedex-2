import Link from 'next/link';
import { notFound } from 'next/navigation';

import Button from '@/components/button';
import InfoBox from '@/components/info-box';
import HeroSection from '@/components/hero';

import {
  GENERATION_CONTENT,
  ALL_GENERATIONS,
  isGenerationKey,
  type GenerationKey,
} from '@/components/generations';

/** We’re prebuilding all generation pages */
export const dynamicParams = false;

export function generateStaticParams() {
  return (ALL_GENERATIONS as GenerationKey[]).map((g) => ({ generation: g }));
}

export function generateMetadata({ params }: { params: { generation: string } }) {
  if (!isGenerationKey(params.generation)) return {};
  const data = GENERATION_CONTENT[params.generation];
  return {
    title: `${data.label} — ${data.region} | Learn`,
    description: data.hero.blurb,
  };
}

/** Small helper for card-like sections */
function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6">
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <div className="mt-3 text-sm text-gray-700">{children}</div>
    </article>
  );
}

export default function Page({ params }: { params: { generation: string } }) {
  if (!isGenerationKey(params.generation)) return notFound();
  const data = GENERATION_CONTENT[params.generation];

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 text-sm sm:px-8 lg:px-12">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/learn" className="text-gray-500 hover:text-gray-900">
            Learn
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/learn/pokemon-generations" className="text-gray-500 hover:text-gray-900">
            Generations
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">
            {data.label} — {data.region}
          </span>
        </div>
      </nav>

      {/* Hero (same component / spacing as elsewhere) */}
      <HeroSection
        title={
          <div className="flex items-center gap-3">
            <span
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ring-indigo-100"
              aria-hidden="true"
            >
              {data.emoji}
            </span>
            <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {data.label} — {data.region}
            </span>
          </div>
        }
        description={data.hero.blurb}
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/learn/pokemon-regions', label: 'Browse regions', variant: 'dark' },
        ]}
      />

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* All generations quick-nav (chips) */}
        <div className="flex flex-wrap gap-2 pb-10">
          {(ALL_GENERATIONS as GenerationKey[]).map((id) => {
            const g = GENERATION_CONTENT[id];
            const active = id === params.generation;
            return (
              <Link
                key={id}
                href={`/learn/pokemon-generations/${id}`}
                aria-current={active ? 'page' : undefined}
                className={[
                  'inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ring-1 transition',
                  active
                    ? 'bg-indigo-600 text-white ring-indigo-600'
                    : 'bg-white text-gray-800 hover:bg-gray-50 ring-gray-200',
                ].join(' ')}
              >
                <span className="text-base">{g.emoji}</span>
                <span className="font-medium">{g.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Content grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-6 lg:col-span-2">
            <SectionCard title="What this generation added">
              <ul className="list-disc space-y-2 pl-5">
                {data.mechanics.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="Why it mattered (meta shifts)">
              <ul className="list-disc space-y-2 pl-5">
                {data.metaShifts.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard title="Best games to play now">
              <ul className="space-y-3">
                {data.games.bestEntries.map((g) => (
                  <li key={g.title} className="rounded-lg border border-gray-200 bg-white p-3">
                    <div className="font-medium text-gray-900">{g.title}</div>
                    <p className="text-gray-700">{g.why}</p>
                    <div className="mt-2">
                      <Button href={g.href} size="xs" variant="outline">
                        Learn more
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            </SectionCard>
          </div>

          {/* Right column (sticky) */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">At a glance</h3>
              <div className="mt-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium text-gray-900">Years:</span> {data.years}
                </div>
                <div className="mt-1">
                  <span className="font-medium text-gray-900">Main games:</span>{' '}
                  {data.games.main.join(', ')}
                </div>
                {data.games.remakesOrExpansions?.length ? (
                  <div className="mt-1">
                    <span className="font-medium text-gray-900">Remakes/Expansions:</span>{' '}
                    {data.games.remakesOrExpansions.join(', ')}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">Starters</h3>
              <ul className="mt-3 grid gap-2">
                {data.starters.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">Iconics & legendaries</h3>
              <ul className="mt-3 grid gap-2">
                {data.legendaries.map((l) => (
                  <li
                    key={l}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            {data.ctas?.length ? (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-gray-900">Keep exploring</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {data.ctas.map((c) => (
                    <Button key={c.href} href={c.href} size="sm">
                      {c.label}
                    </Button>
                  ))}
                </div>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      {/* Info box footer (consistent with other pages) */}
      <InfoBox
        variant="tinted"
        title="Tips to get started in this gen"
        items={[
          <>
            Open the{' '}
            <Link
              href="/pokedex"
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              Pokédex
            </Link>{' '}
            and try a team with roles highlighted in the meta shifts.
          </>,
          <>
            Visit the{' '}
            <Link
              href={`/learn/pokemon-regions/${data.region.toLowerCase()}`}
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              {data.region} region guide
            </Link>{' '}
            to see gyms, exclusives, and legendaries.
          </>,
          <>
            Review the{' '}
            <Link
              href="/learn/pokemon-types"
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              Types chart
            </Link>{' '}
            to build coverage for this gen’s threats.
          </>,
        ]}
      />
    </main>
  );
}
