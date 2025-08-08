
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Samsung Demo', category: 'Animación 3D', videoId: '1101316855' },
  { id: 2, title: 'Moda Holográfica', category: 'Indumentaria de Realidad Aumentada', videoId: '1108539994' },
  { id: 3, title: 'Branca Unico', category: 'Publicorto 3D no oficial', videoId: '1108564412' },
  { id: 4, title: 'UI Orbital', category: 'Diseño UI/UX', videoId: '76979871' },
  { id: 5, title: 'Delta OS', category: 'UX/UI y Branding', videoId: '1108560501' },
  { id: 6, title: 'Rondot', category: 'Diseño Editorial', videoId: '1108549611' },
];

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]">
    <iframe 
      src={`https://player.vimeo.com/video/${project.videoId}?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0`}
      className="absolute top-1/2 left-1/2 w-[135%] h-[135%] -translate-x-1/2 -translate-y-1/2 transform group-hover:scale-110 transition-transform duration-500"
      allow="autoplay; fullscreen; picture-in-picture"
    ></iframe>
    <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-t from-[#1d1d1b] via-transparent to-transparent transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
      <h3 className="text-2xl font-bold text-white pb-8">{project.title}</h3>
      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{project.category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#212121]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white pb-4">Nuestros Proyectos Destacados</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-400">
            Nos apasiona transformar ideas en realidad. Echa un vistazo a algunos de nuestros trabajos más recientes y descubre cómo hemos ayudado a otras marcas a brillar.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
