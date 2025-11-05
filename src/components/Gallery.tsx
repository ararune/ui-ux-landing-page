// src/components/Gallery.tsx (Modern, Story-Like Zig-Zag Layout)

import React, { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi'; 
import ImageModal from './ImageModal'; 
import { GALLERY_IMAGES } from '../constants'; 

interface GalleryProps {
    primaryGlow: string;
    viteCard: string;
}

const Gallery: React.FC<GalleryProps> = ({ primaryGlow, viteCard }) => {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
    };

    // Modal navigation logic remains the same
    const showNextImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % GALLERY_IMAGES.length);
        }
    };

    const showPrevImage = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
        }
    };

    return (
        <section id="galerija" className="py-20 px-4 bg-[#111113] scroll-mt-20"> 
            <div className="max-w-7xl mx-auto relative">
                
                <div className="text-center mb-20">
                    <h2 className={`text-base font-semibold tracking-wide uppercase ${primaryGlow}`}>Naši Radovi</h2>
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                        Galerija Inspiracije
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-400 lg:mx-auto">
                        Istražite izbor naših dovršenih projekata i zamislite mogućnosti za vlastiti prostor.
                    </p>
                </div>
                
                <div className="space-y-24">
                    {GALLERY_IMAGES.map((image, index) => {
                        const isReversed = index % 2 !== 0; 
                        
                        return (
                            <div 
                                key={image.id} 
                                className={`flex flex-col md:flex-row items-center gap-10 lg:gap-16 ${isReversed ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* === 1. IMAGE CONTAINER === */}
                                <div 
                                    className={`w-full md:w-5/12 relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl ${viteCard} p-0 group cursor-pointer`}
                                    onClick={() => openModal(index)} 
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
                                    />
                                    {/* Hover Indicator */}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                                        <FiZoomIn className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>

                                {/* === 2. LEGEND / TEXT BLOCK === */}
                                <div 
                                    className={`w-full md:w-7/12 p-4 sm:p-0 ${isReversed ? 'md:text-right' : 'md:text-left'}`}
                                >
                                    {/* Title */}
                                    <h3 className="text-4xl sm:text-5xl font-extrabold mb-3 text-white">
                                        {image.title}
                                    </h3>
                                    
                                    {/* Description*/}
                                    <p className="text-lg text-gray-400 mt-4 md:mt-6 max-w-lg">
                                        {image.description}
                                    </p>

                                    <div 
                                        className={`w-32 h-0.5 mt-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent ${isReversed ? 'md:ml-auto' : 'md:mr-auto'}`}
                                    />

                                    <button 
                                        onClick={() => openModal(index)} 
                                        className={`mt-6 inline-flex items-center text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors ${isReversed ? 'md:float-right' : 'md:float-left'}`}
                                    >
                                        Pogledajte detaljnije 
                                        <FiZoomIn className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Image Modal */}
                {selectedImageIndex !== null && (
                    <ImageModal
                        images={GALLERY_IMAGES}
                        selectedIndex={selectedImageIndex}
                        onClose={closeModal}
                        onNext={showNextImage}
                        onPrev={showPrevImage}
                    />
                )}
            </div>
            {/* The full-width bottom border is no longer needed/wanted */}
        </section>
    );
};

export default Gallery;