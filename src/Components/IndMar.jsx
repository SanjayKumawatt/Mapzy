import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  HeartPulse, 
  Truck, 
  Zap, 
  Factory, 
  GraduationCap, 
  ShoppingBag,
  Cpu
} from 'lucide-react';

const IndustryMarquee = () => {
  
  // Define industries exactly like the image style
  const industries = [
    { name: "FINTECH", icon: <Landmark size={24} /> },
    { name: "HEALTHCARE", icon: <HeartPulse size={24} /> },
    { name: "SUPPLY CHAIN", icon: <Truck size={24} /> },
    { name: "UTILITIES", icon: <Zap size={24} /> },
    { name: "MANUFACTURING", icon: <Factory size={24} /> },
    { name: "EDUCATION", icon: <GraduationCap size={24} /> },
    { name: "RETAIL", icon: <ShoppingBag size={24} /> },
    { name: "AI & ROBOTICS", icon: <Cpu size={24} /> },
  ];

  return (
    // Container Background - Dark to match your theme
    <section className="w-full py-8 bg-[#020617] border-y border-white/5 relative overflow-hidden flex items-center">
      
      {/* Left Fade Gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
      
      {/* Right Fade Gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-full">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 30, // Adjust speed here (Lower = Faster)
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {/* First Loop of Items */}
          {industries.map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-cyan-500/80 hover:text-cyan-400 transition-colors cursor-default">
              {item.icon}
              <span className="text-lg font-bold tracking-widest whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Second Loop of Items (For seamless infinite effect) */}
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex flex-shrink-0 gap-16 pr-16"
        >
          {industries.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-3 text-cyan-500/80 hover:text-cyan-400 transition-colors cursor-default">
              {item.icon}
              <span className="text-lg font-bold tracking-widest whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default IndustryMarquee;