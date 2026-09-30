"use client";

import React from "react";
import Link from "next/link";
import { personalInfo } from "@/data/portfolio";
import { 
  Mail, 
  ArrowUp, 
  Heart, 
  Sparkles 
} from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  XTwitterIcon 
} from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Tentang", href: "/#about" },
    { name: "Skill", href: "/#skills" },
    { name: "Proyek", href: "/#projects" },
    { name: "Pengalaman", href: "/#experience" },
    { name: "Blog", href: "/#blog" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 backdrop-blur-xl relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer: Brand, Navigation, Socials */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg">
                    IH
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight">
                  {personalInfo.name}
                </span>
                <p className="text-xs text-slate-400 font-mono">{personalInfo.title}</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed mb-6">
              Membangun produk digital modern yang cepat, elegan, dan berorientasi pada kepuasan pengguna. Tersedia untuk proyek freelance dan pekerjaan full-time.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Email"
                className="p-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-4">
              Navigasi Cepat
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Back to top & Tech stack summary */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between h-full">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white transition-all shadow-sm group mb-6"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="text-left md:text-right">
              <span className="text-[11px] font-mono text-slate-400 block mb-1">
                Dibuat dengan:
              </span>
              <span className="text-xs font-semibold text-slate-300">
                Next.js 16 • Tailwind CSS • TypeScript
              </span>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {new Date().getFullYear()} {personalInfo.name}. Seluruh hak cipta dilindungi.</p>
          <div className="flex items-center gap-1.5">
            <span>Didesain dengan gaya</span>
            <span className="text-cyan-400 font-medium">Dark Glassmorphism</span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

      </div>
    </footer>
  );
}
