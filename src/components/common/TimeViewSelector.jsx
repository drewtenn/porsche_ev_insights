export function TimeViewSelector({ timeView, setTimeView, darkMode }) {
  return (
    <div className="flex gap-2">
      {['day', 'week', 'month'].map(v => (
        <button
          key={v}
          onClick={() => setTimeView(v)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            timeView === v
              ? 'bg-sky-500 text-white'
              : darkMode
                ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                : 'bg-zinc-200 text-zinc-600 hover:bg-zinc-300 hover:text-zinc-900'
          }`}
        >
          By {v}
        </button>
      ))}
    </div>
  );
}
