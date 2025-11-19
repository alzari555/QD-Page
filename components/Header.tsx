
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

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('data-target');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#1d1d1b]/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <nav className="hidden md:flex space-x-8">
          <a data-target="#about" onClick={handleSmoothScroll} className="text-white hover:text-[#993399] transition-colors duration-300 cursor-pointer">Sobre Nosotros</a>
          <a data-target="#portfolio" onClick={handleSmoothScroll} className="text-white hover:text-[#993399] transition-colors duration-300 cursor-pointer">Portafolio</a>
          <a data-target="#contact" onClick={handleSmoothScroll} className="text-white hover:text-[#993399] transition-colors duration-300 cursor-pointer">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
