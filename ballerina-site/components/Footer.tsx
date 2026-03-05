'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { PUMP_FUN_URL } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-[#4A3B32] text-[#FFF8F0] py-12 border-t border-[#FFD1DC]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#FFB7C5] mb-4">
              $Ballerina Cappuccina
            </h3>
            <p className="text-[#FFF8F0]/80 mb-6">
              The most graceful meme token on Solana. Part coffee, part ballerina, 100% magical.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {/* Social Icons would go here if we had SVGs/Images */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-[#D4A373] mb-4 uppercase tracking-wider">
              Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors">
                  Why Ballerina?
                </Link>
              </li>
              <li>
                <Link href="#how-to-buy" className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors">
                  How to Buy
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Join the Dance */}
          <div>
            <h4 className="text-lg font-bold text-[#FFB7C5] mb-4 uppercase tracking-wider">
              Join the Dance
            </h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="https://x.com/i/communities/2028676380108747026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <span>𝕏</span> Twitter (X)
              </a>
              <a 
                href="https://www.tiktok.com/search?q=triple%20t&t=1771921358673" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <span>♪</span> TikTok
              </a>
              <a 
                href={PUMP_FUN_URL}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#FFF8F0]/80 hover:text-[#FFB7C5] transition-colors flex items-center justify-center md:justify-start gap-2"
              >
                <span>🚀</span> Pump.fun
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#FFF8F0]/10 mt-12 pt-8 text-center text-[#FFF8F0]/60 text-sm">
          <p>© {new Date().getFullYear()} $Ballerina Cappuccina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
