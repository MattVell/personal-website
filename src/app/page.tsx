import PlexusBackground from "@/components/PlexusBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#060709] text-gray-100 selection:bg-green-500/30 selection:text-white">
      {/* Dynamic Interactive Plexus Node & 3D Cyber Background */}
      <PlexusBackground />

      {/* Floating Glassmorphic Header Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <AboutSection />

      {/* Projects Repertory Section (Featuring Amanda Modas) */}
      <ProjectsSection />

      {/* Services & Solutions Section */}
      <ServicesSection />

      {/* Tech Stack Section */}
      <TechStackSection />

      {/* Contact & Footer Section */}
      <ContactSection />
    </main>
  );
}
