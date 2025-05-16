"use client";

import { Particles } from "@/components/magicui/particles";
import Image from "next/image";
import ResumeImage from "@/assets/my-image.webp";
import { WordRotate } from "@/components/magicui/word-rotate";

export default function Hero() {

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/public/assets/My_Resume.pdf";
    link.download = "Ozibo-Joshua-CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactOnWhatsApp = () => {
    window.open("https://wa.me/+2347085531738", "_blank");
  };

  return (
    <section className="lg:mt-0 ">
      <div className="lg:mx-20 mx-6">
        <div className="relative lg:h-[700px] h-screen pt-24">
          <div className="absolute lg:flex justify-between space-y-10 lg:space-y-0 inset-0 items-center">
            <div className="lg:w-1/2 lg:m-0 w-full">
              <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl mt-10 font-bold text-start pt-20 text-white">
                Turning{" "}
                <WordRotate
                  className="text-[#86cad9]"
                  words={["Ideas", "Codes", "Logic"]}
                />
                into Real-World Projects That Make an Impact
              </h1>
              <p className="text-white text-sm mt-3 font-light">
                Hi, I'm Joshua a front-end developer passionate about crafting
                meaningful UIs that deliver results.
              </p>
              <p>Currently open to remote opportunities.</p>

              <div className="lg:flex mb-10 lg:mb-0 mt-5 lg:space-x-5 space-x-0 space-y-5 lg:space-y-0 lg:mx-0 w-full block gap-2">
                <div  className="m-auto w-full lg:m-0">
                    <button onClick={handleDownloadResume} className="bg-white w-full text-black px-4 py-2 rounded-md">
                    Download Resume
                  </button>
                </div>

                <div  className="m-auto w-full lg:m-0">
                  <button onClick={handleContactOnWhatsApp} className="bg-white w-full text-black px-4 py-2 rounded-md">
                    Contact on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <Image
              src={ResumeImage}
              className="rounded-full lg:mx-0 mx-auto"
              width={350}
              height={350}
              alt="ResumeImage"
            />
          </div>
          <Particles className="h-full" />
        </div>
      </div>
    </section>
  );
}
