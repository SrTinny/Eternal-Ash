import { useState, useEffect } from 'react';

export default function InventoryHUD() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const toggleInventory = (e) => {
      if (e.key.toLowerCase() === 'i') setOpen((prev) => !prev);
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', toggleInventory);
    return () => window.removeEventListener('keydown', toggleInventory);
  }, []);

  return (
    <div className="relative z-50">
      {/* Botão flutuante para abrir o inventário */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-black/80 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        🎒 Inventário
      </button>

      {/* Painel do inventário */}
      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-40 flex items-center justify-center">
          <div className="bg-black/90 text-white p-6 rounded-xl w-full max-w-6xl mx-4 shadow-2xl border border-white/20 flex flex-col md:flex-row gap-6 md:gap-10 relative">
            {/* Botão de fechar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>

            {/* Coluna da personagem e slots */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              {/* Silhueta da personagem */}
              <div className="w-full aspect-[3/5] bg-gray-800 rounded-lg mb-6 flex items-center justify-center border border-white/20">
                <span className="text-white/40 text-sm">[Personagem]</span>
              </div>

              {/* Slots de equipamento aumentados */}
              <div className="grid grid-cols-3 gap-4">
                <div className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl" title="Arma">🗡️</div>
                <div className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl" title="Cabelo">💇‍♀️</div>
                <div className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl" title="Vestido">👗</div>
              </div>
            </div>

            {/* Grade de inventário 4x7 ajustada */}
            <div className="grid grid-cols-4 gap-4 w-full md:w-2/3">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full aspect-square bg-gray-800 border border-white/10 rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
