export default function AppTitle() {
  return (
    <div className="flex items-center gap-2">
      {/* Poké Ball icon */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* outer ring */}
        <circle cx="12" cy="12" r="9" />
        {/* center line */}
        <line x1="3" y1="12" x2="21" y2="12" />
        {/* center button */}
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>

      <h1 className="text-2xl font-bold text-white">Pokédex Explorer</h1>
    </div>
  );
}
