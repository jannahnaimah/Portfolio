import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Globe, Shield, Users, Award, Zap, Heart } from 'lucide-react';

interface ProjectsProps {
  scrollY: number;
}

const projects = [
  {
    icon: Heart,
    title: 'Braille-iant Minds',
    category: 'Community Impact',
    color: 'from-pink-500 to-rose-500',
    story: 'Leading a project that brings inclusive education to visually impaired students wasn\'t just about organization—it was about understanding that technology should serve everyone. Receiving Gold Award and recognition for creativity, inspiration, and impact validated our belief that the most meaningful innovations are those that bridge gaps.',
    impact: ['Gold Award', 'Most Inspiring Project', 'Most Creative Project', 'Most Impactful Project', '30+ students impacted'],
    period: 'Mar 2024 - Dec 2024',
  },
  {
    icon: Globe,
    title: 'WordPress Development',
    category: 'Web Development',
    color: 'from-blue-500 to-cyan-500',
    story: 'Building two WordPress websites from scratch taught me that great web development is about more than code—it\'s about understanding client vision and translating it into reality. Delivering 2 weeks ahead of schedule while reducing costs by 40% proved that efficiency and quality can coexist.',
    impact: ['2 Complete Sites', '40% Cost Reduction', '2 Weeks Early'],
    period: 'Aug 2024 - August 2025',
  },
  {
    icon: Users,
    title: 'i Hax - National Hackathon',
    category: 'Event Leadership',
    color: 'from-purple-500 to-violet-500',
    story: 'As Vice Director, I learned that organizing a national hackathon is like debugging code—you need to anticipate edge cases, coordinate multiple systems, and ensure everything works seamlessly. Managing logistics, sponsors, and 200+ participants taught me that leadership is about empowering others to innovate.',
    impact: ['200+ Participants', '3 Sponsors', 'National Recognition'],
    period: 'Dec 2022 - Oct 2023',
  },
  {
    icon: Award,
    title: 'Academic Excellence',
    category: 'Continuous Learning',
    color: 'from-green-500 to-emerald-500',
    story: 'Six consecutive semesters on the Dean\'s List while managing leadership roles and projects taught me that excellence isn\'t about choosing between academics and real-world experience—it\'s about excelling at both. Every certification earned represents not just knowledge, but commitment to mastery.',
    impact: ['6x Dean\'s List', '6+ Certifications', '3.73 CGPA'],
    period: '2022 - Present',
  },
];

export function Projects({ scrollY }: ProjectsProps) {
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
          Projects & Achievements
        </motion.h2>

        <motion.p
          className="text-center text-slate-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Each project tells a story of challenges overcome, lessons learned, and impact created
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${project.color} p-6 relative overflow-hidden`}>
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white opacity-20 rounded-full -mr-16 -mt-16"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3,
                  }}
                />
                
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="text-white/80 text-sm mb-2">{project.category}</div>
                    <h3 className="text-white mb-2">{project.title}</h3>
                    <div className="text-white/70 text-sm">{project.period}</div>
                  </div>
                  <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-slate-700 leading-relaxed mb-6">{project.story}</p>

                <div className="space-y-2">
                  <div className="text-sm text-slate-500 mb-3">Key Impact:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.impact.map((item, impactIndex) => (
                      <motion.span
                        key={item}
                        className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + impactIndex * 0.05 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="mb-4 text-white">Ready for the Next Chapter</h3>
          <p className="text-slate-300 max-w-2xl mx-auto">
            These projects represent my past, but I'm most excited about what's next. I'm looking for an internship 
            where I can bring my passion for cybersecurity, web development, and creating meaningful impact to a 
            team that values innovation and excellence.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
