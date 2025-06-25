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
      className="bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-md border border-gray-700/30 rounded-lg p-8 hover:border-gray-600/40 transition-all duration-200 group"
    >
      <motion.div
        whileHover={{ 
          scale: 1.1,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className="w-12 h-12 border border-gray-600/30 rounded-lg flex items-center justify-center mb-6 group-hover:border-gray-500/50 transition-all duration-200 backdrop-blur-sm"
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-light text-white mb-4 group-hover:text-gray-200 transition-colors duration-200 spaced-letters">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed font-light text-sm">
        {description}
      </p>
    </motion.div>
  );
};