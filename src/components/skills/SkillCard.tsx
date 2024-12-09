import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ title, skills, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.2)",
              color: "#fff"
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};