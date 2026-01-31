import React from 'react';
import { motion } from 'motion/react';
import { Rocket, Shield, Layers, Layout, Cloud, Handshake, ArrowRight } from 'lucide-react';

export const WhyTechZala = ({ onNavigate }: { onNavigate: (p: string) => void }) => {
  return (
    <div className="bg-transparent pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Value Proposition</h2>
          <h1 className="text-gray-900 text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">Why TechZala</h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Enterprise-grade delivery with a product-first philosophy—built for absolute reliability and long-term scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Rocket size={32} />, title: "Product-first engineering", desc: "We build and operate our own flagship platforms, ensuring every line of code is production-hardened." },
            { icon: <Shield size={32} />, title: "Enterprise Governance", desc: "RBAC, comprehensive audit trails, and security-first defaults for total organizational control." },
            { icon: <Layers size={32} />, title: "Scalable Architecture", desc: "Clear boundaries and clean codebases designed to support growth without the need for expensive rewrites." },
            { icon: <Layout size={32} />, title: "Operational Clarity", desc: "Dashboards and workflows that eliminate decision friction and provide real-time strategic visibility." },
            { icon: <Cloud size={32} />, title: "Cloud-first foundation", desc: "Mission-critical Azure architecture with built-in monitoring, disaster recovery, and cost governance." },
            { icon: <Handshake size={32} />, title: "Strategic Partnership", desc: "We optimize for long-term stability and maintainability, acting as an extension of your technical team." }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-12 rounded-3xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white transition-all duration-500 group"
            >
              <div className="text-[#0033FF] mb-8 transition-transform group-hover:scale-110 duration-300">{item.icon}</div>
              <h3 className="text-gray-900 text-2xl font-bold mb-6 tracking-tight uppercase">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Development Image Section */}
        <div className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1760346546767-95b89356a6bb?q=80&w=1200" 
                alt="Dev Team" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
              />
           </div>
           <div className="p-12">
              <h3 className="text-gray-900 text-4xl font-black mb-8 tracking-tight">We build like <br /><span className="text-[#0033FF]">architects.</span></h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 font-medium">
                Every project at TechZala starts with a rigorous architectural review. We don't just write features; we build systems that stand the test of time and scale.
              </p>
              <div className="space-y-6">
                 {["Continuous Integration / Continuous Deployment", "Automated Security Scanning", "Rigorous Peer Review Process"].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-gray-900 font-bold uppercase tracking-widest text-xs">
                      <div className="w-2 h-2 bg-[#0033FF] rounded-full"></div>
                      {item}
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="mt-40 p-12 md:p-24 rounded-[4rem] bg-gray-900 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0033FF]/10 blur-3xl rounded-full"></div>
          <h2 className="text-white text-4xl md:text-7xl font-black mb-10 tracking-tight leading-tight">Ready for Enterprise-Grade <br />Execution?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Our engineering partners will recommend the optimal architecture to meet your security, scale, and governance requirements.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button onClick={() => onNavigate('contact')} className="bg-[#0033FF] hover:bg-white text-white hover:text-black px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg">Talk to an Expert</button>
            <button onClick={() => onNavigate('services')} className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all">Explore Capabilities</button>
          </div>
        </div>
      </div>
    </div>
  );
};
