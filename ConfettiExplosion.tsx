import { useEffect, useState } from 'react';

interface ConfettiExplosionProps {
  trigger: boolean;
  onComplete?: () => void;
}

export default function ConfettiExplosion({ trigger, onComplete }: ConfettiExplosionProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    rotation: number;
    rotationSpeed: number;
  }>>([]);

  useEffect(() => {
    if (trigger) {
      const newParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 0.3,
        vx: (Math.random() - 0.5) * 20,
        vy: Math.random() * -15 - 5,
        color: ['#ff69b4', '#ff1493', '#ff6b9d', '#ffd700', '#ff8c94', '#a8e6cf'][Math.floor(Math.random() * 6)],
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 10
      }));
      
      setParticles(newParticles);
      
      // Clear particles after animation
      setTimeout(() => {
        setParticles([]);
        onComplete?.();
      }, 3000);
    }
  }, [trigger, onComplete]);

  if (!trigger || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            animation: `confettiFall 3s ease-out forwards`,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}