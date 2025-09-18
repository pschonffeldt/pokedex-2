'use client';

// Using a plain <img> so you don't have to configure Next remote images yet.
// Swap to <Image> later once you add remotePatterns for poke sprite domains.
interface Props {
  spriteUrl?: string | null;
  alt?: string | null;
}

export default function SpriteContainer({ spriteUrl, alt }: Props) {
  return (
    <div className="flex justify-center">
      {spriteUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={spriteUrl} alt={alt ?? 'Pokémon sprite'} width={150} height={150} />
      ) : (
        <div className="h-[150px] w-[150px] grid place-content-center text-sm opacity-60 border border-white/20 rounded">
          No sprite
        </div>
      )}
    </div>
  );
}
