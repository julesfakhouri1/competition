import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
    <nav className=" pt-7 px-6 ">
        <div className="container   p-4 flex justify-between items-center">
            <div className="flex   items-center">
                <Link href="/">
                    <Image src="/images/logo-poma.svg" alt="Logo Poma" width={96} height={26} className="mr-2 cursor-pointer"/>
                </Link>
            </div>
            <Link href="/download">
                <button className="mt-1  text-[#74549F] font-semibold  border-2 border-[#74549F]  px-2 py-2 rounded-[7.21px]">Télécharger l&apos;app</button>
            </Link>
        </div>
    </nav>
);

export default Navbar;
