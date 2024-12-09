import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Droplet, MessageSquare, Recycle } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "Web Analytics Platform",
    description: "Advanced analytics platform with real-time data processing and visualization using WebSocket streams and interactive dashboards.",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "bg-gradient-to-br from-blue-500 to-blue-600",
    technologies: ["React", "WebSocket", "D3.js", "Node.js"],
    link: "#"
  },
  {
    title: "Fuel Theft Detection System",
    description: "IoT-based monitoring system utilizing machine learning algorithms to detect and prevent fuel theft in real-time.",
    icon: <Droplet className="w-8 h-8" />,
    color: "bg-gradient-to-br from-green-500 to-green-600",
    technologies: ["Python", "TensorFlow", "IoT", "AWS"],
    link: "#"
  },
  {
    title: "Waste Management CRM",
    description: "Comprehensive CRM platform with route optimization and real-time tracking for waste management operations.",
    icon: <Recycle className="w-8 h-8" />,
    color: "bg-gradient-to-br from-purple-500 to-purple-600",
    technologies: ["Next.js", "PostgreSQL", "GraphQL", "Docker"],
    link: "#"
  },
  {
    title: "DocGod",
    description: "AI-powered document chat interface using advanced NLP for intelligent document analysis and interaction.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "bg-gradient-to-br from-orange-500 to-orange-600",
    technologies: ["OpenAI", "React", "Node.js", "MongoDB"],
    link: "#"
  }
];

export const Projects = () => {
  return (
    <div className="py-20 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-xl">
            Some of my recent work
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};