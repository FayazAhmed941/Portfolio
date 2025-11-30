
import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon } from './icons/ThemeIcons';

const ThemeToggle: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
