import React, { useRef, useState } from 'react';
import { GraduationCap, Book, Sparkles, Star, Users } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import CourseCalculator from '../components/CourseCalculator';
import AcademicServices from '../components/AcademicServices';
import PriceTable from '../components/PricingTable';

// Instructors & Testimonials
const instructors = [
  {
    name: "KVV Mathimithra",
    role: "Academic Director",
    bio: "An experienced teacher with a passion for personalized learning and student success.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  }
];

const testimonials = [
  {
    content: "My daughter's academic performance improved dramatically after just three months with Yarih's tutoring program. The personalized approach made all the difference.",
    author: "Sumithra., Parent",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  }
];

const TutoringServices = () => {
  const { toast } = useToast();
  const reachUsRef = useRef<HTMLDivElement>(null);

  // For CourseCalculator highlight
  const [calcActive, setCalcActive] = useState(false);

  // Scroll to Reach Us section
  const scrollToReachUs = () => {
    if (reachUsRef.current) {
      reachUsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- Language Classes Section ---
  const LanguageClasses = () => (
    <section className="py-20 bg-gradient-to-r from-pink-50 via-blue-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl font-extrabold text-royal-600 flex items-center justify-center gap-2">
            <Sparkles className="text-pink-400 animate-pulse" /> Spoken English & Hindi Classes
          </h2>
          <p className="section-subtitle text-lg text-gray-700">
            Develop language fluency with our specialized courses focusing on grammar, pronunciation, and conversational skills
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Spoken English Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="edu-card relative overflow-hidden shadow-xl border-2 border-pink-200 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-pink-50 to-rose-100 p-8 rounded-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-royal-100 rounded-full mb-4 shadow-lg">
                <span className="text-3xl">🇬🇧</span>
              </div>
              <h3 className="text-2xl text-royal-700 mb-2">Spoken English</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Online</span>
                  <span className="text-pink-600 font-bold">₹300/session</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Personal Coaching</span>
                  <span className="text-pink-600 font-bold">₹500/session</span>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <Star className="text-pink-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Grammar & pronunciation focus</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-pink-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Conversational practice</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-pink-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Business English options</span>
                  </li>
                </ul>
                <button
                  className="w-full mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg hover:scale-105 transition-transform py-3 rounded-lg"
                  onClick={scrollToReachUs}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
          {/* Hindi Classes Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="edu-card relative overflow-hidden shadow-xl border-2 border-yellow-200 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-white via-yellow-50 to-orange-100 p-8 rounded-xl">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-4 shadow-lg">
                <span className="text-3xl">🇮🇳</span>
              </div>
              <h3 className="text-2xl text-yellow-700 mb-2">Hindi Classes</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Online</span>
                  <span className="text-yellow-600 font-bold">₹250/session</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="font-medium">Personal Coaching</span>
                  <span className="text-yellow-600 font-bold">₹400/session</span>
                </div>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start">
                    <Star className="text-yellow-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Beginner to advanced levels</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-yellow-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Reading & writing skills</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-yellow-400 mr-2 h-4 w-4 animate-bounce" />
                    <span>Cultural context learning</span>
                  </li>
                </ul>
                <button
                  className="w-full mt-4 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-bold shadow-lg hover:scale-105 transition-transform py-3 rounded-lg"
                  onClick={scrollToReachUs}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // --- Special Kids Tutoring Section ---
  const SpecialKidsTutoring = () => (
    <section className="py-20 bg-gradient-to-r from-yellow-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl font-extrabold text-yellow-600">Special Kids Tutoring</h2>
          <p className="section-subtitle text-lg text-gray-700">
            Personalized educational support for children with learning differences in Classes 1 to 10
          </p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          <div className="border-0 shadow-lg overflow-hidden bg-white rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-yellow-50 p-8">
                <h3 className="text-2xl mb-4 text-yellow-700">Our Approach</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-yellow-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Customized Teaching</h4>
                      <p className="text-gray-600 mt-1">Teaching methods adapted to individual learning styles</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-yellow-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Patience & Care</h4>
                      <p className="text-gray-600 mt-1">Educators trained in special education techniques</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-yellow-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Regular Progress Reports</h4>
                      <p className="text-gray-600 mt-1">Detailed feedback on learning milestones</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-yellow-500 text-white rounded-full p-1 flex items-center justify-center w-5 h-5 text-xs">✓</div>
                    <div>
                      <h4 className="font-medium">Available for Classes 1-10</h4>
                      <p className="text-gray-600 mt-1">Elementary and middle school curriculum focus</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-4 text-yellow-700">Pricing Details</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-lg">Online Sessions</h4>
                    <p className="text-3xl font-bold text-yellow-700 mt-2">₹400<span className="text-base font-normal text-gray-600">/session</span></p>
                    <p className="text-gray-600 mt-1">Interactive virtual learning environment</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Home Tuition</h4>
                    <p className="text-3xl font-bold text-yellow-700 mt-2">₹600<span className="text-base font-normal text-gray-600">/session</span></p>
                    <p className="text-gray-600 mt-1">Personal attention in the comfort of home</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-md mt-6">
                    <p className="text-yellow-700 font-medium">Note: NEET/JEE coaching not offered for this category</p>
                  </div>
                  <button
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white font-bold hover:scale-105 transition-transform mt-4 py-3 rounded-lg"
                    onClick={scrollToReachUs}
                  >
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // --- Book a Free Demo Section ---
  const BookDemoSection = () => (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-green-50 to-pink-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-emerald-600 flex items-center justify-center gap-2">
            <Users className="text-blue-400 animate-pulse" /> Book a Free Demo Session
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Experience our teaching quality with a <span className="font-bold text-emerald-700">free home tuition</span> or <span className="font-bold text-blue-700">online tuition</span> demo. No obligations, just learning!
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="shadow-xl border-2 border-emerald-200 bg-gradient-to-br from-white via-emerald-50 to-green-100 hover:scale-105 transition-transform duration-300 rounded-xl p-8">
              <h3 className="text-2xl text-emerald-700 flex items-center gap-2 mb-4">
                <GraduationCap className="text-emerald-400" /> Free Home Tuition Demo
              </h3>
              <p className="mb-4 text-gray-700">Get a personalized home tuition experience for your child, absolutely free for the first session.</p>
              <button
                className="w-full bg-gradient-to-r from-emerald-500 to-green-400 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg py-4 rounded-lg"
                onClick={scrollToReachUs}
              >
                Book Free Home Demo
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <div className="shadow-xl border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50 to-cyan-100 hover:scale-105 transition-transform duration-300 rounded-xl p-8">
              <h3 className="text-2xl text-blue-700 flex items-center gap-2 mb-4">
                <GraduationCap className="text-blue-400" /> Free Online Tuition Demo
              </h3>
              <p className="mb-4 text-gray-700">Try our interactive online classes with a free demo session and see the difference in learning.</p>
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg py-4 rounded-lg"
                onClick={scrollToReachUs}
              >
                Book Free Online Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // --- Main Render ---
  return (
    <>
      <Navbar />

      {/* Fullscreen Hero Video Section */}
      <div className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
  >
    <source
      src="https://res.cloudinary.com/dgivrcoir/video/upload/v1745914310/5183275-hd_1920_1080_30fps_dmcpgr.mp4"
      type="video/mp4"
    />
  </video>

  {/* Enhanced Gradient Overlay + Text */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/75 to-gray-900/90 z-10 flex flex-col justify-center items-center text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-playfair mb-6 leading-tight tracking-wide drop-shadow-[0_4px_25px_rgba(255,215,0,0.35)]"
    >
      Transform Your Learning Journey
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-lg md:text-2xl font-poppins text-gray-100/90 max-w-3xl leading-relaxed tracking-wide"
    >
      <span className="text-[#FFD700] font-semibold">Yarih Group</span> provides transformative education programs
      tailored to your personal growth journey — nurturing the mind and academic excellence.
    </motion.p>
  </div>

  {/* CTA Button - Bottom Center (Stylish Gold) */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="absolute bottom-16 w-full flex justify-center z-20"
  >
    <button
      onClick={() => (window.location.href = '#/contact')}
      className="relative px-10 py-4 text-lg font-semibold rounded-full text-gray-900
                 bg-gradient-to-r from-[#FFD700] via-[#FFC857] to-[#D4AF37]
                 shadow-[0_0_25px_rgba(255,215,0,0.4)]
                 hover:shadow-[0_0_45px_rgba(255,215,0,0.7)]
                 hover:scale-105 transition-all duration-300 ease-out
                 border border-yellow-300 backdrop-blur-sm overflow-hidden"
    >
      <span className="relative z-10">Book Free Demo</span>
      {/* Light Reflection Effect */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 hover:opacity-60 transition-opacity duration-500"></span>
    </button>
  </motion.div>

  {/* Bottom Soft Glow */}
  <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
</div>



      {/* Main Content */}
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom py-16">

          {/* Academic Services Section */}
          <AcademicServices />

          {/* Book a Free Demo Section */}
          <BookDemoSection />

          {/* Language Classes Section */}
          <LanguageClasses />

          {/* Price Table Section */}
          <PriceTable />

          {/* Special Kids Tutoring Section */}
          <SpecialKidsTutoring />

          {/* Course Calculator Section */}
          <div
            className={`rounded-xl shadow-lg p-6 mb-20 transition-colors duration-300 ${calcActive ? 'bg-blue-100' : 'bg-gradient-to-br from-white via-blue-50 to-pink-50'}`}
            onClick={() => setCalcActive((prev) => !prev)}
            onTouchStart={() => setCalcActive(true)}
            onMouseLeave={() => setCalcActive(false)}
            style={{ cursor: 'pointer' }}
          >
            <CourseCalculator />
          </div>

          {/* Our Expert Team */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-playfair font-bold text-royal-700 mb-8 text-center flex items-center justify-center gap-2">
              <Users className="text-blue-400 animate-pulse" /> Our Expert Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {instructors.map((instructor, index) => (
                <motion.div
                  key={instructor.name + index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center flex flex-col items-center"
                >
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-blue-200 shadow-lg"
                  />
                  <h3 className="font-semibold text-xl text-royal-700">{instructor.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{instructor.role}</p>
                  <p className="text-gray-600 text-sm">{instructor.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Student Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-playfair font-bold text-pink-600 mb-8 text-center flex items-center justify-center gap-2">
              <Star className="text-pink-400 animate-bounce" /> Student Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white via-pink-50 to-blue-50 p-8 rounded-xl shadow-md border border-gray-100"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover border-2 border-pink-200"
                    />
                    <div>
                      <p className="font-semibold text-pink-700">{testimonial.author}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{testimonial.content}&rdquo;</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16 mb-8"
          >
            <Link to="/contact" className="btn-primary bg-gradient-to-r from-pink-500 to-royal-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform text-lg inline-flex items-center gap-2">
              Book a Session
              <GraduationCap className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>

          {/* Reach Us Section (for scroll target) */}
          <div ref={reachUsRef} id="reach-us" className="pt-32 -mt-32" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TutoringServices;