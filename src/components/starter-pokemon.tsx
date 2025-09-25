'use client';

import * as React from 'react';
import Button from '@/components/button';

/* ---------- Types ---------- */

export type Playstyle = 'aggressive' | 'balanced' | 'defensive';
export const REGIONS = ['Kanto', 'Johto', 'Paldea'] as const;
export type Region = (typeof REGIONS)[number];

export type StarterResult = {
  region: Region;
  starter: string;
  teammates: string[];
  rationale: string;
};

type StarterTemplate = Omit<StarterResult, 'region'>;

/* ---------- Data (fully typed) ---------- */

const STARTER_MAP: Record<Region, Record<Playstyle, StarterTemplate>> = {
  Kanto: {
    aggressive: {
      starter: 'Charmander (Fire)',
      teammates: ['Gyarados (Water/Flying)', 'Jolteon (Electric)', 'Dugtrio (Ground)'],
      rationale:
        'Fire offense; Water covers Rock/Ground; Ground handles Electric; Electric punishes Water/Flying.',
    },
    balanced: {
      starter: 'Squirtle (Water)',
      teammates: ['Jolteon (Electric)', 'Venusaur (Grass/Poison)', 'Nidoking (Ground/Poison)'],
      rationale: 'Water core with Electric/Grass coverage and Ground utility for Electrics/Poison.',
    },
    defensive: {
      starter: 'Bulbasaur (Grass/Poison)',
      teammates: ['Arcanine (Fire)', 'Lapras (Water/Ice)', 'Alakazam (Psychic)'],
      rationale:
        'Bulky early game; Fire breaks Steels/Grasses, Water/Ice beats Dragons/Ground; Psychic checks Fighting/Poison.',
    },
  },
  Johto: {
    aggressive: {
      starter: 'Cyndaquil (Fire)',
      teammates: ['Gyarados (Water/Flying)', 'Ampharos (Electric)', 'Donphan (Ground)'],
      rationale: 'Fire offense with Electric + Ground coverage and Water pivot.',
    },
    balanced: {
      starter: 'Totodile (Water)',
      teammates: ['Magneton (Electric/Steel)', 'Meganium (Grass)', 'Crobat (Poison/Flying)'],
      rationale: 'Round coverage; Steel resistances; Flying utility speed.',
    },
    defensive: {
      starter: 'Chikorita (Grass)',
      teammates: ['Arcanine (Fire)', 'Lanturn (Water/Electric)', 'Piloswine (Ice/Ground)'],
      rationale:
        'Supportive Grass with Fire breaker, bulky Water/Electric pivot, and Ice/Ground for Dragons/Electrics.',
    },
  },
  Paldea: {
    aggressive: {
      starter: 'Fuecoco (Fire)',
      teammates: [
        'Kilowattrel (Electric/Flying)',
        'Great Tusk (Ground/Fighting)',
        'Gholdengo (Ghost/Steel)',
      ],
      rationale: 'Fire offense + premium breakers; strong hazard control and resist profile.',
    },
    balanced: {
      starter: 'Quaxly (Water)',
      teammates: ['Pawmot (Electric/Fighting)', 'Garganacl (Rock)', 'Arboliva (Grass)'],
      rationale:
        'Water pivot with Electric/Fighting pressure, Rock bulk, and Grass terrain utility.',
    },
    defensive: {
      starter: 'Sprigatito (Grass)',
      teammates: ['Arcanine-H (Fire/Rock)', 'Toxapex (Water/Poison)', 'Orthworm (Steel)'],
      rationale: 'Balance build: bulky cores + Fire breaker to remove Steels/Grasses.',
    },
  },
};

/* ---------- Pure picker (no undefined lookups) ---------- */

export function pickStarter(region: Region, style: Playstyle): StarterResult {
  const regionMap = STARTER_MAP[region]; // guaranteed
  const template = regionMap[style] ?? regionMap.balanced;
  return { region, ...template };
}

/* ---------- Component ---------- */

export type StarterChooserProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  regions?: Region[]; // defaults to REGIONS
  initialRegion?: Region; // defaults to first region
  initialStyle?: Playstyle; // defaults to 'balanced'
  className?: string;
  containerClassName?: string;
  showResultCtas?: boolean;
};

const DEFAULT_REGIONS: Region[] = [...REGIONS];

const STYLE_OPTIONS: ReadonlyArray<{ value: Playstyle; label: string }> = [
  { value: 'balanced', label: 'Balanced / flexible' },
  { value: 'aggressive', label: 'Aggressive / fast-paced' },
  { value: 'defensive', label: 'Defensive / supportive' },
];

export default function StarterChooser({
  title = 'Quick team builder: starter + coverage core',
  description = 'Choose your region and playstyle. We’ll recommend a starter-led squad of four that covers common weaknesses, clears gyms smoothly, and scales to the Elite Four. Swap in equivalents you like.',
  regions = DEFAULT_REGIONS,
  initialRegion,
  initialStyle = 'balanced',
  className = '',
  containerClassName = '',
  showResultCtas = true,
}: StarterChooserProps) {
  const safeInitialRegion = React.useMemo<Region>(() => {
    const fallback = regions[0] ?? 'Kanto';
    return initialRegion && regions.includes(initialRegion) ? initialRegion : fallback;
  }, [initialRegion, regions]);

  const [region, setRegion] = React.useState<Region>(() => safeInitialRegion);
  const [style, setStyle] = React.useState<Playstyle>(initialStyle);
  const [result, setResult] = React.useState<StarterResult | null>(null);

  if (!regions.length) return null;

  return (
    <section
      className={['mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12', containerClassName].join(' ')}
    >
      <div className={['rounded-2xl border border-gray-200 bg-white p-6', className].join(' ')}>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Region */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">1. Pick your region/game</div>
            <select
              aria-label="Region"
              value={region}
              onChange={(e) => setRegion(e.target.value as Region)}
              className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
            >
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Playstyle */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">2. How do you like to play?</div>
            <div className="mt-2 flex flex-col gap-2">
              {STYLE_OPTIONS.map(({ value, label }) => (
                <label key={value} className="flex items-center gap-2 text-sm text-gray-800">
                  <input
                    type="radio"
                    name="style"
                    value={value}
                    checked={style === value}
                    onChange={() => setStyle(value)}
                    className="h-4 w-4"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">3. Build my team</div>
            <Button
              type="button"
              onClick={() => setResult(pickStarter(region, style))}
              className="mt-2"
            >
              Propose dream team
            </Button>
          </div>
        </div>

        {/* Result */}
        {result && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
            <div className="text-sm font-semibold text-gray-900">
              {result.region}: {result.starter}
            </div>

            {/* Rationale with clearer lead-in */}
            <div className="mt-1 text-sm text-gray-700">
              <span className="font-medium text-gray-900">Why this works:</span> {result.rationale}
            </div>

            {/* Label above teammates */}
            <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-600">
              Suggested teammates
            </div>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {result.teammates.map((t) => (
                <li
                  key={t}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800"
                >
                  {t}
                </li>
              ))}
            </ul>

            {/* CTAs + optional tip */}
            {showResultCtas && (
              <>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button href="/pokedex" variant="primary">
                    Open Pokédex
                  </Button>
                  <Button href="/learn/pokemon-types" variant="dark">
                    Review type coverage
                  </Button>
                </div>
                <p className="mt-4 text-xs text-gray-600">
                  Prefer different Pokémons? Use the Pokédex to swap equivalents with the same
                  type/role.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
