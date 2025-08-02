
import React from 'react';


const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#212121]">
      <div className="container mx-auto px-6 text-center">
        <img src="../resources/logo web purpura.svg" alt="QD Logo" className="w-24 text-[#993399] mx-auto mb-4" />
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
          Vamos a crear algo
          <br />
          <span className="gradient-text">increíble juntos.</span>
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
          ¿Tienes un proyecto en mente? Estamos listos para escuchar. Contáctanos y déjanos saber cómo podemos ayudarte a construir el futuro de nuestra marca.
        </p>
        <a href="mailto:hello@qdstudio.com" className="mt-10 inline-block bg-gradient-to-r from-[#993399] to-[#3645a9] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl shadow-[#993399]/30">
          Iniciar una conversación
        </a>
      </div>
    </section>
  );
};

export default Contact;
