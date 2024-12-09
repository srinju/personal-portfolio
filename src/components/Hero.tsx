import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <img 
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-xl"
        />
        <h1 className="text-5xl font-bold text-white mb-4">John Doe</h1>
        <p className="text-xl text-gray-200 mb-8">Software Developer & AI Enthusiast</p>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="text-white hover:text-gray-300 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="text-white hover:text-gray-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};