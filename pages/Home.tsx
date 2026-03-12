import React from 'react';
import { Page } from '../types';
import { Button } from '../components/Button';
import { ArrowRight, Activity, Sprout, Sun } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Agriculture Field" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
          <div className="absolute inset-0 bg-tech-grid opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-eco-neon/30 border border-eco-neon text-eco-green font-bold text-sm tracking-wider animate-pulse">
            TECNOLOGÍA ECOLÓGICA AVANZADA
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-gray-900 mb-6 tracking-tight leading-tight">
            EL FUTURO DE LA <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-green to-lime-500">AGRICULTURA</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Optimizamos cultivos en Guayaquil con biotecnología sostenible. 
            Mayor rendimiento, menor impacto ambiental.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={() => onNavigate(Page.PROD_HOJAS)}>
              Explorar Soluciones <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" onClick={() => onNavigate(Page.CONTACT)}>
              Contáctanos
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Activity className="w-8 h-8 text-eco-orange" />,
                title: "Rendimiento Superior",
                desc: "Incrementa tu producción hasta un 40% con nuestros bioestimulantes."
              },
              {
                icon: <Sprout className="w-8 h-8 text-eco-green" />,
                title: "100% Ecológico",
                desc: "Productos certificados que respetan la biodiversidad de tu suelo."
              },
              {
                icon: <Sun className="w-8 h-8 text-eco-neon" />,
                title: "Innovación Tech",
                desc: "Análisis de datos y fórmulas avanzadas para agricultura de precisión."
              }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-8 rounded-2xl border border-gray-100 hover:shadow-neon-green transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Strip */}
      <section className="bg-eco-green py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-eco-neon opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-display font-bold text-white mb-2">¿Listo para innovar tu cultivo?</h2>
            <p className="text-eco-neon font-medium">Agenda una visita técnica hoy mismo.</p>
          </div>
          <Button variant="primary" onClick={() => onNavigate(Page.CONTACT)} className="bg-white text-eco-green hover:bg-gray-100 shadow-none">
            Hablar con un Asesor
          </Button>
        </div>
      </section>
    </div>
  );
};