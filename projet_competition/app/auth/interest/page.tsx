'use client'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { interest_one, interest_three, interest_two, interest_four, interest_five } from '@/constants'



const Interest = () => {
    const router = useRouter()
    const [next, setNext] = useState('interest-one')


    
    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-start relative overflow-hidden ">
            {next == 'interest-one' &&
        
        <div className=" max-sm:w-[90%] sm:w-[620px] flex flex-col items-center justify-start">
            <span className="w-full flex flex-row items-center justify-between mt-[37px] ">
                <span className="w-[66.23px] border-b-[2px] border-[#513675]  rounded-[1px]" onClick={()=> setNext('interest-one')}>
                </span>
                <span className="w-[66.23px] border-b-[2px] border-[##E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[##E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[##E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[##E9E2F0] rounded-[1px] "></span>
            </span>

            <div className="w-full h-[555px] mt-[34.61px] sm:mt-[20px] flex flex-col items-start justify-start rounded-[11px] bg-[#E9E2F0] p-[20px] ">
                <span className="w-[219px] sm:w-full max-sm:mt-[18px] sm:mt-0  flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold ">
                    Centre d’intérêt.
                </span>

                <span className="w-[298px] sm:w-full h-[48px] mt-[14px] sm:mt-0 flex items-center justify-start text-[#513675] grot-font font-semibold text-[18px] leading-[24.41px] ">
                    Quel niveau de proximité géographique souhaiteriez-vous ?
                </span>

                <span className="w-[298px] h-[14px] mt-[6px] flex items-center justify-start text-[#51367580] grot-font font-semibold text-[12px] leading-[14.06px] ">
                    Sélectionnez toutes les options pertinentes
                </span>
                <div className="mt-[22px] flex flex-col items-center justify-start w-full gap-[9px] ">


                {interest_one.map((data, ind)=>{

                    return(
                        <span key={ind} className="w-full sm:h-[65px] h-[75px] rounded-[8px] border-[1px] border-[#513675] bg-[#F3EFF6] px-[19px] flex justify-start hover:bg-[#513675] hover:text-[#F3EFF6] text-[#513675] ">
                            <span className="w-[298px] h-[24px] mt-[18px]  flex items-center justify-start  grot-font font-semibold text-[18px] leading-[24.41px] ">
                            {data}
                            </span>
                        </span>
                    )
                })}
                </div>

            </div>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[36px] sm:mt-[25px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> setNext('interest-two') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Suivant </p>
                    </span>
            </button>


        </div> }

        {next == 'interest-two' &&
        
        <div className="block  sm:w-[620px] max-sm:w-[90%] flex flex-col items-center justify-start">
            <span className="w-full flex flex-row items-center justify-between mt-[37px] ">
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] cursor-pointer" onClick={()=> setNext('interest-one')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] cursor-pointer" onClick={()=> setNext('interest-two')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] "></span>
            </span>

            <div className="w-full h-[555px] mt-[34.61px] sm:mt-[20px] flex flex-col items-start justify-start rounded-[11px] bg-[#E9E2F0] p-[20px] ">
                <span className="w-[219px]  mt-[18px] sm:w-full sm:mt-0 flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold ">
                    Centre d’intérêt
                </span>

                <span className="w-[298px] sm:w-full sm:mt-0 h-[48px] mt-[14px] flex items-center justify-start text-[#513675] grot-font font-semibold text-[18px] leading-[24.41px] ">
                Quel type d'activités aimeriez-vous partager avec vos petits-enfants de cœur ?
                </span>

                <span className="w-[298px] h-[14px] mt-[6px] flex items-center justify-start text-[#51367580] grot-font font-semibold text-[12px] leading-[14.06px] ">
                Sélectionnez toutes les options pertinentes
                </span>

                <div className="mt-[22px] flex flex-col items-center justify-start w-full gap-[9px] ">

                    {interest_two.map((data, ind)=>{
                        
                        return(
                            <span key={ind} className="w-full h-[75px] sm:h-[65px]  rounded-[8px] border-[1px] border-[#513675] bg-[#F3EFF6] px-[19px] flex justify-start hover:bg-[#513675] hover:text-[#F3EFF6] text-[#513675] ">
                                <span className="w-[298px] h-[24px] mt-[18px]  flex items-center justify-start  grot-font font-semibold text-[18px] leading-[24.41px] ">
                                {data}
                                </span>
                            </span>
                        )
                    })}
                </div>

            </div>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[36px] sm:mt-[25px] grot-font flex items-start justify-center hover:bg-[#6D489D] font-bold" onClick={()=> setNext('interest-three') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Suivant </p>
                    </span>
            </button>


        </div> }

        {next == 'interest-three' &&
        
        <div className="block max-sm:w-[90%] sm:w-[620px] mx-auto  flex flex-col items-center justify-start">
            <span className="w-full flex flex-row items-center justify-between mt-[37px] ">
                <span className="w-[66.23px] border-b-[2px] border-[#513675]  rounded-[1px]" onClick={()=> setNext('interest-one')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-two')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-three')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] "></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] "></span>
            </span>

            <div className="w-full h-[555px] mt-[34.61px] sm:mt-[20px]  flex flex-col items-start justify-start rounded-[11px] bg-[#E9E2F0] p-[20px] ">
                <span className="w-[219px] sm:w-full sm:mt-0  mt-[8px] flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold ">
                    Centre d’intérêt
                </span>

                <span className="w-[298px] sm:w-full h-[48px] mt-[30px] sm:mt-0 flex items-center justify-start text-[#513675] grot-font font-semibold text-[18px] leading-[24.41px] ">
                Quel type de relation espérez-vous développer avec vos petits-enfants de cœur ?
                </span>

                <span className="w-[298px] sm:w-full h-[14px] mt-[20px] flex items-center justify-start text-[#51367580] grot-font font-semibold text-[12px] leading-[14.06px] ">
                Sélectionnez toutes les options pertinentes
                </span>

                <div className="mt-[22px] flex flex-col items-center justify-start w-full gap-[10px] pb-[20px] ">


                {interest_three.map((data, ind)=>{
                    
                    return(
                        <span key={ind} className="w-full h-[75px] sm:h-[65px] rounded-[8px] border-[1px] border-[#513675] bg-[#F3EFF6] px-[19px] flex justify-start hover:bg-[#513675] hover:text-[#F3EFF6] text-[#513675] ">
                            <span className="w-[298px] h-[24px] mt-[18px]  flex items-center justify-start  grot-font font-semibold text-[18px] leading-[24.41px] ">
                            {data}
                            </span>
                        </span>
                    )
                })}
                </div>
                
            </div>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[36px] sm:mt-[25px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> setNext('interest-four') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Suivant </p>
                    </span>
            </button>


        </div> }

        {next == 'interest-four' &&
        
        <div className=" max-sm:w-[90%] sm:w-[620px] flex flex-col items-center justify-start">
            <span className="w-full flex flex-row items-center justify-between mt-[37px] ">
                <span className="w-[66.23px] border-b-[2px] border-[#513675]  rounded-[1px]" onClick={()=> setNext('interest-one')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-two')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-three')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-four')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#E9E2F0] rounded-[1px] " ></span>
            </span>

            <div className="w-full h-[555px] mt-[34.61px] sm:mt-[20px] flex flex-col items-start justify-start rounded-[11px] bg-[#E9E2F0] p-[20px] ">
                <span className="-[219px] sm:w-full max-sm:mt-[18px] sm:mt-0  flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold ">
                    Centre d’intérêt
                </span>

                <span className="w-[298px] sm:w-full h-[48px] mt-[14px] sm:mt-0 flex items-center justify-start text-[#513675] grot-font font-semibold text-[18px] leading-[24.41px] ">
                Quel type de personnalité recherchez-vous chez un petits-enfants de cœur ?
                </span>

                <span className="w-[298px] h-[14px] mt-[6px] flex items-center justify-start text-[#51367580] grot-font font-semibold text-[12px] leading-[14.06px] ">
                Sélectionnez toutes les options pertinentes
                </span>
                
                <div className="mt-[22px] flex flex-col items-center justify-start w-full gap-[9px] ">

                {interest_four.map((data, ind)=>{
                    
                    return(
                        <span key={ind} className="w-full h-[63.32px] sm:h-[60px]  rounded-[8px] border-[1px] border-[#513675] bg-[#F3EFF6] px-[19px] flex justify-start hover:bg-[#513675] hover:text-[#F3EFF6] text-[#513675] ">
                            <span className="w-[298px] h-[24px] mt-[18px]  flex items-center justify-start  grot-font font-semibold text-[18px] leading-[24.41px] ">
                            {data}
                            </span>
                        </span>
                    )
                })}
                </div>

                
            </div>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] mt-[36px] sm:mt-[25px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> setNext('interest-five') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Suivant </p>
                    </span>
            </button>


        </div> }

        {next == 'interest-five' &&
        
        <div className="block  w-[90%] sm:w-[620px] flex flex-col items-center justify-start">
            <span className="w-full flex flex-row items-center justify-between mt-[37px] ">
                <span className="w-[66.23px] border-b-[2px] border-[#513675]  rounded-[1px]" onClick={()=> setNext('interest-one')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-two')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-three')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-four')}></span>
                <span className="w-[66.23px] border-b-[2px] border-[#513675] rounded-[1px] " onClick={()=> setNext('interest-five')}></span>
            </span>

            <div className="w-full h-[575px] mt-[34.61px] sm:mt-[20px] flex flex-col items-start justify-start rounded-[11px] bg-[#E9E2F0] px-[20px] ">
                <span className="w-[219px] sm:w-full max-sm:mt-[18px] sm:mt-[5px]  flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold ">
                    Centre d’intérêt.
                </span>

                <span className="w-[298px] sm:w-full h-[48px] mt-[14px] sm:mt-0 flex items-center justify-start text-[#513675] grot-font font-semibold text-[18px] leading-[24.41px] ">
                Quelle qualité trouvez-vous la plus importante ?
                </span>

                <span className="w-[298px] h-[14px] mt-[12px] flex items-center justify-start text-[#51367580] grot-font font-semibold text-[12px] leading-[14.06px] ">
                Sélectionnez toutes les options pertinentes
                </span>

                <div className="mt-[22px] flex flex-col items-center justify-start w-full gap-[9px] ">

                {interest_five.map((data, ind)=>{
                    
                    return(
                        <span key={ind} className="w-full h-[60px]  rounded-[8px] border-[1px] border-[#513675] bg-[#F3EFF6] px-[19px] flex justify-start hover:bg-[#513675] hover:text-[#F3EFF6] text-[#513675] ">
                            <span className="w-[298px] h-[24px] mt-[18px]  flex items-center justify-start  grot-font font-semibold text-[18px] leading-[24.41px] ">
                            {data}
                            </span>
                        </span>
                    )
                })}
                </div>
                
            </div>

            <button className="w-[304px] h-[48.95px] bg-[#513675] rounded-[64px] sm:mt-[20px] mt-[36px] grot-font flex items-start justify-center hover:bg-[#6D489D]" style={{fontWeight: '700'}} onClick={()=> setNext('completed') } >
                    <span className=" h-[24px] mt-[10.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                        <p className=" text-[#F3EFF6] text-[18px] ">Suivant </p>
                    </span>
            </button>


        </div> }

        {next == 'completed' &&
        
        <div className="block w-full flex flex-col items-center justify-start">
            
            <div className="w-[90%] sm:w-[620px]  mx-auto  h-[432px] flex flex-col items-center justify-start ">

                <span className="w-[95.08px] h-[28.07px] mt-[37px] flex items-center justify-center relative overflow-hidden  ">
                    <Image 
                        src="/logo-poma.svg" 
                        alt="Authentication" 
                        layout="fill" 
                        objectFit="cover" 
                    />
                </span>

                <span className="w-[324px] h-[80px] mt-[23px] flex items-center justify-start text-[#513675] playfair-display-font text-[30px] leading-[39.99px] font-bold text-center ">
                Merci d’avoir complété le questionnaire
                </span>

                <span className="w-[323.08px] h-[48px] mt-[18px] flex items-center justify-start text-[#513675] text-[14px] leading-[16.41px] font-normal roboto-font text-center ">
                Nous sommes désormais en mesure de vous mettre en relation avec des personnes qui partagent vos centres d’intêret
                </span>

                <div className="w-full flex items-center justify-center gap-[14px]  ">

                    <button className="w-[161px] h-[49px] bg-[#E9E2F0] rounded-[64px] mt-[48.93px] grot-font flex items-start justify-center hover:grayscale-[20%] font-bold" onClick={()=> {sessionStorage.setItem('signup-stage', 'profile'); router.back() } } >
                            <span className=" h-[20px] mt-[12.93px] flex items-center justify-between  text-[#513675] gap-3 ">
                                <p className="  text-[15px] grot-font ">Modifier ma réponse </p>
                            </span>
                    </button>

                    <button className="w-[161px] h-[49px] bg-[#513675] rounded-[64px] mt-[48.93px] grot-font flex items-start justify-center hover:grayscale-[20%] font-bold" onClick={()=> router.push('/home') } >
                            <span className=" h-[20px] mt-[12.93px] flex items-center justify-between  text-[#F3EFF6] gap-3 ">
                                <p className=" text-[#F3EFF6] text-[15px] grot-font ">Commencer à matcher </p>
                            </span>
                    </button>

                </div>

                <span className="w-[30px] h-[30px] mt-[30px] flex items-center justify-center rounded-[100%] bg-[#513675] " onClick={()=> router.back()}>
                    <span className="w-[11.87px] h-[10px] flex items-center justify-center relative overflow-hidden " style={{ transform: 'rotate(90deg)' }}>
                        <Image 
                            src="/Group 686.svg" 
                            alt="Authentication" 
                            layout="fill" 
                            objectFit="cover" 
                            style={{filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(150%) contrast(103%)'}} 
                        />
                    </span>
                </span>
                <span className=" w-[121px] h-[36px]  flex items-center justify-center text-[#513675] text-[14px] leading-[16.41px] grot-font font-normal text-center ">
                Retour à l’accueil
                </span>



            </div>


        </div> }
        </div>
    )
}

export default Interest