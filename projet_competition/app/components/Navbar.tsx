// components/Navbar.tsx
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from "/public/logo-poma.svg"
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/user');
  };

  return (
    <nav className="pt-7 px-6 ">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo Poma" className="mr-2 cursor-pointer w-[96px] h-[26px] md:w-[172px] md:h-[46px]" />
          </Link>
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            className="ml-10 text-primary font-bold border-[3px] border-primary rounded-[8px] font-darker-grotesque text-[20px] px-[7px] md:px-[20px] pt-[4px] md:pt-[10px] pb-[7px] md:pb-[12px] leading-[27px]"
          >
            accéder à l'app
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
