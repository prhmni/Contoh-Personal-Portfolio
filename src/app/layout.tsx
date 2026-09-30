import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ipar Hamni — Full-Stack Developer & UI/UX Craftsman",
  description: "Portofolio website personal menampilkan proyek web aplikasi modern, artikel blog teknologi, dan keahlian full-stack development berestetika modern glassmorphism.",
  keywords: [
    "Full-Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Designer",
    "Web Developer Indonesia"
  ],
  authors: [{ name: "Ipar Hamni" }],
  openGraph: {
    title: "Ipar Hamni — Full-Stack Developer & UI/UX Craftsman",
    description: "Portofolio website personal menampilkan proyek web aplikasi modern, artikel blog teknologi, dan keahlian full-stack development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

