import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Menu, X, Globe, MessageSquare, ShieldCheck } from 'lucide-react';
import logo from "figma:asset/9c2a9fb5e5982d915869a125d29167a9cb8cb252.png";

export const Nav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'tzone', label: 'TZone T&E' },
    { id: 'why', label: 'Why TechZala' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => { setActiveTab('home'); setIsMobileMenuOpen(false); }}>
          <div className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-105">
            <img src={logo} alt="TechZala Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col">
            <span className="text-[#0033FF] font-black text-xl md:text-2xl tracking-tight leading-none uppercase">TechZala</span>
            <span className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em] mt-1">Enterprise Solutions</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`text-[12px] uppercase tracking-wider font-bold transition-all relative py-2 ${
                activeTab === item.id ? 'text-[#0033FF]' : 'text-gray-600 hover:text-[#0033FF]'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div 
                  layoutId="nav-underline" 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0033FF]" 
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setActiveTab('contact')}
            className="hidden md:block bg-[#0033FF] hover:bg-black text-white px-6 py-2.5 rounded-md text-[11px] font-bold uppercase tracking-wider transition-all duration-300"
          >
            Request Demo
          </button>
          <button 
            className="lg:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-8 px-6 space-y-6 shadow-xl"
        >
          {navItems.concat({ id: 'contact', label: 'Request Demo' }).map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`block w-full text-left text-lg font-bold uppercase tracking-tight transition-colors ${
                activeTab === item.id ? 'text-[#0033FF]' : 'text-black'
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export const Footer = ({ setActiveTab }: { setActiveTab: (t: string) => void }) => (
  <footer className="bg-gray-50 border-t border-gray-200 pt-20 pb-12 px-6 relative z-10">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12">
              <img src={logo} alt="TechZala Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-black font-black text-2xl tracking-tighter uppercase">TechZala</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xs font-medium">
            Delivering mission-critical enterprise software and secure cloud infrastructure for global organizations.
          </p>
        </div>
        
        <div>
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-8">Platforms</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTab('tzone')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">TZone Travel ERP</button></li>
            <li><button onClick={() => setActiveTab('why')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Why TechZala</button></li>
            <li><button onClick={() => setActiveTab('about')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Company Profile</button></li>
            <li><button onClick={() => setActiveTab('services')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Core Services</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-8">Governance</h4>
          <ul className="space-y-4">
            <li><button onClick={() => setActiveTab('privacy')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Privacy Policy</button></li>
            <li><button onClick={() => setActiveTab('terms')} className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Terms of Service</button></li>
            <li><a href="#" className="text-gray-600 hover:text-[#0033FF] text-sm font-medium transition-all">Compliance Center</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-bold text-xs uppercase tracking-widest mb-8">Contact</h4>
          <div className="space-y-4 mb-8">
             <div className="flex items-start gap-3 text-gray-600 text-sm">
                <Globe size={16} className="text-[#0033FF] shrink-0 mt-0.5" />
                <span>7659 Mall Road 1159,<br />Florence, KY 41042</span>
             </div>
             <div className="flex items-center gap-3 text-gray-600 text-sm">
                <MessageSquare size={16} className="text-[#0033FF] shrink-0" />
                <a href="mailto:info@techzala.com" className="hover:text-[#0033FF]">info@techzala.com</a>
             </div>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-500 text-[11px] font-bold uppercase tracking-wider">
          © 2026 TechZala LLC. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
           <span>Security</span>
           <span>Status</span>
           <span>Uptime</span>
        </div>
      </div>
    </div>
  </footer>
);
