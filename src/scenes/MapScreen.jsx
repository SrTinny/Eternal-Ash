import { useState } from "react";
import InventoryHUD from "../components/InvetoryHUD";



function MapScreen() {
  const [showQuests, setShowQuests] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-auto bg-black">
      <InventoryHUD />

      {/* MAPA DE FUNDO */}
      <img
        src="/map-eternal-ash.png"
        alt="Mapa da Cidade Cinza Eterna"
        className="w-auto h-full mx-auto object-contain"
      />

      {/* BOTÃO DE INVENTÁRIO */}
      <div className="absolute top-4 left-4 z-20">
        <button
          className="bg-black/80 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          onClick={() => alert("Inventário ainda não implementado")}
        >
          🎒 Inventário
        </button>
      </div>

      {/* BOTÃO DE MISSÕES */}
      <div className="absolute top-4 right-4 z-20">
        <button
          className="bg-black/80 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
          onClick={() => setShowQuests((prev) => !prev)}
        >
          📜 Missões
        </button>
      </div>

      {/* LISTA DE MISSÕES */}
      {showQuests && (
        <div className="absolute top-20 right-4 z-20 w-72 max-h-[60%] overflow-y-auto bg-black/80 text-white p-4 rounded shadow-xl space-y-2 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-2 border-b border-white/40 pb-1">Missões</h2>

          <div>
            <h3 className="text-white/70 text-sm font-semibold">🌑 Principal</h3>
            <ul className="list-disc list-inside text-sm pl-2">
              <li>Encontrar a entrada do Templo</li>
              <li>Explorar as Ruínas Antigas</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white/70 text-sm font-semibold mt-3">⭐ Secundária</h3>
            <ul className="list-disc list-inside text-sm pl-2">
              <li>Falar com o velho na Vila Inferior</li>
              <li>Coletar 3 fragmentos de cinza</li>
            </ul>
          </div>
        </div>
      )}

      {/* BOTÕES COM POSIÇÕES AJUSTADAS */}

      {/* Ruínas (canto superior esquerdo) */}
      <div className="absolute top-[38%] left-[80%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Ruínas
        </button>
      </div>

      {/* Vila Inferior (abaixo da primeira arena) */}
      <div className="absolute top-[70%] left-[60%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Vila Inferior
        </button>
      </div>

      {/* Antiga Arena (esquerda inferior) */}
      <div className="absolute top-[58%] left-[31%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Antiga Arena
        </button>
      </div>

      {/* Entrada (parte inferior central) */}
      <div className="absolute top-[85%] left-[48%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-4 py-1 rounded hover:bg-black">
          Entrada
        </button>
      </div>

      {/* Entrada (parte inferior central) */}
      <div className="absolute top-[81%] left-[27%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-4 py-1 rounded hover:bg-black">
          Ponte
        </button>
      </div>

      {/* Centro (ponto médio do mapa) */}
      <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Centro Comercial
        </button>
      </div>

      {/* Templo (no topo da montanha, centro superior) */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Templo
        </button>
      </div>

      {/* Montanha (canto superior direito) */}
      <div className="absolute top-[28%] left-[45%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          Vila Superior
        </button>
      </div>

      {/* Templo Perdido (inferior direito) */}
      <div className="absolute top-[61%] left-[78%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          ⭐
        </button>
      </div>

      {/* Templo Perdido (inferior direito) */}
      <div className="absolute top-[32%] left-[32%] -translate-x-1/2 -translate-y-1/2">
        <button className="bg-black/70 text-white px-3 py-1 rounded hover:bg-black">
          ⭐
        </button>
      </div>
    </div>
  );
}

export default MapScreen;
