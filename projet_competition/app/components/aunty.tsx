import Image from "next/image";

const Aunty = () => (
    <div className="relative">
          <Image
      src="/images/Vector 12.svg"
      alt="bar"
      width={236.14}
      height={979.35}
      className="hidden lg:block absolute right-0 translate-y-[200px]"
    />
  <section className="mx-[32px] lg:mx-[120px] lg:-translate-y-[270px] -translate-y-[78px]">

    <div className="max-w-[1040px] mx-auto">
    <h2 className="text-[52px] max-lg:text-[27px] font-[800] text-center pb-8 text-[#4C3768] font-playfair">
      Correspondance par préférence
    </h2>
    <div className="flex flex-col w-full md:flex-row justify-between mt-8">
      <div className="">
        <Image src="/images/V3 4.svg" alt="aunty" width={400} height={400} />
      </div>
      <div className="font-darker-grotesque relative max-sm:relative max-sm:left-0 left-6 flex-col flex justify-center py-4 rounded-lg flex-1">
        <h3 className="mt-4 text-[20px] lg:text-[26px] font-[500] leading-[27px] text-[#4C3768] w-full">
          Grâce à notre système de correspondance par QCM, vous êtes associé à
          des âmes semblables, assurant une alliance harmonieuse.
        </h3>
        <p className="mt-2 text-[#4C3768] max-sm:text-[20px] leading-[27px] text-[20px] font-[500] lg:text-[26px]">
          Les affinités communes nourrissent l’identité de chaque <span className="font-[700]">petits-enfants
          de coeur.</span>
        </p>
      </div>
      </div>
    </div>
  </section>
  </div>
);

export default Aunty;
