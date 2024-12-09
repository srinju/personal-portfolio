import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { BarChart2, Droplet, MessageSquare, Cloud } from 'lucide-react';

const projects = [
  {
    title: "Web Analytics Platform",
    description: "Real-time analytics platform with interactive dashboards where users can register their website and get all traffic data , page views , utm sources , user session replays and many more.",
    icon: <BarChart2 className="w-8 h-8" />,
    color: "from-blue-500 to-blue-600",
    technologies: ["React", "WebSocket", "Next.js", "Node.js" , "TypeScript"  , "Prisma" , "PostgreDB"],
    link: "https://github.com/srinju/web-analytics-project"
  },
  {
    title: "Fuel Theft monitoring Device",
    description: "Enterprise IoT platform for device management and real-time monitoring of possible fuel thefts.",
    icon: <Droplet className="w-8 h-8" />,
    color: "from-green-500 to-green-600",
    technologies: ["Node.js", "Firebase", "C++", "Arduino"],
    link: "https://github.com/srinju/fuel-theft-monitoring-system---software"
  },
  {
    title: "DocGOD",
    description: "Advanced AI assistant where you can upload any document and chat with your document.",
    icon: <MessageSquare className="w-8 h-8" />,
    color: "from-purple-500 to-purple-600",
    technologies: ["Python", "OpenAI", "FastAPI", "Node.js" , "Next.js" , "React" , "Prisma" , "PostgreDB"],
    link: "https://github.com/srinju"
  },
  {
    title: "Exchange Wallet Platform",
    description: "Exchange Wallet Platform where you can deposit and withdraw money , send and receive money ",
    icon: <Cloud className="w-8 h-8" />,
    color: "from-orange-500 to-orange-600",
    technologies: ["Node.js", "TypeScript", "React", "Next.js" , "Prisma" , "PostgreDB"],
    link: "https://github.com/srinju/exchange-wallet-platform-FINTECH-"
  }
];

export const Projects: React.FC = () => {
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