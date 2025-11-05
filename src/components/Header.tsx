// src/components/Header.tsx (Final Responsive Version)
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import SocialIcons from './SocialIcons';

interface HeaderProps {
    primaryGlow: string;
    viteButton: string;
}

const Header: React.FC<HeaderProps> = ({ primaryGlow, viteButton }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'O Nama', href: '#o-nama' },
        { name: 'Galerija', href: '#galerija' },
        { name: 'Kontakt', href: '#kontakt' },
    ];

    const handleNavLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-40 w-full bg-[#18181b] border-b border-gray-800 backdrop-blur-md bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                
                {/* Site Title / Logo */}
                <a href="#home" className="text-3xl font-extrabold tracking-wider" aria-label="Heartwood Naslovna">
                    <span className={primaryGlow}>Heartwood</span>
                </a>

                {/* 1. Desktop Navigation */}
                <nav className="hidden md:flex space-x-6 items-center text-sm" aria-label="Glavna navigacija">
                    
                    {/* Social Icons */}
                    <SocialIcons colorClass="text-gray-400 hover:text-white" sizeClass="w-6 h-6" />

                    {/* Desktop Nav Links */}
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="font-medium text-gray-400 hover:text-white transition-colors py-2"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* 2. Mobile/Tablet Controls */}
                <div className="md:hidden flex items-center space-x-4">
                    {/* Social Links */}
                    <SocialIcons colorClass="text-gray-400" sizeClass="w-6 h-6" />

                    {/* Hamburger Button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-gray-400 hover:text-white focus:outline-none p-1 rounded transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <FiX className="w-7 h-7" /> : <FiMenu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* 3. Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden bg-[#18181b] shadow-xl border-t border-gray-800 transition-all duration-300 ease-in-out">
                    <nav className="flex flex-col space-y-2 py-4 px-4 text-sm font-medium">
                        {/* Nav Links */}
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.href} 
                                onClick={handleNavLinkClick}
                                className="block px-3 py-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;