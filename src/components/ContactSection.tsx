import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import { AnimatedText } from './AnimatedText';

export const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Speak directly with our automation experts"
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: "Email Us",
      value: "hello@assistiveauto.com",
      href: "mailto:hello@assistiveauto.com",
      description: "Get detailed information about our services"
    }
  ];

  return (
    <section style={{
      padding: '128px 32px',
      borderTop: '1px solid rgba(55, 65, 81, 0.2)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <AnimatedSection style={{ textAlign: 'center', marginBottom: '96px' }}>
          <h2 style={{
            fontSize: 'clamp(32px, 6vw, 96px)',
            fontWeight: '100',
            marginBottom: '32px',
            letterSpacing: '0.1em',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
          }}>
            CONTACT US
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#d1d5db',
            maxWidth: '512px',
            margin: '0 auto',
            fontWeight: '300'
          }}>
            Ready to transform your business? Get in touch with our team of automation experts 
            and discover how AI can revolutionize your operations.
          </p>
        </AnimatedSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1024px',
          margin: '0 auto'
        }}>
          {contactMethods.map((method, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <motion.a
                href={method.href}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.3) 0%, rgba(31, 41, 55, 0.2) 100%)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(55, 65, 81, 0.3)',
                  borderRadius: '8px',
                  padding: '32px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease'
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  style={{
                    width: '64px',
                    height: '64px',
                    border: '1px solid rgba(75, 85, 99, 0.3)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                    margin: '0 auto 24px auto',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  {method.icon}
                </motion.div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '300',
                  color: '#ffffff',
                  marginBottom: '8px',
                  letterSpacing: '0.1em'
                }}>
                  {method.title}
                </h3>
                
                <div style={{
                  fontSize: '20px',
                  fontWeight: '300',
                  color: '#ffffff',
                  marginBottom: '12px'
                }}>
                  {method.value}
                </div>
                
                <p style={{
                  color: '#d1d5db',
                  fontSize: '14px',
                  fontWeight: '300',
                  lineHeight: '1.6'
                }}>
                  {method.description}
                </p>
              </motion.a>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};