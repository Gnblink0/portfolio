import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main
      className="relative flex flex-col items-center justify-center overflow-hidden
        mx-auto"
    >
      <div className="w-full">
        <Hero />
      </div>

      <div className="h-3000">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eos reiciendis obcaecati error natus repellat commodi, excepturi dicta aspernatur veritatis suscipit nesciunt praesentium veniam minus ipsam ipsa molestias repudiandae illo.</p>
      </div>
    </main>
  );
}
