
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, CloseIcon } from './icons/ProjectIcons';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 200, damping: 25 },
  },
  exit: { scale: 0.9, opacity: 0, transition: { duration: 0.2 } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        layoutId={`card-container-${project.id}`}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-3xl w-full mx-auto overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white z-10"
          aria-label="Close"
        >
          <CloseIcon />
        </button>
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover"
          layoutId={`image-${project.id}`}
        />
        <div className="p-8">
          <motion.h2 layoutId={`title-${project.id}`} className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</motion.h2>
          <motion.p layoutId={`description-${project.id}`} className="text-indigo-500 dark:text-indigo-400 mb-4">{project.category}</motion.p>
          <p className="text-gray-700 dark:text-gray-300 mb-6">{project.longDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-800 font-semibold rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors">
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
                <ExternalLinkIcon /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
