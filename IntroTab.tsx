import { useState } from 'react';
import { TabType } from '../../App';

interface IntroTabProps {
  onNavigate: (tab: TabType) => void;
}

export default function IntroTab({ onNavigate }: IntroTabProps) {
  const [showYayAnimation, setShowYayAnimation] = useState(false);

  const handleSendKisses = () => {
    setShowYayAnimation(true);
    setTimeout(() => {
      setShowYayAnimation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="animate-pulse-heart mb-8">
          <i className="fas fa-heart text-6xl text-romantic-primary mb-4"></i>
        </div>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 animate-float">
          Happy Birthday
        </h1>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-romantic-secondary mb-8 animate-float-delayed">
          Beautiful Brooke!
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
          June 21st - A day as special as you are 💕
        </p>
        <div className="flex flex-col items-center gap-4 mb-8">
          <button
            onClick={handleSendKisses}
            className="bg-romantic-primary px-8 py-4 rounded-full text-white text-xl font-semibold hover:bg-romantic-primary/80 transition-all transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-kiss mr-3"></i>Send Me Kisses
          </button>
          
          <button
            onClick={() => onNavigate('gallery')}
            className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white text-lg font-medium hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg border border-white/30"
          >
            <i className="fas fa-images mr-2"></i>Explore Your Gallery
          </button>
        </div>
        
        {/* Yay Animation */}
        {showYayAnimation && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 80 + 10}vw`,
                  top: `${Math.random() * 80 + 10}vh`,
                  animation: `kissFloat ${1.5 + Math.random()}s ease-in-out ${Math.random() * 2}s`
                }}
              >
                🎉
              </div>
            ))}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-6xl font-['Playfair_Display'] font-bold text-white animate-bounce-heart">
                YAY! 💕
              </h3>
            </div>
          </div>
        )}
        
        <div className="text-center">
          <p className="text-white/60 text-sm">Made with 💕 by Vivi</p>
        </div>
      </div>
    </div>
  );
}
