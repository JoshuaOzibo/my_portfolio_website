"use client";
import Image from "next/image";
import { project } from "@/lib/db";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="lg:mx-20 mx-6">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-center text-white mb-12">Project</h1>
        <main className="grid lg:grid-cols-2 gap-8">
          {/* Left side - larger project */}
          <div className="lg:row-span-2 h-full w-full">
            <div className="relative lg:h-[calc(100vh-150px)] h-[300px]">
              <Image
                src={project[0].image}
                alt={project[0].text}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="text-white text-2xl lg:text-3xl font-bold mt-4">
              {project[0].text}
            </h1>
          </div>

          {/* Right side - two smaller projects */}
          <div className="w-full">
            <div className="relative h-[300px]">
              <Image
                src={project[1].image}
                alt={project[1].text}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="text-white text-2xl lg:text-3xl font-bold mt-4">
              {project[1].text}
            </h1>
          </div>
          <div className="w-full">
            <div className="relative h-[300px]">
              <Image
                src={project[2].image}
                alt={project[2].text}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="text-white text-2xl lg:text-3xl font-bold mt-4">
              {project[2].text}
            </h1>
          </div>
        </main>
      </div>
    </section>
  );
}
