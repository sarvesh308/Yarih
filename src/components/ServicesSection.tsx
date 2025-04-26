import React from 'react';
import { Brush, Plug, Wrench, Building, Book, Music, Flower, Code, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCategory = ({ 
  title, 
  description, 
  services, 
  delay = 0,
  color = "royal",
  link
}: { 
  title: string; 
  description: string; 
  services: Array<{ icon: React.ReactNode; name: string; }>;
  delay?: number;
  color?: "royal" | "gold" | "charcoal";
  link: string;
}) => {
  const colorClasses = {
    royal: "from-royal to-royal-light",
    gold: "from-gold to-gold-light",
    charcoal: "from-charcoal to-charcoal-light",
  };

  return (
    <div 
      className="service-card opacity-0 animate-fade-in" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${colorClasses[color]}`}></div>
      <div className="p-6 md:p-8">
        <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-charcoal-dark">
          {title}
        </h3>
        <p className="text-gray-600 mb-8">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className="flex items-center gap-3 p-4 rounded-lg bg-gray-50 hover:bg-gradient-to-br hover:from-white hover:to-gray-100 transition-all duration-300 card-hover"
            >
              <div className={`p-2 rounded-full bg-${color}/10 text-${color}`}>
                {service.icon}
              </div>
              <span className="font-medium text-charcoal-dark">
                {service.name}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link 
            to={link}
            className={`btn-outline border-${color} text-${color} hover:bg-${color}/10`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const constructionServices = [
    { icon: <Brush size={18} />, name: "Interior Painting" },
    { icon: <Brush size={18} />, name: "Exterior Painting" },
    { icon: <Plug size={18} />, name: "Electrical Works" },
    { icon: <Wrench size={18} />, name: "Plumbing" },
    { icon: <Building size={18} />, name: "Cleaning Services" },
    { icon: <Building size={18} />, name: "Smart Renovations" },
  ];

  const tutoringServices = [
    { icon: <Book size={18} />, name: "Academic Tutoring" },
    { icon: <Music size={18} />, name: "Ballet Training" },
    { icon: <Music size={18} />, name: "Hip-Hop Classes" },
    { icon: <Flower size={18} />, name: "Yoga Sessions" },
    { icon: <Flower size={18} />, name: "Mental Wellness" },
    { icon: <Book size={18} />, name: "Personalized Learning" },
  ];

  const developmentServices = [
    { icon: <Code size={18} />, name: "Website Design" },
    { icon: <Code size={18} />, name: "React Development" },
    { icon: <Server size={18} />, name: "Node.js Backend" },
    { icon: <Cloud size={18} />, name: "Hosting Solutions" },
    { icon: <Code size={18} />, name: "Responsive Design" },
    { icon: <Cloud size={18} />, name: "SEO Optimization" },
  ];

  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom">
        <h2 className="section-title text-center opacity-0 animate-fade-in">
          Our Premium Services
        </h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We offer a diverse range of high-quality services tailored to meet your needs 
          across multiple domains with unparalleled excellence.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          <ServiceCategory 
            title="Construction & Renovation" 
            description="Transform your spaces with our premium construction and renovation services, delivered with meticulous attention to detail and luxurious finishing."
            services={constructionServices}
            delay={0.3}
            color="royal"
            link="/construction"
          />
          
          <ServiceCategory 
            title="Tutoring & Wellness" 
            description="Elevate your mind and body with our expert tutoring and wellness programs designed to enhance your knowledge and well-being."
            services={tutoringServices}
            delay={0.5}
            color="gold"
            link="/tutoring"
          />
          
          <ServiceCategory 
            title="Website Development" 
            description="Establish a commanding online presence with our cutting-edge website development services and custom digital solutions."
            services={developmentServices}
            delay={0.7}
            color="charcoal"
            link="/web-development"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
