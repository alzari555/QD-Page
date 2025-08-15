
import React from 'react';
import Logo from './Logo';
import metadata from '../metadata.json';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#212121]">
      <div className="container mx-auto px-6 text-center">
        <Logo className="w-24 text-[#993399] mx-auto mb-4" />
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight pb-4">
          ¿Hablamos de tu proyecto?
        </h2>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-400">
          Si tienes una idea en mente o buscas un socio creativo para tu próximo gran proyecto, nos encantaría escucharte. Escríbenos y construyamos juntos el futuro de tu marca.
        </p>
        <a href={`mailto:${metadata.email}`} className="mt-10 inline-block bg-gradient-to-r from-[#993399] to-[#3645a9] text-white font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl shadow-[#993399]/30">
          Contacta con nosotros
        </a>
      </div>
    </section>
  );
};

export default Contact;