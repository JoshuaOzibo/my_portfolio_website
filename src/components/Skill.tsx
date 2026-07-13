"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { techStackIcons } from "@/lib/db";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TechIconCardExperience = () => {
  useEffect(() => {
    // Recalculate ScrollTrigger offsets once the components are mounted
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        zIndex: 24, // Matches Experience section (24)
        backgroundColor: "#000000",
        paddingTop: "6rem",
        paddingBottom: "25vh", // Ample bottom depth to allow scrolling past preceding sections fully
      }}
    >
      <div className="lg:mx-10 mx-6">
        <h2 className="xl:text-6xl lg:text-5xl md:text-4xl gradient-text text-3xl font-bold text-center text-white mb-12">
          Tech Stack
        </h2>
        <div className=" grid xl:grid-cols-5 lg:grid-cols-2 grid-cols-1 gap-10">
          {techStackIcons.map((tech, index) => (
            <div className="m-auto " key={index}>
              <Image
                className="w-[200px] h-[200px] p-1 bg-gray-700 rounded-full "
                src={tech.image}
                alt={tech.name}
                width={100}
                height={100}
              />

              <h3 className="text-center text-[#86cad9] font-bold text-2xl mt-6">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechIconCardExperience;

/**
 * {techStackIcons.map((tech, index) => (
            <div key={index} className="w-full lg:w-[300px] h-[300px]">
              <Canvas>
                <ambientLight intensity={0.3} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <spotLight
                  position={[10, 15, 10]}
                  angle={0.3}
                  penumbra={1}
                  intensity={2}
                />
                <Environment preset="city" />
                <Model tech={tech} />
                <OrbitControls enableZoom={false} />
              </Canvas>
              <h3 className="text-center text-[#86cad9] font-bold text-2xl mt-4">{tech.name}</h3>
            </div>
          ))}
 */
