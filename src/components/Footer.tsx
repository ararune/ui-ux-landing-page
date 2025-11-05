// src/components/Footer.tsx
import SocialIcons from './SocialIcons';

const Footer = () => {
  return (
    <footer className="bg-[#18181b] text-gray-500 py-10 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        
        <p className="mb-4 sm:mb-0 text-sm">
          &copy; {new Date().getFullYear()} Heartwood. Sva Prava Zadržana.
        </p>

        <SocialIcons colorClass="text-gray-400" sizeClass="w-8 h-8" />
      </div>
    </footer>
  );
};

export default Footer;