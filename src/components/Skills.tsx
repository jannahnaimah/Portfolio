import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code, Database, Shield, BarChart, Globe, Smartphone } from 'lucide-react';

interface SkillsProps {
  scrollY: number;
}

const skillCategories = [
  {
    icon: Shield,
    title: 'Cybersecurity',
    color: 'from-red-500 to-orange-500',
    skills: ['Wireshark', 'MITRE ATT&CK', 'CVSS', 'CVE Analysis', 'Threat Analysis', 'Vulnerability Monitoring'],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    skills: ['HTML/CSS', 'JavaScript', 'PHP', 'Laravel', 'Next.js', 'WordPress'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    color: 'from-purple-500 to-pink-500',
    skills: ['React Native', 'Flutter', 'Dart'],
  },
  {
    icon: Code,
    title: 'Programming',
    color: 'from-green-500 to-emerald-500',
    skills: ['Python', 'Java', 'MySQL'],
  },
  {
    icon: Database,
    title: 'Data Analytics',
    color: 'from-yellow-500 to-orange-500',
    skills: ['Tableau', 'Power BI', 'Excel', 'Data Visualization'],
  },
  {
    icon: BarChart,
    title: 'Tools & Platforms',
    color: 'from-indigo-500 to-blue-500',
    skills: ['Microsoft Word', 'Excel', 'PowerPoint', 'Microsoft Project'],
  },
];

export function Skills({ scrollY }: SkillsProps) {
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
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Technical Arsenal
        </motion.h2>

        <motion.p
          className="text-center text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every skill is a tool in my toolkit, carefully honed through projects, certifications, and real-world application
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-lg overflow-hidden relative"
              initial={{ opacity: 0, y: 50, rotateY: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <motion.div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full -mr-16 -mt-16`}
                animate={{
                  scale: isInView ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: 'CompTIA Cybersecurity Analyst (CySA+)', year: '2025', org: 'CompTIA' },
              { name: 'Google Cybersecurity Specialization', year: '2025', org: 'Google' },
              { name: 'Google UX Design Specialization', year: '2025', org: 'Google' },
              { name: 'Google Advanced Data Analytics Specialization', year: '2025', org: 'Google' },
              { name: 'Google Project Management Specialization', year: '2025', org: 'Google' },
              { name: 'Fundamentals of Cloud Computing', year: '2023', org: 'RunCloud' },
            ].map((cert, index) => (
              <motion.div
                key={cert.name}
                className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2" />
                <div>
                  <div className="text-slate-900">{cert.name}</div>
                  <div className="text-slate-500 text-sm">{cert.org} • {cert.year}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}