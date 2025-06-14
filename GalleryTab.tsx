import { useState, useEffect } from 'react';

interface GalleryTabProps {
  onImageClick: (image: string) => void;
}

import her1 from "@assets/her1_1749884709238.jpeg";
import her2 from "@assets/her2_1749884709238.jpeg";
import her3 from "@assets/her3_1749884709237.jpeg";
import her4 from "@assets/her4_1749884709236.jpeg";
import her5 from "@assets/her5_1749884709236.jpeg";
import her6 from "@assets/her6_1749884709235.jpeg";
import her7 from "@assets/her7_1749884709234.jpeg";
import her8 from "@assets/her8_1749884709234.jpeg";
import her9 from "@assets/her9_1749884709233.jpeg";
import her10 from "@assets/her10_1749884709232.jpeg";
import her11 from "@assets/her11_1749884709232.jpeg";
import her12 from "@assets/her12_1749884709231.jpeg";
import her13 from "@assets/her13_1749884709231.jpeg";
import her14 from "@assets/her14_1749884709230.jpeg";

const galleryImages = [
  {
    src: her1,
    alt: "Beautiful Brooke - Photo 1"
  },
  {
    src: her2,
    alt: "Beautiful Brooke - Photo 2"
  },
  {
    src: her3,
    alt: "Beautiful Brooke - Photo 3"
  },
  {
    src: her4,
    alt: "Beautiful Brooke - Photo 4"
  },
  {
    src: her5,
    alt: "Beautiful Brooke - Photo 5"
  },
  {
    src: her6,
    alt: "Beautiful Brooke - Photo 6"
  },
  {
    src: her7,
    alt: "Beautiful Brooke - Photo 7"
  },
  {
    src: her8,
    alt: "Beautiful Brooke - Photo 8"
  },
  {
    src: her9,
    alt: "Beautiful Brooke - Photo 9"
  },
  {
    src: her10,
    alt: "Beautiful Brooke - Photo 10"
  },
  {
    src: her11,
    alt: "Beautiful Brooke - Photo 11"
  },
  {
    src: her12,
    alt: "Beautiful Brooke - Photo 12"
  },
  {
    src: her13,
    alt: "Beautiful Brooke - Photo 13"
  },
  {
    src: her14,
    alt: "Beautiful Brooke - Photo 14"
  }
];

export default function GalleryTab({ onImageClick }: GalleryTabProps) {
  const [slideshowMode, setSlideshowMode] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (slideshowMode) {
      const interval = setInterval(() => {
        setCurrentSlideIndex((prev) => (prev + 1) % galleryImages.length);
      }, 3000);
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
          Beautiful Brooke Gallery
        </h2>
        <p className="text-xl text-white/80">Every photo tells the story of your beauty</p>
        
        <button
          onClick={toggleSlideshow}
          className="mt-4 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white font-medium hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg border border-white/30"
        >
          {slideshowMode ? (
            <>
              <i className="fas fa-pause mr-2"></i>Stop Slideshow
            </>
          ) : (
            <>
              <i className="fas fa-play mr-2"></i>Start Slideshow
            </>
          )}
        </button>
      </div>
      
      {slideshowMode ? (
        <div className="relative mb-8">
          <div className="slideshow-container bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <img
              src={galleryImages[currentSlideIndex].src}
              alt={galleryImages[currentSlideIndex].alt}
              className="w-full max-h-96 object-contain rounded-xl mx-auto"
              onClick={() => onImageClick(galleryImages[currentSlideIndex].src)}
            />
            <div className="text-center mt-4">
              <p className="text-white/80 text-lg">
                {currentSlideIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="gallery-grid mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => onImageClick(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
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
