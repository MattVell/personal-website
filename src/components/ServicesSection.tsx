"use client";

import { Monitor, ShoppingCart, Palette, Gauge, CheckCircle2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Monitor className="w-7 h-7 text-green-400" />,
      title: "Desenvolvimento Web Sob Medida",
      description: "Criação de websites profissionais, landing pages de alta conversão e aplicações web modernas do zero.",
      deliverables: ["Código limpo & moderno", "Totalmente responsivo", "Arquitetura escalável"],
    },
    {
      icon: <ShoppingCart className="w-7 h-7 text-green-400" />,
      title: "E-Commerce & Vitrines Interativas",
      description: "Sistemas de vendas online e vitrines dinâmicas (como o Amanda Modas) com integração de catálogo e WhatsApp.",
      deliverables: ["Integração de feeds sociais", "Checkout direto via WhatsApp", "Gestão simplificada de produtos"],
    },
    {
      icon: <Palette className="w-7 h-7 text-green-400" />,
      title: "UI/UX Design & Redesign",
      description: "Transformação de interfaces antigas ou genéricas em experiências digitais impecáveis com visual cyber-glass moderno.",
      deliverables: ["Prototipagem de alta fidelidade", "Glassmorphism & Efeitos Neon", "Micro-interações intuitivas"],
    },
    {
      icon: <Gauge className="w-7 h-7 text-green-400" />,
      title: "Otimização de Performance & SEO",
      description: "Refatoração de código para garantir carregamento instantâneo, máxima nota no Google Vitals e alto ranking orgânico.",
      deliverables: ["SEO técnico avançado", "Carregamento sub-segundo", "Score 100 no Core Web Vitals"],
    },
  ];

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20 z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Serviços &amp; Soluções
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Como posso ajudar o seu negócio a se destacar no digital?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Soluções completas de desenvolvimento e design adaptadas às necessidades do seu projeto ou empresa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 hover:border-green-500/50 transition-all duration-300"
            >
              <div className="p-3.5 rounded-2xl bg-green-950/80 border border-green-500/30 w-fit">
                {service.icon}
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>{item}</span>
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
