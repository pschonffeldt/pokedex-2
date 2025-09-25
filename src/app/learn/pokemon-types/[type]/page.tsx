// app/learn/pokemon-types/[type]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';

import Button from '@/components/button';
import InfoBox from '@/components/info-box';

import HeroSection from '@/components/hero';
import { ALL_TYPES, isTypeKey, TYPE_CONTENT, TypeKey } from '@/components/types';

export const dynamicParams = false;

export function generateStaticParams() {
  // Pre-build only the types you actually provided in TYPE_CONTENT
  return (ALL_TYPES as TypeKey[]).map((id) => ({ type: id }));
}

export function generateMetadata({ params }: { params: { type: string } }) {
  if (!isTypeKey(params.type)) return {};
  const data = TYPE_CONTENT[params.type];
  return {
    title: `${data.name} Type — Learn`,
    description: data.hero.blurb,
  };
}

export default function TypePage({ params }: { params: { type: string } }) {
  if (!isTypeKey(params.type)) return notFound();
  const data = TYPE_CONTENT[params.type];

  return (
    <main className="min-h-screen bg-white">
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
          <Link href="/learn/pokemon-types" className="text-gray-500 hover:text-gray-900">
            Types
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">{data.name}</span>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        title={`${data.name} Type`}
        description={data.hero.blurb}
        actions={[
          {
            href: `/pokedex`,
            label: 'Open Pokédex',
            variant: 'primary',
          },
          {
            href: '/learn/pokemon-types',
            label: 'Back to Types',
            variant: 'dark',
          },
        ]}
      />

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Left: Overview & lists */}
          <div className="space-y-8 lg:col-span-2">
            {/* Overview */}
            <article className="space-y-3">
              <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              <p className="text-gray-700">{data.summary}</p>
            </article>

            {/* Strengths / Weaknesses */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">Strengths</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  {data.strengths.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">Weaknesses</h3>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-sm text-gray-700">
                  {data.weaknesses.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </article>
            </div>

            {/* Recommended starters / examples (optional) */}
            {data.recommendedStarters && data.recommendedStarters.length > 0 && (
              <article className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">Good starters & examples</h3>
                <ul className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {data.recommendedStarters.map((name) => (
                    <li
                      key={name}
                      className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </article>
            )}

            {/* Inline CTAs from content (optional) */}
            {data.ctas && data.ctas.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {data.ctas.map((c) => (
                  <Button key={`${c.href}-${c.label}`} href={c.href} variant="outline" size="xs">
                    {c.label}
                  </Button>
                ))}
              </div>
            )}
          </div>

          {/* Right: helper box */}
          <aside className="space-y-6">
            <InfoBox
              variant="tinted"
              title={
                <span className="flex items-center gap-2">
                  <span>How to use this page</span>
                </span>
              }
              items={[
                <>
                  Check <span className="font-medium text-gray-900">Strengths</span> to see what
                  this type beats, and <span className="font-medium text-gray-900">Weaknesses</span>{' '}
                  to plan counters.
                </>,
                <>
                  Open the{' '}
                  <Link
                    href={`/pokedex?type=${encodeURIComponent(data.id)}`}
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    Pokédex filtered to {data.name}
                  </Link>{' '}
                  to see examples quickly.
                </>,
                <>
                  Building a team? Combine with a partner that covers these weaknesses (e.g., add a
                  type that resists them).
                </>,
              ]}
            />
          </aside>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`/pokedex?type=${encodeURIComponent(data.id)}`} variant="primary">
            Browse {data.name} in Pokédex
          </Button>
          <Button href="/learn/pokemon-types" variant="outline">
            Back to Types index
          </Button>
        </div>
      </section>
    </main>
  );
}
