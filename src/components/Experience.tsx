import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Briefcase, Award, GraduationCap } from 'lucide-react';

interface ExperienceProps {
  scrollY: number;
}

const experiences = [
  {
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
    title: 'Web Developer',
    organization: 'Freelance',
    period: 'Aug 2024 - August 2025',
    achievements: [
      'I design and build user-friendly, visually appealing websites tailored to each client\'s needs. My work focuses on responsive design, clean layouts, and seamless user experience, helping businesses and individuals strengthen their online presence',
    ],
  },
  {
    icon: Award,
    color: 'from-purple-500 to-pink-500',
    title: 'Hackathon Judge',
    organization: 'Girlscode by Sarawak Digital Economy Corporation Berhad',
    period: 'Sep 2025 - Nov 2025',
    achievements: [
      'Evaluated and assessed 40 mobile app projects across Junior and Senior categories, focused on solving critical community problems',
      'Provided constructive, professional feedback on technical feasibility, design thinking, coding logic, and product innovation to empower pre-teens and teens in STEM',
      'Contributed to a unique STEM program aimed at increasing female participation and interest in App Development, Design Thinking, and Entrepreneurship',
    ],
  },
  {
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
    title: 'Home Tutor',
    organization: 'Freelance',
    period: 'Jan 2025 to Jul 2025',
    achievements: [
      'Designed and delivered customized programming curricula for primary school and pre-teen students, specializing in Python and visual block-based coding (e.g., Scratch) to build foundational logic skills',
    ],
  },
];

export function Experience({ scrollY }: ExperienceProps) {
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
          Professional Experience
        </motion.h2>

        <motion.p
          className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          From freelancing to leadership roles, each experience has shaped my approach to problem-solving and collaboration
        </motion.p>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative overflow-hidden"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 2 }}
            >
              <motion.div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${exp.color} opacity-10 rounded-full -mr-20 -mt-20`}
                animate={{
                  scale: isInView ? [1, 1.3, 1] : 1,
                  rotate: isInView ? [0, 90, 0] : 0,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="flex flex-col md:flex-row gap-6">
                <div className={`flex-shrink-0 inline-flex p-4 rounded-xl bg-gradient-to-br ${exp.color} self-start`}>
                  <exp.icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="mb-2">{exp.title}</h3>
                  <div className="text-slate-600 mb-1">{exp.organization}</div>
                  <div className="text-slate-500 text-sm mb-4">{exp.period}</div>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        className="flex items-start gap-2 text-slate-700"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + achIndex * 0.1 }}
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}