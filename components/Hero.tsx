import Image from "next/image";
import EcgDivider from "./EcgDivider";

export default function Hero() {
  return (
    <section className="pt-32 pb-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">

        {/* Logo */}
        <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`} alt="HealthShare" width={120} height={120} priority />

        {/* Headline → ECG divider → Subheadline */}
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight max-w-3xl">
            Your health data,{" "}
            <span className="text-[#00B5A3]">in your hands</span>
          </h1>

          <EcgDivider />

          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
            Apple Watch, Whoop, Oura, Garmin — whatever you track with, the data already
            lives in Apple Health. HealthShare exports it as a structured report to your
your own cloud storage, ready to share with your doctor, trainer, or AI.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00B5A3] text-white font-semibold text-[15px] hover:bg-[#009688] transition-colors shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5L11.5 6.5L17 7.5L13 11.5L14 17L9 14.5L4 17L5 11.5L1 7.5L6.5 6.5L9 1.5Z" fill="white" />
              </svg>
              Download on App Store
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              See how it works →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
