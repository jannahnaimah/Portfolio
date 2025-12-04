import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface AboutProps {
  scrollY: number;
}

export function About({ scrollY }: AboutProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, rotateX: -15 }}
          animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -15 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-slate-700 leading-relaxed mb-6">
            My journey into cybersecurity began with a simple question: <strong>"How can we build technology that 
            people can trust?"</strong> This curiosity led me from solving math problems as a peer-learning tutor to 
            analyzing network packets in Wireshark, and from building my first website to architecting secure, 
            high-performing systems.
          </p>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            I am a results-driven IT student and newly certified <strong>CompTIA CySA+</strong> professional with a strong curiosity 
            for creating solutions that truly make an impact. What drives me isn't just the technology itself—it's the 
            stories behind the code, the people it serves, and the problems it solves. I combine <strong>cybersecurity 
            analysis, web development, and data analytics</strong> skills to build smarter, secure, and high-performing systems.
          </p>
          
          <p className="text-slate-700 leading-relaxed mb-6">
            Through hands-on experience in <strong>threat analysis, vulnerability monitoring, and system fortification</strong>, 
            I've learned that the best security isn't just about preventing attacks—it's about understanding the human 
            element. Whether I'm building responsive WordPress sites or analyzing CVE data, I focus on creating experiences 
            that are both secure and user-friendly.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Beyond the technical skills in <strong>Python, MySQL, and Tableau</strong>, what sets me apart is my passion 
            for inclusive technology. Leading the Braille-iant Minds project taught me that the most impactful solutions 
            are those that empower everyone, especially those often overlooked. I bring this perspective to every line of 
            code I write and every system I secure.
          </p>

          <motion.div
            className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { label: 'CGPA', value: '3.73' },
              { label: 'Certifications', value: '6+' },
              { label: 'Projects', value: '15+' },
              { label: 'Experience', value: '2+ Years' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-slate-900 mb-1">{stat.value}</div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}