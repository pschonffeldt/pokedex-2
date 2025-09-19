'use client';

interface Props {
  types: string[]; // e.g. ["electric"] or ["bug","flying"]
  weight?: number | null; // PokeAPI: hectograms
  height?: number | null; // PokeAPI: decimeters
}

/** Fixed styles per type: background + readable foreground */
const TYPE_STYLES: Record<string, { bg: string; fg: string }> = {
  normal: { bg: '#a8a77a', fg: '#111111' },
  fire: { bg: '#ee8130', fg: '#ffffff' },
  water: { bg: '#6390f0', fg: '#ffffff' },
  electric: { bg: '#f7d02c', fg: '#111111' },
  grass: { bg: '#7ac74c', fg: '#111111' },
  ice: { bg: '#96d9d6', fg: '#111111' },
  fighting: { bg: '#c22e28', fg: '#ffffff' },
  poison: { bg: '#a33ea1', fg: '#ffffff' },
  ground: { bg: '#e2bf65', fg: '#111111' },
  flying: { bg: '#a98ff3', fg: '#111111' },
  psychic: { bg: '#f95587', fg: '#ffffff' },
  bug: { bg: '#a6b91a', fg: '#111111' },
  rock: { bg: '#b6a136', fg: '#111111' },
  ghost: { bg: '#735797', fg: '#ffffff' },
  dragon: { bg: '#6f35fc', fg: '#ffffff' },
  dark: { bg: '#705746', fg: '#ffffff' },
  steel: { bg: '#b7b7ce', fg: '#111111' },
  fairy: { bg: '#d685ad', fg: '#111111' },
};

const titleCase = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

export default function PokemonType({ types, weight, height }: Props) {
  // convert to friendlier units
  const kg = typeof weight === 'number' ? (weight / 10).toFixed(1) : '—';
  const m = typeof height === 'number' ? (height / 10).toFixed(1) : '—';

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4">
      <h3 className="text-2xl font-bold text-black/100">Type</h3>

      <div className="min-h-20 flex flex-wrap items-center justify-center gap-2">
        {types.length > 0 ? (
          types.map((raw) => {
            const key = raw.toLowerCase().trim();
            const { bg, fg } = TYPE_STYLES[key] ?? { bg: '#777777', fg: '#ffffff' };
            return (
              <span
                key={key}
                className="inline-block rounded-full px-4 py-1 text-sm font-semibold capitalize shadow-sm"
                style={{ backgroundColor: bg, color: fg }}
                aria-label={`Type ${titleCase(key)}`}
              >
                {titleCase(key)}
              </span>
            );
          })
        ) : (
          <span className="opacity-60">—</span>
        )}
      </div>

      <div className="flex flex-row justify-center gap-6 text-sm">
        <p>
          Weight: <span className="font-semibold">{kg}</span> kg
        </p>
        <p>
          Height: <span className="font-semibold">{m}</span> m
        </p>
      </div>
    </div>
  );
}
