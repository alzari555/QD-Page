import React from 'react';
import { Brush, Code, Box, Smile, MapIcon, MapPin, PrinterCheck, PrinterIcon } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode, title: string, description: string }> = ({ icon, title, description }) => (
  <div className="bg-[#2a2a2a]/50 p-6 rounded-xl border border-gray-700/50 hover:border-[#993399] hover:scale-105 transition-all duration-300">
    <div className="text-[#993399] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#1d1d1b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Del Concepto a la Creación</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
            QD Studio es un colectivo de diseñadores, artistas y estrategas apasionados por construir marcas inolvidables. Fusionamos la visión estética con el pensamiento estratégico para ofrecer diseños que no solo se ven bien, sino que funcionan excepcionalmente.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<Brush size={32} />} 
            title="Branding e Identidad"
            description="Creando logos memorables, paletas de colores y sistemas visuales que cuentan nuestra historia única."
          />
          <ServiceCard 
            icon={<Code size={32} />}
            title="Diseño UI/UX"
            description="Diseñando interfaces digitales intuitivas, atractivas y hermosas para aplicaciones web y móviles."
          />
          <ServiceCard 
            icon={<PrinterIcon size={32} />}
            title="diseño editorial"
            description="Creando diseños para toda clase de soportes desde tarjetas hasta lonas y pasacalles."
          />
          <ServiceCard 
            icon={<MapPin size={32} />}
            title="3D y Fooh"
            description="llevando al terreno de la realidad la integracion de marca en campañas de imapacto viral y publicitario."
          />
        </div>
      </div>
    </section>
  );
};

export default About;