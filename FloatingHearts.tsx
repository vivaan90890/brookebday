import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  animationDuration: number;
  fontSize: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const heart: Heart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: Math.random() * 3 + 5,
        fontSize: Math.random() * 1 + 1,
      };

      setHearts(prev => [...prev, heart]);

      // Remove heart after animation completes
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, heart.animationDuration * 1000);
    };

    const interval = setInterval(createHeart, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {hearts.map(heart => (
        <div
          key={heart.id}
          className="floating-heart absolute"
          style={{
            left: `${heart.left}vw`,
            animationDuration: `${heart.animationDuration}s`,
            fontSize: `${heart.fontSize}rem`,
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
}
