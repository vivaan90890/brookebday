import { useState } from 'react';
import { useCountdown } from '../../hooks/useCountdown';
import ConfettiExplosion from '../ConfettiExplosion';

export default function CountdownTab() {
  const [showCelebration, setShowCelebration] = useState(false);
  const { days, hours, minutes, seconds, isToday } = useCountdown('2025-06-21');

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <i className="fas fa-birthday-cake text-6xl text-romantic-primary mb-4 animate-bounce-heart"></i>
        </div>
        <h2 className="font-['Playfair_Display'] text-4xl md:text-6xl font-bold text-white mb-8">
          Birthday Countdown
        </h2>
        
        {!isToday ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {days.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm md:text-base">Days</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {hours.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm md:text-base">Hours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm md:text-base">Minutes</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-white/80 text-sm md:text-base">Seconds</div>
            </div>
          </div>
        ) : (
          <div className="mb-8">
            <h3 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-white mb-4">
              🎉 IT'S YOUR BIRTHDAY! 🎉
            </h3>
            <p className="text-xl md:text-2xl text-white/90">
              Hope your day is as amazing as you are! 💕
            </p>
          </div>
        )}
        
        <p className="text-lg md:text-xl text-white/80 mb-8">
          {isToday ? 'The most special day is here! ✨' : 'Until we celebrate the most special day of the year! ✨'}
        </p>
        
        {isToday && (
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setShowCelebration(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-white text-xl font-bold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg animate-pulse"
              style={{ animation: 'glow 2s ease-in-out infinite' }}
            >
              🎉 CELEBRATE BROOKE'S BIRTHDAY! 🎉
            </button>
          </div>
        )}
        
        <ConfettiExplosion trigger={showCelebration} onComplete={() => setShowCelebration(false)} />
        
        <div className="text-center">
          <p className="text-white/60 text-sm">Made with 💕 by Vivi</p>
        </div>
      </div>
    </div>
  );
}
