// src/components/AboutUs.tsx

import React from 'react';
import { FaDraftingCompass, FaGem, FaHandshake } from 'react-icons/fa'; 

interface AboutUsProps {
    primaryGlow: string;
    viteCard: string;
}

const Feature: React.FC<{ icon: React.ReactElement<{ className?: string }>; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center p-4"> 
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30">
                <span className="h-6 w-6 flex items-center justify-center">
                    {React.cloneElement(icon, { className: "h-6 w-6" })}
                </span>
            </div>
        </div>
        <div className="mt-6">
            <h3 className="text-xl leading-6 font-semibold text-white">{title}</h3>
            <p className="mt-2 text-base text-gray-400">{children}</p>
        </div>
    </div>
);


const AboutUs: React.FC<AboutUsProps> = ({ primaryGlow, viteCard }) => {
    return (
        <section id="o-nama" className="py-20 px-4 bg-[#111113] relative scroll-mt-20"> 
            <div className="max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className={`text-base font-semibold tracking-wide uppercase ${primaryGlow}`}>Naša Filozofija</h2>
                    <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-white sm:text-5xl">
                        Gdje se Dizajn Susreće s Kvalitetom
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-400 lg:mx-auto">
                        U Heartwoodu vjerujemo da vaš prostor treba biti i lijep i funkcionalan. Spajamo tradicionalne tehnike obrade drva s modernim inovacijama kako bismo stvorili namještaj koji traje cijeli život.
                    </p>
                </div>

                <div className={`mt-12 ${viteCard} p-12`}> 
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
                        
                        <Feature
                            icon={<FaDraftingCompass />}
                            title="Majstorska Izrada"
                        >
                            Svaki komad je pedantno ručno izrađen od strane naših vještih majstora, osiguravajući neusporedivu pažnju prema detaljima i kvaliteti.
                        </Feature>
                        
                        <Feature
                            icon={<FaGem />}
                            title="Vrhunski Materijali"
                        >
                            Koristimo samo najfinija, održivo dobivena drva i vrhunski okov kako bismo zajamčili dugovječnost i besprijekoran završni izgled.
                        </Feature>
                        
                        <Feature
                            icon={<FaHandshake />}
                            title="Suradnički Dizajn"
                        >
                            Vaša vizija je naš nacrt. Usko surađujemo s vama i vašim dizajnerom kako bismo stvorili prilagođena rješenja koja savršeno odgovaraju vašem stilu života.
                        </Feature>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </section>
    );
};

export default AboutUs;