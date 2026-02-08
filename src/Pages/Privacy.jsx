import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail, Globe } from 'lucide-react';

const PrivacyPolicy = () => {
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
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <Shield size={32} />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: <span className="text-blue-400">{currentDate}</span></p>
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
              <strong>MAPZY TECHNOLOGIES (OPC) PRIVATE LIMITED</strong> (“we”, “our”, “us”) is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you interact with our website, products, and services.
            </p>
            <p>
              By using our website or submitting information, you agree to the practices described in this Privacy Policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            
            <div className="bg-white/5 p-6 rounded-xl border border-white/5 space-y-4">
              <div>
                <h3 className="text-blue-400 font-semibold mb-2">1.1 Personal Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Inquiry details</li>
                </ul>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h3 className="text-cyan-400 font-semibold mb-2">1.2 Usage Data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                </ul>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h3 className="text-purple-400 font-semibold mb-2">1.3 Business Information</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Operational data for service setup</li>
                  <li>Documentation required for solution deployment</li>
                  <li>User account information</li>
                </ul>
              </div>
            </div>
            <p className="text-sm italic text-gray-500">We do not collect sensitive personal data unless required for a specific service and provided voluntarily.</p>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">2. How We Use Your Information</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {['Provide and maintain our services', 'Respond to inquiries and support requests', 'Improve website performance', 'Understand user interactions and preferences', 'Customize the user experience', 'Conduct internal analysis and product improvement', 'Communicate important updates or notifications'].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm bg-white/5 p-3 rounded-lg">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm font-semibold text-white">We do not sell or rent your information.</p>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">3. Data Sharing & Disclosure</h2>
            <p>We may share information only in the following situations:</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>With trusted service providers that assist in operating our website</li>
              <li>When required for delivering a product or service you requested</li>
              <li>To comply with legal obligations</li>
              <li>To prevent fraud or security risks</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">4. Cookies & Tracking Technologies</h2>
            <p>Our website may use cookies to improve navigation, remember user preferences, and analyze website traffic patterns. You can disable cookies in your browser settings, but some features may not function properly.</p>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">5. Data Security</h2>
            <div className="flex items-start gap-4 bg-blue-900/10 p-4 rounded-xl border border-blue-500/20">
              <Lock className="text-blue-400 mt-1 shrink-0" size={20} />
              <p className="text-sm">We implement reasonable technical and organizational measures to protect your information, including access controls, encrypted pathways, and secure storage methods. However, no digital transmission is completely immune from risk.</p>
            </div>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-l-4 border-blue-500 pl-4">6. Your Rights</h2>
            <p>You may request to:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Access your personal information</li>
              <li>Update or correct data</li>
              <li>Request deletion of your information</li>
              <li>Withdraw consent</li>
              <li>Limit certain types of processing</li>
            </ul>
            <p className="mt-4">To exercise your rights, contact us at: <a href="mailto:support@mapzytechnologies.in" className="text-blue-400 hover:underline">support@mapzytechnologies.in</a></p>
          </div>

          {/* Section 7 & 8 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">7. Third-Party Links</h2>
              <p className="text-sm">Our website may contain links to external websites. We are not responsible for their content or privacy practices.</p>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">8. Updates to This Policy</h2>
              <p className="text-sm">We may update this policy periodically. Changes will be posted on this page with the updated date.</p>
            </div>
          </div>

          {/* Section 9: Contact */}
          <div className="border-t border-white/10 pt-8 mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">9. Contact Us</h2>
            <div className="flex flex-col items-center gap-4">
               <a href="mailto:support@mapzytechnologies.in" className="flex items-center gap-2 text-blue-400 hover:text-white transition-colors">
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

export default PrivacyPolicy;