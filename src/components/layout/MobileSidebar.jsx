import { icons } from '../icons/Icons';
import { tabs } from '../../constants/tabs';

export function MobileSidebar({
  menuOpen,
  setMenuOpen,
  activeTab,
  setActiveTab,
  showSettings,
  setShowSettings,
  darkMode,
  setDarkMode
}) {
  return (
    <>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu - slides in from left on mobile/tablet */}
      <aside
        className={`lg:hidden fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        } w-72 ${
          darkMode ? 'bg-zinc-900 border-r border-zinc-800' : 'bg-white border-r border-zinc-200'
        } overflow-y-auto`}
      >
        <div className="p-4 flex flex-col h-full">
          {/* Mobile header */}
          <div className={`flex items-center justify-between mb-6 pb-4 border-b ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className={`font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Menu</span>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className={`p-1.5 rounded-lg ${darkMode ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'}`}
            >
              <svg className={`w-5 h-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Menu Items */}
          <nav className="flex-1 space-y-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setMenuOpen(false);
                  setShowSettings(false);
                }}
                className={`w-full px-3 py-2.5 rounded-xl font-medium transition-all flex items-center gap-3 text-sm ${
                  activeTab === tab.id && !showSettings
                    ? 'bg-sky-500 text-white'
                    : darkMode
                      ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
                }`}
              >
                {icons[tab.id]}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>

          {/* Divider */}
          <div className={`my-4 border-t ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`} />

          {/* Settings Section */}
          <div className="space-y-1">
            <button
              onClick={() => {
                setShowSettings(!showSettings);
                setMenuOpen(false);
              }}
              className={`w-full px-3 py-2.5 rounded-xl font-medium transition-all flex items-center gap-3 text-sm ${
                showSettings
                  ? 'bg-sky-500 text-white'
                  : darkMode
                    ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                    : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {icons.settings}
              <span>Settings</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-full px-3 py-2.5 rounded-xl font-medium transition-all flex items-center gap-3 text-sm ${
                darkMode
                  ? 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                  : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900'
              }`}
            >
              {darkMode ? icons.moon : icons.sun}
              <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          {/* Privacy badges */}
          <div className="mt-4 pt-4 border-t border-zinc-700 space-y-2">
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ${darkMode ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-500/20 border-emerald-500/30'} border`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className={`text-xs font-medium ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>LOCAL-FIRST</span>
            </div>
            <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ${darkMode ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-500/20 border-blue-500/30'} border`}>
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className={`text-xs font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>PRIVACY-FIRST</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
