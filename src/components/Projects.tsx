"use client";
import Image from "next/image";
import { project } from "@/lib/db";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <div className="lg:mx-20 mx-6">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">
            My <span className="gradient-text"> Favorite </span> Projects
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of projects showcasing my expertise in building
            modern, scalable, and user-centric applications.
          </p>
        </div>
        <main className="flex flex-col gap-6">
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(175_80%_50%_/_0.2)]">
            <div className="relative overflow-hidden h-[400px] border-2 border-primary md:h-[500px] lg:h-[600px] bg-card/50">
              <Image
                src={project[0].image}
                alt={project[0].text}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-end p-6 md:p-8 lg:p-10">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                    {project[0].text}
                  </h3>
                  <div className="flex gap-2 mt-4">
                    <button className="px-4 py-1.5 text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                      View Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {project.slice(1).map((item, index) => (
              <div
                key={index + 1}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(175_80%_50%_/_0.2)]"
              >
                <div className="relative overflow-hidden h-[350px] md:h-[400px] lg:h-[450px] bg-card/50">
                  <Image
                    src={item.image}
                    alt={item.text}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-end p-6 md:p-8">
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 w-full">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                        {item.text}
                      </h3>
                      <div className="flex gap-2 mt-4">
                        <button className="px-3 py-1.5 text-xs md:text-sm font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                          View Project
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
