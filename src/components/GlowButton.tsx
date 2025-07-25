import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const GlowButton = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: GlowButtonProps) => {
  const baseClasses = "px-8 py-4 rounded-lg font-light transition-all duration-300 backdrop-blur-sm";
  
  const variantClasses = {
    primary: "bg-white/10 border border-gray-600/40 text-white hover:bg-white/20 hover:border-gray-500/60",
    secondary: "bg-transparent border border-gray-600/40 text-white hover:bg-white/10 hover:border-gray-500/60"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};