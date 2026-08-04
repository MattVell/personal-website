"use client";

import { useState } from "react";
import { 
  Code2, 
  Layout, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  Check, 
  Copy, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  Cpu 
} from "lucide-react";

export default function AboutSection() {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<"ts" | "json">("ts");

  const codeSnippets = {
    ts: `const developer = {
  name: "Mateus Veloso",
  role: "Full-Stack & UI/UX Specialist",
  status: "🟢 Disponível para projetos",
  focus: [
    "Clean Architecture",
    "Modern UI/UX Design",
    "High-Conversion Web Apps"
  ],
  featuredProject: "Amanda Modas",
  stack: ["Next.js 16", "TypeScript", "Tailwind v4", "React"]
};`,
    json: `{
  "developer": "Mateus Veloso",
  "specialization": "Frontend & UI Engineering",
  "performance": "100/100 Web Vitals",
  "philosophy": "Estética marcante com código limpo",
  "availability": true
}`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pillars = [
    {
      icon: <Layout className="w-6 h-6 text-green-400" />,
      badge: "Glassmorphism 2.0",
      title: "UI/UX & Design Impecável",
      description: "Interfaces marcantes com micro-interações fluidas, tipografia apurada e estética moderna.",
    },
    {
      icon: <Code2 className="w-6 h-6 text-green-400" />,
      badge: "Clean Architecture",
      title: "Código Limpo & Reutilizável",
      description: "Arquitetura modular em TypeScript, React e Next.js projetada para máxima escalabilidade.",
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      badge: "100/100 Web Vitals",
      title: "Ultra Performance & SEO",
      description: "Carregamento instantâneo e otimização avançada para encantar usuários e alavancar no Google.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
      badge: "Foco em Conversão",
      title: "Estratégia de Negócio",
      description: "Layouts inteligentes pensados para transmitir autoridade e transformar visitantes em clientes.",
    },
  ];

  return (
    <section id="sobre" className="relative py-24 px-6 sm:px-12 lg:px-20 z-10 overflow-hidden">
      {/* Elemento de iluminação de fundo ambiental */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 font-mono text-xs tracking-wider uppercase backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              • SOBRE MIM
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              Transformando ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-200">código e interfaces</span> de excelência
            </h2>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass-card border border-white/10 text-xs font-mono text-gray-300">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Disponível para novos projetos</span>
          </div>
        </div>

        {/* Bento Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Card 1: Bio Story & Filosofia (7 Colunas) */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between space-y-8">
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition-all duration-500 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-green-400/80 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span>Engenharia + Estética</span>
              </div>

              <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Sou <strong className="text-white font-semibold">Mateus Veloso</strong>, desenvolvedor full-stack e especialista em UI/UX focado em criar aplicações web que não apenas funcionam com maestria, mas que impressionam visualmente logo no primeiro segundo.
                </p>
                <p>
                  Minha filosofia une a rigorosa disciplina do <strong className="text-green-400 font-semibold">código limpo</strong> com a sensibilidade do design moderno. Acredito que um excelente produto digital deve ter identidade marcante, tipografia afiada e velocidade impecável.
                </p>
                <p>
                  Desenvolvo soluções sob medida para marcas e empresas — desde landing pages de alta conversão até aplicações e vitrines interativas completas, como o projeto recente <strong className="text-green-400 font-medium">Amanda Modas</strong>.
                </p>
              </div>
            </div>

            {/* Sub-Badges Rodapé da Bio */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 relative z-10">
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-mono">Foco Principal</p>
                <p className="text-sm font-semibold text-white">Full-Stack & UI</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-mono">Arquitetura</p>
                <p className="text-sm font-semibold text-white">Clean & Modular</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-gray-400 font-mono">Padrão</p>
                <p className="text-sm font-semibold text-green-400">High Web Vitals</p>
              </div>
            </div>
          </div>

          {/* Card 2: Terminal Interativo de Código (5 Colunas) */}
          <div className="lg:col-span-5 glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between group shadow-2xl relative">
            
            {/* Header do Terminal */}
            <div className="bg-slate-950/80 px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-green-400" />
                  mateus-profile.ts
                </span>
              </div>

              {/* Botões de Aba e Copy */}
              <div className="flex items-center gap-2">
                <div className="flex bg-slate-900 rounded-lg p-0.5 border border-white/10 text-[11px] font-mono">
                  <button
                    onClick={() => setActiveCodeTab("ts")}
                    className={`px-2.5 py-0.5 rounded-md transition-colors ${
                      activeCodeTab === "ts" ? "bg-green-500/20 text-green-300 font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    TS
                  </button>
                  <button
                    onClick={() => setActiveCodeTab("json")}
                    className={`px-2.5 py-0.5 rounded-md transition-colors ${
                      activeCodeTab === "json" ? "bg-green-500/20 text-green-300 font-semibold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    JSON
                  </button>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-gray-400 hover:text-green-400 transition-colors"
                  title="Copiar código"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Conteúdo do Código com Destaque de Sintaxe */}
            <div className="p-6 font-mono text-xs sm:text-sm bg-slate-950/60 overflow-x-auto text-gray-300 leading-relaxed flex-1 flex flex-col justify-center">
              <pre className="whitespace-pre">
                {activeCodeTab === "ts" ? (
                  <>
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;{"\n"}
                    {"  "}<span className="text-blue-400">name</span>: <span className="text-green-300">&quot;Mateus Veloso&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">role</span>: <span className="text-green-300">&quot;Full-Stack &amp; UI/UX Specialist&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">status</span>: <span className="text-green-300">&quot;🟢 Disponível para projetos&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">focus</span>: [{"\n"}
                    {"    "}<span className="text-green-300">&quot;Clean Architecture&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-300">&quot;Modern UI/UX Design&quot;</span>,{"\n"}
                    {"    "}<span className="text-green-300">&quot;High-Conversion Web Apps&quot;</span>{"\n"}
                    {"  "}],{"\n"}
                    {"  "}<span className="text-blue-400">featuredProject</span>: <span className="text-green-300">&quot;Amanda Modas&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">stack</span>: [<span className="text-emerald-300">&quot;Next.js 16&quot;</span>, <span className="text-emerald-300">&quot;TypeScript&quot;</span>, <span className="text-emerald-300">&quot;Tailwind v4&quot;</span>]{"\n"}
                    &#125;;
                  </>
                ) : (
                  <>
                    &#123;{"\n"}
                    {"  "}<span className="text-blue-400">&quot;developer&quot;</span>: <span className="text-green-300">&quot;Mateus Veloso&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">&quot;specialization&quot;</span>: <span className="text-green-300">&quot;Frontend &amp; UI Engineering&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">&quot;performance&quot;</span>: <span className="text-green-300">&quot;100/100 Web Vitals&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">&quot;philosophy&quot;</span>: <span className="text-green-300">&quot;Estética marcante com código limpo&quot;</span>,{"\n"}
                    {"  "}<span className="text-blue-400">&quot;availability&quot;</span>: <span className="text-purple-400">true</span>{"\n"}
                    &#125;
                  </>
                )}
              </pre>
            </div>

            {/* Rodapé Status de Compilação */}
            <div className="bg-slate-950/90 px-5 py-2.5 border-t border-white/10 text-[11px] font-mono text-gray-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Build ready
              </span>
              <span className="text-gray-500">0 errors • 0 warnings</span>
            </div>
          </div>

        </div>

        {/* Bento Grid Secundário: 4 Pilares de Excelência */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-green-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-green-950/60 border border-green-500/30 text-green-400 group-hover:scale-110 group-hover:bg-green-500/20 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">
                    {pillar.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-white font-semibold text-lg group-hover:text-green-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center text-[11px] font-mono text-green-400/70 group-hover:text-green-400 transition-colors gap-1">
                <span>Saiba mais</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
