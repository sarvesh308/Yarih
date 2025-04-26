import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, User } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Careers', href: '/careers' },
  { name: 'Reach Us', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const linkPrefix = isHomePage ? '' : '/';

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isHomePage
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="font-playfair text-2xl md:text-3xl font-bold tracking-tight text-royal flex items-center gap-2"
        >
          <span className="text-gold">Yarih</span>
          <span className={`transition-all duration-300 ${scrolled || !isHomePage ? 'text-charcoal-dark' : 'text-white'}`}>
            Group
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className={`font-medium transition-all duration-200 hover:text-gold ${
                  scrolled || !isHomePage ? 'text-charcoal-dark' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              to="/login" 
              className="btn-outline border-royal text-royal hover:bg-royal/10 flex items-center gap-2"
            >
              <LogIn size={18} />
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className="btn-primary flex items-center gap-2"
            >
              <User size={18} />
              Register
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled || !isHomePage ? 'text-charcoal-dark' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <ul className="container-custom flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="block py-2 text-charcoal-dark font-medium hover:text-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/login" 
                className="btn-outline border-royal text-royal hover:bg-royal/10 flex items-center gap-2 w-full justify-center"
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={18} />
                Login
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                to="/register" 
                className="btn-primary w-full flex justify-center items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <User size={18} />
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
