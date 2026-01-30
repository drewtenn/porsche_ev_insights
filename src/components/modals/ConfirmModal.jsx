export function ConfirmModal({ modalConfig, setModalConfig, darkMode }) {
  if (!modalConfig) return null;

  return (
    <div className={`fixed inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'} backdrop-blur-sm z-[60] flex items-center justify-center p-4`}>
      <div className={`rounded-2xl border max-w-sm w-full p-5 shadow-2xl transform transition-all scale-100 ${darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-white border-zinc-200'}`}>
        <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-zinc-900'}`}>{modalConfig.title || 'Notification'}</h3>
        <p className={`text-sm mb-5 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{modalConfig.message}</p>
        <div className="flex gap-3 justify-end">
          {modalConfig.onCancel && (
            <button
              onClick={() => setModalConfig(null)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${darkMode ? 'bg-zinc-800 hover:bg-zinc-700 text-white' : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-900'}`}
            >
              {modalConfig.cancelText || 'Cancel'}
            </button>
          )}
          <button
            onClick={() => {
              if (modalConfig.onConfirm) modalConfig.onConfirm();
              setModalConfig(null);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${modalConfig.variant === 'danger' ? 'bg-red-500 hover:bg-red-600 text-white' : 'bg-sky-500 hover:bg-sky-600 text-white'}`}
          >
            {modalConfig.confirmText || 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
}
