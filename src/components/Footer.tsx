
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
              <a href="#" className="p-2 rounded-full bg-royal hover:bg-royal-light transition-colors">
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
