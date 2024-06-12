import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => (
    <nav>
        <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/logo-poma.svg" alt="Logo Poma" width={96} height={26.17} className="mr-2 cursor-pointer"/>
                </Link>
            </div>
            <Link href="/download">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 sm:ml-4">
                    Télécharger l&apos;app
                </button>
            </Link>
        </div>
    </nav>
);

export default Navbar;
