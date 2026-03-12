import React from 'react';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-grid pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="space-y-8">
            <h1 className="text-5xl font-display font-black text-gray-900">CONECTA CON EL <br/><span className="text-eco-green">FUTURO</span></h1>
            <p className="text-xl text-gray-500">Estamos listos para llevar tu cultivo al siguiente nivel tecnológico.</p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100">
                  <Mail className="text-eco-orange w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase">Email</p>
                  <p className="text-lg font-bold text-gray-800">info@ecologico.ec</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100">
                  <Phone className="text-eco-orange w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase">Teléfono</p>
                  <p className="text-lg font-bold text-gray-800">+593 4 212 3456</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center border border-gray-100">
                  <MapPin className="text-eco-orange w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-bold uppercase">Oficina</p>
                  <p className="text-lg font-bold text-gray-800">Av. Las Américas, Guayaquil, Ecuador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-gray-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-eco-neon focus:ring-2 focus:ring-eco-neon/50 outline-none transition-all" placeholder="Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Empresa</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-eco-neon focus:ring-2 focus:ring-eco-neon/50 outline-none transition-all" placeholder="Agro S.A." />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-eco-neon focus:ring-2 focus:ring-eco-neon/50 outline-none transition-all" placeholder="juan@empresa.com" />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-eco-neon focus:ring-2 focus:ring-eco-neon/50 outline-none transition-all" placeholder="Me interesa saber más sobre..."></textarea>
              </div>

              <Button className="w-full text-lg shadow-neon-orange" onClick={() => alert("Mensaje enviado (Demo)")}>
                Enviar Mensaje
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};