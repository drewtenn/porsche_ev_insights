import { icons } from '../icons/Icons';
import { tabs } from '../../constants/tabs';

export function Sidebar({ activeTab, setActiveTab, showSettings, setShowSettings, darkMode, setDarkMode }) {
  return (
    <aside className="hidden lg:block w-56 flex-shrink-0 py-6 pl-4">
      <div className={`sticky top-20 p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'}`}>
        {/* Navigation Menu Items */}
        <nav className="space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
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

        {/* Settings */}
        <div className="space-y-1">
          <button
            onClick={() => setShowSettings(!showSettings)}
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
      </div>
    </aside>
  );
}
