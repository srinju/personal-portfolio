import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "Rust", "Go" , "Java" , "SQL"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Three.js", "Tailwind" , "Next.js"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Backend",
    skills: ["Node.js", "GraphQL", "PostgreSQL", "Redis" , "Web Sockets" , "Web-RTC"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD" , "Kafka" , "Grafana"],
    color: "from-orange-500 to-orange-600"
  },
  {
    title: "AI/ML",
    skills: ["TensorFlow", "PyTorch", "OpenAI", "LangChain" , "Sckit-learn" , "NLP" ],
    color: "from-pink-500 to-pink-600"
  },{
    title: "Databases",
    skills: ["Postgres", "MongoDB", "GraphQL"],
    color: "from-green-500 to-green-600"
  },{
    title: "Other tools",
    skills: ["RestFul APIs", "JSON parsing", "Object oriented Programming", "Data Structures and Algorithms" , "PostMan" ],
    color: "from-pink-500 to-pink-600"
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/50 to-gray-900" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
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
              color={category.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};