'use client';

import * as React from 'react';
import Button from '@/components/button';

type Boss = {
  name: string;
  tag: string; // e.g., "Gym — Rock/Ground", "League"
  recommends: string[]; // 3–5 short counter blurbs
};

export type BossCountersData = Record<string, Boss[]>; // region -> bosses

export type BossCountersProps = {
  title?: React.ReactNode;
  data?: BossCountersData;
  className?: string; // extra classes for the white card
  containerClassName?: string; // extra classes for the section container
  ctaHref?: string;
  ctaLabel?: string;
};

const DEFAULT_DATA: BossCountersData = {
  /* ----------------------------- Kanto ---------------------------- */
  Kanto: [
    {
      name: 'Brock',
      tag: 'Gym — Rock/Ground',
      recommends: [
        'Grass/Water sweepers (Bulbasaur, Squirtle)',
        'Bring status (Leech Seed/Water Gun spam)',
        'Avoid Electric early (immune)',
      ],
    },
    {
      name: 'Misty',
      tag: 'Gym — Water',
      recommends: [
        'Electric (Pikachu/Jolteon)',
        'Grass (Bellsprout/Oddish)',
        'Watch for Ice Beam—pack a bulky Electric',
      ],
    },
    {
      name: 'Lt. Surge',
      tag: 'Gym — Electric',
      recommends: [
        'Ground (Diglett/Dugtrio) — immunity',
        'Rock/Ground covers Volt Switch loops',
        'Avoid Flying/Water if under-leveled',
      ],
    },
    {
      name: 'Erika',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying (Charmeleon/Pidgeotto)',
        'Poison (Beedrill/Muk) resists status',
        'Carry a burn heal substitute',
      ],
    },
    {
      name: 'Koga',
      tag: 'Gym — Poison',
      recommends: [
        'Ground/Psychic (Kadabra/Dugtrio)',
        'Antidotes; switch on Toxic',
        'Rock for Venomoth coverage',
      ],
    },
    {
      name: 'Sabrina',
      tag: 'Gym — Psychic',
      recommends: [
        'Dark/Bug/Ghost (Snorlax/Beedrill/Haunter)',
        'Physical attackers to dodge Sp. Def walls',
        'X-Scissor/Night Slash help',
      ],
    },
    {
      name: 'Blaine',
      tag: 'Gym — Fire',
      recommends: [
        'Water/Ground (Blastoise/Rhydon)',
        'Rock for Fire/Flying',
        'Beware burn—use special Water moves',
      ],
    },
    {
      name: 'Giovanni',
      tag: 'Gym — Ground',
      recommends: [
        'Water/Grass/Ice (Starmie/Venusaur)',
        'Levitate/Flying avoids EQ',
        'Pack status for bulky Nidos',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Ice for Lance’s Dragons',
        'Electric/Grass for Lorelei’s Waters',
        'Psychic/Flying for Bruno; Dark/Ground for Agatha',
        'Flexible core for rival’s mixed team',
      ],
    },
  ],

  /* ----------------------------- Johto ---------------------------- */
  Johto: [
    {
      name: 'Falkner',
      tag: 'Gym — Flying',
      recommends: [
        'Electric (Mareep line)',
        'Rock (Geodude) early answers',
        'Avoid Bug/Grass leads',
      ],
    },
    {
      name: 'Bugsy',
      tag: 'Gym — Bug',
      recommends: [
        'Flying/Fire (Pidgeotto/Quilava)',
        'Rock vs Scyther U-turn',
        'Keep potions for Fury Cutter snowball',
      ],
    },
    {
      name: 'Whitney',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting (Machop trade)',
        'Status or Ghost to stall Rollout',
        'Disable Attract with female/Oblivious',
      ],
    },
    {
      name: 'Morty',
      tag: 'Gym — Ghost',
      recommends: [
        'Dark/Ground (Umbreon/Donphan)',
        'Status cures vs Hypnosis',
        'Avoid Normal/Fighting spam',
      ],
    },
    {
      name: 'Chuck',
      tag: 'Gym — Fighting',
      recommends: [
        'Flying/Psychic (Noctowl/Espeon)',
        'Use Reflect/Intimidate',
        'Beware Dynamic Punch confusion',
      ],
    },
    {
      name: 'Jasmine',
      tag: 'Gym — Steel',
      recommends: [
        'Ground/Fire (Quagsire/Typhlosion)',
        'Special Water vs Steelix',
        'Pack burns or screens',
      ],
    },
    {
      name: 'Pryce',
      tag: 'Gym — Ice',
      recommends: [
        'Fighting/Rock/Steel',
        'Electric for Dewgong/Piloswine coverage',
        'Avoid Grass vs Ice Shard',
      ],
    },
    {
      name: 'Clair',
      tag: 'Gym — Dragon',
      recommends: [
        'Ice/Fairy answers',
        'Dragon Rage countermeasures',
        'Thunder Wave support helps',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Will (Psychic) — Dark/Bug',
        'Koga (Poison) — Ground/Psychic',
        'Bruno (Fighting/Rock) — Flying/Psychic/Water',
        'Karen (Dark) — Fighting/Bug; Lance — Ice/Electric',
      ],
    },
  ],

  /* --------------------------------- Hoenn ---------------------------------- */
  Hoenn: [
    {
      name: 'Roxanne',
      tag: 'Gym — Rock',
      recommends: [
        'Water/Grass (Mudkip/Lotad/Treecko)',
        'Fighting for Nosepass',
        'Avoid Fire/Electric early',
      ],
    },
    {
      name: 'Brawly',
      tag: 'Gym — Fighting',
      recommends: [
        'Flying/Psychic (Taillow/Ralts)',
        'Makuhita Bulk Up—use Confusion/Wing Attack',
        'Intimidate helps',
      ],
    },
    {
      name: 'Wattson',
      tag: 'Gym — Electric',
      recommends: [
        'Ground immunity (Geodude/Marshtomp)',
        'Watch for Magneton—Ground/Fire',
        'Avoid Water/Flying leads',
      ],
    },
    {
      name: 'Flannery',
      tag: 'Gym — Fire',
      recommends: ['Water/Ground/Rock', 'Torkoal Overheat—special Water users', 'Burn cures ready'],
    },
    {
      name: 'Norman',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting (Breloom/Hariyama)',
        'Protect/Setup vs Slaking loafing',
        'Beware Facade boost',
      ],
    },
    {
      name: 'Winona',
      tag: 'Gym — Flying',
      recommends: ['Electric/Rock/Ice', 'Skarmory—special Fire/Electric', 'Altaria—Ice or Dragon'],
    },
    {
      name: 'Tate & Liza',
      tag: 'Gym — Psychic (Double)',
      recommends: [
        'Dark/Ghost; target Claydol/Xatu',
        'Surf + Protect synergy works',
        'Crunch/Shadow Ball sweep',
      ],
    },
    {
      name: 'Juan/Wallace',
      tag: 'Gym — Water',
      recommends: [
        'Electric/Grass (watch Ice Beam)',
        'Ludicolo checks Waters',
        'Status to break stalls',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Sidney (Dark) — Fighting/Bug',
        'Phoebe (Ghost) — Dark/Ghost',
        'Glacia (Ice) — Rock/Fighting/Steel',
        'Drake (Dragon) — Ice/Dragon; Steven/Wallace — Ground/Fighting/Electric/Grass',
      ],
    },
  ],

  /* --------------------------------- Sinnoh --------------------------------- */
  Sinnoh: [
    {
      name: 'Roark',
      tag: 'Gym — Rock',
      recommends: [
        'Grass/Water/Fighting',
        'Avoid Fire/Flying openers',
        'Mach Punch/Absorb are quick wins',
      ],
    },
    {
      name: 'Gardenia',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying/Bug',
        'Roserade—Antidotes and priority',
        'Set up on Turtwig if safe',
      ],
    },
    {
      name: 'Maylene',
      tag: 'Gym — Fighting',
      recommends: ['Flying/Psychic', 'Lucario—Fire/Ground/Fighting', 'Reflect helps squishies'],
    },
    {
      name: 'Crasher Wake',
      tag: 'Gym — Water',
      recommends: [
        'Electric/Grass',
        'Quagsire—use Grass (immune to Electric)',
        'Watch Ice coverage',
      ],
    },
    {
      name: 'Fantina',
      tag: 'Gym — Ghost',
      recommends: [
        'Dark/Ghost; avoid Normal/Fighting',
        'Confuse Ray—status cures',
        'Bite/Shadow Claw sweep',
      ],
    },
    {
      name: 'Byron',
      tag: 'Gym — Steel',
      recommends: [
        'Ground/Fire/Fighting',
        'Magneton/Steelix—Ground priority',
        'Keep burns/screens',
      ],
    },
    {
      name: 'Candice',
      tag: 'Gym — Ice',
      recommends: [
        'Fire/Fighting/Rock/Steel',
        'Abomasnow—Fire; Hail chip awareness',
        'Avoid Grass leads',
      ],
    },
    {
      name: 'Volkner',
      tag: 'Gym — Electric',
      recommends: [
        'Ground immunity',
        'Coverage Water/Grass—pack answers',
        'EQ sweepers close fast',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Aaron (Bug) — Rock/Fire/Flying',
        'Bertha (Ground) — Grass/Water/Ice',
        'Flint (Fire) — Water/Rock/Ground',
        'Lucian (Psychic) — Dark/Bug/Ghost',
        'Cynthia — Ice/Dragon for Garchomp; Steel/Fighting for Lucario',
      ],
    },
  ],

  /* --------------------------------- Unova ---------------------------------- */
  Unova: [
    {
      name: 'Striaton Trio',
      tag: 'Gym — Grass/Fire/Water',
      recommends: [
        'Pick the counter to your starter’s check',
        'Elemental Monkeys work as early answers',
        'Prioritize STAB and speed',
      ],
    },
    {
      name: 'Lenora',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting (Timburr/Throh)',
        'Beware Retaliate turn—switch/Protect',
        'Rock Smash early',
      ],
    },
    {
      name: 'Burgh',
      tag: 'Gym — Bug',
      recommends: ['Flying/Rock/Fire', 'Dwebble—Rock/Water counters', 'Avoid Grass weak mons'],
    },
    {
      name: 'Elesa',
      tag: 'Gym — Electric',
      recommends: [
        'Ground (Sandile/Excadrill)',
        'Emolga Volt Switch—Rock/Electric checks',
        'Watch Flame Charge Zebstrika',
      ],
    },
    {
      name: 'Clay',
      tag: 'Gym — Ground',
      recommends: [
        'Water/Grass/Ice',
        'Excadrill—Fighting/Water Grounded answers',
        'Intimidate useful',
      ],
    },
    {
      name: 'Skyla',
      tag: 'Gym — Flying',
      recommends: ['Electric/Rock/Ice', 'Avoid Grass/Bug cores', 'Bulky Electric wins'],
    },
    {
      name: 'Brycen',
      tag: 'Gym — Ice',
      recommends: [
        'Fighting/Fire/Rock/Steel',
        'Fast Fire sweepers',
        'Keep priority for Vanillish line',
      ],
    },
    {
      name: 'Drayden/Iris',
      tag: 'Gym — Dragon',
      recommends: ['Ice/Dragon', 'Haxorus—Intimidate/Will-O-Wisp help', 'Yache coverage awareness'],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Shauntal (Ghost) — Dark/Ghost',
        'Marshal (Fighting) — Flying/Psychic',
        'Grimsley (Dark) — Fighting/Bug',
        'Caitlin (Psychic) — Dark/Bug/Ghost',
        'Alder/N — Rock/Water for Volcarona; balanced coverage',
      ],
    },
  ],

  /* --------------------------------- Kalos ---------------------------------- */
  Kalos: [
    {
      name: 'Viola',
      tag: 'Gym — Bug',
      recommends: ['Fire/Flying/Rock', 'Surskit has Water—avoid Fire only', 'Use early Fletchling'],
    },
    {
      name: 'Grant',
      tag: 'Gym — Rock',
      recommends: [
        'Water/Grass/Fighting',
        'Aurora—Steel/Fighting checks',
        'Beware Rock Tomb speed drops',
      ],
    },
    {
      name: 'Korrina',
      tag: 'Gym — Fighting',
      recommends: [
        'Flying/Psychic/Fairy',
        'Her Lucario—Ground/Fire/Fighting',
        'Mega tutorial—cover Steels',
      ],
    },
    {
      name: 'Ramos',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying/Poison/Bug',
        'Weepinbell—Flying/Fire priority',
        'Bring status cures',
      ],
    },
    {
      name: 'Clemont',
      tag: 'Gym — Electric',
      recommends: ['Ground immunity', 'Emolga—Rock/Electric answers', 'Avoid Flying/Water'],
    },
    {
      name: 'Valerie',
      tag: 'Gym — Fairy',
      recommends: ['Steel/Poison', 'Mawile—Fire/Ground', 'Watch Charm drops'],
    },
    {
      name: 'Olympia',
      tag: 'Gym — Psychic',
      recommends: ['Dark/Bug/Ghost', 'Reflect/Light Screen—Taunt helps', 'Strong Dark STAB sweeps'],
    },
    {
      name: 'Wulfric',
      tag: 'Gym — Ice',
      recommends: [
        'Fire/Fighting/Rock/Steel',
        'Avalugg physical wall—special Fire/Water',
        'Defog for hail chip',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Malva (Fire) — Rock/Water',
        'Siebold (Water) — Electric/Grass',
        'Wikstrom (Steel) — Fire/Ground/Fighting',
        'Drasna (Dragon) — Ice/Fairy/Dragon',
        'Diantha — Steel/Poison for Gardevoir; mixed coverage',
      ],
    },
  ],

  /* --------------------------------- Alola ---------------------------------- */
  Alola: [
    {
      name: 'Ilima',
      tag: 'Trial — Normal (Totem Gumshoos/Raticate)',
      recommends: [
        'Fighting (Makuhita/Crabrawler)',
        'Keep Defense up vs Bite/Hyper Fang',
        'Z-Move can secure',
      ],
    },
    {
      name: 'Lana',
      tag: 'Trial — Water (Totem Wishiwashi)',
      recommends: [
        'Electric/Grass',
        'Break Schooling with strong Electric',
        'Beware Soak shenanigans',
      ],
    },
    {
      name: 'Kiawe',
      tag: 'Trial — Fire (Totem Salazzle/Marowak)',
      recommends: ['Ground/Rock/Water', 'Poison/Fire coverage—bring Ground', 'Burn cures ready'],
    },
    {
      name: 'Mallow',
      tag: 'Trial — Grass (Totem Lurantis)',
      recommends: [
        'Fire/Flying/Poison/Bug',
        'Sunny Day + Solar Blade—weather control',
        'Avoid Water weak',
      ],
    },
    {
      name: 'Sophocles',
      tag: 'Trial — Electric (Totem Togedemaru/Vikavolt)',
      recommends: ['Ground/Fire', 'Spiky Shield—use special hits', 'Rock/Electric checks helpers'],
    },
    {
      name: 'Acerola',
      tag: 'Trial — Ghost (Totem Mimikyu)',
      recommends: [
        'Steel/Poison for Play Rough',
        'Break Disguise with weak hit, then KO',
        'Avoid Fighting/Normal',
      ],
    },
    {
      name: 'Mina',
      tag: 'Trial — Fairy (Totem Ribombee)',
      recommends: ['Steel/Poison', 'Screen support helps', 'Fast Steel sweeper'],
    },
    {
      name: 'Hapu',
      tag: 'Kahuna — Ground',
      recommends: ['Water/Grass/Ice', 'Flyers/Levitate avoid EQ', 'Status to break bulk'],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Hala (Fighting) — Flying/Psychic',
        'Olivia (Rock) — Water/Grass/Fighting',
        'Acerola (Ghost) — Dark/Ghost',
        'Kahili (Flying) — Electric/Rock/Ice',
        'Kukui — balanced coverage; Rock for Incineroar/Braviary, Electric/Grass for Primarina',
      ],
    },
  ],

  /* --------------------------------- Galar ---------------------------------- */
  Galar: [
    {
      name: 'Milo',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying/Bug/Poison',
        'Dynamax your best breaker',
        'Watch Cotton Down speed drops',
      ],
    },
    {
      name: 'Nessa',
      tag: 'Gym — Water',
      recommends: [
        'Electric/Grass',
        'Drednaw Rock coverage—Grass answers',
        'Beware Max Geyser rain',
      ],
    },
    {
      name: 'Kabu',
      tag: 'Gym — Fire',
      recommends: ['Water/Rock/Ground', 'G-Max Centiskorch—Rock special hits', 'Burn cures'],
    },
    {
      name: 'Bea/Allister',
      tag: 'Gym — Fighting / Ghost',
      recommends: [
        'Flying/Psychic for Bea; Dark/Ghost for Allister',
        'Set screens; Dynamax defense',
        'Beware priority/G-Max moves',
      ],
    },
    {
      name: 'Opal',
      tag: 'Gym — Fairy',
      recommends: ['Steel/Poison', 'Answer Trick questions or brace', 'Steel sweeper clears'],
    },
    {
      name: 'Gordie/Melony',
      tag: 'Gym — Rock / Ice',
      recommends: [
        'Water/Grass/Fighting for Gordie',
        'Fire/Fighting/Steel for Melony',
        'Sand/Hail chip awareness',
      ],
    },
    {
      name: 'Piers',
      tag: 'Gym — Dark',
      recommends: ['Fighting/Bug/Fairy', 'No Dynamax—bring raw power', 'Watch Sucker Punch'],
    },
    {
      name: 'Raihan',
      tag: 'Gym — Dragon (Sand)',
      recommends: [
        'Ice/Fairy/Dragon; break weather support',
        'Steel for Duraludon',
        'Use Max Moves to overwrite weather',
      ],
    },
    {
      name: 'Champion Cup',
      tag: 'League',
      recommends: [
        'Balanced team for rematch brackets',
        'Leon — Rock/Electric for Charizard (G-Max Wildfire)',
        'Keep status and speed control',
      ],
    },
  ],

  /* --------------------------------- Paldea --------------------------------- */
  Paldea: [
    {
      name: 'Katy',
      tag: 'Gym — Bug',
      recommends: [
        'Fire/Flying/Rock',
        'Tera Bug Teddiursa—Rock STAB finishes',
        'Avoid Grass leads',
      ],
    },
    {
      name: 'Brassius',
      tag: 'Gym — Grass',
      recommends: [
        'Fire/Flying/Bug/Poison',
        'Sudowoodo Tera Grass—Fire smashes',
        'Keep burn cures',
      ],
    },
    {
      name: 'Iono',
      tag: 'Gym — Electric',
      recommends: [
        'Ground immunity (Clodsire/Dugtrio)',
        'Watch Levitate/balloon—have secondary plan',
        'Bulky Ground sweeps',
      ],
    },
    {
      name: 'Kofu',
      tag: 'Gym — Water',
      recommends: [
        'Electric/Grass',
        'Crabominable Tera Water—strong Electric',
        'Beware coverage Ice',
      ],
    },
    {
      name: 'Larry',
      tag: 'Gym — Normal',
      recommends: [
        'Fighting breakers',
        'Tera Normal—bring resist or Ghost pivot',
        'Avoid status stall',
      ],
    },
    {
      name: 'Ryme',
      tag: 'Gym — Ghost (Double)',
      recommends: [
        'Dark/Ghost; priority breaks sweep boosts',
        'Screens/Taunt deny Snowball',
        'Target support first',
      ],
    },
    {
      name: 'Tulip',
      tag: 'Gym — Psychic',
      recommends: [
        'Dark/Bug/Ghost',
        'Special walls or Sucker Punch users',
        'Avoid Fighting/Poison spam',
      ],
    },
    {
      name: 'Grusha',
      tag: 'Gym — Ice',
      recommends: [
        'Fire/Fighting/Rock/Steel',
        'Alt coverage Ground—bring Waters/Steels',
        'Keep hazards off for Ice Shard spam',
      ],
    },
    {
      name: 'Titans',
      tag: 'Path of Legends',
      recommends: [
        'Rock for Klawf; Steel for Orthworm',
        'Electric/Ice for Bombirdier',
        'Fighting/Ground for Great Tusk / Iron Treads; Electric/Dragon answers for Dondozo/Tatsugiri',
      ],
    },
    {
      name: 'Team Star Bosses',
      tag: 'Starfall Street',
      recommends: [
        'Dark/Fire/Poison/Fairy/Fighting crews—match types',
        'Destroy Revavroom typings per base',
        'Bulk + status beats long auto-scrollers',
      ],
    },
    {
      name: 'Elite 4 & Champion',
      tag: 'League',
      recommends: [
        'Rika (Ground) — Grass/Water/Ice',
        'Poppy (Steel) — Fire/Ground/Fighting',
        'Larry (Flying) — Electric/Rock/Ice',
        'Hassel (Dragon) — Ice/Fairy',
        'Geeta — cover mixed types; keep a Steel/Fairy answer',
      ],
    },
  ],
};

export default function BossCounters({
  title = 'Boss counters: gyms, trials, titans & elite',
  data = DEFAULT_DATA,
  className = '',
  containerClassName = '',
  ctaHref = '/learn/pokemon-regions',
  ctaLabel = 'Open region guides',
}: BossCountersProps) {
  const regions = React.useMemo(() => Object.keys(data), [data]);
  const [region, setRegion] = React.useState<string>(regions[0] ?? '');

  // Guard against empty data
  if (!regions.length) return null;

  return (
    <section
      className={['mx-auto max-w-7xl px-6 pb-12 sm:px-8 lg:px-12', containerClassName].join(' ')}
    >
      <div className={['rounded-2xl border border-gray-200 bg-white p-6', className].join(' ')}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

          {/* Region toggles */}
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => {
              const isActive = r === region;
              return (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRegion(r)}
                  className={[
                    'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                    isActive
                      ? 'border-indigo-200 bg-indigo-50 text-indigo-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50',
                  ].join(' ')}
                  aria-pressed={isActive}
                >
                  {r}
                </button>
              );
            })}
          </div>
        </div>

        {/* Boss cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data[region]?.map((boss) => (
            <article key={boss.name} className="rounded-xl border border-gray-200 bg-white p-4">
              <div className="text-sm font-semibold text-gray-900">{boss.name}</div>
              <div className="text-xs text-gray-600">{boss.tag}</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
                {boss.recommends.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </article>
          ))}

          {/* If region exists but has no bosses */}
          {data[region]?.length === 0 && (
            <div className="col-span-full rounded-lg border border-gray-200 bg-white p-4 text-sm text-gray-600">
              No bosses added for this region yet.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
