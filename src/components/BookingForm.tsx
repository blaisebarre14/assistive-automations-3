import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingForm = ({ isOpen, onClose }: BookingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-gradient-to-br from-gray-900/90 to-gray-800/80 backdrop-blur-md border border-gray-700/40 rounded-lg p-8 max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-light text-white mb-8 spaced-letters">Book a Strategy Call</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-light text-gray-300 mb-2 spaced-letters">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/40 border border-gray-600/40 rounded-lg text-white placeholder-gray-500 focus:border-gray-500/60 focus:outline-none transition-colors backdrop-blur-sm font-light"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-300 mb-2 spaced-letters">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800/40 border border-gray-600/40 rounded-lg text-white placeholder-gray-500 focus:border-gray-500/60 focus:outline-none transition-colors backdrop-blur-sm font-light"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-300 mb-2 spaced-letters">
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/40 border border-gray-600/40 rounded-lg text-white placeholder-gray-500 focus:border-gray-500/60 focus:outline-none transition-colors backdrop-blur-sm font-light"
              placeholder="Your company"
            />
          </div>

          <div>
            <label className="block text-sm font-light text-gray-300 mb-2 spaced-letters">
              Tell us about your needs
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-gray-800/40 border border-gray-600/40 rounded-lg text-white placeholder-gray-500 focus:border-gray-500/60 focus:outline-none transition-colors resize-none backdrop-blur-sm font-light"
              placeholder="Describe your automation needs..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-white/10 border border-gray-600/40 text-white py-3 rounded-lg font-light hover:bg-white/20 hover:border-gray-500/60 transition-all duration-300 backdrop-blur-sm spaced-letters text-sm"
          >
            Schedule Call
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};