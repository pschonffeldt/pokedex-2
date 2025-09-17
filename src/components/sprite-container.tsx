import Image from 'next/image';

export default function SpriteContainer() {
  return (
    <div>
      <Image src="/images/1.png" alt="Preview of pokemon" width={150} height={150} />
    </div>
  );
}
