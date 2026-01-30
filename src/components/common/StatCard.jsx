export function StatCard({ label, value, subtitle, color, darkMode }) {
  const darkColors = {
    sky: 'border-sky-500/30 bg-sky-500/5',
    blue: 'border-blue-500/30 bg-blue-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
    purple: 'border-purple-500/30 bg-purple-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    pink: 'border-pink-500/30 bg-pink-500/5',
    orange: 'border-orange-500/30 bg-orange-500/5',
    teal: 'border-teal-500/30 bg-teal-500/5',
    red: 'border-red-500/30 bg-red-500/5'
  };
  const lightColors = {
    sky: 'border-sky-500/40 bg-sky-500/10',
    blue: 'border-blue-500/40 bg-blue-500/10',
    emerald: 'border-emerald-500/40 bg-emerald-500/10',
    purple: 'border-purple-500/40 bg-purple-500/10',
    cyan: 'border-cyan-500/40 bg-cyan-500/10',
    pink: 'border-pink-500/40 bg-pink-500/10',
    orange: 'border-orange-500/40 bg-orange-500/10',
    teal: 'border-teal-500/40 bg-teal-500/10',
    red: 'border-red-500/40 bg-red-500/10'
  };
  const textColors = {
    sky: darkMode ? 'text-sky-400' : 'text-sky-600',
    blue: darkMode ? 'text-blue-400' : 'text-blue-600',
    emerald: darkMode ? 'text-emerald-400' : 'text-emerald-600',
    purple: darkMode ? 'text-purple-400' : 'text-purple-600',
    cyan: darkMode ? 'text-cyan-400' : 'text-cyan-600',
    pink: darkMode ? 'text-pink-400' : 'text-pink-600',
    orange: darkMode ? 'text-orange-400' : 'text-orange-600',
    teal: darkMode ? 'text-teal-400' : 'text-teal-600',
    red: darkMode ? 'text-red-400' : 'text-red-600'
  };
  const borderBg = darkMode ? (darkColors[color] || darkColors.sky) : (lightColors[color] || lightColors.sky);
  const textColor = textColors[color] || textColors.sky;
  return (
    <div className={`p-3 rounded-xl border ${borderBg}`}>
      <p className={`text-xs mb-0.5 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>{label}</p>
      <p className={`text-lg font-bold ${textColor}`}>{value}</p>
      {subtitle && <p className={`text-xs ${darkMode ? 'text-zinc-600' : 'text-zinc-500'}`}>{subtitle}</p>}
    </div>
  );
}
