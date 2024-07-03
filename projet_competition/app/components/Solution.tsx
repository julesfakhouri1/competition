import Image from 'next/image';

const SolutionSection = () => (
    <div className="relative bg-[F3EFF6]">
                            <svg width="138" height="129" viewBox="0 0 138 129" fill="none" xmlns="http://www.w3.org/2000/svg" className="left-0 bottom-[20%] absolute max-sm:block hidden z-0">
<path d="M-81.502 2.37756C-31.5146 74.2892 52.9287 108.932 136.067 127.407" stroke="#4C3768" stroke-width="3" stroke-linecap="round"/>
</svg>
<svg width="170" height="173" viewBox="0 0 170 173" fill="none" xmlns="http://www.w3.org/2000/svg"  className="right-0 bottom-[1%] absolute max-sm:block hidden z-0">
<path d="M2 1.90283C85.6814 27.7378 144.293 97.7054 187.102 171.331" stroke="#4C3768" stroke-width="3" stroke-linecap="round"/>
</svg>

                    
    <section className="px-4 font-darker-grotesque lg:-translate-y-[400px] -translate-y-[140px]">
        <h2 className="text-[52px] max-sm:text-[27px] max-sm:leading-[35px] font-[800] font-playfair text-center text-[#4C3768] leading-[70px]">S'épauler entre génération</h2>
        <div className="flex flex-col max-md:items-center md:flex-row md:flex-wrap justify-center pt-[43px] max-sm:mx-[44px] gap-[21px]">
            {/* Card 1 */}
            <div className="bg-[#DDD4E7] flex flex-col text-center items-center lg:w-[333px] lg:h-[497px] rounded-[13px] pb-[37px]">
                <div className="grid place-items-center w-full min-h-[225px] rounded-t-[13px]">
                    <Image 
                        src="/Frame.svg"
                        alt="ILLUSTRATION" 
                        width={173}
                        height={156}
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-[26px] leading-[30px] font-[800] text-[#4C3768] max-sm:text-[24px] w-full [text-wrap:balance] text-center max-sm:w-[196px]">Échange de sagesse et expérience</h3>
                <p className="mt-[13px] lg:mt-[18px] text-[#4C3768] w-full leading-[30px] px-[41px] text-center text-[20px] font-500 lg:text-[26px]">Créer des moments d'apprentissage et de croissance pour les deux générations.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#DDD4E7] flex flex-col text-center items-center lg:w-[333px] lg:h-[497px] rounded-[13px] pb-[30px]">
                <div className="grid place-items-center w-full min-h-[225px] rounded-t-[13px]">
                    <Image 
                        src="/Calque_2.svg"
                        alt="ILLUSTRATION" 
                        width={94}
                        height={172}
                        objectFit="contain"
                    />
                </div>
                <h3 className="text-[26px] leading-[30px] font-[800] text-[#4C3768] max-sm:text-[24px] w-full [text-wrap:balance] text-center">Célébrer des liens familiaux forts</h3>
                <p className="mt-[18px] text-[#4C3768] w-full leading-[30px] px-[41px] text-center text-[20px] font-500 lg:text-[26px]">Liens sociaux solides en créant des souvenirs durables et moments de connexion entre les générations.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#DDD4E7] flex flex-col text-center items-center lg:w-[333px] lg:h-[497px] rounded-[13px] z-50 pb-[36px]">
                <div className="grid place-items-center w-full min-h-[225px] rounded-t-[13px]">
                    <Image 
                        src="/main_fleurs_illustration.svg"
                        alt="ILLUSTRATION" 
                        width={235}
                        height={160}
                        objectFit="contain"
                    />
            
                  

                </div>
                <h3 className="text-[26px] leading-[30px] font-[800] text-[#4C3768] max-sm:text-[24px] w-full [text-wrap:balance] text-center">Environnement d'amour et de soutien</h3>
                <p className="mt-[18px] text-[#4C3768] w-full leading-[30px] px-[41px] text-center text-[20px] font-500 lg:text-[26px]">Espace sûr et accueillant où vous tournez pour trouver du réconfort et du soutien tout au long de votre voyage.</p>
            </div>
        </div>
    </section>
    </div>
);

export default SolutionSection;
