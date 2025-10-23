import React from 'react';
import { Link } from 'react-router-dom';

// ...existing code...
const ServiceCategory = ({
  title,
  description,
  media,
  color = 'royal',
  link,
  reverse = false,
  buttonColor,
}: {
  title: string;
  description: string;
  // allow flexible media.type and color/buttonColor strings to avoid strict literal errors
  media: { type: 'image' | 'video' | string; src: string };
  color?: string;
  link: string;
  reverse?: boolean;
  buttonColor?: string;
}) => {
  const colorClasses: Record<string, string> = {
    royal: 'from-royal to-royal-light',
    gold: 'from-gold to-gold-light',
    charcoal: 'from-charcoal to-charcoal-light',
    emerald: 'from-emerald to-emerald-light',
    teal: 'from-teal-500 to-teal-300',
    slate: 'from-slate-700 to-slate-400',
  };

  const btnColor = buttonColor || color;
  const gradientClass = colorClasses[color] || colorClasses['royal'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 opacity-0 animate-fade-in">
      {/* Media */}
      <div className={`relative ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <div className="rounded-3xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
          {media.type === 'video' ? (
            <video
              src={media.src}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={media.src}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-30 rounded-3xl`}
        ></div>
      </div>

      {/* Text */}
      <div className={`p-6 md:p-8 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
        <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-4 text-charcoal-dark">
          {title}
        </h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          to={link}
          // use fallback button classes when dynamic color isn't in tailwind safe list
          className={`btn-primary ${btnColor ? 'bg-' + btnColor : 'bg-royal'} text-white px-6 py-3 rounded-full hover:opacity-95 transition`}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};
// ...existing code...

const ServicesSection = () => {
  const services: {
    title: string;
    description: string;
    media: { type: 'image' | 'video' | string; src: string };
    color?: string;
    buttonColor?: string;
    link: string;
    reverse?: boolean;
  }[] = [
    {
      title: 'Construction & Renovation',
      description:
        'Transform your spaces with our premium construction and renovation services, delivered with meticulous attention to detail and luxurious finishing.',
      media: {
        type: 'video',
        src: 'https://res.cloudinary.com/dgivrcoir/video/upload/v1747578186/My_Video_olc2kc.mp4',
      },
      color: 'emerald',
      buttonColor: 'gold',
      link: '/construction',
      reverse: false,
    },
    {
      title: 'Tutoring',
      description:
        'Enhance your knowledge with our expert tutoring services, offering personalized learning experiences for students of all ages.',
      media: {
        type: 'video',
        src: 'https://res.cloudinary.com/dgivrcoir/video/upload/v1747581529/videoplayback_3_lhvcvp.mp4',
      },
      color: 'teal',
      link: '/tutoring',
      reverse: true,
    },
    {
      title: 'Wellness',
      description:
        'Achieve mental and physical well-being with our wellness programs, including yoga, mindfulness, and mental health support.',
      media: {
        type: 'video',
        src: 'https://res.cloudinary.com/dgivrcoir/video/upload/v1747581491/992694-hd_1920_1080_25fps_e0ntgi.mp4',
      },
      color: 'emerald',
      buttonColor: 'gold',
      link: '/wellness',
      reverse: false,
    },
    {
      title: 'Website Development',
      description:
        'Establish a commanding online presence with our cutting-edge website development services and custom digital solutions.',
      media: {
        type: 'video',
        src: 'https://res.cloudinary.com/dgivrcoir/video/upload/v1747582168/videoplayback_4_tsgnqr.mp4',
      },
      color: 'slate',
      link: '/web-development',
      reverse: true,
    },
  ];

  return (
    <section id="services" className="bg-gray-50 section-padding">
      <div className="container-custom">
        {/* 3D Avatar Header */}
        <div className="text-center mb-12">
          <div
            className="relative mx-auto w-48 h-48 rounded-full overflow-visible shadow-2xl transform hover:scale-110 transition-transform duration-500"
            style={{
              transform: 'translateY(-1rem)', // Move the avatar up
            }}
          >
            <img
              src="https://res.cloudinary.com/dgivrcoir/image/upload/e_background_removal/f_png/v1747587115/WhatsApp_Image_2025-05-18_at_22.21.15_my2aki.jpg"
              alt="3D Avatar"
              className="w-full h-full object-cover transform scale-125"
            />
          </div>
          <h2 className="section-title mt-6 opacity-0 animate-fade-in">
            Our Premium Services
          </h2>
          <p
            className="section-subtitle text-center max-w-3xl mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            We offer a diverse range of high-quality services tailored to meet
            your needs across multiple domains with unparalleled excellence.
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-16 mt-12">
          {services.map((service, index) => (
            <ServiceCategory
              key={index}
              title={service.title}
              description={service.description}
              media={service.media}
              color={service.color}
              link={service.link}
              reverse={service.reverse}
              buttonColor={service.buttonColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;