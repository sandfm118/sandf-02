import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

function LandingPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className=" z-10 w-full h-screen pt-1 "
    >
      <div className="textstracture mt-[28vh] px-[3vw]">
        {["Hi There", "I'm SANDF"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-center relative">
                <h1
                  className=" text-[8vw] font-sans leading-[7vw] tracking-tighter font-semibold"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {item}
                </h1>
                {index === 0 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[8vw] relative top-[1.2vw]"
                  >
                    <div className="w-full h-full bg-[url('/hi.png')] bg-cover bg-center"></div>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[2.5vh] Chakra-Petch">A Full-Stack blockchain developer</p>

      <div
        className={`cursor ${isHovering ? "hover" : ""}`}
        style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
      >
        <div className="pupil" />
      </div>
    </div>
  );
}

export default LandingPage;
