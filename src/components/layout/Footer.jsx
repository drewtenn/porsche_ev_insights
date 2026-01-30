export function Footer({ darkMode }) {
  return (
    <footer className={`border-t mt-8 ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
        <p className={`text-xs text-center ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>Porsche EV Trips Insights • Local-first • Privacy-first • No data leaves your device</p>
        <p className={`text-xs text-center ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
          Developed by <a href="https://github.com/jpleite/porsche_ev_insights" target="_blank" rel="noopener noreferrer" className={`underline hover:${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>jpleite</a> • 2026 v1.0 Beta
        </p>
      </div>
    </footer>
  );
}
