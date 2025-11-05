// src/components/ImageModal.tsx (Corrected)
import React from 'react';
import type { GalleryImage } from '../constants'; 
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ImageModalProps {
  images: GalleryImage[];
  selectedIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ images, selectedIndex, onClose, onNext, onPrev }) => {
  const currentImage = images[selectedIndex];

  if (!currentImage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4" onClick={onClose}>
      
      <div className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white z-10 p-2 rounded-full bg-gray-700 hover:bg-purple-500 transition-colors"
          aria-label="Zatvori galeriju"
        >
          <FiX className="w-6 h-6" />
        </button>

        <button 
          onClick={onPrev} 
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-700 hover:bg-purple-500 transition-colors z-10"
          aria-label="Prethodna slika"
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={onNext} 
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-3 rounded-full bg-gray-700 hover:bg-purple-500 transition-colors z-10"
          aria-label="Sljedeća slika"
        >
          <FiChevronRight className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="bg-[#18181b] p-6 rounded-lg shadow-2xl flex flex-col items-center">
          <img
            src={currentImage.src} 
            alt={currentImage.alt}
            className="max-w-full max-h-[70vh] object-contain rounded-md"
          />
          <div className="mt-4 text-center">
            <h3 className="text-2xl font-semibold text-purple-400">{currentImage.title}</h3>
            <p className="text-gray-400 mt-1">{currentImage.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ImageModal;