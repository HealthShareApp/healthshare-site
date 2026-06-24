const steps = [
  {
    number: "01",
    title: "Grant Health access",
    description:
      "HealthShare reads from Apple Health, which already aggregates data from all your devices — Apple Watch, Whoop, Oura, Garmin, and more. Nothing is read until you trigger an export.",
  },
  {
    number: "02",
    title: "Connect your storage",
    description:
      "Connect the cloud storage you trust — starting with Google Drive, with more options on the way. HealthShare uploads to a dedicated folder you own. You can revoke access any time.",
  },
  {
    number: "03",
    title: "Hold to export",
    description:
      "Press and hold the sync button on the Status screen. HealthShare fetches, aggregates, and uploads your report in seconds.",
  },
  {
    number: "04",
    title: "Share on your terms",
    description:
      "Open your storage and share the file with your doctor, nutritionist, trainer — or feed it into an AI for analysis.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
            How it works
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Four steps from setup to sharing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00B5A3] text-white flex items-center justify-center text-sm font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
