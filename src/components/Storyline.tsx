
export const Storyline = () => {
  return (
    <section id="storyline" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300 mb-6"
                style={{ 
                  fontFamily: 'Impact, Arial Black, sans-serif',
                  textShadow: '0 0 20px rgba(220, 38, 38, 0.5)'
                }}>
              THE OUTBREAK
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                It all started with strange events—people acting violently, cities falling silent. 
                Within days, the world had changed. The infection spread fast, turning people into zombies.
              </p>
              <p className="text-lg leading-relaxed">
                You are Victor Armanov, a former soldier haunted by loss, navigating a shattered world,
                where the undead roam and survival is a daily battle. With your team of survivors, 
                you must uncover the truth behind the outbreak.
              </p>
              <p className="text-lg leading-relaxed">
                Search for clues, defend your group, and make choices that shape the fate of those around you. 
                But remember: trust is rare, danger is constant, and the dead are not the only threat.
              </p>
            </div>
            
            <div className="mt-8 p-6 border border-red-600/30 rounded-lg bg-black/40 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-red-400 mb-3">Day 1: Echoes of the Past</h3>
              <p className="text-gray-400">
                Your journey begins in the ruins of a fallen city, where screams echo through empty buildings 
                and shadows move in ways they shouldn't.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-red-900/50 to-black rounded-lg border border-red-600/30 overflow-hidden">
              <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/screenshots/outbreak.mp4"
              autoPlay
              muted
              loop
              playsInline></video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-red-400 text-sm mb-2">► OUTBREAK FOOTAGE</div>
                <div className="text-white font-bold text-lg">Infection Rate: 97.3%</div>
                <div className="text-gray-300 text-sm">Unprotected areas identified. </div>
              </div>
              
              {/* Simulated danger indicators */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                <div className="w-3 h-3 bg-red-600 rounded-full animate-ping delay-300"></div>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping delay-700"></div>
              </div>
              
              {/* Zombie silhouettes */}
              <div className="absolute bottom-0 left-0 right-0 opacity-30">
                <div className="flex justify-center items-end space-x-2 h-16">
                  <div className="w-6 h-12 bg-gray-700 rounded-t-lg transform rotate-2"></div>
                  <div className="w-5 h-10 bg-gray-600 rounded-t-lg transform -rotate-1"></div>
                  <div className="w-7 h-14 bg-gray-700 rounded-t-lg"></div>
                  <div className="w-6 h-11 bg-gray-600 rounded-t-lg transform rotate-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
