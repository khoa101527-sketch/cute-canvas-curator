import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Showcase from "@/components/Showcase";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Showcase />
      <Products />
      <Process />
      <Partners />
      <Footer />
    </div>
  );
}
