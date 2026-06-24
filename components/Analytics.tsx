export default function Analytics() {
  return (
    <section className="py-16 px-6 bg-gray-900 dark:bg-gray-950 border-t border-gray-700 dark:border-gray-700">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
          Aggregation, analysis &amp; visualization
        </h2>

        <p className="text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
          HealthShare aggregates your tracker data, runs lightweight on-device analysis,
          and surfaces it as a structured, readable report. Useful for your own review —
          and ready for any AI tool or medical professional you choose to share it with.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "On-device health state analysis",
            "In-app charts & insights",
            "Structured for AI tools",
          ].map((text) => (
            <div
              key={text}
              className="bg-white/10 rounded-xl px-4 py-2.5 text-white/80 text-sm font-medium"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
