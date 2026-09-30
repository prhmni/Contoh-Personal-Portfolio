"use client";

import React, { useState } from "react";
import { personalInfo, experienceData } from "@/data/portfolio";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  CheckCircle 
} from "lucide-react";

export default function AboutTimeline() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const educationData = [
    {
      period: "2017 - 2021",
      degree: "Sarjana Komputer (S.Kom) - Teknik Informatika",
      institution: "Universitas Indonesia / Institut Teknologi",
      location: "Indonesia",
      description: [
        "Fokus peminatan pada Software Engineering, Algoritma Struktur Data, dan Cloud Computing.",
        "Lulus dengan predikat Sangat Memuaskan (IPK 3.82/4.00).",
        "Juara 2 National Hackathon Web Innovation Challenge 2020."
      ],
      badges: ["Software Engineering", "Algorithms", "Database Systems", "Cloud Computing"]
    },
    {
      period: "2023 - 2024",
      degree: "Professional Cloud Developer Certification",
      institution: "Google Cloud / AWS Certified Developer",
      location: "Sertifikasi Internasional",
      description: [
        "Penguasaan deployment container Docker, Kubernetes orchestration, dan Serverless architecture.",
        "Best practices keamanan API, IAM Roles, dan implementasi automated CI/CD pipeline."
      ],
      badges: ["GCP", "AWS", "Docker", "DevOps"]
    }
  ];

  const philosophies = [
    {
      icon: Zap,
      title: "Performa Cepat & Efisien",
      desc: "Setiap baris kode dioptimalkan untuk load time kilat, bundle size minimal, dan skor Core Web Vitals 95+."
    },
    {
      icon: Sparkles,
      title: "Estetika & Sensibilitas UI/UX",
      desc: "Desain yang memukau bukan hanya terlihat bagus, tetapi terasa intuitif, responsif, dan mudah diakses siapa saja."
    },
    {
      icon: ShieldCheck,
      title: "Clean Code & Reliability",
      desc: "Menulis kode yang mudah dirawat (maintainable), modular, didukung type-safety TypeScript dan automated test."
    },
    {
      icon: Cpu,
      title: "Solusi Skalabilitas Modern",
      desc: "Membangun arsitektur full-stack yang siap tumbuh dari ratusan pengguna hingga jutaan request tanpa bottleneck."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya & Karir</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Membangun Solusi Digital dengan <span className="gradient-text">Presisi & Dedikasi</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Kombinasi antara logika rekayasa perangkat lunak yang tangguh dan estetika desain modern.
          </p>
        </div>

        {/* Bio Card & Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Siapa saya?
              </h3>
              <p className="text-slate-300 leading-relaxed text-base mb-6 font-normal">
                {personalInfo.bio}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Saya percaya bahwa sebuah aplikasi web yang sukses adalah pertemuan harmonis antara performa mesin yang tangguh dan kenyamanan interaksi pengguna. Baik dalam mengembangkan produk dari nol (zero-to-one) maupun meningkatkan skala arsitektur eksisting, saya mendedikasikan standar kualitas tinggi untuk setiap solusi yang dihasilkan.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-medium">Aktif Menerima Tawaran Proyek</span>
              </div>
            </div>
          </div>

          {/* Core Values 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {philosophies.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all flex items-start gap-4"
                >
                  <div className="p-3 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 border border-white/10 text-cyan-400 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Timeline Section: Experience vs Education */}
        <div className="max-w-4xl mx-auto">
          
          {/* Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "experience"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Pengalaman Kerja</span>
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === "education"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Pendidikan & Sertifikasi</span>
              </button>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-white/10 space-y-12">
            
            {activeTab === "experience" ? (
              experienceData.map((exp, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:border-purple-400 transition-all shadow-md shadow-cyan-500/30">
                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-cyan-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {exp.role}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-4">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {exp.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              educationData.map((edu, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-slate-950 border-2 border-purple-400 group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-md shadow-purple-500/30">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                  </div>

                  {/* Card Content */}
                  <div className="glass-card p-6 sm:p-7 rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 mb-4">
                      <span className="font-semibold text-slate-200">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {edu.description.map((desc, dIdx) => (
                        <li key={dIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                      {edu.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

