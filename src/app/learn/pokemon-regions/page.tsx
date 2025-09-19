import Link from 'next/link';

export default function PokemonRegions() {
  return (
    <main className="bg-background text-black">
      {/* <!-- Hero --> */}
      <section className="flex flex-col self-auto">
        <div className="w-[80vw] mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Regions of the Pokémon World
          </h1>
          <p className="mt-4 max-w-2xl text-black sm:text-lg">
            From Nameic Kanto to the open-world Paldea, explore every region’s geography, history,
            and legendary Pokémon. Use this guide as your launchpad to discover the unique cultures
            and creatures across the Pokémon world.
          </p>
        </div>
      </section>

      {/* <!-- Grid --> */}
      <section aria-labelledby="regions-heading" className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 id="regions-heading" className="sr-only">
            All Pokémon Regions
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* <!-- Kanto --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/kanto"
                className="absolute inset-0"
                aria-label="Kanto region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Kanto</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen I
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  The original adventure—iconic cities and the first 151 Pokémon.
                </p>

                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">
                      Red/Blue/Yellow, FireRed/LeafGreen, Let’s Go Pikachu/Eevee
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Kantō (Japan)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">
                      Pallet Town, Saffron City, Nameic Gym circuit
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Articuno, Zapdos, Moltres, Mewtwo</dd>
                  </div>
                </dl>

                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=kanto"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Kanto)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/kanto"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Johto --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/johto"
                className="absolute inset-0"
                aria-label="Johto region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Johto</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen II
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Tradition meets balance—day/night cycle, breeding, friendship evolutions.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">
                      Gold/Silver/Crystal, HeartGold/SoulSilver
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Kansai (Japan)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">
                      Ecruteak lore, cross-region travel with Kanto
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Lugia, Ho-Oh, Raikou, Entei, Suicune</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <Link
                    href="/pokedex?region=johto"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Johto)
                  </Link> */}
                  <Link
                    href="/learn/pokemon-regions/johto"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Hoenn --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/hoenn"
                className="absolute inset-0"
                aria-label="Hoenn region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Hoenn</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen III
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Seas, weather, and exploration—secret bases and epic sky legends.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">
                      Ruby/Sapphire/Emerald, Omega Ruby/Alpha Sapphire
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Kyushu (Japan)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">
                      Weather mechanics, expansive ocean routes
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Groudon, Kyogre, Rayquaza</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=hoenn"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Hoenn)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/hoenn"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Sinnoh --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/sinnoh"
                className="absolute inset-0"
                aria-label="Sinnoh region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Sinnoh</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen IV
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Myth and origins—creation lore, the Underground, Distortion World.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">
                      Diamond/Pearl/Platinum, Brilliant Diamond/Shining Pearl, Legends: Arceus
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Hokkaido (Japan)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">
                      Physical/Special split era, lore-rich areas
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Dialga, Palkia, Giratina, Arceus</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=sinnoh"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Sinnoh)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/sinnoh"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Unova --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/unova"
                className="absolute inset-0"
                aria-label="Unova region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Unova</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen V
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A modern metropolis—seasonal changes and a character-driven story.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">Black/White, Black 2/White 2</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">New York & surroundings (USA)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">Route variety, bold story themes</dd>
                  </div>
                  <div className="flex gap-2">
                    ≈<dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Reshiram, Zekrom, Kyurem</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=unova"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Unova)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/unova"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Kalos --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/kalos"
                className="absolute inset-0"
                aria-label="Kalos region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Kalos</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen VI
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Elegance and Mega Evolutions—fashion, beauty, and power.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">X/Y</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Northern France</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">Mega Evolution system, Lumiose City</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Xerneas, Yveltal, Zygarde</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=kalos"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Kalos)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/kalos"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Alola --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/alola"
                className="absolute inset-0"
                aria-label="Alola region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Alola</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen VII
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Island life & Totem Trials—regional (Alolan) forms and guardians.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">Sun/Moon, Ultra Sun/Ultra Moon</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Hawaii (USA)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">Island Challenge, regional forms</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Solgaleo, Lunala, Tapu guardians</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=alola"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Alola)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/alola"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Galar --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/galar"
                className="absolute inset-0"
                aria-label="Galar region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Galar</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen VIII
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  League spectacle—Dynamax, Wild Area, industry meets nature.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">Sword/Shield</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">United Kingdom</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">Gym stadiums, Wild Area exploration</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Zacian, Zamazenta, Eternatus</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=galar"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Galar)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/galar"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>

            {/* <!-- Paldea --> */}
            <article className="group relative rounded-2xl border border-border bg-card text-card-foreground shadow-sm hover:shadow-md transition">
              {/* <Link
                href="/learn/pokemon-regions/paldea"
                className="absolute inset-0"
                aria-label="Paldea region"
              ></Link> */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold">Paldea</h3>
                  <span className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
                    Gen IX
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Open-world discovery—three story paths and the Terastal phenomenon.
                </p>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Games:</dt>
                    <dd className="text-muted-foreground">Scarlet/Violet</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Inspiration:</dt>
                    <dd className="text-muted-foreground">Iberian Peninsula (Spain & Portugal)</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Highlights:</dt>
                    <dd className="text-muted-foreground">
                      Free exploration, school-themed narrative arcs
                    </dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="shrink-0 font-medium">Legendaries:</dt>
                    <dd className="text-muted-foreground">Koraidon, Miraidon</dd>
                  </div>
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
                  {/* <a
                    href="/pokedex?region=paldea"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    View Pokédex (Paldea)
                  </a> */}
                  <Link
                    href="/learn/pokemon-regions/paldea"
                    className="z-10 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium hover:bg-accent hover:text-accent-foreground transition"
                  >
                    Region Guide
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* <!-- How to Use --> */}
          <div className="mt-12 rounded-2xl border border-border bg-muted/30 p-6">
            <h3 className="text-lg font-semibold">How to Use This Guide</h3>
            <ul className="mt-3 list-disc pl-6 text-sm   space-y-2">
              <li>Click any region card to open a full **Region Guide**.</li>
              <li>Use the **View Pokédex** button to load a Pokémon list filtered by region.</li>
              <li>
                Jump to{' '}
                <a href="/types" className="underline underline-offset-4 hover:no-underline">
                  Types
                </a>{' '}
                for advantages/weaknesses while planning teams.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
