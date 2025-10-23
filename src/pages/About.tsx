import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShieldCheck, Lightbulb, Users } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] via-[#101010] to-[#1a1a1a] text-gray-100 font-poppins overflow-hidden">
      <Navbar />

      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgivrcoir/image/upload/v1748255515/pexels-august-de-richelieu-4427814_ym61wp.jpg"
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          
          <div className="relative z-10 max-w-5xl px-6 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC857] to-[#FFF5B3] drop-shadow-lg">
              Building Trust, Transforming Dreams
            </h1>
            <p className="mt-6 text-lg md:text-xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed">
              At <span className="text-[#FFD700] font-semibold">Yarih Group</span>, we don’t just construct — we create legacies that inspire, innovate, and elevate lives.
            </p>

            <div className="mt-10 flex justify-center gap-5">
              <a
                href="#/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD700] via-[#FFC857] to-[#FFF5B3] text-black font-semibold px-8 py-3 rounded-full shadow-2xl hover:shadow-[#FFD700]/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#/services"
                className="inline-flex items-center gap-3 border border-[#FFD700]/40 text-gray-100 px-7 py-3 rounded-full hover:bg-[#FFD700]/10 transition-all duration-300"
              >
                Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-24 bg-gradient-to-b from-white via-[#fdfdfd] to-[#f5f5f5] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-[#FFD700]/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFC857]/10 rounded-full blur-[150px] animate-pulse-slow" />

          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ebad13] to-[#FFD700] mb-8">
              Who We Are
            </h2>

            <p className="text-lg md:text-xl text-gray-900 leading-relaxed max-w-3xl mx-auto">
              Founded with a passion for excellence, <span className="text-[#FFD700] font-bold">Yarih Group</span> stands at the intersection of craftsmanship, education, and innovation — redefining construction, digital experiences, and personal well-being with integrity and flair.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-gradient-to-b from-[#292323] via-[#111] to-[#0c0c0c] border-t border-gray-800 relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
            <h2 className="text-3xl md:text-4xl font-playfair font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFC857] to-[#FFF1A6] mb-16">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-10 text-center">
              {[
                {
                  title: "Integrity",
                  desc: "We believe trust is built on transparency, commitment, and unwavering ethics in every action.",
                  icon: <ShieldCheck className="h-14 w-14 text-[#FFD700] group-hover:scale-110 transition-transform duration-300" />,
                  gradient: "from-[#2a2a2a]/80 to-[#3a3a3a]/40",
                },
                {
                  title: "Innovation",
                  desc: "Through creativity and modern technologies, we craft experiences that define the future.",
                  icon: <Lightbulb className="h-14 w-14 text-[#FFD700] group-hover:scale-110 transition-transform duration-300" />,
                  gradient: "from-[#3b3b3b]/70 to-[#1a1a1a]/60",
                },
                {
                  title: "Empowerment",
                  desc: "We uplift lives by integrating education, wellness, and community growth into our mission.",
                  icon: <Users className="h-14 w-14 text-[#FFD700] group-hover:scale-110 transition-transform duration-300" />,
                  gradient: "from-[#2f2f2f]/70 to-[#191919]/60",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br ${item.gradient} p-10 rounded-2xl shadow-xl hover:shadow-[#FFD700]/30 transition-all duration-500 transform hover:-translate-y-3 border border-[#FFD700]/10 backdrop-blur-md`}
                >
                  <div className="flex justify-center mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#FFD700]">{item.title}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Light glow behind cards */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-60 bg-[#FFD700]/10 blur-[120px]" />
        </section>

        {/* Journey Section */}
        <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#f9fbff] to-[#eef7ff] relative overflow-hidden">
  {/* Ambient glowing shapes */}
  <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] rounded-full bg-gradient-to-br from-[#ffe680]/40 to-transparent blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-gradient-to-tr from-[#d3f1ff]/50 to-transparent blur-[100px]" />

  <div className="max-w-5xl mx-auto px-6 relative z-10">
    <h2 className="text-3xl md:text-4xl font-playfair text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#c89a00] to-[#f7d86b] mb-16 drop-shadow-[0_4px_15px_rgba(200,155,0,0.3)]">
      Our Journey
    </h2>

    <div className="relative space-y-16 border-l border-[#c89a00]/30 pl-10">
      {[
        {
          year: "2023",
          title: "The Foundation",
          text: "Where passion met purpose — Yarih began its journey with a vision to redefine construction and renovation standards through quality and trust.",
        },
        {
          year: "2024",
          title: "The Expansion",
          text: "Expanding horizons into tutoring, digital services, and wellness, we began empowering people and businesses beyond spaces.",
        },
        {
          year: "2025",
          title: "The Digital Leap",
          text: "Fusing innovation and design — we entered the digital realm, creating premium web experiences and redefining how technology meets lifestyle.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="relative pl-6 before:absolute before:left-[-0.75rem] before:top-3 before:w-4 before:h-4 before:rounded-full
                     before:bg-gradient-to-r before:from-[#c89a00] before:to-[#f7d86b]
                     before:shadow-[0_0_20px_rgba(200,155,0,0.5)] transition-transform hover:translate-x-1 duration-300"
        >
          <h4 className="text-lg font-semibold text-[#b58500]">{item.year}</h4>
          <h3 className="text-2xl font-bold text-[#05263f] mb-2 font-playfair">{item.title}</h3>
          <p className="text-gray-600 leading-relaxed font-inter">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-r from-[#FFD700]/20 via-[#FFC857]/10 to-[#FFF5B3]/20 text-center backdrop-blur-md">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-3xl md:text-4xl font-playfair font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFF1A6] mb-4">
              A Legacy Built on Vision & Passion
            </h3>
            <p className="text-gray-200 mb-8 text-lg leading-relaxed">
              Every structure, innovation, and achievement at <span className="text-[#FFD700] font-semibold">Yarih Group</span> reflects a story of dedication, creativity, and excellence.
            </p>
            <div className="flex justify-center gap-5">
              <a
                href="#/contact"
                className="inline-flex items-center bg-gradient-to-r from-[#FFD700] to-[#FFF5B3] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-[#FFD700]/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Let’s Collaborate
              </a>
              <a
                href="#/services"
                className="inline-flex items-center border border-[#FFD700]/40 text-gray-200 px-7 py-3 rounded-full hover:bg-[#FFD700]/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default About;
