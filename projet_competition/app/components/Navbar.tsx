// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
import logo from "/public/images/logo-poma.svg"

const Navbar = () => (
  <nav className="pt-7 px-6 bg-[F3EFF6]">
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" >
          
            <Image src={logo} alt="Logo Poma" className="mr-2 cursor-pointer w-[96px] h-[26px] md:w-[172px] md:h-[46px]" />
        
        </Link>
      </div>
      <Link href="/onboarding">
        <button className="text-primary font-bold border-[3px] border-primary rounded-[8px] font-darker-grotesque text-[20px] px-[7px] md:px-[20px] pt-[4px] md:pt-[10px] pb-[7px] md:pb-[12px] leading-[27px]">
          Télécharger l’app
        </button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
