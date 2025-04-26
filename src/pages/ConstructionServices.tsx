import React from 'react';
import { Construction, Brush, Building, Wrench, Plug, Home, User, UserCheck } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ConstructionServices = () => {
  const services = [
    {
      title: "Interior & Exterior Painting",
      description: "Professional painting services with premium materials and expert craftsmanship to transform any space with elegant colors and finishes.",
      icon: <Brush className="h-6 w-6 text-royal" />,
    },
    {
      title: "Smart Renovations",
      description: "Modern renovation solutions incorporating smart home technology for enhanced comfort, convenience, and energy efficiency.",
      icon: <Building className="h-6 w-6 text-royal" />,
    },
    {
      title: "Professional Plumbing",
      description: "Expert plumbing services for residential and commercial properties, including installation, repairs, and maintenance.",
      icon: <Wrench className="h-6 w-6 text-royal" />,
    },
    {
      title: "Electrical Works",
      description: "Comprehensive electrical solutions for homes and businesses, ensuring safety, efficiency, and modern capabilities.",
      icon: <Plug className="h-6 w-6 text-royal" />,
    },
    {
      title: "Cleaning Services",
      description: "Premium cleaning solutions for residential and commercial spaces, delivering exceptional cleanliness and hygiene standards.",
      icon: <Home className="h-6 w-6 text-royal" />,
    },
    {
      title: "Custom Carpentry",
      description: "Bespoke carpentry work creating custom furniture, cabinetry, and architectural details with superior craftsmanship.",
      icon: <Construction className="h-6 w-6 text-royal" />,
    },
  ];

  const projects = [
    {
      title: "Modern Residence Renovation",
      description: "Complete renovation of a 3,500 sq ft residence with smart home integration",
    },
    {
      title: "Commercial Office Complex",
      description: "Interior and exterior renovation for a multi-floor office building",
    },
    {
      title: "Luxury Apartment Makeover",
      description: "High-end interior transformation with custom cabinetry and smart solutions",
    },
  ];

  const testimonials = [
    {
      content: "Yarih's construction team delivered exceptional quality. Their attention to detail transformed our space into something truly spectacular.",
      author: "Mrs. Rajalakshmi, Homeowner",
      icon: <UserCheck className="h-14 w-14 text-royal" />,
    },
    {
      content: "The cool roof tiles installed by Yarih Group have significantly reduced the heat inside our home, making it much more comfortable and energy-efficient.",
      author: "Gowtham., IT Staff",
      icon: <User className="h-14 w-14 text-royal" />,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom py-12">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-dark mb-6">
              Premium Construction & Renovation Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yarih Group delivers exceptional construction and renovation services with meticulous attention to detail and luxurious finishing that transforms your spaces.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <HoverCard key={service.title}>
                <HoverCardTrigger asChild>
                  <Card className="relative overflow-hidden group cursor-pointer opacity-0 animate-fade-in h-full" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6 text-charcoal-dark">
                      <div className="flex items-center gap-3 mb-2">
                        {service.icon}
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
              </HoverCard>
            ))}
          </div>
          
          {/* Featured Projects Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="group relative overflow-hidden rounded-xl shadow-lg opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    {testimonial.icon}
                    <div>
                      <p className="font-semibold text-charcoal-dark">{testimonial.author}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 mb-8">
            <Link to="/#contact" className="btn-primary">
              Get a Quote
              <Construction className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConstructionServices;