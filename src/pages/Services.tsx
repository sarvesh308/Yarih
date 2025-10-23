// filepath: src/pages/Services.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Building2,
  GraduationCap,
  MonitorSmartphone,
  HeartPulse,
  ArrowRight,
  Shield,
  Zap,
  Palette,
  Star,
} from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  delay = 0,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay?: number;
}) => (
  <div
    className="group relative bg-gradient-to-br from-white to-[#f0f8ff]/80 backdrop-blur-xl 
               border border-[#e1ecf9] rounded-3xl p-10 overflow-hidden
               shadow-[0_25px_80px_rgba(10,60,120,0.08)] 
               hover:shadow-[0_35px_100px_rgba(10,60,120,0.25)]
               transition-all duration-700 hover:-translate-y-3 animate-fade-in"
    style={{ animationDelay: `${delay}s` }}
  >
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,#9cd8ff,#ffffff00_60%)] pointer-events-none"></div>

    <div className="relative z-10 text-center">
      <div
        className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center
                   bg-gradient-to-br from-[#0c4f82] to-[#1593d0] text-white shadow-lg
                   group-hover:scale-110 transition-transform duration-500"
      >
        {icon}
      </div>

      <h3 className="text-2xl font-playfair font-semibold text-[#05263f] mb-3 tracking-wide">
        {title}
      </h3>
      <p className="text-gray-700/90 leading-relaxed mb-8 text-[16px] font-inter max-w-sm mx-auto">
        {description}
      </p>

      <Link
        to={link}
        className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#0c4f82] to-[#1593d0]
                   text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
      >
        Explore <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#f5faff] via-[#edf6ff] to-[#e6f0ff] text-[#05263f] font-inter">
      {/* Floating glow effects */}
      <div className="absolute top-[-200px] left-[-200px] w-[45rem] h-[45rem] bg-gradient-to-tr from-[#b6e3ff] to-transparent rounded-full blur-[160px] opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-[-0px] right-[-150px] w-[35rem] h-[35rem] bg-gradient-to-bl from-[#c0e8ff]/80 to-transparent rounded-full blur-[160px] opacity-60 animate-float"></div>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-36 pb-28 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#d9ecff,#f6fbff)]"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="relative inline-block mb-12">
            <h1 className="font-playfair font-extrabold text-6xl md:text-7xl leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0c4f82] via-[#1593d0] to-[#4dd0ff] drop-shadow-[0_0_25px_rgba(21,147,208,0.3)]">
                Elevate Every Experience
              </span>
              <span className="block mt-4 text-[#05263f] opacity-80">
                with Yarih’s Signature Services
              </span>
            </h1>

            {/* Floating golden accent line */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-16px] w-72 h-[4px] bg-gradient-to-r from-transparent via-[#c89a00] to-transparent rounded-full shadow-[0_0_15px_rgba(200,155,0,0.5)] animate-pulse"></div>
          </div>

          <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-14 max-w-3xl mx-auto">
            From architecture to technology — we don’t just build; we create timeless experiences
            that shape the way people live, learn, and connect.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-gradient-to-r from-[#0c4f82] to-[#1593d0]
                         text-white font-semibold shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white/80 backdrop-blur-sm border border-[#1368aa]/20
                         text-[#05263f] font-medium shadow-md hover:shadow-lg transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-28 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[#05263f] relative inline-block">
              Our Premium Services
              <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] w-36 h-[2.5px] bg-gradient-to-r from-transparent via-[#1593d0] to-transparent"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
              Each service reflects a perfect blend of innovation, luxury, and craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <ServiceCard
              title="Construction & Renovation"
              description="Architectural mastery blended with modern craftsmanship — we shape structures that inspire and endure."
              icon={<Building2 className="w-9 h-9" />}
              link="/construction"
              delay={0.1}
            />
            <ServiceCard
              title="Tutoring & Learning"
              description="Empowering the next generation with skills and knowledge — education designed for growth and confidence."
              icon={<GraduationCap className="w-9 h-9" />}
              link="/tutoring"
              delay={0.2}
            />
            <ServiceCard
              title="Web & Digital Solutions"
              description="Where art meets technology — we design seamless, scalable, and interactive web experiences for modern brands."
              icon={<MonitorSmartphone className="w-9 h-9" />}
              link="/web-development"
              delay={0.3}
            />
            <ServiceCard
              title="Wellness & Training"
              description="Holistic growth through balance, discipline, and mindfulness — nurturing a healthier, stronger you."
              icon={<HeartPulse className="w-9 h-9" />}
              link="/wellness"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
<section className="py-28 relative bg-gradient-to-br from-[#f8fbff] via-[#fdfdff] to-[#f6faff] overflow-hidden">
  <div className="absolute top-0 left-0 w-72 h-72 bg-[radial-gradient(circle_at_top_left,#b6e0ff40,transparent_70%)] blur-2xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle_at_bottom_right,#ffd70030,transparent_70%)] blur-3xl"></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">
    {/* Header */}
    <div className="text-center mb-16">
      <h3 className="text-4xl md:text-5xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0c4f82] via-[#1593d0] to-[#0c4f82] drop-shadow-sm animate-fade-in">
        Why Choose <span className="text-[#c89a00]">Yarih?</span>
      </h3>
      <div className="w-24 h-[2px] bg-gradient-to-r from-[#0c4f82] via-[#1593d0] to-[#c89a00] mx-auto my-5 rounded-full"></div>
      <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
        Where innovation meets trust, and design transforms into timeless experiences.
      </p>
    </div>

    <div className="rounded-3xl bg-gradient-to-br from-white/80 via-[#f9fcff]/90 to-[#f0faff]/80 backdrop-blur-xl border border-white/40 p-12 shadow-[0_30px_80px_rgba(12,79,130,0.1)] transition-all duration-300 hover:shadow-[0_40px_100px_rgba(12,79,130,0.15)]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left Side - Content */}
        <div className="space-y-8">
          <p className="text-gray-700 text-base leading-relaxed font-light">
            Every Yarih project begins with one question: <span className="font-medium text-[#0c4f82]">how can we make it exceptional?</span>  
            Whether it’s your home, a learning space, or a digital idea — we build with purpose, precision, and passion.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: "Integrity First",
                desc: "We lead with transparency and trust.",
              },
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Driven by Impact",
                desc: "Every project adds real, lasting value.",
              },
              {
                icon: <Palette className="w-5 h-5" />,
                title: "Timeless Design",
                desc: "Modern, elegant, and built to last.",
              },
              {
                icon: <Star className="w-5 h-5" />,
                title: "Excellence Always",
                desc: "Because perfection is our standard.",
              },
            ].map((it, i) => (
              <li
                key={i}
                className="flex items-start gap-4 bg-white/80 p-5 rounded-xl border border-[#e3efff]
                           hover:scale-[1.03] hover:bg-gradient-to-r hover:from-[#f9fcff] hover:to-[#e9f4ff]
                           transition-all duration-500 shadow-sm hover:shadow-[0_8px_20px_rgba(12,79,130,0.08)]"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center 
                                bg-gradient-to-br from-[#0c4f82] to-[#1593d0] text-white shadow-md
                                hover:shadow-[0_0_20px_rgba(21,147,208,0.4)] transition-all duration-500">
                  {it.icon}
                </div>
                <div>
                  <div className="font-semibold text-[#05263f] text-lg">{it.title}</div>
                  <div className="text-gray-600 text-sm">{it.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side - Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center mt-8 md:mt-0">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-[#f3fbff] to-[#e7f4ff] shadow-lg border border-white/40 transform transition-all duration-500 hover:scale-[1.04]">
            <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
              Projects Delivered
            </div>
            <div className="text-6xl font-extrabold text-[#0c4f82] mb-2">65+</div>
            <div className="text-sm text-gray-600">Across construction, digital, and learning</div>
          </div>

          <div className="p-10 rounded-3xl bg-gradient-to-br from-[#fffaf0] to-[#fff2d9] shadow-lg border border-white/40 relative overflow-hidden transform transition-all duration-500 hover:scale-[1.04]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,#ffd70060,transparent_60%)] blur-2xl"></div>
            <div className="relative z-10">
              <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                Client Satisfaction
              </div>
              <div className="text-6xl font-extrabold text-[#c89a00] mb-2">5 / 5</div>
              <div className="text-sm text-gray-600">Trusted. Loved. Recommended.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
      <section className="py-28 text-center relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-3xl p-14 bg-gradient-to-br from-[#0c4f82] via-[#1593d0] to-[#4dd0ff] text-white shadow-[0_35px_90px_rgba(16,72,128,0.25)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#ffffff50,transparent_60%)] pointer-events-none"></div>
            <h4 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Let’s Build Brilliance Together
            </h4>
            <p className="max-w-3xl mx-auto mb-8 font-light text-lg text-white/90">
              From construction to code — your story deserves a platform built with precision and passion.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white text-[#05263f]
                           font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40
                           text-white font-medium hover:bg-white/40 transition-all duration-300"
              >
                Explore Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
