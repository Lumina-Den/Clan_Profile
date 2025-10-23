import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Members', href: '/members' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Join Us', href: '/join' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-charcoal/95 backdrop-blur-md border-b border-neon-blue/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <img 
                src="/lumina.png" 
                alt="LUMINA Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-cyber text-xl font-bold text-neon-blue">LUMINA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`transition-colors duration-300 px-3 py-2 text-sm font-medium ${
                    location.pathname === item.href
                      ? 'text-neon-blue border-b-2 border-neon-blue'
                      : 'text-gray-300 hover:text-neon-blue'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-dark-charcoal/95 backdrop-blur-md border-t border-neon-blue/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? 'text-neon-blue bg-neon-blue/10'
                    : 'text-gray-300 hover:text-neon-blue'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;