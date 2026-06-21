const phases = [
  {
    status: "today",
    label: "Available now",
    title: "Your data, your Drive",
    description:
      "Export a full health snapshot to your Google Drive on demand. Share it with your trainer, nutritionist, or AI assistant — or keep it for yourself. You control every step.",
    points: [
      "One hold exports your complete health profile",
      "Works with any tracker that syncs to Apple Health",
      "Structured JSON report, ready for AI analysis",
      "You choose who sees it and when",
    ],
  },
  {
    status: "coming",
    label: "Coming soon",
    title: "A direct line to your doctor",
    description:
      "We're building a secure, private channel between you and the medical professionals you trust — so your health data reaches the right hands without passing through anyone else's.",
    points: [
      "Add a doctor you already know, or browse verified specialists",
      "End-to-end encrypted transfer — HealthShare never reads the contents",
      "Your doctor receives a clean, structured report, not raw device noise",
      "Works with clinics and medical centers, not just individuals",
    ],
  },
];

export default function Vision() {
  return (
    <section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            More than a Drive export
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            HealthShare is building the infrastructure for health data you actually control —
            from your wrist to your Google Drive, and soon, directly to the doctors you trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((phase) => {
            const isToday = phase.status === "today";
            return (
              <div
                key={phase.status}
                className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                  isToday
                    ? "bg-white dark:bg-gray-800 border border-[#00B5A3]/40"
                    : "bg-white dark:bg-gray-800 border border-dashed border-gray-300 dark:border-gray-600"
                }`}
              >
                {/* Status pill */}
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                      isToday
                        ? "bg-[#E0F7F5] dark:bg-[#00B5A3]/20 text-[#00B5A3]"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {isToday ? (
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor">
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 3" strokeLinecap="round" />
                      </svg>
                    )}
                    {phase.label}
                  </span>
                </div>

                {/* Title + description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Points */}
                <ul className="flex flex-col gap-3">
                  {phase.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          isToday
                            ? "bg-[#00B5A3]"
                            : "bg-gray-200 dark:bg-gray-600"
                        }`}
                      >
                        {isToday ? (
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 5l2.5 2.5L8 3" />
                          </svg>
                        ) : (
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="white">
                            <circle cx="3" cy="3" r="1.5" />
                          </svg>
                        )}
                      </span>
                      <span className={`text-sm leading-relaxed ${
                        isToday
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-500 dark:text-gray-400"
                      }`}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
