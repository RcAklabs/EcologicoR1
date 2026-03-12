import React from 'react';

export const Company: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-grid pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-6">NUESTRA IDENTIDAD</h1>
          <div className="w-24 h-1 bg-eco-orange mx-auto rounded-full shadow-neon-orange"></div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-eco-green to-eco-neon opacity-30 blur-lg rounded-3xl"></div>
            <img 
              src="https://picsum.photos/800/600?random=10" 
              alt="Lab Research" 
              className="relative rounded-2xl shadow-2xl z-10 border border-white/50"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-eco-green mb-6">Innovación desde Guayaquil</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Ecologico nació con una misión clara: transformar la agricultura ecuatoriana mediante la tecnología y el respeto por la naturaleza. No somos solo distribuidores; somos científicos y agrónomos comprometidos con la eficiencia.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Utilizamos procesos de extracción molecular avanzada para crear productos que potencian la genética natural de las plantas sin agotar el suelo.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Años de Innovación", val: "15+" },
            { label: "Hectáreas Tratadas", val: "50k+" },
            { label: "Productos Registrados", val: "24" },
            { label: "Clientes Satisfechos", val: "100%" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center hover:border-eco-neon transition-colors">
              <div className="text-4xl font-black text-eco-green mb-2">{stat.val}</div>
              <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};