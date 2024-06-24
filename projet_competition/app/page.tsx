import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Solution from "@/app/components/Solution";
import Footer from "./components/footer";
import HeroOne from "./components/hero1";
import Aunty from "./components/aunty";
import Hero2 from './components/hero2'
import AvisSection from "./components/avis";
import Onboarding from "./components/onboarding"; // Assurez-vous que ce chemin est correct

// overflow-x-hidden

export default function HomePage() {
  return (
    <div className="bg-purple-100 overflow-x-hidden">
      <Navbar />
      <Header />
      <Solution />
      <Aunty />
      <AvisSection />
      <HeroOne />
      <Hero2 />
      <Onboarding /> {/* Utilisez le composant importé ici */}
      <Footer />
    </div>
  );
}

