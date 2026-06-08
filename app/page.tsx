import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Hours } from "@/components/Hours";
import { Booking } from "@/components/Booking";
import { Reviews } from "@/components/Reviews";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { CallFab } from "@/components/CallFab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Marquee />
        <Services />
        <Gallery />
        <About />
        <Hours />
        <Booking />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <CallFab />
    </>
  );
}
