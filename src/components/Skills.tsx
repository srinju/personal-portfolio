import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Rust", "Go-Lang", "HTML", "CSS"]
  },
  {
    title: "Frameworks",
    skills: ["React.js", "Next.js", "Node.js", "WebRTC", "WebSockets", "PrismaORM", "GraphQL"]
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "Postman", "Kafka", "Grafana", "OpenAPI", "Turborepos", "Monorepos", "AWS"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase"]
  },
  {
    title: "AI/ML",
    skills: ["OpenAI GPT APIs", "TensorFlow", "Scikit-learn", "NLP"]
  }
];

export const Skills = () => {
  return (
    <div className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-900 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};