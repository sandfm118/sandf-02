import { motion } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";

const Footer = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.pageX, y: e.pageY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const openGmail = () => {
    const mailtoLink = "https://mail.google.com/mail/?view=cm&fs=1&to=sandfm17@gmail.com&su=Hello%20SANDF_M17&body=I%20wanted%20to%20get%20in%20touch%20with%20you.";
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="App overflow-hidden">
      <div
        className="w-full h-screen px-[3vw] pt-[20vh] pb-[10vh] flex Chakra-Petch border-t-[1px] border-zinc-700"
        data-scroll
        data-scroll-section
        data-scroll-speed=".5"
      >
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
            <h1 className="text-[7vw] uppercase leading-none -mb-[1.5vw]">
              thank you for
            </h1>
            <h1 className="text-[7vw] uppercase leading-none">visiting us.</h1>
          </div>
          <div className="name text-[4vh] md:text-[2vh]"> &copy;SANDF_M17 2024</div>
        </div>
        <div
          className="w-1/2"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <h1 className="text-[4vw] uppercase leading-none -mb-[1.5vw] pt-[0.4vh]">
            CONNECT HERE
          </h1>
          <div className="detail mt-10 w-[6vw]">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[2vh] font-light relative cursor-pointer link link--metis"
              href="https://x.com/SANDF_M17"
            >
              TWITTER/X
            </a>
            <a
              className="block text-[2vh] font-light relative cursor-pointer link link--metis"
              href="./"
            >
              YOUTUBE
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="block text-[2vh] font-light relative cursor-pointer link link--metis"
              href="https://github.com/sandfm118"
            >
              GitHub
            </a>
            <a
              className="block text-[2vh] font-light relative cursor-pointer link link--metis"
              onClick={openGmail}
            >
              EMAIL
            </a>
          </div>
        </div>
      </div>
      <div
        className={`cursor ${isHovering ? "hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      >
        <div className={`pupil ${isHovering ? "blink" : ""}`} />
      </div>
    </div>
  );
};

export default Footer;
