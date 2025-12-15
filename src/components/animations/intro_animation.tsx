'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const container = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const dots = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 0.5,
  }));

  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline();

    tl.set([nameRef.current, titleRef.current, ringRef.current], { opacity: 0 })
      .set(nameRef.current, { y: 30 })
      .set(titleRef.current, { y: 20 })
      .set(ringRef.current, { scale: 0.8 })
      .set('.dot', { opacity: 0, scale: 0 })
      .to('.dot', {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.015,
        ease: 'power2.out',
      })
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
      }, '-=0.4')
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }, '-=0.8')
      .to(ringRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'elastic.out(1, 0.4)',
      }, '-=1')
      .to(ringRef.current, {
        boxShadow: '0 0 80px hsl(175 70% 40% / 0.7), 0 0 120px hsl(175 70% 40% / 0.5)',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      }, '-=0.3')
      .to(container.current, {
        opacity: 0,
        duration: 1,
        ease: 'power2.in',
        onComplete: () => {
          setIsVisible(false);
          onComplete();
        },
      }, '+=1.5');
  }, { scope: container });

  if (!isVisible) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
    >
      <div ref={dotsRef} className="absolute inset-0">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="dot absolute rounded-full bg-primary"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              boxShadow: `0 0 ${dot.size * 2}px hsl(175 70% 40% / 0.6)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center">
        <div
          ref={ringRef}
          className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full border-1 border-primary opacity-0"
          style={{
            boxShadow: '0 0 40px hsl(175 70% 40% / 0.3)',
          }}
        />

        <div className="relative z-20 text-center">
          <h1
            ref={nameRef}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground uppercase tracking-tight mb-4 opacity-0"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            JOSHUA
          </h1>
          <p
            ref={titleRef}
            className="text-lg md:text-xl lg:text-2xl text-foreground/90 font-light opacity-0"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;