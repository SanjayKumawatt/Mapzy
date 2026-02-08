import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Loader2, 
  MessageSquare,
  Building2
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call (2 seconds delay)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form (optional)
      // setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-20">
      
      {/* --- Header Section --- */}
      <section className="relative w-full py-20 px-4 text-center border-b border-white/5 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Partner with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Intelligence
            </span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Have a project in mind or need a consultation? Let's discuss how MAPZY TECHNOLOGIES can transform your business.
          </p>
        </motion.div>
      </section>

      {/* --- Contact Content --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-400 mb-8">
                Reach out to us directly for inquiries regarding our AI products, software services, or partnership opportunities.
              </p>
            </div>

            <div className="space-y-8">
              
              {/* Email Card */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Support</h4>
                  <a href="mailto:support@mapzytechnologies.in" className="text-gray-400 hover:text-blue-400 transition-colors">
                    support@mapzytechnologies.in
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Registered Office</h4>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    4-123, Gani Village, Gadivemula Mandal, <br />
                    Gani, Kurnool, Kurnool, <br />
                    Andhra Pradesh, India, 518010
                  </p>
                </div>
              </div>

              {/* Office Hours (Optional Visual Filler) */}
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)]">
                  <Building2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-400">
                    Monday - Saturday <br />
                    9:00 AM - 6:00 PM IST
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#0B1120] border border-white/10 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            {/* Form Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                // --- The Form ---
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Phone (Optional) */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Purpose / Interest Dropdown */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-blue-400">How can we help you?</label>
                    <div className="relative">
                      <select 
                        required
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="bg-gray-900 text-gray-500">Select an interest...</option>
                        <option value="Custom Software Development" className="bg-gray-900">Custom Software Development</option>
                        <option value="AI Product Integration" className="bg-gray-900">AI Product Integration</option>
                        <option value="Product: CoreSense AI" className="bg-gray-900">Product: CoreSense AI</option>
                        <option value="Product: FlowSync" className="bg-gray-900">Product: FlowSync</option>
                        <option value="Product: VisionEdge" className="bg-gray-900">Product: VisionEdge</option>
                        <option value="Partnership Proposal" className="bg-gray-900">Partnership Proposal</option>
                        <option value="General Inquiry" className="bg-gray-900">General Inquiry</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <MessageSquare size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea 
                      required
                      rows="4"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder-gray-600 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // --- Success State (No Alert) ---
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center h-[500px]"
                >
                  <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6 ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-gray-400 text-lg max-w-sm mb-8">
                    Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. We have received your request regarding <span className="text-blue-400">{formData.subject}</span>.
                  </p>
                  <p className="text-sm text-gray-500">
                    Our team will contact you at <br/> <span className="text-gray-300 underline">{formData.email}</span> within 24 hours.
                  </p>
                  <button 
                    onClick={() => { setIsSuccess(false); setFormData({name:'', email:'', phone:'', subject:'', message:''}) }}
                    className="mt-8 px-6 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;