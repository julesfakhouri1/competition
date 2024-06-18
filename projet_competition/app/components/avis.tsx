"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const avis = [
  {
    name: 'Léana',
    age: '18 ans',
    role: 'Étudiante en Marketing',
    img: '/images/Rectangle 86 (5).svg', 
  },
  {
    name: 'Clément',
    age: '21 ans',
    role: 'Étudiant en Droit',
    img: '/images/Rectangle 86 (6).svg',
  },
  {
    name: 'Manon',
    age: '25 ans',
    role: 'Photographe',
    img: '/images/Rectangle 86 (7).svg',
  },
  {
    name: 'Mathéo',
    age: '19 ans',
    role: 'Passionné du street art',
    img: '/images/Rectangle 86 (8).svg',
  },
  {
    name: 'Léana',
    age: '19 ans',
    role: 'Étudiante en Marketing',
    img: '/images/portrait-young-woman-listening-music-through-mobile-phone-stairs 2 (1).svg',
  },
];

const AvisSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avis.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? avis.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-[8%] px-4 bg-[#FFFFFF] ">
      <h2 className="text-5xl max-sm:text-2xl font-bold text-center text-[#4C3768]">
        Partenaire d&apos;aventure
      </h2>
      <p className="text-center max-sm:text-sm relative max-sm:relative max-sm:left-0 left-[20%] text-xl mt-4 max-sm:w-[100%] w-[60%] text-[#4C3768]">
        Vous avez le pouvoir de sélectionner vos petits-enfants de cœur en fonction de vos affinités et préférences personnelles. Que ce soit par des centres d&apos;intérêt communs, des valeurs partagées ou simplement une connexion instinctive.
      </p>

      <div className="mt-8">
        {/* Slider for mobile screens */}
        <div className="relative w-full hidden max-sm:block overflow-hidden">
          <div className="flex justify-center items-center">
            <button onClick={prevSlide} className="absolute left-0 z-10 p-2 bg-gray-300 rounded-full">
              &#10094;
            </button>
            <div className="flex transition-transform transform" style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${avis.length * 100}%` }}>
              {avis.map((partner, index) => (
                <div
                  key={index}
                  className="flex-none w-full sm:w-1/3 transition-transform transform scale-90"
                  style={{ transform: `scale(${index === currentIndex ? 1 : 0.8})` }}
                >
                  <div className="text-center rounded-lg mx-2">
                    <div className="rounded-xl flex items-center justify-center h-48 w-full overflow-hidden">
                      <Image
                        src={partner.img}
                        className="rounded-xl border-2"
                        alt={partner.name}
                        width={200}
                        height={300}
                      />
                    </div>
                    <h3 className="mt-4 text-xl max-sm:text-xs max-sm:font-light font-bold text-[#4C3768] w-full">
                      {partner.name}, {partner.age}
                    </h3>
                    <p className="mt-2 text-[#4C3768] text-center w-full">
                      {partner.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={nextSlide} className="absolute right-0 z-10 p-2 bg-gray-300 rounded-full">
              &#10095;
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {avis.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 mx-1 rounded-full ${
                  currentIndex === index ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:flex flex-wrap justify-center mt-8 gap-4">
          {avis.map((partner, index) => (
            <div
              key={index}
              className="text-center rounded-lg w-[40px] sm:w-1/2 md:w-1/4 lg:w-1/6"
            >
              <div className="rounded-xl flex items-center justify-center h-48 w-full rounded-lg overflow-hidden">
                <Image
                  src={partner.img}
                  className="rounded-xl border-2"
                  alt={partner.name}
                  width={200}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-xl max-sm:text-xs max-sm:font-light font-bold text-[#4C3768] w-full">
                {partner.name}, {partner.age}
              </h3>
              <p className="mt-2 text-[#4C3768] text-center w-full">
                {partner.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvisSection;
