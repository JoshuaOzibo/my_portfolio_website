'use client'
import Image from 'next/image';
import ProjectImage from '@/assets/swiftcareerPreviewImage.webp'

export default function Projects() {
  return (
    <section id="projects" className="py-10 container px-6 m-auto">
      <h1 className="text-center text-white text-5xl font-black">Project</h1>

      <main className="grid  lg:grid-cols-2 gap-8 mt-8">
        {/* Left side - larger project */}
        <div className="lg:row-span-2 h-full">
          <div className="relative lg:h-[calc(100vh-300px)] h-[300px]">
            <Image 
              src={ProjectImage} 
              alt="project1" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </h1>
        </div>

        {/* Right side - two smaller projects */}
        <div>
          <div className="relative h-[300px]">
            <Image 
              src={ProjectImage} 
              alt="project2" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </h1>
        </div>
        <div>
          <div className="relative h-[300px]">
            <Image 
              src={ProjectImage} 
              alt="project3" 
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h1 className="text-white text-2xl font-bold mt-4">
            On-Demand Rides Made Simple with a Powerful, User-Friendly App
            called Ryde
          </h1>
        </div>
      </main>
    </section>
  );
}
