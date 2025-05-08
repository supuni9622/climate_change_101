import React from 'react';
import { Link } from 'react-router-dom';
import { CloudRain, Github, Twitter, Instagram, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and tagline */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CloudRain size={28} />
              <span className="font-bold text-xl">Climate Change 101</span>
            </Link>
            <p className="text-primary-100 max-w-xs">
              Understanding our climate, one lesson at a time. 
              Educational resources for everyone to learn about climate science.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#modules" className="text-primary-100 hover:text-white transition-colors">
                  All Modules
                </Link>
              </li>
              <li>
                <Link to="/progress" className="text-primary-100 hover:text-white transition-colors">
                  Your Progress
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-100 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://climate.nasa.gov/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>NASA Climate</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ipcc.ch/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>IPCC</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.noaa.gov/climate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>NOAA Climate</span>
                  <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.un.org/en/climatechange" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-100 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>UN Climate Action</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a 
                href="#" 
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-primary-100">
              Stay updated with our newsletter
            </p>
            <div className="mt-2 flex">
              <input 
                type="email" 
                placeholder="Your email"
                className="px-3 py-2 rounded-l-lg text-neutral-text w-full focus:outline-none"
              />
              <button className="bg-accent px-4 py-2 rounded-r-lg font-medium hover:bg-accent-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-500 mt-8 pt-8 text-center text-primary-100">
          <p>© {new Date().getFullYear()} Climate Change 101. All rights reserved.</p>
          <p className="mt-2 text-sm">
            An educational project to help understand climate science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;