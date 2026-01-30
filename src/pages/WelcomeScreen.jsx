export function WelcomeScreen({ setShowUpload, setUseSampleData, darkMode }) {
  return (
    <div className="text-center py-16">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 ${darkMode ? 'bg-zinc-800 text-sky-400' : 'bg-zinc-200 text-sky-600'}`}>
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
          {/* Sports car silhouette */}
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 14.5h1.5M20.5 14.5H22M5.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 14.5h16M7 14.5V13c0-.5.5-1.5 1-2l2-2.5c.5-.5 1.5-1 2.5-1h3c1 0 1.8.3 2.2.7l1.8 1.8c.5.5 1 1.5 1 2.5v2M7 14.5c0-1-.5-2-1.5-2H4c-.5 0-1 .5-1 1v1.5" />
        </svg>
      </div>
      <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Welcome to Porsche EV Insights</h2>
      <p className={`mb-6 max-w-md mx-auto text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>Upload your Porsche Connect CSV exports to analyze your driving patterns.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button onClick={() => setShowUpload(true)} className="px-5 py-2.5 rounded-xl bg-sky-500 text-white font-bold"><span className="inline-flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" /></svg>Upload Your Data</span></button>
        <button onClick={() => setUseSampleData(true)} className={`px-5 py-2.5 rounded-xl font-medium ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-900'}`}><span className="inline-flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>Try Sample Data</span></button>
      </div>
      <div className={`mt-10 max-w-sm mx-auto p-3 rounded-xl border ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-100 border-zinc-200'}`}>
        <p className={`text-xs ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}><span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg><strong className={darkMode ? 'text-white' : 'text-zinc-900'}>Privacy Protected</strong></span> — All data processed locally in your browser.</p>
      </div>
    </div>
  );
}
