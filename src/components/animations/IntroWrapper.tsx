'use client';

import { useState } from 'react';
import IntroAnimation from './intro_animation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import RotatingText from '@/components/ui/RotatingText';

interface IntroWrapperProps {
  children: React.ReactNode;
}

export default function IntroWrapper({ children }: IntroWrapperProps) {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  return (
    <>
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      {showContent && (
        <>
          <Navbar />
          <ScrollProgress className="top-16 h-0.5" />
          {children}
          <Footer />
          <RotatingText className="fixed bottom-20 right-6" />
        </>
      )}
    </>
  );
}

