"use client";
import { useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavShow = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div className="z-1000">
      <Nav openNav={handleNavShow} />
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNav;
