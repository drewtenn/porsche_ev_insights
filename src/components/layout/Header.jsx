
export function Header({ darkMode, menuOpen, setMenuOpen }) {
  return (
    <header className={`border-b backdrop-blur-sm sticky top-0 z-50 ${darkMode ? 'border-zinc-800 bg-zinc-950/80' : 'border-zinc-200 bg-white/80'}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <div>
              <h1 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Porsche EV Insights</h1>
              <p className={`text-xs ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>EV Trip Analytics</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full ${darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-500/20 border-emerald-500/30'} border`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className={`text-xs font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>LOCAL-FIRST</span>
            </div>
            <div className={`hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full ${darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/20 border-blue-500/30'} border`}>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>PRIVACY-FIRST</span>
            </div>
            {/* Menu toggle button - visible on mobile/tablet */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700' : 'bg-zinc-200 hover:bg-zinc-300'}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className={`w-5 h-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className={`w-5 h-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
