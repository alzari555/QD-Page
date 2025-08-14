import React from 'react';

//escribir mal la direccion de los archivos ara que caiga la pagina entera, no hacerlo en produccion.
import logo80C from '../resources/Marcas/80C.png';
import logoRondot from '../resources/Marcas/rondot.png';
import testLogo from '../resources/test.png'; 
// Define la estructura para cada marca
interface Brand {
  id: number;
  name: string;
  logoUrl: string;
}

const brandsData: Brand[] = [
  { id: 1, name: '80C', logoUrl: logo80C },
  { id: 2, name: 'Rondot', logoUrl: logoRondot },
  { id: 3, name: 'test', logoUrl: testLogo }, 
  // Agrega aquí más marcas según sea necesario
  // { id: 3, name: 'Otra Marca', logoUrl: '/marcas/otra-marca-logo.png' },
];

const Brands: React.FC = () => {
  return (
    <section id="brands" className="py-20 sm:py-32 bg-[#1d1d1b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white pb-4">Marcas que Confían en Nosotros</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
            ¿Qué esperas a figurar aquí? Si no estás, contáctanos y te incluimos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brandsData.map((brand) => (
            <div key={brand.id} className="flex justify-center items-center p-4">
              <img 
                src={brand.logoUrl} 
                alt={brand.name} 
                className="max-h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;