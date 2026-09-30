"use client";

import React from "react";
import { testimonialsData } from "@/data/portfolio";
import { Sparkles, Quote, Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Testimoni Klien & Rekan</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Apa Kata Mereka Tentang <span className="gradient-text">Kolaborasi</span>
          </h2>
          <p className="text-slate-400 text-base">
            Kepercayaan dan kepuasan klien adalah prioritas utama dalam setiap baris kode yang dibangun.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-cyan-500/30 transition-all relative overflow-hidden"
            >
              <div>
                {/* 5-star rating & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-cyan-500/20" />
                </div>

                {/* Review Text */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/10">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/30 shadow-md"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400">
                    {item.role}, <span className="text-cyan-400">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

