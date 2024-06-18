// components/Footer.js
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#6C4F96] text-white py-8 px-4 lg:px-16 max-sm:pb-[10px]   ">
      {/* Newsletter Section */}

      <div className="mb-8 hidden max-sm:block  ">
        <h2 className="text-3xl font-bold mb-6">Newsletter</h2>
        <div className="w-6/10">
          <p className="mb-4 text-xs">
            Abonnez-vous pour recevoir toutes les actualités de POMA
          </p>
          <div className="flex items-center max-sm:items-start bg-white rounded-lg w-[60%]  p-2">
            <div className="  ">
            <input
              type="email"
              size={8}
              placeholder="Votre e-mail"
              className="   
             py-2 text-gray-700 text-sm  rounded-l-lg  focus:outline-none"
            />
            </div>
            <button className="px-2 py-2 ml-[20%]  bg-[#6C4F96] border- text-white rounded-lg font-semibold text-sm ">
              S’inscrire
            </button>
          </div>
        </div>
        <div className="w-4/10"></div>
      </div>
      

      {/* Footer Links */}
      <div className="flex text-xs w-full flex-row space-y-8 lg:space-y-0">
        <div className=" pr-16 text-xs w-[33%] mx-4">
          <h3 className="font-semibold max-sm:w-[200%] text-[26px] max-sm:text-lg  mb-8">Nous suivre</h3>
          <div className="flex text-sm space-x-4 mb-4">
            <a href="#">
              <Image
                src="/images/Group.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/images/Vector.svg"
                alt="Facebook"
                width={15}
                height={20}
              />
            </a>
            <a href="#">
              <Image
                src="/images/Vector (1).svg"
                alt="LinkedIn"
                width={20}
                height={20}
              />
            </a>
          </div>
          <ul className="space-y-4 font-light max-sm:w-[200%] max-sm:text-sm text-[22px] py-1">
            <li className="py-1">
              <a href="#" className="hover:underline max-sm:w-[200%] ">
                Mentions légales
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="hover:underline">
                Gestion des données
              </a>
            </li>
            <li className="py-1">
              <a  href="#" className="hover:underline ">
                Politique de confidentialité
              </a>
            </li>
          </ul>
        </div>
        <div className=" pr-16 text-xs w-[33%] mx-4">
          <h3 className="font-semibold max-sm:w-[200%] text-[26px] max-sm:text-lg  mb-8">A propos</h3>
          
          <ul className="space-y-4 max-sm:w-[200%] max-sm:text-sm text-[22px] font-light py-1">
            <li className="py-1">
              <a href="#" className="hover:underline max-sm:w-[200%] ">
              Nous rejoindre
              </a>
            </li>
            <li className="py-1">
              <a href="#" className="hover:underline">
              FAQ
              </a>
            </li>
            <li className="py-1">
              <a  href="#" className="hover:underline ">
              Appels d’offres
              </a>
            </li>
            <li className="py-1">
              <a  href="#" className="hover:underline ">
              Nous contacter
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-8 w-[33%] max-sm:hidden ">
        <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
        <div className="w-6/10">
          <p className="mb-8 mt-8 text-xs">
            Abonnez-vous pour recevoir toutes les actualités de POMA
          </p>
          <div className="flex items-center bg-white rounded-lg  p-2">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="flex-1 px-4 
             py-2 text-gray-700 rounded-l-lg  focus:outline-none"
            />
            <button className="px-4 py-2 bg-[#6C4F96] border- text-white rounded-lg font-semibold ">
              S’inscrire
            </button>
          </div>
        </div>
        <div className="w-4/10"></div>
      </div>


      </div>

      
    </footer>
  );
};

export default Footer;
