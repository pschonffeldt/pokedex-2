'use client';

import * as React from 'react';
import Link from 'next/link';
import Button from '@/components/button';

export type BeginnerCard = {
  title: string;
  steps: Array<[label: string, href: string]>;
  cta: [label: string, href: string];
};

export type BeginnerPathsProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  cards?: BeginnerCard[];
  className?: string;
  containerClassName?: string;
};

const DEFAULT_CARDS: BeginnerCard[] = [
  {
    title: 'New to Pokémon?',
    steps: [
      ['Learn types (10 min)', '/learn/pkm-types'],
      ['Pick a region to start', '/learn/regions'],
      ['Choose a starter', '/learn/guides/starter-picks'],
      ['Open the Pokédex', '/pokedex'],
      ['Build basic coverage', '/learn/guides/pkm-type-coverage'],
    ],
    cta: ['Start learning', '/learn'],
  },
  {
    title: 'Returning after Gen IV?',
    steps: [
      ['Skim the Generations timeline', '/learn/generations'],
      ['Read new mechanics (Megas → Tera)', '/learn/generations#timeline'],
      ['Check regional forms', '/pokedex?query=regional'],
      ['Pick a modern entry', '/learn/generations#recommended'],
      ['Plan a team in the Pokédex', '/pokedex'],
    ],
    cta: ['Catch up fast', '/learn/generations'],
  },
  {
    title: 'Competitive curious?',
    steps: [
      ['Types & multipliers deep dive', '/learn/pkm-types'],
      ['Coverage recipes (BoltBeam, etc.)', '/learn/guides/pkm-type-coverage'],
      ['Speed control & hazards 101', '/learn/guides/hazards'],
      ['Build a sample core', '/learn/guides/sample-cores'],
      ['Search sets in Pokédex', '/pokedex'],
    ],
    cta: ['Open type chart', 'learn/pkm-types'],
  },
];

export default function BeginnerPaths({
  title = 'Beginner paths: choose a quick-start plan',
  description = 'Choose the path that matches your experience. Each step jumps straight to the exact guide or tool—finish a path and you’ll have a region, starter, and a basic team ready.',
  cards = DEFAULT_CARDS,
  className = '',
  containerClassName = '',
}: BeginnerPathsProps) {
  return (
    <section
      className={['mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12', containerClassName].join(' ')}
    >
      <div className={['rounded-2xl border border-gray-200 bg-white p-6', className].join(' ')}>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description ? <p className="mt-2 text-sm text-gray-600">{description}</p> : null}

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{card.title}</div>

              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-gray-700">
                {card.steps.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="underline-offset-4 hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ol>

              <div className="mt-3">
                <Button href={card.cta[1]} variant="outline" size="xs">
                  {card.cta[0]}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
