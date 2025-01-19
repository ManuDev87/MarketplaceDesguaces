import React from 'react';
import Container from './Container';

interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  preserveAspectRatio?: boolean;
}

export default function ResponsiveSection({ 
  children, 
  className = '',
  preserveAspectRatio = false 
}: ResponsiveSectionProps) {
  return (
    <section className={`w-full flex justify-center items-center ${className}`}>
      <Container className={preserveAspectRatio ? 'aspect-container' : ''}>
        <div className="responsive-scale w-full h-full">
          {children}
        </div>
      </Container>
    </section>
  );
}