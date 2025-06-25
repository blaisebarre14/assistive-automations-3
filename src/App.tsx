import { useState } from 'react';
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 z-0">
        <spline-viewer 
          url="https://prod.spline.design/ngoos7MkbmXN2Mhu/scene.splinecode"
          style={{
            width: '100%',
            height: '100%',
            opacity: '0.4'
          }}
        ></spline-viewer>
        
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-sm border-b border-gray-800/20"
        >
          <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
            <Logo size="sm" />
            <GlowButton onClick={() => setIsFormOpen(true)}>
              <span className="spaced-letters text-sm">Book a Call</span>
            </GlowButton>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-8 pt-32">
          <div className="max-w-6xl mx-auto text-center">
            <AnimatedText delay={0.3}>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center gap-3 border border-gray-700/30 rounded-full px-8 py-3 mb-12 backdrop-blur-sm"
              >
                <Sparkles className="w-4 h-4 text-gray-300" />
                <span className="text-sm spaced-letters text-gray-300">AI-Powered Business Automation</span>
              </motion.div>
            </AnimatedText>

            {/* Logo in Hero */}
            <AnimatedText delay={0.4}>
              <div className="flex justify-center mb-12">
                <Logo size="lg" className="opacity-90" />
              </div>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-thin mb-16 leading-tight">
                <div className="spaced-letters-wide text-glow mb-4">
                  AUTOMATE
                </div>
                <div className="spaced-letters-wide text-glow">
                  YOUR SUCCESS
                </div>
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.7}>
              <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed font-light">
                Transform your business with cutting-edge AI automation. From intelligent chat agents to 
                personalized outreach systems, we build the future of customer engagement.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.9}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <GlowButton onClick={() => setIsFormOpen(true)}>
                  <span className="flex items-center gap-3 spaced-letters text-sm">
                    Book Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </GlowButton>
                <GlowButton variant="secondary">
                  <span className="spaced-letters text-sm">View Our Work</span>
                </GlowButton>
              </div>
            </AnimatedText>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-thin mb-8 spaced-letters text-glow">
                OUR SERVICES
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
                Comprehensive AI solutions designed to revolutionize how you engage with customers 
                and scale your business operations.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <AnimatedSection className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-6xl font-thin text-glow">
                  10+
                </div>
                <div className="text-lg text-gray-300 spaced-letters">Industries Served with Tailored Automations</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-6xl font-thin text-glow">
                  24/7
                </div>
                <div className="text-lg text-gray-300 spaced-letters">AI Support Coverage</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="space-y-4"
              >
                <div className="text-5xl md:text-6xl font-thin text-glow">
                  40%
                </div>
                <div className="text-lg text-gray-300 spaced-letters">Average Reduction in Manual Tasks</div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="py-32 px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-12"
            >
              <div className="w-16 h-16 border border-gray-700/30 rounded-full flex items-center justify-center backdrop-blur-sm overflow-hidden">
                <img 
                  src="/A_logo_in_white_color_is_displayed_on_a_solid_blac.png" 
                  alt="Assistive Automations Logo" 
                  className="w-10 h-10 object-contain filter drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.3))'
                  }}
                />
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-thin mb-8 spaced-letters text-glow">
              READY TO TRANSFORM?
            </h2>

            <AnimatedText delay={0.3}>
              <p className="text-lg text-gray-300 mb-16 max-w-2xl mx-auto font-light">
                Join hundreds of businesses already leveraging AI automation to scale their operations 
                and deliver exceptional customer experiences.
              </p>
            </AnimatedText>

            <AnimatedText delay={0.5}>
              <GlowButton onClick={() => setIsFormOpen(true)}>
                <span className="flex items-center gap-3 spaced-letters text-sm">
                  <Zap className="w-4 h-4" />
                  Start Your Automation Journey
                </span>
              </GlowButton>
            </AnimatedText>
          </div>
        </AnimatedSection>

        {/* Contact Us Section */}
        <ContactSection />

        {/* Footer */}
        <footer className="py-16 px-8 border-t border-gray-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Logo size="sm" className="opacity-80" />
            </div>
            <p className="text-gray-500 text-sm spaced-letters">
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