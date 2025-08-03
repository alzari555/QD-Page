
import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  { id: 1, title: 'Sueños Cibernéticos', category: 'Diseño de Camisetas', imageUrl: 'https://picsum.photos/seed/project1/800/600' },
  { id: 2, title: 'Suela Futura', category: 'Diseño de Producto', imageUrl: 'https://picsum.photos/seed/project2/800/600' },
  { id: 3, title: 'Brandverso', category: 'Redes Sociales', imageUrl: 'https://picsum.photos/seed/project3/800/600' },
  { id: 4, title: 'UI Orbital', category: 'Diseño UI/UX', imageUrl: 'https://picsum.photos/seed/project4/800/600' },
  { id: 5, title: 'Patineta de Neón', category: 'Modelado 3D', imageUrl: 'https://picsum.photos/seed/project5/800/600' },
  { id: 6, title: 'Identidad Corporativa', category: 'Branding', imageUrl: 'https://picsum.photos/seed/project6/800/600' },
];

const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
    <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black/40 group-hover:bg-gradient-to-t from-[#1d1d1b] via-transparent to-transparent transition-all duration-300"></div>
    <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
      <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">{project.category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-[#212121]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white">Nuestros Proyectos Destacados</h2>
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
