import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Link from "next/link";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto px-12 py-4">
      <Navbar />
      <div className="container mt-24 mx-auto">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
