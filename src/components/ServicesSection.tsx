"use client";

import { useState } from "react";
import { 
  Code2, 
  ShoppingCart, 
  Palette, 
  Gauge, 
  ArrowUpRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Layers, 
  Zap, 
  MessageSquare 
} from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  icon: React.ReactNode;
  description: string;
  timeframe: string;
  deliverables: string[];
  businessValue: string;
  highlights: { title: string; desc: string }[];
}

export default function ServicesSection() {
  const services: ServiceItem[] = [
    {
      id: "fullstack",
      number: "01",
      title: "Desenvolvimento Web & Aplicações Sob Medida",
      subtitle: "Sistemas web e landing pages autorais de alto impacto",
      category: "Engenharia Fullstack",
      icon: <Code2 className="w-5 h-5 text-emerald-400" />,
      description:
        "Construção de aplicações web modernas, SPAs e landing pages do zero. Foco total em arquitetura autoral escalável, SEO orgânico superior e código limpo sem a dependência de plugins pesados ou mensalidades de plataformas.",
      timeframe: "7 a 14 dias úteis",
      businessValue: "Transmite máxima autoridade para sua marca e converte visitantes em clientes.",
      deliverables: [
        "Código Autoral 100% Propriedade do Cliente",
        "Arquitetura Reutilizável & Escalável",
        "Layout Responsivo Ajustado para Móbiles",
        "Sem Mensalidades de Plataformas Fechadas",
        "Otimização para Carregamento Sub-segundo",
        "Painel Admin / CMS sob Medida (se necessário)",
      ],
      highlights: [
        { title: "Zero Lock-in", desc: "Seu site é 100% seu, hospedável em qualquer servidor." },
        { title: "Clean Code", desc: "TypeScript e React com tipagem estrita e sem débitos técnicos." },
      ],
    },
    {
      id: "ecommerce",
      number: "02",
      title: "E-Commerce & Vitrines Interativas com WhatsApp",
      subtitle: "Catálogos digitais de alta conversão sem burocracia",
      category: "Vendas & Conversão",
      icon: <ShoppingCart className="w-5 h-5 text-emerald-400" />,
      description:
        "Sistemas de vendas dinâmicos e vitrines de produtos com catálogo interativo e checkout direto via WhatsApp API. Ideal para marcas e comércios que querem vender com agilidade sem taxas por transação.",
      timeframe: "10 a 20 dias úteis",
      businessValue: "Acelera a tomada de decisão do comprador e fecha vendas diretamente no WhatsApp.",
      deliverables: [
        "Catálogo Interativo com Filtros Instantâneos",
        "Checkout Direto via API do WhatsApp",
        "Painel de Gerenciamento de Produtos",
        "Integração com Feed do Instagram (#hashtags)",
        "Mosaico Mídia Responsivo para Celular",
        "Layout Estilo Boutique / Moda Feminina",
      ],
      highlights: [
        { title: "Zero Taxas", desc: "Sem comissões por venda em intermediadores." },
        { title: "Direct Sales", desc: "Receba o pedido formatado e pronto para atendimento." },
      ],
    },
    {
      id: "uiux",
      number: "03",
      title: "UI/UX Design & Redesign de Interfaces",
      subtitle: "Transformação de protótipos em experiências memoráveis",
      category: "Design System & UX",
      icon: <Palette className="w-5 h-5 text-emerald-400" />,
      description:
        "Redesign completo de plataformas brutas em interfaces modernas, minimalistas e altamente intuitivas. Criação de Design Systems consistentes no Figma prontos para implementação em código.",
      timeframe: "5 a 12 dias úteis",
      businessValue: "Reduz o esforço cognitivo do usuário e aumenta a retenção na sua aplicação.",
      deliverables: [
        "Arquivos Editáveis no Figma com Componentes",
        "Design System & Guia de Estilo (Cores, Tipografia)",
        "Prototipagem Navegável de Alta Fidelidade",
        "Conformidade de Acessibilidade (WCAG AA)",
        "Micro-interações & Animações Suaves",
        "Handoff Simplificado para Engenheiros",
      ],
      highlights: [
        { title: "Figma Master", desc: "Tokens organizados, variáveis e Auto Layout 5.0." },
        { title: "Focus on Conversion", desc: "Hierarquia visual estudada para guiar a atenção." },
      ],
    },
    {
      id: "performance",
      number: "04",
      title: "Otimização de Performance & SEO Técnico",
      subtitle: "Suba para notas máximas no Google Web Vitals",
      category: "Performance Engineering",
      icon: <Gauge className="w-5 h-5 text-emerald-400" />,
      description:
        "Auditoria e refatoração profunda de aplicações existentes para eliminar gargalos de renderização, reduzir o tamanho dos bundles e garantir carregamento instantâneo em conexões móbiles.",
      timeframe: "3 a 7 dias úteis",
      businessValue: "Melhora o ranqueamento orgânico no Google e impede a perda de visitantes por lentidão.",
      deliverables: [
        "Diagnóstico Completo de Core Web Vitals",
        "Otimização Avançada de Imagens e Fontes",
        "Redução Drástica do Bundle JavaScript",
        "Refatoração de CSS & Critical Rendering Path",
        "Configuração de Meta Tags Open Graph & SEO",
        "Relatório Comparativo Antes vs Depois",
      ],
      highlights: [
        { title: "Sub-Second Load", desc: "Páginas prontas para renderizar em menos de 1 segundo." },
        { title: "Google Boost", desc: "Melhores posições no algoritmo de busca orgânica." },
      ],
    },
  ];

  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  const buildWhatsappUrl = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá Mateus! Tenho interesse no serviço: *${serviceTitle}*. Gostaria de conversar sobre um orçamento.`
    );
    return `https://wa.me/5541992666567?text=${text}`;
  };

  const handleServiceSelect = (id: string) => {
    setActiveServiceId(id);
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setTimeout(() => {
        const el = document.getElementById(`service-panel-${id}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 50);
    }
  };

  return (
    <section id="servicos" className="relative py-28 px-6 sm:px-12 lg:px-20 z-10 bg-slate-950/40 border-y border-zinc-800/60">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Serviços &amp; Escopo de Engenharia
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Soluções Digitais sob Medida para o seu Negócio
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Selecione uma especialidade abaixo para visualizar os entregáveis concretos, garantias de engenharia e prazo de execução.
          </p>
        </div>

        {/* Interactive Solutions Blueprint Layout (Split 5 / 7) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Menu / Service Selector (5 Colunas) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest px-2 pb-1">
              • Selecione um Serviço
            </p>

            {services.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.id}`}
                  id={`service-tab-${service.id}`}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`w-full text-left p-4 sm:p-6 rounded-2xl border transition-all duration-300 relative group flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.99] ${
                    isActive
                      ? "bg-zinc-900/90 border-emerald-500/60 shadow-lg shadow-emerald-500/5 ring-1 ring-emerald-500/30"
                      : "bg-zinc-900/30 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700"
                  }`}
                >
                  {/* Left Accent Bar on Active */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-emerald-400 rounded-r-full" />
                  )}

                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg border transition-colors ${
                        isActive
                          ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                          : "bg-zinc-800/60 text-zinc-500 border-zinc-700/50 group-hover:text-zinc-300"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="min-w-0 space-y-1">
                      <h3
                        className={`text-base font-bold tracking-tight truncate transition-colors ${
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate">{service.subtitle}</p>
                    </div>
                  </div>

                  <div
                    className={`p-2 rounded-xl border shrink-0 transition-all ${
                      isActive
                        ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                        : "bg-zinc-800/40 border-zinc-700/40 text-zinc-500 group-hover:text-zinc-300"
                    }`}
                  >
                    {service.icon}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Stage & Deliverables Canvas (7 Colunas) */}
          <div 
            role="tabpanel"
            id={`service-panel-${activeService.id}`}
            aria-labelledby={`service-tab-${activeService.id}`}
            className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl backdrop-blur-md"
          >
            
            {/* Background Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Header */}
            <div className="space-y-4 pb-6 border-b border-zinc-800/80">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 tracking-wide flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  {activeService.category}
                </span>

                <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono bg-zinc-950/80 px-3 py-1 rounded-lg border border-zinc-800">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Prazo estimado: {activeService.timeframe}</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeService.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {activeService.description}
              </p>
            </div>

            {/* Business Impact Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activeService.highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> {item.title}
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Concrete Deliverables Checklist */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                O que você recebe neste projeto (Entregáveis Concretos):
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeService.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800/60 flex items-start gap-2.5 text-xs text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Action Bar */}
            <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-center sm:text-left">
                <p className="text-xs text-zinc-400 font-mono">Pronto para este escopo?</p>
                <p className="text-xs font-semibold text-zinc-200">{activeService.businessValue}</p>
              </div>

              <a
                href={buildWhatsappUrl(activeService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Orçamento</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
