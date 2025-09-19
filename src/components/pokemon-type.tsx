'use client';

/**
 * PokemonType
 * -----------
 * Renders:
 *  - A section heading ("Type")
 *  - One or more colored "type capsules" (e.g., Fire, Water) using a fixed palette
 *  - Weight and height converted to friendly units (kg / m)
 *
 * Props:
 *  - types:     array of Pokémon type names (already normalized by your page)
 *  - weight:    PokeAPI "weight" (hectograms) — optional
 *  - height:    PokeAPI "height" (decimeters) — optional
 */

interface PokemonTypeProps {
  /** e.g., ["electric"] or ["bug","flying"] */
  types: string[];
  /** Raw PokeAPI weight in hectograms (optional) */
  weight?: number | null;
  /** Raw PokeAPI height in decimeters (optional) */
  height?: number | null;
}

/**
 * Fixed styles per type: background + readable foreground
 */
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

/** Title-case a (possibly empty) string without throwing on undefined/null
 *  Turn a type token like "fire" into "Fire" for the capsule label.
 */
const toTitleCase = (value?: string | null): string =>
  value ? value.charAt(0).toUpperCase() + value.slice(1) : '';

export default function PokemonType({ types, weight, height }: PokemonTypeProps) {
  // Convert PokeAPI units to friendlier units for display, or shows "-" ifvalue is 0
  const weightKgDisplay = typeof weight === 'number' ? (weight / 10).toFixed(1) : '—';
  const heightMDisplay = typeof height === 'number' ? (height / 10).toFixed(1) : '—';

  return (
    <section className="flex flex-col items-center gap-4 px-6 py-4">
      {/* Section heading */}
      <h3 className="text-2xl font-bold text-black/100">Type</h3>

      {/* Type capsules row (supports 1–2 types; falls back to em dash) */}
      <div className="min-h-20 flex flex-wrap items-center justify-center gap-2">
        {types.length > 0 ? (
          types.map((rawTypeName) => {
            // Normalize type token for lookup (e.g., " Fire " → "fire")
            const typeKey = rawTypeName.toLowerCase().trim();
            const { bg, fg } = TYPE_STYLE_MAP[typeKey] ?? { bg: '#777777', fg: '#ffffff' }; // fallback

            return (
              <span
                key={typeKey}
                className="inline-block rounded-full px-4 py-1 text-sm font-semibold capitalize shadow-sm"
                style={{ backgroundColor: bg, color: fg }}
                aria-label={`Type ${toTitleCase(typeKey)}`}
              >
                {toTitleCase(typeKey)}
              </span>
            );
          })
        ) : (
          <span className="opacity-60">—</span>
        )}
      </div>

      {/* Weight / Height row */}
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
