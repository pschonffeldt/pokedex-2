'use client';

import Link from 'next/link';

const routes = [
  { label: 'Home', path: '/' },
  { label: 'Pokédex', path: '/pokedex' },
  { label: 'About', path: '/about' },
  { label: 'Learn', path: '/learn' },
  { label: 'Types', path: '/learn/pokemon-types' },
  { label: 'Regions', path: '/learn/pokemon-regions' },
  { label: 'Generations', path: '/learn/pokemon-generations' },
];

export default function MarketingHeader() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 bg-black">
      {/* Website logo with link to homepage */}
      <div className="flex space-x-5">
        <Link href={'/'} className="font-bold text-white">
          Website title
        </Link>
        {/* Mapping list of pathes to li's */}
        <ul className="flex gap-2 text-xs pl-10">
          {routes.map((route) => (
            <li key={route.path}>
              <Link
                href={route.path}
                className="text-white/100 rounded-sm text-base px-2 py-1 hover:text-white hover:bg-green-700 focus:text-white transition"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Contact pill */}
      </div>
      <Link href="/contact" className="inline-block">
        <div className="bg-white rounded-full px-4 py-1 text-sm font-semibold capitalize shadow-sm hover:bg-secondary/90 cursor-pointer">
          Contact
        </div>
      </Link>
      {/* <DropDownMenu></DropDownMenu> */}
    </nav>
  );
}
