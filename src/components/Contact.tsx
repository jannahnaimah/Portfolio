import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

interface ContactProps {
  scrollY: number;
}

export function Contact({ scrollY }: ContactProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-center mb-16 text-slate-900">
          Let's Connect
        </h2>

        <motion.div
          className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background decoration */}
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -ml-32 -mb-32"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm mb-4">
                Let's Build Something Together
              </span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I'm actively seeking internship opportunities in cybersecurity, web development, or data analytics. 
              I bring curiosity, dedication, and a track record of turning challenges into achievements.
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Mail, label: 'Email', value: 'njnnaimah@gmail.com', link: 'mailto:njnnaimah@gmail.com' },
                { icon: Linkedin, label: 'LinkedIn', value: 'Connect with me', link: 'https://www.linkedin.com/in/nur-jannah-nai-mah-zainal/' },
                { icon: MapPin, label: 'Location', value: 'Malaysia', link: null },
              ].map((contact, index) => (
                <motion.div
                  key={contact.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  {contact.link ? (
                    <a href={contact.link} target={contact.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      <contact.icon className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-sm opacity-80 mb-1">{contact.label}</div>
                      <div>{contact.value}</div>
                    </a>
                  ) : (
                    <>
                      <contact.icon className="w-8 h-8 mx-auto mb-3" />
                      <div className="text-sm opacity-80 mb-1">{contact.label}</div>
                      <div>{contact.value}</div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <a
                href="mailto:njnnaimah@gmail.com"
                className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-slate-100 transition-colors shadow-lg"
              >
                Get In Touch
              </a>
              <p className="mt-6 text-white/80 text-sm">
                Whether you're looking for a passionate intern or want to discuss technology, I'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 text-slate-500"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <p>© 2025 • Built with React & Tailwind CSS</p>
        </motion.div>
      </motion.div>
    </section>
  );
}