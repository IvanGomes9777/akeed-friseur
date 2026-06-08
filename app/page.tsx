import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { About } from "@/components/about"
import { Hours } from "@/components/hours"
import { Booking } from "@/components/booking"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { CallButton } from "@/components/call-button"

export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Gallery />
      <About />
      <Hours />
      <Booking />
      <Reviews />
      <Contact />
      <Footer />
      <CallButton />
    </main>
  )
}
