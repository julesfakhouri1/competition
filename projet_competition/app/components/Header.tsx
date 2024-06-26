import Image from "next/image";
import Link from "next/link";

const Header = () => (
  <section className="text-center relative md:pt-[55px] bg-[F3EFF6]">
<div className="relative">
  <div className="text-[64px] leading-[85px] text-center font-bold text-[#4C3768] relative z-10">
    <span className="relative inline-block md:mt-12 relative top-12">
      <div className="relative z-20 text-[64px] leading-[85px] text-center max-lg:text-3xl font-playfair font-[800]">
        Devenez un <span className="relative inline-block">
          <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2rem)] h-auto" viewBox="0 0 563 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            <path d="M485.263 71.5615C391.796 80.3367 224.514 83.6554 105.109 78.2882C-31.0092 72.1697 -24.2458 17.1758 92.7485 8.99224C157.576 4.45766 559 -9.90929 559 46.8115C559 81.7332 459.669 100.203 404.994 95.1882" stroke="#DDD4E7" strokeWidth="8" strokeLinecap="round"/>
          </svg>
          <span className="relative z-10">trésor inestimable</span>
          <div className="absolute -right-10 -top-12">
          <svg width="928" height="625" viewBox="0 0 928 625" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M876.104 4.28412C875.083 12.5235 874.062 20.7629 873.04 29.0023C872.371 34.4424 880.223 32.1273 880.743 27.9019C881.764 19.6625 882.785 11.4232 883.806 3.18378C884.475 -2.25633 876.623 0.0587954 876.104 4.28412Z" fill="#4C3768"/>
<path d="M900.091 18.0251C895.716 22.2769 891.332 26.5198 886.958 30.7715C885.593 32.092 884.669 34.6624 886.183 36.2205C887.697 37.7785 890.32 36.7134 891.632 35.4458C896.007 31.1941 900.391 26.9511 904.766 22.6994C906.13 21.379 907.054 18.8086 905.54 17.2505C904.026 15.6924 901.403 16.7575 900.091 18.0251Z" fill="#4C3768"/>
<path d="M904.554 51.5812C910.733 50.296 916.913 49.002 923.093 47.7168C925.214 47.2767 927.212 45.5601 927.494 43.3154C927.74 41.3788 926.262 39.5831 924.193 40.0144C918.013 41.2996 911.834 42.5936 905.654 43.8788C903.533 44.3189 901.535 46.0355 901.253 48.2802C901.006 50.2168 902.485 52.0126 904.554 51.5812Z" fill="#4C3768"/>

</svg>
</div>
        </span>
      </div>
      <p className="relative z-20 text-[64px] max-lg:text-3xl mt-2 font-playfair font-[800]">
        pour les adultes de demain
      </p>
    </span>
  </div>
</div>

    <p className="font-darker-grotesque font-[500] max-lg:text-[22px] mx-auto pt-[80px] text-[26px] text-[#4C3768] leading-[30px] text-center  px-[30px]">
      Poma, devenez grands-parents de cœur,<br /> partagez votre amour et votre
      sagesse
    </p>

  
    <div className="">
      <div className="relative w-full max-w-xs lg:max-w-sm">
        <Image
          src="/images/illustration-poma.svg"
          alt="illustration poma"
          width={371.35}
          height={541.63}
        />
      </div>
      <div className="-translate-y-[230px] lg:-translate-y-[680px]">
      <Link href="/download">
        <button className="mt-[40px] font-[700] center bg-[#74549F] text-white text-[20px] px-[20px] pt-[8px] pb-[12px] rounded-[8px] font-darker-grotesque">
        Télécharger l’app
        </button>
      </Link>
      <div className="flex justify-center mt-[48px]">
      <Image className="max-lg:w-[40px]" src="/images/Group 686.svg" width={50} height={50} alt="grp"/>
      </div>
      </div>
    </div>
  </section>
);

export default Header;
