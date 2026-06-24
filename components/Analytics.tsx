export default function Analytics() {
  return (
    <section className="py-24 px-6 bg-gray-900 dark:bg-gray-950">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-8">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect x="3" y="3" width="9" height="9" rx="2" fill="white" />
            <rect x="16" y="3" width="9" height="9" rx="2" fill="white" opacity="0.5" />
            <rect x="3" y="16" width="9" height="9" rx="2" fill="white" opacity="0.5" />
            <rect x="16" y="16" width="9" height="9" rx="2" fill="white" />
            <path d="M12 7.5h4M7.5 12v4M20.5 12v4M12 20.5h4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
          Intelligence that runs on your device
        </h2>

        <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
          We build the intelligence; your device runs it. Your data never travels to our
          analytics — the analytics come to your data.
        </p>

        <div className="mt-10 flex flex-col gap-4 text-left">
          {[
            {
              icon: "⬡",
              text: "Composite health score, anomaly detection, and trend insights — computed on your phone",
            },
            {
              icon: "⬡",
              text: "Built by the HealthShare team, run on your device — never on our servers",
            },
            {
              icon: "⬡",
              text: "Same principle as your storage: we never hold your data, and never process it elsewhere either",
            },
          ].map((item) => (
            <div
              key={item.text}
              className="bg-white/10 rounded-xl px-5 py-4 text-white text-sm leading-relaxed flex items-start gap-3"
            >
              <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#00B5A3] flex items-center justify-center">
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 5l2.5 2.5L8 3" />
                </svg>
              </span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
