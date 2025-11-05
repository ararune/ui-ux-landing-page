// src/constants.ts
// Define the structure for navigation links
export interface NavLink {
    href: string;
    label: string;
}

// Define the structure for gallery images
export interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
}

// Navigation links
export const NAV_LINKS: NavLink[] = [
    { href: '#o-nama', label: 'O nama' },
    { href: '#galerija', label: 'Galerija' },
    { href: '#kontakt', label: 'Kontakt' },
];

// Import local images 
import img1 from './assets/images/Gemini_Generated_Image_cho2a3cho2a3cho2.png';
import img2 from './assets/images/Gemini_Generated_Image_fg0m1nfg0m1nfg0m.png';
import img3 from './assets/images/Gemini_Generated_Image_hwwg5ihwwg5ihwwg.png';
import img4 from './assets/images/Gemini_Generated_Image_lryh2clryh2clryh.png';
import img5 from './assets/images/Gemini_Generated_Image_pndhyapndhyapndh.png';
import img6 from './assets/images/Gemini_Generated_Image_rmmmvqrmmmvqrmmm.png';
import img7 from './assets/images/Gemini_Generated_Image_u5yk1pu5yk1pu5yk.png';
import img8 from './assets/images/Gemini_Generated_Image_vku7dhvku7dhvku7.png';

// Gallery images using imported modules
export const GALLERY_IMAGES: GalleryImage[] = [
    {
        id: 1,
        src: img1,
        alt: 'Moderna minimalistička kuhinja po mjeri s tamnim drvenim elementima.',
        title: 'Minimalistički Tamni Hrast',
        description: 'Elegantna kuhinja s tamnim hrastovim elementima bez ručkica i mramornim otokom.',
    },
    {
        id: 2,
        src: img2,
        alt: 'Luksuzan kupaonski namještaj po mjeri s lebdećim umivaonikom od oraha.',
        title: 'Lebdeći Orahov Umivaonik',
        description: 'Ova kupaonica ponosi se prilagođenim lebdećim umivaonikom od oraha s dva lavaboa.',
    },
    {
        id: 3,
        src: img3,
        alt: 'Prostrana garderoba po mjeri s ugradbenim ormarima i prilagođenim policama.',
        title: 'Garderoba po Mjeri',
        description: 'Rješenja za pohranu po mjeri za savršeno organiziranu garderobu.',
    },
    {
        id: 4,
        src: img4,
        alt: 'Svijetla kuhinja po mjeri s klasičnim bijelim shaker elementima.',
        title: 'Klasični Bijeli Shaker',
        description: 'Vječni bijeli shaker elementi osvjetljavaju ovu kuhinju otvorenog koncepta.',
    },
    {
        id: 5,
        src: img5,
        alt: 'Dnevni boravak s ugradbenim medijskim centrom po mjeri, elegantno rješenje za pohranu.',
        title: 'Integrirana Medijska Jedinica',
        description: 'Prilagođeno izrađena medijska jedinica koja besprijekorno integrira tehnologiju i pohranu.',
    },
    {
        id: 6,
        src: img6,
        alt: 'Kuhinja po mjeri u industrijskom stilu s metalnim i drvenim elementima, jedinstven dizajn.',
        title: 'Industrijska Loft Kuhinja',
        description: 'Odvažan izričaj s obnovljenim drvom i sirovim metalnim završecima elemenata.',
    },
    {
        id: 7,
        src: img7,
        alt: 'Kućni ured po mjeri s ugradbenim policama za knjige od poda do stropa.',
        title: 'Elegantan Kućni Ured',
        description: 'Police za knjige od poda do stropa pružaju obilje prostora za pohranu i sofisticiran izgled.',
    },
    {
        id: 8,
        src: img8,
        alt: 'Organizirana smočnica s pametnim rješenjima za pohranu po mjeri i izvlačnim ladicama.',
        title: 'Pametna Pohrana u Smočnici',
        description: 'Maksimalno iskoristite svoj prostor s pametnim i dostupnim rješenjima za organizaciju smočnice.',
    },
];