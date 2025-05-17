import Hero from "@/components/section/Hero";
import { Grid } from "@/components/section/Grid";
import Navbar from "@/components/section/Header";
import TechStack from "@/components/section/TechStack";
import Project from "@/components/section/Project";
import { Dock } from "@/components/Dock";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden mx-auto">
      <Navbar />
      <div className="w-full">
        <Hero />
        <Grid />
        <TechStack />
        <Project />
        <div className="h-3000 bg-pink-400">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos
            reiciendis obcaecati error natus repellat commodi, excepturi dicta
            aspernatur veritatis suscipit nesciunt praesentium veniam minus
            ipsam ipsa molestias repudiandae illo.
          </p>
        </div>
      </div>
      <Dock />
    </main>
  );
}
