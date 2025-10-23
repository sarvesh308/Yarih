import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, User, LogOut } from 'lucide-react';
import { useUser } from '../context/UserContext'; // Correct relative path

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
  const { user, logout } = useUser();

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

  const isTransparentPage = ['/', '/construction', '/tutoring', '/web-development', '/wellness', '/about'].includes(location.pathname);

  // Determine button styles based on background and menu state
  const buttonStyle = scrolled || !isTransparentPage || isOpen
    ? 'btn-outline border-royal text-royal hover:bg-royal/12 h-12'
    : 'btn-outline border-gold text-white hover:bg-gold/12 h-12';

  const registerButtonStyle = scrolled || !isTransparentPage || isOpen
    ? 'bg-royal text-white hover:bg-royal/90 h-12'
    : 'bg-gold text-white hover:bg-gold/90 h-12';

  const welcomeTextStyle = scrolled || !isTransparentPage || isOpen
    ? 'text-charcoal-dark'
    : 'text-white';

  const logoutButtonStyle = scrolled || !isTransparentPage || isOpen
    ? 'btn-outline border-royal text-royal hover:bg-royal/10 h-12'
    : 'btn-outline border-gold text-white hover:bg-gold/10 h-12';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || !isTransparentPage
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
      <Link
        to="/"
        className="flex items-center font-playfair text-2xl md:text-3xl font-bold tracking-tight text-royal"
      >
        {/* Replace 'Y' with the logo */}
        <img
          src="https://res.cloudinary.com/dgivrcoir/image/upload/v1747575113/ChatGPT_Image_May_18_2025_06_41_43_PM_zehd9t.png"
          alt="Yarih Group Logo"
          className="h-10 w-10 object-contain -mr-2" /* Negative margin to reduce gap between logo and "arih" */
        />
        <span className="text-gold">arih</span>
        <span
          className={`ml-2 transition-all duration-300 ${
            scrolled || !isTransparentPage ? 'text-charcoal-dark' : 'text-white'
          }`}
        >
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
                  scrolled || !isTransparentPage ? 'text-charcoal-dark' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* Conditional Rendering for User */}
          {user ? (
            <>
              <li className={`flex items-center gap-3 font-medium ${welcomeTextStyle}`}>
                <User className={`h-5 w-5 ${scrolled || !isTransparentPage ? 'text-royal' : 'text-gold'}`} />
                <span>Welcome, {user.name}</span>
              </li>
              <li>
                <button
                  onClick={logout}
                  className={`${logoutButtonStyle} flex items-center gap-2 px-4 py-2 rounded-md`}
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className={`${buttonStyle} flex items-center gap-2 px-4 py-2 rounded-md`}
                >
                  <LogIn size={18} />
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className={`${registerButtonStyle} flex items-center gap-2 px-4 py-2 rounded-md`}
                >
                  <User size={18} />
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${
            scrolled || !isTransparentPage ? 'text-charcoal-dark' : 'text-white'
          }`}
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

            {/* Conditional Rendering for User */}
            {user ? (
              <>
                <li className={`text-center flex items-center justify-center gap-2 font-medium ${welcomeTextStyle}`}>
                  <User className={`h-5 w-5 ${scrolled || !isTransparentPage ? 'text-royal' : 'text-gold'}`} />
                  <span>Welcome, {user.name}</span>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className={`${logoutButtonStyle} flex items-center gap-2 w-full justify-center px-4 py-2 rounded-md`}
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    className={`${buttonStyle} flex items-center gap-2 w-full justify-center px-4 py-2 rounded-md`}
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn size={18} />
                    Login
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    to="/register"
                    className={`${registerButtonStyle} w-full flex justify-center items-center gap-2 px-4 py-2 rounded-md h-10`}
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} />
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;