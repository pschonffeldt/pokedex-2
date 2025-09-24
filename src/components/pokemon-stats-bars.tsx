'use client';

import { useMemo } from 'react';

/**
 * Pokémon Stats Bars
 * ------------------
 * Renders base-stat bars (HP / Atk / Def / SpA / SpD / Spe) with a smooth width animation.
 * - Accepts PokeAPI's `pokemon.stats` shape directly → no mapping in the page component.
 * - Uses a single tuple (STAT_KEYS) as the source of truth for both type safety and render order.
 * - Numbers displayed are ALWAYS the real API values. We only clamp for the *visual width*.
 * - Animation is an old→new `width` transition; optional staggering can be configured below.
 *
 * Notes for teammates:
 * - If you want a different visual scale (e.g., canonical 255), tweak DEFAULT_MAX_BASE.
 * - If you want simultaneous animation, set DEFAULT_STAGGER_MS = 0.
 * - If you want faster/slower motion, adjust DEFAULT_DURATION_MS.
 * - If you want per-stat accuracy (different visual max per stat), swap the single max
 */

/* ──────────────────────────────────────────────────────────────────────────────
   1) Single source of truth: keys (order) → derived type
   ───────────────────────────────────────────────────────────────────────────── */

export const STAT_KEYS = [
  'hp',
  'attack',
  'defense',
  'special-attack',
  'special-defense',
  'speed',
] as const;

/** Union type derived from the tuple above; guarantees only valid stat names are used. */
export type StatName = (typeof STAT_KEYS)[number];

/** Human-friendly labels for the UI (left column). */
const STAT_LABELS: Record<StatName, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};

/* ──────────────────────────────────────────────────────────────────────────────
   2) Props: accept PokeAPI shape directly (no mapping needed in page.tsx)
   ───────────────────────────────────────────────────────────────────────────── */

type ApiStat = {
  base_stat: number; // e.g., 255 for Blissey HP
  stat: { name: StatName | string }; // e.g., { name: "hp" }
};

interface Props {
  /** Pass PokeAPI's `pokemon.stats` array directly. */
  apiStats: ApiStat[];
}

/* ──────────────────────────────────────────────────────────────────────────────
   3) Local visual config (safe to tweak)
   ───────────────────────────────────────────────────────────────────────────── */

/**
 * Visual 100% scale.
 * - Does NOT alter the numeric stat displayed; it only affects bar width.
 * - Example:
 *   - With DEFAULT_MAX_BASE = 125, base=125 → 100% width; base=62 → ~50% width.
 *   - With DEFAULT_MAX_BASE = 255, base=255 → 100% width; base=125 → ~49% width.
 */
const DEFAULT_MAX_BASE = 125;

/** Width transition duration (ms) for the old→new animation. */
const DEFAULT_DURATION_MS = 1500;

/**
 * Per-bar delay (ms). Multiplied by the bar index: delay = index * DEFAULT_STAGGER_MS.
 * - Set to 0 to animate all bars simultaneously.
 */
const DEFAULT_STAGGER_MS = 100;

export default function PokemonStatsBars({ apiStats }: Props) {
  /**
   * Build a name→value lookup for O(1) access during render.
   * - The PokeAPI stat `name` is a string; we guard with STAT_KEYS to keep only known stats.
   * - Example shape: { hp: 255, attack: 10, ... }
   */
  const statsByName = useMemo(() => {
    const map: Partial<Record<StatName, number>> = {};
    for (const s of apiStats) {
      // Coerce to our StatName union; filter out anything unexpected.
      const key = s.stat.name as StatName;
      if ((STAT_KEYS as readonly string[]).includes(key)) {
        map[key] = s.base_stat;
      }
    }
    return map;
  }, [apiStats]);

  return (
    // Stats container
    <div className="flex flex-col">
      {/* Section title */}
      <p className="mb-3 text-xl font-bold text-black/100 text-center">Base Stats</p>

      <div className="flex flex-col gap-2">
        {STAT_KEYS.map((statName, barIndex) => {
          /**
           * 1) Read the actual stat from the lookup; fallback to 0 if missing.
           *    This is the REAL number we render and announce for accessibility.
           */
          const actualStatValue = statsByName[statName] ?? 0;

          /**
           * 2) Clamp ONLY for visual width so huge values don't overflow the bar.
           *    IMPORTANT: we NEVER clamp the printed number.
           */
          const clampedForWidth = Math.min(
            Math.max(actualStatValue, 0), // lower bound
            DEFAULT_MAX_BASE // upper bound (visual only)
          );

          /**
           * 3) Convert clamped value to a percentage for the bar width.
           *    This percentage is what will animate on change (old→new).
           */
          const percentageWidth = Math.round((clampedForWidth / DEFAULT_MAX_BASE) * 100);

          /**
           * 4) Compute (optional) transition delay for a staggered effect.
           *    If DEFAULT_STAGGER_MS is 0, we omit the delay entirely so all
           *    bars start at the same time (no hidden 0.000s delay).
           */
          const hasStagger = DEFAULT_STAGGER_MS > 0;
          const delayStyle = hasStagger ? `${barIndex * DEFAULT_STAGGER_MS}ms` : undefined;

          return (
            <div key={statName} className="grid grid-cols-[110px_1fr_48px] items-center">
              {/* Left label (e.g., "HP") */}
              <span className="text-sm text-black/100 font-bold text-center">
                {STAT_LABELS[statName]}
              </span>

              {/* Bar track */}
              <div className="h-3 overflow-hidden rounded-2xl bg-black/10">
                {/* Animated fill (width transitions from previous % to new %) */}
                <div
                  className="h-full bg-black/100"
                  style={{
                    width: `${percentageWidth}%`,
                    transitionProperty: 'width', // only animate width
                    transitionDuration: `${DEFAULT_DURATION_MS}ms`, // speed of the change
                    transitionTimingFunction: 'cubic-bezier(.2,.9,.3,1)', // gentle "springy" feel
                    ...(hasStagger ? { transitionDelay: delayStyle } : {}), // omit if no stagger
                  }}
                  // Accessibility: announce the real stat value, not the clamped one.
                  aria-label={`${STAT_LABELS[statName]} ${actualStatValue}`}
                  role="img"
                />
              </div>

              {/* Right numeric value (always the real API number) */}
              <span className="text-sm text-black/100 font-bold text-center">
                {actualStatValue}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
