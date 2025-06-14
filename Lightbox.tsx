import { useEffect } from 'react';

interface LightboxProps {
  image: string;
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/90 lightbox flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-gray-300 transition-colors"
        >
          <i className="fas fa-times"></i>
        </button>
        <img
          src={image}
          alt="Gallery image"
          className="max-w-full max-h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
}
