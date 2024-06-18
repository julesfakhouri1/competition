import Image from "next/image";
import Link from "next/link";


const Hero2 = () => (
  <section className="mt-16  py-16 px-[140px] max-sm:px-2 ! max-sm:pr-4 bg-[#FFFFFF]">
    <h2 className="text-2xl max-sm:text-lg  mb-4 font-bold text-center text-[#4C3768]">
    Nos articles
    </h2>
    <div className=" flex justify-around max-sm:mx-0 mx-[94px] max-sm:ml-2  ">
        <div className=" "  >
            <Image src="/images/V1 1.svg" alt="helii" width={612} height={418}
            
            />
            <div className="relative -top-[17.5%] left-[71%]">
        <Link href="/download">
<button className="mt-[25.5px] max-xl:invisible   center bg-[#F3EFF6] font-bold text-[#4C3768] px-14 py-5 rounded-[7.21px] max-sm:invisible">
Lire plus


        </button>
      </Link>
          </div>

        </div>
        <div className="max-sm:hidden">
            <Image src="/images/V2 1.svg" alt="uncle" width={418} height={418}/>

        </div>
    </div>

    <div >
        <div className="flex-col w-[100%] center justify-center items-center relative left-[40%] max-sm:left-3 max-sm:-mt-14  ">
            <div className="my-4 w-[50%] max-sm:w-[100%]">
            <h1 className="text-[#4C3768] font-bold text-[28px] max-sm:text-[16px]" >
            Les Avantages Émotionnels des Relations Entre Grands-Parents et Petits-Enfants
            </h1>
            </div>
            <div className="my-4 w-[50%] max-sm:w-[100%]">
            <h2 className="text-[23px] text-[#555A65] max-sm:text-[14px]">
            Les relations entre grands-parents et petits-enfants offrent des avantages émotionnels significatifs, enrichissant la vie des jeunes adultes de 18 à 25 ans de multiples façons. 
            </h2>

            <div>
        <Link href="/download">
        <button className="mt-6 center bg-[#74549F] text-white px-6 py-3 rounded-[7.21px]">
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
