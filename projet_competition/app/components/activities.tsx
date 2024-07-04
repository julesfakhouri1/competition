'use client'
import { activityList, filter_profile_four, profile_four, profile_one, activity_row_one, activity_row_two } from '@/constants';
import { MobileNavProps } from '@/types';
import React, {useState, useEffect, useRef} from 'react'
import { GoPerson } from 'react-icons/go';
import { IoMdNotifications } from 'react-icons/io'
import { LuHome, LuSearch } from "react-icons/lu";
import { PiUsersThree } from 'react-icons/pi';
import { TbBallBasketball, TbMessageCircle } from 'react-icons/tb';
import { FiSearch } from "react-icons/fi";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import Image from 'next/image'
import { IoStar } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { IoCalendarOutline } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

import { Swiper as SwiperClass } from 'swiper/types'; // Import Swiper types
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Activities = ({mobileNav, setMobileNav, handleMobileNav}:MobileNavProps) => {
    const [showActivities, setShowActivities] = useState(false)
    const [selectedActivities, setSelectedActivities] = useState([''])
    const [selectedBtn, setSelectedBtn] = useState('')
    const [showFilters, setShowFilters] = useState(false)
    const swiperRef1 = useRef<SwiperClass | null>(null);
    const swiperRef2 = useRef<SwiperClass | null>(null);

  const handleNext = () => {
    if (swiperRef1.current) {
      swiperRef1.current.slideNext();
    }
  };

  const handleNewNext = () => {
    if (swiperRef2.current) {
      swiperRef2.current.slideNext();
    }
  };

    useEffect(()=>{

        if (!selectedActivities.length){
            setShowFilters(false)
        }

    },[selectedActivities])


    

    useEffect(()=>{
        const selected_btn = sessionStorage.getItem('selected-btn')
        if (!selected_btn || selected_btn == null){
            setSelectedBtn('left')
        }
        else{
            setSelectedBtn(selected_btn)
        }
    }, [])

    

    function handleSelectedBtn(item:string) {
        setSelectedBtn(item)
        sessionStorage.setItem('selected-btn', item)
    }

    function handleActivities(item:string) {
        if (selectedActivities.includes(item)){
        setSelectedActivities(selectedActivities.filter(activity => activity !== item))
    } else {
        setSelectedActivities([...selectedActivities, item])
    }
}

    function removeFilter(item:string){
        setSelectedActivities(selectedActivities.filter(activity => activity !== item))

    }

    function handleValider() {
        setShowActivities(!showActivities)
        if (selectedActivities.length) {
            setShowFilters(true)
        }
    }

    return (
    <div className="w-full h-full flex flex-col justify-start items-center pb-[20px]   ">
        {/* larger screen */}
        <div className="hidden sm:block w-full h-[100vh] sm:px-[27px] sm:pb-[20px] flex flex-col   ">
            <header className="sm:mt-[65px]  w-full h-[44px] flex items-center justify-between ">
                <p className="h-[44px] w-[254px] font-bold text-[33px] playfair-display-font leading-[43.99px] text-[#513675] mb-[40px] ">Ils vous ont liké !</p>

                <span className="w-[38px] h-[35.32px]  relative flex items-center justify-end" >
                    <span className='text-[#513675] ml-[5px] '>
                        <IoMdNotifications size={'100%'}  />
                    </span>
                    <span className="absolute left-0 top-0 bg-white w-[18.47px] h-[18.47px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                        <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                    </span>
                </span>
            </header>

            <div className="w-full  flex flex-col items-center justify-center  pt-[20px] mt-[15px]">
                <div className="h-[45px] flex flex-row items-center justify-between border border-[#E9E2F0] rounded-[8px] bg-[#E9E2F0] ">
                    <span className="w-[287px] h-full rounded-[8px]  bg-[#513675] grot-font flex items-start justify-center  ">
                        <p className="text-[#E9E2F0] text-[28px] h-[20px] grot-font ">Réservation d’activités</p>
                    </span>
                    <span className="w-[287px] h-full rounded-[8px]  bg-[#E9E2F0] grot-font flex items-start justify-center  ">
                        <p className="text-[#513675] text-[28px] h-[20px] grot-font mb-[5px] ">Mon planning...</p>
                    </span>
                </div>

                <div className=" h-[49px] mt-[30px] w-[340px] border-2 border-[#513675] relative rounded-[38px] ">
                    <input type="text" name="search" id="search" placeholder='Rechercher' className='w-full outline-none bg-transparent mt-[8px] grot-font px-[45px] flex items-center font-semibold h-[22px] text-[20px] py-[8px] text-[#513675] ' />
                    <span className="absolute  text-[#513675] top-[11px] left-[13.85px]  font-extrabold ">
                        <LuSearch size={23} />
                    </span>
                </div>

            </div>

            <div className="w-full mt-[40px]  flex items-center justify-center ">
                <div className="w-full flex flex-col items-ceter justify-center ">
                    <div className="w-full flex flex-row items-center justify-center gap-[20px] ">
                        {activity_row_one.map((data, ind)=>{

                            return(
                                <span key={ind} className="w-[163px] h-[183px] flex flex-col items-center justify-between bg-[#E9E2F0] rounded-[10px] ">
                                    <span className="w-[80.42px] h-[72.41px] mt-[15px] flex items-center justify-center relative overflow-hidden  ">
                                        <Image 
                                            src={data.img}
                                            alt="Authentication" 
                                            layout="fill" 
                                            objectFit="cover" 
                                        />
                                    </span>

                                    <p className="text-[24px]  ">{data.title}</p>

                                </span>
                            )
                        }) }
                    </div>

                    <div className="w-full flex flex-row items-center justify-center gap-[20px] mt-[20px] ">
                        {activity_row_two.map((data, ind)=>{

                            return(
                                <span key={ind} className="w-[163px] h-[183px] flex flex-col items-center justify-between bg-[#E9E2F0] rounded-[10px] ">
                                    <span className="w-[80.42px] h-[72.41px] mt-[15px] flex items-center justify-center relative overflow-hidden  ">
                                        <Image 
                                            src={data.img} 
                                            alt="Authentication" 
                                            layout="fill" 
                                            objectFit="cover" 
                                        />
                                    </span>

                                    <p className="text-[24px]  ">{data.title}</p>

                                </span>
                            )
                        }) }
                    </div>
                </div>
            </div>


        </div>


        {/* for mobile */}
        <div className="block sm:hidden w-full h-full flex flex-col justify-start items-center pb-[20px]">
            <header className="h-[64px] flex items-start justify-between w-[90%] mx-auto">
                <p className="playfair-display-font font-bold leading-[39.99px] w-[119px] mt-[12px] h-[40px] flex items-center text-[#513675] text-[27px]">
                Activités
                </p>
                <span className="mt-[14.64px] w-[35.2px] h-[32.72px] relative">
                    <span className="w-[25.72px] h-[30.01] "></span>
                    <span  className='text-[#513675] ml-[3.24px]'>
                    <IoMdNotifications size={'100%'} />
                    </span>
                    <span className="absolute left-0 top-0 bg-white w-[18.95px] h-[18.95px] rounded-[100%] border-[0.82px] border-[#513675] flex items-start justify-center">
                        <p className="text-[11.51px] font-extrabold leading-[7.92px] text-[#513675] mt-[5.28px]">15</p>
                    </span>
                </span>
            </header>

            <div className="w-full mx-auto h-[143px] flex flex-col items-center justify-start  overflow-y-auto">
                <div className="w-[90%] h-[143px] flex flex-col items-center justify-center gap-[20px]  ">
                    {/* buttons */}
                    <div className="w-full h-[45px] flex items-center justify-center rounded-[4px] bg-[#E9E2F0] ">
                        <button className={selectedBtn == 'left'? "rounded-[8px] h-full w-1/2 bg-[#513675] text-[#E9E2F0] ": "rounded-[8px] h-full w-1/2  text-[#513675] bg-[#E9E2F0] "} onClick={()=> handleSelectedBtn('left')} >
                            <p className="h-[22px] w-[142px] grot-font font-bold text-[16px] leading-[21.7px] text-center mx-auto  ">Réservation d’activités</p>
                        </button>

                        <button className={selectedBtn == 'right'? "rounded-[8px] h-full w-1/2 bg-[#513675] text-[#E9E2F0] ": "rounded-[8px] h-full w-1/2  text-[#513675] bg-[#E9E2F0] "} onClick={()=> handleSelectedBtn('right')} >
                            <p className="h-[22px] w-[142px] grot-font font-bold text-[16px] leading-[21.7px] text-center mx-auto flex items-center  ">Réservation d’activités</p>
                        </button>

                    </div>
                    {/* search iput */}
                    <div className="w-full h-[38px] border-2 border-[#513675] relative rounded-[38px] ">
                        <input type="text" name="search" id="search" className='w-full outline-none bg-transparent mt-[4px] grot-font px-[35px] flex items-center font-semibold h-[22px] text-[16px] py-[8px] text-[#513675] ' />
                        <span className="absolute h-[12.81px] w-[12.51px] text-[#513675] top-[11px] left-[13.85px] bg-transparent font-extrabold ">
                            <LuSearch size={'100%'} />
                        </span>
                    </div>

                </div>
            </div>

            <div className="w-full  mx-auto h-[475.5px] flex flex-col items-center justify-start  overflow-y-auto  ">

                <div className="w-full flex flex-col items-center justify-start gap-[20px] ">
                    {activityList.map((data, ind)=>{
                        return(
                            <div  key={ind} className="w-[90%] flex flex-row items-start justify-center gap-[24px] ">
                                
                                {data.map((data, ind)=>{
                                    const {img, name, placeholder} = data

                                    return(
                                        <div key={ind}  className="w-1/2 h-[182.92px] rounded-[10px] flex flex-col items-center jusity-start bg-[#E9E2F0]  ">
                                            <span className="w-[96.32px] h-[74.92px] mt-[20px] bg-gray-100 "></span>
                                            <span className="h-[48px] mt-[20px] mx-[20px]  flex items-center justify-center  ">
                                                <p className="text-[22px] grot-font text-center font-extrabold leading-[24px] w-full text-[#513675]   ">{name}</p>
                                            </span>
                                        </div>
                                            )
                                        })}
                            </div>
                        )
                    })}

                </div>

            </div>

            <footer className="flex flex-row items-center justify-center h-[82px] w-full ">

                <span className={mobileNav=="Accueil"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Accueil')}>
                        <span className="w-[18px] h-[20px]  "><LuHome size={'100%'} /> </span>
                        <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Accueil</p>
                </span>
                <span className={mobileNav=="Activités"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Activités')}>
                        <span className="w-[18px] h-[20px] " style={{transform: 'rotate(60deg)'}}><TbBallBasketball size={'100%'} /> </span>
                        <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Activités</p>
                </span>
                <span className={mobileNav=="Communauté"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Communauté')}>
                        <span className="w-[18px] h-[20px] "><PiUsersThree size={'100%'} /> </span>
                        <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Communauté</p>
                </span>
                <span className={mobileNav=== "Message"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Message')}>
                        <span className="w-[18px] h-[20px] "><TbMessageCircle size={'100%'} /> </span>
                        <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Message</p>
                </span>
                <span className={mobileNav=="Profil"? "active-mobile-nav":"mobile-nav"} onClick={()=> handleMobileNav('Profil')}>
                        <span className="w-[18px] h-[20px] "><GoPerson size={'100%'} /> </span>
                        <p className="text-[10px] w-[36px] h-[14px] grot-font text-[#513675] leading-[13.56px] text-center flex justify-center items-center font ">Profil</p>
                </span>
            </footer>
        </div>
        
    </div>
  )
}

export default Activities