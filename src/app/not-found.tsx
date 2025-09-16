import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold">404 – Page not found in the Pokémon Explorer ecosystem</h1>
      <p className="mt-4 text-gray-600">Sorry, we couldn’t find that page.</p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        Go back home
      </Link>
    </main>
  );
}
