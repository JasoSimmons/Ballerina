'use client';

import { motion } from 'framer-motion';
import { Wallet, Coins, Search, ArrowRightLeft } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    title: "Get a Solana Wallet",
    description: "Download Phantom or Solflare wallet from your app store or browser extension. Set it up and secure your seed phrase.",
    emoji: "👛"
  },
  {
    icon: Coins,
    title: "Buy SOL",
    description: "Purchase SOL from any major exchange like Coinbase, Binance, or Kraken. Send it to your Solana wallet address.",
    emoji: "💰"
  },
  {
    icon: Search,
    title: "Go to Pump.fun",
    description: "Visit pump.fun and connect your wallet. Search for Ballerina Cappuccina or paste the contract address.",
    emoji: "🔗"
  },
  {
    icon: ArrowRightLeft,
    title: "Swap SOL for $BALLERINA",
    description: "Enter the amount of SOL you want to swap, confirm the transaction, and welcome to the dance floor!",
    emoji: "🩰"
  }
];

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="py-20 bg-[#FFFDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3B32] mb-4">
            How to Buy 🩰
          </h2>
          <p className="text-xl text-[#6B5A4E] max-w-2xl mx-auto">
            New to crypto? No worries — follow these simple steps to join the dance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-[#FFD1DC] -z-10 transform -translate-y-1/2 rounded-full opacity-50" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-[#FFB7C5]/30 shadow-lg relative z-10 hover:shadow-xl transition-all"
            >
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#FFB7C5] rounded-full flex items-center justify-center text-[#4A3B32] font-bold text-lg shadow-md border-4 border-[#FFFDF5]">
                {index + 1}
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#FFF8F0] p-3 rounded-xl">
                  <span className="text-3xl">{step.emoji}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#4A3B32] mb-2 font-serif">
                    {step.title}
                  </h3>
                  <p className="text-[#6B5A4E]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
