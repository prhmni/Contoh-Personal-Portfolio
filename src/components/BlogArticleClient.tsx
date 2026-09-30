"use client";

import React, { useState } from "react";
import { BlogPost, personalInfo } from "@/data/portfolio";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Check, 
  Copy, 
  BookOpen, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { XTwitterIcon, LinkedinIcon } from "@/components/Icons";
import Link from "next/link";

interface BlogArticleClientProps {
  post: BlogPost;
  otherPosts: BlogPost[];
}

export default function BlogArticleClient({ post, otherPosts }: BlogArticleClientProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Back Navigation */}
      <Link
        href="/#blog"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white glass-pill hover:bg-white/10 transition-all mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Kembali ke Portofolio</span>
      </Link>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 pb-8 border-b border-white/10">
          {post.summary}
        </p>

        {/* Author & Share Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500/40"
            />
            <div>
              <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-300 glass-pill hover:bg-white/10 hover:text-white transition-all"
              title="Salin tautan artikel"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Link</span>
                </>
              )}
            </button>

            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 glass-pill hover:bg-white/10 hover:text-cyan-400 transition-all"
              title="Share ke X"
            >
              <XTwitterIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 glass-pill hover:bg-white/10 hover:text-cyan-400 transition-all"
              title="Share ke LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Article Body Content */}
      <article className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 mb-16 leading-relaxed">
        <div className="space-y-6 text-slate-300 text-sm sm:text-base">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("### ")) {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-bold text-white pt-4 pb-1">
                  {trimmed.replace("### ", "")}
                </h2>
              );
            }

            if (trimmed.startsWith("#### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-cyan-400 pt-3 pb-1">
                  {trimmed.replace("#### ", "")}
                </h3>
              );
            }

            if (trimmed.startsWith("```")) {
              const lines = trimmed.split("\n");
              const lang = lines[0].replace("```", "") || "code";
              const codeBody = lines.slice(1, -1).join("\n");
              return (
                <div key={idx} className="my-5 rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-slate-900/60 text-xs font-mono text-slate-400">
                    <span>{lang}</span>
                    <span>Snippet</span>
                  </div>
                  <pre className="p-4 text-xs sm:text-sm font-mono text-cyan-300 overflow-x-auto">
                    <code>{codeBody}</code>
                  </pre>
                </div>
              );
            }

            if (trimmed.startsWith("1. ") || trimmed.startsWith("- ")) {
              const listItems = trimmed.split("\n");
              return (
                <ul key={idx} className="space-y-2 pl-4 list-disc marker:text-cyan-400">
                  {listItems.map((li, lIdx) => (
                    <li key={lIdx} className="text-slate-300 leading-relaxed">
                      {li.replace(/^\d+\.\s+|^-\s+/, "")}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={idx} className="leading-relaxed text-slate-300 font-normal">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Article Tags */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center gap-2">
          <span className="text-xs uppercase font-mono text-slate-400 mr-2">Topik Terkait:</span>
          {post.tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cyan-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {/* Author Card Box */}
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-16">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-500/40 shadow-lg"
        />
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <h4 className="text-lg font-bold text-white">{post.author.name}</h4>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <p className="text-xs text-cyan-400 font-mono mb-2">{personalInfo.title}</p>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            {personalInfo.bio}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
          >
            <span>Tertarik berkolaborasi? Diskusikan ide Anda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Related Articles */}
      {otherPosts.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Artikel Menarik Lainnya</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPosts.slice(0, 2).map((other) => (
              <Link
                key={other.id}
                href={`/blog/${other.slug}`}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/40 group transition-all"
              >
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3 inline-block">
                  {other.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 leading-snug">
                  {other.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mb-4">
                  {other.summary}
                </p>
                <div className="flex items-center gap-1 text-xs font-semibold text-cyan-400">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

