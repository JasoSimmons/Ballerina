import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ContractAddress } from '@/components/ContractAddress';
import { Features } from '@/components/Features';
import { HowToBuy } from '@/components/HowToBuy';
import { Roadmap } from '@/components/Roadmap';
import { ViralVideos } from '@/components/ViralVideos';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8F0] overflow-x-hidden selection:bg-[#FFD1DC] selection:text-[#4A3B32]">
      <Navbar />
      <Hero />
      <ContractAddress />
      <Features />
      <HowToBuy />
      <Roadmap />
      <ViralVideos />
      <Footer />
    </main>
  );
}
