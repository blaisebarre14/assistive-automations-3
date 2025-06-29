import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  Phone, 
  Globe, 
  Target,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';
import { AnimatedSection } from './components/AnimatedSection';
import { AnimatedText } from './components/AnimatedText';
import { GlowButton } from './components/GlowButton';
import { FeatureCard } from './components/FeatureCard';
import { BookingForm } from './components/BookingForm';
import { Logo } from './components/Logo';
import { ContactSection } from './components/ContactSection';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "AI Chat Agents",
      description: "Intelligent conversational AI that handles customer inquiries 24/7 with human-like responses and seamless escalation."
    },
    {
      icon: <Users className="w-6 h-6 text-white" />,
      title: "Lead Generation & CRM",
      description: "Automated lead qualification and nurturing systems that convert prospects into customers while you sleep."
    },
    {
      icon: <Calendar className="w-6 h-6 text-white" />,
      title: "Appointment Setting",
      description: "Smart scheduling systems that book qualified appointments automatically, reducing no-shows by 60%."
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "AI Receptionist",
      description: "Virtual receptionist that handles calls, transfers, and messages with perfect professionalism every time."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Website Development",
      description: "High-converting websites optimized for automation integration and maximum lead generation potential."
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Mass Outreach Systems",
      description: "Personalized outreach campaigns that scale your sales efforts while maintaining authentic connections."
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff',
      overflowX: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        inset: '0',
        zIndex: 0
      }}>
        {/* Gradient background */}
        <div style={{
          position: 'absolute',
          inset: '0',
          background: 'linear-gradient(135deg, #1f2937 0%, #000000 50%, #374151 100%)'
        }}></div>
        
        {/* Animated particles */}
        <div style={{
          position: 'absolute',
          inset: '0',
          opacity: 0.3
        }}>
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.2)'
        }}></div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid rgba(55, 65, 81, 0.2)'
          }}
        >
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '16px 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Logo size="sm" />
            <GlowButton onClick={() => setIsFormOpen(true)}>
              <span style={{ letterSpacing: '0.1em', fontSize: '14px' }}>Book a Call</span>
            </GlowButton>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 32px',
          paddingTop: '128px'
        }}>
          <div style={{
            maxWidth: '1152px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <AnimatedText delay={0.3}>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  border: '1px solid rgba(55, 65, 81, 0.3)',
                  borderRadius: '9999px',
                  padding: '12px 32px',
                  marginBottom: '48px',
                  backdropFilter: 'blur(8px)'
                }}
              >
                <Sparkles style={{ width: '16px', height: '16px', color: '#d1d5db' }} />
                <span style={{ fontSize: '14px', letterSpacing: '0.1em', color: '#d1d5db' }}>
                  AI-Powered Business Automation
                </span>
              </motion.div>
            </AnimatedText>

            {/* Logo in Hero */}
            <AnimatedText delay={0.4}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
                <Logo size="lg" className="opacity-90" />
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <h1 style={{
                fontSize: 'clamp(48px, 8vw, 144px)',
                fontWeight: '100',
                marginBottom: '64px',
                lineHeight: '1.1'
              }}>
                <div style={{
                  letterSpacing: '0.2em',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
                  marginBottom: '16px'
                }}>
                  AUTOMATE
                </div>
                <div style={{
                  letterSpacing: '0.2em',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  YOUR SUCCESS
                </div>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.7}>
              <p style={{
                fontSize: '18px',
                color: '#d1d5db',
                marginBottom: '64px',
                maxWidth: '768px',
                margin: '0 auto 64px auto',
                lineHeight: '1.6',
                fontWeight: '300'
              }}>
                Transform your business with cutting-edge AI automation. From intelligent chat agents to 
                personalized outreach systems, we build the future of customer engagement.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.9}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <GlowButton onClick={() => setIsFormOpen(true)}>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    letterSpacing: '0.1em',
                    fontSize: '14px'
                  }}>
                    Book Strategy Call
                    <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </span>
                </GlowButton>
                <GlowButton variant="secondary">
                  <span style={{ letterSpacing: '0.1em', fontSize: '14px' }}>View Our Work</span>
                </GlowButton>
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Services Section */}
        <section style={{ padding: '128px 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <AnimatedSection style={{ textAlign: 'center', marginBottom: '96px' }}>
              <h2 style={{
                fontSize: 'clamp(32px, 6vw, 96px)',
                fontWeight: '100',
                marginBottom: '32px',
                letterSpacing: '0.1em',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
              }}>
                OUR SERVICES
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#d1d5db',
                maxWidth: '512px',
                margin: '0 auto',
                fontWeight: '300'
              }}>
                Comprehensive AI solutions designed to revolutionize how you engage with customers 
                and scale your business operations.
              </p>
            </AnimatedSection>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedSection style={{ padding: '128px 32px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '64px',
              textAlign: 'center'
            }}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{
                  fontSize: 'clamp(40px, 6vw, 96px)',
                  fontWeight: '100',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  10+
                </div>
                <div style={{
                  fontSize: '18px',
                  color: '#d1d5db',
                  letterSpacing: '0.1em'
                }}>
                  Industries Served with Tailored Automations
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{
                  fontSize: 'clamp(40px, 6vw, 96px)',
                  fontWeight: '100',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  24/7
                </div>
                <div style={{
                  fontSize: '18px',
                  color: '#d1d5db',
                  letterSpacing: '0.1em'
                }}>
                  AI Support Coverage
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                <div style={{
                  fontSize: 'clamp(40px, 6vw, 96px)',
                  fontWeight: '100',
                  textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
                }}>
                  40%
                </div>
                <div style={{
                  fontSize: '18px',
                  color: '#d1d5db',
                  letterSpacing: '0.1em'
                }}>
                  Average Reduction in Manual Tasks
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection style={{ padding: '128px 32px' }}>
          <div style={{
            maxWidth: '1024px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                display: 'inline-block',
                marginBottom: '48px'
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/logo/A_logo_in_white_color_is_displayed_on_a_solid_blac.png" 
                  alt="Assistive Automations Logo" 
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1) drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))',
                    mixBlendMode: 'screen'
                  }}
                />
              </div>
            </motion.div>

            <h2 style={{
              fontSize: 'clamp(32px, 6vw, 96px)',
              fontWeight: '100',
              marginBottom: '32px',
              letterSpacing: '0.1em',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.1)'
            }}>
              READY TO TRANSFORM?
            </h2>

            <AnimatedText delay={0.3}>
              <p style={{
                fontSize: '18px',
                color: '#d1d5db',
                marginBottom: '64px',
                maxWidth: '512px',
                margin: '0 auto 64px auto',
                fontWeight: '300'
              }}>
                Join hundreds of businesses already leveraging AI automation to scale their operations 
                and deliver exceptional customer experiences.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <GlowButton onClick={() => setIsFormOpen(true)}>
                <span style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  letterSpacing: '0.1em',
                  fontSize: '14px'
                }}>
                  <Zap style={{ width: '16px', height: '16px' }} />
                  Start Your Automation Journey
                </span>
              </GlowButton>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Contact Us Section */}
        <ContactSection />

        {/* Footer */}
        <footer style={{
          padding: '64px 32px',
          borderTop: '1px solid rgba(55, 65, 81, 0.2)'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '24px'
            }}>
              <Logo size="sm" className="opacity-80" />
            </div>
            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              letterSpacing: '0.1em'
            }}>
              © 2024 Assistive Automations. All rights reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Booking Form Modal */}
      <BookingForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
}

export default App;