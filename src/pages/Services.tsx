import React from 'react';
import { motion } from 'motion/react';
import { Layers, Cloud, ShieldCheck, Database, Code, LineChart, ChevronRight } from 'lucide-react';

export const Services = () => {
  const serviceCategories = [
    {
      title: "Platform Engineering",
      icon: <Layers className="text-[#0033FF]" size={32} />,
      items: [
        "Custom ERP Architecture",
        "Microservices Implementation",
        "Legacy System Modernization",
        "API Ecosystem Design"
      ],
      desc: "We build the core systems that drive your business logic, ensuring they are robust, testable, and maintainable."
    },
    {
      title: "Cloud Infrastructure",
      icon: <Cloud className="text-[#0033FF]" size={32} />,
      items: [
        "Azure & AWS Architecture",
        "Cost Optimization & Governance",
        "High Availability Design",
        "Disaster Recovery (DR) Strategy"
      ],
      desc: "Secure, scalable cloud foundations architected for mission-critical reliability and peak performance."
    },
    {
      title: "Enterprise Security",
      icon: <ShieldCheck className="text-[#0033FF]" size={32} />,
      items: [
        "Internal Audit Readiness",
        "Zero-Trust Identity (RBAC)",
        "End-to-End Encryption",
        "Continuous Security Monitoring"
      ],
      desc: "Protecting your corporate data with industry-leading security frameworks and rigorous internal engineering standards."
    }
  ];

  return (
    <div className="bg-transparent pt-48 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-32">
          <h2 className="text-[#0033FF] font-bold text-xs uppercase tracking-[0.4em] mb-4">Core Capabilities</h2>
          <h1 className="text-gray-900 text-5xl md:text-7xl font-black mb-10 tracking-tight">Enterprise Solutions.</h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Specialized technical services designed for organizations that demand high-performance software and ironclad security.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-gray-50 border border-gray-100 rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row gap-16 items-start hover:bg-white hover:border-blue-100 transition-all duration-500 hover:shadow-2xl"
            >
              <div className="lg:w-1/3">
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-[#0033FF] group-hover:text-white transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-gray-900 text-3xl md:text-4xl font-black mb-6 tracking-tight uppercase">{category.title}</h3>
                <p className="text-gray-600 text-lg font-medium leading-relaxed">{category.desc}</p>
              </div>
              
              <div className="lg:w-2/3 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 flex items-center justify-between group/item hover:border-blue-200 transition-all">
                    <span className="text-gray-900 font-bold text-lg">{item}</span>
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0033FF] flex items-center justify-center group-hover/item:bg-[#0033FF] group-hover/item:text-white transition-all">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 bg-blue-50 border border-blue-100 rounded-[3rem] p-12 md:p-24 flex flex-col lg:flex-row items-center gap-16">
           <div className="lg:w-1/2">
              <h2 className="text-gray-900 text-4xl md:text-5xl font-black mb-8 tracking-tight">Need a Custom Technical Strategy?</h2>
              <p className="text-[#0033FF] text-xl font-medium leading-relaxed mb-10">
                Our senior architects collaborate with your leadership to define technical roadmaps that align with your long-term business goals.
              </p>
              <button className="bg-[#0033FF] hover:bg-black text-white px-12 py-5 rounded-md font-bold text-sm uppercase tracking-widest transition-all shadow-lg">
                Book Architectural Review
              </button>
           </div>
           <div className="lg:w-1/2 grid grid-cols-2 gap-8">
              {[
                { label: "Uptime", val: "99.9%" },
                { label: "Encryption", val: "AES-256" },
                { label: "Delivery", val: "Agile" },
                { label: "Cloud", val: "Azure" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-white rounded-2xl border border-blue-100">
                   <p className="text-gray-900 text-3xl font-black mb-1 tracking-tight">{stat.val}</p>
                   <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};
