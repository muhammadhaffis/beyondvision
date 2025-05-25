
export const Footer = () => {
  return (
    <footer className="bg-black/80 border-t border-red-600/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-red-500 mb-4"
                 style={{ 
                   fontFamily: 'Impact, Arial Black, sans-serif',
                   textShadow: '0 0 10px rgba(220, 38, 38, 0.5)'
                 }}>
              THE UNTAMED WORLD
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              In a world ruined by fear and chaos, survival isn't enough — your choices define who you become. 
              Shape your fate in The Untamed World.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600/40 transition-colors duration-300">
                <span className="text-red-400 text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600/40 transition-colors duration-300">
                <span className="text-red-400 text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-600/40 transition-colors duration-300">
                <span className="text-red-400 text-sm">i</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Survival</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Download</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">System Requirements</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Updates</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Community</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Help Center</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Report Bugs</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Contact Us</li>
              <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Forums</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-600/30 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 The Untamed World Project. Built with heart, driven by choice.</p>
        </div>
      </div>
    </footer>
  );
};
