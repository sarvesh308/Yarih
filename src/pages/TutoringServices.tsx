import React from 'react';
import { GraduationCap, Book, Users, Music, Flower, Heart } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TutoringServices = () => {
  const services = [
    {
      title: "Academic Excellence",
      description: "Personalized academic tutoring for all educational levels, with customized learning paths and expert instructors.",
      icon: <Book className="h-6 w-6 text-gold" />,
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dance classes",
      description: "Fun and engaging dance classes for all ages, focusing on technique, creativity, and self-expression.",
      icon: <Music className="h-6 w-6 text-gold" />,
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Karate Training",
      description: "Professional karate instruction for all ages, focusing on discipline, self-defense, and physical fitness.",
      icon: <Users className="h-6 w-6 text-gold" />,
      image: "https://res.cloudinary.com/dgivrcoir/image/upload/v1745609128/karate-kiyou-shimizu-fighting-stance-8pbvo7vguv5q4say_bc2pqv.jpg"
    },
    {
      title: "Yoga & Mindfulness",
      description: "Holistic yoga and mindfulness sessions promoting physical wellness, mental clarity, and emotional balance.",
      icon: <Flower className="h-6 w-6 text-gold" />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mental Wellness Support",
      description: "Comprehensive mental wellness programs providing tools and strategies for stress management and emotional resilience.",
      icon: <Heart className="h-6 w-6 text-gold" />,
      image: "https://res.cloudinary.com/dgivrcoir/image/upload/v1745608827/download_ldv9ow.jpg"
    },
    {
      title: "Personalized Learning",
      description: "Custom educational experiences designed around individual learning styles, goals, and needs.",
      icon: <GraduationCap className="h-6 w-6 text-gold" />,
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const instructors = [
    {
      name: "KVV Mathimithra",
      role: "Academic Director",
      bio: "An experienced teacher with a passion for personalized learning and student success.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "D Udayakumar",
      role: "Karate Program Lead",
      bio: "Certified karate instructor with a black belt and over 10 years of teaching experience.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "D Udayakumar",
      role: "Wellness Coordinator",
      bio: "Certified yoga instructor and mental health counselor specializing in mindfulness practices.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const testimonials = [
    {
      content: "My daughter's academic performance improved dramatically after just three months with Yarih's tutoring program. The personalized approach made all the difference.",
      author: "Patricia L., Parent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    },
    {
      content: "The yoga and mindfulness sessions have transformed my approach to stress management. I'm more centered, focused, and productive than ever before.",
      author: "James W., Executive",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom py-12">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal-dark mb-6">
              Tutoring & Wellness Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Yarih Group provides transformative education and wellness programs tailored to your personal growth journey, nurturing mind, body, and spirit.
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
          
          {/* Our Approach Section */}
          <div className="mb-20 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Our Educational Approach</h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Personalized Learning</h3>
                  <p className="text-gray-600">Custom education plans designed for individual learning styles and goals.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Expert Instruction</h3>
                  <p className="text-gray-600">Learn from industry professionals with proven expertise and teaching experience.</p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Holistic Development</h3>
                  <p className="text-gray-600">Focus on mental, physical, and emotional well-being for comprehensive growth.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Instructors Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Our Expert Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {instructors.map((instructor, index) => (
                <div 
                  key={instructor.name}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center opacity-0 animate-fade-in flex flex-col items-center"
                  style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                >
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-gold/20"
                  />
                  <h3 className="font-semibold text-xl text-charcoal-dark">{instructor.name}</h3>
                  <p className="text-gold font-medium mb-3">{instructor.role}</p>
                  <p className="text-gray-600 text-sm">{instructor.bio}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-playfair font-bold text-charcoal-dark mb-8 text-center">Student Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-100 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.6 + index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
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
              Book a Session
              <GraduationCap className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TutoringServices;