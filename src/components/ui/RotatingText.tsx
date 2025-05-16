"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RotatingTextProps {
  className?: string;
}

export default function RotatingText({ className }: RotatingTextProps) {
  return (
    <div className={cn("fixed md:h-24 md:w-24 h-20 w-20", className)} style={{ zIndex: 9999 }}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="relative flex h-full w-full items-center justify-center"
      >
        <div className="absolute h-full w-full rounded-full border border-white/30" />
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
        >
          <defs>
            <path
              id="textCircle"
              d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
              fill="none"
            />
          </defs>
          <text className="fill-white/70" fontSize="8.5">
            <textPath
              href="#textCircle"
              className="tracking-[0.35em] font-mono uppercase"
            >
              learn more • grow more • earn more •
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  );
}
