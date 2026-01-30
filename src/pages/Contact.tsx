import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import logo from "figma:asset/9c2a9fb5e5982d915869a125d29167a9cb8cb252.png";

export const Contact = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-transparent pt-48 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 blur-[150px] rounded-full pointer-events-none opacity-50"></div>

      <section className="py-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16">
                  <img src={logo} alt="TechZala Logo" className="w-full h-full object-contain" />
                </div>
                <div className="h-[1px] w-12 bg-gray-200"></div>
                <span className="text-[#0033FF] text-[11px] font-black uppercase tracking-[0.4em]">Inquiry Desk</span>
              </div>
              
              <h1 className="text-gray-900 text-5xl md:text-7xl font-black mb-10 tracking-tight leading-[1.1]">
                Initiate a <br /><span className="text-[#0033FF]">Consultation.</span>
              </h1>
              
              <p className="text-gray-600 text-xl leading-relaxed mb-16 max-w-lg">
                Secure a private demonstration of TZone or discuss your enterprise software architecture with our senior engineering partners.
              </p>

              <div className="space-y-12">
                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0033FF] group-hover:bg-[#0033FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Direct Communications</h4>
                    <p className="text-gray-900 text-2xl font-black tracking-tight">
                      <a href="mailto:info@techzala.com" className="hover:text-[#0033FF] transition-colors">info@techzala.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-[#0033FF] group-hover:bg-[#0033FF] group-hover:text-white transition-all duration-300 shadow-sm">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Global Headquarters</h4>
                    <p className="text-gray-900 text-xl font-bold leading-relaxed tracking-tight">
                      7659 Mall Road 1159,<br />
                      Florence, KY 41042
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 w-fit">
                 <ShieldCheck size={24} className="text-blue-600" />
                 <div>
                    <p className="text-gray-900 font-bold text-xs uppercase tracking-widest leading-none">Hardened Security</p>
                    <p className="text-gray-500 text-[10px] uppercase font-bold mt-1">Enterprise Grade Infrastructure</p>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-gray-100 p-10 md:p-16 rounded-[3rem] shadow-2xl relative"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="space-y-4">
                    <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Corporate Name</label>
                    <input required type="text" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 text-gray-900 text-lg focus:outline-none focus:border-[#0033FF] focus:bg-white transition-all font-medium" placeholder="Jane Cooper" />
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Business Email</label>
                    <input required type="email" className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 text-gray-900 text-lg focus:outline-none focus:border-[#0033FF] focus:bg-white transition-all font-medium" placeholder="jane@enterprise.com" />
                  </div>

                  <div className="space-y-4">
                    <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Service Interest</label>
                    <select className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 text-gray-900 text-lg focus:outline-none focus:border-[#0033FF] focus:bg-white transition-all font-medium appearance-none cursor-pointer">
                      <option>TZone Platform Demonstration</option>
                      <option>Enterprise Architecture Consultation</option>
                      <option>Cloud Migration & Governance</option>
                      <option>Custom ERP Development</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-gray-400 text-[10px] font-black uppercase tracking-[0.3em]">Inquiry Overview</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 rounded-lg px-6 py-4 text-gray-900 text-lg focus:outline-none focus:border-[#0033FF] focus:bg-white transition-all font-medium resize-none" placeholder="Briefly describe your requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#0033FF] hover:bg-black text-white font-bold py-6 rounded-md flex items-center justify-center gap-4 transition-all duration-300 text-sm uppercase tracking-widest shadow-lg shadow-blue-100">
                    Send Inquiry <Send size={20} />
                  </button>
                  
                  <div className="flex items-center justify-center gap-3 py-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Secure 256-bit Encrypted Connection</p>
                  </div>
                </form>
              ) : (
                <div className="text-center py-24 flex flex-col items-center justify-center">
                  <motion.div 
                    initial={{ scale: 0 }} animate={{ scale: 1 }}
                    className="w-28 h-28 bg-blue-50 text-[#0033FF] rounded-full flex items-center justify-center mb-10 border border-blue-100 shadow-lg"
                  >
                    <CheckCircle2 size={48} />
                  </motion.div>
                  <h3 className="text-gray-900 text-4xl font-black mb-6 tracking-tight leading-tight">Inquiry <br />Received.</h3>
                  <p className="text-gray-600 text-lg mb-16 font-medium max-w-xs">An engineering partner will review your brief and follow up within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#0033FF] font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-[11px]">
                    Return to Form <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
