import Hero from "@/components/section/Hero";
import Navbar from "@/components/section/Header";
import TechStack from "@/components/section/TechStack";
import Project from "@/components/section/Project";
import About from "@/components/section/About";
import Footer from "@/components/section/Footer";
import Fireflies from "@/components/Fireflies";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Section - Full viewport */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Content Sections — Dark Forest atmosphere */}
      <div className="relative w-full flex flex-col items-center">
        {/* Single unified atmosphere layer for all content */}
        <div className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `linear-gradient(to bottom,
              transparent 0%,
              rgba(200, 220, 255, 0.02) 30%,
              rgba(200, 220, 255, 0.035) 60%,
              rgba(200, 220, 255, 0.02) 90%,
              transparent 100%)`
          }}
        />
        <Fireflies />
        <div className="relative z-10 w-full max-w-screen-lg px-4 md:px-6 lg:px-8">
          <section className="pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
            <About />
          </section>

          <section className="py-12 md:py-16">
            <TechStack />
          </section>

          <section className="py-12 md:py-16 pb-16 md:pb-20 lg:pb-24">
            <Project />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
