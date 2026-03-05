'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-[#FFB7C5] text-[#4A3B32] hover:bg-[#FFC4D0] shadow-md border-2 border-[#FFB7C5]",
      secondary: "bg-[#D4A373] text-white hover:bg-[#C29365] shadow-md border-2 border-[#D4A373]",
      outline: "border-2 border-[#4A3B32] text-[#4A3B32] hover:bg-[#4A3B32] hover:text-[#FFF8F0]",
      ghost: "text-[#4A3B32] hover:bg-[#FFD1DC]/20",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-base",
      lg: "h-14 px-8 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...(props as HTMLMotionProps<"button">)}
      >
        {props.children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
