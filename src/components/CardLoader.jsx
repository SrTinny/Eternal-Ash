import { useState, useEffect } from 'react';
import cardData from '../data/cards.json';

export default function CardDeck() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const toggle = (e) => {
      if (e.key.toLowerCase() === 'd') setOpen((prev) => !prev);
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', toggle);
    return () => window.removeEventListener('keydown', toggle);
  }, []);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 right-28 z-50 bg-black/80 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        🃏 Minhas Cartas
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/80 z-40 flex items-center justify-center p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {cardData.map((card, index) => (
              <div key={index} className="bg-[#f2e4c9] border-2 border-[#ccc] rounded-lg shadow-lg text-black p-4 relative font-serif max-w-xs mx-auto">
                {/* Topo */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold uppercase text-gray-800">{card.name}</span>
                  <span className="text-sm font-semibold bg-gray-700 text-white px-2 py-0.5 rounded">Lv. {card.level}</span>
                </div>

                {/* Imagem da carta */}
                <div className="h-40 bg-gray-300 flex items-center justify-center rounded mb-2 border border-black">
                  <span className="text-gray-600 text-sm">[Imagem da Carta]</span>
                </div>

                {/* Tipo e Energia */}
                <div className="text-xs italic text-gray-700 mb-1">
                  <strong>{card.type}</strong> | <strong>Energia:</strong> {card.energy}
                </div>

                {/* Descrição */}
                <div className="text-sm text-gray-900">
                  {card.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
