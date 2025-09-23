'use client';

import Button from '@/components/button';
import HeroSection from '@/components/hero';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 sm:px-8 lg:px-12 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">About</span>
        </div>
      </nav>

      {/* Component hero */}
      <HeroSection
        title="PokéWorld Explorer"
        description={
          <>
            A clean, fast way to learn and explore the Pokémon universe. From a cutting-edge Pokédex
            to practical guides on Regions, Types, and Generations, our goal is simple: help you
            plan teams, understand mechanics, and enjoy your journey—without wading through clutter.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/learn', label: 'Start learning', variant: 'dark' },
        ]}
      />

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {/* What this is */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">What is PokéWorld Explorer?</h3>
            <p className="mt-2 text-sm text-gray-700">
              A modern fan-made site focused on clarity and speed. It’s built to answer real player
              questions: Where should I start? How do types interact? What changed in each
              generation? What’s the fastest way to build a functional team?
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700">
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                ⚡ Fast, readable profiles & guides
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                🧭 Clear navigation: Regions • Types • Generations
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                🧩 Practical tips: coverage recipes, boss counters, starter picks
              </li>
            </ul>
            <div className="mt-auto pt-5">
              <Button href="/learn">Explore the Learn hub</Button>
            </div>
          </article>

          {/* How it works / data */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-gray-900">How it works</h3>
              <p className="mt-2 text-sm text-gray-700">
                The Pokédex pulls live data from a public community API via a proxy for stability.
                We layer clear formatting, input normalization (e.g., “Mr. Mime”, “Nidoran♀/♂”),
                and tiny UX helpers so you can find what you need quickly.
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>
                  <span className="font-medium">Data source:</span> community PokéAPI (via proxy)
                  for sprites and stats.
                </li>
                <li>
                  <span className="font-medium">Normalization:</span> supports punctuation, gender
                  symbols, and dex # (e.g., <span className="font-mono">#150</span>).
                </li>
                <li>
                  <span className="font-medium">Design system:</span> accessible colors,
                  keyboard-friendly controls, and responsive cards.
                </li>
              </ul>
              <div className="mt-auto pt-5">
                <Button href="/pokedex">Open the Pokédex</Button>
              </div>
            </div>
          </article>

          {/* Principles */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Principles</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <span className="font-medium text-gray-900">Clarity first.</span> Plain language,
                tight summaries, and quick links.
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <span className="font-medium text-gray-900">Trust the data.</span> Surface official
                mechanics and widely accepted interactions.
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <span className="font-medium text-gray-900">Accessibility.</span> Keyboard
                navigation and color-aware UI are a priority.
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <span className="font-medium text-gray-900">Respect for IP.</span> This is a fan
                project; see our disclaimer below.
              </li>
            </ul>
          </article>
        </div>

        {/* Highlights */}
        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {/* Guides & tools */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Guides & Tools</h3>
            <p className="mt-2 text-sm text-gray-700">
              Learn pages are designed as <em>gateways</em>: short, valuable summaries that link to
              deeper resources.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-gray-700">
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                Regions: cities, gyms, legendaries, travel notes
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                Types: strengths, weaknesses, immunities, coverage recipes
              </li>
              <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                Generations: signature mechanics & best entry games
              </li>
            </ul>
            <div className="mt-auto pt-5">
              <Button href="/learn">Visit the Learn hub</Button>
            </div>
          </article>

          {/* Roadmap */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-gray-900">Roadmap (what’s next)</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Team Builder with type-coverage meter & weakness heatmap</li>
                <li>Interactive region maps (routes, tutors, sidequests, item routes)</li>
                <li>Version exclusives browser with Pokédex deep-links</li>
                <li>Starter chooser upgrades & in-game “story teams by budget”</li>
                <li>Living Dex & Shiny tracker with shareable progress</li>
              </ul>
              <div className="mt-auto pt-5">
                <Button href="/contact">Suggest a feature</Button>
              </div>
            </div>
          </article>

          {/* Contact & feedback */}
          <article className="group h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex h-full flex-col">
              <h3 className="text-lg font-semibold text-gray-900">Contact & Feedback</h3>
              <p className="mt-2 text-sm text-gray-700">
                Found a bug, spotted an error, or want to request a guide? We’d love to hear it.
                Clear feedback helps make this better for everyone.
              </p>
              <ul className="mt-4 grid gap-2 text-sm text-gray-700">
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Report issues with page URL & steps to reproduce
                </li>
                <li className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                  Share feature ideas or data corrections
                </li>
              </ul>
              <div className="mt-auto pt-5">
                <Button href="/contact">Contact us</Button>
              </div>
            </div>
          </article>
        </div>

        {/* FAQ */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">FAQ</h3>
          <dl className="mt-4 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-gray-900">Is this an official Pokémon website?</dt>
              <dd className="text-gray-700">
                No. This is a fan-made educational project. Pokémon and all related names are
                trademarks of their respective owners.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">Where does the Pokédex data come from?</dt>
              <dd className="text-gray-700">
                From a community Pokémon API (via a stability proxy) for sprites and stats. We add
                formatting, summaries, and guidance.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-gray-900">
                How can I request a feature or correction?
              </dt>
              <dd className="text-gray-700">
                Use the{' '}
                <Link href="/contact" className="underline underline-offset-4 hover:no-underline">
                  Contact
                </Link>{' '}
                page with details and examples.
              </dd>
            </div>
          </dl>
        </div>

        {/* Legal */}
        <div className="mt-6 text-xs text-gray-500">
          Pokémon and all respective properties are © Nintendo / Creatures / GAME FREAK. This site
          is not affiliated with or endorsed by The Pokémon Company. Data is provided as-is and may
          be incomplete; please report issues on the Contact page.
        </div>

        {/* Final CTA strip */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/pokedex"
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
          >
            Open Pokédex
          </Link>
          <Link
            href="/learn"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-black"
          >
            Go to Learn hub
          </Link>
        </div>
      </section>
    </main>
  );
}
