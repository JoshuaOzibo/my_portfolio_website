'use client'

import { Particles } from "@/components/magicui/particles";
import OverView from "@/components/OverView";

export default function Hero() {
  return (
    <section className="">
      <div className="relative overflow-hidden h-full md:h-[700px] pt-24 w-full">
        <Particles />
      </div>
      <OverView />
    </section>
  );
} 