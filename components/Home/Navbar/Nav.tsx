"use client";
import { navLinks } from "@/constant/constant";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = ({ openNav }: { openNav: () => void }) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div
      className={`${
        navBg ? "bg-black shadow-md" : ""
      } transition-all duration-200 h-[10vh] z-[1000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2 justify-center">
          <a href="/">
            <h1 className="text-xl sm:text-3xl bg-gradient-to-r from-yellow-600 to-yellow-900 bg-clip-text text-transparent">
              Discover Resort
            </h1>
          </a>
        </div>
        {/* Navlink */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a key={link.id} href={link.url} className="group">
              <p
                className="relative text-white text-base font-medium w-fit block 
        after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-700 after:w-full after:scale-x-0 group-hover:after:scale-x-100 after:transition after:duration-300 after:origin-right"
              >
                {link.label}
              </p>
            </a>
          ))}
        </div>
        {/* buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="tel:910-###-####"
            className="hidden sm:block md:px-12 md:py-2.5 px-8 py-2 text-white text-base bg-yellow-800 hover:bg-yellow-900 transition-all duration-300 rounded-lg"
          >
            Call Us
          </a>
          <a
            href="tel:910-###-####"
            className="sm:hidden p-3 text-white text-base bg-yellow-800 hover:bg-yellow-900 transition-all duration-300 rounded-full"
          >
            <FaPhone />
          </a>
          {/* burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
