"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ABOUT_TEXT =
  "I am Joshua Ozibo, a Fullstack Developer & UI Engineer with over 4 years of hands-on experience crafting fast, accessible, and visually stunning web experiences.";

export default function AboutSlide() {
  const panelRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const words = ABOUT_TEXT.split(" ");

  useEffect(() => {
    const panel = panelRef.current;
    const wordEls = wordsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!panel || !wordEls.length) return;

    const st = ScrollTrigger.create({
      trigger: panel,
      start: "top top",
      end: `+=${wordEls.length * 55}`,   
      pin: true,
      pinSpacing: true,
      scrub: 1,
      onUpdate(self) {
        const progress = self.progress * wordEls.length;
        wordEls.forEach((el, i) => {
          const alpha = Math.min(Math.max((progress - i) * 0.9, 0.3), 1);
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
        zIndex: 20,            
        width: "100vw",
        maxWidth: "100vw",
        height: "100dvh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "920px",
          padding: "0 clamp(1.25rem, 6vw, 4rem)",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <p style={{
          fontFamily: "'DM Sans', Arial, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 500,
          color: "rgba(200,155,60,0.9)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "1.5rem",
          margin: "0 0 1.5rem 0",
        }}>
          (About)
        </p>

        <p
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(1.35rem, 5.5vw, 2.8rem)",
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            margin: 0,
            boxSizing: "border-box",
            width: "100%",
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflowWrap: "break-word",
          }}
          aria-label={ABOUT_TEXT}
        >
          {words.map((word, i) => (
            <span
              key={i}
              ref={el => { wordsRef.current[i] = el; }}
              style={{
                display: "inline-block",
                color: "rgba(255,255,255,0.3)",
                marginRight: "0.32em",
                whiteSpace: "nowrap",
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
