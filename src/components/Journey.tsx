import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Lightbulb, Code, Shield, Award, Rocket, Heart } from 'lucide-react';

interface JourneyProps {
  scrollY: number;
}

const journeySteps = [
  {
    icon: Lightbulb,
    year: '2020',
    title: 'The Spark',
    color: 'from-yellow-500 to-orange-500',
    story: 'During SPM, I discovered my fascination with problem-solving through Pure Science. I realized that technology could be the bridge between abstract problems and real-world solutions.',
  },
  {
    icon: Code,
    year: '2022',
    title: 'First Lines of Code',
    color: 'from-green-500 to-emerald-500',
    story: 'As a Foundation student, I became a Peer-Learning Tutor in Mathematics, helping others while discovering my passion for teaching and learning. My first programming project showed me the power of creating something from nothing.',
  },
  {
    icon: Heart,
    year: '2023',
    title: 'Building for Impact',
    color: 'from-pink-500 to-rose-500',
    story: 'Co-leading the i Hax hackathon and serving as Academic Officer opened my eyes to the power of community. I learned that the best technology serves people, not just systems.',
  },
  {
    icon: Shield,
    year: '2024',
    title: 'Security Calling',
    color: 'from-blue-500 to-cyan-500',
    story: 'Diving deep into cybersecurity, I discovered my true calling. Every vulnerability I analyzed, every threat I assessed made me more determined to build a safer digital world. I also started my freelance journey, transforming client visions into reality.',
  },
  {
    icon: Award,
    year: '2024-2025',
    title: 'Recognition & Growth',
    color: 'from-purple-500 to-violet-500',
    story: 'Leading Braille-iant Minds to Gold and earning CompTIA CySA+ certification validated my approach: combine technical excellence with genuine empathy. Six semesters on the Dean\'s List proved consistency matters.',
  },
  {
    icon: Rocket,
    year: '2025',
    title: 'Ready for Liftoff',
    color: 'from-indigo-500 to-blue-500',
    story: 'Now, with a toolkit spanning from threat analysis to web development, from data visualization to inclusive design, I\'m ready to bring my passion and skills to an organization that values innovation, security, and impact.',
  },
];

export function Journey({ scrollY }: JourneyProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          My Journey
        </motion.h2>

        <motion.p
          className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From curious student to certified cybersecurity analyst—every step has shaped who I am today
        </motion.p>

        <div className="relative">
          {/* Curved path line */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
            <motion.path
              d="M 100 50 Q 300 100, 500 150 T 900 250 Q 1100 300, 1300 350"
              stroke="#cbd5e1"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.year}
                className="relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-lg h-full relative overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5, z: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background gradient */}
                  <motion.div
                    className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-20 rounded-full -mr-16 -mt-16`}
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                  />

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${step.color} mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-sm text-slate-500 mb-2">{step.year}</div>
                    <h3 className="mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.story}</p>
                  </div>

                  {/* Step number indicator */}
                  <motion.div
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-sm"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    {index + 1}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Inspirational quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl mb-4">
              "Every challenge I've faced has been an opportunity to learn, every project a chance to make a difference."
            </p>
            <p className="text-blue-100">What drives me forward is the belief that technology, when built with care and security, can transform lives.</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
