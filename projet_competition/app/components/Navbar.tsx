// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
  <nav className="pt-7 px-6">
    <div className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" legacyBehavior>
          <a>
            <Image src="/images/logo-poma.svg" alt="Logo Poma" width={96} height={26} className="mr-2 cursor-pointer" />
          </a>
        </Link>
      </div>
      <Link href="/onboarding">
        <button className="mt-1 text-[#74549F] font-bold border-2 border-[#74549F] px-2 py-2 rounded-[7.21px] font-darker-grotesque text-[18px]">
          Télécharger l’app
        </button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
