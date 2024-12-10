import { ParticleField } from './components/hero/ParticleField';
import { HeroContent } from './components/hero/HeroContent';
import { Projects } from './components/projects/Projects';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen relative">
      {/* Single ParticleField that spans the entire page */}
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>
      
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