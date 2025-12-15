"use client";
import { techStackIcons } from "@/lib/db";
import Image from "next/image";

const TechIconCardExperience = () => {
  return (
    <section id="skills" className="py-10 mb-16">
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
