"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { blogPostsData } from "@/data/portfolio";
import { 
  FileText, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  Search,
  BookOpen
} from "lucide-react";

export default function BlogSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPostsData.filter(
      (post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Wawasan & Tulisan</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
              Artikel & <span className="gradient-text">Catatan Teknis</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Berbagi pengalaman praktis, arsitektur web modern, kiat performa, dan filosofi desain UI/UX.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari judul artikel / tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-900/50 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 backdrop-blur-md transition-all"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 group transition-all duration-300"
            >
              <div className="p-6 sm:p-7">
                {/* Meta details: Category, Date, Read Time */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishedAt}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block group-hover:text-cyan-400 transition-colors">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {post.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/5 border border-white/10 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Footer: Author & Read CTA */}
              <div className="px-6 sm:px-7 py-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-white/20"
                  />
                  <span className="text-xs font-medium text-slate-300">{post.author.name}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 transition-all group-hover:translate-x-1"
                >
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl border border-white/10 max-w-md mx-auto">
            <BookOpen className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h4 className="text-base font-semibold text-slate-300 mb-1">
              Artikel tidak ditemukan
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              Tidak ada artikel yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 rounded-xl text-xs font-medium text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all"
            >
              Tampilkan Semua Artikel
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

