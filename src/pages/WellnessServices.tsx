  import React from 'react';
  import { Flower, Heart, Users, Music, Activity, Award, Feather, Star } from 'lucide-react';
  import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
  import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
  import { Button } from "@/components/ui/button";
  import { Link, useNavigate } from 'react-router-dom';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import { motion } from 'framer-motion';

  // WellnessClasses data (now uses professional colourful icons)
  const wellnessClasses = [
    {
      title: "Yoga & Mindfulness",
      description: "Inner peace, flexibility, focus",
      onlinePrice: 250,
      personalPrice: 500,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white shadow-lg">
          <Feather className="w-6 h-6" />
        </div>
      ),
      features: ["Stress reduction", "Flexibility training", "Meditation techniques"]
    },
    {
      title: "Karate Training",
      description: "Self-defense, confidence",
      onlinePrice: 300,
      personalPrice: 600,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg">
          <Activity className="w-6 h-6" />
        </div>
      ),
      features: ["Disciplined practice", "Self-defense skills", "Physical conditioning"]
    },
    {
      title: "Mental Wellness Coaching",
      description: "Therapy, stress relief",
      onlinePrice: 500,
      personalPrice: 900,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
          <Star className="w-6 h-6" />
        </div>
      ),
      features: ["Stress management", "Emotional balance", "Personalized guidance"]
    },
    {
      title: "Dance Classes",
      description: "Hip-Hop, Classical, Zumba",
      onlinePrice: 350,
      personalPrice: 600,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
          <Music className="w-6 h-6" />
        </div>
      ),
      features: ["Various dance styles", "Choreography training", "Fun workout"]
    },
    {
      title: "Aerobics & Fitness",
      description: "Group workouts, energy boost",
      onlinePrice: 250,
      personalPrice: 450,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-500 flex items-center justify-center text-white shadow-lg">
          <Users className="w-6 h-6" />
        </div>
      ),
      features: ["Cardio exercises", "Strength training", "Group motivation"]
    },
    {
      title: "Kids Wellness Programs",
      description: "Growth-oriented, fun & focus",
      onlinePrice: 200,
      personalPrice: 400,
      icon: (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-300 to-emerald-500 flex items-center justify-center text-white shadow-lg">
          <Award className="w-6 h-6" />
        </div>
      ),
      features: ["Age-appropriate activities", "Mental development", "Playful learning"]
    }
  ];

  const services = [
    {
      title: "Yoga & Mindfulness",
      description: "Holistic yoga and mindfulness sessions to promote physical wellness, mental clarity, and emotional balance.",
      icon: <Flower className="h-6 w-6 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Karate Training",
      description: "Professional karate instruction for all ages, focusing on discipline, self-defense, and physical fitness.",
      icon: <Users className="h-6 w-6 text-amber-500" />,
      image: "https://res.cloudinary.com/dgivrcoir/image/upload/v1745609128/karate-kiyou-shimizu-fighting-stance-8pbvo7vguv5q4say_bc2pqv.jpg"
    },
    {
      title: "Dance Classes",
      description: "Fun and engaging dance classes for all ages, focusing on technique, creativity, and self-expression.",
      icon: <Music className="h-6 w-6 text-pink-500" />,
      image: "https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sound Healing",
      description: "Relax and restore with therapeutic sound sessions for stress relief and inner balance.",
      icon: <Heart className="h-6 w-6 text-indigo-500" />,
      image: "https://res.cloudinary.com/dgivrcoir/image/upload/v1748001609/WhatsApp_Image_2025-05-23_at_17.28.09_hej3k2.jpg"
    },
    {
      title: "Mental Wellness Support",
      description: "Guided meditation sessions inspired by nature for deep relaxation and rejuvenation.",
      icon: <Flower className="h-6 w-6 text-emerald-500" />,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
    },
  ];

  const instructors = [
    {
      name: "D Udayakumar",
      role: "Karate Program Lead",
      bio: "Certified karate instructor with a black belt and over 10 years of teaching experience.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "KVV Mathimithra",
      role: "Yoga & Mindfulness Coach",
      bio: "Certified yoga instructor and wellness coach specializing in holistic health and mindfulness.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&q=80"
    },
    {
      name: "Varsha",
      role: "Dance Instructor",
      bio: "Professional dancer and choreographer with a passion for creative movement and self-expression.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const testimonials = [
    {
      content: "The yoga and mindfulness sessions have transformed my approach to stress management. I'm more centered, focused, and productive than ever before.",
      author: "Anandh, Client",
      image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80"
    },
    {
      content: "Karate classes at Yarih have boosted my child's confidence and discipline. The instructors are truly dedicated.",
      author: "Ramesh, Parent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
    }
  ];

  const WellnessServices: React.FC = () => {
    const navigate = useNavigate();

    return (
      <>
        <Navbar />

        {/* Fullscreen Hero Video Section */}
        <div className="relative w-full h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          >
            <source src="https://res.cloudinary.com/dgivrcoir/video/upload/v1747581491/992694-hd_1920_1080_25fps_e0ntgi.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40 z-10 flex flex-col justify-center items-center text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold font-playfair mb-4 drop-shadow-md tracking-tight text-emerald-400"
            >
              Wellness Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-base md:text-lg font-poppins text-white/90 max-w-3xl leading-relaxed tracking-wide"
            >
              <span className="text-white/95 font-medium">Yarih Group</span> offers holistic wellness programs for mind, body, and spirit—empowering you through yoga, karate, dance, fitness, and more.
            </motion.p>
          </div>

          // ...existing code...
          {/* CTA Button - Bottom Center (Stylish Gold) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-16 w-full flex justify-center z-20"
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/contact#reach-us')}
                className="relative px-10 py-4 text-lg font-semibold rounded-full text-gray-900
                           bg-gradient-to-r from-[#FFD700] via-[#FFC857] to-[#D4AF37]
                           shadow-[0_0_25px_rgba(255,215,0,0.4)]
                           hover:shadow-[0_0_45px_rgba(255,215,0,0.7)]
                           hover:scale-105 transition-all duration-300 ease-out
                           border border-yellow-300 backdrop-blur-sm overflow-hidden"
                aria-label="Book free demo"
              >
                <span className="relative z-10">Book Free Demo</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500" />
              </button>

              <button
                onClick={() => navigate('/contact#reach-us')}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-white border border-white/100 bg-black/20 hover:bg-white/5 transition-all duration-200"
                aria-label="Request callback"
              >
                Request Callback
              </button>
            </div>
          </motion.div>

        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-b from-emerald-50 to-white">
          <div className="container-custom py-16">
            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <HoverCard key={service.title + index}>
                  <HoverCardTrigger asChild>
                    <Card className="relative overflow-hidden group cursor-pointer opacity-0 animate-fade-in h-full" style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'forwards' }}>
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

            {/* Wellness Classes Section */}
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold text-emerald-700 mb-8 text-center">Wellness Classes</h2>
              <p className="section-subtitle text-center mb-10 text-gray-700">
                Holistic wellness programs designed to enhance physical, mental, and emotional wellbeing
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {wellnessClasses.map((wellnessClass, index) => (
                  <Card key={index} className="edu-card group h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        {wellnessClass.icon}
                        <div>
                          <CardTitle className="text-2xl">{wellnessClass.title}</CardTitle>
                          <CardDescription className="text-sm text-gray-600">{wellnessClass.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium">Online</span>
                          <span className="text-emerald-700 font-bold">₹{wellnessClass.onlinePrice}/session</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                          <span className="font-medium">Personal</span>
                          <span className="text-emerald-700 font-bold">₹{wellnessClass.personalPrice}/session</span>
                        </div>
                        <ul className="space-y-2 mt-4">
                          {wellnessClass.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-3 h-3 bg-emerald-500 rounded-full mt-2 mr-3" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
                        onClick={() => navigate('/contact#reach-us')}
                      >
                        Join Now
                      </Button>
                    </CardFooter>
                    <div className="edu-card-overlay" />
                  </Card>
                ))}
              </div>
            </div>

            {/* Our Approach */}
            <div className="mb-20 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl font-playfair font-bold text-emerald-700 mb-8 text-center">Our Wellness Approach</h2>
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Holistic Wellbeing',
                      icon: <Flower className="h-8 w-8 text-emerald-400" />,
                      desc: 'Integrated programs for mind, body, and spirit.',
                    },
                    {
                      title: 'Expert Instructors',
                      icon: <Users className="h-8 w-8 text-emerald-400" />,
                      desc: 'Learn from certified professionals with years of experience.',
                    },
                    {
                      title: 'Community Support',
                      icon: <Heart className="h-8 w-8 text-emerald-400" />,
                      desc: 'A supportive environment for your wellness journey.',
                    },
                  ].map(({ title, icon, desc }) => (
                    <div key={title} className="text-center p-6 bg-emerald-50 rounded-lg">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {icon}
                      </div>
                      <h3 className="font-semibold text-xl mb-2">{title}</h3>
                      <p className="text-gray-600">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instructors */}
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold text-emerald-700 mb-8 text-center">Our Wellness Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {instructors.map((instructor, index) => (
                  <div
                    key={instructor.name + index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center opacity-0 animate-fade-in flex flex-col items-center"
                    style={{ animationDelay: `${0.4 + index * 0.2}s`, animationFillMode: 'forwards' }}
                  >
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-emerald-100"
                    />
                    <h3 className="font-semibold text-xl text-emerald-700">{instructor.name}</h3>
                    <p className="text-emerald-500 font-medium mb-3">{instructor.role}</p>
                    <p className="text-gray-600 text-sm">{instructor.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-20">
              <h2 className="text-3xl font-playfair font-bold text-emerald-700 mb-8 text-center">Wellness Testimonials</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-md border border-gray-100 opacity-0 animate-fade-in"
                    style={{ animationDelay: `${0.6 + index * 0.2}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-emerald-700">{testimonial.author}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 mb-8">
              <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:scale-105 transition-transform">
                Book a Wellness Session
                <Flower className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  };

  export default WellnessServices;