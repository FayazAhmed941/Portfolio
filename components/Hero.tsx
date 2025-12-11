import React from 'react';
import { motion } from 'framer-motion';
import mypic from '../assets/my avatar.jpeg';
import mycv from "../assets/Fayaz-Ahmed-CV.pdf"

// Icon for download button

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);

// Animated background shapes
const BackgroundShapes = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
            className="absolute top-[10%] left-[5%] w-32 h-32 bg-purple-400 rounded-full opacity-20 dark:opacity-30 blur-2xl"
            animate={{ 
                x: [0, 50, 0, -50, 0],
                y: [0, -50, 0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
        <motion.div 
            className="absolute bottom-[15%] right-[5%] w-48 h-48 bg-indigo-400 rounded-full opacity-20 dark:opacity-30 blur-2xl"
            animate={{ 
                x: [0, -60, 0, 60, 0],
                y: [0, 60, 0, -60, 0],
            }}
            transition={{ duration: 25, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        />
    </div>
);


const Hero: React.FC = () => {
    // Variants for main container
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.3,
        },
      },
    };

    // Variants for text elements (word by word)
    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 12
            }
        },
    };
    
    // Variants for other items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { type: 'spring', stiffness: 80, damping: 15, delay: 0.5 },
        }
    }
    
    const headingText = "Hello, I'm Fayaz Ahmed";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
             <BackgroundShapes />
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                animate="visible"
                className="text-center md:text-left"
            >
                {/* Main Heading with word-by-word animation */}
                <motion.h1 
                    variants={containerVariants}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4"
                >
                    {headingText.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-3">
                        {word}
                    </motion.span>
                    ))}
                </motion.h1>
                
                <motion.p variants={itemVariants} className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-medium mb-8">
                    Senior Frontend Developer
                </motion.p>
                <motion.p variants={itemVariants} className="max-w-xl text-gray-600 dark:text-gray-300 mb-10 mx-auto md:mx-0">
                    I craft beautiful, responsive, and highly performant web applications with a passion for user experience and modern technologies.
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                    href="#contact"
                    className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
                    >
                    Hire Me
                    </a>
                    <a
                    href={mycv}
                    download
                    className="flex items-center justify-center px-8 py-3 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 font-semibold rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                    >
                    <DownloadIcon />
                    Download CV
                    </a>
                </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible" 
                className="flex justify-center md:justify-end"
            >
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    {/* Decorative shape behind image */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full transform rotate-6"
                        animate={{ rotate: [6, -6, 6] }}
                        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                    />
                    <div className="absolute inset-2 bg-gray-100 dark:bg-gray-900 rounded-full p-2">
                         <img 
                            // src="https://picsum.photos/seed/developer/500/500" 
                            src={mypic}
                            alt="Fayaz Ahmed" 
                            className="w-full h-full object-cover rounded-full shadow-2xl"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a 
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        animate={{
            y: [0, 10, 0],
        }}
        transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
        }}
        aria-label="Scroll down"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
};

export default Hero;