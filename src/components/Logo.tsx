import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'lg';
  className?: string;
}

export const Logo = ({ size = 'sm', className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    lg: 'w-16 h-16'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <div className={`${sizeClasses[size]} border border-gray-700/30 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden`}>
        <img 
          src="/logo/A_logo_in_white_color_is_displayed_on_a_solid_blac.png" 
          alt="Assistive Automations Logo" 
          className={`${size === 'sm' ? 'w-5 h-5' : 'w-10 h-10'} object-contain filter drop-shadow-lg`}
          style={{
            filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
          }}
        />
      </div>
      <span className={`font-thin spaced-letters ${size === 'sm' ? 'text-lg' : 'text-2xl'}`}>
        ASSISTIVE AUTOMATIONS
      </span>
    </motion.div>
  );
};