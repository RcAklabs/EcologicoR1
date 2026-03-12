import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Ing. Roberto Galarza",
      role: "Gerente Agrícola, Bananera Noboa",
      text: "La implementación de la línea 'Raíces' de Ecologico incrementó nuestra masa radicular en un 35% en solo dos ciclos. La tecnología que usan es impresionante.",
      image: "https://picsum.photos/100/100?random=20"
    },
    {
      name: "María Fernanda Lopez",
      role: "Productora de Flores, Cotopaxi",
      text: "Buscábamos una solución que mejorara el color sin usar químicos agresivos. El producto para flores superó nuestras expectativas con un brillo inigualable.",
      image: "https://picsum.photos/100/100?random=21"
    },
    {
      name: "Carlos Vera",
      role: "Asociación Arrocera del Guayas",
      text: "El soporte técnico y la calidad de los bioestimulantes de Ecologico han sido clave para enfrentar los cambios climáticos de este año.",
      image: "https://picsum.photos/100/100?random=22"
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-display font-black text-center text-gray-900 mb-16">
          HISTORIAS DE <span className="text-eco-green">ÉXITO</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-eco-neon transition-all duration-300 hover:-translate-y-2">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-eco-neon/50" />
              
              <div className="flex items-center mb-6">
                <img src={review.image} alt={review.name} className="w-14 h-14 rounded-full border-2 border-eco-orange p-1 object-cover" />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-eco-green font-bold uppercase">{review.role}</p>
                </div>
              </div>
              
              <p className="text-gray-600 italic leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};