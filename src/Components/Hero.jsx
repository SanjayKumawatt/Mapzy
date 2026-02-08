import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#030712] overflow-hidden pt-30 pb-20">
      
      {/* --- Background Effects (To match the dark theme) --- */}
      
      {/* 1. Main Blue Glow (Top Center) */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      {/* 2. Secondary Cyan Glow (Bottom Right) */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Badge / Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Next-Gen IT Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
        >
          Reinventing Digital Systems <br className="hidden md:block" />
          With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">Intelligence at the Core</span>
        </motion.h1>

        {/* Primary Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed mb-8"
        >
          <strong className="text-white">MAPZY TECHNOLOGIES</strong> is a next-generation IT company building transformative software and AI-driven platforms that help businesses operate faster, smarter, and more efficiently.
        </motion.p>

        {/* Secondary Description (Mission & Belief) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl text-left bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
          <div>
            <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
              <ArrowRight size={16} /> Our Mission
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To empower organizations with intelligent automation, predictive systems, and digital products built for long-term scalability.
            </p>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
              <ArrowRight size={16} /> Our Philosophy
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              We believe that modern businesses should not simply use technology-they should be shaped by it. Every product we build is centered around meaningful, measurable impact.
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <Link to={"/contact"} className="px-8 py-3.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Start Your Transformation
          </Link>
          <Link to={"/services"} className="px-8 py-3.5 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all backdrop-blur-sm">
            Explore Our Services
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ChevronDown size={24} />
      </motion.div>

    </section>
  );
};

export default Hero;