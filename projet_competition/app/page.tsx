import Navbar from "@/app/components/Navbar";
import Header from "@/app//components/Header";
import Solution from "@/app/components/Solution";
import Footer from "@/app/components/footer";
import HeroOne from "@/app/components/hero1";
import Aunty from "@/app/components/aunty";
import Hero2 from '@/app/components/hero2'
import AvisSection from "@/app/components/avis";
import CookieConsent from '@/app/components/CookieConsent'



export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <CookieConsent />
      <Navbar />
      <Header />
      <Solution />
      <Aunty/>
      <AvisSection />
      <HeroOne />
      <Hero2/>
      <Footer />
    </div>
  );
}
