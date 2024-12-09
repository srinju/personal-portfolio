import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  index: number;
  technologies: string[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  color,
  index,
  technologies,
  link
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className={`${color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 text-white transform rotate-3`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-700/50 text-blue-300 text-xs rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <motion.a
        href={link}
        className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
        whileHover={{ x: 5 }}
      >
        View Project →
      </motion.a>
    </motion.div>
  );
};