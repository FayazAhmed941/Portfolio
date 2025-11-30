import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A timeline of my recent work</p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline */}
          <motion.div
            className="absolute top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-700 left-4 md:left-1/2 transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ transformOrigin: 'top' }}
          />
          
          <div className="space-y-16">
            {PROJECTS_DATA.map((project, index) => {
              const isLeft = index % 2 === 0;

              const contentVariants = {
                  hidden: { opacity: 0, x: isLeft ? -20 : 20 },
                  visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.6, ease: 'easeOut' },
                  },
              };

              return (
                <div key={project.id} className="relative">
                  {/* Mobile horizontal line */}
                  <motion.div
                    className="absolute top-4 left-4 w-8 h-0.5 bg-gray-200 dark:bg-gray-700 md:hidden"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ transformOrigin: 'left' }}
                  />

                  {/* Desktop horizontal line */}
                  <motion.div
                    className={`hidden md:block absolute top-4 w-[calc(50%-2rem)] h-0.5 bg-gray-200 dark:bg-gray-700
                      ${isLeft ? 'left-1/2' : 'right-1/2'}
                    `}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    style={{ transformOrigin: isLeft ? 'left' : 'right' }}
                  />

                  <motion.div 
                      className="absolute top-0 left-4 md:left-1/2 w-8 h-8 rounded-full bg-indigo-600 border-4 border-white dark:border-gray-800 z-10 transform -translate-x-1/2 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                  >
                       <div className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</div>
                  </motion.div>

                  <motion.div
                      className={`pl-12 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}
                      variants={contentVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                  >
                      <ProjectCard project={project} onSelect={setSelectedProject} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;