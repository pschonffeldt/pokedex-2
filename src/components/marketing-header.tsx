'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '@/components/button';

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
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

  // Most-specific active route for underline behavior
  const activeRoute =
    routes
      .filter((r) => pathname === r.path || (r.path !== '/' && pathname.startsWith(`${r.path}/`)))
      .sort((a, b) => b.path.length - a.path.length)[0] ?? routes.find((r) => r.path === pathname);

  // Close menu on route change
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on click outside
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('mousedown', onDown);
    return () => window.removeEventListener('mousedown', onDown);
  }, [open]);

  // Close on Escape
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-gray-900 transition-colors hover:text-indigo-600"
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
        <ul className="ml-2 hidden items-center gap-2 lg:flex">
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
                      ? 'text-indigo-600 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:rounded-full after:bg-indigo-500'
                      : 'text-gray-700 hover:bg-indigo-200 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60',
                  ].join(' ')}
                >
                  {route.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Contact
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
          >
            {open ? (
              /* X icon */
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M6 6l12 12M18 6l-12 12" />
              </svg>
            ) : (
              /* Hamburger */
              <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/25" />
          <div
            id="mobile-menu"
            ref={panelRef}
            className="fixed right-4 left-4 top-16 z-50 rounded-2xl border border-gray-200 bg-white p-4 shadow-xl lg:hidden"
          >
            <ul className="divide-y divide-gray-100">
              {routes.map((route) => {
                const isActive = route.path === activeRoute?.path;
                return (
                  <li key={route.path}>
                    <Link
                      href={route.path}
                      className={[
                        'flex items-center justify-between py-3 px-2 rounded-md transition-colors',
                        isActive
                          ? 'text-indigo-700 bg-indigo-50'
                          : 'text-gray-800 hover:bg-gray-50',
                      ].join(' ')}
                    >
                      <span>{route.label}</span>
                      {isActive && (
                        <span className="ml-3 inline-block h-2 w-2 rounded-full bg-indigo-600" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 flex">
              <Button href="/contact" variant="primary" className="w-full">
                Contact
              </Button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
