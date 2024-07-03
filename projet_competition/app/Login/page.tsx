import Image from 'next/image';

export default function LoginPage() {
    return (
        <div className="bg-purple-50 flex flex-col items-center justify-between min-h-screen">
            <div className="flex flex-col items-center justify-center flex-grow">
                <Image src="/images/logo-poma.svg" alt="Poma Logo" width={200} height={200} />
                <div className="w-full max-w-lg">
                    <h2 className="text-xl mb-4 text-center text-[#4C3768] font-playfair">
                        trouvez votre <b>compagnon de coeur</b> et creez des <b>souveniers precieux</b> avec Poma!
                    </h2>
                </div> 
                <Image src="/images/calender.png" alt="" width={100} height={100} />
                <button className="text-primary font-bold border-[3px] border-primary rounded-[8px] font-darker-grotesque text-[20px] px-[7px] md:px-[20px] pt-[4px] md:pt-[10px] pb-[7px] md:pb-[12px] leading-[27px]">
                    Suivant
                </button>
            </div>
        </div>
    );
}