import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';

export const HeroContent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="z-10 text-center px-4 relative"
    >
      <div className="mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative inline-block"
        >
          <img 
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-xl"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              borderColor: ["#3B82F6", "#8B5CF6", "#3B82F6"]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border-2 border-blue-500"
          />
        </motion.div>
      </div>

      <h1 className="text-6xl font-bold text-white mb-4">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Srinjoy Das
        </span>
      </h1>
      
      <div className="flex items-center justify-center mb-8">
        <Terminal className="text-blue-500 mr-2" />
        <TypewriterEffect texts={[
          "Software Developer",
          "AI Enthusiast",
          "Full Stack Engineer",
          "Problem Solver"
        ]} />
      </div>
      
      <motion.div 
        className="flex justify-center space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[
          { icon: <Github size={28} />, href: "https://github.com", color: "hover:text-blue-500" },
          { icon: <Linkedin size={28} />, href: "https://linkedin.com", color: "hover:text-blue-400" },
          { icon: <Mail size={28} />, href: "mailto:contact@example.com", color: "hover:text-purple-500" }
        ].map((social, index) => (
          <motion.a
            key={social.href}
            href={social.href}
            className={`text-white ${social.color} transition-colors duration-300`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};