"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Projetos", href: "#projetos" },
    { name: "Tech Stack", href: "#tech-stack" },
    { name: "Contato", href: "#contato", hasPulseDot: true },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4 sm:px-8">
      <nav className="max-w-5xl mx-auto glass-header rounded-2xl px-6 py-3 flex items-center justify-between transition-all duration-300">
        {/* Brand / Logo */}
        <a href="#" className="group flex flex-col justify-center">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-green-400 transition-colors">
              Mateus<span className="text-green-500">.</span>Veloso
            </span>
          </div>
          <span className="text-[11px] text-gray-400 tracking-wider font-light uppercase">
            UI Specialist
          </span>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-2 relative group py-1"
            >
              {link.name}
              {link.hasPulseDot && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
              )}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1.5 focus:outline-none"
          aria-label="Alternar Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-5xl mx-auto glass-header rounded-xl p-5 space-y-4 shadow-2xl border border-white/10 animate-in fade-in slide-in-from-top-3 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-green-400 py-1 transition-colors flex items-center justify-between"
            >
              <span>{link.name}</span>
              {link.hasPulseDot && <span className="pulse-dot" />}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
