"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/onboarding');
    }, 3000); 

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-purple-50 flex flex-col items-center justify-between min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow">
        <Image src="/images/logo-poma.svg" alt="Poma Logo" width={100} height={100} />
      </div>

    {/**
      <div className="mb-10">
        <div className="w-10 h-10 border-8 border-purple-200 border-t-[#513675] rounded-full animate-spin"></div>
      </div>
    */}
    </div>
  );
};

export default LoadingScreen;
