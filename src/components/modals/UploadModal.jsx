export function UploadModal({
  showUpload,
  setShowUpload,
  uploadStatus,
  handleFileUpload,
  processUploadedFiles,
  darkMode
}) {
  if (!showUpload) return null;

  return (
    <div className={`fixed inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'} backdrop-blur-sm z-50 flex items-center justify-center p-4`}>
      <div className={`rounded-2xl border max-w-md w-full p-5 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <div className="flex items-center justify-between mb-5">
          <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>Upload Porsche Data</h2>
          <button onClick={() => setShowUpload(false)} className={`p-1.5 rounded-lg ${darkMode ? 'hover:bg-zinc-800 text-zinc-400' : 'hover:bg-zinc-100 text-zinc-600'}`}>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="space-y-3">
          <label className={`block p-4 rounded-xl border-2 border-dashed cursor-pointer text-center ${darkMode ? 'border-zinc-700 hover:border-sky-500/50' : 'border-zinc-300 hover:border-sky-500'}`}>
            <input type="file" accept=".csv" className="hidden" onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'start')} />
            <div className={`text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Since Start <span className="text-sky-500">*Required</span></div>
            <div className="text-xs text-zinc-500">Individual trips</div>
            {uploadStatus.start && <div className="mt-2 text-xs text-emerald-500"><span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>{uploadStatus.start.name}</span> ({uploadStatus.start.rows} trips)</div>}
          </label>
          <label className={`block p-4 rounded-xl border-2 border-dashed cursor-pointer text-center ${darkMode ? 'border-zinc-700 hover:border-blue-500/50' : 'border-zinc-300 hover:border-blue-500'}`}>
            <input type="file" accept=".csv" className="hidden" onChange={(e) => e.target.files[0] && handleFileUpload(e.target.files[0], 'charge')} />
            <div className={`text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>Since Charge <span className="text-zinc-500">Optional</span></div>
            <div className="text-xs text-zinc-500">Charge cycles</div>
            {uploadStatus.charge && <div className="mt-2 text-xs text-emerald-500"><span className="inline-flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>{uploadStatus.charge.name}</span> ({uploadStatus.charge.rows} cycles)</div>}
          </label>
          <button onClick={processUploadedFiles} disabled={!uploadStatus.start} className={`w-full py-2.5 rounded-xl bg-sky-500 text-white font-bold ${!uploadStatus.start ? 'opacity-50' : ''}`}>Process Data</button>
        </div>
      </div>
    </div>
  );
}
