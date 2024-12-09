import React from 'react';
import { ParticleField } from './components/hero/ParticleField';
import { HeroContent } from './components/hero/HeroContent';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900/50 to-gray-900 z-0" />
      <ParticleField />
      
      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <HeroContent />
        </section>
        
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;