'use client';

import { useState } from 'react';
import { Button } from './ui/Button';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function ContractAddress() {
  const [copied, setCopied] = useState(false);
  const address = "8wdL6Htn346sjpmosDm3gCJXkDbWBbeCc3LmYRNApump";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 bg-[#FFFDF5]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-2xl border border-[#FFD1DC]"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#4A3B32] mb-6">
            Contract Address 🩰
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 bg-[#FFF8F0] p-4 rounded-xl border border-[#FFB7C5]/30 shadow-inner">
            <code className="text-[#6B5A4E] font-mono text-sm md:text-base break-all">
              {address}
            </code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-[#D4A373] hover:text-[#C29365] hover:bg-[#FFD1DC]/30 min-w-[100px]"
            >
              {copied ? (
                <>
                  <Check size={16} className="mr-2" /> Copied!
                </>
              ) : (
                <>
                  <Copy size={16} className="mr-2" /> Copy
                </>
              )}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
