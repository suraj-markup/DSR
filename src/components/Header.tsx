import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

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
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
        className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-all duration-300"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <img 
                src={logoImage} 
                alt="DSR Logistics" 
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-gray-700 hover:text-primary font-medium transition-colors duration-200 text-sm xl:text-base"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-orange-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* CTA Button */}
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 20px rgba(247, 148, 29, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contact')}
                className="hidden sm:flex items-center gap-1 sm:gap-2 px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-xs sm:text-sm"
              >
                Get Free Quote
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200 mobile-menu-button touch-manipulation"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                )}
              </motion.button>
            </div>
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
          <div className="container mx-auto px-4 py-4 sm:py-6 mobile-menu">
            <nav className="flex flex-col space-y-2 sm:space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base touch-manipulation"
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
                onClick={() => scrollToSection('#contact')}
                className="mt-4 py-3 px-6 bg-gradient-to-r from-accent to-orange-500 text-white font-semibold rounded-lg shadow-lg text-center text-sm sm:text-base touch-manipulation"
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
