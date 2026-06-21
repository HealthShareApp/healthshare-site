const trackers = [
  {
    name: "Apple Watch",
    href: "https://www.apple.com/apple-watch/",
    icon: (
      <svg width="18" height="22" viewBox="0 0 18 22" fill="none">
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
    icon: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
        <rect x="1" y="1" width="20" height="14" rx="7" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="11" cy="8" r="3" stroke="currentColor" strokeWidth="1.25"/>
        <line x1="1" y1="8" x2="5" y2="8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
        <line x1="17" y1="8" x2="21" y2="8" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Oura Ring",
    href: "https://ouraring.com/",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
        <circle cx="10" cy="10" r="4.5" stroke="currentColor" strokeWidth="1.25"/>
      </svg>
    ),
  },
  {
    name: "Garmin",
    href: "https://www.garmin.com/",
    icon: (
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
        <rect x="2" y="5" width="16" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 5V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M6 17v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2" stroke="currentColor" strokeWidth="1.25"/>
        <path d="M7 11.5h3.5M7 8.5h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "Fitbit",
    href: "https://www.fitbit.com/",
    icon: (
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
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
    icon: (
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
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
              key={t.name}
              href={t.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group"
            >
              <span className="opacity-60 group-hover:opacity-100 transition-opacity">
                {t.icon}
              </span>
              <span className="text-sm font-medium whitespace-nowrap">{t.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
