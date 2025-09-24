'use client';

import * as React from 'react';
import Button from '@/components/button';

type Boss = {
  name: string;
  tag: string; // e.g., "Gym — Rock/Ground", "League"
  recommends: string[]; // 3–5 short counter blurbs
};

export type BossCountersData = Record<string, Boss[]>; // region -> bosses

export type BossCountersProps = {
  title?: React.ReactNode;
  data?: BossCountersData;
  className?: string; // extra classes for the white card
  containerClassName?: string; // extra classes for the section container
  ctaHref?: string;
  ctaLabel?: string;
};

const DEFAULT_DATA: BossCountersData = {
  Kanto: [
    {
      name: 'Brock',
      tag: 'Gym — Rock/Ground',
      recommends: [
        'Grass/Water sweepers (Bulbasaur, Squirtle)',
        'Bring status (Leech Seed/Water Gun spam)',
        'Avoid Electric early (immune)',
      ],
    },
    {
      name: 'Misty',
      tag: 'Gym — Water',
      recommends: [
        'Electric (Pikachu/Jolteon)',
        'Grass (Bellsprout/Oddish)',
        'Watch for Ice Beam—pack a bulky Electric',
      ],
    },
    {
      name: 'Lt. Surge',
      tag: 'Gym — Electric',
      recommends: [
        'Ground (Diglett/Dugtrio) — immunity',
        'Rock/Ground covers Volt Switch loops',
        'Avoid Flying/Water if under-leveled',
      ],
    },
    {
      name: 'Erika',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying (Charmeleon/Pidgeotto)',
        'Poison (Beedrill/Muk) resists status',
        'Carry a burn heal substitute',
      ],
    },
    {
      name: 'Koga',
      tag: 'Gym — Poison',
      recommends: [
        'Ground/Psychic (Kadabra/Dugtrio)',
        'Antidotes; switch on Toxic',
        'Rock for Venomoth coverage',
      ],
    },
    {
      name: 'Sabrina',
      tag: 'Gym — Psychic',
      recommends: [
        'Dark/Bug/Ghost (Snorlax/Beedrill/Haunter)',
        'Physical attackers to dodge Sp. Def walls',
        'X-Scissor/Night Slash help',
      ],
    },
    {
      name: 'Blaine',
      tag: 'Gym — Fire',
      recommends: [
        'Water/Ground (Blastoise/Rhydon)',
        'Rock for Fire/Flying',
        'Beware burn—use special Water moves',
      ],
    },
    {
      name: 'Giovanni',
      tag: 'Gym — Ground',
      recommends: [
        'Water/Grass/Ice (Starmie/Venusaur)',
        'Levitate/Flying avoids EQ',
        'Pack status for bulky Nidos',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Ice for Lance’s Dragons',
        'Electric/Grass for Lorelei’s Waters',
        'Psychic/Flying for Bruno',
        'Dark/Ground for Agatha',
        'Flexible core for rival mix',
      ],
    },
  ],
  Johto: [
    {
      name: 'Falkner',
      tag: 'Gym — Flying',
      recommends: [
        'Electric (Mareep line)',
        'Rock (Geodude) early answers',
        'Avoid Bug/Grass leads',
      ],
    },
    {
      name: 'Bugsy',
      tag: 'Gym — Bug',
      recommends: [
        'Flying/Fire (Pidgeotto/Quilava)',
        'Rock vs Scyther U-turn',
        'Keep potions for Fury Cutter snowball',
      ],
    },
    {
      name: 'Whitney',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting (Machop trade)',
        'Status or Ghost to stall Rollout',
        'Disable Attract with female/oblivious',
      ],
    },
    {
      name: 'Morty',
      tag: 'Gym — Ghost',
      recommends: [
        'Dark/Ground (Umbreon/Donphan)',
        'Status cures vs Hypnosis',
        'Avoid Normal/Fighting spam',
      ],
    },
    {
      name: 'Chuck',
      tag: 'Gym — Fighting',
      recommends: [
        'Flying/Psychic (Noctowl/Espeon)',
        'Use Reflect/Intimidate',
        'Beware Dynamic Punch confuse',
      ],
    },
    {
      name: 'Jasmine',
      tag: 'Gym — Steel',
      recommends: [
        'Ground/Fire (Quagsire/Typhlosion)',
        'Special Water vs Steelix',
        'Pack burns or screens',
      ],
    },
    {
      name: 'Pryce',
      tag: 'Gym — Ice',
      recommends: [
        'Fighting/Rock/Steel',
        'Electric for Dewgong/Piloswine coverage',
        'Avoid Grass vs Ice Shard',
      ],
    },
    {
      name: 'Clair',
      tag: 'Gym — Dragon',
      recommends: [
        'Ice/Fairy answers',
        'Dragon Rage countermeasures',
        'Thunder Wave support helps',
      ],
    },
  ],
};

export default function BossCounters({
  title = 'Boss counters: gyms, trials, titans & elite',
  data = DEFAULT_DATA,
  className = '',
  containerClassName = '',
  ctaHref = '/learn/pokemon-regions',
  ctaLabel = 'Open region guides',
}: BossCountersProps) {
  const regions = React.useMemo(() => Object.keys(data), [data]);
  const [region, setRegion] = React.useState<string>(regions[0] ?? '');

  // Guard against empty data
  if (!regions.length) return null;

  return (
    <section
      className={['mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12', containerClassName].join(' ')}
    >
      <div className={['rounded-2xl border border-gray-200 bg-white p-6', className].join(' ')}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {/* Region toggles */}
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => {
              const isActive = r === region;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegion(r)}
                  className={[
                    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    isActive
                      ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        {/* Boss cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data[region]?.map((boss) => (
            <article key={boss.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{boss.name}</div>
              <div className="text-xs text-gray-600">{boss.tag}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {boss.recommends.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
          ))}

          {/* If region exists but has no bosses */}
          {data[region]?.length === 0 && (
            <div className="col-span-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600">
              No bosses added for this region yet.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
