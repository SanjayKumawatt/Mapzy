import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  ShoppingBag, 
  HeartPulse, 
  Truck, 
  Factory, 
  GraduationCap 
} from 'lucide-react';

const Industries = () => {

  const industries = [
    {
      title: "Finance & Digital Lending",
      desc: "Supporting risk assessment, automated verification, customer onboarding workflows, and document intelligence.",
      icon: <Landmark size={32} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "hover:border-blue-500/50"
    },
    {
      title: "Retail & E-Commerce",
      desc: "Providing inventory predictions, automated customer support, personalized shopping insights, and operational optimization.",
      icon: <ShoppingBag size={32} />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "hover:border-pink-500/50"
    },
    {
      title: "Healthcare",
      desc: "Helping clinics, hospitals, and wellness centers manage records, automate documentation, and improve patient handling workflows.",
      icon: <HeartPulse size={32} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "hover:border-emerald-500/50"
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Enhancing inventory planning, delivery routing, operations monitoring, and predictive scheduling.",
      icon: <Truck size={32} />,
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "hover:border-orange-500/50"
    },
    {
      title: "Manufacturing",
      desc: "Assisting with factory oversight, machine monitoring, schedule prediction, and product quality analytics.",
      icon: <Factory size={32} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "hover:border-cyan-500/50"
    },
    {
      title: "Education",
      desc: "Automating administrative processes, evaluation workflows, and communication systems for institutions.",
      icon: <GraduationCap size={32} />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "hover:border-yellow-500/50"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden">
      
      {/* Background Pattern (Hexagons/Dots) */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Industries We <span className="text-blue-500">Empower</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            <strong className="text-white">MAPZY TECHNOLOGIES’</strong> software and AI systems are used across multiple industries. Our products are designed to handle diverse operational needs while maintaining strong reliability and precision.
          </motion.p>
        </div>

        {/* --- Industries Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group p-8 rounded-2xl bg-[#0B1120] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${item.border}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`p-4 rounded-xl ${item.bg} ${item.color} ring-1 ring-white/5`}>
                  {item.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 text-xs font-mono">
                  0{index + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Industries;