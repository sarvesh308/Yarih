import React, { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 65, label: 'Projects Completed', prefix: '+' },
  { value: 95, label: 'Happy Clients', suffix: '%' },
  { value: 4, label: 'Years Experience', suffix: '+' },
  { value: 12, label: 'Service Categories', suffix: '+' },
];

const Counter = ({ end, duration = 2000, delay = 0, prefix = '', suffix = '' }: { 
  end: number, 
  duration?: number, 
  delay?: number, 
  prefix?: string, 
  suffix?: string 
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
          
          const startTime = Date.now();
          const timer = setInterval(() => {
            const timePassed = Date.now() - startTime - delay;
            if (timePassed <= 0) return;
            
            const progress = Math.min(timePassed / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress === 1) {
              clearInterval(timer);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [end, duration, delay, started]);

  return (
    <div ref={countRef} className="text-4xl md:text-5xl font-bold font-playfair text-royal">
      {prefix}{count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title opacity-0 animate-fade-in">
              About Yarih Group
            </h2>
            <p className="text-lg text-gray-600 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Founded in 2023, Yarih Group has grown into a distinguished leader providing 
              exceptional services across various sectors. Our dedication to innovation, 
              quality, and client satisfaction defines our approach in everything we do.
            </p>
            <p className="text-lg text-gray-600 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              At Yarih Group, our mission is to deliver excellence by crafting tailored 
              solutions — whether it's building landmark spaces, offering cutting-edge 
              digital experiences, or fostering growth through education and wellness.
            </p>
            <div className="mt-10 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-primary">
                Learn Our Story
              </a>
            </div>
          </div>

          {/* Animated stats */}
          <div className="gradient-border opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="gradient-border-content">
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <Counter 
                      end={stat.value} 
                      delay={index * 300} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix}
                    />
                    <p className="text-gray-600 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
