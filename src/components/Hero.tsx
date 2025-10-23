'use client';
  
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PARTICLE_COUNT = 40;

const Hero = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; size: number; left: string; top: string; animationDuration: string }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      size: Math.floor(Math.random() * 8) + 3,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 20 + 10}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Background Video / Gradient */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="https://res.cloudinary.com/dgivrcoir/video/upload/v1745911621/5529079-hd_1920_1080_30fps_h93pan.mp4" type="video/mp4" />
        {/* Fallback for browsers */}
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black/20 z-0" />

      {/* Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gold/60 blur-md opacity-70 animate-particles-move"
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

      {/* Content */}
      <div className="z-20 text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-playfair leading-tight tracking-tight"
        >
          <span className="text-gold">Yarih</span> Group
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl mt-6 text-white/80"
        >
          Building excellence across <span className="text-gold">construction, wellness, education, and digital innovation</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#services" className="btn-gold-glow">
            Explore Services
          </a>
          <a href="#contact" className="btn-glass-outline">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold z-30 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={34} />
      </a>
    </section>
  );
};

export default Hero;
