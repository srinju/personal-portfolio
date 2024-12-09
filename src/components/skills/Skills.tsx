import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

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
    <div className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-xl">
            Technologies I work with
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};