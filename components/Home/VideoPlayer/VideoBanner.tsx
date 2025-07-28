"use client";

import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function VideoBanner() {
  return (
    <section className="relative w-screen h-[80vh] md:h-screen overflow-hidden">
      <Image
        src="/images/view.jpg"
        alt="Hotel Lobby"
        fill
        className="object-cover object-center"
      />

      {/* Dark overlay if needed */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Circular Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex items-center justify-center rounded-full w-32 h-32 border-[3px] border-yellow-900 text-white bg-yellow-900 opacity-60 cursor-pointer"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
        >
          <FaPlay className="text-2xl z-10" />

          {/* Circular text */}
          <svg
            viewBox="0 0 100 100"
            className="absolute w-[110px] h-[110px] text-white"
          >
            <path
              id="circle"
              fill="none"
              d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
            />
            <text fill="white" fontSize="16" fontWeight="bold">
              <textPath xlinkHref="#circle" startOffset="0">
                * Watch Now • Get Full Video • Watch Now •
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
