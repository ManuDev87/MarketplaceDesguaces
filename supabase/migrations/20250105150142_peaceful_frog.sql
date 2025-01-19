/*
  # Create testimonials table

  1. New Tables
    - `testimonials`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `product` (text)
      - `content` (text)
      - `rating` (integer)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `testimonials` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  product text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Testimonials are viewable by everyone" ON testimonials
  FOR SELECT
  TO public
  USING (true);

-- Insert some sample testimonials
INSERT INTO testimonials (customer_name, product, content, rating) VALUES
  ('Carlos Rodríguez', 'Motor Reacondicionado', 'Excelente calidad y funcionamiento perfecto. El servicio de instalación fue muy profesional.', 5),
  ('Ana García', 'Sistema de Frenos', 'Muy contenta con la compra. Las piezas están en perfecto estado y el precio es muy competitivo.', 4),
  ('Miguel Fernández', 'Caja de Cambios', 'Gran alternativa ecológica. El rendimiento es igual que una pieza nueva.', 5);