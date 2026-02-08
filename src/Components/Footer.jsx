import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ChevronRight, Zap } from 'lucide-react';

import logo from "../assets/logo.png"

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
                          <img src={logo} className='h-12' alt="" />
              
              <span className="text-2xl font-bold text-white tracking-wide">
                MAPZY<span className="text-blue-500">.</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Reinventing digital systems with intelligence at the core. We build scalable software and AI solutions for modern enterprises.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Products', 'Services', 'Industries', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (Email & Address) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-6">

              {/* Email */}
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">Email Support</span>
                  <a href="mailto:support@mapzytechnologies.in" className="text-white hover:text-blue-400 transition-colors">
                    support@mapzytechnologies.in
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider font-semibold text-gray-500 mb-1">Registered Office</span>
                  <p className="text-gray-300 leading-relaxed max-w-sm">
                    4-123, Gani Village, Gadivemula Mandal, <br />
                    Gani, Kurnool, Kurnool, <br />
                    Andhra Pradesh, India, 518010
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500 text-center md:text-left">
            &copy; {currentYear} MAPZY TECHNOLOGIES (OPC) PRIVATE LIMITED. All rights reserved.
          </p>

          {/* Legal Links Buttons */}
          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-blue-500 hover:after:w-full after:transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-conditions"
              className="text-xs font-medium text-gray-400 hover:text-white transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-blue-500 hover:after:w-full after:transition-all"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;