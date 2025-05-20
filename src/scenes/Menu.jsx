function Menu({ onStart }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background-eternal-ash.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg mb-6">Eternal Ash</h1>
        <button
          onClick={onStart}
          className="text-white border border-white px-6 py-2 hover:bg-white hover:text-black transition-all duration-300"
        >
          Começar
        </button>
      </div>
    </div>
  );
}

export default Menu;
