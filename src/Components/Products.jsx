import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Workflow, 
  ScanEye, 
  MessageSquareText, 
  Activity, 
  CheckCircle2, 
  Star 
} from 'lucide-react';

const Products = () => {

  const products = [
    {
      id: 1,
      title: "CoreSense AI",
      subtitle: "Enterprise Decision Intelligence Platform",
      desc: "CoreSense AI is a comprehensive decision-support engine that analyzes structured and unstructured data to generate insights, predictions, and automated recommendations.",
      features: [
        "Predictive analytics for business planning",
        "Automated reporting and insights",
        "Intelligent alerts for real-time operations",
        "Pattern detection across large datasets",
        "Outcome forecasting and trend analysis"
      ],
      footerTitle: "Who Uses It",
      footerText: "Retail, finance, logistics, supply chain, manufacturing, and operations teams that require continuous data-driven decision support.",
      icon: <BrainCircuit size={32} />,
      color: "from-blue-500 to-indigo-500",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "FlowSync",
      subtitle: "Intelligent Workflow Automation Suite",
      desc: "FlowSync eliminates repetitive tasks across departments by automating approvals, processing, documentation, and internal communication workflows.",
      features: [
        "Automated task routing",
        "Multi-level approval flows",
        "Document processing pipelines",
        "Smart reminders and deadline controls",
        "Real-time process monitoring dashboard"
      ],
      footerTitle: "Why It Matters",
      footerText: "It frees teams from manual tasks and helps organizations operate with speed, clarity, and reduced workload.",
      icon: <Workflow size={32} />,
      color: "from-cyan-400 to-teal-400",
      borderColor: "group-hover:border-cyan-400/50"
    },
    {
      id: 3,
      title: "VisionEdge",
      subtitle: "AI-Powered Document & Image Intelligence",
      desc: "VisionEdge interprets documents, scans, IDs, reports, invoices, and visual assets using automated extraction and classification.",
      features: [
        "Optical Character Recognition (OCR)",
        "Document classification & sorting",
        "Image-based data extraction",
        "Smart validation checks",
        "Real-time error detection"
      ],
      footerTitle: "Ideal For",
      footerText: "Industries needing scalable document handling such as finance, healthcare, government services, insurance, and education.",
      icon: <ScanEye size={32} />,
      color: "from-emerald-400 to-green-500",
      borderColor: "group-hover:border-emerald-400/50"
    },
    {
      id: 4,
      title: "OmniServe",
      subtitle: "Multi-Channel Virtual Assistant Platform",
      desc: "OmniServe is an AI communication layer that interacts with customers, employees, and systems across chat, email, form submissions, and dashboards.",
      features: [
        "AI conversational engines",
        "Automated customer support",
        "Smart ticket assignment",
        "Workflow connected responses",
        "Self-service help portals"
      ],
      footerTitle: "Supports",
      footerText: "Industries that require high-volume communication handling.",
      icon: <MessageSquareText size={32} />,
      color: "from-purple-500 to-pink-500",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: 5,
      title: "TrackMind",
      subtitle: "Predictive Operations Management System",
      desc: "TrackMind helps organizations monitor operations, track performance, and predict future outcomes such as delays, failures, or workload peaks.",
      features: [
        "Real-time monitoring",
        "Predictive scheduling",
        "Resource utilization insights",
        "Incident alerting",
        "Operational forecasting"
      ],
      footerTitle: "Perfect For",
      footerText: "Logistics, manufacturing, production, and service management.",
      icon: <Activity size={32} />,
      color: "from-amber-400 to-orange-500",
      borderColor: "group-hover:border-amber-400/50"
    }
  ];

  return (
    <section className="relative w-full py-24 bg-[#030712] overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AI-Driven Product Ecosystem</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            <strong className="text-white">MAPZY TECHNOLOGIES</strong> builds purpose-driven digital products designed to improve business operations across industries. Each product is adaptable, customizable, and built on scalable architectural foundations.
          </motion.p>
        </div>

        {/* --- Products Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative bg-[#0B1120] rounded-2xl border border-white/5 p-8 overflow-hidden hover:bg-[#0F1629] transition-all duration-300 ${product.id === 5 ? 'lg:col-span-2 lg:w-2/3 lg:mx-auto' : ''}`}
            >
              {/* Top Gradient Line */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${product.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex flex-col h-full">
                
                {/* Header: Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-white/5 text-white ring-1 ring-white/10 group-hover:ring-white/20 transition-all`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        {product.title}
                      </h3>
                      <p className={`text-sm font-medium bg-gradient-to-r ${product.color} bg-clip-text text-transparent`}>
                        {product.subtitle}
                      </p>
                    </div>
                  </div>
                  <Star className="text-yellow-500/50 fill-yellow-500/20" size={20} />
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-8 leading-relaxed">
                  {product.desc}
                </p>

                {/* Features List */}
                <div className="bg-black/20 rounded-xl p-6 mb-8 border border-white/5 flex-grow">
                  <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4 flex items-center gap-2">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm">
                        <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${product.color.split(' ')[1].replace('to-', 'text-')}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Section (Who Uses It) */}
                <div className={`mt-auto pt-6 border-t border-white/5`}>
                  <p className="text-sm">
                    <span className="text-white font-semibold block mb-1">{product.footerTitle}:</span>
                    <span className="text-gray-500 italic">{product.footerText}</span>
                  </p>
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Products;