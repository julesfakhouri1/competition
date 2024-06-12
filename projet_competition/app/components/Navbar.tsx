import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/images/logo-poma.svg" alt="Logo Poma" className="w-[96px] h-[26.17px] mr-2 cursor-pointer"/>
                    </Link>
                </div>
                <Link href="/download">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 sm:ml-4">
                        Télécharger l'app
                    </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
