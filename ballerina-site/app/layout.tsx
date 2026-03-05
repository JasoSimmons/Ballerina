import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "$Ballerina Cappuccina | Dance. Sip. Moon.",
  description: "The most graceful meme token on Solana. Part coffee, part ballerina, 100% magical.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-[#FFF8F0] text-[#4A3B32] selection:bg-[#FFD1DC] selection:text-[#4A3B32]`}
      >
        {children}
      </body>
    </html>
  );
}
