
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Building, Book, Code } from 'lucide-react';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  link, 
  delay = 0 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  link: string; 
  delay?: number; 
}) => (
  <div 
    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 opacity-0 animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="p-8">
      <div className="w-16 h-16 bg-royal/10 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-playfair font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link 
        to={link}
        className="btn-primary inline-flex items-center"
      >
        Learn More
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-royal/10 to-transparent py-20">
          <div className="container-custom text-center">
            <h1 className="section-title mb-6 opacity-0 animate-fade-in">
              Our Premium Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Experience excellence across our diverse range of services, each delivered with 
              our signature blend of professionalism and friendly approach.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Construction Services"
                description="Transform your spaces with our expert construction and renovation services. We bring dreams to reality with precision and care."
                icon={<Building className="w-8 h-8 text-royal" />}
                link="/construction"
                delay={0.3}
              />
              <ServiceCard 
                title="Academic Tutoring"
                description="Excel in your studies with our comprehensive tutoring services across various subjects. Let us guide you to academic success."
                icon={<Book className="w-8 h-8 text-royal" />}
                link="/tutoring"
                delay={0.4}
              />
              <ServiceCard 
                title="Website Development"
                description="Establish your digital presence with our cutting-edge web development solutions. We create websites that make an impact."
                icon={<Code className="w-8 h-8 text-royal" />}
                link="/web-development"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-royal text-white py-16">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Contact us today for a consultation and let's bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="btn-secondary inline-flex items-center opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
