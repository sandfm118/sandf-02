import React from "react";

const Navbar = ({ handleScrollTo }) => {
  return (
    <div className="fixed z-[999] backdrop-blur-[2px] w-full px-[3vw] py-[1.5vh] Chakra-Petch flex justify-between items-center border-b-[1px] border-zinc-800 ">
      <div className="w-[10vw] sm:w-[6vw] h-[6vh] sm:h-[5vh]">
        <div onClick={() => handleScrollTo("#Home")} className="w-full h-full bg-[url('/sandf.png')] bg-cover bg-center bg-no-repeat"></div>
      </div>
      <div className="hidden md:flex links gap-[3vw] relative">
        <a
          onClick={() => handleScrollTo("#about-us")}
          className="text-[4vw] md:text-[1.5vw] font-light relative cursor-pointer whitespace-nowrap link link--metis"
        >
          About Us
        </a>
        <a
          onClick={() => handleScrollTo("#skills")}
          className="text-[4vw] md:text-[1.5vw] font-light relative cursor-pointer whitespace-nowrap link link--metis"
        >
          Skills
        </a>
        <a
          onClick={() => handleScrollTo("#projects")}
          className="text-[4vw] md:text-[1.5vw] font-light relative cursor-pointer whitespace-nowrap link link--metis"
        >
          Projects
        </a>
        <a
          onClick={() => handleScrollTo("#connect")}
          className="text-[4vw] md:text-[1.5vw] font-light relative cursor-pointer whitespace-nowrap link link--metis"
        >
          Connect
        </a>
      </div>
    </div>
  );
};

export default Navbar;
