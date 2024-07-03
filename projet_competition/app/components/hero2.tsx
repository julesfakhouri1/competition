import Image from "next/image";
import Link from "next/link";


const Hero2 = () => (
  <section className="pb-[62px] lg:pb-[140px] mt-16 pt-16 px-4 md:px-[140px] font-darker-grotesque">
    <h2 className="text-3xl md:text-5xl mb-4 font-[800] text-center text-[#4C3768] font-playfair">
      Nos articles
    </h2>
    <div className="flex justify-center">
      <div className="relative w-full lg:max-w-[612px]">
        <Image 
          src="/V1 1.svg" 
          alt="helii" 
          width={612} 
          height={418}
        />
        <div className="absolute bottom-0 right-0">
          <Link href="/download">
            <button className="bg-[#F3EFF6] font-bold text-[#4C3768] px-4 py-2 md:px-6 md:py-3 rounded-[7.21px] flex items-center text-sm md:text-lg">
              Lire plus
              <svg
                className="ml-2 w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </button>
          </Link>
        </div>




        </div>
        <div className="max-sm:hidden sm:ml-[10px]">
            <Image src="/V2 1.svg" alt="uncle" width={418} height={418}/>

        </div>
    </div>

    <div >
        <div className="flex-col w-[100%] center justify-center items-center relative left-[40%] max-sm:left-3 max-sm:mt-14 pr-[16px]">
            <div className="w-[50%] max-sm:w-[100%]">
            <h1 className="text-[#4C3768] font-bold text-[28px] max-sm:text-[20px] leading-[37px] pt-[53px] max-w-[486px]" >
            Les Avantages Émotionnels des Relations Entre Grands-Parents et Petits-Enfants
            </h1>
            </div>
            <div className="pt-[28px] w-[50%] max-sm:w-[100%]">
            <h2 className="text-[20px] lg:text-[23px] text-[#555A65] leading-[37px] max-w-[567px]">
            Les relations entre grands-parents et petits-enfants offrent des avantages émotionnels significatifs, enrichissant la vie des jeunes adultes de 18 à 25 ans de multiples façons. 
            </h2>

            <div>
        <Link href="/download">
        <button className="mt-6 center bg-[#74549F] text-white px-6 py-3 rounded-[7.21px] text-[20px] leading-[27px] font-bold">
        Voir tous les articles
        </button>
      </Link>
      </div>

            
            </div>
        </div>
       
    </div>



    
    
  </section>
);

export default Hero2;
