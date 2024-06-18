import Image from 'next/image';

const Aunty = () => (

    
    <section className="mt-[10%] px-4 py-16">
        <div className="absolute top-[2049.85px] left-[90%]
">
    <Image src="/images/Vector 12.svg" alt="bar" width={236.14} height={979.35}/>
    </div>
        <h2 className="text-6xl max-sm:text-2xl  font-semibold text-center pb-8 text-[#4C3768]">Correspondance par préférence</h2>
        <div className="flex flex-col w-[100%] mt-8 md:flex-row justify-between mt-8 max-sm:mx-[5%] mx-[15%]">
            <div className=" max-sm:w-[90%]">
                <Image src="/images/V3 4.svg" alt="aunty" width={400} height={400}/>

            </div>
            <div className=" relative max-sm:relative max-sm:left-0 left-6   flex-col   flex  justify-center py-4  rounded-lg  flex-1">
                
                <h3 className="mt-4 text-xl max-sm:text-sm text-[#4C3768] my-4 max-sm:w-[100%] w-[80%]">Grâce à notre système de correspondance par QCM, vous êtes associé à des âmes semblables, assurant une alliance harmonieuse.</h3>
                <p className="mt-2 text-[#4C3768] max-sm:text-sm text-xl max-sm:w-[100%] w-[70%] ">Les affinités communes nourrissent l'identité de chaque petits-enfants de coeur. </p>
            </div>
            
        </div>
    </section>
);

export default Aunty;
