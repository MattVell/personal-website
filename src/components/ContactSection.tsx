"use client";

import { useState } from "react";
import { MessageSquare, Send, Mail, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website / Landing Page",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage =
      `*Olá Mateus! Tenho interesse em um projeto.*\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `✉️ *E-mail:* ${formData.email}\n` +
      `📁 *Tipo de Projeto:* ${formData.projectType}\n\n` +
      `💬 *Detalhes do Projeto:*\n${formData.message}`;

    const whatsappUrl = `https://wa.me/5541992666567?text=${encodeURIComponent(formattedMessage)}`;

    window.open(whatsappUrl, "_blank");

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", projectType: "Website / Landing Page", message: "" });
    }, 4000);
  };

  const whatsappMessage = encodeURIComponent(
    "Olá Mateus! Vi seu portfólio online e gostaria de conversar sobre um novo projeto."
  );

  return (
    <section id="contato" className="relative py-28 px-6 sm:px-12 lg:px-20 z-10">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-green-400 font-mono text-sm tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Vamos Conversar
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Pronto para transformar sua ideia em um projeto de alto nível?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Entre em contato direto pelo WhatsApp ou envie uma mensagem abaixo para orçamentos e parcerias.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Direct WhatsApp & Social Links */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* WhatsApp Big Card */}
            <div className="glass-card rounded-3xl p-8 border border-green-500/40 relative overflow-hidden space-y-6">
              <div className="p-3.5 rounded-2xl bg-green-950/80 border border-green-500/30 w-fit">
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white">Contato Direto no WhatsApp</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  A forma mais rápida de falar comigo sobre o seu projeto ou tirar dúvidas.
                </p>
              </div>

              <a
                href={`https://wa.me/5541992666567?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn-primary w-full justify-center py-4 text-base font-bold shadow-lg"
              >
                <span>Falar no WhatsApp Agora</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>

            {/* Social & Email Cards */}
            <div className="space-y-4">
              <a
                href="https://github.com/MattVell"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-4 border border-white/10 flex items-center justify-between hover:border-green-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 group-hover:text-green-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">GitHub</h4>
                    <p className="text-xs text-gray-400 font-mono">@MattVell</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
              </a>

              <a
                href="mailto:mateusleitemazzardoveloso@gmail.com"
                className="glass-card rounded-2xl p-4 border border-white/10 flex items-center justify-between hover:border-green-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gray-900 border border-white/10 text-gray-300 group-hover:text-green-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">E-mail Profissional</h4>
                    <p className="text-xs text-gray-400 font-mono">mateusleitemazzardoveloso@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-green-400" />
              </a>
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-8 border border-white/10 space-y-6">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Envie uma mensagem
            </h3>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-green-950/60 border border-green-500/40 text-center space-y-3 animate-in fade-in duration-300">
                <CheckCircle2 className="w-12 h-12 text-green-400 mx-auto" />
                <h4 className="text-xl font-bold text-white">Mensagem Enviada!</h4>
                <p className="text-gray-300 text-sm">
                  Obrigado pelo contato. Responderei o mais breve possível!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Seu Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500/80 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-300">Seu E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="joao@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500/80 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Tipo de Projeto</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white text-sm focus:outline-none focus:border-green-500/80 transition-colors"
                  >
                    <option value="Website / Landing Page">Website / Landing Page</option>
                    <option value="E-Commerce / Vitrine">E-Commerce / Vitrine de Produtos</option>
                    <option value="Web App / SaaS">Web Application / SaaS</option>
                    <option value="UI/UX Redesign">UI/UX Redesign</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-gray-300">Detalhes do Projeto</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte um pouco sobre suas ideias, objetivos ou prazos desejados..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-950/80 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-green-500/80 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="neon-btn-primary w-full justify-center py-3.5 text-base"
                >
                  <span>Enviar Mensagem</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="pt-16 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono">
          <div>
            © {new Date().getFullYear()} Mateus Veloso. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Código Limpo &amp; Design Impecável
            </span>
            <a href="#" className="hover:text-green-400 transition-colors">
              Voltar ao Topo ↑
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
