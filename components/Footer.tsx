import React from 'react';
import { Twitter, Linkedin, Facebook, Leaf } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-eco-dark text-white py-12 border-t-4 border-eco-green">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
             <div className="w-8 h-8 bg-eco-green rounded-full flex items-center justify-center mr-3">
                <Leaf className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider">ECOLOGICO</span>
          </div>
          
          <div className="flex space-x-6">
            <span onClick={() => onNavigate(Page.HOME)} className="cursor-pointer text-gray-400 hover:text-eco-neon transition-colors text-sm">Inicio</span>
            <span onClick={() => onNavigate(Page.COMPANY)} className="cursor-pointer text-gray-400 hover:text-eco-neon transition-colors text-sm">Empresa</span>
            <span onClick={() => onNavigate(Page.CONTACT)} className="cursor-pointer text-gray-400 hover:text-eco-neon transition-colors text-sm">Contacto</span>
          </div>

          <div className="flex space-x-4 mt-6 md:mt-0">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-eco-orange transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-eco-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-eco-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Ecologico S.A. Guayaquil, Ecuador.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};