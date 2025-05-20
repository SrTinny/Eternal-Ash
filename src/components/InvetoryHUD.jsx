import { useState, useEffect } from "react";
import mannequin from "/public/mannequin.png";
import hair from "/public/hair.png";
import dress from "/public/dress.png";
import weapon from "/public/weapon.png";

const ITEMS = [
  { id: "hair1", type: "hair", icon: hair },
  { id: "dress1", type: "dress", icon: dress },
  { id: "weapon1", type: "weapon", icon: weapon },
];

export default function InventoryHUD() {
  const [open, setOpen] = useState(false);
  const [inventory, setInventory] = useState(ITEMS);
  const [equipment, setEquipment] = useState({
    hair: null,
    dress: null,
    weapon: null,
  });
  const [dragItem, setDragItem] = useState(null);

  useEffect(() => {
    const toggleInventory = (e) => {
      if (e.key.toLowerCase() === "i") setOpen((prev) => !prev);
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", toggleInventory);
    return () => window.removeEventListener("keydown", toggleInventory);
  }, []);

  const handleDrop = (slotType) => {
    if (dragItem && dragItem.type === slotType) {
      setEquipment((prev) => ({ ...prev, [slotType]: dragItem }));
      setInventory((prev) => prev.filter((item) => item.id !== dragItem.id));
      setDragItem(null);
    }
  };

  const unequip = (slotType) => {
    const item = equipment[slotType];
    if (item) {
      setInventory((prev) => [...prev, item]);
      setEquipment((prev) => ({ ...prev, [slotType]: null }));
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 bg-black/80 text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
      >
        🎒 Inventário
      </button>

      {open && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-40 flex items-center justify-center">
          <div className="bg-black/90 text-white p-6 rounded-xl w-full max-w-6xl mx-4 shadow-2xl border border-white/20 flex flex-col md:flex-row gap-6 md:gap-10 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>

            {/* Personagem */}
            <div className="relative flex flex-col items-center w-full md:w-1/3">
              <div className="relative w-full aspect-[3/5] bg-gray-800 rounded-lg border border-white/20">
                <img
                  src={mannequin}
                  alt="Personagem"
                  className="absolute top-0 w-full h-full object-contain pointer-events-none"
                />
                {equipment.hair && (
                  <img
                    src={equipment.hair.icon}
                    alt="Cabelo"
                    className="absolute top-[7%] left-[35%] w-[30%] object-contain pointer-events-none"
                  />
                )}
                {equipment.dress && (
                  <img
                    src={equipment.dress.icon}
                    alt="Vestido"
                    className="absolute top-[11%] left-[5%] w-[90%] object-contain pointer-events-none"
                  />
                )}
                {equipment.weapon && (
                  <img
                    src={equipment.weapon.icon}
                    alt="Arma"
                    className="absolute top-[50%] left-[50%] w-[70%] object-contain pointer-events-none"
                  />
                )}
              </div>

              {/* Slots de equipamento */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div
                  onDrop={() => handleDrop("hair")}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => unequip("hair")}
                  className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl cursor-pointer"
                  title="Cabelo"
                >
                  {equipment.hair ? (
                    <img
                      src={equipment.hair.icon}
                      alt="Hair"
                      className="w-14 h-14 object-contain"
                    />
                  ) : (
                    "💇‍♀️"
                  )}
                </div>
                <div
                  onDrop={() => handleDrop("weapon")}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => unequip("weapon")}
                  className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl cursor-pointer"
                  title="Arma"
                >
                  {equipment.weapon ? (
                    <img
                      src={equipment.weapon.icon}
                      alt="Weapon"
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    "🗡️"
                  )}
                </div>
                <div
                  onDrop={() => handleDrop("dress")}
                  onDragOver={(e) => e.preventDefault()}
                  onClick={() => unequip("dress")}
                  className="w-20 h-20 bg-gray-700 rounded flex items-center justify-center text-3xl cursor-pointer"
                  title="Vestido"
                >
                  {equipment.dress ? (
                    <img
                      src={equipment.dress.icon}
                      alt="Dress"
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    "👗"
                  )}
                </div>
              </div>
            </div>

            {/* Inventário */}
            <div className="grid grid-cols-5 gap-3 w-full md:w-2/3">
              {Array.from({ length: 25 }).map((_, i) => {
                const item = inventory[i];
                return (
                  <div
                    key={i}
                    className={`w-full aspect-square border rounded flex items-center justify-center transition-all duration-200 ${
                      item
                        ? "bg-white/10 border-white/20 hover:bg-white/20"
                        : "bg-gray-800 border-white/10"
                    }`}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => {
                      if (dragItem) {
                        setInventory((prev) => {
                          const updated = [...prev];
                          updated[i] = dragItem;
                          return updated.filter(
                            (it) => it && it.id !== dragItem.id
                          );
                        });
                        setDragItem(null);
                      }
                    }}
                  >
                    {item && (
                      <img
                        src={item.icon}
                        alt="item"
                        draggable
                        onDragStart={() => setDragItem(item)}
                        className="w-16 h-16 object-contain"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
