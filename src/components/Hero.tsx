"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { 
  ArrowRight, 
  Download, 
  Mail, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Code
} from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  InstagramIcon, 
  XTwitterIcon 
} from "@/components/Icons";

export default function Hero() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
    // Simulating download or open CV
    const link = document.createElement("a");
    link.href = "#";
    link.setAttribute("download", "CV_Ipar_Hamni.pdf");
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute top-1/3 -right-20 w-[420px] h-[420px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none animate-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle tech grid background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-emerald-300">
              {personalInfo.availability}
            </span>
          </div>

          {/* Main Title & Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="block text-slate-100 mb-2">
              Halo, Saya <span className="gradient-text">{personalInfo.name}</span>
            </span>
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-300">
              {personalInfo.title}
            </span>
          </h1>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            {personalInfo.tagline}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 w-full sm:w-auto">
            {/* Primary Action */}
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Lihat Portofolio</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Secondary Action: Contact */}
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm sm:text-base font-semibold text-slate-200 border border-white/10 bg-slate-900/60 hover:bg-white/10 hover:border-white/20 backdrop-blur-md shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hubungi Saya</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </a>

            {/* Resume Download Action */}
            <button
              onClick={handleDownloadCV}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm sm:text-base font-medium text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">CV Terunduh!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Unduh CV</span>
                </>
              )}
            </button>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center justify-center gap-3 mb-14">
            <span className="text-xs uppercase tracking-wider text-slate-300 font-mono mr-1">Social:</span>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <XTwitterIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Send Email"
              className="p-2.5 rounded-xl border border-white/10 bg-slate-900/40 hover:bg-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all hover:scale-110"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Metrics & Stats Cards */}
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col items-center justify-center border border-white/10 hover:border-cyan-500/30 transition-all"
              >
                <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
