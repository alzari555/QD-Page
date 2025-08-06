
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1b] border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {currentYear} QD Creative Studio. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">cocinado con amor y desesperación por alzari555-github.</p>
      </div>
    </footer>
  );
};

export default Footer;
