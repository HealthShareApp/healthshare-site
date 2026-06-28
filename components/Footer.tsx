import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900 dark:bg-gray-950 border-t border-gray-800 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`} alt="HealthShare logo" width={24} height={24} className="rounded-md" />
          <span className="text-white font-semibold text-sm">HealthShare</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/privacy/`} className="hover:text-white transition-colors">Privacy</a>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/terms/`} className="hover:text-white transition-colors">Terms</a>
          <a href="mailto:alexander.kaigorodow@gmail.com" className="hover:text-white transition-colors">Support</a>
          <a
            href="https://github.com/HealthShareApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-gray-500 dark:text-gray-600">
          © {new Date().getFullYear()} HealthShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
