"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Particles } from "@/components/magicui/particles";
import Image from "next/image";
import ResumeImage from "@/assets/my-image.webp";
import { WordRotate } from "@/components/magicui/word-rotate";
import { FaDownload, FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const leftContent = useRef<HTMLDivElement>(null);
  const rightContent = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const firstParagraphRef = useRef<HTMLParagraphElement>(null);
  const secondParagraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.set([leftContent.current, rightContent.current], { opacity: 0 })
      .set(leftContent.current, { x: -50 })
      .set(rightContent.current, { x: 50, scale: 0.8 })
      .set(
        [
          headingRef.current,
          firstParagraphRef.current,
          secondParagraphRef.current,
          buttonsRef.current,
        ],
        { opacity: 0, y: 30 }
      )
      .to(leftContent.current, {
        opacity: 1,
        x: 0,
        duration: 1,
      })
      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      .to(
        [
          firstParagraphRef.current,
          secondParagraphRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
        },
        "-=0.4"
      )
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "-=0.3"
      )
      .to(
        rightContent.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
        },
        "-=1.2"
      );
  }, { scope: container });

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/assets/My_Resume.pdf";
    link.download = "Ozibo-Joshua-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactOnWhatsApp = () => {
    window.open("https://wa.me/+2347085531738", "_blank");
  };

  return (
    <section className="lg:mt-0 z-10" ref={container}>
      <div className="lg:mx-20 mx-6">
        <div className="relative lg:h-[700px] h-screen pt-24">
          <div className="absolute lg:flex md:justify-between justify-center space-y-10 lg:space-y-0 inset-0 items-center">
            <div ref={leftContent} className="lg:w-1/2 lg:m-0 w-full">
              <h1
                ref={headingRef}
                className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl mt-10 font-bold text-start pt-20 text-white"
              >
                Turning{" "}
                <WordRotate
                  className="text-[#86cad9] gradient-text"
                  words={["Ideas", "Codes", "Logic"]}
                />
                into Real-World Projects That Make an Impact
              </h1>
              <div>
                <p
                  ref={firstParagraphRef}
                  className="text-white/90 text-sm mt-3 font-light"
                >
                  Hi, I&apos;m Joshua a front-end developer passionate about crafting
                  meaningful UIs that deliver results.
                </p>
                <p
                  ref={secondParagraphRef}
                  className="text-white text-sm mt-3 font-light"
                >
                  Currently open to remote opportunities.
                </p>
              </div>

              <div
                ref={buttonsRef}
                className="lg:flex mb-10 lg:mb-0 mt-5 lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 lg:mx-0 w-full block gap-2"
              >
                <div className="m-auto w-full lg:m-0">
                  <button
                    onClick={handleDownloadResume}
                    className="bg-white w-full text-black px-4 flex items-center justify-center gap-2 py-2 rounded-md transition-transform hover:scale-105 active:scale-95"
                  >
                    <FaDownload className="w-4 h-4" />
                    <span className="text-sm">Download Resume</span>
                  </button>
                </div>

                <div className="m-auto w-full lg:m-0">
                  <button
                    onClick={handleContactOnWhatsApp}
                    className="bg-white w-full text-black px-4 flex items-center justify-center gap-2 py-2 rounded-md transition-transform hover:scale-105 active:scale-95"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span className="text-sm">Contact on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>

            <div ref={rightContent} className="lg:mx-0 w-[350px] h-[350px] mx-auto rounded-full" 
            style={{
            boxShadow: '0 0 40px hsl(175 70% 50% / 0.5)',
          }}>
              <Image
                src={ResumeImage}
                className="rounded-full m-auto lg:mx-0 mx-auto"
                width={350}
                height={350}
                alt="ResumeImage"
              />
            </div>
          </div>
          <Particles className="h-full" />
        </div>
      </div>
    </section>
  );
}
