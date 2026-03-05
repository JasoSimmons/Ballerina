'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import Image from 'next/image';
import { PUMP_FUN_URL } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#FFD1DC] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
        <div className="absolute top-40 right-10 w-40 h-40 bg-[#D4A373] rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-[#FFB7C5] rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#FFD1DC]/50 text-[#4A3B32] text-sm font-medium tracking-wide border border-[#FFB7C5]">
            Dance. Sip. Moon.
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#4A3B32] mb-6 leading-tight">
            $Ballerina <span className="text-[#D4A373]">Cappuccina</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#6B5A4E] mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            The most graceful meme token on Solana. <br />
            Part coffee, part ballerina, 100% magical. ☕🩰✨
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.open(PUMP_FUN_URL, '_blank')}
            >
              Buy on Pump.fun
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://x.com/crackatrades/status/2028679876614783019?s=20', '_blank')}
            >
              Join Community
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md rounded-[2rem] p-2 bg-gradient-to-br from-[#FFB7C5] via-[#FFD1DC] to-[#D4A373] shadow-2xl">
            <div className="relative overflow-hidden rounded-[1.6rem] border-4 border-white/70">
              <Image
                src="/ballerina-cappuccina.png"
                alt="Ballerina Cappuccina artwork"
                width={1024}
                height={1024}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
