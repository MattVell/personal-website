"use client";

import { Code, LayoutGrid, Terminal, Globe } from "lucide-react";

export default function TechStackSection() {
  const categories = [
    {
      name: "Frontend Development",
      icon: <Code className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "React 19", level: "Avançado" },
        { name: "Next.js 15", level: "Avançado" },
        { name: "TypeScript", level: "Avançado" },
        { name: "Tailwind CSS v4", level: "Especialista" },
        { name: "HTML5 & CSS3", level: "Especialista" },
        { name: "JavaScript (ES6+)", level: "Avançado" },
      ],
    },
    {
      name: "UI/UX & Animações",
      icon: <LayoutGrid className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "Glassmorphic Design", level: "Especialista" },
        { name: "Framer Motion", level: "Avançado" },
        { name: "Design Responsivo", level: "Especialista" },
        { name: "HTML5 Canvas API", level: "Intermediário" },
        { name: "Figma UI Prototyping", level: "Avançado" },
      ],
    },
    {
      name: "Backend & Integrações",
      icon: <Globe className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "Node.js", level: "Avançado" },
        { name: "REST APIs", level: "Avançado" },
        { name: "Integração Instagram", level: "Avançado" },
        { name: "Checkout WhatsApp API", level: "Especialista" },
        { name: "PostgreSQL / Supabase", level: "Intermediário" },
      ],
    },
    {
      name: "Ferramentas & Deploy",
      icon: <Terminal className="w-5 h-5 text-green-400" />,
      skills: [
        { name: "Git & GitHub", level: "Avançado" },
        { name: "Vercel Deployments", level: "Especialista" },
        { name: "Google Lighthouse", level: "Score 100" },
        { name: "VS Code Ecosystem", level: "Especialista" },
      ],
    },
  ];

  return (
    <section id="tech-stack" className="relative py-28 px-6 sm:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Habilidades Tecnológicas
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Tech Stack &amp; Ferramentas de Trabalho
          </h2>
          <p className="text-gray-300 text-base">
            Ferramentas e tecnologias modernas utilizadas para construir aplicações web rápidas, seguras e com visual impecável.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-7 border border-white/10 space-y-6 hover:border-green-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-2 rounded-xl bg-gray-900 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {cat.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-xl bg-gray-900/60 border border-white/5 hover:border-green-500/30 flex items-center justify-between transition-colors group"
                  >
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-green-400 bg-green-950/60 border border-green-500/30 px-2 py-0.5 rounded-full font-mono">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
