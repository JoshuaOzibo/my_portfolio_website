"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Socials } from "@/lib/db";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navRef      = useRef<HTMLElement>(null);
  const iconRef     = useRef<HTMLDivElement>(null);
  const menuBtnRef  = useRef<HTMLButtonElement>(null);
  const contactRef  = useRef<HTMLAnchorElement>(null);
  const overlayRef  = useRef<HTMLDivElement>(null);
  const menuItemsRef= useRef<(HTMLLIElement | null)[]>([]);
  const socialsRef  = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen, mounted]);

  // ── Navbar entrance animation ──
  useGSAP(() => {
    if (!navRef.current) return;

    // Start everything above viewport
    gsap.set([iconRef.current, menuBtnRef.current, contactRef.current], {
      opacity: 0, y: -24,
    });

    const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "expo.out" } });

    tl.to(iconRef.current,    { opacity: 1, y: 0, duration: 0.7 })
      .to(menuBtnRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(contactRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.45");
  }, { scope: navRef });

  // ── Overlay menu animation ──
  useEffect(() => {
    if (!overlayRef.current) return;

    if (menuOpen) {
      // Show overlay
      gsap.set(overlayRef.current, { display: "flex", pointerEvents: "auto" });
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.5, ease: "power2.out" });

      // Stagger menu items
      const items = menuItemsRef.current.filter(Boolean);
      gsap.fromTo(
        items,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: "expo.out", delay: 0.15 }
      );
      gsap.fromTo(
        socialsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "expo.out", delay: 0.5 }
      );
    } else {
      // Stagger items out in reverse, fade out socials, then hide the overlay
      const items = menuItemsRef.current.filter(Boolean);
      const tl = gsap.timeline({
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
            overlayRef.current.style.pointerEvents = "none";
          }
        },
      });

      tl.to(socialsRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(
        items,
        {
          opacity: 0,
          y: 30,
          duration: 0.3,
          stagger: -0.04, // Stagger in reverse order (bottom to top)
          ease: "power2.in",
        },
        "<+0.05"
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.35,
          ease: "power2.inOut",
        },
        "+=0.08" // Wait slightly after all links are fully gone
      );
    }
  }, [menuOpen]);

  const navLinks = [
    { label: "Home",       href: "#home" },
    { label: "Projects",   href: "#projects" },
    { label: "Skills",     href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact",    href: "#contact" },
  ];

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          zIndex: 100,
          paddingTop: "1.25rem", paddingRight: "1.5rem",
          display: "flex", justifyContent: "flex-end", alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
          {/* Sound-wave icon */}
          <div ref={iconRef} style={{ opacity: 0, marginRight: "0.25rem" }}>
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
              <rect x="0"  y="5"  width="2.5" height="8"  rx="1.25" fill="white" opacity="0.8"/>
              <rect x="4"  y="2"  width="2.5" height="14" rx="1.25" fill="white" opacity="0.8"/>
              <rect x="8"  y="0"  width="2.5" height="18" rx="1.25" fill="white" opacity="0.8"/>
              <rect x="12" y="3"  width="2.5" height="12" rx="1.25" fill="white" opacity="0.8"/>
              <rect x="16" y="6"  width="2.5" height="6"  rx="1.25" fill="white" opacity="0.8"/>
              <rect x="20" y="8"  width="2.5" height="2"  rx="1.25" fill="white" opacity="0.8"/>
            </svg>
          </div>

          {/* MENU pill */}
          <button
            ref={menuBtnRef}
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              border: "1px solid rgba(255,255,255,0.5)", borderRadius: "999rem",
              padding: "0.55rem 0.875rem", background: "transparent", color: "white",
              fontFamily: "'DM Sans', Arial, sans-serif", fontSize: "0.625rem",
              fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
              cursor: "pointer", transition: "border-color 0.25s, background 0.25s",
              lineHeight: 1, opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background    = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor   = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background    = "transparent";
              e.currentTarget.style.borderColor   = "rgba(255,255,255,0.5)";
            }}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* CONTACT pill */}
          <a
            ref={contactRef}
            href="#contact"
            style={{
              border: "1px solid rgba(255,255,255,0.5)", borderRadius: "999rem",
              padding: "0.55rem 0.875rem", background: "transparent", color: "white",
              fontFamily: "'DM Sans', Arial, sans-serif", fontSize: "0.625rem",
              fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
              textDecoration: "none", cursor: "pointer", display: "inline-block",
              transition: "border-color 0.25s, background 0.25s", lineHeight: 1, opacity: 0,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background    = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor   = "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background    = "transparent";
              e.currentTarget.style.borderColor   = "rgba(255,255,255,0.5)";
            }}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* ─── Full-screen overlay menu ─── */}
      <div
        ref={overlayRef}
        style={{
          position: "fixed", inset: 0, zIndex: 90,
          background: "rgba(0,0,0,0.97)", backdropFilter: "blur(20px)",
          display: "none", opacity: 0, pointerEvents: "none",
          flexDirection: "column", alignItems: "center", justifyContent: "center",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "center" }}>
          {navLinks.map((item, i) => (
            <li
              key={item.label}
              ref={el => { menuItemsRef.current[i] = el; }}
              style={{ marginBottom: "1.25rem", opacity: 0 }}
            >
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.8rem, 7vw, 6rem)",
                  color: "white", textDecoration: "none", textTransform: "uppercase",
                  letterSpacing: "-0.02em", display: "block", lineHeight: 1.05,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.3")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials at bottom */}
        <div
          ref={socialsRef}
          style={{
            position: "absolute", bottom: "2rem",
            display: "flex", gap: "2rem", alignItems: "center", opacity: 0,
          }}
        >
          {[
            { label: "GitHub",    href: Socials.Github },
            { label: "WhatsApp",  href: "https://wa.me/+2347085531738" },
          ].map((s, i) => (
            <React.Fragment key={s.label}>
              {i > 0 && <span style={{ color: "rgba(255,255,255,0.2)" }}>·</span>}
              <a
                href={s.href}
                target="_blank" rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif", fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.4)", textDecoration: "none",
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "white")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {s.label}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
