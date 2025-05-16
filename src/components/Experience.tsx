"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicCard from "@/components/ui/Magic_card";
import { experienceCards } from "@/lib/db";
import { useRef } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    const imageRef = imageRefs.current[index];
    if (imageRef) {
      gsap.to(imageRef, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = (index: number) => {
    const imageRef = imageRefs.current[index];
    if (imageRef) {
      gsap.to(imageRef, {
        y: "200%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  };

  return (
    <section className="py-20">
      <div className="lg:mx-20 mx-6">
        <h1 className="xl:text-6xl lg:text-5xl py-8 md:text-4xl text-3xl font-bold text-center text-white">Experience</h1>
        <div className="flex flex-col lg:space-y-0 space-y-24 gap-4">
          {experienceCards.map((card, index) => (
            <main
              className="w-full lg:flex justify-center gap-20 items-center"
              key={index}
            >
              <div className="lg:w-1/2 w-full">
                <MagicCard
                  card={card}
                  index={index}
                  className="w-full"
                  onHover={() => handleMouseEnter(index)}
                  onLeave={() => handleMouseLeave(index)}
                >
                  <div className="relative flex flex-col lg:py-40 py-44 gap-4">
                    <div className="relative z-5">
                      <h1 className="font-semibold text-center text-3xl">
                        {card.workedOn}
                      </h1>
                      <p className=" text-[#839CB5] text-center italic">
                        {card.date}
                      </p>
                    </div>

                    <Image
                      className="absolute rounded-md inset-0 z-10 w-full h-full object-cover object-center translate-y-[200%]"
                      ref={(el) => {
                        if (el) imageRefs.current[index] = el;
                      }}
                      src={card.imgPath}
                      alt="Swiftcareer Preview"
                      fill
                    />
                  </div>
                </MagicCard>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="">
                  <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative">
                    <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                      <p className="text-[#839CB5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-3 text-white-50">
                        {card.responsibilities.map((responsibility, index) => (
                          <li key={index} className="text-lg">
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-5 mt-5">
                    <a
                      href={card.liveLink}
                      target="_blank"
                      className="bg-white-50 text-black-50 px-5 py-2 rounded-md"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </main>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
