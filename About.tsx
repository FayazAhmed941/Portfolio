import React from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const About: React.FC = () => {
  const stats = [
    { value: 5, label: 'Years Experience' },
    { value: 25, label: 'Projects Completed' },
    { value: 15, label: 'Technologies Mastered' },
  ];
  
  const parentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={childVariants}
            className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">A little bit about my journey</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3 flex justify-center"
          >
            <img src="https://picsum.photos/seed/profile/400/400" alt="Fayaz Ahmed" className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={parentVariants}
            className="w-full md:w-2/3"
          >
            <motion.p variants={childVariants} className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I am a passionate frontend developer with a knack for creating dynamic and intuitive web experiences. With a solid foundation in modern web technologies, I specialize in the React ecosystem, turning complex problems into elegant, user-friendly solutions. My goal is to build products that are not only visually appealing but also highly functional and accessible to everyone.
            </motion.p>
            <motion.p variants={childVariants} className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              When I'm not coding, you can find me exploring new hiking trails, experimenting with photography, or contributing to open-source projects.
            </motion.p>
            
            <motion.div variants={parentVariants} className="grid grid-cols-3 gap-4 text-center">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={childVariants} className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                  <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                    <AnimatedCounter to={stat.value} />+
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;