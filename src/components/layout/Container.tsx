import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1210px] max-h-[382px] overflow-auto ${className}`}>
      <div className="relative w-full h-full">
        {children}
      </div>
    </div>
  );
}