import React from 'react';
import { motion } from 'framer-motion';
import { 
  Landmark, 
  ShoppingBag, 
  HeartPulse, 
  Truck, 
  Factory, 
  GraduationCap,
  ArrowRight,
  Globe2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IndustriesPage = () => {

  const industries = [
    {
      title: "Finance & Digital Lending",
      desc: "Supporting risk assessment, automated verification, customer onboarding workflows, and document intelligence.",
      details: "We build secure, high-speed financial systems that automate credit decisioning and streamline compliance.",
      icon: <Landmark size={40} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-400/50",
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Retail & E-Commerce",
      desc: "Providing inventory predictions, automated customer support, personalized shopping insights, and operational optimization.",
      details: "Our AI engines analyze customer behavior to forecast trends and automate supply chain restocking.",
      icon: <ShoppingBag size={40} />,
      color: "text-pink-400",
      bg: "bg-pink-400/10",
      border: "hover:border-pink-400/50",
      gradient: "from-pink-500/20 to-transparent"
    },
    {
      title: "Healthcare",
      desc: "Helping clinics, hospitals, and wellness centers manage records, automate documentation, and improve patient handling workflows.",
      details: "We engineer HIPAA-compliant systems that reduce administrative burden and improve patient data accessibility.",
      icon: <HeartPulse size={40} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "hover:border-emerald-400/50",
      gradient: "from-emerald-500/20 to-transparent"
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Enhancing inventory planning, delivery routing, operations monitoring, and predictive scheduling.",
      details: "Our tracking algorithms provide real-time visibility into fleet operations and warehouse management.",
      icon: <Truck size={40} />,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "hover:border-orange-400/50",
      gradient: "from-orange-500/20 to-transparent"
    },
    {
      title: "Manufacturing",
      desc: "Assisting with factory oversight, machine monitoring, schedule prediction, and product quality analytics.",
      details: "We deploy IoT-ready dashboards that monitor equipment health and predict maintenance needs before failure.",
      icon: <Factory size={40} />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "hover:border-cyan-400/50",
      gradient: "from-cyan-500/20 to-transparent"
    },
    {
      title: "Education",
      desc: "Automating administrative processes, evaluation workflows, and communication systems for institutions.",
      details: "From student enrollment to automated grading systems, we digitize the entire educational operational lifecycle.",
      icon: <GraduationCap size={40} />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
      border: "hover:border-yellow-400/50",
      gradient: "from-yellow-500/20 to-transparent"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-20">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/5 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Globe2 className="text-blue-500" size={20} />
            <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">
              Global Impact
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Tailored Technology for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Every Major Industry
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">MAPZY TECHNOLOGIES</strong> builds adaptable software and AI systems designed to handle the specific operational needs of diverse sectors, ensuring reliability and precision at scale.
          </p>
        </motion.div>
      </section>

      {/* --- Industries Grid --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-[#0B1120] border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${item.border}`}
            >
              {/* Internal Gradient Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Header: Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl ${item.bg} ${item.color} ring-1 ring-white/10`}>
                    {item.icon}
                  </div>
                  <div className="text-gray-600 font-mono text-sm opacity-50 group-hover:opacity-100 transition-opacity">
                    SECTOR 0{index + 1}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-base leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Extra Detail on Card */}
                <div className="pt-6 border-t border-white/5">
                   <p className="text-sm text-gray-500 italic">
                     "{item.details}"
                   </p>
                </div>

                <div className="mt-6 flex items-center text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className={`${item.color}`}>Explore Solutions</span>
                  <ArrowRight size={16} className={`ml-2 ${item.color}`} />
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* --- Bottom CTA --- */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#030712] to-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't see your industry?
          </h2>
          <p className="text-gray-400 mb-8">
            Our core technology is industry-agnostic. We build custom solutions for any sector that relies on data, workflows, and digital operations.
          </p>
          <Link to={"/contact"} className="px-8 py-3 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            Contact Us for a Custom Solution
          </Link>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;