import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  Rocket, 
  Target,
  Award,
  ChevronRight
} from 'lucide-react';

const AboutPage = () => {

  // Core Values Data
  const values = [
    {
      title: "Innovation With Purpose",
      desc: "Every solution we build exists to solve meaningful business challenges.",
      icon: <Lightbulb size={28} />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "hover:border-yellow-400/50"
    },
    {
      title: "Reliability Over Complexity",
      desc: "Technology should be dependable, clear, and easy to adopt.",
      icon: <ShieldCheck size={28} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-400/50"
    },
    {
      title: "Long-Term Value",
      desc: "We design products that evolve with your business, ensuring sustainability.",
      icon: <TrendingUp size={28} />,
      color: "text-green-400",
      bg: "bg-green-400/10",
      border: "hover:border-green-400/50"
    },
    {
      title: "Human-Centered Technology",
      desc: "We build systems that enhance human capability, not replace it.",
      icon: <Users size={28} />,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "hover:border-pink-400/50"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-20">
      
      {/* --- Section 1: Hero Banner --- */}
      <section className="relative w-full py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4"
          >
            About Mapzy Technologies
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Simplifying Complexity, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Architecting the Future.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We are builders, thinkers, and innovators driven by the belief that technology should be a force for clarity, not confusion.
          </motion.p>
        </div>
      </section>

      {/* --- Section 2: Who We Are (Detailed) --- */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                Who We Are
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p>
                  <strong className="text-white">MAPZY TECHNOLOGIES (OPC) PRIVATE LIMITED</strong> is a technology company building powerful software and intelligent systems that help organizations work smarter.
                </p>
                <p>
                  Established in <span className="text-white font-semibold">Andhra Pradesh, India</span>, our company is driven by the belief that technology should simplify complexity-not create more of it.
                </p>
                <p>
                  We focus on delivering solutions that reduce friction, eliminate repetitive processes, and enhance decision-making through robust digital systems.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20"
            >
              <div className="bg-[#0B1120] p-8 rounded-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px]" />
                 <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                 <p className="text-gray-400 italic text-lg border-l-4 border-blue-500 pl-4">
                   "To contribute meaningfully to the way the world uses technology by building systems that are not just smart, but intuitive and impactful."
                 </p>
                 <div className="mt-8 flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">100%</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Commitment to Quality</span>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10" />
                    <div className="flex flex-col">
                      <span className="text-3xl font-bold text-white">24/7</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wider">Operational Focus</span>
                    </div>
                 </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- Section 3: Our Philosophy Grid --- */}
      <section className="py-20 bg-[#020617] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-gray-400">The core principles that guide every line of code we write.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-[#0B1120] border border-white/5 group hover:border-opacity-50 transition-all duration-300 ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${item.bg} ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Journey & Leadership --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Journey Column (Left - 7 cols) */}
          <div className="md:col-span-7">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Rocket className="text-purple-400" />
              Our Journey
            </h2>
            <div className="relative border-l border-white/10 pl-8 ml-3 space-y-12">
              
              {/* Timeline Item 1 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-[#030712]" />
                <h4 className="text-xl font-bold text-white mb-2">The Beginning</h4>
                <p className="text-gray-400 leading-relaxed">
                  Starting from a small innovation-focused unit, MAPZY TECHNOLOGIES began with a simple idea: to solve complex problems using elegant code. We started by building custom solutions for local businesses.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-cyan-500 border-4 border-[#030712]" />
                <h4 className="text-xl font-bold text-white mb-2">Evolution to Product-First</h4>
                <p className="text-gray-400 leading-relaxed">
                  We grew into a product-first company, creating intelligent digital systems used across industries. While we are a young startup, our ambition is large-to contribute meaningfully to the way the world uses technology.
                </p>
              </div>

            </div>
          </div>

          {/* Leadership Column (Right - 5 cols) */}
          <div className="md:col-span-5">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-gradient-to-b from-[#0F172A] to-[#030712] border border-white/10 rounded-3xl p-8 sticky top-24"
             >
                <div className="flex items-center gap-2 mb-6 text-yellow-500">
                  <Award size={20} />
                  <span className="text-sm font-bold uppercase tracking-widest">Leadership</span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center text-2xl font-bold text-gray-400 border-2 border-white/10">
                    MK
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Manish Kumar</h3>
                    <p className="text-blue-400 font-medium">Founder & Director</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-sm mb-6">
                  "A builder passionate about creating technology that drives operational efficiency and expands business capabilities. Under this leadership, MAPZY focuses on engineering high-impact systems backed by thoughtful design and strong data foundations."
                </p>

                
             </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;