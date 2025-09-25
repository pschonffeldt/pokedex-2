import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/components/button';
import InfoBox from '@/components/info-box';
import { TYPE_CONTENT, ALL_TYPES, isTypeKey, type TypeId } from '@/components/pkm-types';
import HeroSection from '@/components/hero';
import Chip from '@/components/chip';

/* Type accents (emoji + subtle color) */
const TYPE_STYLES: Record<TypeId, { emoji: string; chip: string; ring: string }> = {
  normal: { emoji: '⚪️', chip: 'bg-gray-100 text-gray-800', ring: 'ring-gray-200' },
  fire: { emoji: '🔥', chip: 'bg-orange-100 text-orange-800', ring: 'ring-orange-200' },
  water: { emoji: '💧', chip: 'bg-sky-100 text-sky-800', ring: 'ring-sky-200' },
  grass: { emoji: '🌿', chip: 'bg-emerald-100 text-emerald-800', ring: 'ring-emerald-200' },
  electric: { emoji: '⚡️', chip: 'bg-yellow-100 text-yellow-800', ring: 'ring-yellow-200' },
  ice: { emoji: '❄️', chip: 'bg-cyan-100 text-cyan-800', ring: 'ring-cyan-200' },
  fighting: { emoji: '🥊', chip: 'bg-red-100 text-red-800', ring: 'ring-red-200' },
  poison: { emoji: '🧪', chip: 'bg-fuchsia-100 text-fuchsia-800', ring: 'ring-fuchsia-200' },
  ground: { emoji: '🏜️', chip: 'bg-amber-100 text-amber-800', ring: 'ring-amber-200' },
  flying: { emoji: '🕊️', chip: 'bg-indigo-100 text-indigo-800', ring: 'ring-indigo-200' },
  psychic: { emoji: '🔮', chip: 'bg-pink-100 text-pink-800', ring: 'ring-pink-200' },
  bug: { emoji: '🐛', chip: 'bg-lime-100 text-lime-800', ring: 'ring-lime-200' },
  rock: { emoji: '🪨', chip: 'bg-stone-100 text-stone-800', ring: 'ring-stone-200' },
  ghost: { emoji: '👻', chip: 'bg-violet-100 text-violet-800', ring: 'ring-violet-200' },
  dragon: { emoji: '🐉', chip: 'bg-purple-100 text-purple-800', ring: 'ring-purple-200' },
  dark: { emoji: '🌑', chip: 'bg-neutral-200 text-neutral-900', ring: 'ring-neutral-300' },
  steel: { emoji: '⚙️', chip: 'bg-slate-100 text-slate-800', ring: 'ring-slate-200' },
  fairy: { emoji: '✨', chip: 'bg-rose-100 text-rose-800', ring: 'ring-rose-200' },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_TYPES.map((id) => ({ type: id }));
}

export function generateMetadata({ params }: { params: { type: string } }) {
  if (!isTypeKey(params.type)) return {};
  const data = TYPE_CONTENT[params.type];
  return { title: `${data.name} Type — Learn`, description: data.hero.blurb };
}

export default function Page({ params }: { params: { type: string } }) {
  if (!isTypeKey(params.type)) return notFound();
  const data = TYPE_CONTENT[params.type];
  const style = TYPE_STYLES[params.type];

  return (
    <main>
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/learn" className="text-gray-500 hover:text-gray-900">
            Learn
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/learn/pkm-types" className="text-gray-500 hover:text-gray-900">
            Types
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">{data.name}</span>
        </div>
      </nav>
      {/* Component hero */}
      <HeroSection
        title={
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl shadow-sm ring-1 ${style.ring}`}
              aria-hidden="true"
            >
              {style.emoji}
            </span>
            <span className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              {data.name} Type
            </span>
          </div>
        }
        description={<>{data.hero.blurb}</>}
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/pkm-types', label: 'Open type chart', variant: 'dark' },
        ]}
      />
      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        {/* All types quick-nav */}
        <div className="flex flex-wrap gap-2 pb-10">
          {ALL_TYPES.map((id) => {
            const active = id === params.type;
            const s = TYPE_STYLES[id as TypeId];
            return (
              <Link
                key={id}
                href={`/learn/pkm-types/${id}`}
                aria-current={active ? 'page' : undefined}
                className={[
                  'inline-flex items-center gap-1 rounded-full px-3 py-1 text-sm ring-1 transition',
                  active
                    ? 'bg-indigo-600 text-white ring-indigo-600'
                    : 'bg-white text-gray-800 hover:bg-gray-50 ring-gray-200',
                ].join(' ')}
              >
                <span>{s.emoji}</span>
                <span className="capitalize">{id}</span>
              </Link>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="space-y-6 lg:col-span-2">
            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">How {data.name} plays</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{data.summary}</p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
                  <div className="text-xs font-semibold text-emerald-700">Strengths</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-emerald-900">
                    {data.strengths.map((strength) => (
                      <li key={strength}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-4">
                  <div className="text-xs font-semibold text-rose-700">Weaknesses</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-rose-900">
                    {data.weaknesses.map((weak) => (
                      <li key={weak}>{weak}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-gray-900">Team-building notes</h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                <li className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Cover blind spots:</span> pair{' '}
                  {data.name} with partners that answer the weaknesses above.
                </li>
                <li className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Create a pivot path:</span> use
                  U-turn/Volt Switch/Parting Shot or status to bring your breaker in safely.
                </li>
                <li className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Speed control:</span> priority or fast
                  teammates let your core close once checks are chipped.
                </li>
                <li className="rounded-lg border border-gray-200 bg-white p-3 text-sm text-gray-700">
                  <span className="font-medium text-gray-900">Win-con clarity:</span> decide if{' '}
                  {data.name} is your breaker, cleaner, or glue—and support that role with
                  hazards/screens/heal.
                </li>
              </ul>
            </article>
          </div>

          {/* Right column (sticky) */}
          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="text-sm font-semibold text-gray-900">Matchups</h3>
              <div className="mt-3">
                <div className="text-sm font-medium text-emerald-700">Good into</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.strengths.map((s) => (
                    <Chip key={`good-${s}`} className=" ring-emerald-200">
                      ✅ {s}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="text-sm font-medium text-rose-700">Be careful vs</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {data.weaknesses.map((w) => (
                    <Chip key={`bad-${w}`} className=" ring-red-300">
                      ⚠️ {w}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>

            {data.recommendedStarters?.length ? (
              <div className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="text-sm font-semibold text-gray-900">Good starters/partners</h3>
                <ul className="mt-3 grid gap-2">
                  {data.recommendedStarters.map((p) => (
                    <li
                      key={p}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

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
      {/* Info box container */}
      <InfoBox
        title="Make the most of Regions"
        items={[
          <>
            Open this type in the{' '}
            <Link
              href={`/pokedex?type=${data.id}`}
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              Pokédex
            </Link>{' '}
            to browse learnsets and stats.
          </>,
          <>
            Study the full{' '}
            <Link
              href="/learn/pkm-types"
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              type chart
            </Link>{' '}
            for exact multipliers.
          </>,
          <>
            Patch weaknesses using our{' '}
            <Link
              href="/learn/guides/pkm-type-coverage"
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              coverage tips
            </Link>
            .
          </>,
          <>
            Want a region-specific team? Start with a{' '}
            <Link
              href="/learn/regions"
              className="font-medium text-gray-900 underline-offset-4 hover:underline"
            >
              Region guide
            </Link>
            .
          </>,
        ]}
      />
    </main>
  );
}
