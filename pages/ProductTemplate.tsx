import React from 'react';
import { ProductContent } from '../types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckCircle } from 'lucide-react';

interface ProductTemplateProps {
  content: ProductContent;
}

export const ProductTemplate: React.FC<ProductTemplateProps> = ({ content }) => {
  return (
    <div className="min-h-screen bg-tech-grid pt-24 pb-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span className="text-eco-orange font-bold tracking-widest uppercase text-sm mb-2 block">Soluciones Agrícolas</span>
          <h1 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4">{content.title}</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Image & Description */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
              <div className="absolute inset-0 bg-eco-green/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img 
                src={content.image} 
                alt={content.title} 
                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-eco-green mb-4">Análisis Técnico</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {content.description}
              </p>
              <div className="space-y-3">
                {content.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-eco-neon fill-eco-green mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Data Visualization */}
          <div className="glass-card p-8 rounded-2xl border border-gray-200 shadow-neon-green relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-eco-neon/20 rounded-bl-full -mr-16 -mt-16 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Rendimiento Comparativo</h3>
              <p className="text-sm text-gray-500 mb-8">Datos validados en campo vs. cultivos estándar (Testigo)</p>
              
              <div className="h-96 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={content.chartData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="name" 
                      tick={{fill: '#6b7280', fontSize: 12}} 
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      tick={{fill: '#6b7280', fontSize: 12}} 
                      axisLine={false}
                      tickLine={false}
                      label={{ value: content.chartLabel, angle: -90, position: 'insideLeft', fill: '#9ca3af', fontSize: 12 }}
                    />
                    <Tooltip 
                      cursor={{fill: 'transparent'}}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                    />
                    <Legend iconType="circle" />
                    <Bar name="Testigo (Control)" dataKey="testigo" fill="#9ca3af" radius={[4, 4, 0, 0]} barSize={40} />
                    <Bar name="Con Ecologico" dataKey="ecologico" fill="#406324" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-500">Mejora Promedio</span>
                  <span className="text-3xl font-black text-eco-green">
                    +{(
                      (content.chartData.reduce((acc, curr) => acc + (curr.ecologico - curr.testigo) / curr.testigo, 0) / content.chartData.length) * 100
                    ).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};