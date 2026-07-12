"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import ResumeImage from "@/assets/my-image.webp";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container   = useRef<HTMLDivElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const nameRef     = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(imageRef.current,   { opacity: 0, scale: 1.06 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(nameRef.current,    { opacity: 0, y: 70 });
      gsap.set(subtitleRef.current,{ opacity: 0, y: 20 });
      gsap.set(scrollRef.current,  { opacity: 0, y: 10 });

      tl
        .to(imageRef.current,    { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" })
        .to(overlayRef.current,  { opacity: 1, duration: 1.2 }, "<+0.2")
        .to(nameRef.current,     { opacity: 1, y: 0, duration: 1, ease: "expo.out" }, "<+0.4")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(scrollRef.current,   { opacity: 1, y: 0, duration: 0.5 }, "-=0.3");
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
      {/* ─── Background portrait ─── */}
      <div
        ref={imageRef}
        style={{ position: "absolute", inset: 0, zIndex: 1, opacity: 0 }}
      >
        <Image
          src={ResumeImage}
          alt="Joshua Ozibo"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
        />
      </div>

      {/* ─── Overlays ─── */}
      <div
        ref={overlayRef}
        style={{ position: "absolute", inset: 0, zIndex: 2, opacity: 0 }}
      >
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.72) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.45) 0%, transparent 28%, transparent 72%, rgba(0,0,0,0.45) 100%)",
        }} />
      </div>

      {/* ─── Center-aligned name + subtitle ─── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 10,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
      }}>
        {/*
          Font: "Big Shoulders Display" — free Google Font that best mirrors
          "Monumentextended V": wide, geometric, condensed-tall letterforms.
          Weight 800 to match the reference. NOT 900 (that's too heavy).
        */}
        <h1
          ref={nameRef}
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(5rem, 18vw, 20rem)",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
            userSelect: "none",
            opacity: 0,
          }}
        >
          JOSHUA
        </h1>

        {/*
          Font: "DM Sans" — closest to "Doner, Arial" in the reference:
          clean, neutral, humanist sans at regular weight.
        */}
        <p
          ref={subtitleRef}
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(0.7rem, 0.95vw, 1rem)",
            color: "rgba(255,255,255,0.72)",
            letterSpacing: "0.3px",
            lineHeight: 1.5,
            marginTop: "0.8rem",
            textAlign: "center",
            opacity: 0,
          }}
        >
          Front-End Developer &amp; UI Engineer based in Nigeria
        </p>
      </div>

      {/* ─── Scroll indicator ─── */}
      <div
        ref={scrollRef}
        style={{
          position: "absolute", bottom: "1.5rem",
          left: "50%", transform: "translateX(-50%)",
          zIndex: 10, display: "flex", flexDirection: "column",
          alignItems: "center", gap: "0.5rem", opacity: 0,
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
        <p style={{
          fontFamily: "'DM Sans', Arial, sans-serif",
          fontWeight: 400,
          fontSize: "0.5625rem",
          color: "rgba(255,255,255,0.48)",
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          lineHeight: 1, margin: 0,
        }}>
          Scroll to Explore
        </p>
      </div>
    </section>
  );
}
