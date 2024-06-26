import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Solution from "@/app/components/Solution";
import Footer from "./components/footer";
import HeroOne from "./components/hero1";
import Aunty from "./components/aunty";
import Hero2 from './components/hero2'
import AvisSection from "./components/avis";
import CookieConsent from './components/CookieConsent'


export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
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
