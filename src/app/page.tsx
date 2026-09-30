import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutTimeline from "@/components/AboutTimeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutTimeline />
        <Skills />
        <Projects />
        <BlogSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

