import Hero from "@/components/section/Hero";
import Navbar from "@/components/section/Header";
import TechStack from "@/components/section/TechStack";
import Project from "@/components/section/Project";
import About from "@/components/section/About";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero Section - Full viewport */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Content Sections - Consistent spacing */}
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-screen-lg px-4 md:px-6 lg:px-8">
          <section className="py-16 md:py-20 lg:py-24">
            <About />
          </section>

          <section className="py-16 md:py-20 lg:py-24 border-t border-border-light/50">
            <TechStack />
          </section>

          <section className="py-16 md:py-20 lg:py-24 border-t border-border-light/50">
            <Project />
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
