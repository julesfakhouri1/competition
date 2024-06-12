import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <section className="text-center my-8 relative">
        <h1 className="text-3xl font-bold text-purple-700 relative z-10">
      <span className="relative inline-block">
        <Image src="/images/decoration.svg" alt="Decoration" layout="fill" objectFit="cover" style={{ zIndex: '-1' }} />
        Devenez un <span className="relative z-20">trésor inestimable</span> pour les adultes de demain
      </span>
        </h1>
        <p className="mt-4 text-lg">Poma, devenez grands-parents de cœur, partagez votre amour et votre sagesse</p>
        <div className="flex justify-center items-center mt-8">
            <div className="w-1/2">
                <div className="bg-gray-200 h-48 flex items-center justify-center">Illustration</div>
                <Link href="/download" passHref>
                    <button className="mt-4 bg-purple-700 text-white px-4 py-2 rounded">Télécharger l'app</button>
                </Link>
            </div>
        </div>
    </section>
);

export default Header;
