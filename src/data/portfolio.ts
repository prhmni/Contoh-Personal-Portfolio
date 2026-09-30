export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  category: 'Full-Stack' | 'Frontend' | 'Backend' | 'UI/UX';
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database & Cloud' | 'Tools & Design';
  level: number; // 1-100
  icon: string;
  experience: string;
  description: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  publishedAt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
}

export const personalInfo = {
  name: "Alex Pratama",
  title: "Full-Stack Developer & UI/UX Craftsman",
  tagline: "Membangun produk digital yang cepat, scalable, dan berorientasi pada pengalaman pengguna yang memikat.",
  location: "Jakarta, Indonesia (WIB / UTC+7)",
  availability: "Tersedia untuk Pekerjaan Full-Time & Freelance",
  availableForHire: true,
  email: "alexpratama.dev@gmail.com",
  phone: "+62 812-3456-7890",
  whatsapp: "https://wa.me/6281234567890",
  bio: "Software engineer dengan pengalaman lebih dari 4 tahun dalam merancang dan mengembangkan aplikasi web modern dari hulu ke hilir. Berfokus pada arsitektur performa tinggi, UI/UX berstandar industri dengan estetika glassmorphism, dan integrasi API yang aman.",
  stats: [
    { label: "Tahun Pengalaman", value: "4+" },
    { label: "Proyek Selesai", value: "30+" },
    { label: "Klien Puas", value: "100%" },
    { label: "Kontribusi GitHub", value: "1.2k+" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    instagram: "https://instagram.com",
    email: "mailto:alexpratama.dev@gmail.com",
  },
  resumeUrl: "#",
};

export const skillsData: Skill[] = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 95, icon: "React", experience: "4 tahun", description: "Hooks, Context, State Management, Server Components" },
  { name: "Next.js (App Router)", category: "Frontend", level: 92, icon: "Nextjs", experience: "3 tahun", description: "SSR, SSG, Turbopack, Server Actions, Route Handlers" },
  { name: "TypeScript", category: "Frontend", level: 90, icon: "TypeScript", experience: "3 tahun", description: "Type Safety, Generics, Interfaces, Strict Linting" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, icon: "Tailwind", experience: "4 tahun", description: "Custom Theme, JIT, Glassmorphism, Responsive Utility" },
  { name: "Vue.js / Nuxt", category: "Frontend", level: 80, icon: "Vue", experience: "2 tahun", description: "Composition API, Pinia, Single File Components" },
  { name: "HTML5 / Modern CSS", category: "Frontend", level: 98, icon: "Html", experience: "5 tahun", description: "Semantic markup, CSS Grid, Flexbox, Keyframe Animations" },

  // Backend
  { name: "Node.js & Express", category: "Backend", level: 88, icon: "Node", experience: "4 tahun", description: "REST APIs, Middleware, JWT Auth, Microservices" },
  { name: "Next.js API Routes", category: "Backend", level: 90, icon: "Api", experience: "3 tahun", description: "Full-stack edge functions, webhooks & DB connectors" },
  { name: "Python & FastAPI", category: "Backend", level: 78, icon: "Python", experience: "2 tahun", description: "Async RESTful service, Data handling, AI wrapper" },
  { name: "GraphQL & REST", category: "Backend", level: 85, icon: "Graphql", experience: "3 tahun", description: "Schema design, Query optimization, Apollo client" },

  // Database & Cloud
  { name: "PostgreSQL & Prisma", category: "Database & Cloud", level: 88, icon: "Postgres", experience: "3 tahun", description: "Relational Schema, Indexing, ORM Migrations" },
  { name: "MongoDB & Mongoose", category: "Database & Cloud", level: 85, icon: "Mongo", experience: "3 tahun", description: "Document DB, Aggregation Pipeline, Caching" },
  { name: "Supabase & Firebase", category: "Database & Cloud", level: 87, icon: "Supabase", experience: "2 tahun", description: "Auth, Realtime subscriptions, Cloud Storage, RLS" },
  { name: "Docker & Container", category: "Database & Cloud", level: 80, icon: "Docker", experience: "2 tahun", description: "Containerization, Multi-stage builds, Compose" },

  // Tools & Design
  { name: "Git & GitHub CI/CD", category: "Tools & Design", level: 92, icon: "Git", experience: "4 tahun", description: "Branching workflows, GitHub Actions, Pull Requests" },
  { name: "Figma & UI/UX", category: "Tools & Design", level: 85, icon: "Figma", experience: "3 tahun", description: "Design systems, Wireframing, High-fidelity prototype" },
  { name: "Vercel & Netlify", category: "Tools & Design", level: 95, icon: "Cloud", experience: "3 tahun", description: "Zero-config deployment, Edge Middleware, Analytics" },
  { name: "Postman & Swagger", category: "Tools & Design", level: 90, icon: "Postman", experience: "4 tahun", description: "API documentation, Automation testing, Mock servers" },
];

export const projectsData: Project[] = [
  {
    id: "nexus-analytics",
    slug: "nexus-analytics",
    title: "Nexus Enterprise SaaS Analytics",
    description: "Platform analitik bisnis realtime dengan visualisasi data interaktif, manajemen tim, dan export laporan otomatis.",
    longDescription: "Nexus Analytics dirancang untuk membantu startup dan UMKM memantau performa penjualan, churn rate, dan metrik keuangan harian secara real-time. Dilengkapi dengan widget grafik interaktif, filter multi-dimensi, ekspor PDF/Excel sekali klik, dan sistem peran pengguna berbasis granular permissions.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Chart.js"],
    demoUrl: "https://example.com/demo/nexus",
    githubUrl: "https://github.com/example/nexus-analytics",
    featured: true,
    metrics: "+42% Efisiensi Pengambilan Keputusan",
    highlights: [
      "Arsitektur Server Components & Client Widgets dengan load time di bawah 0.8 detik",
      "Sistem otentikasi multi-tenant dengan JWT & Role-Based Access Control (RBAC)",
      "Ekspor laporan otomatis terjadwal via email dan webhook Slack",
      "Dashboard responsive dengan mode gelap penuh dan kartu glassmorphism"
    ]
  },
  {
    id: "luxe-ecommerce",
    slug: "luxe-ecommerce",
    title: "Luxe Fashion & Lifestyle E-Commerce",
    description: "Toko online modern headless e-commerce dengan checkout instan, filter multi-atribut, dan integrasi payment gateway Midtrans.",
    longDescription: "Aplikasi e-commerce berkecepatan tinggi dengan antarmuka belanja yang mulus. Menggunakan arsitektur headless untuk memastikan katalog produk bermuatan ribuan item tetap responsif dengan pencarian instan dan rekomendasi pintar.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "Zustand", "Tailwind CSS", "Midtrans", "Supabase", "Stripe"],
    demoUrl: "https://example.com/demo/luxe",
    githubUrl: "https://github.com/example/luxe-ecommerce",
    featured: true,
    metrics: "99.8% Uptime & 2.1x Konversi Checkout",
    highlights: [
      "Integrasi Payment Gateway Midtrans (QRIS, Virtual Account, Credit Card)",
      "State management keranjang belanja persist dan sinkronisasi realtime",
      "Pencarian produk instan berbasis fuzzy search tanpa reload halaman",
      "Optimasi SEO terstruktur dengan schema JSON-LD untuk produk Google Shopping"
    ]
  },
  {
    id: "craft-ui-library",
    slug: "craft-ui-library",
    title: "CraftUI Glassmorphism Component Kit",
    description: "Koleksi komponen UI open-source bergaya glassmorphism dan dark tech modern siap pakai untuk React & Tailwind CSS.",
    longDescription: "Library komponen UI yang dirancang khusus untuk pengembang yang menginginkan estetika modern dengan efek kaca (glassmorphism), neon borders, dan micro-interactions halus. Telah diunduh lebih dari 15.000 kali oleh komunitas open-source.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "Tailwind CSS", "Storybook", "TypeScript", "NPM Package"],
    demoUrl: "https://example.com/demo/craft-ui",
    githubUrl: "https://github.com/example/craft-ui",
    featured: true,
    metrics: "15k+ Download di NPM & 800+ Bintang GitHub",
    highlights: [
      "Lebih dari 40+ komponen siap pakai (Button, Card, Modal, Dropdown, Table)",
      "Mendukung Dark Mode native dan kustomisasi variabel tema CSS",
      "Aksesibilitas penuh berstandar WAI-ARIA dan navigasi keyboard",
      "Dokumentasi interaktif langsung dengan live code preview"
    ]
  },
  {
    id: "ai-prompt-studio",
    slug: "ai-prompt-studio",
    title: "OmniAI Prompt Engineering Studio",
    description: "Aplikasi produktivitas untuk menyusun, menguji, dan mengoptimalkan prompt LLM dengan perbandingan model secara side-by-side.",
    longDescription: "Platform kolaboratif bagi para kreator dan developer AI untuk bereksperimen dengan berbagai model AI terkemuka. Pengguna dapat menguji variasi prompt, membandingkan latency dan token cost, serta menyimpan template prompt favorit ke dalam workspace tim.",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    tags: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB", "Streaming API"],
    demoUrl: "https://example.com/demo/omniai",
    githubUrl: "https://github.com/example/omniai-studio",
    featured: false,
    metrics: "5,000+ Prompt Tergenerate Tiap Hari",
    highlights: [
      "Streaming response real-time berbasis Server-Sent Events (SSE)",
      "Kalkulator estimasi biaya token dan perbandingan efisiensi model",
      "Fitur versioning prompt dengan riwayat perubahan komprehensif",
      "Export kode integrasi langsung ke Python, cURL, dan JavaScript"
    ]
  },
  {
    id: "zenith-task-manager",
    slug: "zenith-task-manager",
    title: "Zenith Agile Kanban & Sprint Board",
    description: "Manajemen proyek agile kolaboratif dengan drag-and-drop intuitif, visualisasi roadmap, dan integrasi notifikasi real-time.",
    longDescription: "Sistem manajemen alur kerja tim modern yang menggabungkan kemudahan Kanban board dengan kekuatan pelacakan sprint scrum. Dilengkapi dengan estimasi story points, grafik burn-down otomatis, dan kolaborasi multi-user realtime tanpa jeda.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    tags: ["React", "dnd-kit", "Tailwind CSS", "Zustand", "Framer Motion"],
    demoUrl: "https://example.com/demo/zenith",
    githubUrl: "https://github.com/example/zenith-task",
    featured: false,
    metrics: "Drag & drop lancar 60 FPS di semua device",
    highlights: [
      "Animasi drag-and-drop mulus dengan dnd-kit dan deteksi benturan akurat",
      "Filter tiket berdasarkan prioritas, assignee, dan deadline",
      "Mode offline dengan sinkronisasi otomatis saat koneksi kembali aktif",
      "Sistem shortcut keyboard untuk produktivitas power-user"
    ]
  },
  {
    id: "fintech-wallet-api",
    slug: "fintech-wallet-api",
    title: "PayFlow Digital Wallet Core Engine",
    description: "Microservice backend arsitektur perbankan digital untuk transfer saldo, ledger transaksi ganda, dan deteksi fraud otomatis.",
    longDescription: "Engine inti dompet digital berkinerja tinggi yang menangani ribuan transaksi per detik dengan konsistensi data ACID yang ketat. Menggunakan prinsip double-entry bookkeeping untuk mencegah selisih pembukuan dan sistem audit log yang tidak dapat diubah (immutable).",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    tags: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Jest"],
    demoUrl: "https://example.com/demo/payflow",
    githubUrl: "https://github.com/example/payflow-engine",
    featured: false,
    metrics: "Menangani 2,500+ TPS dengan latency < 45ms",
    highlights: [
      "Double-entry bookkeeping ledger menjamin integritas saldo 100%",
      "Redis caching layer untuk pengecekan limit transaksi secepat kilat",
      "Rate limiting terdistribusi dan enkripsi end-to-end data transaksi",
      "Test coverage unit & integration test mencapai 94%"
    ]
  },
  {
    id: "aurora-design-system",
    slug: "aurora-design-system",
    title: "Aurora Fintech UI/UX Case Study",
    description: "Riset dan perancangan UI/UX menyeluruh untuk aplikasi investasi reksadana & obligasi bagi pengguna generasi muda.",
    longDescription: "Studi kasus desain produk digital lengkap dari tahap user research, perumusan persona, information architecture, hingga prototipe interaktif beresolusi tinggi di Figma. Berfokus pada penyederhanaan terminologi finansial yang rumit menjadi tampilan grafis yang mudah dipahami.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    tags: ["Figma", "User Research", "Wireframing", "Design System", "Prototyping"],
    demoUrl: "https://figma.com/@aurora-design-case",
    githubUrl: undefined,
    featured: false,
    metrics: "+68% Peningkatan Task Completion Rate pada Usability Test",
    highlights: [
      "User research mendalam dengan 24 responden investor pemula",
      "Design token modular untuk warna, tipografi, dan elevasi bayangan",
      "Interactive micro-prototype untuk simulasi return portofolio investasi",
      "Dokumentasi handoff desain lengkap untuk tim frontend engineer"
    ]
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "1",
    slug: "menguasai-nextjs-app-router-dan-server-components",
    title: "Menguasai Next.js App Router & Server Components di Tahun 2026",
    summary: "Panduan mendalam tentang bagaimana arsitektur React Server Components (RSC) merevolusi performa web dan bagaimana Anda memanfaatkannya secara maksimal.",
    publishedAt: "25 Sep 2026",
    readTime: "7 menit baca",
    category: "Next.js & React",
    tags: ["Next.js", "React", "Server Components", "Performance"],
    author: {
      name: "Alex Pratama",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
### Evolusi React dan App Router
Next.js App Router telah mengubah cara kita berpikir tentang pembangunan aplikasi web modern. Jika sebelumnya kita terbiasa mengirimkan seluruh bundel JavaScript ke browser pengguna, React Server Components (RSC) memungkinkan kita untuk mengeksekusi logika berat langsung di sisi server.

Hasilnya? Bundel JavaScript yang dikirim ke klien jauh lebih ramping, First Contentful Paint (FCP) yang dramatis lebih cepat, dan pengalaman pengguna yang luar biasa responsif.

#### Keuntungan Utama Server Components:
1. **Zero Client-Side JavaScript**: Komponen yang hanya merender data statis atau mengambil data dari database tidak menambahkan satu byte pun ke bundel JavaScript klien.
2. **Akses Data Langsung**: Anda dapat melakukan query database langsung di dalam komponen async tanpa perlu membuat endpoint API perantara.
3. **Keamanan Maksimal**: Token autentikasi, API keys rahasia, dan kredensial sensitif tetap aman di server dan tidak pernah bocor ke browser.

\`\`\`tsx
// Contoh Server Component sederhana
import { db } from "@/lib/db";

export default async function UserDashboard() {
  const users = await db.user.findMany({ take: 5 });

  return (
    <div className="p-6 rounded-xl bg-slate-900 border border-slate-800">
      <h2 className="text-xl font-bold text-white mb-4">Pengguna Terbaru</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="text-slate-300">
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

#### Kapan Menggunakan 'use client'?
Gunakan direktif \`'use client'\` hanya ketika komponen membutuhkan interaktivitas pengguna, seperti:
- Event listener seperti \`onClick\`, \`onChange\`, atau \`onSubmit\`
- State dan Lifecycle Hooks seperti \`useState\`, \`useEffect\`, atau \`useReducer\`
- Akses ke browser API seperti \`localStorage\`, \`window\`, atau \`navigator\`

Dengan memisahkan batasan antara server dan klien secara cermat, aplikasi Anda akan memiliki kinerja optimal di berbagai kondisi jaringan dan perangkat.
    `
  },
  {
    id: "2",
    slug: "panduan-desain-glassmorphism-modern-dengan-tailwind-css",
    title: "Membangun Antarmuka Glassmorphism Elegan dengan Tailwind CSS",
    summary: "Eksplorasi teknik menciptakan efek frosted glass yang estetik, modern, namun tetap menjaga standar kontras dan aksesibilitas.",
    publishedAt: "18 Sep 2026",
    readTime: "5 menit baca",
    category: "UI/UX & CSS",
    tags: ["CSS", "Tailwind CSS", "Glassmorphism", "Design"],
    author: {
      name: "Alex Pratama",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
### Apa itu Glassmorphism?
Glassmorphism adalah tren desain visual yang mengadopsi tampilan kaca buram (frosted glass). Karakteristik utamanya meliputi:
- Transparansi latar belakang dengan efek blur (\`backdrop-blur\`)
- Garis tepi tipis yang menyerupai pantulan cahaya pada pinggiran kaca
- Bayangan berlapis halus untuk menciptakan ilusi kedalaman ruang 3D
- Warna-warna aksen lembut atau gradien neon yang berpendar di balik kaca

#### Rumus Utama Kartu Glassmorphism di Tailwind CSS
Untuk membuat kartu kaca yang estetik di Tailwind CSS, kombinasi kelas berikut adalah fondasinya:

\`\`\`html
<div class="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-cyan-500/10">
  <div class="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-2xl"></div>
  <h3 class="relative text-lg font-semibold text-white">Kartu Kaca Futuristik</h3>
  <p class="relative mt-2 text-sm text-slate-400">Efek kedalaman yang memukau tanpa mengorbankan keterbacaan teks.</p>
</div>
\`\`\`

#### Menjaga Aksesibilitas (Contrast Ratio)
Kesalahan paling umum dalam menerapkan glassmorphism adalah membuat latar belakang terlalu transparan sehingga teks menjadi sulit dibaca ketika berada di atas elemen dinamis.

Selalu pastikan:
1. Opasitas background minimal 50% - 75% di mode gelap.
2. Gunakan warna teks dengan kontras tinggi (seperti putih solid atau slate-100).
3. Uji tampilan dengan alat WebAIM Contrast Checker untuk memenuhi standar WCAG AA.
    `
  },
  {
    id: "3",
    slug: "tips-optimasi-performa-web-core-web-vitals-skor-100",
    title: "Rahasia Meraih Skor 100 di Google Lighthouse & Core Web Vitals",
    summary: "Langkah-langkah praktis dan teruji untuk memangkas LCP, FID/INP, dan CLS hingga mendapatkan skor performa hijau sempurna.",
    publishedAt: "08 Sep 2026",
    readTime: "6 menit baca",
    category: "Web Performance",
    tags: ["Core Web Vitals", "Lighthouse", "SEO", "Performance"],
    author: {
      name: "Alex Pratama",
      role: "Full-Stack Developer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    content: `
### Mengapa Core Web Vitals Sangat Krusial?
Google secara resmi menggunakan metrik Core Web Vitals sebagai salah satu sinyal penentu peringkat SEO. Lebih dari itu, setiap 100 milidetik keterlambatan pemuatan halaman dapat menurunkan rasio konversi hingga 7%.

Tiga metrik utama yang harus Anda kuasai:
- **LCP (Largest Contentful Paint)**: Kecepatan memuat elemen konten utama (target: < 2.5s).
- **INP (Interaction to Next Paint)**: Responsivitas interaksi setelah pengguna mengetuk atau mengklik tombol (target: < 200ms).
- **CLS (Cumulative Layout Shift)**: Stabilitas visual tata letak halaman tanpa lonjakan tiba-tiba (target: < 0.1).

#### Langkah Konkret Optimasi:
1. **Optimasi Gambar Otomatis**: Gunakan format WebP atau AVIF dengan dimensi eksplisit \`width\` dan \`height\` untuk mencegah layout shift.
2. **Font Preloading**: Muat font lokal dengan CSS \`font-display: swap\` atau manfaatkan modul \`next/font\` bawaan Next.js.
3. **Penundaan Script Pihak Ketiga**: Letakkan script analitik, chat widget, atau piksel iklan dengan strategi \`lazyOnload\` agar tidak memblokir render thread utama.
    `
  }
];

export const experienceData: Experience[] = [
  {
    period: "2024 - Sekarang",
    role: "Senior Full-Stack Engineer",
    company: "TechnoNova Digital Solusindo",
    location: "Jakarta, Indonesia (Hybrid)",
    description: [
      "Memimpin perancangan dan migrasi arsitektur frontend web app perusahaan ke Next.js App Router dan Tailwind CSS, memangkas load time sebesar 45%.",
      "Mengembangkan microservice otentikasi dan pembayaran terpusat yang melayani lebih dari 150.000 transaksi bulanan.",
      "Melakukan mentoring kepada 6 junior developer dan menetapkan standar code review serta integrasi automated testing CI/CD."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    period: "2022 - 2024",
    role: "Frontend Developer",
    company: "PixelCraft Studio Indonesia",
    location: "Bandung, Indonesia (Remote)",
    description: [
      "Membangun lebih dari 15 aplikasi web interaktif, platform e-commerce, dan dashboard analitik untuk berbagai klien internasional.",
      "Mengimplementasikan sistem desain modular berbasis Figma ke komponen React yang reusable dan berstandar aksesibilitas tinggi.",
      "Meningkatkan skor performa Lighthouse dari rata-rata 62 menjadi 95+ di seluruh proyek klien."
    ],
    technologies: ["React.js", "Vue.js", "Tailwind CSS", "REST APIs", "Figma", "Jest"]
  },
  {
    period: "2021 - 2022",
    role: "Junior Web Developer",
    company: "Karya Media Kreatif",
    location: "Jakarta, Indonesia (Onsite)",
    description: [
      "Mengembangkan landing page responsif dan memelihara modul backend berbasis Node.js dan MongoDB.",
      "Berkolaborasi langsung dengan tim desainer UI/UX untuk memastikan implementasi desain pixel-perfect.",
      "Mengoptimalkan aset gambar dan script untuk memastikan kompatibilitas lintas browser."
    ],
    technologies: ["JavaScript (ES6+)", "HTML5/CSS3", "Bootstrap", "Node.js", "MongoDB", "Git"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    name: "Budi Santoso",
    role: "Chief Technology Officer",
    company: "Finora Nusantara",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Alex adalah engineer yang langka: memiliki kemampuan teknis backend yang solid sekaligus kepekaan estetika desain UI/UX yang sangat tajam. Proyek dashboard kami selesai 2 minggu lebih cepat dari jadwal!"
  },
  {
    name: "Sarah Wijaya",
    role: "Product Lead",
    company: "MarketHub Global",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content: "Kolaborasi dengan Alex sangat menyenangkan. Komunikasi proaktif, kode bersih dan terstruktur dengan rapi, serta hasil akhir yang responsif dan sangat memukau di perangkat seluler."
  },
  {
    name: "Hendrik Pratomo",
    role: "Founder & CEO",
    company: "KreativLab ID",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    content: "Website portofolio dan landing page yang dibuatkan Alex meningkatkan conversion rate calon investor kami secara signifikan. Sangat direkomendasikan!"
  }
];

export const faqData = [
  {
    question: "Berapa lama estimasi pengerjaan sebuah proyek website?",
    answer: "Tergantung pada kompleksitas fitur dan skala proyek. Untuk landing page profesional atau portofolio biasanya memakan waktu 5-10 hari kerja, sedangkan aplikasi web full-stack / SaaS memerlukan waktu 3-6 minggu."
  },
  {
    question: "Apakah website yang Anda buat dijamin responsif di semua perangkat?",
    answer: "Pasti! Semua proyek dirancang dengan pendekatan mobile-first sehingga tampil sempurna di smartphone (iOS/Android), tablet, laptop, hingga monitor desktop beresolusi tinggi."
  },
  {
    question: "Bagaimana alur kerja kolaborasi proyek baru?",
    answer: "Alur kerja meliputi: 1) Diskusi kebutuhan & tujuan proyek, 2) Estimasi waktu & kesepakatan ruang lingkup, 3) Perancangan mockup/wireframe, 4) Tahap development & integrasi, 5) Testing & revisi, 6) Peluncuran resmi (Deployment) & serah terima dokumentasi."
  },
  {
    question: "Apakah Anda menerima tawaran kerja remote / full-time?",
    answer: "Ya, saya sangat terbuka untuk peluang kerja kontrak, freelance, maupun posisi Full-Time (Remote atau Hybrid di area Jabodetabek)."
  }
];
