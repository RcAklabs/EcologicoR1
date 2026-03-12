import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "font-display font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 focus:outline-none flex items-center justify-center";
  
  const variants = {
    primary: "bg-eco-orange text-white shadow-neon-orange hover:bg-orange-500 border border-transparent",
    secondary: "bg-eco-green text-white shadow-lg hover:bg-green-800 border border-transparent",
    outline: "bg-transparent text-eco-green border-2 border-eco-green hover:bg-eco-green hover:text-white"
  };

  return (
    <button 
      type={type}
      onClick={onClick} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};