"use client";
import { useEffect, useState } from "react";
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-3">
      {isVisible && (
        <div className="flex flex-col gap-2 justify-center items-center mr-3">
          <a
            href="https://wa.me/"
            target="_blank"
            className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center focus:outline-none"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <button
            onClick={scrollToTop}
            className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none"
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
