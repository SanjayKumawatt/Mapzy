import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, Mail, Globe } from 'lucide-react';

const TermsConditions = () => {
  const currentDate = new Date().toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="bg-[#030712] min-h-screen text-gray-300 pt-20 font-sans">
      
      {/* Header */}
      <section className="py-16 border-b border-white/5 bg-[#0B1120]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <FileText size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Last Updated: <span className="text-purple-400">{currentDate}</span></p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          
          {/* Intro */}
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white">
              <strong>MAPZY TECHNOLOGIES (OPC) PRIVATE LIMITED</strong> (“we”, “our”, “us”). These Terms & Conditions (“Terms”) govern your use of our website, products, and services. By accessing or using this website, you agree to these Terms.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">1. Use of Website</h2>
            <p>You may use this website only for lawful purposes. You agree not to:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-300">
              <li>Interfere with website functionality</li>
              <li>Submit false or misleading information</li>
              <li>Attempt unauthorized access</li>
              <li>Use the website for harmful or disruptive activities</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">2. Intellectual Property</h2>
            <p>All logos, content, designs, text, graphics, product names, and software displayed on this site are the property of <strong>MAPZY TECHNOLOGIES</strong>.</p>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg flex items-start gap-3">
              <AlertTriangle className="text-red-400 shrink-0 mt-1" size={18} />
              <p className="text-sm text-red-200">Copying, distributing, or modifying any content without permission is prohibited.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">3. Product & Service Usage</h2>
            <p>Use of MAPZY TECHNOLOGIES’ products and services may require:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Acceptance of additional product-specific guidelines</li>
              <li>Onboarding steps</li>
              <li>Secure handling of business or operational data</li>
            </ul>
            <p className="text-sm italic mt-2">We reserve the right to update features, improve systems, or discontinue components without prior notice.</p>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">4. User Responsibilities</h2>
            <p>By using our services, you agree to:</p>
            <ul className="grid md:grid-cols-2 gap-3">
               {['Provide accurate information', 'Ensure your usage complies with all applicable laws', 'Avoid uploading harmful or malicious files', 'Maintain confidentiality of any login credentials'].map((item, i) => (
                 <li key={i} className="bg-white/5 p-3 rounded-lg text-sm border border-white/5">{item}</li>
               ))}
            </ul>
            <p className="text-sm font-semibold mt-2">You are responsible for any activity conducted under your account.</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">5. Limitation of Liability</h2>
            <p>MAPZY TECHNOLOGIES is not liable for:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Service interruptions</li>
              <li>Data loss resulting from external factors</li>
              <li>Errors caused by third-party integrations</li>
              <li>Any indirect, incidental, or consequential damages</li>
            </ul>
            <p className="text-sm text-gray-500">Our services are provided “as is” and “as available.”</p>
          </div>

          {/* Section 6 & 7 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">6. Third-Party Links & Tools</h2>
              <p className="text-sm">We may provide links to third-party platforms for convenience. We do not endorse or control their services and are not responsible for their content or policies.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">7. Termination of Access</h2>
              <p className="text-sm">We may suspend or terminate access to our website or services at any time if:</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>You violate these Terms</li>
                <li>We detect suspicious or harmful activity</li>
                <li>System security requires urgent action</li>
              </ul>
            </div>
          </div>

          {/* Section 8 & 9 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">8. Changes to Terms</h2>
            <p>We may update these Terms periodically. Continued use of our website after updates signifies acceptance of revised Terms.</p>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-purple-500 pl-4">9. Governing Law</h2>
            <p>These Terms are governed by the applicable laws of <strong>India</strong>. Any disputes may be resolved in competent courts within India.</p>
          </div>

          {/* Section 10: Contact */}
          <div className="border-t border-white/10 pt-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">10. Contact Information</h2>
            <div className="flex flex-col items-center gap-4">
               <a href="mailto:support@mapzytechnologies.in" className="flex items-center gap-2 text-purple-400 hover:text-white transition-colors">
                 <Mail size={18} />
                 support@mapzytechnologies.in
               </a>
               <a href="https://www.mapzytechnologies.in" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                 <Globe size={18} />
                 www.mapzytechnologies.in
               </a>
            </div>
          </div>

        </motion.div>
      </section>
    </div>
  );
};

export default TermsConditions;