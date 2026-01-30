import React from 'react';
import { motion } from 'motion/react';
import { Plane, ShieldCheck, Database, LayoutDashboard, Receipt, ExternalLink, ArrowRight, ChevronRight } from 'lucide-react';
import employeeDashboard from "figma:asset/c347ddeaa54669efa85612c49469058f183e54b4.png";
import financeDashboard from "figma:asset/fb1a85dad9699912a1c30c2efec0e1d6000763ea.png";
import managerDashboard from "figma:asset/1200256df894df56680e7121773da093b7e0b59a.png";

const DashboardPreview = ({ title, img, role, reverse }: { title: string, img: string, role: string, reverse?: boolean }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-32`}>
    <div className="lg:w-1/2">
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-blue-100 text-[#0033FF] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{role} Portal</span>
      </div>
      <h4 className="text-gray-900 text-3xl md:text-4xl font-black mb-6 tracking-tight">{title}</h4>
      <p className="text-gray-600 text-lg leading-relaxed mb-8">
        Streamlined workflows designed specifically for the needs of {role.toLowerCase()}s, ensuring data accuracy and rapid processing.
      </p>
      <ul className="space-y-4 mb-8">
        {["Intuitive data entry", "Real-time status tracking", "Automated compliance checks"].map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
            <div className="w-1.5 h-1.5 bg-[#0033FF] rounded-full"></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className="lg:w-1/2 w-full">
      <div className="bg-gray-100 p-2 rounded-[2rem] border border-gray-200 shadow-xl group overflow-hidden">
        <img src={img} alt={title} className="w-full h-auto rounded-[1.8rem] transition-transform duration-700 group-hover:scale-[1.02]" />
      </div>
    </div>
  </div>
);

export const TZone = () => {
  return (
    <div className="bg-transparent pt-40 min-h-screen relative overflow-hidden">
      <section className="py-20 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Hero Tease */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-60">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#0033FF] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <Plane size={32} />
                </div>
                <div>
                  <h1 className="text-gray-900 text-3xl font-black tracking-tight mb-0 uppercase leading-none">TZone T&E</h1>
                  <p className="text-[#0033FF] font-bold uppercase tracking-[0.4em] text-[10px] mt-1">Enterprise Platform</p>
                </div>
              </div>
              <h2 className="text-gray-900 text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
                Travel & Expense <br />
                <span className="text-[#0033FF]">Simplified.</span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12 max-w-lg">
                The corporate standard for managing global travel and expense workflows. Built for clarity, control, and absolute policy compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="https://tzone.techzala.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0033FF] hover:bg-black text-white px-10 py-5 rounded-md font-bold transition-all duration-300 flex items-center justify-center gap-4 text-sm uppercase tracking-widest shadow-lg"
                >
                  Enter Platform <ExternalLink size={18} />
                </a>
                <button className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-10 py-5 rounded-md font-bold transition-all duration-300 text-sm uppercase tracking-widest">
                   Request Private Demo
                </button>
              </div>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.97 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               className="relative"
            >
               <div className="bg-gray-50 rounded-[3rem] p-4 border border-gray-100 shadow-2xl relative z-10">
                  <div className="rounded-[2.5rem] overflow-hidden border border-gray-200">
                    <img 
                      src={employeeDashboard} 
                      alt="TZone Dashboard" 
                      className="w-full h-auto"
                    />
                  </div>
               </div>
            </motion.div>
          </div>

          {/* Role-Based Experience */}
          <div className="mb-60">
            <div className="text-center max-w-3xl mx-auto mb-32">
              <h3 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Unified Governance</h3>
              <h2 className="text-gray-900 text-4xl md:text-6xl font-black tracking-tight mb-8 leading-tight">Interfaces Designed for Every Stakeholder.</h2>
              <p className="text-gray-600 text-xl font-medium leading-relaxed">
                TZone provides specialized tools for employees, managers, and finance teams to ensure seamless data flow and accountability.
              </p>
            </div>
            
            <div className="space-y-48">
              <DashboardPreview 
                title="Employee Experience" 
                img={employeeDashboard} 
                role="Employee" 
              />
              <DashboardPreview 
                title="Financial Command" 
                img={financeDashboard} 
                role="Finance" 
                reverse
              />
              <DashboardPreview 
                title="Manager Oversight" 
                img={managerDashboard} 
                role="Manager" 
              />
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-60">
            {[
              { icon: ShieldCheck, title: "Policy Integrity", desc: "Automated checks that prevent non-compliant spending before submission." },
              { icon: Receipt, title: "Rapid Processing", desc: "Verification workflows that reduce manual finance reviews by up to 80%." },
              { icon: LayoutDashboard, title: "Strategic Insights", desc: "Real-time dashboards for global travel trends and cost management." },
              { icon: Database, title: "Audit Ready", desc: "Permanent, immutable records for every transaction and approval." }
            ].map((feat, i) => (
              <div key={i} className="p-10 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-[#0033FF] flex items-center justify-center mb-8 group-hover:bg-[#0033FF] group-hover:text-white transition-all">
                  <feat.icon size={24} />
                </div>
                <h3 className="text-gray-900 text-xl font-bold mb-4 tracking-tight uppercase">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gray-900 rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
             <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #0033FF 0%, transparent 70%)' }}></div>
             <h2 className="text-white text-5xl md:text-7xl font-black mb-12 tracking-tight relative z-10 leading-tight">Ready to Modernize <br />Your Travel ERP?</h2>
             <p className="text-gray-400 text-xl mb-16 max-w-2xl mx-auto font-medium relative z-10">
               Direct access to your corporate TZone environment. Securely managed and hosted by TechZala LLC.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                <a 
                  href="https://tzone.techzala.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-blue-600 hover:bg-white text-white hover:text-black px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3"
                >
                   Enter tzone.techzala.com <ArrowRight size={20} />
                </a>
                <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all">
                   Technical Documentation
                </button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
