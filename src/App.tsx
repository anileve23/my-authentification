import background from './assets/banner-bg.png';

function App() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center text-white px-4"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black/70 p-6 md:p-10 rounded-lg shadow-lg max-w-lg md:max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-wide">
          Mysteries of the Cosmos
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          The universe is vast and largely unexplored. Did you know that there are more stars in the observable universe than grains of sand on all of Earth's beaches? 
          Some exoplanets could have conditions suitable for life, and black holes warp space and time in ways we still don’t fully understand.
        </p>
        <p className="italic text-gray-300 mt-4 sm:mt-6 text-xs sm:text-sm md:text-base">
          "Somewhere, something incredible is waiting to be known." — Carl Sagan
        </p>
      </div>
    </div>
  );
}

export default App;