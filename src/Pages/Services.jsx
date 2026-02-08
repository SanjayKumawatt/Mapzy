import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  BrainCircuit, 
  Workflow, 
  Rocket, 
  Database, 
  Server, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {

  const services = [
    {
      title: "Custom Software Development",
      desc: "We build tailored software applications that match the exact needs of your organization. Every product is engineered for:",
      points: [
        "High performance",
        "Long-term maintainability",
        "Fast deployment",
        "Future scalability"
      ],
      footer: "These solutions form the backbone of your digital infrastructure.",
      icon: <Code2 size={32} />,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "hover:border-blue-400/50"
    },
    {
      title: "AI Model Development & Integration",
      desc: "From predictive engines to conversational systems to automation models, we develop AI components that seamlessly integrate into your products or workflows. Our approach covers:",
      points: [
        "Data preparation",
        "Model training",
        "Evaluation & optimization",
        "Secure deployment",
        "Continuous improvement cycles"
      ],
      icon: <BrainCircuit size={32} />,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "hover:border-purple-400/50"
    },
    {
      title: "Automation Architecture",
      desc: "We create automated pipelines that reduce manual effort and eliminate operational delays across business functions.",
      points: [
        "Process automation systems",
        "AI-triggered event workflows",
        "Intelligent data processing units",
        "Multi-department task coordination"
      ],
      icon: <Workflow size={32} />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
      border: "hover:border-cyan-400/50"
    },
    {
      title: "Product Engineering",
      desc: "We help organizations conceptualize, design, build, and scale digital products that solve real problems and deliver measurable impact.",
      icon: <Rocket size={32} />,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
      border: "hover:border-orange-400/50"
    },
    {
      title: "Data Intelligence Systems",
      desc: "We build analytical layers that turn raw data into structured dashboards, predictive insights, and operational intelligence.",
      icon: <Database size={32} />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "hover:border-emerald-400/50"
    },
    {
      title: "Enterprise System Deployment",
      desc: "We implement full-scale digital systems that support your business growth without compromising performance or reliability.",
      icon: <Server size={32} />,
      color: "text-indigo-400",
      bg: "bg-indigo-400/10",
      border: "hover:border-indigo-400/50"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-20">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/5 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Businesses with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Robust Software & Intelligent Systems
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">MAPZY TECHNOLOGIES</strong> provides end-to-end technology solutions that help organizations evolve into digitally enabled and intelligence-driven businesses.
          </p>
        </motion.div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group flex flex-col p-8 rounded-2xl bg-[#0B1120] border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10 ${service.border}`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color} ring-1 ring-white/5`}>
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {service.desc}
              </p>

              {/* Bullet Points (If available) */}
              {service.points && (
                <ul className="space-y-3 mb-6 mt-auto">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${service.color}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Footer Note (For first card) */}
              {service.footer && (
                <div className="mt-auto pt-4 border-t border-white/5 text-xs text-gray-500 italic">
                  {service.footer}
                </div>
              )}
              


            </motion.div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default ServicesPage;