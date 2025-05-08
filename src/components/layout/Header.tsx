import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Home, Award, Info, CloudRain } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'Modules', path: '/#modules', icon: <BookOpen size={20} /> },
    { name: 'Progress', path: '/progress', icon: <Award size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors"
        >
          <CloudRain size={32} className="text-primary" />
          <span className="font-bold text-xl md:text-2xl">Climate Change 101</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-1 font-medium hover:text-primary transition-colors ${
                location.pathname === link.path || 
                (link.path === '/#modules' && location.pathname === '/') 
                  ? 'text-primary' 
                  : 'text-neutral-text'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-neutral-text hover:text-primary transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4 px-6 shadow-md">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors ${
                    location.pathname === link.path ? 'text-primary font-medium' : 'text-neutral-text'
                  }`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;