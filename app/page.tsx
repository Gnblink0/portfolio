import Hero from "@/components/section/Hero";
import Navbar from "@/components/section/Header";
import TechStack from "@/components/section/TechStack";
import Project from "@/components/section/Project";
import { Dock } from "@/components/Dock";
import About from "@/components/section/About";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center overflow-hidden mx-auto
         "
    >
      <Navbar />
      <div className="w-full">
      <Hero />
      </div>
      <div className="w-full max-w-screen-lg px-4">
        <About />
        <TechStack />
        <Project />
      </div>
      <Dock />
    </main>
  );
}
