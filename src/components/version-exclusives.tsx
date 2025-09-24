'use client';

import * as React from 'react';
import Link from 'next/link';
import Button from '@/components/button';

export type VersionSide = {
  name: string;
  exclusives: string[];
  version: string; // e.g., 'red', 'blue', 'scarlet', 'violet'
};

export type VersionPair = {
  key: string; // unique key for the toggle
  label: string; // "Kanto — Red vs Blue"
  a: VersionSide;
  b: VersionSide;
};

type VersionExclusivesProps = {
  title?: React.ReactNode;
  pairs?: VersionPair[];
  initialKey?: string;
  className?: string;
  containerClassName?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

const DEFAULT_PAIRS: VersionPair[] = [
  {
    key: 'red-blue',
    label: 'Kanto — Red vs Blue',
    a: { name: 'Red', version: 'red', exclusives: ['Ekans', 'Arcanine', 'Scyther'] },
    b: { name: 'Blue', version: 'blue', exclusives: ['Sandshrew', 'Ninetales', 'Pinsir'] },
  },
  {
    key: 'gold-silver',
    label: 'Johto — Gold vs Silver',
    a: { name: 'Gold', version: 'gold', exclusives: ['Mankey', 'Growlithe', 'Gligar'] },
    b: { name: 'Silver', version: 'silver', exclusives: ['Vulpix', 'Meowth', 'Skarmory'] },
  },
  {
    key: 'scarlet-violet',
    label: 'Paldea — Scarlet vs Violet',
    a: {
      name: 'Scarlet',
      version: 'scarlet',
      exclusives: ['Larvitar line', 'Armarouge', 'Stonjourner'],
    },
    b: { name: 'Violet', version: 'violet', exclusives: ['Bagon line', 'Ceruledge', 'Eiscue'] },
  },
];

export default function VersionExclusives({
  title = 'Version exclusives (quick compare)',
  pairs = DEFAULT_PAIRS,
  initialKey,
  className = '',
  containerClassName = '',
  ctaHref = '/pokedex',
  ctaLabel = 'Browse exclusives in Pokédex',
}: VersionExclusivesProps) {
  // lazy initializer returns a definite string
  const [pairKey, setPairKey] = React.useState<string>(() => {
    if (initialKey && pairs.some((p) => p.key === initialKey)) return initialKey;
    return pairs[0]?.key ?? '';
  });

  const current = React.useMemo(
    () => pairs.find((p) => p.key === pairKey) ?? pairs[0],
    [pairs, pairKey]
  );

  if (!current) return null; // no data provided

  return (
    <section
      className={['mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12', containerClassName].join(' ')}
    >
      <div className={['rounded-2xl border border-gray-200 bg-white p-6', className].join(' ')}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          <div className="flex flex-wrap gap-2">
            {pairs.map((p) => {
              const isActive = p.key === pairKey;
              return (
                <button
                  key={p.key}
                  type="button"
                  onClick={() => setPairKey(p.key)}
                  aria-pressed={isActive}
                  className={[
                    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    isActive
                      ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                >
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[current.a, current.b].map((side) => (
            <article key={side.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{side.name}</div>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-700">
                {side.exclusives.map((name) => (
                  <li key={name} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                    <Link
                      // To use when we have params on pokedex
                      // href={`/pokedex?version=${encodeURIComponent(side.version)}&query=${encodeURIComponent(name)}`}
                      href="/pokedex"
                      className="hover:underline"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-5">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
