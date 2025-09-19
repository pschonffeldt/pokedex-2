import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    remotePatterns: [
      // GitHub raw sprites (used by the FCC proxy)
      { protocol: 'https', hostname: 'raw.githubusercontent.com' },
      // If you ever point directly at the proxy host
      { protocol: 'https', hostname: 'pokeapi-proxy.freecodecamp.rocks' },
      // Optional: common sprite hosts you might use later
      { protocol: 'https', hostname: 'img.pokemondb.net' },
      { protocol: 'https', hostname: 'archives.bulbagarden.net' },
    ],
  },
};

export default nextConfig;
