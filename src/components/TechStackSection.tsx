"use client";

import { useState } from "react";
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  LayoutGrid,
  Copy,
  Check
} from "lucide-react";

interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "ui" | "backend" | "tools";
  categoryLabel: string;
  brandColor: string;
  glowColor: string;
  badge: string;
  description: string;
  features: string[];
  codeSnippet: string;
  codeLanguage: string;
  projectLink?: {
    name: string;
    url: string;
  };
  svgLogo: React.ReactNode;
}

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "frontend" | "ui" | "backend" | "tools">("all");

  const techList: TechItem[] = [
    {
      id: "nextjs",
      name: "Next.js 15 & 16",
      category: "frontend",
      categoryLabel: "Core Framework",
      brandColor: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.15)",
      badge: "App Router & SSR",
      description: "Framework React para produção com Server Components, suporte a Partial Prerendering (PPR), Server Actions e rotas otimizadas para SEO.",
      features: ["Server-Side Rendering (SSR)", "React Server Components (RSC)", "Server Actions para formulários", "Otimização automática de imagens e fontes"],
      codeLanguage: "typescript",
      codeSnippet: `// Server Action tipada para processamento de pedidos
export async function submitOrderAction(formData: FormData) {
  "use server";
  const rawData = Object.fromEntries(formData);
  const validated = orderSchema.parse(rawData);
  
  const order = await db.orders.create({ data: validated });
  revalidatePath("/dashboard/orders");
  return { success: true, orderId: order.id };
}`,
      projectLink: {
        name: "Amanda Modas E-Commerce",
        url: "https://amandamodasms.com.br"
      },
      svgLogo: (
        <svg viewBox="0 0 180 180" className="w-6 h-6 fill-current">
          <path d="M149.996 0H30.0039C13.4328 0 0 13.4328 0 30.0039V149.996C0 166.567 13.4328 180 30.0039 180H149.996C166.567 180 180 166.567 180 149.996V30.0039C180 13.4328 166.567 0 149.996 0ZM143.438 143.438H130.686L82.1641 73.125V143.438H70.3125V36.5625H83.0645L131.586 106.875V36.5625H143.438V143.438Z" />
        </svg>
      )
    },
    {
      id: "react",
      name: "React 19",
      category: "frontend",
      categoryLabel: "UI Library",
      brandColor: "#61DAFB",
      glowColor: "rgba(97, 218, 251, 0.2)",
      badge: "Concurrent Engine",
      description: "Biblioteca principal para construção de interfaces reativas com hooks modernos, Server Components e gestão de estado otimizada.",
      features: ["useActionState & useOptimistic", "Concurrent Rendering", "Arquitetura por Componentes", "Custom Hooks Modulares"],
      codeLanguage: "tsx",
      codeSnippet: `// Estado otimista para atualização instantânea na UI
const [optimisticCart, setOptimisticCart] = useOptimistic(
  cartState,
  (current, newItem) => [...current, newItem]
);`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-none stroke-current stroke-[6]">
          <circle cx="50" cy="50" r="10" fill="currentColor" />
          <ellipse cx="50" cy="50" rx="40" ry="16" />
          <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="40" ry="16" transform="rotate(120 50 50)" />
        </svg>
      )
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "frontend",
      categoryLabel: "Type Safety",
      brandColor: "#3178C6",
      glowColor: "rgba(49, 120, 198, 0.25)",
      badge: "Strict Mode",
      description: "Desenvolvimento com tipagem estrita de ponta a ponta, garantindo autocompletion no editor e eliminando erros de runtime em produção.",
      features: ["Contratos de API Tipados", "Generics & Utility Types", "Inferência de Tipos sem Any", "Zero Erros de Exceção Silenciosa"],
      codeLanguage: "typescript",
      codeSnippet: `// Tipagem genérica para respostas de API padronizadas
export type ApiResponse<TData> = 
  | { status: "success"; data: TData; timestamp: number }
  | { status: "error"; message: string; code: number };`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <rect width="100" height="100" rx="16" />
          <text x="50" y="68" fontSize="48" fontWeight="bold" textAnchor="middle" fill="#060709" fontStyle="normal">TS</text>
        </svg>
      )
    },
    {
      id: "tailwind",
      name: "Tailwind CSS v4",
      category: "ui",
      categoryLabel: "Styling Engine",
      brandColor: "#38BDF8",
      glowColor: "rgba(56, 189, 248, 0.25)",
      badge: "Oxide Engine",
      description: "Nova geração do Tailwind CSS compilada pelo Oxide Engine de alta velocidade, baseada em CSS Variables e Container Queries nativas.",
      features: ["Container Queries (@container)", "Glassmorphism & Backdrop Filters", "CSS Variables de Design Tokens", "Compilação de alta performance"],
      codeLanguage: "css",
      codeSnippet: `/* Configuração de tokens nativos em Tailwind v4 */
@theme {
  --color-brand-emerald: #10b981;
  --font-mono: 'JetBrains Mono', monospace;
  --backdrop-blur-glass: 16px;
}`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <path d="M26 30c6-12 18-14 26-6 6 6 10 12 20 12 10 0 16-8 16-8s-6 12-18 14c-6 6-10 12-20 12-10 0-16-8-16-8s6-12 18-14c6-6 10-12 20-12 10 0 16 8 16 8" />
        </svg>
      )
    },
    {
      id: "framer",
      name: "Framer Motion & Canvas",
      category: "ui",
      categoryLabel: "Animations & FX",
      brandColor: "#F55D7A",
      glowColor: "rgba(245, 93, 122, 0.25)",
      badge: "60 FPS Motion",
      description: "Construção de animações fluidas baseadas em física e renderização interativa em 2D Canvas (como os nós do fundo Plexus do portfólio).",
      features: ["Animações baseadas em física (Springs)", "Scroll-Driven Reveal Effects", "HTML5 Canvas API 2D Context", "Micro-interações táticas"],
      codeLanguage: "tsx",
      codeSnippet: `// Transição fluida com Spring Physics
<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileHover={{ scale: 1.02 }}
  transition={{ type: "spring", stiffness: 400, damping: 25 }}
/>`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <path d="M0 0h100v33H66L0 0zm0 33h66v34H0V33zm33 34h67v33H33V67z" />
        </svg>
      )
    },
    {
      id: "nodejs",
      name: "Node.js & REST APIs",
      category: "backend",
      categoryLabel: "Backend Runtimes",
      brandColor: "#5FA04E",
      glowColor: "rgba(95, 160, 78, 0.25)",
      badge: "Async Event Loop",
      description: "Arquitetura de APIs RESTful resilientes, rotas de integração com webhooks e automação de mensageria via WhatsApp Cloud API.",
      features: ["Rotas de API assíncronas", "Checkout direto no WhatsApp", "Validação com Zod Schemas", "Tratamento estrito de exceções"],
      codeLanguage: "typescript",
      codeSnippet: `// Handler de Webhook com validação estrita
app.post("/api/whatsapp/send", async (req, res) => {
  const payload = messageSchema.parse(req.body);
  const result = await sendWhatsAppMessage(payload);
  return res.json({ status: "delivered", messageId: result.id });
});`,
      projectLink: {
        name: "Amanda Modas WhatsApp Checkout",
        url: "https://amandamodasms.com.br"
      },
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <path d="M50 5L5 30v40l45 25 45-25V30L50 5zm0 14l30 17-30 17-30-17 30-17z" />
        </svg>
      )
    },
    {
      id: "supabase",
      name: "PostgreSQL & Supabase",
      category: "backend",
      categoryLabel: "Database & Auth",
      brandColor: "#3ECF8E",
      glowColor: "rgba(62, 207, 142, 0.25)",
      badge: "Relational DB",
      description: "Gerenciamento de banco de dados relacional SQL, segurança no nível de linha (RLS) e consultas otimizadas para baixa latência.",
      features: ["Row Level Security (RLS)", "Modelagem relacional de tabelas", "Realtime Subscriptions", "Indexação e queries performáticas"],
      codeLanguage: "sql",
      codeSnippet: `-- Política de Segurança RLS no PostgreSQL
CREATE POLICY "Permitir leitura de produtos ativos"
ON public.products FOR SELECT
USING (is_active = true);`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <path d="M53.5 95c-1.5 0-3-.7-3.9-1.9L22.2 57.3c-1.5-1.9-.6-4.7 1.8-5.3l25.8-6.6c.9-.2 1.7-.8 2.1-1.6l12.4-27.1c1.2-2.6 4.9-2.4 5.8.3l12.4 36.4c.5 1.5 1.9 2.5 3.5 2.3l12.1-1.6c2.4-.3 4.2 2.1 3.2 4.3L61.3 92c-.9 1.8-2.8 3-4.8 3h-3z" />
        </svg>
      )
    },
    {
      id: "vercel",
      name: "Vercel & Git Workflow",
      category: "tools",
      categoryLabel: "CI/CD & Deploy",
      brandColor: "#ffffff",
      glowColor: "rgba(255, 255, 255, 0.2)",
      badge: "Score 100 Web Vitals",
      description: "Infraestrutura Serverless em nuvem com deploy contínuo via GitHub, otimização de borda (Edge Network) e score 100 no Google Lighthouse.",
      features: ["Deployments automatizados via Git", "Edge Middleware & Caching", "Google Web Vitals 100/100", "Ambientes de Preview em tempo real"],
      codeLanguage: "json",
      codeSnippet: `// next.config.ts — Otimização de Imagens e Security Headers
{
  "headers": [
    { "key": "X-Content-Type-Options", "value": "nosniff" },
    { "key": "Strict-Transport-Security", "value": "max-age=31536000" }
  ]
}`,
      svgLogo: (
        <svg viewBox="0 0 100 100" className="w-6 h-6 fill-current">
          <path d="M50 15L100 90H0L50 15Z" />
        </svg>
      )
    }
  ];

  const [selectedTechId, setSelectedTechId] = useState<string>("nextjs");
  const [copied, setCopied] = useState(false);

  const selectedTech = techList.find((t) => t.id === selectedTechId) || techList[0];

  const handleCopyCode = () => {
    if (selectedTech?.codeSnippet) {
      navigator.clipboard.writeText(selectedTech.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const renderHighlightedCode = (techId: string) => {
    switch (techId) {
      case "nextjs":
        return (
          <>
            <span className="text-slate-400">// Server Action tipada para processamento de pedidos</span>{"\n"}
            <span className="text-purple-400 font-medium">export async function</span> <span className="text-yellow-300 font-semibold">submitOrderAction</span>(<span className="text-blue-300">formData</span>: <span className="text-teal-300">FormData</span>) &#123;{"\n"}
            {"  "}<span className="text-emerald-300">&quot;use server&quot;</span>;{"\n"}
            {"  "}<span className="text-purple-400">const</span> <span className="text-blue-400">rawData</span> = <span className="text-teal-300">Object</span>.<span className="text-yellow-300">fromEntries</span>(formData);{"\n"}
            {"  "}<span className="text-purple-400">const</span> <span className="text-blue-400">validated</span> = orderSchema.<span className="text-yellow-300">parse</span>(rawData);{"\n"}
            {"\n"}
            {"  "}<span className="text-purple-400">const</span> <span className="text-blue-400">order</span> = <span className="text-purple-400">await</span> db.orders.<span className="text-yellow-300">create</span>(&#123; <span className="text-blue-300">data</span>: validated &#125;);{"\n"}
            {"  "}<span className="text-yellow-300">revalidatePath</span>(<span className="text-emerald-300">&quot;/dashboard/orders&quot;</span>);{"\n"}
            {"  "}<span className="text-purple-400">return</span> &#123; <span className="text-blue-300">success</span>: <span className="text-purple-400">true</span>, <span className="text-blue-300">orderId</span>: order.id &#125;;{"\n"}
            &#125;
          </>
        );
      case "react":
        return (
          <>
            <span className="text-slate-400">// Estado otimista para atualização instantânea na UI</span>{"\n"}
            <span className="text-purple-400 font-medium">const</span> [<span className="text-blue-400">optimisticCart</span>, <span className="text-yellow-300">setOptimisticCart</span>] = <span className="text-yellow-300 font-semibold">useOptimistic</span>({" \n"}
            {"  "}cartState,{"\n"}
            {"  "}(<span className="text-blue-300">current</span>, <span className="text-blue-300">newItem</span>) =&gt; [<span className="text-purple-400">...</span>current, newItem]{"\n"}
            );
          </>
        );
      case "typescript":
        return (
          <>
            <span className="text-slate-400">// Tipagem genérica para respostas de API padronizadas</span>{"\n"}
            <span className="text-purple-400 font-medium">export type</span> <span className="text-teal-300 font-semibold">ApiResponse</span>&lt;<span className="text-amber-300">TData</span>&gt; ={"\n"}
            {"  "}| &#123; <span className="text-blue-400">status</span>: <span className="text-emerald-300">&quot;success&quot;</span>; <span className="text-blue-400">data</span>: <span className="text-amber-300">TData</span>; <span className="text-blue-400">timestamp</span>: <span className="text-teal-300">number</span> &#125;{"\n"}
            {"  "}| &#123; <span className="text-blue-400">status</span>: <span className="text-emerald-300">&quot;error&quot;</span>; <span className="text-blue-400">message</span>: <span className="text-teal-300">string</span>; <span className="text-blue-400">code</span>: <span className="text-teal-300">number</span> &#125;;
          </>
        );
      case "tailwind":
        return (
          <>
            <span className="text-slate-400">/* Configuração de tokens nativos em Tailwind v4 */</span>{"\n"}
            <span className="text-purple-400 font-semibold">@theme</span> &#123;{"\n"}
            {"  "}<span className="text-sky-300">--color-brand-emerald</span>: <span className="text-emerald-300">#10b981</span>;{"\n"}
            {"  "}<span className="text-sky-300">--font-mono</span>: <span className="text-emerald-300">&apos;JetBrains Mono&apos;</span>, <span className="text-amber-300">monospace</span>;{"\n"}
            {"  "}<span className="text-sky-300">--backdrop-blur-glass</span>: <span className="text-purple-300">16px</span>;{"\n"}
            &#125;
          </>
        );
      case "framer":
        return (
          <>
            <span className="text-slate-400">// Transição fluida com Spring Physics</span>{"\n"}
            &lt;<span className="text-teal-300 font-semibold">motion.div</span>{"\n"}
            {"  "}<span className="text-blue-400">initial</span>=&#123;&#123; <span className="text-blue-300">opacity</span>: <span className="text-purple-400">0</span>, <span className="text-blue-300">scale</span>: <span className="text-purple-400">0.95</span> &#125;&#125;{"\n"}
            {"  "}<span className="text-blue-400">whileHover</span>=&#123;&#123; <span className="text-blue-300">scale</span>: <span className="text-purple-400">1.02</span> &#125;&#125;{"\n"}
            {"  "}<span className="text-blue-400">transition</span>=&#123;&#123; <span className="text-blue-300">type</span>: <span className="text-emerald-300">&quot;spring&quot;</span>, <span className="text-blue-300">stiffness</span>: <span className="text-purple-400">400</span>, <span className="text-blue-300">damping</span>: <span className="text-purple-400">25</span> &#125;&#125;{"\n"}
            /&gt;
          </>
        );
      case "nodejs":
        return (
          <>
            <span className="text-slate-400">// Handler de Webhook com validação estrita</span>{"\n"}
            app.<span className="text-yellow-300 font-semibold">post</span>(<span className="text-emerald-300">&quot;/api/whatsapp/send&quot;</span>, <span className="text-purple-400">async</span> (<span className="text-blue-300">req</span>, <span className="text-blue-300">res</span>) =&gt; &#123;{"\n"}
            {"  "}<span className="text-purple-400">const</span> <span className="text-blue-400">payload</span> = messageSchema.<span className="text-yellow-300">parse</span>(req.body);{"\n"}
            {"  "}<span className="text-purple-400">const</span> <span className="text-blue-400">result</span> = <span className="text-purple-400">await</span> <span className="text-yellow-300">sendWhatsAppMessage</span>(payload);{"\n"}
            {"  "}<span className="text-purple-400">return</span> res.<span className="text-yellow-300">json</span>(&#123; <span className="text-blue-300">status</span>: <span className="text-emerald-300">&quot;delivered&quot;</span>, <span className="text-blue-300">messageId</span>: result.id &#125;);{"\n"}
            &#125;);
          </>
        );
      case "supabase":
        return (
          <>
            <span className="text-slate-400">-- Política de Segurança RLS no PostgreSQL</span>{"\n"}
            <span className="text-purple-400 font-semibold">CREATE POLICY</span> <span className="text-emerald-300">&quot;Permitir leitura de produtos ativos&quot;</span>{"\n"}
            <span className="text-purple-400 font-semibold">ON</span> <span className="text-blue-300">public.products</span> <span className="text-purple-400 font-semibold">FOR SELECT</span>{"\n"}
            <span className="text-purple-400 font-semibold">USING</span> (<span className="text-blue-400">is_active</span> = <span className="text-purple-400">true</span>);
          </>
        );
      case "vercel":
        return (
          <>
            <span className="text-slate-400">// next.config.ts — Otimização de Imagens e Security Headers</span>{"\n"}
            &#123;{"\n"}
            {"  "}<span className="text-blue-400">&quot;headers&quot;</span>: [{"\n"}
            {"    "}&#123; <span className="text-blue-400">&quot;key&quot;</span>: <span className="text-emerald-300">&quot;X-Content-Type-Options&quot;</span>, <span className="text-blue-400">&quot;value&quot;</span>: <span className="text-emerald-300">&quot;nosniff&quot;</span> &#125;,{"\n"}
            {"    "}&#123; <span className="text-blue-400">&quot;key&quot;</span>: <span className="text-emerald-300">&quot;Strict-Transport-Security&quot;</span>, <span className="text-blue-400">&quot;value&quot;</span>: <span className="text-emerald-300">&quot;max-age=31536000&quot;</span> &#125;{"\n"}
            {"  "}]{"\n"}
            &#125;
          </>
        );
      default:
        return selectedTech.codeSnippet;
    }
  };

  const filteredTechs = activeCategory === "all" 
    ? techList 
    : techList.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="relative py-28 px-6 sm:px-12 lg:px-20 z-10 overflow-hidden">
      
      {/* Dynamic Ambient Background Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: selectedTech.brandColor }}
      />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Architecture Bar (Zero AI repetition look) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-white/10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-green-400 font-semibold tracking-wider uppercase px-3 py-1 rounded-md bg-green-500/10 border border-green-500/20">
                ARCH_STACK // 04
              </span>
              <span className="text-xs font-mono text-gray-400">
                • Ecossistema de Engenharia &amp; Design
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Stack de Alta Performance <span className="text-gray-400 font-light">&amp; Ferramentas</span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Clique nas tecnologias abaixo para inspecionar os padrões de código, garantias de arquitetura e casos de uso em projetos reais.
            </p>
          </div>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md">
            {[
              { id: "all", label: "Todas" },
              { id: "frontend", label: "Frontend" },
              { id: "ui", label: "UI & FX" },
              { id: "backend", label: "Backend" },
              { id: "tools", label: "Deploy & Tools" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeCategory === tab.id
                    ? "bg-green-500/20 text-green-300 font-bold border border-green-500/40 shadow-sm"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Master Architecture Stage & Grid Layout (Split 7 / 5) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Architecture Inspector Stage (7 Colunas) */}
          <div className="lg:col-span-7 glass-card rounded-3xl border border-white/15 p-6 sm:p-8 space-y-8 relative overflow-hidden shadow-2xl backdrop-blur-xl">
            
            {/* Top Technology Title & Logo Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div 
                  className="p-3.5 rounded-2xl border transition-all duration-300 shadow-lg"
                  style={{ 
                    backgroundColor: "rgba(15, 23, 42, 0.9)", 
                    borderColor: `${selectedTech.brandColor}50`,
                    color: selectedTech.brandColor,
                    boxShadow: `0 0 25px ${selectedTech.glowColor}`
                  }}
                >
                  {selectedTech.svgLogo}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400">
                      {selectedTech.categoryLabel}
                    </span>
                    <span 
                      className="text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold"
                      style={{ 
                        color: selectedTech.brandColor, 
                        borderColor: `${selectedTech.brandColor}40`,
                        backgroundColor: `${selectedTech.brandColor}15` 
                      }}
                    >
                      {selectedTech.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {selectedTech.name}
                  </h3>
                </div>
              </div>

              {selectedTech.projectLink && (
                <a
                  href={selectedTech.projectLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 hover:text-green-200 text-xs font-mono transition-colors group"
                >
                  <Sparkles className="w-3.5 h-3.5 text-green-400" />
                  <span>{selectedTech.projectLink.name}</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {selectedTech.description}
            </p>

            {/* Concrete Architecture Guarantees Checklist */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                Garantias Arquiteturais &amp; Padrões de Código:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTech.features.map((feat, idx) => (
                  <div 
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center gap-2.5 text-xs text-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Code Snippet Terminal Window */}
            <div className="space-y-2 pt-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/90 overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="bg-slate-950/80 px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-gray-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-green-400" />
                      {selectedTech.id}-snippet.{selectedTech.codeLanguage === "typescript" ? "ts" : selectedTech.codeLanguage === "tsx" ? "tsx" : selectedTech.codeLanguage === "css" ? "css" : selectedTech.codeLanguage === "sql" ? "sql" : "json"}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 uppercase">
                      {selectedTech.codeLanguage}
                    </span>
                    <button
                      onClick={handleCopyCode}
                      className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-gray-400 hover:text-green-400 transition-colors"
                      title="Copiar código"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Terminal Code Body with Syntax Highlighting */}
                <div className="p-5 font-mono text-xs sm:text-sm bg-slate-950/60 overflow-x-auto text-gray-300 leading-relaxed min-h-[160px] flex items-center">
                  <pre className="whitespace-pre">
                    {renderHighlightedCode(selectedTech.id)}
                  </pre>
                </div>

                {/* Terminal Footer Status Bar */}
                <div className="bg-slate-950/90 px-4 py-2 border-t border-white/10 text-[11px] font-mono text-gray-500 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-green-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Clean Architecture Verified
                  </span>
                  <span>0 errors • 0 warnings</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Ecosystem Selector Grid (5 Colunas) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-green-400" />
                Selecione para Inspecionar ({filteredTechs.length})
              </span>
              <span className="text-[11px] font-mono text-gray-500">Clique para alternar</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredTechs.map((tech) => {
                const isSelected = tech.id === selectedTechId;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setSelectedTechId(tech.id)}
                    className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between gap-3 group relative overflow-hidden ${
                      isSelected
                        ? "bg-slate-900/90 border-green-500/60 shadow-lg shadow-green-500/10 ring-1 ring-green-500/40"
                        : "bg-slate-950/40 border-white/10 hover:bg-slate-900/60 hover:border-white/20"
                    }`}
                  >
                    {/* Left Accent Bar on Selected */}
                    {isSelected && (
                      <div 
                        className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                        style={{ backgroundColor: tech.brandColor }}
                      />
                    )}

                    <div className="flex items-center gap-3 min-w-0">
                      <div 
                        className="p-2.5 rounded-xl border shrink-0 transition-transform group-hover:scale-110"
                        style={{ 
                          backgroundColor: "rgba(15, 23, 42, 0.8)",
                          borderColor: isSelected ? `${tech.brandColor}60` : "rgba(255, 255, 255, 0.1)",
                          color: tech.brandColor
                        }}
                      >
                        {tech.svgLogo}
                      </div>

                      <div className="min-w-0">
                        <h4 className={`text-sm font-bold truncate transition-colors ${
                          isSelected ? "text-white" : "text-gray-300 group-hover:text-white"
                        }`}>
                          {tech.name}
                        </h4>
                        <p className="text-[11px] font-mono text-gray-400 truncate">{tech.badge}</p>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 shrink-0 transition-all ${
                      isSelected ? "text-green-400 translate-x-0" : "text-gray-600 -translate-x-1 group-hover:translate-x-0 group-hover:text-gray-400"
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Bottom Proof Metric Card */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 space-y-2 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-green-400">
                <Zap className="w-4 h-4" />
                <span>Auditoria &amp; Qualidade de Código</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Todas as aplicações desenvolvidas seguem validação rigorosa no Google Lighthouse com notas 100/100 em Performance, SEO, Acessibilidade e Melhores Práticas.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
