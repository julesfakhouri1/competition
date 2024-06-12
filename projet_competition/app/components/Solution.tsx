import Image from 'next/image';

const SolutionSection = () => (
    <section className="my-8">
        <h2 className="text-2xl font-bold text-center text-purple-700">S&apos;épauler entre génération</h2>
        <div className="flex flex-col md:flex-row justify-between mt-8">
            <div className="bg-purple-100 p-4 rounded-lg m-2 flex-1">
                <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <Image src="/path/to/image.jpg" alt="ILLUSTRATION" width={128} height={128}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-purple-700">Échange de sagesse et expérience</h3>
                <p className="mt-2">Créer des moments d&apos;apprentissage et de croissance pour les deux générations.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg m-2 flex-1">
                <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <Image src="/path/to/image.jpg" alt="ILLUSTRATION" width={128} height={128}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-purple-700">Célébrer des liens familiaux forts</h3>
                <p className="mt-2">Liens sociaux solides en créant des souvenirs durables et moments de connexion entre les générations.</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg m-2 flex-1">
                <div className="bg-gray-200 h-32 flex items-center justify-center">
                    <Image src="/path/to/image.jpg" alt="ILLUSTRATION" width={128} height={128}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-purple-700">Environnement d&apos;amour et de soutien</h3>
                <p className="mt-2">Espaces sûrs accueillant et vous tournant pour trouver du réconfort et du soutien tout au long de votre voyage.</p>
            </div>
        </div>
    </section>
);

export default SolutionSection;
