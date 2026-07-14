"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ResumeImage from "@/assets/hero-dark copy.png";
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiGreensock, SiNodedotjs, SiExpress,
  SiFirebase, SiGithub, SiHtml5, SiCss3,
  SiFramer, SiVuedotjs, SiFigma, SiGit,
  SiBootstrap, SiMongodb, SiVercel,
} from "react-icons/si";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const LETTERS = ["J", "O", "S", "H", "U", "A"];

// Skills list with react-icons — duplicated for seamless infinite loop
const SKILLS = [
  { icon: SiReact,       label: "React",       color: "#61DAFB" },
  { icon: SiNextdotjs,   label: "Next.js",     color: "#ffffff" },
  { icon: SiTypescript,  label: "TypeScript",  color: "#3178C6" },
  { icon: SiJavascript,  label: "JavaScript",  color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind",    color: "#38BDF8" },
  { icon: SiGreensock,    label: "GSAP",        color: "#88CE02" },
  { icon: SiNodedotjs,   label: "Node.js",     color: "#68A063" },
  { icon: SiExpress,     label: "Express",     color: "#ffffff" },
  { icon: SiFirebase,    label: "Firebase",    color: "#FFCA28" },
  { icon: SiGithub,      label: "GitHub",      color: "#ffffff" },
  { icon: SiHtml5,       label: "HTML5",       color: "#E34F26" },
  { icon: SiCss3,        label: "CSS3",        color: "#1572B6" },
  { icon: SiFramer,      label: "Framer",      color: "#BB4B96" },
  { icon: SiVuedotjs,    label: "Vue.js",      color: "#42B883" },
  { icon: SiFigma,       label: "Figma",       color: "#F24E1E" },
  { icon: SiGit,         label: "Git",         color: "#F05032" },
  { icon: SiBootstrap,   label: "Bootstrap",   color: "#7952B3" },
  { icon: SiMongodb,     label: "MongoDB",     color: "#47A248" },
  { icon: SiVercel,      label: "Vercel",      color: "#ffffff" },
];

export default function Hero() {
  const container   = useRef<HTMLDivElement>(null);
  const imageRef    = useRef<HTMLDivElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const letterRefs  = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef   = useRef<HTMLDivElement>(null);
  const marqueeRef  = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(
    () => {
      if (!container.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(imageRef.current,   { opacity: 0, scale: 1.06 });
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(letterRefs.current, { opacity: 0, y: 80 });
      gsap.set(subtitleRef.current,{ opacity: 0, y: 20 });
      gsap.set(scrollRef.current,  { opacity: 0, y: 35 });
      gsap.set(marqueeRef.current, { opacity: 0, y: 20 });

      tl
        .to(imageRef.current,    { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" })
        .to(overlayRef.current,  { opacity: 1, duration: 1.2 }, "<+0.2")
        .to(letterRefs.current,  { opacity: 1, y: 0, duration: 0.75, stagger: 0.08, ease: "expo.out" }, "<+0.5")
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.65 }, "-=0.3")
        .to(scrollRef.current,   { opacity: 1, y: 0, duration: 0.9, ease: "power2.out"  }, "-=0.25")
        .to(marqueeRef.current,  { opacity: 1, y: 0, duration: 0.7  }, "-=0.4");

      // ── Pin the hero so AboutSlide can slide over it ──
      ScrollTrigger.create({
        trigger: container.current,
        pin: true,
        pinSpacing: false,   // no extra space — About slides up naturally
        start: "top top",
        end: "bottom top",   // hero stays pinned for one viewport of scroll
      });
    },
    { scope: container }
  );

  return (
    <>
      {/* ── CSS keyframe for the marquee scroll ── */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-left 22s linear infinite;
          will-change: transform;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes scroll-pulse {
          0% {
            transform: scale(1);
            color: rgba(255, 255, 255, 0.48);
          }
          50% {
            transform: scale(1.08);
            color: rgba(255, 255, 255, 1);
          }
          100% {
            transform: scale(1);
            color: rgba(255, 255, 255, 0.48);
          }
        }
        .scroll-explore-pulse {
          animation: scroll-pulse 2.2s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={container}
        id="home"
        style={{
          position: "relative",
          zIndex: 10,
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
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>

        {/* ─── Gradient overlays ─── */}
        <div
          ref={overlayRef}
          style={{ position: "absolute", inset: 0, zIndex: 2, opacity: 0 }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.35) 100%)",
          }} />
        </div>

        {/* ─── Centered name + subtitle ─── */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 10,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <h1
            style={{
              display: "flex", alignItems: "flex-end", justifyContent: "center",
              overflow: "hidden", margin: 0, lineHeight: 0.88, userSelect: "none",
            }}
            aria-label="Joshua"
          >
            {LETTERS.map((letter, i) => (
              <span
                key={i}
                ref={el => { letterRefs.current[i] = el; }}
                style={{
                  display: "inline-block",
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(5rem, 18vw, 20rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: "#ffffff",
                  textTransform: "uppercase",
                  opacity: 0,
                }}
              >
                {letter}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            style={{
              fontFamily: "'DM Sans', Arial, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(0.7rem, 0.95vw, 1rem)",
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.3px",
              lineHeight: 1.5,
              marginTop: "0.9rem",
              textAlign: "center",
              opacity: 0,
            }}
          >
            Fullstack Developer &amp; UI Engineer based in Nigeria
          </p>
        </div>

        {/* ─── Scroll to Explore ─── */}
        <div
          ref={scrollRef}
          style={{
            position: "absolute", bottom: "1.5rem",
            left: "50%", transform: "translateX(-50%)",
            zIndex: 10, opacity: 0,
          }}
        >
          <div className="scroll-explore-pulse" style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "0.5rem",
          }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "currentColor" }} />
            <p style={{
              fontFamily: "'DM Sans', Arial, sans-serif",
              fontWeight: 400, fontSize: "0.5625rem",
              color: "inherit", letterSpacing: "0.5px",
              textTransform: "uppercase", lineHeight: 1, margin: 0,
            }}>
              Scroll to Explore
            </p>
          </div>
        </div>

        {/* ─── Skills Marquee — bottom-left ─── */}
        <div
          ref={marqueeRef}
          style={{
            position: "absolute",
            bottom: "3.5rem",        // sits just above the scroll indicator
            left: 0,
            width: isMobile ? "60%" : "22%",
            zIndex: 20,
            opacity: 0,
            overflow: "hidden",
            maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 80%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 80%, transparent 100%)",
          }}
        >
          <p style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            fontSize: "0.55rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: "0.5rem",
            paddingLeft: "2rem",
            margin: "0 0 0.5rem 2rem",
          }}>
            I BUILD WITH
          </p>

          <div style={{ display: "flex", width: "max-content" }} className="marquee-track">
            {[...SKILLS, ...SKILLS].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginRight: "1.75rem",
                    flexShrink: 0,
                  }}
                >
                  <Icon
                    style={{
                      color: skill.color,
                      fontSize: "1.6rem",
                      opacity: 0.75,
                      filter: "drop-shadow(0 0 6px rgba(255,255,255,0.08))",
                      transition: "opacity 0.2s",
                    }}
                  />
                  <span style={{
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: "0.5rem",
                    color: "rgba(255,255,255,0.3)",
                    letterSpacing: "0.05em",
                    whiteSpace: "nowrap",
                  }}>
                    {skill.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
