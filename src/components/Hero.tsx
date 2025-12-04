import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Mail, Linkedin } from 'lucide-react';

interface HeroProps {
  scrollY: number;
}

export function Hero({ scrollY }: HeroProps) {
  const scale = Math.max(1 - scrollY / 1000, 0.8);
  const opacity = Math.max(1 - scrollY / 500, 0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="text-center z-10 px-6"
        style={{
          scale,
          opacity,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="mb-6 text-6xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight"
            style={{ fontFamily: 'ui-sans-serif, system-ui, -apple-system, sans-serif', fontWeight: 900 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Jannah Naimah
          </motion.h1>
          
          <motion.h2
            className="mb-4 text-3xl md:text-4xl lg:text-5xl text-slate-700 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Aspiring Cybersecurity Professional
          </motion.h2>
          
          <motion.p
            className="text-slate-600 mb-2 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            IT Student | CompTIA CySA+ Certified | Web Developer
          </motion.p>

          <motion.p
            className="text-slate-500 mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Building secure, high-performing systems with expertise in threat analysis & web development
          </motion.p>

          <motion.p
            className="text-slate-700 mb-8 max-w-xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            "Turning curiosity into code, and vulnerability into strength"
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="mailto:your@email.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-900 text-slate-900 rounded-full hover:bg-slate-900 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-slate-400" />
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}