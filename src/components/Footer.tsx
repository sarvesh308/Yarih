import React from 'react';
import { Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold">
              <span className="text-gold">Yarih</span> Group
            </h3>
            <p className="text-gray-300">
              Premium solutions for construction, tutoring, wellness, and web development.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.instagram.com/yarihofficial?igsh=OGc4ZGt5ZDJoc3My" className="p-2 rounded-full bg-royal hover:bg-royal-light transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-royal hover:bg-royal-light transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="tel:+919952636921" className="p-2 rounded-full bg-royal hover:bg-royal-light transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="/construction" className="text-gray-300 hover:text-gold transition-colors">Construction & Renovation</Link></li>
              <li><Link to="/tutoring" className="text-gray-300 hover:text-gold transition-colors">Academic Tutoring</Link></li>
              <li><Link to="/web-development" className="text-gray-300 hover:text-gold transition-colors">Website Development</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-gold transition-colors">Services</a></li>
              <li><a href="#careers" className="text-gray-300 hover:text-gold transition-colors">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Tambaram, Chennai, 600059</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <a href="tel:+919952636921">+91 99526 36921</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a href="mailto:yarihgroup@gmail.com">yarihgroup@gmail.com</a>
              </p>
            </div>
            <div className="flex items-center mt-4">
              <a 
                href="https://wa.me/919952636921" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-white hover:text-[#25D366] transition-colors font-semibold"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Yarih Group. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Terms</a>
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;