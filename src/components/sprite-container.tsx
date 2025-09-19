'use client';

import Image from 'next/image';

interface Props {
  spriteUrl?: string | null;
  alt?: string | null;
  /** Square box size in px (both width & height). Default: 250 */
  size?: number;
  /** Pass true for above-the-fold Pokémon to pre-load */
  priority?: boolean;
}

export default function SpriteContainer({ spriteUrl, alt, size = 250, priority = false }: Props) {
  return (
    <div className="mx-auto flex items-center justify-center" style={{ width: size, height: size }}>
      {spriteUrl ? (
        <Image
          src={spriteUrl}
          alt={alt ?? 'Pokémon sprite'}
          width={size}
          height={size}
          sizes={`${size}px`}
          priority={priority}
          className="object-contain"
        />
      ) : (
        <div className="grid w-full h-full place-content-center text-sm opacity-60 border border-white/20 rounded">
          No sprite
        </div>
      )}
    </div>
  );
}
