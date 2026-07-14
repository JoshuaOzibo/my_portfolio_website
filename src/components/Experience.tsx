"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { experienceCards } from "@/lib/db";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const refreshScroll = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", refreshScroll);
    const timer = setTimeout(refreshScroll, 600); // Recalculate ScrollTrigger once images have finished mounting

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", refreshScroll);
      clearTimeout(timer);
    };
  }, []);

  // GSAP ScrollTrigger for pinning and horizontal translation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const getScrollAmount = () => {
        const track = trackRef.current;
        if (!track) return 0;
        return track.scrollWidth - window.innerWidth;
      };

      gsap.to(trackRef.current, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("[data-card-item]");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap || "0");
    const scrollAmount = cardWidth + gap;

    window.scrollBy({
      top: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#000000",
        paddingTop: "clamp(1.5rem, 3vh, 3rem)",
        paddingBottom: "clamp(1.5rem, 3vh, 3rem)",
        overflow: "hidden",
        zIndex: 24, // Sits below ApproachSlide (25) so it doesn't overlap it during pinning
      }}
    >
      {/* ── Section Title (At the Top) ── */}
      <div
        style={{
          paddingLeft: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)", // Restored to the left margin
          paddingRight: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          marginBottom: isMobile ? "3.5rem" : "clamp(1rem, 2.5vh, 2rem)",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', Arial, sans-serif",
            fontSize: "0.68rem",
            fontWeight: 500,
            color: "rgba(255, 255, 255, 0.4)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.5rem",
          }}
        >
          (My Journey)
        </span>
        <h2
          style={{
            fontFamily: "'Big Shoulders Display', sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            color: "#ffffff",
            textTransform: "uppercase",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Professional
          <br />
          Experience
        </h2>
      </div>

      {/* ── Horizontal Scrollable Carousel Container (Starts at center on desktop) ── */}
      <div
        ref={scrollContainerRef}
        style={{
          width: "100%",
          overflowX: "hidden",
          overflowY: "hidden",
          scrollSnapType: "none",
          scrollBehavior: "auto",
          WebkitMaskImage: isMobile
            ? "linear-gradient(to right, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)"
            : "linear-gradient(to right, black 80%, transparent)",
          maskImage: isMobile
            ? "linear-gradient(to right, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)"
            : "linear-gradient(to right, black 80%, transparent)",
        }}
        className="no-scrollbar"
      >
        <div
          ref={trackRef}
          style={{
            display: "flex",
            gap: "2.5rem",
            width: isMobile ? "auto" : "max-content",
          }}
        >
          {/* Spacer element at the start to push content to the right initially */}
          <div
            style={{
              flex: "0 0 auto",
              width: isMobile ? "1.5rem" : "50vw",
              scrollSnapAlign: isMobile ? "start" : "none",
            }}
          />

          {experienceCards.map((card, index) => (
            <div
              key={index}
              data-card-item
              style={{
                flex: "0 0 auto",
                // Apple-style: Larger images on desktop, standard responsive flow on mobile
                width: isMobile ? "82vw" : "clamp(500px, 45vw, 680px)",
                scrollSnapAlign: isMobile ? "start" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* ── Card Image Wrapper ── */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "1.6 / 1", // Apple-style ratio for large, detailed presentation
                  borderRadius: "24px",
                  overflow: "hidden",
                  backgroundColor: "#111111",
                }}
              >
                <Image
                  src={card.imgPath}
                  alt={card.workedOn}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    borderRadius: "24px",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                    pointerEvents: "none",
                  }}
                />

                {card.liveLink && (
                  <a
                    href={card.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      position: "absolute",
                      bottom: "1.5rem",
                      right: "1.5rem",
                      backgroundColor: "rgba(0, 0, 0, 0.65)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderRadius: "50%",
                      width: "48px",
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      transition: "transform 0.2s, background-color 0.2s",
                      zIndex: 10,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                      e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.65)";
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>

              {/* ── Card Content ── */}
              <div
                style={{
                  marginTop: "1.5rem",
                  paddingRight: "1rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: "1.05rem",
                    lineHeight: 1.55,
                    color: "rgba(255, 255, 255, 0.65)",
                    margin: 0,
                  }}
                >
                  <strong style={{ color: "#ffffff", fontWeight: 600 }}>
                    {card.workedOn}
                  </strong>{" "}
                  — {card.responsibilities.join(" ")}
                </p>

                <span
                  style={{
                    display: "block",
                    marginTop: "0.6rem",
                    fontFamily: "'DM Sans', Arial, sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.4)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {card.title} &nbsp;·&nbsp; {card.date}
                </span>
              </div>
            </div>
          ))}

          {/* Spacer element at the end for balanced scrolling space */}
          <div
            style={{
              flex: "0 0 auto",
              width: isMobile
                ? "1.5rem"
                : "calc(100vw - clamp(2rem, 5vw, 6rem) - clamp(500px, 45vw, 680px))",
            }}
          />
        </div>
      </div>

      {/* ── Navigation Arrows (At the Bottom Right) ── */}
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          justifyContent: "flex-end",
          paddingRight: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          marginTop: isMobile ? "3rem" : "clamp(1rem, 2.5vh, 2rem)",
        }}
      >
        <button
          onClick={() => scroll("left")}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "none",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Previous Slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.08)",
            border: "none",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "background-color 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.08)";
            e.currentTarget.style.transform = "scale(1)";
          }}
          aria-label="Next Slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Hide Scrollbars Global Inline CSS Utility */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Experience;
