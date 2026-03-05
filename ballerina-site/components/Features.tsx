'use client';

import { motion } from 'framer-motion';
import { Coffee, Moon, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Coffee,
    title: "Born from Coffee",
    description: "She dances on the froth of your morning latte, a whimsical spirit of caffeine and grace.",
    color: "bg-[#D4A373]",
    textColor: "text-white"
  },
  {
    icon: Moon,
    title: "Ballet of the Moon",
    description: "Under starlit skies and glowing lanterns, Ballerina Cappuccina pirouettes through the blockchain.",
    color: "bg-[#4A3B32]",
    textColor: "text-[#FFF8F0]"
  },
  {
    icon: Users,
    title: "Community Magic",
    description: "A growing family of dreamers, memers, and cappuccino lovers building something beautiful together.",
    color: "bg-[#FFB7C5]",
    textColor: "text-[#4A3B32]"
  },
  {
    icon: Zap,
    title: "Solana Powered",
    description: "Lightning-fast transactions on Solana. Buy, hold, and dance your way to the moon.",
    color: "bg-[#9945FF]",
    textColor: "text-white"
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-[#FFF8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3B32] mb-4">
            Why Ballerina Cappuccina? ☕
          </h2>
          <p className="text-xl text-[#6B5A4E] max-w-2xl mx-auto">
            More than just a meme, it's a movement of grace and caffeine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-6 border border-[#FFD1DC] hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-full ${feature.color} flex items-center justify-center mb-6 shadow-md`}>
                <feature.icon className={`w-7 h-7 ${feature.textColor}`} />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#4A3B32] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6B5A4E] leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
