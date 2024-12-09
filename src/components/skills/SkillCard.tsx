import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
  color: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  index,
  color,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-800/70 transition-all duration-500"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
      
      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        {title}
      </h3>
      
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + idx * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm hover:bg-gray-700/70 hover:text-white transition-all duration-300 cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};