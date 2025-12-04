import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { GraduationCap, Award } from 'lucide-react';

interface EducationProps {
  scrollY: number;
}

const educations = [
  {
    degree: 'Bachelor of Information Technology',
    major: 'Information Assurance and Security (Hons)',
    institution: 'International Islamic University Malaysia (IIUM), Gombak Campus',
    period: 'October 2022 - October 2026',
    cgpa: '3.73',
    achievements: [
      'Achieved Dean\'s List recognition for six consecutive semesters',
    ],
  },
  {
    degree: 'Foundation in Engineering and Computer Science',
    major: '',
    institution: 'International Islamic University Malaysia (IIUM), Gambang Campus',
    period: 'Graduated 2022',
    cgpa: '3.62',
    achievements: [
      'Appointed Peer-Learning Tutor in Mathematics and recognized on the Dean\'s List every semester',
    ],
  },
  {
    degree: 'Malaysian Certificate of Education (SPM)',
    major: 'Pure Science',
    institution: 'SMK (P) Jalan Ipoh, Kuala Lumpur',
    period: 'Graduated 2020',
    cgpa: '',
    achievements: [],
  },
];

export function Education({ scrollY }: EducationProps) {
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
          className="text-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6 }}
        >
          Academic Foundation
        </motion.h2>

        <motion.p
          className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A journey of continuous learning, from mathematics to cybersecurity, always striving for excellence
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />

          <div className="space-y-12">
            {educations.map((edu, index) => (
              <motion.div
                key={edu.degree}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full -ml-2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content */}
                <div className="md:w-1/2 ml-20 md:ml-0">
                  {index % 2 === 0 ? (
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg md:mr-8"
                      whileHover={{ scale: 1.03, rotateY: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1">{edu.degree}</h3>
                          {edu.major && <div className="text-slate-600 mb-2">{edu.major}</div>}
                          <div className="text-slate-500 text-sm mb-1">{edu.institution}</div>
                          <div className="text-slate-400 text-sm">{edu.period}</div>
                        </div>
                      </div>

                      {edu.cgpa && (
                        <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block">
                          <span className="text-slate-600 text-sm">CGPA: </span>
                          <span className="text-slate-900">{edu.cgpa}</span>
                        </div>
                      )}

                      {edu.achievements.length > 0 && (
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-slate-700">
                              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <div className="md:hidden">
                      <motion.div
                        className="bg-white rounded-2xl p-6 shadow-lg"
                        whileHover={{ scale: 1.03, rotateY: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                            <GraduationCap className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-1">{edu.degree}</h3>
                            {edu.major && <div className="text-slate-600 mb-2">{edu.major}</div>}
                            <div className="text-slate-500 text-sm mb-1">{edu.institution}</div>
                            <div className="text-slate-400 text-sm">{edu.period}</div>
                          </div>
                        </div>

                        {edu.cgpa && (
                          <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block">
                            <span className="text-slate-600 text-sm">CGPA: </span>
                            <span className="text-slate-900">{edu.cgpa}</span>
                          </div>
                        )}

                        {edu.achievements.length > 0 && (
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, achIndex) => (
                              <div key={achIndex} className="flex items-start gap-2 text-slate-700">
                                <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  )}
                </div>

                <div className="md:w-1/2 hidden md:block">
                  {index % 2 !== 0 && (
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg md:ml-8"
                      whileHover={{ scale: 1.03, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="mb-1">{edu.degree}</h3>
                          {edu.major && <div className="text-slate-600 mb-2">{edu.major}</div>}
                          <div className="text-slate-500 text-sm mb-1">{edu.institution}</div>
                          <div className="text-slate-400 text-sm">{edu.period}</div>
                        </div>
                      </div>

                      {edu.cgpa && (
                        <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block">
                          <span className="text-slate-600 text-sm">CGPA: </span>
                          <span className="text-slate-900">{edu.cgpa}</span>
                        </div>
                      )}

                      {edu.achievements.length > 0 && (
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2 text-slate-700">
                              <Award className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}