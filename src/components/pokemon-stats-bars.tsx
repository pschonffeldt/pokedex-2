'use client';

type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

interface StatItem {
  name: StatName;
  base: number; // base_stat from API
}
interface Props {
  stats: StatItem[]; // mapped/normalized in the page before passing
}

const ORDER: StatName[] = ['hp', 'attack', 'defense', 'special-attack', 'special-defense', 'speed'];
const LABELS: Record<StatName, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Sp. Atk',
  'special-defense': 'Sp. Def',
  speed: 'Speed',
};

export default function PokemonStatsBars({ stats }: Props) {
  // Compute a quick lookup for stable ordering.
  const byName = Object.fromEntries(stats.map((s) => [s.name, s.base])) as Record<
    StatName,
    number | undefined
  >;
  const maxBase = 155; // common upper bound for base stats

  return (
    <div className="px-6 py-4">
      <p className="text-xl font-bold text-black/100 mb-3">Base Stats</p>

      <div className="flex flex-col gap-2">
        {ORDER.map((n) => {
          const val = byName[n] ?? 0;
          const pct = Math.max(0, Math.min(100, Math.round((val / maxBase) * 100)));

          return (
            <div key={n} className="grid grid-cols-[110px_1fr_48px] items-center gap-3">
              <span className="text-sm text-black/80">{LABELS[n]}</span>

              <div className="h-3 rounded bg-white/20 overflow-hidden">
                <div
                  className="h-full bg-black/70"
                  style={{ width: `${pct}%` }}
                  aria-label={`${LABELS[n]} ${val}`}
                />
              </div>

              <span className="text-sm tabular-nums text-black/80">{val}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
