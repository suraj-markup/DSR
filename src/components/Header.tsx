import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu when clicking outside or on escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen) {
        const target = event.target as Element;
        if (!target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
          setIsMenuOpen(false);
        }
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', type: 'hash' },
    { name: 'Services', href: '#services', type: 'hash' },
    { name: 'How It Works', href: '#how-it-works', type: 'hash' },
    { name: 'About', href: '#about', type: 'hash' },
    { name: 'Testimonials', href: '#testimonials', type: 'hash' },
    { name: 'Gallery', href: '/gallery', type: 'route' },
    { name: 'Contact', href: '#contact', type: 'hash' },
  ];

  const handleNavigation = (href: string, type: string) => {
    if (type === 'route') {
      // Navigate to different page
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to section on current page
      if (location.pathname !== '/') {
        // If not on home page, go to home first then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-orange-500 z-50"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 'left',
        }}
      />

      {/* Header */}
      <motion.header
        className="relative bg-white shadow-md transition-all duration-300"
      >
        {/* Header - White Background */}
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-1">
              {/* Left Side - Logo and Company Name */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center cursor-pointer"
                onClick={() => handleNavigation('/', 'route')}
              >
                <img
                  src={logoImage}
                  alt="DSR Logistics"
                  className="h-24 w-48 rounded-lg"
                />
                <div className="ml-4 font-bold">
                  <div className="text-base">
                    <span className="text-black">From here</span>{' '}
                    <span className="text-yellow-500">to</span>
                  </div>
                  <div className="text-base">
                    <span className="text-yellow-500">there,</span>{' '}
                    <span className="text-black">with care.</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Side - Contact Info and CTA Button */}
              <div className="hidden lg:flex items-center space-x-6">
                {/* Phone Contact */}
                <div className="flex items-center space-x-3">
                  <Phone className="w-8 h-8 text-black" />
                  <div>
                    <div className="text-black text-sm">Call us</div>
                    <div className="text-blue-700 text-sm font-medium">+91 9251129800 <br/>+91 9251139800</div>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="w-px h-8 bg-gray-300"></div>

                {/* Email Contact */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-8 h-8 text-black" />
                  <div>
                    <div className="text-black text-sm">Email</div>
                    <div className="text-blue-700 text-sm font-medium">dsrlogisticspackerandmovers@gmail.com</div>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="w-px h-8 bg-gray-300"></div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation('#quote-form', 'hash')}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Get Free Quote
                </motion.button>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 mobile-menu-button touch-manipulation"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600" />
                )}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Navigation Section - Blue Background */}
        <div className="bg-blue-600">
          <div className="container mx-auto px-4">
            <nav className="hidden lg:flex items-center justify-center space-x-8 py-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200 text-xl"
                  whileHover={{ y: -1 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile Menu Backdrop */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg relative z-40"
        >
          <div className="container mx-auto px-4 py-4 mobile-menu">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.type)}
                  className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-all duration-200 text-sm touch-manipulation"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMenuOpen ? 1 : 0,
                    x: isMenuOpen ? 0 : -20
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}

              {/* Mobile CTA */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation('#quote-form', 'hash')}
                className="mt-4 py-3 px-6 bg-blue-800 text-white font-semibold rounded-lg shadow-lg text-center text-sm touch-manipulation"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : 20
                }}
                transition={{ delay: 0.3 }}
              >
                Get Free Quote
              </motion.button>
            </nav>
          </div>
        </motion.div>
      </motion.header>
    </>
  );
};

export default Header;
