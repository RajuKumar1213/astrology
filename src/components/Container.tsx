import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
}

const Container = ({ children, className = '', maxWidth = '7xl' }: ContainerProps) => {
  return (
    <div className={`max-w-${maxWidth} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
