import React, { useEffect, useState } from 'react';
import { Star, AlertCircle } from 'lucide-react';
import { supabase, retryOperation } from '../lib/supabase';

interface Testimonial {
  id: string;
  customer_name: string;
  product: string;
  content: string;
  rating: number;
}

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    customer_name: 'Carlos Rodríguez',
    product: 'Motor Reacondicionado',
    content: 'Excelente calidad y funcionamiento perfecto. El servicio de instalación fue muy profesional.',
    rating: 5
  },
  {
    id: '2',
    customer_name: 'Ana García',
    product: 'Sistema de Frenos',
    content: 'Muy contenta con la compra. Las piezas están en perfecto estado y el precio es muy competitivo.',
    rating: 4
  },
  {
    id: '3',
    customer_name: 'Miguel Fernández',
    product: 'Caja de Cambios',
    content: 'Gran alternativa ecológica. El rendimiento es igual que una pieza nueva.',
    rating: 5
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        setLoading(true);
        setError(null);
        
        const { data, error } = await retryOperation(async () => 
          supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false })
        );

        if (error) {
          throw error;
        }

        setTestimonials(data || FALLBACK_TESTIMONIALS);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('No se pudieron cargar los testimonios. Por favor, inténtelo de nuevo más tarde.');
        setTestimonials(FALLBACK_TESTIMONIALS);
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-pulse flex space-x-4">
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gray-200 rounded w-28"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        {error && (
          <div className="flex items-center justify-center gap-2 text-amber-600 mb-6">
            <AlertCircle size={20} />
            <p>{error}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="mt-4">
                <p className="font-semibold">{testimonial.customer_name}</p>
                <p className="text-sm text-gray-500">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}