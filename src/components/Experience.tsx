"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { experienceCards } from "@/lib/db";

const Experience = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll by the width of one card plus the gap
    const card = container.querySelector("[data-card-item]");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(container).gap || "0");
    const scrollAmount = cardWidth + gap;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#000000",
        paddingTop: "6rem",
        paddingBottom: "8rem",
        overflow: "hidden",
      }}
    >
      {/* ── Section Title ── */}
      <div
        style={{
          paddingLeft: "clamp(2rem, 6vw, 8rem)",
          marginBottom: "3rem",
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
            fontSize: "clamp(2.5rem, 6vw, 6rem)",
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

      {/* ── Horizontal Scrollable Carousel Container ── */}
      <div
        ref={scrollContainerRef}
        style={{
          display: "flex",
          gap: "2.5rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          paddingLeft: "clamp(2rem, 6vw, 8rem)",
          paddingRight: "clamp(2rem, 6vw, 8rem)",
          // Webkit mask gradient fades the card container edges beautifully
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
        className="no-scrollbar"
      >
        {experienceCards.map((card, index) => (
          <div
            key={index}
            data-card-item
            style={{
              flex: "0 0 auto",
              width: "clamp(300px, 48vw, 680px)", // Large premium cards
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* ── Card Image Wrapper ── */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1.65 / 1", // Apple premium landscape ratio
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
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
              {/* Subtle hover gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%)",
                  pointerEvents: "none",
                }}
              />
              
              {/* Apple-style circular link button in bottom right corner */}
              {card.liveLink && (
                <a
                  href={card.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    position: "absolute",
                    bottom: "1.25rem",
                    right: "1.25rem",
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    borderRadius: "50%",
                    width: "44px",
                    height: "44px",
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
                    width="16"
                    height="16"
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
                marginTop: "1.25rem",
                paddingRight: "1rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
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
                  marginTop: "0.5rem",
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(255, 255, 255, 0.4)",
                  letterSpacing: "0.05em",
                }}
              >
                {card.title} &nbsp;·&nbsp; {card.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Carousel Arrow Controls ── */}
      <div
        style={{
          display: "flex",
          gap: "0.8rem",
          justifyContent: "flex-end",
          paddingRight: "clamp(2rem, 6vw, 8rem)",
          marginTop: "2.5rem",
        }}
      >
        <button
          onClick={() => scroll("left")}
          style={{
            width: "44px",
            height: "44px",
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          style={{
            width: "44px",
            height: "44px",
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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Experience;
