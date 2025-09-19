'use client';

interface Props {
  name?: string | null;
  id?: number | null;
}

export default function PokemonTitle({ name, id }: Props) {
  const label = name ? name : '—';
  const num = typeof id === 'number' ? `#${id}` : '—';

  return (
    <div className="flex flex-row justify-between px-6 py-4">
      <h2 className="text-2xl font-bold capitalize text-black/100">{label}</h2>
      <h2 className="text-2xl font-bold text-black/100">{num}</h2>
    </div>
  );
}
