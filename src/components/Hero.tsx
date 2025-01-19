import React from 'react';
import ResponsiveSection from './layout/ResponsiveSection';

export default function Hero() {
  return (
    <ResponsiveSection preserveAspectRatio>
      <div 
        className="relative h-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative h-full flex items-center px-8">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Piezas de automóvil sostenibles</h1>
            <p className="text-xl mb-8">Encuentra las mejores piezas recicladas y reacondicionadas para tu vehículo. Calidad garantizada y respeto por el medio ambiente.</p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors">
              Ver Catálogo
            </button>
          </div>
        </div>
      </div>
    </ResponsiveSection>
  );
}