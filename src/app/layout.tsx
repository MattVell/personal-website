import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mateus Veloso | UI Specialist & Web Developer",
  description:
    "Portfólio & Repertório Profissional de Mateus Veloso. Desenvolvedor especialista em aplicações web modernas, interfaces responsivas de alto nível, Amanda Modas e sistemas interativos.",
  keywords: [
    "Mateus Veloso",
    "UI Specialist",
    "Desenvolvedor Frontend",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Amanda Modas",
    "Web Developer",
    "Portfólio",
  ],
  authors: [{ name: "Mateus Veloso" }],
  openGraph: {
    title: "Mateus Veloso | UI Specialist & Web Developer",
    description:
      "Criando experiências digitais com código limpo & design impecável. Confira projetos como Amanda Modas e outros web apps de alto nível.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#060709] text-gray-100 font-sans antialiased selection:bg-green-500/30 selection:text-white min-h-screen flex flex-col relative"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
