'use client';

interface Props {
  name?: string | null;
  id?: number | null;
}

export default function PokemonTitle({ name, id }: Props) {
  const nameLabel = name ? name : '—';
  const numberLabel = typeof id === 'number' ? `#${id}` : '—';

  const numberColorClass =
    typeof id === 'number' && id === 420 ? 'text-green-600' : 'text-black/100';

  return (
    <div className="flex flex-row justify-between px-6 py-4">
      <h2 className="text-2xl font-bold capitalize text-black/100">{nameLabel}</h2>
      <h2 className={`text-2xl font-bold ${numberColorClass}`}>{numberLabel}</h2>
    </div>
  );
}
