"use client";

import Image from "next/image";
import { ExternalLink, Sparkles, ShoppingBag, ArrowUpRight, Code2 } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function ProjectsSection() {
  const featuredProject = {
    id: "amandamodas",
    title: "Amanda Modas — Vitrine & E-Commerce",
    category: "E-Commerce & Moda Feminina",
    description:
      "Plataforma completa de vitrine interativa e e-commerce de moda feminina. Possui catálogo responsivo de roupas, integração com Instagram via hashtag `#site` para atualização automática do feed e botão instantâneo para pedidos via WhatsApp.",
    tags: ["Next.js", "React", "Tailwind CSS", "Instagram API", "WhatsApp Checkout"],
    githubUrl: "https://github.com/MattVell/amandamodas",
    liveUrl: "https://amandamodasms.com.br",
    features: [
      "Vitrine Interativa em Mosaico",
      "Integração dinâmica com Instagram",
      "Checkout direto via WhatsApp",
      "100% Otimizado para móbiles",
    ],
    previewImage: "/amandamodas-preview.png",
  };

  return (
    <section id="projetos" className="relative py-28 px-6 sm:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Repertório de Projetos
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Projeto em Destaque &amp; Case Real
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
            Aplicação desenvolvida do zero com foco em estética premium, velocidade, SEO e experiência do usuário impecável.
          </p>
        </div>

        {/* Featured Project Banner: Amanda Modas */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-green-500/30 relative overflow-hidden group hover:border-green-400/60 transition-all duration-300 shadow-2xl hover:shadow-green-500/10">
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl -z-10 group-hover:bg-green-500/20 transition-all duration-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left info */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1 rounded-full bg-green-500/20 border border-green-500/40 text-green-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-green-400" /> Case Real de Sucesso
                </span>
                <span className="text-xs text-gray-400 font-mono flex items-center gap-1">
                  <ShoppingBag className="w-3.5 h-3.5 text-green-400/80" />
                  {featuredProject.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight group-hover:text-green-300 transition-colors">
                {featuredProject.title}
              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Highlights Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {featuredProject.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0"></span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-xs text-gray-300 font-mono shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-primary py-3.5 px-7 text-sm font-semibold flex items-center gap-2"
                >
                  <span>Acessar Projeto Ao Vivo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-slate-900/90 border border-white/15 hover:border-green-400 text-white font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-all shadow-lg"
                >
                  <GithubIcon className="w-4 h-4 text-green-400" />
                  <span>Ver Código no GitHub</span>
                </a>
              </div>

            </div>

            {/* Right Visual Card Mockup with Real Site Screenshot */}
            <div className="lg:col-span-5 relative">
              <a
                href={featuredProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/15 bg-slate-950 p-3 sm:p-4 shadow-2xl relative overflow-hidden group/browser hover:border-green-400/60 transition-all duration-300"
              >
                {/* Browser Header Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center space-x-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-900 border border-white/10 text-[11px] font-mono text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    amandamodasms.com.br
                  </div>
                </div>
                
                {/* Real Website Screenshot Container */}
                <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-inner group/img bg-slate-900">
                  <Image
                    src={featuredProject.previewImage}
                    alt="Preview do site Amanda Modas"
                    width={800}
                    height={450}
                    className="w-full h-auto object-cover object-top rounded-xl group-hover/browser:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/browser:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="px-4 py-2 rounded-full bg-green-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover/browser:translate-y-0 transition-transform duration-300">
                      Visitar amandamodasms.com.br <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </div>

        {/* GitHub Callout Banner for Future Projects */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-green-500/30 transition-all duration-300">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-green-500/10 border border-green-500/20 text-green-400 shrink-0">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                Mais Projetos em Construção
                <span className="px-2 py-0.5 text-[10px] font-mono uppercase bg-green-500/10 text-green-400 rounded-md border border-green-500/20">
                  Em Breve
                </span>
              </h4>
              <p className="text-gray-400 text-sm max-w-xl">
                Novas aplicações, APIs e experimentações são atualizadas diretamente no meu perfil do GitHub.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/MattVell"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-900 border border-white/10 hover:border-green-400/60 text-gray-200 hover:text-white font-medium text-sm flex items-center gap-2 shrink-0 transition-all hover:bg-slate-800"
          >
            <GithubIcon className="w-4 h-4 text-green-400" />
            <span>Explorar GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-gray-400" />
          </a>
        </div>

      </div>
    </section>
  );
}

