import { useState, useRef, useEffect } from 'react';

declare global {
  interface Window {
    confetti: any;
  }
}

export default function ProposalTab() {
  const [showResponse, setShowResponse] = useState(false);
  const [responseType, setResponseType] = useState<'yes' | 'no' | null>(null);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 100, y: 300 });
  const [showKissAnimation, setShowKissAnimation] = useState(false);
  const [showCryAnimation, setShowCryAnimation] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initialize button position
    const initializePosition = () => {
      const maxX = Math.max(0, window.innerWidth - 120);
      const maxY = Math.max(0, window.innerHeight - 200);
      setNoButtonPosition({
        x: Math.min(100, maxX),
        y: Math.min(300, maxY)
      });
    };

    initializePosition();
    window.addEventListener('resize', initializePosition);
    
    return () => window.removeEventListener('resize', initializePosition);
  }, []);

  const handleNoButtonHover = () => {
    const maxX = Math.max(0, window.innerWidth - 120); // button width
    const maxY = Math.max(0, window.innerHeight - 200); // button height + margin
    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;
    
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleNoButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResponse(true);
    setResponseType('no');
    setShowCryAnimation(true);
    
    setTimeout(() => {
      setShowCryAnimation(false);
    }, 3000);
  };

  const handleYesClick = () => {
    setShowResponse(true);
    setResponseType('yes');
    setShowKissAnimation(true);
    
    // Trigger confetti
    if (window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      
      // More confetti bursts
      setTimeout(() => {
        window.confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
      }, 200);
      
      setTimeout(() => {
        window.confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);
    }

    setTimeout(() => {
      setShowKissAnimation(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full shadow-2xl animate-float mb-6 bg-gradient-to-br from-pink-300 to-purple-400 flex items-center justify-center">
            <i className="fas fa-gem text-6xl text-white"></i>
          </div>
        </div>
        
        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-8">
          Will You Marry Me?
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Brooke, you are my everything. My heart, my soul, my future. I want to spend every birthday, every moment, every breath with you. Will you make me the happiest person alive?
        </p>
        
        {!showResponse && (
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-50">
            <button
              onClick={handleNoButtonClick}
              className="bg-gray-500 hover:bg-gray-600 px-8 py-4 rounded-full text-white text-xl font-semibold shadow-lg transform hover:scale-105 transition-all cursor-pointer relative z-10"
            >
              No
            </button>
            <button
              onClick={handleYesClick}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-12 py-4 rounded-full text-white text-xl font-semibold shadow-lg transform hover:scale-105 transition-all cursor-pointer relative z-10"
            >
              YES! 💕
            </button>
          </div>
        )}
        
        {showResponse && responseType === 'yes' && (
          <div className="mt-8">
            <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4 animate-bounce-heart">
              🎉 SHE SAID YES! 🎉
            </h3>
            <p className="text-xl md:text-2xl text-white/90">
              Now every day will be as magical as your birthday! 💍✨
            </p>
          </div>
        )}

        {showResponse && responseType === 'no' && (
          <div className="mt-8">
            <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">
              😢 Maybe next time... 😢
            </h3>
            <p className="text-xl md:text-2xl text-white/90">
              I'll keep trying to win your heart! 💔
            </p>
          </div>
        )}

        {/* Kiss Animation */}
        {showKissAnimation && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl"
                style={{
                  left: `${Math.random() * 80 + 10}vw`,
                  top: `${Math.random() * 80 + 10}vh`,
                  animation: `kissFloat ${1.5 + Math.random()}s ease-in-out ${Math.random() * 2}s`
                }}
              >
                💋
              </div>
            ))}
          </div>
        )}

        {/* Crying Animation */}
        {showCryAnimation && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute text-3xl"
                style={{
                  left: `${Math.random() * 80 + 10}vw`,
                  top: `${Math.random() * 80 + 10}vh`,
                  animation: `cryDrop ${2 + Math.random()}s ease-in-out ${Math.random() * 2}s`
                }}
              >
                😭
              </div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">Made with 💕 by Vivi</p>
        </div>
      </div>
    </div>
  );
}
