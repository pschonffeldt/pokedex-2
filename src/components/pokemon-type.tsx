'use client';

interface Props {
  types: string[]; // e.g. ["electric"] or ["bug","flying"]
  weight?: number | null; // raw units from API
  height?: number | null; // raw units from API
}

export default function PokemonType({ types, weight, height }: Props) {
  // PokeAPI returns weight in hectograms and height in decimeters.
  // Convert to kg and meters for friendlier display.
  const kg = typeof weight === 'number' ? (weight / 10).toFixed(1) : '—';
  const m = typeof height === 'number' ? (height / 10).toFixed(1) : '—';

  return (
    <div className="flex flex-col items-center gap-4 px-6 py-4">
      <h3 className="text-2xl font-bold text-black/100">Type</h3>

      <div className="flex flex-wrap justify-center gap-2">
        {types.length > 0 ? (
          types.map((t) => (
            <span
              key={t}
              className="inline-block rounded-full bg-black/50 px-4 py-1 text-white font-semibold capitalize"
            >
              {t}
            </span>
          ))
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
