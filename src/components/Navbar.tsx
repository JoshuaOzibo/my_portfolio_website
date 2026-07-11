"use client";

import React, { useState, useEffect } from "react";
import { Socials } from "@/lib/db";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (!mounted) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, mounted]);

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav
        className="fixed top-0 left-0 w-full z-[100]"
        style={{ paddingTop: "1.25rem", paddingRight: "1.5rem" }}
      >
        <div className="flex items-center justify-end gap-3">
          {/* Sound wave / logo mark SVG — matches reference top-right group */}
          <div style={{ opacity: 0.85 }}>
            <svg
              width="28"
              height="20"
              viewBox="0 0 28 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="6" width="3" height="8" rx="1.5" fill="white" />
              <rect x="5" y="2" width="3" height="16" rx="1.5" fill="white" />
              <rect x="10" y="0" width="3" height="20" rx="1.5" fill="white" />
              <rect x="15" y="4" width="3" height="12" rx="1.5" fill="white" />
              <rect x="20" y="7" width="3" height="6" rx="1.5" fill="white" />
              <rect x="25" y="9" width="3" height="2" rx="1" fill="white" />
            </svg>
          </div>

          {/* MENU pill button */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "999rem",
              padding: "0.625rem 0.75rem",
              background: "transparent",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "border-color 0.25s, background 0.25s",
              lineHeight: 1,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background =
                "transparent";
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "rgba(255,255,255,0.5)";
            }}
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* CONTACT pill button */}
          <a
            href="#contact"
            style={{
              border: "1px solid rgba(255,255,255,0.5)",
              borderRadius: "999rem",
              padding: "0.625rem 0.75rem",
              background: "transparent",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 500,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              cursor: "pointer",
              transition: "border-color 0.25s, background 0.25s",
              lineHeight: 1,
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.9)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor =
                "rgba(255,255,255,0.5)";
            }}
          >
            CONTACT
          </a>
        </div>
      </nav>

      {/* ─── Full-screen overlay menu ─── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 90,
          background: "rgba(0,0,0,0.97)",
          backdropFilter: "blur(16px)",
          transition: "opacity 0.6s ease, visibility 0.6s ease",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul style={{ listStyle: "none", margin: 0, padding: 0, textAlign: "center" }}>
          {[
            { label: "Home", href: "#home" },
            { label: "Projects", href: "#projects" },
            { label: "Skills", href: "#skills" },
            { label: "Experience", href: "#experience" },
            { label: "Contact", href: "#contact" },
          ].map((item) => (
            <li key={item.label} style={{ marginBottom: "1.5rem" }}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Clash Display', 'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  color: "white",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "-0.02em",
                  transition: "opacity 0.2s",
                  display: "block",
                  lineHeight: 1.1,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.35")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social links at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <a
            href={Socials.Github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "white")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.45)")
            }
          >
            GitHub
          </a>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "1rem" }}>
            ·
          </span>
          <a
            href="https://wa.me/+2347085531738"
            target="_blank"
            rel="noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "white")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.45)")
            }
          >
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
