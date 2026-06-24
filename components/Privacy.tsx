export default function Privacy() {
  return (
    <section className="py-24 px-6 bg-[#00B5A3] dark:bg-[#008a7a]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 mb-8">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path
              d="M14 2L3 6.5V13C3 19.627 7.923 25.816 14 27C20.077 25.816 25 19.627 25 13V6.5L14 2Z"
              fill="white"
            />
          </svg>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
          Built so we never hold your data
        </h2>
        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          No data lake. No analytics. No selling, no sharing — nothing for us to leak. Your
          health data flows directly from Apple Health on your device into storage you own:
          encrypted in transit, stored in your account, under your control. The one thing we
          keep is nothing.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "We never hold your data",
            "Storage you own",
            "You decide who reads it",
          ].map((text) => (
            <div
              key={text}
              className="bg-white/10 rounded-xl px-4 py-3 text-white text-sm font-medium flex items-center justify-center"
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
