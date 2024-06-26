"use client";
import React, { useState, useRef, useEffect } from 'react';
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
    img: '/images/portrait-young-woman-listening-music-through-mobile-phone-stairs 2 (1).svg',
  },
  {
    name: 'Léana',
    age: '19 ans',
    role: 'Étudiante en Marketing',
    img: '/images/Rectangle 86 (8).svg',
  },
];

const AvisSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % avis.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + avis.length) % avis.length);
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    setStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousedown', handleDragStart as any);
    container.addEventListener('mousemove', handleDragMove as any);
    container.addEventListener('mouseup', handleDragEnd);
    container.addEventListener('mouseleave', handleDragEnd);
    container.addEventListener('touchstart', handleDragStart as any);
    container.addEventListener('touchmove', handleDragMove as any);
    container.addEventListener('touchend', handleDragEnd);

    return () => {
      container.removeEventListener('mousedown', handleDragStart as any);
      container.removeEventListener('mousemove', handleDragMove as any);
      container.removeEventListener('mouseup', handleDragEnd);
      container.removeEventListener('mouseleave', handleDragEnd);
      container.removeEventListener('touchstart', handleDragStart as any);
      container.removeEventListener('touchmove', handleDragMove as any);
      container.removeEventListener('touchend', handleDragEnd);
    };
  }, []);

  const infiniteAvis = [...avis];
  const offset = avis.length;

  return (
    <section className="py-[8%] px-4 bg-[#FFFFFF]">
      <h2 className="max-lg:text-[27px] text-[52px] font-[800] text-center text-[#4C3768] font-playfair">
        Partenaire d'aventure
      </h2>
      <p className="text-center max-sm:text-[20px] relative max-sm:relative max-sm:left-0 left-[20%] text-xl mt-4 max-sm:w-[100%] w-[60%] text-[#4C3768] font-[500] leading-[27px] font-darker-grotesque">
        Vous avez le pouvoir de sélectionner vos petits-enfants de cœur en fonction de vos affinités et préférences personnelles. Que ce soit par des centres d'intérêt communs, des valeurs partagées ou simplement une connexion instinctive.
      </p>

      <div className="mt-8 relative overflow-hidden" ref={containerRef}>
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentIndex * (100 / avis.length)}% - ${currentIndex * 30}px))`,
          }}
        >
          {infiniteAvis.map((partner, index) => (
            <div key={index} className="flex-none w-[calc(100% - 30px)] mx-[15px] lg:w-[calc(100% - 42px)] lg:mx-[21px]">
              <div className="text-center rounded-lg font-darker-grotesque">
                <div className="rounded-xl flex items-center justify-center h-48 w-full overflow-hidden">
                  <Image
                    src={partner.img}
                    className="rounded-xl border-2"
                    alt={partner.name}
                    width={200}
                    height={300}
                    objectFit="cover"
                  />
                </div>
                <h3 className="mt-4 text-xl max-sm:text-[20px] leading-[27px] font-[500] text-[#4C3768] w-full">
                  {partner.name}, {partner.age}
                </h3>
                <p className="mt-2 text-[#4C3768] text-center w-full text-[16px]">
                  {partner.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          {avis.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 mx-1 rounded-full ${
                currentIndex % avis.length === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AvisSection;
