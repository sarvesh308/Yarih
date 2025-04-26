
import React from 'react';
import { Code, Laptop, Server, Cloud, Search, Rocket } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const WebDevelopment = () => {
  const services = [
    {
      title: "Modern Web Design",
      description: "Cutting-edge web design with responsive layouts, engaging user experiences, and visually stunning interfaces.",
      icon: <Code className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Full-Stack Development",
      description: "Comprehensive development solutions using React, Node.js, and other modern technologies and frameworks.",
      icon: <Laptop className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable hosting and cloud infrastructure for optimal performance, security, and reliability.",
      icon: <Server className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SEO Optimization",
      description: "Strategic search engine optimization to improve visibility, rankings, and organic traffic to your website.",
      icon: <Search className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom online store development with secure payment processing, inventory management, and user-friendly interfaces.",
      icon: <Cloud className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Website Maintenance",
      description: "Ongoing support, updates, and optimization to ensure your website remains secure, fast, and effective.",
      icon: <Rocket className="h-6 w-6 text-charcoal" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const technologies = [
    { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" },
    { name: "Node.js", logo: "https://nodejs.org/static/images/logo.svg" },
    { name: "TypeScript", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" },
    { name: "MongoDB", logo: "https://www.mongodb.com/assets/images/global/favicon.ico" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
    { name: "Firebase", logo: "https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png" }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Custom-built online shopping platform with inventory management and payment processing",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Corporate Website",
      description: "Responsive corporate website with content management system and analytics integration",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      tags: ["TypeScript", "React", "AWS"]
    },
    {
      title: "Mobile App Integration",
      description: "Web services and APIs supporting cross-platform mobile application functionality",
      image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?auto=format&fit=crop&w=800&q=80",
      tags: ["Node.js", "Firebase", "React Native"]
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom py-12">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-dark mb-6">
              Website Development Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yarih Group creates cutting-edge digital solutions that drive business growth and user engagement through innovative design and robust development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <HoverCard key={service.title}>
                <HoverCardTrigger asChild>
                  <Card className="relative overflow-hidden group cursor-pointer opacity-0 animate-fade-in h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        {service.icon}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>

          {/* Development Process */}
          <div className="mb-20 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Our Development Process</h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <ol className="relative border-l border-charcoal/30">
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-charcoal rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white text-sm font-bold">1</span>
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-charcoal-dark">Discovery & Strategy</h3>
                  <p className="text-gray-600 mt-2">We begin by understanding your business goals, target audience, and project requirements to develop a strategic plan.</p>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-charcoal rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white text-sm font-bold">2</span>
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-charcoal-dark">Design & Prototyping</h3>
                  <p className="text-gray-600 mt-2">Our designers create wireframes and mockups that align with your brand identity and provide optimal user experience.</p>
                </li>
                <li className="ml-6 mb-10">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-charcoal rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white text-sm font-bold">3</span>
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-charcoal-dark">Development & Testing</h3>
                  <p className="text-gray-600 mt-2">Our engineers build your solution using modern frameworks and rigorous testing methodologies to ensure quality.</p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-charcoal rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white text-sm font-bold">4</span>
                  </span>
                  <h3 className="flex items-center text-xl font-semibold text-charcoal-dark">Launch & Support</h3>
                  <p className="text-gray-600 mt-2">We deploy your solution and provide ongoing maintenance, optimization, and support services.</p>
                </li>
              </ol>
            </div>
          </div>
          
          {/* Technologies Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Technologies We Use</h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                {technologies.map((tech, index) => (
                  <div 
                    key={tech.name} 
                    className="flex flex-col items-center opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="h-16 object-contain mb-4"
                    />
                    <p className="font-medium text-charcoal-dark">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 opacity-0 animate-fade-in group"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-charcoal-dark mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="inline-block bg-charcoal/10 text-charcoal-dark px-3 py-1 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-8">
            <Link to="/#contact" className="btn-primary">
              Start Project
              <Code className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
