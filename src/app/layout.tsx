import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import MarketingHeader from '@/components/marketing-header';
import MarketingFooter from '@/components/marketing-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Pokémon Explorer – Discover, Learn & Explore',
  description:
    'Discover, learn, and explore the world of Pokémon in one simple web app. Browse Pokémon details, abilities, types, and more – perfect for fans and new trainers alike.',
  openGraph: {
    title: 'Pokémon Explorer – Discover, Learn & Explore',
    description:
      'Dive into Pokémon data, stats, abilities, and regions. All in one beautiful web app.',
    siteName: 'Pokémon Explorer',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <MarketingHeader />
        {children}
        <MarketingFooter />
      </body>
    </html>
  );
}
