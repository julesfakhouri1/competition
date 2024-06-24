// components/Footer.js
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#6C4F96] text-white py-8 px-4 lg:px-16 font-darker-grotesque">
      <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
        {/* Newsletter Section - First on mobile, last on desktop */}
        <div className="w-full md:w-1/3 lg:w-1/3 order-first md:order-last">
          <h2 className="text-[28px] font-bold mb-4 font-playfair font-[800]">Newsletter</h2>
          <p className="mb-4 max-sm:text-sm lg:text-[19px] leading-[25px] font-[500] font-darker-grotesque">
            Abonnez-vous pour recevoir toutes les actualités de POMA
          </p>
          <div className="relative w-full max-w-[423px] h-[50px] lg:h-[65px] bg-white rounded-lg p-2">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="w-full h-full px-4 py-2 text-primary rounded-lg focus:outline-none font-darker-grotesque"
            />
            <button className="font-darker-grotesque grid place-items-center absolute right-[5px] top-[5px] bottom-[5px] w-[99px] lg:w-[114px] h-[39px] lg:h-[53px] bg-[#6C4F96] text-white rounded-lg font-semibold max-sm:text-sm text-[20px]">
              S'inscrire
            </button>
          </div>
        </div>

        {/* Wrapper for Nous suivre and A propos */}
        <div className="flex flex-wrap md:w-2/3 lg:w-2/3 justify-between">
          {/* Nous suivre Section */}
          <div className="w-full sm:w-1/2 pr-2 mb-8 md:mb-0">
            <h3 className="font-semibold text-2xl lg:text-[26px] mb-8">Nous suivre</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#"><Image src="/images/Group.svg" alt="Instagram" width={20} height={20} /></a>
              <a href="#"><Image src="/images/Vector.svg" alt="Facebook" width={15} height={20} className="-translate-y-1" /></a>
              <a href="#"><Image src="/images/Vector (1).svg" alt="LinkedIn" width={20} height={20} /></a>
            </div>
            <ul className="space-y-4 text-lg lg:text-[22px] font-light">
              <li><Link href="/mentions-legales" className="hover:underline">Mentions légales</Link></li>
              <li><a href="/gestion-donnees" className="hover:underline">Gestion des données</a></li>
              <li><a href="/politique-de-confidentialite" className="hover:underline">Politique de confidentialité</a></li>
            </ul>
          </div>

          {/* A propos Section */}
          <div className="w-full sm:w-1/2 pl-2">
            <h3 className="font-semibold text-2xl lg:text-[26px] mb-8">A propos</h3>
            <ul className="space-y-4 text-lg lg:text-[22px] font-light">
              <li><a href="#" className="hover:underline">Nous rejoindre</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Appels d'offres</a></li>
              <li><a href="#" className="hover:underline">Nous contacter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;