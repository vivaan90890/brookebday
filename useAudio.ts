import { useState, useRef, useEffect } from 'react';
import musicFile from "@assets/Jonas Blue - I See Love Ft. Joe Jonas (from Hotel Transylvania 3) (Official Lyric Video)_1749885015130.mp3";

interface UseAudioReturn {
  isPlaying: boolean;
  toggleAudio: () => void;
}

export function useAudio(): UseAudioReturn {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with the uploaded music file
    audioRef.current = new Audio(musicFile);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    // Auto-play music when component mounts
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.log('Auto-play failed:', e);
          // Browser might block autoplay, user interaction needed
        });
      }
    };

    // Try to play immediately, or on first user interaction
    playAudio();
    
    // Fallback: play on first user interaction
    const handleFirstInteraction = () => {
      playAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((e) => {
          console.log('Audio play failed:', e);
          // Fallback - still set playing state for UI feedback
          setIsPlaying(true);
        });
      }
    }
  };

  return { isPlaying, toggleAudio };
}
