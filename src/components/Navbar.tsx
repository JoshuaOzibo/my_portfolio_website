"use client";

import React from "react";
import { LiaGithub } from "react-icons/lia";
import { Socials } from "@/lib/db";

const Navbar = () => {
  return (
    <div className="w-full z-[50] fixed flex h-16 justify-center items-center backdrop-blur-lg">
      <div className="  h-full w-full flex justify-between items-center lg:mx-20 mx-6">
        {/* Header */}
        <h1 className="md:text-xl text-[#86cad9] font-[SatoshiFont] md:block  font-black text-md uppercase gradient-text">
          Joshua
        </h1>

        {/* Logos and Menu */}
        <div className=" md:flex hidden justify-between w-[40%] rounded-full px-16 py-2">
          <a href="#">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Home
            </h1>
          </a>
          <a href="#projects">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Project
            </h1>
          </a>
          <a href="#skills">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Skill
            </h1>
          </a>
        </div>

        <div className=" space-x-5 rounded-full duration-150 cursor-pointer px-[4px] py-[4px] md:hidden flex justify-between items-center bg-black">
          <a href="#">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Home
            </h1>
          </a>
          <a href="#projects">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Project
            </h1>
          </a>
          <a href="#skills">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold gradient-text">
              Skill
            </h1>
          </a>
          <a href={Socials.Github} target="_blank">
            <LiaGithub className="cursor-pointer" color="#fff" size={35} />
          </a>
        </div>

        <div className="md:flex hidden items-center space-x-5">
          <a href={Socials.Github} target="_blank">
            <LiaGithub className="cursor-pointer" color="#fff" size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
