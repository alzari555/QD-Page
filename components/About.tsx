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
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Del Concepto a la Realidad</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
            Somos un colectivo de diseñadores, artistas y estrategas con una misión: construir marcas que dejan huella. Combinamos una estética cuidada con un pensamiento estratégico para crear diseños que no solo impresionan, sino que también generan resultados.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon={<Brush size={32} />} 
            title="Branding e Identidad"
            description="Creamos logos, paletas de colores y sistemas visuales que conectan con tu audiencia y cuentan una historia única."
          />
          <ServiceCard 
            icon={<Code size={32} />}
            title="Diseño UI/UX"
            description="Diseñamos interfaces digitales intuitivas y atractivas para web y móvil, pensadas siempre para el usuario."
          />
          <ServiceCard 
            icon={<PrinterIcon size={32} />}
            title="Diseño Editorial"
            description="Maquetamos y diseñamos para todo tipo de soportes, desde tarjetas de visita hasta lonas y cartelería de gran formato."
          />
          <ServiceCard 
            icon={<MapPin size={32} />}
            title="3D y FOOH (Fake Out Of Home)"
            description="Rompemos la barrera de lo digital. Integramos tu marca en el mundo real con campañas 3D y de publicidad exterior simulada, diseñadas para un impacto viral."
          />
        </div>
      </div>
    </section>
  );
};

export default About;