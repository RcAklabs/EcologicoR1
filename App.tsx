import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Company } from './pages/Company';
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { ProductTemplate } from './pages/ProductTemplate';
import { Page, ProductContent } from './types';

// Data Mock for Products
const productFlores: ProductContent = {
  title: "PRODUCCIÓN FLORES",
  subtitle: "Potenciador cromático y vitalidad floral",
  description: "Nuestra fórmula biotecnológica estimula la síntesis de antocianinas y clorofila en ornamentales. Diseñado específicamente para rosas y flores de exportación, garantizando tallos más largos, botones más consistentes y una vida en florero extendida.",
  benefits: ["Mayor intensidad de color", "Tallos más gruesos y resistentes", "Vida post-cosecha extendida"],
  image: "https://picsum.photos/800/600?random=101",
  chartLabel: "Niveles de Clorofila (SPAD)",
  chartData: [
    { name: 'Semana 1', testigo: 30, ecologico: 35, unit: 'SPAD' },
    { name: 'Semana 2', testigo: 35, ecologico: 42, unit: 'SPAD' },
    { name: 'Semana 3', testigo: 38, ecologico: 48, unit: 'SPAD' },
    { name: 'Semana 4', testigo: 40, ecologico: 55, unit: 'SPAD' },
  ]
};

const productRaices: ProductContent = {
  title: "PRODUCCIÓN RAÍCES",
  subtitle: "Bioestimulación radicular profunda",
  description: "Un complejo de enraizamiento basado en auxinas naturales y extractos de algas. Favorece el desarrollo de raíces secundarias y pelos absorbentes, mejorando la eficiencia en la toma de nutrientes del suelo, incluso en condiciones de estrés salino.",
  benefits: ["Aumento de masa radicular", "Mejor absorción de nutrientes", "Resistencia al estrés hídrico"],
  image: "https://picsum.photos/800/600?random=102",
  chartLabel: "Masa Radicular (gramos)",
  chartData: [
    { name: 'Inicio', testigo: 50, ecologico: 55, unit: 'g' },
    { name: 'Día 15', testigo: 80, ecologico: 110, unit: 'g' },
    { name: 'Día 30', testigo: 120, ecologico: 180, unit: 'g' },
    { name: 'Día 45', testigo: 150, ecologico: 260, unit: 'g' },
  ]
};

const productHojas: ProductContent = {
  title: "HOJAS, FRUTOS Y SEMILLAS",
  subtitle: "Maximización de rendimiento y llenado",
  description: "Solución integral para la etapa reproductiva. Promueve el cuajado de frutos, evita la caída prematura y asegura un llenado uniforme gracias al transporte eficiente de potasio y boro a nivel celular.",
  benefits: ["Mayor calibre de fruto", "Incremento en grados Brix", "Uniformidad en la cosecha"],
  image: "https://picsum.photos/800/600?random=103",
  chartLabel: "Producción (kg/ha)",
  chartData: [
    { name: 'Ciclo 1', testigo: 1800, ecologico: 2200, unit: 'kg' },
    { name: 'Ciclo 2', testigo: 1850, ecologico: 2450, unit: 'kg' },
    { name: 'Ciclo 3', testigo: 1900, ecologico: 2800, unit: 'kg' },
    { name: 'Ciclo 4', testigo: 1880, ecologico: 3100, unit: 'kg' },
  ]
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={setCurrentPage} />;
      case Page.COMPANY:
        return <Company />;
      case Page.TESTIMONIALS:
        return <Testimonials />;
      case Page.CONTACT:
        return <Contact />;
      case Page.PROD_FLORES:
        return <ProductTemplate content={productFlores} />;
      case Page.PROD_RAICES:
        return <ProductTemplate content={productRaices} />;
      case Page.PROD_HOJAS:
        return <ProductTemplate content={productHojas} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-gray-800 bg-white">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;