import { useState, useEffect } from 'react';

interface MemoriesTabProps {
  onImageClick: (image: string) => void;
}

import memory1 from "@assets/WhatsApp Image 2025-06-14 at 10.18.19 AM_1749884726094.jpeg";
import memory2 from "@assets/WhatsApp Image 2025-06-14 at 10.18.19 AM (1)_1749884726094.jpeg";
import memory3 from "@assets/WhatsApp Image 2025-06-14 at 10.18.19 AM (2)_1749884726094.jpeg";
import memory4 from "@assets/WhatsApp Image 2025-06-14 at 10.18.20 AM_1749884726093.jpeg";
import memory5 from "@assets/WhatsApp Image 2025-06-14 at 10.18.20 AM (1)_1749884726093.jpeg";
import memory6 from "@assets/WhatsApp Image 2025-06-14 at 10.18.20 AM (2)_1749884726092.jpeg";
import memory7 from "@assets/WhatsApp Image 2025-06-14 at 12.32.15 PM_1749884726092.jpeg";
import memory8 from "@assets/WhatsApp Image 2025-06-14 at 12.32.16 PM_1749884726092.jpeg";
import memory9 from "@assets/WhatsApp Image 2025-06-14 at 12.32.16 PM (1)_1749884726091.jpeg";

const memoryImages = [
  {
    src: memory1,
    alt: "Beautiful memory together",
    title: "Perfect Moments",
    description: "Every moment with you is precious"
  },
  {
    src: memory2,
    alt: "Sweet memories",
    title: "Together Forever",
    description: "Creating memories that last a lifetime"
  },
  {
    src: memory3,
    alt: "Happy times",
    title: "Endless Joy",
    description: "Laughter and love in every moment"
  },
  {
    src: memory4,
    alt: "Love captured",
    title: "Pure Love",
    description: "When two hearts become one"
  },
  {
    src: memory5,
    alt: "Adventure together",
    title: "Our Adventures",
    description: "Exploring life hand in hand"
  },
  {
    src: memory6,
    alt: "Special moments",
    title: "Magic Moments",
    description: "Every day is special with you"
  },
  {
    src: memory7,
    alt: "Beautiful us",
    title: "Beautiful Us",
    description: "Perfect together, always"
  },
  {
    src: memory8,
    alt: "Sweet embrace",
    title: "In Your Arms",
    description: "Home is wherever you are"
  },
  {
    src: memory9,
    alt: "Love story",
    title: "Our Love Story",
    description: "Written in the stars"
  }
];

export default function MemoriesTab({ onImageClick }: MemoriesTabProps) {
  const [slideshowMode, setSlideshowMode] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (slideshowMode) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % memoryImages.length);
      }, 4000); // Slower for memories - 4 seconds
      return () => clearInterval(interval);
    }
  }, [slideshowMode]);

  const toggleSlideshow = () => {
    setSlideshowMode(!slideshowMode);
    if (!slideshowMode) {
      setCurrentSlideIndex(0);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-white mb-4">
          Our Beautiful Memories
        </h2>
        <p className="text-xl text-white/80">Every moment we've shared together</p>
        
        <button
          onClick={toggleSlideshow}
          className="mt-4 bg-romantic-primary px-6 py-3 rounded-full text-white font-medium hover:bg-romantic-primary/80 transition-all transform hover:scale-105 shadow-lg"
        >
          {slideshowMode ? (
            <>
              <i className="fas fa-stop mr-2"></i>Stop Memory Slideshow
            </>
          ) : (
            <>
              <i className="fas fa-heart mr-2"></i>Relive Our Memories
            </>
          )}
        </button>
      </div>
      
      {slideshowMode ? (
        <div className="relative mb-8">
          <div className="slideshow-container bg-black/30 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
            <img
              src={memoryImages[currentSlideIndex].src}
              alt={memoryImages[currentSlideIndex].alt}
              className="w-full max-h-96 object-contain rounded-xl mx-auto"
              onClick={() => onImageClick(memoryImages[currentSlideIndex].src)}
            />
            <div className="text-center mt-6">
              <h3 className="text-white text-2xl font-bold mb-2">
                {memoryImages[currentSlideIndex].title}
              </h3>
              <p className="text-white/80 text-lg mb-4">
                {memoryImages[currentSlideIndex].description}
              </p>
              <p className="text-white/60">
                Memory {currentSlideIndex + 1} of {memoryImages.length}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-grid mb-8">
          {memoryImages.map((memory, index) => (
            <div
              key={index}
              className="gallery-item cursor-pointer transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={memory.src}
                alt={memory.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                onClick={() => onImageClick(memory.src)}
                loading="lazy"
              />
              <div className="mt-3 text-center">
                <h3 className="text-white font-semibold">{memory.title}</h3>
                <p className="text-white/70 text-sm">{memory.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center mb-8">
        <p className="text-white/60 text-sm">Made with 💕 by Vivi</p>
      </div>
    </div>
  );
}
