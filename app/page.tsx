import Image from "next/image";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
export default function Home({ children }: any) {
  return (
    <div className="w-[100vw] h-[100vh]">
      <AuroraBackground/>
      <main className="relative z-10">
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
