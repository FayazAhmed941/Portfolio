
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { Skill } from '../types';

const SkillProgressBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
            {skill.icon}
            <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
        </div>
        <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-indigo-600 dark:bg-indigo-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };
    
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={sectionVariants}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">My Skills</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">The technologies I work with</p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SKILLS_DATA.map((category, index) => (
                        <motion.div 
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{category.title}</h3>
                            <div>
                                {category.skills.map((skill, skillIndex) => (
                                    <SkillProgressBar key={skillIndex} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
