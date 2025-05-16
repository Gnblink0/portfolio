import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center overflow-hidden
        mx-auto"
    >
      <Navbar />
      <div className="w-full">
        <Hero />
      </div>

      <Grid />

      <div className="h-3000">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos reiciendis obcaecati error natus repellat commodi, excepturi dicta aspernatur veritatis suscipit nesciunt praesentium veniam minus ipsam ipsa molestias repudiandae illo.</p>
      </div>
    </main>
  );
}
