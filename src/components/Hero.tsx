// src/components/Hero.tsx
import React from 'react';
// We can use a generic document/image icon from react-icons/fa
import { FaImage } from 'react-icons/fa'; // Assuming you want an icon for "Gallery"

interface HeroProps {
    primaryGlow: string;
    viteButton: string;
}

const Hero: React.FC<HeroProps> = ({ primaryGlow, viteButton }) => {
  return (
    <section id="home" className="pt-20 pb-32 px-4 relative overflow-hidden bg-gradient-to-b from-[#111113] to-[#18181b]">
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-6">
          <span className={primaryGlow}>Kvaliteta U Srcu</span>
          <br />
          <span className="text-white">Drveta</span>
        </h1>
        <p className="text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
          Precizna izrada namještaja i stolarije po mjeri. Spajamo tradicionalnu vještinu i moderni dizajn za vaš dom.
        </p>
        
        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
            <a 
              href="#kontakt" 
              className={`${viteButton} bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-purple-500/30`}
            >
              Započnite Projekt
            </a>
            <a 
              href="#galerija" 
              className={`${viteButton} bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600 shadow-lg shadow-gray-900/40 flex items-center justify-center space-x-2`}
            >
              <FaImage className="w-5 h-5" />
              <span>Pregledajte Galeriju</span>
            </a>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>
    </section>
    
  );
};

export default Hero;