import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);

  const navLinkClass = (page: Page) => 
    `cursor-pointer text-sm font-bold tracking-wider hover:text-eco-orange transition-colors ${currentPage === page ? 'text-eco-green' : 'text-gray-600'}`;

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    setIsProductOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNav(Page.HOME)}>
            <div className="w-10 h-10 bg-eco-green rounded-full flex items-center justify-center mr-3 shadow-neon-green">
                <Leaf className="text-eco-neon w-6 h-6" />
            </div>
            <span className="font-display font-black text-2xl text-eco-green tracking-tighter">
              ECOLOGICO
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <span onClick={() => handleNav(Page.HOME)} className={navLinkClass(Page.HOME)}>INICIO</span>
            <span onClick={() => handleNav(Page.COMPANY)} className={navLinkClass(Page.COMPANY)}>EMPRESA</span>
            
            {/* Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center ${currentPage.toString().startsWith('PROD') ? 'text-eco-green' : 'text-gray-600'} hover:text-eco-orange font-bold text-sm tracking-wider`}
                onMouseEnter={() => setIsProductOpen(true)}
                onClick={() => setIsProductOpen(!isProductOpen)}
              >
                PRODUCTOS <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-300 origin-top-left ${isProductOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'}`}
                onMouseLeave={() => setIsProductOpen(false)}
              >
                <div className="py-2">
                  <div onClick={() => handleNav(Page.PROD_FLORES)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-eco-neon/20 hover:text-eco-green cursor-pointer transition-colors border-b border-gray-50">
                    Producción Flores
                  </div>
                  <div onClick={() => handleNav(Page.PROD_RAICES)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-eco-neon/20 hover:text-eco-green cursor-pointer transition-colors border-b border-gray-50">
                    Producción Raíces
                  </div>
                  <div onClick={() => handleNav(Page.PROD_HOJAS)} className="block px-4 py-3 text-sm text-gray-700 hover:bg-eco-neon/20 hover:text-eco-green cursor-pointer transition-colors">
                    Hojas, Frutos y Semillas
                  </div>
                </div>
              </div>
            </div>

            <span onClick={() => handleNav(Page.TESTIMONIALS)} className={navLinkClass(Page.TESTIMONIALS)}>TESTIMONIOS</span>
            <span onClick={() => handleNav(Page.CONTACT)} className={navLinkClass(Page.CONTACT)}>CONTACTO</span>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-eco-green focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full h-screen">
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center pt-10">
            <span onClick={() => handleNav(Page.HOME)} className="block px-3 py-4 rounded-md text-xl font-bold text-gray-700 hover:text-eco-green hover:bg-gray-50">INICIO</span>
            <span onClick={() => handleNav(Page.COMPANY)} className="block px-3 py-4 rounded-md text-xl font-bold text-gray-700 hover:text-eco-green hover:bg-gray-50">EMPRESA</span>
            <div className="w-full text-center bg-gray-50 rounded-xl my-2 py-2">
              <span className="block px-3 py-2 text-sm font-bold text-gray-400 uppercase tracking-widest">Productos</span>
              <span onClick={() => handleNav(Page.PROD_FLORES)} className="block px-3 py-3 text-lg font-medium text-gray-600 hover:text-eco-green">Flores</span>
              <span onClick={() => handleNav(Page.PROD_RAICES)} className="block px-3 py-3 text-lg font-medium text-gray-600 hover:text-eco-green">Raíces</span>
              <span onClick={() => handleNav(Page.PROD_HOJAS)} className="block px-3 py-3 text-lg font-medium text-gray-600 hover:text-eco-green">Frutos y Semillas</span>
            </div>
            <span onClick={() => handleNav(Page.TESTIMONIALS)} className="block px-3 py-4 rounded-md text-xl font-bold text-gray-700 hover:text-eco-green hover:bg-gray-50">TESTIMONIOS</span>
            <span onClick={() => handleNav(Page.CONTACT)} className="block px-3 py-4 rounded-md text-xl font-bold text-gray-700 hover:text-eco-green hover:bg-gray-50">CONTACTO</span>
          </div>
        </div>
      )}
    </nav>
  );
};