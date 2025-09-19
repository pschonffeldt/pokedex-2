'use client';

/**
 * PokemonType
 * -----------
 * - Renders colored type capsules using a fixed palette
 * - Displays weight/height converted to kg/m
 * - Avoids duplication with small helpers & a single placeholder constant
 */

interface PokemonTypeProps {
  /** e.g., ["electric"] or ["bug","flying"] */
  types: string[];
  /** PokeAPI: hectograms (optional) */
  weight?: number | null;
  /** PokeAPI: decimeters (optional) */
  height?: number | null;
}

/* ── Shared fallback ────────────────────────────────────────────────────────── */
const NO_DATA = '—';

/* ── Fixed styles per type (bg + readable fg) ──────────────────────────────── */
const TYPE_STYLE_MAP: Record<string, { bg: string; fg: string }> = {
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

/* ── Helpers (normalize input, format for display) ──────────────────────────── */

/** Normalize a type token for lookups (e.g., " Fire " → "fire"). */
const normalizeTypeToken = (value?: string | null): string => (value ?? '').toLowerCase().trim();

/** Title-case for display (safe on empty). */
const toTitleCase = (value?: string | null): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

/** Format PokeAPI weight (hectograms) → "kg" string with 1 decimal or NO_DATA. */
const toKilogramsDisplay = (w?: number | null): string =>
  typeof w === 'number' ? (w / 10).toFixed(1) : NO_DATA;

/** Format PokeAPI height (decimeters) → "m" string with 1 decimal or NO_DATA. */
const toMetersDisplay = (h?: number | null): string =>
  typeof h === 'number' ? (h / 10).toFixed(1) : NO_DATA;

/** Small reusable placeholder element (avoids repeating the "—" JSX). */
const Placeholder = () => <span className="opacity-60">{NO_DATA}</span>;

/* ── Component ─────────────────────────────────────────────────────────────── */

export default function PokemonType({ types, weight, height }: PokemonTypeProps) {
  const weightKgDisplay = toKilogramsDisplay(weight);
  const heightMDisplay = toMetersDisplay(height);

  const hasTypes = Array.isArray(types) && types.length > 0;

  return (
    <section className="flex flex-col items-center gap-4 px-6 py-4">
      <h3 className="text-2xl font-bold text-black/100">Type</h3>

      {/* Type capsules */}
      <div className="min-h-20 flex flex-wrap items-center justify-center gap-2">
        {hasTypes ? (
          types.map((rawTypeName) => {
            const key = normalizeTypeToken(rawTypeName);
            const { bg, fg } = TYPE_STYLE_MAP[key] ?? { bg: '#777777', fg: '#ffffff' };
            return (
              <span
                key={key || 'unknown'}
                className="inline-block rounded-full px-4 py-1 text-sm font-semibold capitalize shadow-sm"
                style={{ backgroundColor: bg, color: fg }}
                aria-label={`Type ${toTitleCase(key) || NO_DATA}`}
              >
                {toTitleCase(key) || NO_DATA}
              </span>
            );
          })
        ) : (
          <Placeholder />
        )}
      </div>

      {/* Weight / Height */}
      <div className="flex flex-row justify-center gap-6 text-sm">
        <p>
          Weight: <span className="font-semibold">{weightKgDisplay}</span> kg
        </p>
        <p>
          Height: <span className="font-semibold">{heightMDisplay}</span> m
        </p>
      </div>
    </section>
  );
}
