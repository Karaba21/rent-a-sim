import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import PriceSimulator from "@/components/PriceSimulator";
import Reservas from "@/components/Reservas";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <PriceSimulator />
        <Reservas />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
