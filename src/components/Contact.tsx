"use client";

import React, { useState, useEffect } from "react";
import { Socials } from "@/lib/db";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [activeField, setActiveField] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Revert status to idle after 4 seconds
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#000000",
        paddingTop: isMobile ? "4rem" : "clamp(4rem, 8vh, 8rem)",
        paddingBottom: isMobile ? "4rem" : "clamp(4rem, 8vh, 8rem)",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {/* ── Section Title (At the Top) ── */}
      <div
        style={{
          paddingLeft: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          paddingRight: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          marginBottom: isMobile ? "3rem" : "clamp(2rem, 5vh, 4rem)",
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
          (Get In Touch)
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
          Contact Me
        </h2>
      </div>

      {/* ── Main Content Grid ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1.2fr",
          gap: isMobile ? "3rem" : "clamp(3rem, 6vw, 8rem)",
          paddingLeft: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          paddingRight: isMobile ? "1.5rem" : "clamp(2rem, 5vw, 6rem)",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Left Column: Info / Connect */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3
              style={{
                fontFamily: "'Big Shoulders Display', sans-serif",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                margin: "0 0 1.5rem 0",
                textTransform: "uppercase",
              }}
            >
              Let&apos;s build something
              <br />
              great together.
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', Arial, sans-serif",
                fontSize: "clamp(1rem, 1.2vw, 1.15rem)",
                lineHeight: 1.6,
                color: "rgba(255, 255, 255, 0.6)",
                margin: "0 0 2.5rem 0",
                maxWidth: "480px",
              }}
            >
              Have a project in mind, a job opportunity, or just want to connect? Send a message and let&apos;s talk about how I can help.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Info / Availability Text */}
            <div>
              <span
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.6rem",
                  color: "rgba(255, 255, 255, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Current Status
              </span>
              <p
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  color: "rgba(255, 255, 255, 0.8)",
                  margin: 0,
                  maxWidth: "360px",
                }}
              >
                Available for freelance opportunities, full-time positions, and interesting collaborations worldwide.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <span
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.6rem",
                  color: "rgba(255, 255, 255, 0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  display: "block",
                  marginBottom: "0.4rem",
                }}
              >
                Social Connect
              </span>
              <div style={{ display: "flex", gap: "1.5rem" }}>
                {[
                  { label: "GitHub", href: Socials.Github },
                  { label: "WhatsApp", href: "https://wa.me/+2347085531738" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "'DM Sans', Arial, sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          {status === "success" ? (
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px",
                padding: isMobile ? "2.5rem 1.5rem" : "4rem",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: isMobile ? "350px" : "450px",
              }}
            >
              {/* Checkmark Icon */}
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "2rem",
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h4
                style={{
                  fontFamily: "'Big Shoulders Display', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  margin: "0 0 1rem 0",
                  letterSpacing: "-0.01em",
                }}
              >
                Message Sent!
              </h4>
              <p
                style={{
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.5,
                  color: "rgba(255, 255, 255, 0.6)",
                  margin: 0,
                  maxWidth: "340px",
                }}
              >
                Thank you for reaching out. I have received your message and will get back to you shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "24px",
                padding: isMobile ? "2rem 1.5rem" : "3.5rem 3rem",
              }}
            >
              {/* Name Input */}
              <div style={inputGroupStyle}>
                <label htmlFor="name" style={labelStyle}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  style={{
                    ...inputStyle,
                    borderBottomColor: activeField === "name" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.15)",
                  }}
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div style={inputGroupStyle}>
                <label htmlFor="email" style={labelStyle}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  style={{
                    ...inputStyle,
                    borderBottomColor: activeField === "email" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.15)",
                  }}
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject Input */}
              <div style={inputGroupStyle}>
                <label htmlFor="subject" style={labelStyle}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setActiveField("subject")}
                  onBlur={() => setActiveField(null)}
                  style={{
                    ...inputStyle,
                    borderBottomColor: activeField === "subject" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.15)",
                  }}
                  placeholder="Project Collaboration"
                />
              </div>

              {/* Message Input */}
              <div style={{ ...inputGroupStyle, marginBottom: "2.5rem" }}>
                <label htmlFor="message" style={labelStyle}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  style={{
                    ...inputStyle,
                    resize: "none",
                    borderBottomColor: activeField === "message" ? "rgba(255, 255, 255, 0.8)" : "rgba(255, 255, 255, 0.15)",
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  borderRadius: "999rem",
                  padding: "1rem 2rem",
                  background: isButtonHovered ? "rgba(255, 255, 255, 0.1)" : "transparent",
                  borderColor: isButtonHovered ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.5)",
                  color: "#ffffff",
                  fontFamily: "'DM Sans', Arial, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  cursor: status === "sending" ? "not-allowed" : "pointer",
                  transition: "all 0.25s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.75rem",
                  width: "100%",
                }}
              >
                {status === "sending" ? (
                  <>
                    <span>Sending...</span>
                    {/* Tiny spinner */}
                    <svg width="16" height="16" viewBox="0 0 38 38" stroke="currentColor">
                      <g fill="none" fillRule="evenodd">
                        <g transform="translate(1 1)" strokeWidth="3">
                          <circle strokeOpacity=".2" cx="18" cy="18" r="18"/>
                          <path d="M36 18c0-9.94-8.06-18-18-18">
                            <animateTransform
                              attributeName="transform"
                              type="rotate"
                              from="0 18 18"
                              to="360 18 18"
                              dur="1s"
                              repeatCount="indefinite"
                            />
                          </path>
                        </g>
                      </g>
                    </svg>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: isButtonHovered ? "translateX(4px)" : "translateX(0)",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputGroupStyle = {
  position: "relative" as const,
  display: "flex",
  flexDirection: "column" as const,
  marginBottom: "2rem",
};

const labelStyle = {
  fontFamily: "'DM Sans', Arial, sans-serif",
  fontSize: "0.65rem",
  fontWeight: 500,
  color: "rgba(255, 255, 255, 0.4)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.15em",
  marginBottom: "0.5rem",
};

const inputStyle = {
  width: "100%",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "0.75rem 0",
  fontFamily: "'DM Sans', Arial, sans-serif",
  fontSize: "1rem",
  color: "#ffffff",
  outline: "none",
  transition: "border-color 0.3s ease",
};