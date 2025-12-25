'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagicCard from '@/components/ui/Magic_card';
import { HeroCardData } from '@/lib/db';

gsap.registerPlugin(ScrollTrigger);

const OverView = () => {
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(cardRefs.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
        // markers: true,
        end: 'bottom bottom',
        scrub: true,
        toggleActions: 'play none none none',
        onEnter: () => {
          gsap.to(cardRefs.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        },
        onEnterBack: () => {
          gsap.to(cardRefs.current, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        },
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    });

    numberRefs.current.forEach((el, index) => {
      if (!el) return;

      const target = Number(HeroCardData[index]?.h1 ?? 0);
      const counter = { value: 0 };

      gsap.to(counter, {
        value: target,
        duration: 1.5,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = Math.round(counter.value).toString();
          }
        },
      });
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="z-[1] w-full py-10 lg:mt-0 md:mt-5 mt-24"
    >
      <div className="lg:mx-20 mx-6 sm:mt-24">
        <div className="flex gap-5 items-center">
          {HeroCardData.slice(0, isMobile ? 1 : HeroCardData.length).map(
            (card, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="w-full"
              >
                <MagicCard
                  className="h-[180px] p-5 z-[5] w-full bg-[#18181b]"
                  index={index}
                >
                  <div className="space-y-5">
                    <h1
                      ref={(el) => {
                        numberRefs.current[index] = el;
                      }}
                      className="text-white text-5xl gradient-text font-black text-center"
                    >
                      {card.h1}+
                    </h1>
                    <p className="text-sm text-center text-white/90">{card.p}</p>
                  </div>
                </MagicCard>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default OverView;
