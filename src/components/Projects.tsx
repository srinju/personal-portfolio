import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Droplet, MessageSquare, Recycle } from 'lucide-react';

const projects = [
  {
    title: "Web Analytics Platform",
    description: "Advanced analytics platform with real-time data processing and visualization",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "bg-blue-500"
  },
  {
    title: "Fuel Theft Detection System",
    description: "IoT-based monitoring system for detecting and preventing fuel theft",
    icon: <Droplet className="w-8 h-8" />,
    color: "bg-green-500"
  },
  {
    title: "Waste Management CRM",
    description: "Comprehensive CRM platform for waste management operations",
    icon: <Recycle className="w-8 h-8" />,
    color: "bg-purple-500"
  },
  {
    title: "DocGod",
    description: "AI-powered document chat interface using advanced NLP",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "bg-orange-500"
  }
];

export const Projects = () => {
  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`${project.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 text-white`}>
                {project.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};