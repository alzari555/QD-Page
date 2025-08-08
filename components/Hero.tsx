
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-[#1d1d1b]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d1d1b] via-[#1d1d1b] to-[#993399]/20"></div>
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-transparent to-[#3645a9]/10 transform skew-x-12 -translate-x-1/4"></div>
      <div className="relative z-10 flex flex-col items-center px-6">
        <Logo className="w-64 md:w-96 text-[#993399] animate-pulse-slow" />
        <h2 className="text-2xl md:text-4xl font-bold tracking-[0.2em] text-white uppercase mt-4 pb-2">
          Estudio Creativo
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300">
          Damos vida a tu marca con identidades visuales de impacto y experiencias digitales que enamoran.
        </p>
        <a href="#portfolio" className="mt-10 bg-gradient-to-r from-[#993399] to-[#3645a9] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl shadow-[#993399]/30">
          Conoce nuestros proyectos
        </a>
      </div>
    </section>
  );
};

export default Hero;
