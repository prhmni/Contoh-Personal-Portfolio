"use client";

import React, { useState, useMemo } from "react";
import { skillsData, Skill } from "@/data/portfolio";
import { 
  Layers, 
  Search, 
  Check, 
  Cpu, 
  Database, 
  Palette, 
  Server, 
  Sparkles,
  Zap
} from "lucide-react";

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { label: "Semua", icon: Layers },
    { label: "Frontend", icon: Palette },
    { label: "Backend", icon: Server },
    { label: "Database & Cloud", icon: Database },
    { label: "Tools & Design", icon: Cpu },
  ];

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory =
        selectedCategory === "Semua" || skill.category === selectedCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Keahlian & Teknologi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Tech Stack & <span className="gradient-text">Spesialisasi Modern</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Teknologi andalan yang saya gunakan sehari-hari untuk menghadirkan web aplikasi berkinerja tinggi, aman, dan siap pakai.
          </p>
        </div>

        {/* Filter Controls: Categories & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.label;
              return (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20 scale-105"
                      : "glass-pill text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari keahlian (mis: React, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 backdrop-blur-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 group relative overflow-hidden transition-all duration-300"
            >
              {/* Top Row: Name, Exp, Category */}
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <h4 className="font-bold text-base text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {skill.category}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 whitespace-nowrap">
                  {skill.experience}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-400 mb-4 line-clamp-2 leading-relaxed">
                {skill.description}
              </p>

              {/* Progress Bar & Percentage */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1.5">
                  <span className="text-[11px] text-slate-300">Kemahiran</span>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-700 ease-out group-hover:brightness-125"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>

              {/* Subtle hover corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none group-hover:from-cyan-500/25 transition-all" />
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/10 max-w-md mx-auto">
            <Zap className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-300 mb-1">
              Tidak ada skill yang cocok
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Coba gunakan kata kunci pencarian yang lain.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
              className="px-4 py-2 rounded-xl text-xs font-medium text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

