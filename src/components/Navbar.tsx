"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { personalInfo } from "@/data/portfolio";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code2, 
  Sparkles, 
  Briefcase, 
  FileText, 
  Send,
  Layers
} from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "/#about", icon: Sparkles },
    { name: "Skill", href: "/#skills", icon: Layers },
    { name: "Proyek", href: "/#projects", icon: Code2 },
    { name: "Pengalaman", href: "/#experience", icon: Briefcase },
    { name: "Blog", href: "/#blog", icon: FileText },
    { name: "Kontak", href: "/#contact", icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 dark:bg-[#070b14]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-lg">
                  AP
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {personalInfo.name}
                </span>
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Tersedia untuk proyek baru" />
              </div>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">Full-Stack Dev</p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-slate-900/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Theme Toggle & CTA */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle tema gelap / terang"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-white/10 text-slate-300 hover:text-white transition-all backdrop-blur-md"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-300 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* CTA Button */}
            <a
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Konsultasi Proyek</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Buka menu navigasi"
              className="md:hidden p-2.5 rounded-xl border border-white/10 bg-slate-900/50 text-slate-300 hover:text-white backdrop-blur-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur-2xl shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
              <div className="pt-2 border-t border-white/10 mt-2">
                <a
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-lg shadow-cyan-500/30"
                >
                  <span>Konsultasi Proyek</span>
                  <Sparkles className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

