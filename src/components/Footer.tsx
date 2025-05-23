"use client";

import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Socials } from "@/lib/db";

const Footer = () => {
  const handleEmailContact = () => {
    window.location.href = "mailto:joshuamichaelozibo@gmail.com";
  };

  return (
    <div className=" z-0 border-t border-black-50 py-5 space-y-3 lg:space-y-0 lg:flex items-center justify-center lg:justify-between px-10 text-[#86cad9] w-full">
      <h1 className="text-center lg:text-left">Terms & Conditions</h1>
      <div className="flex justify-center items-center">
        <div className="flex space-x-5 md:m-0 m-auto">
          <a
            href={Socials.Github}
            className="border border-black-50 p-2 hover: transition-all duration-150 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color="#fff" size={30} />
          </a>
          <a
            href={Socials.Linkedin}
            className="border border-black-50 p-2 hover: transition-all duration-150 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color="#fff" size={30} />
          </a>
          <a
            href={Socials.Instagram}
            className="border border-black-50 p-2 hover: transition-all duration-150 rounded-md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagramSquare color="#fff" size={30} />
          </a>
          <button
            onClick={handleEmailContact}
            className="border border-black-50 p-2 transition-all duration-150 rounded-md"
          >
            <MdEmail color="#fff" size={30} />
          </button>
        </div>
      </div>
      <p className="text-center lg:text-right">
        &copy; {new Date().getFullYear()} Ozibo Joshua. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
