"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ResumeImage from "@/assets/my-image.webp";

gsap.registerPlugin(useGSAP);

const NAME_LETTERS = ["J", "O", "S", "H", "U", "A"];

// Per-letter negative margin offsets — mirrors the reference site's optical kerning
const LETTER_MARGINS: Record<number, string> = {
  0: "0",
  1: "-0.15vw",
  2: "-0.8vw",
  3: "-0.2vw",
  4: "-0.8vw",
  5: "-0.5vw",
};

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Initial states
      gsap.set(imageRef.current, { opacity: 0, scale: 1.06 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(letterRefs.current, { opacity: 0, y: 60 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 20 });
      gsap.set(scrollRef.current, { opacity: 0, y: 10 });

      tl
        // Background photo fades in
        .to(imageRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.8,
          ease: "power2.out",
        })
        .to(overlayRef.current, { opacity: 1, duration: 1.2 }, "<+0.2")

        // Letters stagger in
        .to(
          letterRefs.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.06,
            ease: "expo.out",
          },
          "<+0.4"
        )

        // Subtitle
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")

        // Scroll indicator
        .to(scrollRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="home"
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        overflow: "hidden",
        background: "#000",
      }}
    >
      {/* ─── Background portrait photo ─── */}
      <div
        ref={imageRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: 0,
        }}
      >
        <Image
          src={ResumeImage}
          alt="Joshua Ozibo"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
        />
      </div>

      {/* ─── Gradient overlays ─── */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          opacity: 0,
        }}
      >
        {/* Dark vignette — heavier center-to-edge so the photo reads naturally */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.05) 20%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.75) 100%)",
          }}
        />
        {/* Side vignettes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.5) 100%)",
          }}
        />
      </div>

      {/* ─── Vertically & horizontally centered content ─── */}
      <div
        ref={contentRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // ← vertically centered
        }}
      >
        {/* Name letters row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
          aria-label="Joshua"
        >
          {NAME_LETTERS.map((letter, i) => (
            <div
              key={i}
              ref={(el) => {
                letterRefs.current[i] = el;
              }}
              style={{
                fontSize: "clamp(4.5rem, 12vw, 15rem)",
                lineHeight: 0.85,
                // ─── EXACT fonts from the reference site ───
                fontFamily: "'Clash Display', 'Monument Extended', sans-serif",
                fontWeight: 700,
                color: "#ffffff",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
                marginLeft: i === 0 ? "0" : LETTER_MARGINS[i],
                display: "block",
                userSelect: "none",
                opacity: 0,
              }}
            >
              {letter}
            </div>
          ))}
        </div>

        {/* Subtitle — Doner / DM Sans */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif", // closest to Doner
            fontWeight: 400,
            fontSize: "clamp(0.75rem, 1vw, 1rem)",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "0.3px",
            lineHeight: 1.5,
            marginTop: "0.75rem",
            textAlign: "center",
            opacity: 0,
          }}
        >
          Front-End Developer &amp; UI Engineer based in Nigeria
        </p>
      </div>

      {/* ─── Scroll to Explore ─── */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.625rem",
          opacity: 0,
        }}
      >
        <div
          style={{
            width: 5,
            height: 5,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.5)",
          }}
        />
        <p
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "0.5625rem",
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            lineHeight: 1,
            margin: 0,
          }}
        >
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}
