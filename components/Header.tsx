
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1d1d1b]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-white hover:text-[#993399] transition-colors duration-300">Sobre Nosotros</a>
          <a href="#portfolio" className="text-white hover:text-[#993399] transition-colors duration-300">Portafolio</a>
          <a href="#contact" className="text-white hover:text-[#993399] transition-colors duration-300">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
