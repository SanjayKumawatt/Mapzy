import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Quote, 
  MapPin 
} from 'lucide-react';

const About = () => {

  const philosophy = [
    {
      title: "Innovation With Purpose",
      desc: "Every solution we build exists to solve meaningful business challenges.",
      icon: <Lightbulb size={24} />,
      color: "text-yellow-400",
      border: "hover:border-yellow-400/50"
    },
    {
      title: "Reliability Over Complexity",
      desc: "Technology should be dependable, clear, and easy to adopt.",
      icon: <ShieldCheck size={24} />,
      color: "text-blue-400",
      border: "hover:border-blue-400/50"
    },
    {
      title: "Long-Term Value",
      desc: "We design products that evolve with your business, ensuring sustainability.",
      icon: <TrendingUp size={24} />,
      color: "text-green-400",
      border: "hover:border-green-400/50"
    },
    {
      title: "Human-Centered Technology",
      desc: "We build systems that enhance human capability, not replace it.",
      icon: <Users size={24} />,
      color: "text-pink-400",
      border: "hover:border-pink-400/50"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden text-white">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Who We Are (Intro) --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              
              <span className="text-blue-400 uppercase tracking-widest text-sm font-semibold">Who We Are</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Simplifying Complexity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Through Intelligent Systems
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              <strong className="text-white">MAPZY TECHNOLOGIES (OPC) PRIVATE LIMITED</strong> is a technology company building powerful software and intelligent systems that help organizations work smarter.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} className="text-blue-500" />
              <span>Established in Andhra Pradesh, India</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm relative"
          >
            <Quote className="absolute top-6 right-6 text-white/10" size={48} />
            <p className="text-xl font-light italic text-gray-300 leading-relaxed z-10 relative">
              "We believe that technology should simplify complexity-not create more of it. We focus on delivering solutions that reduce friction, eliminate repetitive processes, and enhance decision-making."
            </p>
          </motion.div>
        </div>

        {/* --- Our Philosophy (Grid) --- */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold">Our Philosophy</h3>
            <p className="text-gray-500 mt-2">The core values that drive our engineering.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {philosophy.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-[#0B1120] border border-white/5 transition-all duration-300 hover:-translate-y-1 ${item.border}`}
              >
                <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- Journey & Leadership (Split) --- */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></span>
              Our Journey
            </h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Starting from a small innovation-focused unit, <strong className="text-gray-200">MAPZY TECHNOLOGIES</strong> has grown into a product-first company creating intelligent digital systems used across industries.
              </p>
              <p>
                While we are a young startup, our ambition is large-to contribute meaningfully to the way the world uses technology. We don't just write code; we architect the future of business operations.
              </p>
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#0B1120] to-[#030712] border border-white/10 rounded-2xl p-8 relative overflow-hidden group"
          >
            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] transition-all group-hover:bg-blue-500/20" />
            
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-6">Leadership</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-700 overflow-hidden shrink-0 border-2 border-white/10">
                {/* Placeholder Avatar - Replace with real image if available */}
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-500 font-bold text-xl">
                  MK
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-white">Manish Kumar</h4>
                <p className="text-gray-500 text-sm mb-4">Founder & Director</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-sm mt-4 border-t border-white/5 pt-4">
              "A builder passionate about creating technology that drives operational efficiency and expands business capabilities. Under this leadership, MAPZY focuses on engineering high-impact systems backed by thoughtful design and strong data foundations."
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;