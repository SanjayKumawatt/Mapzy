import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Layers, 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  
  // Data for the 4 Cards
  const solutions = [
    {
      title: "Intelligent Business Platforms",
      desc: "We design end-to-end systems that automate workflows, streamline communication, and enable real-time decision-making across organizations.",
      icon: <Layers size={32} className="text-blue-400" />
    },
    {
      title: "Industry-Focused Products",
      desc: "From finance to retail to manufacturing, our AI-driven product suites are tailored to the operational needs of modern industries.",
      icon: <Cpu size={32} className="text-cyan-400" />
    },
    {
      title: "Advanced Automation Tools",
      desc: "Our proprietary automation engines eliminate repetitive tasks, reduce operational delays, and free teams to focus on strategic growth.",
      icon: <Zap size={32} className="text-purple-400" />
    },
    {
      title: "Data Intelligence Systems",
      desc: "We build intelligent layers that interpret business data, identify patterns, forecast outcomes, and uncover hidden opportunities.",
      icon: <BarChart3 size={32} className="text-emerald-400" />
    }
  ];

  // Data for the List
  const benefits = [
    "High efficiency",
    "Seamless digital transformation",
    "Strong privacy and control",
    "Scalable architecture",
    "Continuous improvement"
  ];

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden">
      
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Solutions Powered by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Next-Generation Software & AI
            </span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full" />
        </div>

        {/* --- Grid of 4 Cards --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="mb-6 bg-white/5 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- "Built for Modern Organizations" Section --- */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-gradient-to-br from-[#0B1120] to-[#030712] p-8 md:p-12 rounded-3xl border border-white/10 mb-24">
          
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-white mb-6">
              Built for <span className="text-cyan-400">Modern Organizations</span>
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you’re an emerging startup or an established enterprise, our solutions are designed to support your growth ecosystem.
              <br/><br/>
              <span className="text-blue-200 font-semibold">At MAPZY TECHNOLOGIES, we don’t just deliver technology-we deliver progress.</span>
            </p>
          </div>

          <div className="md:w-1/2 w-full">
            <ul className="grid gap-4">
              {benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-colors"
                >
                  <CheckCircle2 className="text-cyan-400 shrink-0" size={20} />
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Final CTA Section --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto py-16 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Experience the Future of <br className="hidden md:block"/>
            Intelligent Digital Systems
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Discover how your business can evolve with next-generation software and AI.
          </p>
          <Link to={"/contact"} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-300">
            Get Started Now
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Solutions;