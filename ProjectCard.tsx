import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer group"
      onClick={() => onSelect(project)}
      whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", transition: { duration: 0.3 } }}
      layoutId={`card-container-${project.id}`}
    >
      <div className="relative">
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-48 object-cover"
          layoutId={`image-${project.id}`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">View Details</span>
        </div>
      </div>
      <div className="p-6">
        <motion.h3 layoutId={`title-${project.id}`} className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</motion.h3>
        <motion.p layoutId={`description-${project.id}`} className="text-gray-600 dark:text-gray-300">{project.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;