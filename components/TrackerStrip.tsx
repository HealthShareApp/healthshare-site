// All icons: viewBox 0 0 24 24, displayed 28×28, stroke currentColor 1.5, fill none.
// No official brand marks — uniform neutral glyphs only.

const ICON_PROPS = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const trackers = [
  {
    name: "Apple Watch",
    href: "https://www.apple.com/apple-watch/",
    icon: (
      <svg {...ICON_PROPS}>
        {/* Rectangular face */}
        <rect x="5" y="6.5" width="14" height="11" rx="3.5" stroke="currentColor" strokeWidth="1.5"/>
        {/* Crown */}
        <path d="M19 9.5h2v5h-2"/>
        {/* Top band */}
        <path d="M8.5 6.5V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2.5"/>
        {/* Bottom band */}
        <path d="M8.5 17.5V20a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2.5"/>
      </svg>
    ),
  },
  {
    name: "WHOOP",
    href: "https://www.whoop.com/",
    icon: (
      <svg {...ICON_PROPS}>
        {/* Slim wristband body */}
        <rect x="2" y="8" width="20" height="8" rx="4" stroke="currentColor" strokeWidth="1.5"/>
        {/* Sensor housing */}
        <rect x="8" y="10" width="8" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "Oura Ring",
    href: "https://ouraring.com/",
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
      </svg>
    ),
  },
  {
    name: "Garmin",
    href: "https://www.garmin.com/",
    icon: (
      <svg {...ICON_PROPS}>
        {/* Round face */}
        <circle cx="12" cy="12" r="7"/>
        {/* Top band */}
        <path d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        {/* Bottom band */}
        <path d="M9 19v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/>
        {/* Side buttons */}
        <path d="M19 9.5v2M19 13.5v1"/>
      </svg>
    ),
  },
  {
    name: "Fitbit",
    href: "https://www.fitbit.com/",
    icon: (
      <svg {...ICON_PROPS}>
        {/* Vertical tracker body */}
        <rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        {/* Screen */}
        <rect x="9" y="6" width="6" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        {/* Activity dots */}
        <path d="M10 15h.01M12 15h.01M14 15h.01"/>
      </svg>
    ),
  },
  {
    name: "Samsung Health",
    href: "https://www.samsung.com/us/smartphones/galaxy-watch/",
    icon: (
      <svg {...ICON_PROPS}>
        {/* Round face */}
        <circle cx="12" cy="12" r="7"/>
        {/* Top band */}
        <path d="M9 5V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        {/* Bottom band */}
        <path d="M9 19v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2"/>
        {/* Health cross */}
        <path d="M12 9.5v5M9.5 12h5"/>
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
              className="flex items-center gap-3 text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-200 transition-colors group"
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
