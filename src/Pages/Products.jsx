import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Workflow, 
  ScanEye, 
  MessageSquareText, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {

  const products = [
    {
      id: "coresense",
      title: "CoreSense AI",
      tagline: "Enterprise Decision Intelligence Platform",
      desc: "CoreSense AI is a comprehensive decision-support engine that analyzes structured and unstructured data to generate insights, predictions, and automated recommendations.",
      features: [
        "Predictive analytics for business planning",
        "Automated reporting and insights",
        "Intelligent alerts for real-time operations",
        "Pattern detection across large datasets",
        "Outcome forecasting and trend analysis"
      ],
      target: "Retail, finance, logistics, supply chain, manufacturing, and operations teams.",
      icon: <BrainCircuit size={40} />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      glow: "shadow-[0_0_50px_rgba(59,130,246,0.15)]",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      id: "flowsync",
      title: "FlowSync",
      tagline: "Intelligent Workflow Automation Suite",
      desc: "FlowSync eliminates repetitive tasks across departments by automating approvals, processing, documentation, and internal communication workflows.",
      features: [
        "Automated task routing",
        "Multi-level approval flows",
        "Document processing pipelines",
        "Smart reminders and deadline controls",
        "Real-time process monitoring dashboard"
      ],
      target: "Operations managers, HR departments, and administrative teams.",
      icon: <Workflow size={40} />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "shadow-[0_0_50px_rgba(6,182,212,0.15)]",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      id: "visionedge",
      title: "VisionEdge",
      tagline: "AI-Powered Document & Image Intelligence",
      desc: "VisionEdge interprets documents, scans, IDs, reports, invoices, and visual assets using automated extraction and classification.",
      features: [
        "Optical Character Recognition (OCR)",
        "Document classification & sorting",
        "Image-based data extraction",
        "Smart validation checks",
        "Real-time error detection"
      ],
      target: "Finance, healthcare, government services, insurance, and education sectors.",
      icon: <ScanEye size={40} />,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      glow: "shadow-[0_0_50px_rgba(16,185,129,0.15)]",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      id: "omniserve",
      title: "OmniServe",
      tagline: "Multi-Channel Virtual Assistant Platform",
      desc: "OmniServe is an AI communication layer that interacts with customers, employees, and systems across chat, email, form submissions, and dashboards.",
      features: [
        "AI conversational engines",
        "Automated customer support",
        "Smart ticket assignment",
        "Workflow connected responses",
        "Self-service help portals"
      ],
      target: "Customer support centers, e-commerce platforms, and service desks.",
      icon: <MessageSquareText size={40} />,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "shadow-[0_0_50px_rgba(168,85,247,0.15)]",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      id: "trackmind",
      title: "TrackMind",
      tagline: "Predictive Operations Management System",
      desc: "TrackMind helps organizations monitor operations, track performance, and predict future outcomes such as delays, failures, or workload peaks.",
      features: [
        "Real-time monitoring",
        "Predictive scheduling",
        "Resource utilization insights",
        "Incident alerting",
        "Operational forecasting"
      ],
      target: "Logistics, manufacturing, production, and service management.",
      icon: <Activity size={40} />,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
      glow: "shadow-[0_0_50px_rgba(245,158,11,0.15)]",
      gradient: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-20">
      
      {/* --- Hero Section --- */}
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#030712] to-[#030712]" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="text-cyan-400 animate-pulse" size={20} />
            <span className="text-cyan-300 text-xs font-bold tracking-widest uppercase">
              Product Ecosystem
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Scalable. Intelligent. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Transformative.
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            <strong className="text-white">MAPZY TECHNOLOGIES</strong> builds purpose-driven digital products designed to improve business operations. Each product is adaptable, customizable, and built on scalable architectural foundations.
          </p>
        </motion.div>
      </section>

      {/* --- Products List --- */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`relative rounded-3xl bg-[#0B1120] border ${product.border} p-1 overflow-hidden group hover:border-opacity-50 transition-colors duration-500 ${product.glow}`}
          >
            {/* Top Gradient Line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`} />

            <div className="relative bg-[#0B1120] rounded-[22px] p-8 md:p-12 overflow-hidden">
              
              {/* Background Decor */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.gradient} opacity-10 blur-[80px] rounded-full pointer-events-none`} />

              <div className="grid md:grid-cols-12 gap-12 relative z-10">
                
                {/* Left Column: Info */}
                <div className="md:col-span-7 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${product.bg} ${product.color} ring-1 ring-white/10 shadow-lg`}>
                      {product.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                        {product.title}
                      </h2>
                      <p className={`text-sm font-bold uppercase tracking-wider bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent`}>
                        {product.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5">
                    <span className="block text-xs font-semibold text-gray-500 uppercase mb-2">Ideal For</span>
                    <p className="text-gray-400 text-sm italic">
                      "{product.target}"
                    </p>
                  </div>
                </div>

                {/* Right Column: Features */}
                <div className="md:col-span-5 bg-black/20 rounded-2xl p-6 border border-white/5">
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles size={18} className={product.color} />
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Key Capabilities</h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${product.color}`} />
                        <span className="text-gray-400 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to={"/contact"} className={`w-full mt-8 py-3 rounded-xl border border-white/10 text-white text-sm font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2 group/btn`}>
                    Request Demo
                    <ArrowRight size={16} className={`group-hover/btn:translate-x-1 transition-transform ${product.color}`} />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        ))}

      </section>

      {/* --- Bottom CTA --- */}
      <section className="py-20 bg-gradient-to-b from-[#030712] to-[#0B1120] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to integrate intelligence?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Our team is ready to help you select and deploy the right AI modules for your business infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to={"/contact"} className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] w-full sm:w-auto">
              Schedule a Consultation
            </Link>
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductsPage;