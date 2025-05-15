"use client";

import { Particles } from "@/components/magicui/particles";
import OverView from "@/components/OverView";

import { WordRotate } from "@/components/magicui/word-rotate";

export default function Hero() {
  return (
    <section className="">
      <div className="relative overflow-hidden h-full md:h-[700px] pt-24 w-full">
        <div className="absolute mx-10 inset-0 flex">
          <div className="w-1/3 ">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl mt-10 font-bold text-start pt-20 text-white">
              Turning <WordRotate className="" words={["Ideas", "Codes", "Logic"]} />into Real-World Projects That Make an Impact
            </h1>
            <p className="text-white text-sm mt-3 font-light">
              Hi, I’m Joshua a front-end developer passionate about crafting
              meaningful UIs that deliver results.
            </p>
            <p>Currently open to remote opportunities.</p>
          </div>
        </div>
        <Particles />
      </div>
      <OverView />
    </section>
  );
}
