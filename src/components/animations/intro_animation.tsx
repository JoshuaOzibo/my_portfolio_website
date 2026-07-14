'use client';

import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

interface IntroAnimationProps {
  onComplete: () => void;
}

// Global flag to track if preloader has completed in this session
let hasPlayedCompleted = false;

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const container = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [dots, setDots] = useState<{ id: number; x: number; y: number; size: number }[]>([]);

  useEffect(() => {
    // If already played, immediately skip
    if (hasPlayedCompleted) {
      setIsVisible(false);
      onComplete();
      return;
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Generate random particle positions only on client mount to prevent SSR hydration mismatch
    setDots(
      Array.from({ length: 45 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }))
    );

    // Start requestAnimationFrame count-up (smooth 2000ms count duration so it stays longer)
    let start: number | null = null;
    const duration = 2000; 
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const val = Math.min(Math.floor((elapsed / duration) * 100), 100);
      
      setProgress(val);

      if (val < 100) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        // 1. Instantly trigger mounting of content underneath the fully visible loader
        onComplete();

        // 2. Sequential WELCOME letters fly-up exit
        gsap.to('.welcome-letter', {
          y: '-150%',
          opacity: 0,
          duration: 0.7,
          stagger: 0.04, 
          ease: 'power3.in',
        });

        // 3. Fade out loader panel overlay
        if (container.current) {
          gsap.to(container.current, {
            opacity: 0,
            duration: 0.7,
            delay: 0.1,
            ease: 'power2.inOut',
            onComplete: () => {
              hasPlayedCompleted = true;
              setIsVisible(false);
            },
          });
        } else {
          hasPlayedCompleted = true;
          setIsVisible(false);
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);



  if (!isVisible || hasPlayedCompleted) return null;

  return (
    <div
      ref={container}
      className="fixed inset-0 z-[9999] bg-[#0e0e0e] flex items-center justify-center overflow-hidden"
      style={{ background: '#0e0e0e' }}
    >
      {/* Background Subtle Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="intro-dot absolute rounded-full bg-white/10"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              opacity: 0.3,
              boxShadow: `0 0 ${dot.size * 3}px rgba(255, 255, 255, 0.2)`,
            }}
          />
        ))}
      </div>

      {/* Centered Straight WELCOME Text (Styled like "Joshua" on hero screen) */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          display: 'flex',
          gap: isMobile ? '0.1rem' : '0.2rem',
          userSelect: 'none',
        }}
      >
        {"WELCOME".split("").map((char, idx) => (
          <span
            key={idx}
            className="welcome-letter"
            style={{
              display: 'inline-block',
              fontFamily: "'Big Shoulders Display', sans-serif",
              fontWeight: 800,
              fontSize: 'clamp(4rem, 13vw, 11rem)',
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#ffffff',
              lineHeight: 0.88,
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      {/* Bottom Right Percentage Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: isMobile ? '2.5rem' : '4.5rem',
          right: isMobile ? '2.5rem' : '5rem',
          zIndex: 20,
          display: 'flex',
          alignItems: 'baseline',
          userSelect: 'none',
        }}
      >
        <span
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5.5vw, 6rem)',
            color: '#ffffff',
            lineHeight: 0.9,
            marginRight: '0.1rem',
          }}
        >
          %
        </span>
        <span
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5.5vw, 6rem)',
            color: '#ffffff',
            lineHeight: 0.9,
          }}
        >
          {progress}
        </span>
      </div>
    </div>
  );
};

export default IntroAnimation;