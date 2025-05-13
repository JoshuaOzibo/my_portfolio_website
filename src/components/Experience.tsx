"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagicCard from "@/components/ui/Magic_card";
import { experienceCards } from "@/lib/db";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  return (
    <section className="px-10 py-20 border">
      <h1 className="text-4xl font-bold text-center py-2">Experience</h1>
      <div className="flex mx-20 flex-col gap-4">
        {experienceCards.map((card, index) => (
          <main
            className="w-full md:flex justify-center gap-20 items-center"
            key={index}
          >
            <MagicCard card={card} index={index} className="w-1/2">
              <div className="flex flex-col py-28 gap-4">
                <h1>{card.title}</h1>
                <p>{card.date}</p>
              </div>
            </MagicCard>

            <div className="w-1/2">
              <div className="">
                <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                  <div>
                    <h1 className="font-semibold text-3xl">{card.title}</h1>
                    <p className="my-5 text-white-50">🗓️&nbsp;{card.date}</p>
                    <p className="text-[#839CB5] italic">Responsibilities</p>
                    <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                      {card.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-lg">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        ))}
      </div>
    </section>
  );
};

export default Experience;
