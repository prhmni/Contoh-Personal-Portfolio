"use client";

import React, { useState, useMemo } from "react";
import { projectsData, Project } from "@/data/portfolio";
import { 
  Code2, 
  ExternalLink, 
  Sparkles, 
  Search, 
  X, 
  Layers, 
  CheckCircle2, 
  TrendingUp,
  Eye
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ["Semua", "Full-Stack", "Frontend", "Backend", "UI/UX"];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((proj) => {
      const matchesCat =
        selectedCategory === "Semua" || proj.category === selectedCategory;
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Karya & Portofolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Proyek Pilihan & <span className="gradient-text">Studi Kasus</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Aplikasi nyata yang dibangun dengan fokus pada arsitektur scalable, performa tinggi, dan pengalaman pengguna yang memuaskan.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                    : "glass-pill text-slate-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari proyek atau teknologi..."
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col group hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Project Image & Overlay */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category & Featured Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-purple-500/20 backdrop-blur-md text-purple-300 border border-purple-500/30 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Quick Detail View Trigger on Image */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md text-slate-300 hover:text-cyan-400 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-200"
                  title="Lihat Detail Arsitektur"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {project.metrics && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-medium mb-2.5">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>{project.metrics}</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-2.5 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                  >
                    <span>Detail Studi Kasus</span>
                    <Sparkles className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
                        title="Source Code GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500 hover:to-purple-500 text-white transition-all shadow-sm"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/10 max-w-md mx-auto">
            <Code2 className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-300 mb-1">
              Tidak ada proyek yang sesuai
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Coba cari dengan kata kunci lain atau pilih kategori Semua.
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

      {/* Detail Project Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="glass-panel max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all z-10"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 bg-slate-900 border border-white/10">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 backdrop-blur-md">
                  {activeModalProject.category}
                </span>
              </div>
            </div>

            {/* Title & Metrics */}
            <div className="mb-4">
              {activeModalProject.metrics && (
                <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{activeModalProject.metrics}</span>
                </div>
              )}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Detailed Description */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
                Ringkasan Proyek
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeModalProject.longDescription}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Sorotan Arsitektur & Fitur Utama
              </h4>
              <div className="space-y-2.5">
                {activeModalProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono mb-3">
                Teknologi yang Digunakan
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {activeModalProject.demoUrl && (
                  <a
                    href={activeModalProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 transition-all"
                  >
                    <span>Kunjungi Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 border border-white/10 bg-slate-900/60 hover:bg-white/10 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Lihat Repository</span>
                  </a>
                )}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="text-xs text-slate-400 hover:text-white px-3 py-2"
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
