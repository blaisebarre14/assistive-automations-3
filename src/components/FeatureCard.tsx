import React from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.3) 0%, rgba(31, 41, 55, 0.2) 100%)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(55, 65, 81, 0.3)',
        borderRadius: '8px',
        padding: '32px',
        transition: 'all 0.2s ease'
      }}
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        style={{
          width: '48px',
          height: '48px',
          border: '1px solid rgba(75, 85, 99, 0.3)',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          backdropFilter: 'blur(8px)'
        }}
      >
        {icon}
      </motion.div>
      <h3 style={{
        fontSize: '18px',
        fontWeight: '300',
        color: '#ffffff',
        marginBottom: '16px',
        letterSpacing: '0.1em'
      }}>
        {title}
      </h3>
      <p style={{
        color: '#d1d5db',
        lineHeight: '1.6',
        fontWeight: '300',
        fontSize: '14px'
      }}>
        {description}
      </p>
    </motion.div>
  );
};