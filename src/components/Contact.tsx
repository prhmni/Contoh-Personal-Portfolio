"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { personalInfo, faqData } from "@/data/portfolio";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  ChevronDown, 
  ExternalLink,
  Clock
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Pembuatan Website / Web App",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleCopyEmail = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call & trigger confetti
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#06b6d4", "#8b5cf6", "#10b981", "#38bdf8"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "Pembuatan Website / Web App",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Mulai Kolaborasi</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Punya Ide Proyek? <span className="gradient-text">Mari Wujudkan Bersama</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Saya selalu antusias berdiskusi mengenai proyek baru, ide inovatif, maupun peluang kolaborasi teknis.
          </p>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Status Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Informasi Kontak Langsung</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Silakan hubungi melalui kanal preferensi Anda. Saya biasanya merespons dalam kurun waktu kurang dari 24 jam.
              </p>

              <div className="space-y-4">
                {/* Email card with copy button */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">Email Pribadi</div>
                      <div className="text-sm font-semibold text-white">{personalInfo.email}</div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl text-slate-300 hover:text-white glass-pill hover:bg-white/10 transition-all"
                    title="Salin email"
                  >
                    {emailCopied ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* WhatsApp Direct */}
                <a
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-500/40 flex items-center justify-between gap-3 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-slate-400 font-mono">WhatsApp Bisnis</div>
                      <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {personalInfo.phone}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Domisili</div>
                    <div className="text-sm font-semibold text-white">{personalInfo.location}</div>
                  </div>
                </div>

                {/* Availability Hours */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 font-mono">Waktu Kerja</div>
                    <div className="text-sm font-semibold text-white">Senin - Sabtu (09:00 - 20:00 WIB)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guaranteed Quality Badge */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-xs text-slate-300 flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
              <span>
                Jaminan garansi perbaikan bug gratis hingga 30 hari pasca peluncuran resmi proyek Anda.
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-white/10 relative">
              
              <h3 className="text-2xl font-bold text-white mb-2">Kirim Pesan / Brief Proyek</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Isi formulir di bawah ini untuk konsultasi gratis atau memulai proyek baru.
              </p>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/30 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Pesan Berhasil Terkirim!</h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Terima kasih telah menghubungi saya. Brief Anda telah tersimpan dan saya akan segera membalas ke email Anda dalam kurun waktu 1x24 jam.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 shadow-md hover:scale-105 transition-all"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Nama Lengkap <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Budi Santoso"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Alamat Email <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="emailanda@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Kebutuhan / Jenis Layanan
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-900/60 border border-white/10 text-white focus:outline-none focus:border-cyan-500 transition-all"
                    >
                      <option value="Pembuatan Website / Web App" className="bg-slate-900">
                        Pembuatan Website / Web App Baru
                      </option>
                      <option value="SaaS & Full-Stack Platform" className="bg-slate-900">
                        SaaS & Full-Stack Platform
                      </option>
                      <option value="UI/UX & Frontend Modern" className="bg-slate-900">
                        UI/UX & Frontend Redesign
                      </option>
                      <option value="Optimasi Performa Web & SEO" className="bg-slate-900">
                        Optimasi Performa & Core Web Vitals
                      </option>
                      <option value="Tawaran Pekerjaan Full-Time / Kontrak" className="bg-slate-900">
                        Peluang Kerja Full-Time / Kontrak
                      </option>
                      <option value="Lainnya" className="bg-slate-900">
                        Lainnya
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Pesan atau Deskripsi Proyek <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Jelaskan kebutuhan proyek, target jadwal pengerjaan, atau pertanyaan yang ingin Anda diskusikan..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-slate-900/60 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-sky-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-xl shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Mengirim Pesan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Pesan Sekarang</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Pertanyaan Umum (FAQ)</h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Jawaban cepat untuk hal-hal yang sering ditanyakan sebelum memulai proyek bersama.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="text-sm font-semibold text-slate-200">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-white/5 mt-1">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

