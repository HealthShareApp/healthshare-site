import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="HealthShare logo" width={28} height={28} className="rounded-md" />
          <span className="font-semibold text-gray-900 dark:text-white text-[15px]">HealthShare</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hidden sm:block">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors hidden sm:block">
            How it works
          </a>
          <ThemeToggle />
          <a
            href="#"
            className="text-sm font-medium px-4 py-2 rounded-full bg-[#00B5A3] text-white hover:bg-[#009688] transition-colors"
          >
            Get the app
          </a>
        </div>
      </div>
    </nav>
  );
}
