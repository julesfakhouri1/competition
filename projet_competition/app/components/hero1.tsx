import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section className="mt-16 py-16 max-sm:py-0 px-[180px] max-sm:px-4 ">
    <h2 className="text-2xl font-bold text-center pt-4 text-[#4C3768]">
      S&apos;La quête de Poma
    </h2>
    <div className="flex flex-wrap  justify-around mt-8 ">
      <div className="bg-[#DDD4E7] flex    text-center   items-center justify-center p-4 max-sm:p-0 rounded-lg m-2">
        <div className=" h-[16rem] w-[200px] py-8 ">
          <Image
            src="/images/Group 692.svg"
            alt="ILLUSTRATION"
            width={228}
            height={228}
          />
        </div>
        <div className="max-sm:w-[50%]">
          {" "}
          <h3 className="mt-4 max-sm:text-sm w-1/2 max-sm:-ml-[50%] max-sm:w-[200%] text-xl font-bold text-[#4C3768] w-full">
            Rencontre physique
          </h3>
          <p className="mt-2 text-sm flex text-start text-[#4C3768]">
            Evénements communautaires, ateliers de groupe.
          </p>
        </div>
      </div>

      <div className="bg-[#DDD4E7] flex    text-center   items-center justify-center p-4 max-sm:p-0 rounded-lg m-2">
        <div className=" h-[16rem] w-[200px] py-8 ">
          <Image
            src="/images/Frame (2).svg"
            alt="ILLUSTRATION"
            width={228}
            height={228}
          />
        </div>
        <div className="max-sm:w-[50%]">
          <h3 className="mt-4 max-sm:text-sm w-1/2 max-sm:-ml-[50%] max-sm:w-[200%] text-xl font-bold text-[#4C3768] w-full">
            Rencontre physique
          </h3>
          <p className="mt-2 text-sm flex text-start text-[#4C3768]">
            Evénements communautaires, ateliers de groupe.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-[#DDD4E7] flex flex-row max-sm:flex-col     text-center   items-center justify-between p-4 max-sm:p-0 rounded-lg my-2 mx-[1%] ">
      <div className="max-sm:w-[50%]  px-4">
        {" "}
        <h3 className="mt-4 max-sm:text-sm w-[50%] flex justify-start text-start max-sm:-ml-[50%] max-sm:w-[200%] text-xl font-bold text-[#4C3768] ">
          Calendrier d’activité
        </h3>
        <p className="mt-2 text-sm flex w-[40%] max-sm:w-[200%] max-sm:relative max-sm:-left-[50%] text-[20px] max-sm:text-[14px] text-start text-[#4C3768]">
          Avec un calendrier prévu pour réserver les activités, nous offrons à
          nos membres la possibilité de s'engager dans ces aventures
          collectives.
        </p>
      </div>
      <div className=" h-[16rem]  w-[70%]  ">
        <Image
          className="max-sm:relative max-sm:top-12"
          src="/images/Frame (3).svg"
          alt="ILLUSTRATION"
          width={228}
          height={228}
        />
        <Image
          className="max-sm:relative max-sm:top-13"
          src="/images/Vector 21.svg"
          alt="ILLUSTRATION"
          width={228}
          height={228}
        />
        <div className="relative left-[80%] -top-[90%] max-sm:relative max-sm:-top-[350px] max-sm:left-[96%] w-[50px]">
          <Image
            className=""
            src="/images/Frame (4).svg"
            alt="ILLUSTRATION"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>

    <div className="w-[100%] max-sm:-mt-[30%] max-sm: pb-10 self-center text-center center">
      <Link href="/download">
        <button className="mt-8 max-sm:mt-[40%]   center bg-[#74549F] text-white px-6 py-2 rounded-[7.21px]">
          Rejoignez-nous
        </button>
      </Link>
    </div>
  </section>
);

export default Hero;
