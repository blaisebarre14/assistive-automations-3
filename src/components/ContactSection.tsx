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
    <section className="py-32 px-8 border-t border-gray-800/20">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extralight mb-8 spaced-letters text-glow">
            CONTACT US
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
            Ready to transform your business? Get in touch with our team of automation experts 
            and discover how AI can revolutionize your operations.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <AnimatedText key={index} delay={index * 0.1}>
              <motion.a
                href={method.href}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
                className="block bg-gradient-to-br from-gray-900/30 to-gray-800/20 backdrop-blur-md border border-gray-700/30 rounded-lg p-8 hover:border-gray-600/40 transition-all duration-200 group text-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  className="w-16 h-16 border border-gray-600/30 rounded-lg flex items-center justify-center mb-6 mx-auto group-hover:border-gray-500/50 transition-all duration-200 backdrop-blur-sm"
                >
                  {method.icon}
                </motion.div>
                
                <h3 className="text-lg font-light text-white mb-2 group-hover:text-gray-200 transition-colors duration-200 spaced-letters">
                  {method.title}
                </h3>
                
                <div className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors duration-200">
                  {method.value}
                </div>
                
                <p className="text-gray-300 text-sm font-light leading-relaxed">
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