export function ChartCard({ title, children, darkMode }) {
  return (
    <div className={`p-4 rounded-xl border ${darkMode ? 'bg-zinc-900/50 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'}`}>
      <h3 className={`text-sm font-medium mb-3 ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>{title}</h3>
      {children}
    </div>
  );
}
