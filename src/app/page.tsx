"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import KnowledgePartnersSection from "@/components/KnowledgePartnersSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <InfrastructureSection />
        <KnowledgePartnersSection />
      </main>
      <Footer />
    </div>
  );
}

