'use client';

import Link from 'next/link';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { PUMP_FUN_URL } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/80 backdrop-blur-md border-b border-[#FFD1DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-[#4A3B32]">
              $Ballerina 🩰
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#features" className="text-[#4A3B32] hover:text-[#FFB7C5] transition-colors font-medium">
              Why Ballerina?
            </Link>
            <Link href="#how-to-buy" className="text-[#4A3B32] hover:text-[#FFB7C5] transition-colors font-medium">
              How to Buy
            </Link>
            <Link href="#roadmap" className="text-[#4A3B32] hover:text-[#FFB7C5] transition-colors font-medium">
              Roadmap
            </Link>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => window.open(PUMP_FUN_URL, '_blank')}
            >
              Buy on Pump.fun
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#4A3B32] hover:text-[#FFB7C5] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-[#FFF8F0] border-b border-[#FFD1DC]"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4A3B32] hover:text-[#FFB7C5]"
              onClick={() => setIsOpen(false)}
            >
              Why Ballerina?
            </Link>
            <Link 
              href="#how-to-buy" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4A3B32] hover:text-[#FFB7C5]"
              onClick={() => setIsOpen(false)}
            >
              How to Buy
            </Link>
            <Link 
              href="#roadmap" 
              className="block px-3 py-2 rounded-md text-base font-medium text-[#4A3B32] hover:text-[#FFB7C5]"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </Link>
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => {
                  window.open(PUMP_FUN_URL, '_blank');
                  setIsOpen(false);
                }}
              >
                Buy on Pump.fun
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
