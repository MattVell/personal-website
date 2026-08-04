"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-start pt-32 pb-20 px-6 sm:px-12 lg:px-20 z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto md:mx-0 w-full space-y-8">
        
        {/* Sub-badge / Status */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-950/40 border border-green-500/30 text-green-400 text-xs font-medium backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Disponível para novos projetos & clientes</span>
        </div>

        {/* Main Headline with exact styling from reference photo */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15]">
          Criando experiências digitais com código limpo &amp;{" "}
          <span className="inline-block mt-2 sm:mt-0 my-1">
            <span className="neon-pill-badge text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              design impecável
            </span>
          </span>
        </h1>

        {/* Subtitle description matching reference photo */}
        <p className="text-gray-300 text-lg sm:text-xl font-normal max-w-2xl leading-relaxed">
          Olá! Sou Mateus Veloso, desenvolvedor especializado na criação de aplicações web modernas, interfaces responsivas de alto nível e sistemas interativos.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a href="#projetos" className="neon-btn-primary group">
            <span>Explorar Projetos</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contato"
            className="px-7 py-3.5 rounded-full border border-gray-700 hover:border-gray-500 bg-gray-900/40 hover:bg-gray-800/60 text-gray-200 hover:text-white font-medium text-base backdrop-blur-md transition-all duration-300"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Key stats banner */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-2xl">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white flex items-center">
              100<span className="text-green-500">%</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">
              Código Limpo &amp; SEO
            </p>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-white flex items-center">
              UX/UI
            </div>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">
              Design Responsivo Premium
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold text-white flex items-center">
              Fast<span className="text-green-500">.</span>
            </div>
            <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider font-medium">
              Performance Maximizada
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
