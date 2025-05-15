'use client'
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";
import { techStackIcons } from "@/lib/db";

const Model = ({ tech }: { tech: typeof techStackIcons[0] }) => {
  const scene = useGLTF(tech.modelPath);

  useEffect(() => {
    if (tech.name === "Interactive Developer") {
      scene.scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          if (child.name === "Object_5") {
            (child as THREE.Mesh).material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, tech.name]);

  return (
    <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
      <group 
        scale={tech.scale} 
        rotation={tech.rotation as [number, number, number]}
      >
        <primitive object={scene.scene} />
      </group>
    </Float>
  );
};

const TechIconCardExperience = () => {
  return (
    <section id="skills" className="py-10 mb-16 container px-6 m-auto">
      <h2 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-center text-white mb-10">Tech Stack</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-8">
        {techStackIcons.map((tech, index) => (
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
      </div>
    </section>
  );
};

export default TechIconCardExperience;
