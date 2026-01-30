import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Nav, Footer } from './components/Navigation';
import { Home } from './pages/Home';
import { TZone } from './pages/TZone';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { WhyTechZala } from './pages/Why';
import { BackgroundAnimation } from './components/BackgroundAnimation';

const App = () => {
  const [activeTab, setActiveTab] = React.useState('home');

  // Scroll to top on tab change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'home' && <Home onNavigate={setActiveTab} />}
            {activeTab === 'tzone' && <TZone />}
            {activeTab === 'why' && <WhyTechZala onNavigate={setActiveTab} />}
            {activeTab === 'about' && <About onNavigate={setActiveTab} />}
            {activeTab === 'services' && <Services />}
            {activeTab === 'contact' && <Contact />}
            
            {activeTab === 'privacy' && (
              <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
                <h1 className="text-gray-900 text-5xl font-black mb-12 uppercase tracking-tight">Privacy Policy</h1>
                <div className="prose prose-blue text-gray-600 space-y-8 font-medium">
                  <p>TechZala LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">1. Information We Collect</h3>
                  <p>We may collect information you provide directly to us, such as your name, corporate email address, and any information you include in inquiry forms.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">2. Use of Information</h3>
                  <p>We use the information we collect to respond to your inquiries, provide the TZone demonstration, and improve our services.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">3. Security</h3>
                  <p>We implement SOC2-compliant security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'terms' && (
              <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto">
                <h1 className="text-gray-900 text-5xl font-black mb-12 uppercase tracking-tight">Terms of Service</h1>
                <div className="prose prose-blue text-gray-600 space-y-8 font-medium">
                  <p>By accessing the TechZala website, you agree to be bound by these Terms of Service.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">1. Use License</h3>
                  <p>Permission is granted to temporarily view the materials on TechZala's website for personal, non-commercial transitory viewing only.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">2. Disclaimer</h3>
                  <p>The materials on TechZala's website are provided on an 'as is' basis. TechZala makes no warranties, expressed or implied, and hereby disclaims all other warranties.</p>
                  <h3 className="text-gray-900 font-bold uppercase tracking-widest text-sm">3. Governing Law</h3>
                  <p>These terms and conditions are governed by and construed in accordance with the laws of Kentucky, USA.</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
