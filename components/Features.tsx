const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 4C12 4 5 7.5 5 12.5C5 15.537 8.134 18 12 18C15.866 18 19 15.537 19 12.5C19 7.5 12 4 12 4Z" fill="currentColor" />
      </svg>
    ),
    title: "Works with every tracker you own",
    description: "Apple Watch, Whoop, Oura, Garmin — if it syncs to Apple Health, HealthShare can export it. Heart rate, HRV, sleep stages, workouts, steps, blood oxygen, and more.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V4h16v16H4ZM8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Structured, LLM-ready reports",
    description: "Exports a clean JSON profile with aggregated metrics, anomaly flags, and sleep/activity scores — ready for AI analysis.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 7.5V12C2 16.418 6.477 20.5 12 22C17.523 20.5 22 16.418 22 12V7.5L12 3Z" fill="currentColor" />
      </svg>
    ),
    title: "You control the trigger",
    description: "No background tracking. No automatic uploads. Hold the sync button and export exactly when you decide.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
      </svg>
    ),
    title: "Configurable time window",
    description: "Choose your export range: last 12 hours, 24 hours, 3 days, or 7 days. Change it any time in Settings.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12ZM8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your storage, your folder",
    description: "Files land in a dedicated HealthShare folder in the cloud storage you choose — Google Drive today, with more options on the way. Share the folder or individual files on your terms.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H5C3.895 3 3 3.895 3 5V9C3 10.105 3.895 11 5 11H9C10.105 11 11 10.105 11 9V5C11 3.895 10.105 3 9 3ZM19 3H15C13.895 3 13 3.895 13 5V9C13 10.105 13.895 11 15 11H19C20.105 11 21 10.105 21 9V5C21 3.895 20.105 3 19 3ZM9 13H5C3.895 13 3 13.895 3 15V19C3 20.105 3.895 21 5 21H9C10.105 21 11 20.105 11 19V15C11 13.895 10.105 13 9 13ZM19 13H15C13.895 13 13 13.895 13 15V19C13 20.105 13.895 21 15 21H19C20.105 21 21 20.105 21 19V15C21 13.895 20.105 13 19 13Z" fill="currentColor" />
      </svg>
    ),
    title: "We never hold your data",
    description: "Aggregation and processing happen on your device. Your report goes straight from your phone into storage you own — never to a HealthShare server. No data lake: nothing for us to lose, sell, or be forced to hand over.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Built for people who take their health seriously and want full ownership of their data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-[#00B5A3]/30 hover:shadow-md transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E0F7F5] dark:bg-[#00B5A3]/20 text-[#00B5A3] flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
