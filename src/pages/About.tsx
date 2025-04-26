
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-royal/10 to-transparent py-20">
          <div className="container-custom">
            <h1 className="section-title text-center mb-6 opacity-0 animate-fade-in">
              Our Story
            </h1>
            <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p className="text-lg text-gray-700 mb-6">
                Yarih Group was born from a unique foundation - a group of friends who believe that friendship is the purest form of love and the strongest foundation for success.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-3xl font-playfair font-bold text-charcoal-dark">
                  Built on Friendship, Driven by Excellence
                </h2>
                <p className="text-gray-600">
                  We started our journey in the construction industry, expanded into education through our tutoring services, and ventured into the digital realm with website development. Our diverse portfolio is united by one common thread - our commitment to friendly, professional service.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-royal/10 rounded-full text-royal">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal-dark mb-2">Future Vision</h3>
                      <p className="text-gray-600">We're committed to expanding our services while maintaining our core values of friendship and excellence.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-full text-gold">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-charcoal-dark mb-2">Quality Promise</h3>
                      <p className="text-gray-600">Every project we undertake reflects our commitment to excellence and client satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="gradient-border rounded-xl overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dgivrcoir/image/upload/v1745681004/gettyimages-2148674008-612x612_chwpu6.webp" 
                    alt="Yarih Group Team" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-custom">
            <h2 className="section-title text-center mb-12 opacity-0 animate-fade-in">Our Journey</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="w-32 text-right font-semibold text-royal">2023</div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Foundation</h3>
                    <p className="text-gray-600">Started our construction services with a vision to transform spaces.</p>
                  </div>
                </div>
                <div className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <div className="w-32 text-right font-semibold text-royal">2024</div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Expansion</h3>
                    <p className="text-gray-600">Launched our tutoring services to nurture young minds.</p>
                  </div>
                </div>
                <div className="flex gap-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="w-32 text-right font-semibold text-royal">2025</div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-semibold text-lg mb-2">Digital Venture</h3>
                    <p className="text-gray-600">Added website development to our portfolio of services.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
