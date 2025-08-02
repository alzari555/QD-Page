
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  { id: 1, quote: 'QD Studio transformó por completo nuestra marca. Su creatividad está por las nubes y los resultados hablan por sí solos. ¡Un absoluto placer trabajar con ellos!', name: 'Alex Johnson', company: 'CEO, FutureTech' },
  { id: 2, quote: 'El nivel de detalle y profesionalismo del equipo de QD fue excepcional. Escucharon nuestra visión y entregaron un producto que superó todas las expectativas.', name: 'Samantha Lee', company: 'Directora de Marketing, Innovate Co.' },
  { id: 3, quote: 'Si quieres un diseño que sea a la vez bonito y funcional, no busques más. QD Studio es nuestro socio de referencia para todo lo creativo.', name: 'David Chen', company: 'Fundador, Startup Hub' },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[#1d1d1b]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black gradient-text">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
            Estamos orgullosos de construir relaciones sólidas y entregar un trabajo que inspira.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#2a2a2a]/50 p-8 rounded-xl border border-gray-700/50 flex flex-col">
              <p className="text-gray-300 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-[#993399]">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
