"use client";

import { ArrowRight, Zap, Layout, ShieldCheck } from "lucide-react";
import HeroGlobe from "@/components/HeroGlobe";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Olá Mateus! Vi seu portfólio online e gostaria de conversar sobre um novo projeto."
  );
  const whatsappUrl = `https://wa.me/5541992666567?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-16 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Column: Headline, Copy & CTAs */}
        <div className="lg:col-span-7 space-y-7 text-left">

          {/* Sub-badge / Status */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs sm:text-sm font-semibold backdrop-blur-xl shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#22c55e]"></span>
            </span>
            <span>Disponível para novos projetos &amp; clientes</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
            Criando experiências digitais com código{" "}
            <span className="inline-block whitespace-nowrap mt-1 sm:mt-0">
              <span className="text-white">&amp;&nbsp;</span>
              <span className="relative inline-block text-emerald-400">
                design impecável.
                {/* Wavy Underline in dark emerald with symmetrical circular cutouts for 'g' & 'p' */}
                <svg
                  className="absolute -bottom-2.5 sm:-bottom-3 left-0 w-full h-3.5 sm:h-4 text-[#065f46] overflow-visible pointer-events-none"
                  viewBox="0 0 300 16"
                  fill="none"
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <mask id="wavy-underline-g-p-mask">
                      {/* Full white reveal rect with vertical padding */}
                      <rect x="0" y="-5" width="300" height="26" fill="white" />
                      {/* Symmetrical smooth circular cutout for 'g' descender centered at X=77 */}
                      <circle cx="77" cy="1" r="11.8" fill="black" />
                      {/* Symmetrical smooth circular cutout for 'p' descender centered at X=169.5 */}
                      <circle cx="169.5" cy="1" r="11" fill="black" />
                    </mask>
                  </defs>
                  {/* Continuous mathematical sine wave path clipped by smooth circular contour mask */}
                  <path
                    d="M 0 8 C 2.7 3.5, 4.8 3.5, 7.5 8 C 10.2 12.5, 12.3 12.5, 15 8 C 17.7 3.5, 19.8 3.5, 22.5 8 C 25.2 12.5, 27.3 12.5, 30 8 C 32.7 3.5, 34.8 3.5, 37.5 8 C 40.2 12.5, 42.3 12.5, 45 8 C 47.7 3.5, 49.8 3.5, 52.5 8 C 55.2 12.5, 57.3 12.5, 60 8 C 62.7 3.5, 64.8 3.5, 67.5 8 C 70.2 12.5, 72.3 12.5, 75 8 C 77.7 3.5, 79.8 3.5, 82.5 8 C 85.2 12.5, 87.3 12.5, 90 8 C 92.7 3.5, 94.8 3.5, 97.5 8 C 100.2 12.5, 102.3 12.5, 105 8 C 107.7 3.5, 109.8 3.5, 112.5 8 C 115.2 12.5, 117.3 12.5, 120 8 C 122.7 3.5, 124.8 3.5, 127.5 8 C 130.2 12.5, 132.3 12.5, 135 8 C 137.7 3.5, 139.8 3.5, 142.5 8 C 145.2 12.5, 147.3 12.5, 150 8 C 152.7 3.5, 154.8 3.5, 157.5 8 C 160.2 12.5, 162.3 12.5, 165 8 C 167.7 3.5, 169.8 3.5, 172.5 8 C 175.2 12.5, 177.3 12.5, 180 8 C 182.7 3.5, 184.8 3.5, 187.5 8 C 190.2 12.5, 192.3 12.5, 195 8 C 197.7 3.5, 199.8 3.5, 202.5 8 C 205.2 12.5, 207.3 12.5, 210 8 C 212.7 3.5, 214.8 3.5, 217.5 8 C 220.2 12.5, 222.3 12.5, 225 8 C 227.7 3.5, 229.8 3.5, 232.5 8 C 235.2 12.5, 237.3 12.5, 240 8 C 242.7 3.5, 244.8 3.5, 247.5 8 C 250.2 12.5, 252.3 12.5, 255 8 C 257.7 3.5, 259.8 3.5, 262.5 8 C 265.2 12.5, 267.3 12.5, 270 8 C 272.7 3.5, 274.8 3.5, 277.5 8 C 280.2 12.5, 282.3 12.5, 285 8 C 287.7 3.5, 289.8 3.5, 292.5 8 C 295.2 12.5, 297.3 12.5, 300 8"
                    stroke="currentColor"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    mask="url(#wavy-underline-g-p-mask)"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Subtitle description with personal voice */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal max-w-2xl leading-relaxed">
            Olá! Sou <strong className="text-white font-semibold">Mateus Veloso</strong>, desenvolvedor especializado em{" "}
            <span className="text-emerald-400 font-medium">React, Next.js 15 e Design Systems</span>. Transformo ideias em soluções web de alto nível, com navegação fluida e foco total em conversão.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
            <a href="#projetos" className="neon-btn-primary group py-3.5 px-8 text-base justify-center active:scale-[0.99]">
              <span>Explorar Projetos</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-gray-700/80 hover:border-emerald-500/50 bg-[#0d1117]/80 hover:bg-[#161b22] text-gray-200 hover:text-white font-medium text-base backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.15)] flex items-center justify-center gap-2 active:scale-[0.99]"
            >
              <span>Falar no WhatsApp</span>
            </a>
          </div>

          {/* Key stats banner with concrete proof points */}
          <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/10 max-w-2xl">
            <div className="p-3 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
              <div className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Next.js 15</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 font-medium leading-snug">
                App Router &amp; Server Actions
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
              <div className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                <Layout className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>UI/UX</span>
              </div>
              <p className="text-xs text-gray-400 mt-1 font-medium leading-snug">
                Design Systems &amp; Tailwind
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.02] sm:bg-transparent border border-white/5 sm:border-none">
              <div className="text-base sm:text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100<span className="text-emerald-400">%</span></span>
              </div>
              <p className="text-xs text-gray-400 mt-1 font-medium leading-snug">
                SEO &amp; Performance Top
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Interactive 3D Wireframe Globe & Glass Cards */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <HeroGlobe />
        </div>

      </div>
    </section>
  );
}
