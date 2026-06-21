export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#00B5A3] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2.5C8 2.5 3 5.5 3 9.5C3 11.985 5.239 14 8 14C10.761 14 13 11.985 13 9.5C13 5.5 8 2.5 8 2.5Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="font-semibold text-gray-900 text-[15px]">HealthShare</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors hidden sm:block">
            How it works
          </a>
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
