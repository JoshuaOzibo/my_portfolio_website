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
    <section className="z-[1] py-10 lg:mt-0 mt-20">
       <div className="flex justify-center gap-5 items-center">
        {HeroCardData.slice(0, isMobile ? 1 : HeroCardData.length).map((card, index) => (
          <MagicCard card={{card}} className="h-[180px] mx-6 z-[5] w-[500px] bg-[#18181b] " index={index} key={index}>
            <div className="space-y-5">
            <h1 className="text-white text-5xl font-black text-center">{card.h1}+</h1>
            <p className="text-sm text-center text-white">{card.p}</p>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  )
}

export default OverView
