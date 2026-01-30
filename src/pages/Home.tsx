import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Database, Globe, ChevronRight } from 'lucide-react';
import tzoneHero from "figma:asset/1200256df894df56680e7121773da093b7e0b59a.png";

import { InteractiveArchitecture } from '../components/InteractiveArchitecture';

export const Home = ({ onNavigate }: { onNavigate: (page: string) => void }) => {
  return (
    <div className="bg-transparent">
      {/* Professional Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#0033FF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-gray-900 text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                Enterprise Software <br />
                <span className="text-[#0033FF]">Built for Reliability.</span>
              </h1>
              
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                TechZala provides secure, scalable software platforms and cloud infrastructure for organizations that demand absolute uptime and operational clarity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => onNavigate('contact')}
                  className="bg-[#0033FF] hover:bg-black text-white px-10 py-5 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-3 text-sm uppercase tracking-wider shadow-lg shadow-blue-200"
                >
                  Schedule Consultation <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => onNavigate('tzone')}
                  className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-5 rounded-md font-bold transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  View TZone Platform
                </button>
              </div>
              
              <div className="mt-16 flex items-center gap-8">
                 <div className="flex flex-col">
                   <span className="text-2xl font-black text-gray-900">99.9%</span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">System Uptime</span>
                 </div>
                 <div className="w-[1px] h-10 bg-gray-100"></div>
                 <div className="flex flex-col">
                   <span className="text-2xl font-black text-gray-900">256-bit</span>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Data Encryption</span>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-100 rounded-3xl p-4 shadow-2xl relative group overflow-hidden">
                 <div className="absolute inset-0 bg-[#0033FF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20"></div>
                 <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm relative z-10 transition-transform duration-1000 group-hover:scale-105">
                    <img 
                      src={tzoneHero} 
                      alt="TechZala TZone Manager Dashboard" 
                      className="w-full h-auto"
                    />
                 </div>
              </div>
              {/* Floating Compliance Card */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:flex items-center gap-4">
                 <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={28} />
                 </div>
                 <div>
                    <p className="text-gray-900 font-bold text-sm">Enterprise Security</p>
                    <p className="text-gray-500 text-[10px] uppercase font-bold tracking-widest">Verified SOC2 Compliance</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 border-y border-gray-100 bg-gray-50 px-6">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">CloudInfra</div>
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">SecureNode</div>
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">EnterpriseOps</div>
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">DataScale</div>
            <div className="text-xl font-black text-gray-900 tracking-tighter uppercase">AuditPro</div>
         </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Our Expertise</h2>
            <h3 className="text-gray-900 text-4xl md:text-5xl font-black mb-8 tracking-tight">Enterprise Infrastructure & Software</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We focus on the foundations of enterprise technology: security, scalability, and maintainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                icon: Database, 
                title: "Custom ERP Systems", 
                desc: "Specialized workflow management solutions like TZone, designed for corporate governance and complex financial operations." 
              },
              { 
                icon: Globe, 
                title: "Cloud Infrastructure", 
                desc: "Architecture design and deployment on Azure/AWS with a focus on high availability, security, and cost governance." 
              },
              { 
                icon: ShieldCheck, 
                title: "Security & Compliance", 
                desc: "Hardened systems with built-in RBAC, audit logging, and compliance-ready frameworks for regulated industries." 
              }
            ].map((service, i) => (
              <div key={i} className="bg-white p-12 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-[#0033FF] mb-8 group-hover:bg-[#0033FF] group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h4 className="text-gray-900 text-2xl font-bold mb-6 tracking-tight">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed mb-8">{service.desc}</p>
                <button className="text-[#0033FF] font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <ChevronRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InteractiveArchitecture />

      {/* Highlight Section */}
      <section className="bg-gray-900 py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div>
                 <h2 className="text-blue-400 font-bold text-xs uppercase tracking-[0.4em] mb-4 text-center lg:text-left">Hardened Security</h2>
                 <h3 className="text-white text-4xl md:text-6xl font-black mb-10 tracking-tight text-center lg:text-left">Enterprise Trust. <br />Engineered.</h3>
                 <div className="space-y-8">
                    {[
                      "End-to-end encryption for all data in transit and at rest.",
                      "Comprehensive RBAC and identity management controls.",
                      "Continuous monitoring and automated incident response.",
                      "Regular internal security audits and penetration testing."
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                         <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 mt-1">
                            <ShieldCheck size={14} />
                         </div>
                         <p className="text-gray-300 text-lg">{item}</p>
                      </div>
                    ))}
                 </div>
                 <div className="mt-12 flex justify-center lg:justify-start">
                    <button className="bg-blue-600 hover:bg-white text-white hover:text-black px-12 py-5 rounded-md font-bold transition-all text-sm uppercase tracking-widest">
                       View Security Standards
                    </button>
                 </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                 <div className="text-center py-12">
                    <ShieldCheck size={80} className="text-blue-400 mx-auto mb-8" />
                    <h4 className="text-white text-3xl font-black mb-4">Enterprise Grade</h4>
                    <p className="text-gray-400 text-lg uppercase tracking-widest font-bold">Protocol: Secure-First</p>
                    <div className="mt-12 pt-12 border-t border-white/10 grid grid-cols-2 gap-8">
                       <div>
                          <p className="text-white text-3xl font-black">256-bit</p>
                          <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Encryption Standard</p>
                       </div>
                       <div>
                          <p className="text-white text-3xl font-black">99.9%</p>
                          <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">Uptime Target</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};
