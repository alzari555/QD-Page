
import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Socials: React.FC = () => {
  return (
    <section className="pt-12 pb-12 sm:pb-12 bg-[#1d1d1b]">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#993399] to-[#3645a9] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl shadow-[#993399]/30 inline-flex items-center">
            <Linkedin className="mr-2" /> LinkedIn
          </a>
          <a href="https://www.instagram.com/qdstudio.ok/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#993399] to-[#3645a9] text-white font-bold py-3 px-8 rounded-full hover:scale-105 transition-transform duration-300 text-lg shadow-2xl shadow-[#993399]/30 inline-flex items-center">
            <Instagram className="mr-2" /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
