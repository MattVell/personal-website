"use client";

import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, ArrowUpRight, Sparkles, User, FolderKanban, Wrench, Cpu, Mail } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "Sobre", href: "#sobre", id: "sobre", icon: User },
    { name: "Projetos", href: "#projetos", id: "projetos", icon: FolderKanban },
    { name: "Serviços", href: "#servicos", id: "servicos", icon: Wrench },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack", icon: Cpu },
    { name: "Contato", href: "#contato", id: "contato", icon: Mail, hasPulseDot: true },
  ];

  // WhatsApp quick contact link
  const whatsappMessage = encodeURIComponent(
    "Olá Mateus! Vi seu portfólio online e gostaria de conversar sobre um novo projeto."
  );
  const whatsappUrl = `https://wa.me/5541992666567?text=${whatsappMessage}`;

  // Track window scroll state for dynamic header transformation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for Scrollspy active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-8 pointer-events-none transition-all duration-300">
        <nav
          className={`max-w-6xl mx-auto pointer-events-auto rounded-2xl flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-[#060709]/95 backdrop-blur-2xl border border-green-500/30 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.95),0_0_20px_rgba(34,197,94,0.15)] py-2.5 px-6"
              : "bg-[#0d1117]/75 backdrop-blur-xl border border-white/10 shadow-2xl py-3 px-6"
          }`}
        >
          {/* Brand / Logo */}
          <a
            href="#"
            className="group flex flex-col justify-center transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709] rounded-lg p-0.5"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-green-400 transition-colors">
                Mateus Veloso
              </span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-widest font-mono uppercase flex items-center gap-1.5 group-hover:text-green-400/90 transition-colors">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500 shadow-[0_0_6px_#22c55e]"></span>
              </span>
              <span>UI Specialist</span>
            </span>
          </a>

          {/* Desktop Navigation Items with Scrollspy Indicator */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`group text-sm font-medium transition-all duration-300 flex items-center gap-2 relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709] rounded-lg px-2 ${
                    isActive
                      ? "text-green-400 font-semibold drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasPulseDot && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_#22c55e]"></span>
                    </span>
                  )}

                  {/* Animated Active / Hover Underline */}
                  {isActive ? (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 rounded-full shadow-[0_0_10px_#22c55e] animate-in fade-in duration-300" />
                  ) : (
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-500/70 transition-all duration-300 group-hover:w-full rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Cluster: High-Conversion WhatsApp CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-[#030712] font-bold text-xs sm:text-sm shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709]"
            >
              <MessageSquare className="w-4 h-4 fill-[#030712]/20" />
              <span>Falar no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-200 hover:text-green-400 p-2 rounded-xl bg-white/5 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060709]"
            aria-label="Alternar Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-green-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden animate-in fade-in duration-200"
        />
      )}

      {/* Mobile Navigation Full-Featured Drawer */}
      {mobileMenuOpen && (
        <div className="fixed top-20 left-4 right-4 z-50 md:hidden bg-[#0c1017]/95 backdrop-blur-2xl border border-green-500/30 rounded-3xl p-6 space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-in fade-in slide-in-from-top-4 duration-300">
          
          {/* Drawer Header Status */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-green-400">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-green-400" />
              <span>Navegação do Portfólio</span>
            </div>
            <span className="text-[11px] text-gray-400 font-mono">
              Mateus Veloso
            </span>
          </div>

          {/* Nav Links List */}
          <div className="space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 ${
                    isActive
                      ? "bg-green-500/15 border border-green-500/40 text-green-400 font-semibold"
                      : "text-gray-300 hover:text-white hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={
                        isActive
                          ? "p-2 rounded-xl bg-emerald-500/20 text-emerald-400"
                          : "p-2 rounded-xl bg-white/5 text-slate-400"
                      }
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-base font-medium">{link.name}</span>
                  </div>

                  {link.hasPulseDot ? (
                    <span className="pulse-dot" />
                  ) : isActive ? (
                    <span className="text-xs font-mono text-green-400 bg-green-950 px-2 py-0.5 rounded-full border border-green-500/30">
                      ativo
                    </span>
                  ) : null}
                </a>
              );
            })}
          </div>

          {/* Drawer Action Button */}
          <div className="pt-2 border-t border-white/10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="neon-btn-primary w-full justify-center py-3.5 text-sm font-bold shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp Agora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      )}
    </>
  );
}
