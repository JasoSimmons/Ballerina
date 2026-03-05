'use client';

import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    status: "Active ✓",
    title: "The First Sip ☕",
    items: ["Social Media Presence", "Community Building", "Token Launch on Pump.fun"],
    color: "bg-[#D4A373]",
    textColor: "text-white"
  },
  {
    phase: "Phase 2",
    status: "Upcoming",
    title: "The Pirouette 🩰",
    items: ["Partnerships & Collabs", "Viral TikTok Campaign", "1,000 Holders"],
    color: "bg-[#FFB7C5]",
    textColor: "text-[#4A3B32]"
  },
  {
    phase: "Phase 3",
    status: "Moon",
    title: "The Grand Jeté 🌙",
    items: ["Ballerina Takeover", "Merch Store", "CEX Listings"],
    color: "bg-[#4A3B32]",
    textColor: "text-[#FFF8F0]"
  }
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-20 bg-[#FFF8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3B32] mb-4">
            Roadmap 🗺️
          </h2>
          <p className="text-xl text-[#6B5A4E] max-w-2xl mx-auto">
            Our graceful journey to the moon, one pirouette at a time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 ${phase.color} rounded-2xl transform rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-300`} />
              <div className="glass-card bg-white rounded-2xl p-8 border border-[#FFD1DC] relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${phase.color} ${phase.textColor}`}>
                    {phase.phase}
                  </span>
                  <span className="text-sm font-medium text-[#D4A373]">
                    {phase.status}
                  </span>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-[#4A3B32] mb-6">
                  {phase.title}
                </h3>
                
                <ul className="space-y-4 flex-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-center text-[#6B5A4E]">
                      <span className="w-2 h-2 rounded-full bg-[#FFB7C5] mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
