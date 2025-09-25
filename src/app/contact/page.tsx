'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/components/button';
import HeroSection from '@/components/hero';

export default function ContactPage() {
  // (optional) tiny client-side helper to open a mailto as a fallback
  const [topic, setTopic] = useState('Feedback');

  const handleMailto = () => {
    const subject = encodeURIComponent(`[${topic}] From PokéWorld Explorer`);
    const body = encodeURIComponent(
      `Hi team,

(Write your message here)

— 
Sent from PokéWorld Explorer`
    );
    window.location.href = `mailto:info@mitkof.cl?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-6 text-sm sm:px-8 lg:px-12">
          <Link href="/" className="text-gray-500 hover:text-gray-900">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Contact</span>
        </div>
      </nav>

      {/* Hero */}
      <HeroSection
        title="Contact"
        description={
          <>
            Questions, feedback, or a content request? We read everything. Send a note and we’ll get
            back within 1–2 business days.
          </>
        }
        actions={[
          { href: '/pokedex', label: 'Open Pokédex', variant: 'primary' },
          { href: '/learn', label: 'Explore Learn', variant: 'dark' },
        ]}
      />

      {/* Main content */}
      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Form card */}
          <div className="lg:col-span-2">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-semibold text-gray-900">Send us a message</h2>
              {/* <p className="mt-1 text-sm text-gray-600">
                Prefer email?{' '}
                <a
                  href="mailto:support@pokeworld.app"
                  className="font-medium text-indigo-600 hover:text-indigo-700"
                >
                  support@pokeworld.app
                </a>
              </p> */}

              <form
                className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleMailto();
                }}
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Ash Ketchum"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                    required
                  />
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium text-gray-900">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                  >
                    <option>Feedback</option>
                    <option>Bug report</option>
                    <option>Content request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                {/* (Optional) URL */}
                <div>
                  <label htmlFor="url" className="block text-sm font-medium text-gray-900">
                    Related URL (optional)
                  </label>
                  <input
                    id="url"
                    name="url"
                    type="url"
                    placeholder="https://your-page.example"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                  />
                </div>

                {/* Message (full width) */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="How can we help?"
                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button type="submit" variant="destructive">
                      Form disable, use email instead
                    </Button>
                    <Button type="button" variant="outline" onClick={handleMailto}>
                      Open email app
                    </Button>
                  </div>
                  <p className="mt-3 text-xs text-gray-500">
                    By contacting us you agree we may use your message to improve the site. We don’t
                    sell personal data.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar cards */}
          <aside className="space-y-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-900">Before you write</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700">
                <li>
                  Looking for counters? Try the{' '}
                  <Link
                    href="/learn/pokemon-types"
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Types guide
                  </Link>
                  .
                </li>
                <li>
                  Planning a run? Start with{' '}
                  <Link
                    href="/learn/pokemon-regions"
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Region guides
                  </Link>
                  .
                </li>
                <li>
                  Need stats fast? Open the{' '}
                  <Link
                    href="/pokedex"
                    className="font-medium text-indigo-600 hover:text-indigo-700"
                  >
                    Pokédex
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-900">Response & policy</h3>
              <dl className="space-y-2 text-sm text-gray-700">
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Response time:</dt>
                  <dd>Usually 24–48 hours (Mon–Fri, UTC).</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Bug reports:</dt>
                  <dd>Include your browser, device, and the page URL.</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="shrink-0 font-medium text-gray-900">Content:</dt>
                  <dd>Suggest fixes, missing entries, or new guides—we welcome it!</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-2 text-sm font-semibold text-gray-900">Other links</h3>
              <div className="flex flex-wrap gap-2">
                <Button href="/about" variant="outline" size="xs">
                  About
                </Button>
                <Button href="/learn" variant="outline" size="xs">
                  Learn hub
                </Button>
                <Button href="/pokedex" variant="outline" size="xs">
                  Pokédex
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
