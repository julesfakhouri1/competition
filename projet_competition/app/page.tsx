import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Solution from "@/app/components/Solution";
import Footer from "./components/footer";
import HeroOne from "./components/hero1";
import AdventurePartnerSection from './components/partner'
import Aunty from "./components/aunty";
import Hero2 from './components/hero2'

// overflow-x-hidden

export default function HomePage() {
  return (
    <div className="bg-purple-100 overflow-x-hidden ">
      <Navbar />
      <Header />
      <Solution />
      <Aunty/>
      <AdventurePartnerSection />
      <HeroOne />
      <Hero2/>
      <Footer />
    </div>
  );
}
