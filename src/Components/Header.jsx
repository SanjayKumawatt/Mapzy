import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react'; // Using Zap icon for generic tech feel, or import Map if preferred

import logo from "../assets/logo.png"

const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  // Navigation Links
  const navItems = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} className='h-12' alt="" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white tracking-wide leading-none">
                MAPZY
                <span className="text-blue-400">.</span>
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-[0.2em] leading-none mt-1">
                TECHNOLOGIES
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setHoveredPath(location.pathname)}>
            {navItems.map((item) => {
              const isActive = item.path === location.pathname;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative px-1 py-2 text-sm font-medium transition-colors text-gray-300 hover:text-white"
                  onMouseEnter={() => setHoveredPath(item.path)}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active/Hover Line Animation */}
                  {item.path === hoveredPath && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute left-0 right-0 bottom-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center">
            <Link to={"/contact"} className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030712] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium ${
                    location.pathname === item.path
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <button className="w-full bg-white text-black px-6 py-3 rounded-full text-base font-bold hover:bg-gray-200 transition-colors">
                  Get in touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;