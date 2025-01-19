import React from 'react';
import { Leaf, Recycle, Shield, Truck } from 'lucide-react';

const features = [
  {
    icon: <Leaf className="w-12 h-12 text-green-600" />,
    title: "Ecológico",
    description: "Contribuimos a la reducción de residuos y la conservación del medio ambiente"
  },
  {
    icon: <Shield className="w-12 h-12 text-green-600" />,
    title: "Garantía Asegurada",
    description: "Todas nuestras piezas pasan por rigurosos controles de calidad"
  },
  {
    icon: <Recycle className="w-12 h-12 text-green-600" />,
    title: "Piezas Recicladas",
    description: "Damos una segunda vida a piezas en buen estado"
  },
  {
    icon: <Truck className="w-12 h-12 text-green-600" />,
    title: "Envío Rápido",
    description: "Entrega en 24/48 horas en península"
  }
];

export default function Features() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}