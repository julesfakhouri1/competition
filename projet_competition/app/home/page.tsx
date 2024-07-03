'use client'
import React, {useState, useEffect} from 'react'
import { IoMdNotifications } from "react-icons/io";
import { MdPerson } from "react-icons/md";
import Image from 'next/image'
import { LuHome } from "react-icons/lu";
import { TbBallBasketball } from "react-icons/tb";
import { TbMessageCircle } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { PiUsersThree } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";


import { Swiper as SwiperClass } from 'swiper/types'; // Import Swiper types
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { GrandChildren } from '../components/userProfile';
import { profile_one, profile_people } from '@/constants';
import BelovedGrandChildren from '../components/userProfile';
import Activities from '../components/activities';
import Message from '../components/message';
import Communaute from '../components/communaute';
import Profil from '../components/profil';
import Accueil from '../components/accueil';
import Notification from '../components/notification';
import SideNav from '../components/sideNav';


const Home = () => {
    const [mobileNav, setMobileNav] = useState('')

    

    useEffect(()=>{
        const nav = sessionStorage.getItem('mobile-nav')
        if (!nav || nav == null || !['Accueil', 'Activités', 'Communauté', 'Message', 'Profil'].includes(nav)) {
            setMobileNav('Accueil')
        }else{
            setMobileNav(nav)
        }

    },[])

    function handleMobileNav(item:string) {
        setMobileNav(item)
        sessionStorage.setItem('mobile-nav', item)
    }

  return (
    <div className="w-full flex items-start justify-start">
      {/* For Tabs and Bigger Screens */}
      <div className="hidden sm:block h-full w-full ">
        <div className="w-full flex flex-row items-start justify-center">
            {/* side bar */}

            <div className="w-[292px] h-full ">
                <SideNav mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} />
            </div>

            {/* right side */}
            <div className="flex-1 h-full "> 

                {mobileNav == "Accueil" && <Accueil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Activités" && <Activities mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Message" && <Message mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Communauté" && <Communaute mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
                {mobileNav == "Profil" && <Profil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }

            </div>

        </div>
      </div>

      {/* For Smaller Screens */}
      <div className="block sm:hidden sm:flex sm:flex-col sm:items-center sm:justify-start w-full mx-auto relative  overflow-y-auto pt-[10px] ">

            {mobileNav == "Notification" && <Notification mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Accueil" && <Accueil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Activités" && <Activities mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Message" && <Message mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Communauté" && <Communaute mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }
            {mobileNav == "Profil" && <Profil mobileNav={mobileNav} setMobileNav={setMobileNav} handleMobileNav={handleMobileNav} /> }


      </div>
    </div>
  )
}

export default Home
