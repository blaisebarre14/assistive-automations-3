import React from 'react';
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
      style={{
        position: 'fixed',
        inset: '0',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        style={{
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(31, 41, 55, 0.8) 100%)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(55, 65, 81, 0.4)',
          borderRadius: '8px',
          padding: '32px',
          maxWidth: '448px',
          width: '100%',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            color: '#9ca3af',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px'
          }}
        >
          <X size={20} />
        </button>

        <h2 style={{
          fontSize: '20px',
          fontWeight: '300',
          color: '#ffffff',
          marginBottom: '32px',
          letterSpacing: '0.1em'
        }}>
          Book a Strategy Call
        </h2>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '300',
              color: '#d1d5db',
              marginBottom: '8px',
              letterSpacing: '0.1em'
            }}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'rgba(31, 41, 55, 0.4)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '300',
                backdropFilter: 'blur(8px)'
              }}
              placeholder="Your full name"
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '300',
              color: '#d1d5db',
              marginBottom: '8px',
              letterSpacing: '0.1em'
            }}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'rgba(31, 41, 55, 0.4)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '300',
                backdropFilter: 'blur(8px)'
              }}
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '300',
              color: '#d1d5db',
              marginBottom: '8px',
              letterSpacing: '0.1em'
            }}>
              Company Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'rgba(31, 41, 55, 0.4)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '300',
                backdropFilter: 'blur(8px)'
              }}
              placeholder="Your company"
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '300',
              color: '#d1d5db',
              marginBottom: '8px',
              letterSpacing: '0.1em'
            }}>
              Tell us about your needs
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                backgroundColor: 'rgba(31, 41, 55, 0.4)',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: '300',
                resize: 'none',
                backdropFilter: 'blur(8px)'
              }}
              placeholder="Describe your automation needs..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            style={{
              width: '100%',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              color: '#ffffff',
              padding: '12px',
              borderRadius: '8px',
              fontWeight: '300',
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.1em',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            Schedule Call
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};