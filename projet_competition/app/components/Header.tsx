import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <section className="text-center  my-8 relative">
    <h1 className="text-2xl font-bold text-[#4C3768] relative z-10">
      <span className="relative  inline-block mt-12 relative top-12">
        {/* <Image
          src="/images/crown.png"
          alt="Decoration"
          className="h-5 w-5"
          width={5}
          height={5}
       
        ></Image> */}
        <Image
          src="/images/decoration.svg"
          alt="Decoration"
          className="max-h-[79px]  w-4 ml-[20%]"
          fill
          //   style={{ objectFit: "cover", zIndex: "1" }}
        ></Image>
        <p  className="relative z-20 text-6xl max-sm:text-3xl">Devenez un trésor inestimable </p>
        <p  className="relative z-20 text-6xl max-sm:text-3xl mt-2">pour les adultes de demain </p>
      </span>
    </h1>
    <p className="mt-1 max-sm:text-[14px] max-w-[25%] max-sm:max-w-[800px] relative left-[38%] max-sm:relative max-sm:-left-[0%] max-sm:top-[50px] top-[110px] text-lg text-[#4C3768]">
      Poma, devenez grands-parents de cœur, partagez votre amour et votre
      sagesse
    </p>
    <Link href="/download">
        <button className="relative top-[160px] max-sm:relative  max-sm:top-[460px] center bg-[#74549F] text-white px-6 py-2 rounded-[7.21px]">
          Télécharger l&apos;app
        </button>
      </Link>
      <div className="flex max-sm:fs-[80px] justify-center relative top-[220px] max-sm:relative max-sm:top-[500px]">
      <Image className="max-sm:w-[40px]" src="/images/Group 686.svg" width={50} height={50} alt="grp"/>
      </div>
    <div className="flex flex-col  mt-2">
      <div className="relative w-full max-w-xs md:max-w-sm mb-1">
        <Image
          src="/images/illustration-poma.svg"
          alt="illustration poma"
          width={371.35}
          height={541.63}
        />
      </div>
      
    </div>
  </section>
);

export default Header;
