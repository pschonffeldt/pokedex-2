import { ping } from '@/app/lib/ping';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Hello world – {ping}</h1>
    </main>
  );
}
