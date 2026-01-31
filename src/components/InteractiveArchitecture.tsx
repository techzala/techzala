import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Database, Shield, Globe, Cpu, ArrowRight, Server, Lock, Activity } from 'lucide-react';

const ArchitectureNode = ({ 
  icon: Icon, 
  title, 
  status, 
  isActive, 
  onClick, 
  details 
}: { 
  icon: any, 
  title: string, 
  status: string, 
  isActive: boolean, 
  onClick: () => void,
  details: string[]
}) => (
  <div 
    onClick={onClick}
    className={`cursor-pointer transition-all duration-500 p-6 rounded-2xl border-2 relative group ${
      isActive 
        ? 'bg-[#0033FF] border-[#0033FF] shadow-2xl shadow-blue-200' 
        : 'bg-white/80 backdrop-blur-md border-gray-100 hover:border-blue-200'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
        isActive ? 'bg-white text-[#0033FF]' : 'bg-blue-50 text-[#0033FF]'
      }`}>
        <Icon size={24} />
      </div>
      <div>
        <h4 className={`font-black uppercase tracking-tight text-sm ${isActive ? 'text-white' : 'text-gray-900'}`}>{title}</h4>
        <p className={`text-[10px] font-bold uppercase tracking-widest ${isActive ? 'text-blue-100' : 'text-blue-500'}`}>{status}</p>
      </div>
    </div>

    {isActive && (
      <motion.div 
        layoutId="node-arrow"
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 hidden lg:block"
      >
        <div className="w-8 h-8 bg-[#0033FF] rounded-full flex items-center justify-center shadow-lg">
          <ArrowRight size={16} className="text-white" />
        </div>
      </motion.div>
    )}
  </div>
);

export const InteractiveArchitecture = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      icon: Shield,
      title: "Edge Security",
      status: "Enterprise Hardened",
      details: [
        "Cloudflare WAF Integration",
        "DDoS Mitigation Engine",
        "256-bit TLS Encryption",
        "Zero-Trust Access Control"
      ],
      flow: "incoming-traffic"
    },
    {
      icon: Cpu,
      title: "App Engine",
      status: "Elastic Scale",
      details: [
        "Multi-region Deployment",
        "Kubernetes Orchestration",
        "Auto-scaling Workloads",
        "Circuit Breaker Logic"
      ],
      flow: "processing"
    },
    {
      icon: Database,
      title: "Data Vault",
      status: "Encrypted at Rest",
      details: [
        "Point-in-time Recovery",
        "Geo-redundant Storage",
        "Encrypted Backups",
        "SQL Elastic Pools"
      ],
      flow: "persistence"
    },
    {
      icon: Globe,
      title: "Global CDN",
      status: "Edge Cached",
      details: [
        "Static Content Delivery",
        "Dynamic Path Optimization",
        "Edge Compute (Workers)",
        "Global DNS Propagation"
      ],
      flow: "delivery"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-[#0033FF] font-black text-xs uppercase tracking-[0.4em] mb-4">Live Infrastructure</h2>
          <h3 className="text-gray-900 text-4xl md:text-6xl font-black mb-8 tracking-tight">Interactive Architecture</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
            Explore how TechZala handles your mission-critical data. Click a node to inspect our enterprise-grade flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Nodes List */}
          <div className="lg:col-span-5 space-y-4">
            {nodes.map((node, i) => (
              <ArchitectureNode 
                key={i}
                {...node}
                isActive={activeNode === i}
                onClick={() => setActiveNode(i)}
              />
            ))}
          </div>

          {/* Details & Visualization */}
          <div className="lg:col-span-7">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100 p-8 md:p-12 shadow-2xl relative min-h-[500px] flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 animate-pulse">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-black text-lg uppercase tracking-tight">{nodes[activeNode].title} Diagnostics</h4>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Active System State: NOMINAL</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-auto">
                {nodes[activeNode].details.map((detail, i) => (
                  <motion.div 
                    key={detail}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#0033FF]"></div>
                    <span className="text-sm font-bold text-gray-700 uppercase tracking-tight">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Live Flow Visualization */}
              <div className="mt-12 pt-12 border-t border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-6">Real-time Data Stream</p>
                <div className="flex items-center gap-4 h-12 bg-gray-950 rounded-lg px-4 overflow-hidden relative">
                  <div className="flex gap-8 whitespace-nowrap animate-infinite-scroll">
                    {[1,2,3,4,5,6].map(i => (
                      <div key={i} className="flex items-center gap-3 text-[10px] font-mono text-green-400">
                        <span className="text-green-800">[{new Date().toLocaleTimeString()}]</span>
                        <span className="opacity-70">PACKET_ID_{Math.random().toString(36).substring(7).toUpperCase()}</span>
                        <span className="text-blue-400">AUTH_PASS</span>
                        <span className="text-white/20">|</span>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Decorative Infrastructure Graphics */}
              <div className="absolute bottom-4 right-8 opacity-5 pointer-events-none scale-150 origin-bottom-right">
                <Server size={200} className="text-[#0033FF]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
