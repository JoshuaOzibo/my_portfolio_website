"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Numbers/spokes to generate
const SPOKES = [
  { id: "05", angle: 0 },
  { id: "04", angle: 45 },
  { id: "03", angle: 90 },
  { id: "02", angle: 135 },
  { id: "01", angle: 180 },
  { id: "08", angle: 225 },
  { id: "07", angle: 270 },
  { id: "06", angle: 315 },
];

export default function ApproachSlide() {
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<SVGSVGElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  
  // Refs for each line to animate them separately
  const text1Line1Ref = useRef<HTMLHeadingElement>(null);
  const text1Line2Ref = useRef<HTMLSpanElement>(null);
  const text2Line1Ref = useRef<HTMLHeadingElement>(null);
  const text2Line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const wheel = wheelRef.current;
    const label = labelRef.current;
    const t1L1 = text1Line1Ref.current;
    const t1L2 = text1Line2Ref.current;
    const t2L1 = text2Line1Ref.current;
    const t2L2 = text2Line2Ref.current;

    if (!container || !wheel || !label || !t1L1 || !t1L2 || !t2L1 || !t2L2) return;

    const paths = wheel.querySelectorAll("path");
    const texts = wheel.querySelectorAll("text");

    const scrollDistance = 2400;
    const center = 500;
    const radius = 350;

    // Object to hold our dynamic bend amount (for smooth velocity transitions)
    const bendObj = { value: 0 };

    // Track the dark mode state to only trigger the transition ONCE when crossing the boundary
    let wasDark = false;

    // Function to calculate and apply quadratic bezier curve path D attribute
    const updateSpokes = (bendDeg: number) => {
      paths.forEach((path, idx) => {
        const spoke = SPOKES[idx];
        const angleRad = (spoke.angle * Math.PI) / 180;
        
        // Outer tip endpoint
        const x2 = center + radius * Math.cos(angleRad);
        const y2 = center + radius * Math.sin(angleRad);

        // Control point: pulled slightly off-angle based on current bend amount
        const midRadius = radius * 0.55;
        const midAngleRad = ((spoke.angle - bendDeg) * Math.PI) / 180;
        const cx = center + midRadius * Math.cos(midAngleRad);
        const cy = center + midRadius * Math.sin(midAngleRad);

        path.setAttribute("d", `M ${center} ${center} Q ${cx} ${cy} ${x2} ${y2}`);
      });
    };

    // Initialize as straight lines
    updateSpokes(0);

    // ── 1. Pinned Layout ScrollTrigger (Only handles Text slide transitions) ──
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        pinSpacing: true,
        scrub: 1.2,
        // Trigger the instant color swap inside onUpdate but only ONCE when crossing the boundary
        onUpdate: (self) => {
          const isDark = self.progress >= 0.42;
          if (isDark !== wasDark) {
            wasDark = isDark;
            // Snaps colors immediately (using 0 duration or ultra-fast 0.1s so it doesn't lag/interpolate)
            // This runs at normal speed, completely independent of the scroll rate!
            gsap.to(container, { backgroundColor: isDark ? "#000000" : "#ffffff", duration: 0.2, overwrite: "auto" });
            gsap.to(paths, { stroke: isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.08)", duration: 0.2, overwrite: "auto" });
            gsap.to(texts, { fill: isDark ? "rgba(255, 255, 255, 0.9)" : "rgba(0, 0, 0, 0.45)", duration: 0.2, overwrite: "auto" });
            // Transition the top-left label color to match the theme
            gsap.to(label, { color: isDark ? "rgba(200, 155, 60, 0.9)" : "rgba(0, 0, 0, 0.45)", duration: 0.2, overwrite: "auto" });
          }
        },
        invalidateOnRefresh: true,
      },
    });

    // ── 2. Continuous Rotation + Dynamic Spoke Flex/Lag ScrollTrigger ──
    const rotateTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top bottom",
      end: () => `+=${scrollDistance + window.innerHeight}`,
      scrub: 1.5,
      animation: gsap.to(wheel, {
        rotation: 180,
        ease: "none",
      }),
      onUpdate: (self) => {
        const vel = self.getVelocity(); 
        // Map velocity to bend degree (cap at max 32 degrees of bend)
        const targetBend = Math.min(Math.max(vel * 0.01, -32), 32);

        // Smoothly animate bend amount to follow velocity changes
        gsap.to(bendObj, {
          value: targetBend,
          duration: 0.4,
          overwrite: "auto",
          ease: "power1.out",
          onUpdate: () => {
            updateSpokes(bendObj.value);
          }
        });
      },
      // When scroll stops, snap back to straight lines with a nice wave bounce
      onScrubComplete: () => {
        gsap.to(bendObj, {
          value: 0,
          duration: 0.5,
          overwrite: "auto",
          ease: "back.out(2)", // beautiful organic snap back
          onUpdate: () => {
            updateSpokes(bendObj.value);
          }
        });
      },
      invalidateOnRefresh: true,
    });

    pinTimeline
      .to({}, { duration: 0.45 }) 
      // Staggered text animations
      .to(t1L1, {
        y: "-115%",
        opacity: 0,
        duration: 0.55,
        ease: "power3.inOut",
      })
      .to(t1L2, {
        y: "-115%",
        opacity: 0,
        duration: 0.55,
        ease: "power3.inOut",
      }, "<+0.1")
      .to(t2L1, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "<+0.05")
      .to(t2L2, {
        y: "0%",
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }, "<+0.1")
      .to({}, { duration: 0.6 });

    return () => {
      rotateTrigger.kill();
      pinTimeline.kill();
    };
  }, []);

  const center = 500;
  const radius = 350;

  const textStyle = {
    fontFamily: "'Big Shoulders Display', sans-serif",
    fontSize: "clamp(1.4rem, 7.2vmin, 4.2rem)",
    fontWeight: 800,
    lineHeight: 0.92,
    textTransform: "uppercase" as const,
    margin: 0,
    letterSpacing: "-0.015em",
    display: "block",
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#ffffff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 25,
      }}
    >
      {/* ── Top-Left Label ── */}
      <div
        ref={labelRef}
        style={{
          position: "absolute",
          top: "clamp(2rem, 5vw, 4rem)",
          left: "clamp(2rem, 5vw, 4rem)",
          zIndex: 40,
          fontFamily: "'DM Sans', Arial, sans-serif",
          fontSize: "0.68rem",
          fontWeight: 500,
          color: "rgba(0, 0, 0, 0.45)",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
       Approach 
      </div>

      {/* ── Rotating Spokes Wheel (SVG) ── */}
      <div
        style={{
          position: "absolute",
          width: "min(88vw, 88vh, 880px)",
          height: "min(88vw, 88vh, 880px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <svg
          ref={wheelRef}
          viewBox="0 0 1000 1000"
          style={{
            width: "100%",
            height: "100%",
            transformOrigin: "center center",
          }}
        >
          <g>
            {SPOKES.map((spoke, idx) => {
              const angleRad = (spoke.angle * Math.PI) / 180;
              const textDistance = radius + 45;
              const tx = center + textDistance * Math.cos(angleRad);
              const ty = center + textDistance * Math.sin(angleRad);

              return (
                <g key={idx}>
                  <path
                     fill="none"
                     style={{
                       stroke: "rgba(0, 0, 0, 0.08)",
                       strokeWidth: 1.5,
                     }}
                  />
                  <text
                    x={tx}
                    y={ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{
                      fontFamily: "'DM Sans', Arial, sans-serif",
                      fontSize: "24px",
                      fontWeight: 500,
                      fill: "rgba(0, 0, 0, 0.45)",
                    }}
                  >
                    {spoke.id}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* ── Central Text Container ── */}
      <div
        style={{
          position: "absolute",
          zIndex: 30,
          textAlign: "center",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.2rem",
        }}
      >
        {/* ── Text Set 1 (Light Mode) ── */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "max-content",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <h2
              ref={text1Line1Ref}
              style={{
                ...textStyle,
                color: "#000000",
                transform: "translateY(0%)",
              }}
            >
              Refined &amp; Bold
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              ref={text1Line2Ref}
              style={{
                ...textStyle,
                fontWeight: 400,
                color: "#000000",
                transform: "translateY(0%)",
              }}
            >
              Essential
            </span>
          </div>
        </div>

        {/* ── Text Set 2 (Dark Mode) ── */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "max-content",
          }}
        >
          <div style={{ overflow: "hidden" }}>
            <h2
              ref={text2Line1Ref}
              style={{
                ...textStyle,
                color: "#ffffff",
                transform: "translateY(115%)",
                opacity: 0,
              }}
            >
              Simplicity &amp; Clarity
            </h2>
          </div>
          <div style={{ overflow: "hidden" }}>
            <span
              ref={text2Line2Ref}
              style={{
                ...textStyle,
                fontWeight: 400,
                color: "#ffffff",
                transform: "translateY(115%)",
                opacity: 0,
              }}
            >
              of Approach
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
