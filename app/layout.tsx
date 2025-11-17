import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FuturoFit – Seu guia para o futuro do trabalho",
  description:
    "Plataforma integrada que ajuda profissionais a se prepararem para o futuro do trabalho, com trilhas, tarefas e progresso sincronizados entre web e mobile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="h-full bg-slate-950 text-slate-100">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          flex flex-col 
          focus:outline-none
        `}
      >
        {/* 🔊 Região de mensagens importantes para leitores de tela */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        ></div>

        {/* 🎯 Conteúdo principal acessível */}
        <main role="main" className="flex-1">
          {children}
        </main>

        {/* 📌 Footer semântico */}
        <footer
          role="contentinfo"
          className="w-full py-6 text-center text-sm text-slate-400"
        >
          © {new Date().getFullYear()} FuturoFit — Preparando você para o futuro do trabalho.
        </footer>
      </body>
    </html>
  );
}
