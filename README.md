# ✨ Modern Personal Portfolio Website

Website portofolio personal profesional dengan desain modern bertema **Dark Tech & Glassmorphism**, dibangun menggunakan **Next.js (App Router)**, **TypeScript**, dan **Tailwind CSS**. Didesain responsif penuh untuk menampilkan **Proyek**, **Keahlian (Skills)**, dan **Artikel Blog**.

---

## 🚀 Fitur Unggulan

- 💎 **Desain Modern Glassmorphism & Dark Tech**: Nuansa gelap elegan dengan aksen glow neon, efek frosted glass (*backdrop-filter*), dan tipografi modern (*Geist Font*).
- 🌓 **Dukungan Dark & Light Mode**: Dilengkapi tombol toggle tema dengan persistensi di *localStorage*.
- 📱 **100% Responsif (Mobile-First)**: Optimal di smartphone, tablet, laptop, hingga layar monitor resolusi tinggi.
- ⚡ **Performa & SEO Tingkat Tinggi**: Dibangun dengan Server Components dan Static Site Generation (SSG) untuk memuat halaman secara instan.
- 🛠️ **Seksi Portofolio Lengkap**:
  1. **Hero Section**: Headline dinamis, badge ketersediaan (*available for hire*), tombol CTA, tautan media sosial, serta statistik pencapaian.
  2. **Tentang & Riwayat Karir**: Filosofi kerja (*clean code, high performance*), riwayat pengalaman kerja dan sertifikasi dalam bentuk timeline vertikal.
  3. **Keahlian (Skills)**: Filter kategori (Frontend, Backend, Database/Cloud, Tools) dan pencarian *live search* dilengkapi indikator persentase kemahiran.
  4. **Koleksi Proyek**: Filter kategori, pencarian proyek, lencana teknologi, tautan Live Demo & GitHub, serta **Modal Pop-up Detail Arsitektur**.
  5. **Blog & Artikel Teknis**: Grid artikel dengan estimasi waktu baca, tag, dan halaman pembaca khusus (`/blog/[slug]`) berfitur *syntax highlighting*, salin tautan, serta tombol share.
  6. **Testimoni Klien**: Ulasan berating bintang 5 dari CTO dan pimpinan produk.
  7. **Formulir Kontak Interaktif**: Formulir brief proyek dengan efek kembang api *confetti* (`canvas-confetti`), jalan pintas WhatsApp & salin email, serta akordeon FAQ.
  8. **Footer**: Navigasi cepat, media sosial, dan tombol *Kembali ke Atas* (*smooth scroll*).

---

## 📁 Struktur Direktori

```text
Personal Portfolio/
├── src/
│   ├── app/
│   │   ├── blog/[slug]/
│   │   │   └── page.tsx        # Halaman detail artikel blog (SSG & SEO)
│   │   ├── globals.css         # Variabel tema, glassmorphism, & scrollbar
│   │   ├── layout.tsx          # Root layout & ThemeProvider
│   │   └── page.tsx            # Halaman utama portofolio
│   ├── components/
│   │   ├── AboutTimeline.tsx   # Seksi Tentang & Timeline Pengalaman
│   │   ├── BlogArticleClient.tsx# Komponen interaktif pembaca blog
│   │   ├── BlogSection.tsx     # Seksi preview artikel blog
│   │   ├── Contact.tsx         # Formulir kontak & FAQ
│   │   ├── Footer.tsx          # Footer website
│   │   ├── Hero.tsx            # Seksi perkenalan & statistik
│   │   ├── Icons.tsx           # Ikon SVG (GitHub, LinkedIn, X, Instagram)
│   │   ├── Navbar.tsx          # Navigasi sticky glass & menu seluler
│   │   ├── Projects.tsx        # Seksi proyek & modal studi kasus
│   │   ├── Skills.tsx          # Seksi tech stack & filter
│   │   └── Testimonials.tsx    # Seksi testimoni
│   ├── context/
│   │   └── ThemeContext.tsx    # Penyedia tema (Dark / Light)
│   └── data/
│       └── portfolio.ts        # 🌟 SEMUA DATA PORTOFOLIO ADA DI SINI
```

---

## ✏️ Cara Mengubah Data Portofolio Anda

Semua teks, profil, tautan, proyek, skill, dan artikel blog berada dalam satu file yang terstruktur rapi:
👉 [`src/data/portfolio.ts`](file:///c:/Projek/Personal%20Portfolio/src/data/portfolio.ts)

### 1. Mengubah Data Profil Pribadi
Cari objek `personalInfo`:
```ts
export const personalInfo = {
  name: "Nama Anda",
  title: "Full-Stack Developer & UI/UX Craftsman",
  tagline: "Slogan atau ringkasan spesialisasi Anda...",
  location: "Jakarta, Indonesia",
  email: "emailanda@domain.com",
  phone: "+62 812-xxxx-xxxx",
  whatsapp: "https://wa.me/62812xxxxxxxx",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://x.com/username",
    instagram: "https://instagram.com/username",
    email: "mailto:emailanda@domain.com",
  },
  // ...
};
```

### 2. Menambahkan / Mengedit Proyek
Tambahkan item baru ke dalam array `projectsData`:
```ts
{
  id: "nama-proyek",
  slug: "nama-proyek",
  title: "Judul Proyek Keren",
  description: "Deskripsi singkat untuk kartu...",
  longDescription: "Deskripsi lengkap arsitektur dan solusi yang dibangun...",
  category: "Full-Stack", // 'Full-Stack' | 'Frontend' | 'Backend' | 'UI/UX'
  image: "https://images.unsplash.com/...",
  tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  demoUrl: "https://demo.anda.com",
  githubUrl: "https://github.com/anda/repo",
  featured: true,
  metrics: "+50% Peningkatan Kecepatan",
  highlights: [
    "Fitur unggulan 1",
    "Fitur unggulan 2"
  ]
}
```

### 3. Menambahkan Artikel Blog Baru
Tambahkan artikel baru ke dalam array `blogPostsData`:
```ts
{
  id: "4",
  slug: "judul-artikel-anda-dalam-format-slug",
  title: "Judul Artikel Anda",
  summary: "Ringkasan isi artikel...",
  publishedAt: "30 Sep 2026",
  readTime: "5 menit baca",
  category: "Web Development",
  tags: ["Next.js", "React", "CSS"],
  author: {
    name: "Nama Anda",
    role: "Full-Stack Developer",
    avatar: "https://images.unsplash.com/..."
  },
  content: `
### Judul Sub-bab
Isi paragraf artikel Anda...

\`\`\`tsx
// Kode snippet Anda
console.log("Hello World");
\`\`\`
  `
}
```

---

## 🛠️ Perintah Pengembangan (Scripts)

Jalankan perintah berikut di terminal:

```bash
# Menjalankan server lokal (Hot Reload di http://localhost:3000)
npm run dev

# Membangun versi produksi (Static HTML / SSG)
npm run build

# Menjalankan server hasil build produksi
npm run start

# Menjalankan ESLint
npm run lint
```

---

## 🌐 Cara Deploy ke Vercel (Gratis & Cepat)

1. Unggah kode proyek ini ke repositori **GitHub** Anda.
2. Buka [Vercel](https://vercel.com) dan masuk dengan akun GitHub.
3. Klik **"Add New Project"** dan pilih repositori portofolio ini.
4. Vercel akan otomatis mendeteksi konfigurasi **Next.js**. Klik tombol **"Deploy"**.
5. Dalam kurun waktu ~1 menit, portofolio Anda siap diakses melalui domain kustom atau `.vercel.app`.
