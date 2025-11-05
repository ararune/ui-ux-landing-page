// src/components/SocialIcons.tsx
import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaPinterest } from 'react-icons/fa'; 

interface SocialIconsProps {
    colorClass?: string;
    sizeClass?: string; 
}

const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/HeartwoodCroatia', label: 'Facebook' },
    { icon: FiInstagram, href: 'https://www.instagram.com/HeartwoodCroatia', label: 'Instagram' },
    { icon: FaPinterest, href: 'https://www.pinterest.com/HeartwoodCroatia', label: 'Pinterest' }, 
];
const SocialIcons: React.FC<SocialIconsProps> = ({ colorClass = 'text-gray-400', sizeClass = 'w-6 h-6' }) => {

    const iconBaseClasses = `p-2 rounded-full border border-transparent transition-all duration-300 ${colorClass}`;
    

    const iconHoverClasses = `
        hover:border-purple-500 
        hover:bg-purple-900/20 
        hover:text-purple-400 
        hover:scale-110
    `;

    return (
        <div className="flex items-center space-x-2">
            {socialLinks.map((link) => {
                const IconComponent = link.icon; 
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className={`${iconBaseClasses} ${iconHoverClasses}`}
                    >
                        <IconComponent className={sizeClass} />
                    </a>
                );
            })}
        </div>
    );
};

export default SocialIcons;