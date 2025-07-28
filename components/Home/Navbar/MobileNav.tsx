import { navLinks } from "@/constant/constant";
import { CgClose } from "react-icons/cg";

const MobileNav = ({
  showNav,
  closeNav,
}: {
  showNav: boolean;
  closeNav: () => void;
}) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlinks */}
      <div
        className={`text-black fixed ${navOpen} justify-center flex flex-col h-full transform transition-all duration-300 delay-150 w-[80%] sm:w-[60%] bg-yellow-700 space-y-6 z-[1050] `}
      >
        {navLinks.map((link) => (
          <a key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-black w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-black sm:text-[30px]">
              {link.label}
            </p>
          </a>
        ))}
        {/* close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
