export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F7F5] text-[#00B5A3] text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B5A3]" />
          iOS App — Available now
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight tracking-tight max-w-3xl">
          Your health data,{" "}
          <span className="text-[#00B5A3]">in your hands</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
          HealthShare reads your Apple Health metrics and exports a structured report
          to Google Drive — whenever you choose, shared with whoever you trust.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00B5A3] text-white font-semibold text-[15px] hover:bg-[#009688] transition-colors shadow-sm"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 1.5L11.5 6.5L17 7.5L13 11.5L14 17L9 14.5L4 17L5 11.5L1 7.5L6.5 6.5L9 1.5Z" fill="white" />
            </svg>
            Download on App Store
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            See how it works →
          </a>
        </div>

        {/* Mockup placeholder */}
        <div className="mt-12 w-full max-w-sm mx-auto">
          <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 shadow-xl shadow-gray-100">
            <div className="flex flex-col items-center gap-6">
              {/* Ring mockup */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg viewBox="0 0 144 144" className="absolute inset-0 w-full h-full">
                  <circle cx="72" cy="72" r="64" fill="none" stroke="#E0F7F5" strokeWidth="8" />
                  <circle
                    cx="72" cy="72" r="64"
                    fill="none"
                    stroke="#00B5A3"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="402"
                    strokeDashoffset="100"
                    transform="rotate(-90 72 72)"
                  />
                </svg>
                <div className="w-24 h-24 rounded-full bg-[#00B5A3]/10 flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path
                      d="M20 8C20 8 8 14 8 22C8 27.523 13.373 32 20 32C26.627 32 32 27.523 32 22C32 14 20 8 20 8Z"
                      fill="#00B5A3"
                    />
                  </svg>
                </div>
              </div>
              {/* Metrics */}
              <div className="w-full grid grid-cols-3 gap-3">
                {[
                  { label: "Heart Rate", value: "62", unit: "bpm" },
                  { label: "HRV", value: "47", unit: "ms" },
                  { label: "Sleep", value: "7.2", unit: "hrs" },
                ].map((m) => (
                  <div key={m.label} className="bg-white rounded-xl p-3 text-center shadow-sm">
                    <div className="text-xl font-bold text-gray-900">{m.value}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{m.unit}</div>
                    <div className="text-[9px] text-gray-400 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
