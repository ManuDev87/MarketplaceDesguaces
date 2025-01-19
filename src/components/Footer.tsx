import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">RecambioVerde</h3>
            <p className="text-gray-400 mb-4">
              Especialistas en piezas de automóvil sostenibles y respetuosas con el medio ambiente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500"><Facebook /></a>
              <a href="#" className="hover:text-green-500"><Twitter /></a>
              <a href="#" className="hover:text-green-500"><Instagram /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">Catálogo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                +34 123 456 789
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                info@recambioverde.com
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                Calle Principal, 123, Madrid
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Suscríbete para recibir nuestras últimas ofertas</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Tu email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
              />
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RecambioVerde. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}