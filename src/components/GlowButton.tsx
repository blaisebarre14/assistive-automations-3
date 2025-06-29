import React from 'react';
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
  const baseStyle = {
    padding: '16px 32px',
    borderRadius: '8px',
    fontWeight: '300',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(8px)',
    border: '1px solid',
    cursor: 'pointer',
    background: 'none'
  };
  
  const variantStyles = {
    primary: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderColor: 'rgba(75, 85, 99, 0.4)',
      color: '#ffffff'
    },
    secondary: {
      backgroundColor: 'transparent',
      borderColor: 'rgba(75, 85, 99, 0.4)',
      color: '#ffffff'
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      style={{
        ...baseStyle,
        ...variantStyles[variant]
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
};