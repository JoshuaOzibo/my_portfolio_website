import React, { useContext } from "react";
import { MdOutlineNightlightRound } from "react-icons/md";
import { LiaGithub } from "react-icons/lia";
import { MdOutlineLightMode } from "react-icons/md";
import { Socials } from "@/lib/db";

const Navbar = () => {

  return (
    <div className="w-full z-[50] fixed flex h-16 justify-center items-center backdrop-blur-lg">
      <div className="w-[85%] h-full items-center flex md:justify-between">
        {/* Header */}
        <h1 className="md:text-xl text-white font-[SatoshiFont] md:block hidden sm:text-sm  font-black text-xs uppercase">
          Portfolio
        </h1>

        {/* Logos and Menu */}
        <div className=" md:flex hidden justify-between w-[40%] rounded-full px-16 py-2">
          <a
            href="#"
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.scrollTo({ top: 0 });
            // }}
          >
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold">
              Home
            </h1>
          </a>
          <a href="#projects">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold">
              Project
            </h1>
          </a>
          <a href="#skills">
            <h1 className="text-sm text-[#d9ecff] font-[SatoshiFont] cursor-pointer font-semibold">
              Skill
            </h1>
          </a>
        </div>

        <div className="m-auto w-[120px] hover:w-[130px] rounded-full duration-150 cursor-pointer px-[4px] py-[4px] md:hidden flex justify-between items-center bg-black">
          <MdOutlineLightMode
            className="cursor-pointer"
            color="#fff"
            size={22}
          />
          <MdOutlineNightlightRound
            className="cursor-pointer"
            size={22}
            color="#fff"
          />
          <a href={Socials.Github} target="_blank">
            <LiaGithub
              className="cursor-pointer"
              color="#fff"
              size={25}
            />
          </a>
        </div>

        <div className="md:flex hidden items-center space-x-5">
          {/* light mood Icon */}
          <MdOutlineLightMode
            className="cursor-pointer"
            size={22}
          />
          <MdOutlineNightlightRound
            className="cursor-pointer"
            size={22}
            color="#fff"
          />
          <a href={Socials.Github} target="_blank">
            <LiaGithub
              className="cursor-pointer"
              color="#fff"
              size={25}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
