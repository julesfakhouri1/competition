import Image from 'next/image';

const SolutionSection = () => (
    <section className="-mt-[300px] max-sm:-mt-[100px] px-4">
        <h2 className="text-6xl max-sm:text-2xl font-semibold text-center text-[#4C3768]">S&apos;épauler entre génération</h2>
        <div className="flex flex-col md:flex-row justify-between mt-8 max-sm:mx-[2%] mx-[15%]">
            <div className="bg-[#D5C2E0] flex-col text-center flex items-center justify-center py-4 rounded-lg m-4 flex-1">
                <div className="h-32 flex items-center justify-center">
                    <Image src="/images/Frame.svg" alt="ILLUSTRATION" width={128} height={128} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#4C3768] max-sm:text-md max-sm:w-[77%] w-[50%]">Échange de sagesse et expérience</h3>
                <p className="mt-2 text-[#4C3768] max-sm:w-[90%] w-[50%]">Créer des moments d&apos;apprentissage et de croissance pour les deux générations.</p>
            </div>
            <div className="bg-[#D5C2E0] flex-col text-center flex items-center justify-center py-4 rounded-lg m-4 flex-1">
                <div className="h-32 flex items-center justify-center">
                    <Image src="/images/Calque_2.svg" alt="ILLUSTRATION" width={80} height={80} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#4C3768] w-[50%] max-sm:text-md max-sm:w-[77%]">Célébrer des liens familiaux forts</h3>
                <p className="mt-2 text-[#4C3768] w-[50%] max-sm:w-[90%]">Liens sociaux solides en créant des souvenirs durables et moments de connexion entre les générations.</p>
            </div>
            <div className="bg-[#D5C2E0] flex-col text-center flex items-center justify-center py-4 rounded-lg m-4 flex-1">
                <div className="h-32 flex items-center justify-center">
                    <Image src="/images/Calque_2 (1).svg" alt="ILLUSTRATION" width={128} height={128} />
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#4C3768] w-[60%] max-sm:text-md max-sm:w-[77%]">Environnement d’amour et de soutien</h3>
                <p className="mt-2 text-[#4C3768] w-[50%] max-sm:w-[90%]">Espace sûr et accueillant où vous tournez pour trouver du réconfort et du soutien tout au long de votre voyage.</p>
            </div>
        </div>
    </section>
);

export default SolutionSection;
