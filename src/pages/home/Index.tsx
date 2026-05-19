import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Philosophy from "@/components/Philosophy";
import Showcase from "@/components/Showcase";
import Products from "@/components/Products";
import Process from "@/components/Process";
import TechPartners from "@/components/TechPartners";
import Technologies from "@/components/Technologies";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutUs />
      <Philosophy />
      <Showcase />
      <Products />
      <Process />
      <TechPartners />
      <Technologies />
      <Footer />
    </div>
  );
}
