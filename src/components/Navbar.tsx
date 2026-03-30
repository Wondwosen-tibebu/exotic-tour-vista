import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 md:top-11 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-emerald-500 p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
            <Compass className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-zinc-900' : 'text-zinc-900 md:text-white'}`}>
            TRAVEL<span className="text-emerald-500">KIT</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                location.pathname === link.path 
                  ? 'text-emerald-500' 
                  : scrolled ? 'text-zinc-600' : 'text-white/90'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 active:scale-95">
            Book Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-zinc-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-emerald-500' : 'text-zinc-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-emerald-500 text-white px-6 py-4 rounded-xl text-lg font-semibold w-full">
                Book My Trip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;