import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, ArrowRight, Code, Server, Cpu, Globe } from 'lucide-react';
import tzoneManager from "figma:asset/1200256df894df56680e7121773da093b7e0b59a.png";

export const About = ({ onNavigate }: { onNavigate: (p: string) => void }) => {
  return (
    <div className="bg-transparent pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-6">The TechZala Story</h2>
            <h1 className="text-gray-900 text-5xl md:text-8xl font-black mb-10 tracking-tight leading-tight">
              Engineering <br />
              <span className="text-[#0033FF]">Excellence.</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium">
              TechZala LLC is a specialized technology firm focused on architecting mission-critical software platforms and secure cloud infrastructure for global organizations.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gray-100 rounded-[3rem] p-3 shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?q=80&w=1200" 
                alt="Software Engineering" 
                className="rounded-[2.5rem] w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            {/* Tech Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block">
               <div className="flex gap-8">
                  <div>
                    <p className="text-3xl font-black text-gray-900">10M+</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Lines of Code</p>
                  </div>
                  <div className="w-[1px] h-12 bg-gray-100"></div>
                  <div>
                    <p className="text-3xl font-black text-gray-900">99.9%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Architecture Uptime</p>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-40">
           <div className="bg-gray-50 p-16 rounded-[3rem] border border-gray-100">
              <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Mission</h3>
              <p className="text-gray-900 text-3xl font-black tracking-tight leading-tight">To build secure, scalable software foundations that empower organizations to lead with absolute confidence.</p>
           </div>
           <div className="bg-gray-900 p-16 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0033FF]/20 blur-3xl rounded-full"></div>
              <h3 className="text-blue-400 font-bold text-[10px] uppercase tracking-[0.4em] mb-8">Vision</h3>
              <p className="text-white text-3xl font-black tracking-tight leading-tight">To become the world's most trusted partner for enterprise software engineering and cloud governance.</p>
           </div>
        </div>

        {/* Development Philosophy */}
        <div className="mb-40">
           <div className="text-center mb-24">
              <h2 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Our Method</h2>
              <h3 className="text-gray-900 text-4xl md:text-6xl font-black tracking-tight">Software Engineering, Elevated.</h3>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: <Code />, title: "Clean Code", desc: "Maintainable, testable codebases that eliminate technical debt." },
                { icon: <Server />, title: "Distributed Systems", desc: "High-concurrency architectures built for massive scale." },
                { icon: <Cpu />, title: "Product Mindset", desc: "We think as owners, building for real-world production reliability." },
                { icon: <Globe />, title: "Global Cloud", desc: "Multi-region Azure/AWS deployments with low-latency delivery." }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0033FF] mx-auto mb-8 group-hover:bg-[#0033FF] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-900 font-bold text-lg mb-4 uppercase tracking-tight">{item.title}</h4>
                  <p className="text-gray-600 font-medium text-sm px-4">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Flagship Product Tease */}
        <div className="p-12 md:p-24 rounded-[4rem] border border-gray-100 bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h3 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Flagship Platform</h3>
            <h2 className="text-gray-900 text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">TZone T&E</h2>
            <p className="text-gray-600 text-xl mb-12 font-medium leading-relaxed">
              TZone represents the TechZala engineering standard: a governance-first architecture designed for global enterprise scale.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="https://tzone.techzala.com" target="_blank" rel="noopener noreferrer" className="bg-[#0033FF] hover:bg-black text-white px-10 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg flex items-center gap-3">Visit TZone <ArrowRight size={20} /></a>
              <button onClick={() => onNavigate('tzone')} className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-200 px-10 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all">Detailed Specs</button>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-2xl relative group">
            <img src={tzoneManager} alt="TZone Manager Dashboard" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>
    </div>
  );
};
