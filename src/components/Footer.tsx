"use client";

import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Socials } from "@/lib/db";

const Footer = () => {
  return (
    <div className="border-t border-black-50 py-5 flex items-center justify-between px-10 text-white w-full">
      <h1>Terms & Conditions</h1>
      <div className="flex items-center">
        <div className="flex space-x-5">
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
          <a
            href="mailto:joshuamichaelozibo@gmail.com"
            className="border border-black-50 p-2 transition-all duration-150 rounded-md"
          >
            <MdEmail color="#fff" size={30} />
          </a>
        </div>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Ozibo Joshua. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
