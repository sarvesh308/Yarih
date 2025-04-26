
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

// Particle configuration
const PARTICLE_COUNT = 20;

const Hero = () => {
  const [particles, setParticles] = useState<Array<{id: number, size: number, left: string, top: string, animationDuration: string}>>([]);

  useEffect(() => {
    // Create random particle positions
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 15) + 5, // 5-20px
      left: `${Math.floor(Math.random() * 100)}%`,
      top: `${Math.floor(Math.random() * 100)}%`,
      animationDuration: `${Math.floor(Math.random() * 20) + 10}s`, // 10-30s
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center py-24"
    >
      {/* Particle animation for luxury effect */}
      <div className="particle-container">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particles-move"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <span className="text-gold">Yarih</span> Group
        </h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Elevating standards across construction, education, wellness, and digital development with premium services tailored to excellence.
        </p>
        <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <a href="#services" className="btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="btn-outline border-white text-white hover:bg-white/10">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a 
        href="#services" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
