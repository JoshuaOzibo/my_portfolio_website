"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT =
  "I am Joshua Ozibo, a Front-End Developer & UI Engineer with over 4 years of hands-on experience crafting fast, accessible, and visually stunning web experiences.";

export default function AboutSlide() {
  const panelRef  = useRef<HTMLDivElement>(null);
  const wordsRef  = useRef<(HTMLSpanElement | null)[]>([]);

  const words = ABOUT_TEXT.split(" ");

  useEffect(() => {
    const panel = panelRef.current;
    const wordEls = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!panel || !wordEls.length) return;

    // Pin the about panel once it reaches the top,
    // then reveal words word-by-word while pinned.
    const st = ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      end: `+=${wordEls.length * 55}`,   // scroll distance for full reveal
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate(self) {
        const progress = self.progress * wordEls.length;
        wordEls.forEach((el, i) => {
          // smooth ramp per word: 0.12 → 1.0
          const alpha = Math.min(Math.max((progress - i) * 0.9, 0.12), 1);
          el.style.color = `rgba(255,255,255,${alpha})`;
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      ref={panelRef}
      style={{
        position: "relative",
        zIndex: 20,            // layers on top of the pinned hero (z-index:10)
        width: "100%",
        height: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "860px",
          padding: "0 clamp(2rem, 8vw, 6rem)",
          width: "100%",
        }}
      >
        {/* (About) label */}
        <p style={{
          fontFamily: "'DM Sans', Arial, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 500,
          color: "rgba(200,155,60,0.9)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "2.2rem",
          margin: "0 0 2.2rem 0",
        }}>
          (About)
        </p>

        {/* Word-by-word reveal text */}
        <p
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(1.55rem, 3.2vw, 3rem)",
            fontWeight: 700,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
          aria-label={ABOUT_TEXT}
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={el => { wordsRef.current[i] = el; }}
              style={{
                display: "inline",
                color: "rgba(255,255,255,0.12)",
                marginRight: "0.32em",
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
