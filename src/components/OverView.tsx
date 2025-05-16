'use client'

import { useState, useEffect } from 'react'
import MagicCard from "@/components/ui/Magic_card";
import { HeroCardData } from '@/lib/db'

const OverView = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="z-[1] w-full  py-10 lg:mt-0 md:mt-5 mt-48">
      <div className="lg:mx-20 mx-6">
        <div className="flex gap-5 items-center">
          {HeroCardData.slice(0, isMobile ? 1 : HeroCardData.length).map((card, index) => (
            <MagicCard card={{card}} className="h-[180px] p-5 z-[5] w-full  bg-[#18181b] " index={index} key={index}>
              <div className="space-y-5">
              <h1 className="text-white text-5xl font-black text-center">{card.h1}+</h1>
              <p className="text-sm text-center text-white">{card.p}</p>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OverView
