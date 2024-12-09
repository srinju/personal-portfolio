import React from 'react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  technologies: string[];
  link: string;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  color,
  technologies,
  link,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-20 group-hover:opacity-30 transition-opacity duration-500"
           style={{ backgroundImage: `linear-gradient(to right, ${color})` }} />
      
      <div className="relative p-6">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center mb-4 text-white shadow-lg`}
        >
          {icon}
        </motion.div>

        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-gray-700/50 text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.a
          href={link}
          whileHover={{ x: 5 }}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          View Project
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};