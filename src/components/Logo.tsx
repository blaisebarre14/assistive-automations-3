import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'sm', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: { width: '32px', height: '32px' },
    lg: { width: '64px', height: '64px' }
  };

  const logoSize = {
    sm: { width: '20px', height: '20px' },
    lg: { width: '40px', height: '40px' }
  };

  const textSize = {
    sm: '14px',
    lg: '20px'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}
      className={className}
    >
      <div style={{
        ...sizeClasses[size],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img 
          src="/logo/A_logo_in_white_color_is_displayed_on_a_solid_blac.png" 
          alt="Assistive Automations Logo" 
          style={{
            ...logoSize[size],
            objectFit: 'contain',
            filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))',
            mixBlendMode: 'screen'
          }}
        />
      </div>
      <div style={{
        letterSpacing: '0.1em',
        fontSize: textSize[size],
        display: 'flex',
        flexDirection: 'column',
        lineHeight: '1.2'
      }}>
        <span style={{ fontWeight: '600', fontSize: '18px' }}>ASSISTIVE</span>
        <span style={{ fontWeight: '100', fontSize: '14px' }}>AUTOMATIONS</span>
      </div>
    </motion.div>
  );
};