import React from 'react';
import { Construction, Brush, Building, Wrench, Plug, Home, User, UserCheck, Calendar } from 'lucide-react';
import { HoverCard, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ConstructionServices = () => {
  const services = [
    {
      title: "Interior & Exterior Painting",
      description: "Premium painting services with durable finishes and expert detail. Transform your spaces with vibrant, lasting colors.",
      icon: <Brush className="h-6 w-6 text-royal" />,
    },
    {
      title: "Smart Renovations",
      description: "Integrating modern technology into comfortable, stylish renovations. Experience the future of living with smart solutions.",
      icon: <Building className="h-6 w-6 text-royal" />,
    },
    {
      title: "Professional Plumbing",
      description: "Reliable plumbing solutions built for durability and performance. Leak-free, hassle-free, every time.",
      icon: <Wrench className="h-6 w-6 text-royal" />,
    },
    {
      title: "Electrical Works",
      description: "Safe and modern electrical installations and upgrades. Power your dreams with expert precision.",
      icon: <Plug className="h-6 w-6 text-royal" />,
    },
    {
      title: "Cleaning Services",
      description: "Spotless environments with professional-grade cleaning. Breathe easy in a pristine, healthy space.",
      icon: <Home className="h-6 w-6 text-royal" />,
    },
    {
      title: "Custom Carpentry",
      description: "Crafting tailored woodwork that elevates your space. From bespoke furniture to elegant interiors.",
      icon: <Construction className="h-6 w-6 text-royal" />,
    },
  ];

  const testimonials = [
    {
      content: "Their craftsmanship and reliability exceeded our expectations. Our home feels brand new.",
      author: "Mrs. Rajalakshmi, Homeowner",
      icon: <UserCheck className="h-14 w-14 text-royal" />,
    },
    {
      content: "Cool roofing helped cut our energy bills. Great team, smooth work.",
      author: "Gowtham, IT Staff",
      icon: <User className="h-14 w-14 text-royal" />,
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <head>
        <title>Construction Services in Chennai | Yarih Group</title>
        <meta name="description" content="Yarih Group offers premium construction, renovation, painting, plumbing, electrical, and carpentry services in Chennai. Book a free session to get a personalized quote for your dream project." />
        <meta name="keywords" content="Construction, Renovation, Painting, Plumbing, Electrical, Carpentry, Cleaning, Chennai, Smart Home, Yarih Group, Free Quote" />
        <meta property="og:title" content="Construction Services in Chennai | Yarih Group" />
        <meta property="og:description" content="Transform your space with Yarih Group's expert construction and renovation services. Book a free session for a personalized quote." />
      </head>
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <div className="relative h-[100vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://res.cloudinary.com/dgivrcoir/video/upload/v1747571694/videoplayback_2_ojbw8h.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent z-10" />

        <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold font-playfair tracking-tight text-gold mb-4 drop-shadow-lg"
            >
              Crafting Dreams into Reality
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl font-poppins text-white/90 max-w-2xl mx-auto leading-relaxed tracking-wide"
            >
              At <span className="text-gold font-semibold">Yarih Group</span>, we turn your vision into timeless living and working spaces through
              high-quality construction, thoughtful renovation, and next-gen smart solutions.
            </motion.p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact#reach-us" className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-lg shadow-lg bg-gold hover:bg-yellow-600 transition font-semibold">
                <Calendar className="h-5 w-5" />
                Book a Free Session
              </Link>
              <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4 rounded-lg border border-gold text-gold hover:bg-gold hover:text-white transition font-semibold">
                <Construction className="h-5 w-5" />
                Get a Quote
              </Link>
            </div>
            <p className="mt-6 text-white/80 text-sm max-w-xl mx-auto">
              Book a free consultation with our experts to discuss your project requirements, get creative ideas, and receive a transparent, no-obligation quote. Your dream space is just a session away!
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-16">
        <div className="container-custom">

          {/* Services Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">
              Our Construction & Renovation Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              From concept to completion, Yarih Group delivers excellence in every detail. Our team of skilled professionals ensures your project is handled with care, creativity, and the latest technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <HoverCard key={service.title}>
                  <HoverCardTrigger asChild>
                    <Card className="relative overflow-hidden group cursor-pointer opacity-0 animate-fade-in h-full shadow-xl border-gold/10 border" style={{ animationDelay: `${index * 0.2 + 0.5}s` }}>
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
          </div>

          {/* Why Choose Yarih Group */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Why Choose Yarih Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gold/10">
                <h3 className="font-semibold text-xl mb-2 text-gold">Expertise & Experience</h3>
                <p className="text-gray-600">Our team brings decades of experience in construction, renovation, and smart home solutions. We deliver quality, reliability, and innovation in every project.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gold/10">
                <h3 className="font-semibold text-xl mb-2 text-gold">Transparent Pricing</h3>
                <p className="text-gray-600">No hidden charges. Get detailed, honest quotations and clear timelines. We believe in building trust as much as we build spaces.</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8 text-center border border-gold/10">
                <h3 className="font-semibold text-xl mb-2 text-gold">Customer-Centric Approach</h3>
                <p className="text-gray-600">Your satisfaction is our priority. We listen, adapt, and deliver solutions tailored to your needs, ensuring a seamless and stress-free experience.</p>
              </div>
            </div>
          </div>

          {/* Book a Free Session Section */}
          <div className="mb-20">
            <div className="bg-gold/10 rounded-2xl p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-playfair text-gold mb-3">Book a Free Session</h3>
                <p className="text-gray-700 mb-4">
                  Ready to start your project? Schedule a complimentary session with our construction consultants. We’ll listen to your ideas, answer your questions, and provide expert guidance—absolutely free.
                </p>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                  <li>Personalized project assessment</li>
                  <li>Creative design & material suggestions</li>
                  <li>Transparent, detailed quotations</li>
                  <li>No hidden charges, no obligation</li>
                </ul>
                <Link to="/contact#reach-us" className="btn-primary flex items-center gap-2 text-lg px-6 py-3 rounded-lg bg-gold hover:bg-yellow-600 text-white font-semibold shadow">
                  <Calendar className="h-5 w-5" />
                  Book Now
                </Link>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
                  alt="Book a Free Construction Session"
                  className="rounded-xl shadow-lg w-full max-w-xs object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Client Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.5 + index * 0.3 + 1.5}s` }}
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

          {/* CTA Button */}
          <div className="text-center mt-16 mb-8">
            <Link to="/contact#reach-us" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg bg-gold hover:bg-yellow-600 text-white font-semibold flex items-center justify-center gap-2">
              Book a Free Session
              <Calendar className="ml-2 h-5 w-5" />
            </Link>
            <div className="mt-4">
              <Link to="/contact" className="btn-secondary text-gold border-gold border px-8 py-4 rounded-lg font-semibold hover:bg-gold hover:text-white transition flex items-center justify-center gap-2">
                Get a Quote
                <Construction className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ConstructionServices;