// Official brand assets stored in public/assets/brands/:
//   whoop.svg          — downloaded from developer.whoop.com (white paths, 40×40)
//   garmin-connect-badge.png — from developer.garmin.com branding ZIP (RGBA, 1605×365)
// Apple Watch, Oura Ring, Fitbit, Samsung Health use neutral generic glyphs
// (licensing/approval required for their official marks).

const trackers = [
  {
    name: "Apple Watch",
    href: "https://www.apple.com/apple-watch/",
    // Generic watch glyph — Apple marks require Apple approval.
    logo: (
      <svg width="26" height="32" viewBox="0 0 18 22" fill="none">
        <rect x="1.5" y="5" width="15" height="12" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15.5 8h1.5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H15.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5.5 5V3.5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1V5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5.5 17v1.5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V17" stroke="currentColor" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    name: "WHOOP",
    href: "https://www.whoop.com/",
    // Official WHOOP circle mark — white SVG; inverted to dark in light mode.
    logo: (
      <img
        src="/assets/brands/whoop.svg"
        alt=""
        width={32}
        height={32}
        style={{ display: "block" }}
        className="[filter:invert(1)] dark:[filter:none]"
      />
    ),
  },
  {
    name: "Oura Ring",
    href: "https://ouraring.com/",
    // Generic ring glyph — commercial use requires written permission from Oura.
    logo: (
      <svg width="30" height="30" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
        <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    name: "",
    href: "https://connect.garmin.com/",
    // Official "Works with Garmin Connect" digital badge (badge already contains text).
    logo: (
      <img
        src="/assets/brands/garmin-connect-badge.png"
        alt="Works with Garmin Connect"
        height={32}
        style={{ height: 32, width: "auto", display: "block" }}
        className="[filter:grayscale(1)] dark:[filter:grayscale(1)_invert(1)]"
      />
    ),
  },
  {
    name: "Fitbit",
    href: "https://www.fitbit.com/",
    // Generic glyph — asset requires Google Partner Marketing Hub approval.
    logo: (
      <svg width="28" height="32" viewBox="0 0 20 22" fill="none">
        <rect x="1.5" y="4.5" width="17" height="13" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 4.5V2.5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M5.5 17.5v2a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="7" cy="11" r="1" fill="currentColor"/>
        <circle cx="10" cy="11" r="1" fill="currentColor"/>
        <circle cx="13" cy="11" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    name: "Samsung Health",
    href: "https://www.samsung.com/us/smartphones/galaxy-watch/",
    // Generic watch glyph — no public badge available from Samsung.
    logo: (
      <svg width="28" height="32" viewBox="0 0 20 22" fill="none">
        <rect x="2" y="4.5" width="16" height="13" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 4.5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M6 17.5V19a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1.5" stroke="currentColor" strokeWidth="1.25"/>
        <circle cx="10" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M10 8.5V7M10 15v-1.5M13.5 11H15M5 11h1.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function TrackerStrip() {
  return (
    <div className="py-10 px-6 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-8">
          Works with your devices
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {trackers.map((t) => (
            <a
              key={t.name || t.href}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                {t.logo}
              </span>
              {t.name && (
                <span className="text-sm font-medium whitespace-nowrap">{t.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
