'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Learn', path: '/learn' },
  { label: 'Types', path: '/learn/pokemon-types' },
  { label: 'Regions', path: '/learn/pokemon-regions' },
  { label: 'Generations', path: '/learn/pokemon-generations' },
  { label: 'Pokédex', path: '/pokedex' },
  { label: 'About', path: '/about' },
];

export default function MarketingHeader() {
  const pathname = usePathname();

  // NEW: pick the most specific (longest) matching route for the current path
  const activeRoute =
    routes
      .filter((r) => pathname === r.path || (r.path !== '/' && pathname.startsWith(`${r.path}/`)))
      .sort((a, b) => b.path.length - a.path.length)[0] ?? routes.find((r) => r.path === pathname);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="flex flex-row space-x-2">
          <Link
            href="/"
            className="font-bold text-gray-900 text-xl tracking-tight hover:text-indigo-600 transition-colors"
          >
            PokéWorld Explorer
          </Link>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 text-indigo-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="9" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <circle cx="12" cy="12" r="3" fill="currentColor" />
          </svg>
        </div>

        {/* Desktop links */}
        <ul className="ml-4 hidden items-center gap-2 md:flex">
          {routes.map((route) => {
            const isActive = route.path === activeRoute?.path;
            return (
              <li key={route.path}>
                <Link
                  href={route.path}
                  aria-current={isActive ? 'page' : undefined}
                  className={[
                    'relative rounded-md px-3 py-2 text-base font-medium transition-colors',
                    isActive
                      ? 'text-indigo-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-indigo-500 after:rounded-full'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60',
                  ].join(' ')}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile: horizontal scroll menu */}
        <div className="md:hidden">
          <ul className="flex max-w-[80vw] items-center gap-2 overflow-x-auto whitespace-nowrap">
            {routes.map((route) => {
              const isActive = route.path === activeRoute?.path;
              return (
                <li key={route.path} className="shrink-0">
                  <Link
                    href={route.path}
                    aria-current={isActive ? 'page' : undefined}
                    className={[
                      'relative rounded-md px-3 py-2 text-base font-medium transition-colors',
                      isActive
                        ? 'text-indigo-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-indigo-500 after:rounded-full'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                    ].join(' ')}
                  >
                    {route.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Call to action */}
        <Link
          href="/contact"
          className="rounded-full bg-indigo-600 px-5 py-2 text-base font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
