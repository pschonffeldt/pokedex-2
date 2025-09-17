'use client';

import Link from 'next/link';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Pokédex', path: '/app' },
  { label: 'About', path: '/about' },
  { label: 'Learn', path: '/learn' },
  { label: 'Types', path: '/learn/pokemon-types' },
  { label: 'Regions', path: '/learn/pokemon-regions' },
  { label: 'Generations', path: '/learn/pokemon-generations' },
  { label: 'Contact', path: '/contact' },
];

export default function MarketingHeader() {
  return (
    <header className="flex justify-between items-center border-b border-white/10 py-2">
      <nav>
        <ul className="flex gap-2 text-xs">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-black/100 rounded-sm px-2 py-1 hover:text-white focus:text-white transition"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
