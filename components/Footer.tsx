export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#00B5A3] flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <path
                d="M6.5 1C6.5 1 2 3.5 2 7C2 9.209 4.015 11 6.5 11C8.985 11 11 9.209 11 7C11 3.5 6.5 1 6.5 1Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-white font-semibold text-sm">HealthShare</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a
            href="https://github.com/HealthShareApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} HealthShare. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
