import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full p-4 md:p-[3vw] bg-black text-[#134efe] Chakra-Petch"
    >
      <div className="w-full md:w-1/2 mb-4 md:mb-0">
        <h1 className="text-[8vw] text-white md:text-[5vw] mb-2 md:mb-[1vw] link link--metis relative cursor-pointer w-auto md:w-[15vw]">
          About
        </h1>
      </div>
      <div className="w-full border-t-[1px] pt-4 md:pt-[1vw] mt-4 md:mt-[4vh] border-[#292c1c] flex flex-col md:flex-row gap-4 md:gap-[2vw]">
        <div className="w-full md:w-1/2 Chakra-Petch text-[4vw] mr-8 md:text-[2vw] mt-4 md:mt-[4vh] leading-[6vw] md:leading-[3.3vw] tracking-tight">
          <a
            href="https://x.com/SANDF_M17"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer target-blank link link--metis"
          >
            Hello, I'm Sandf_m17,
          </a>{" "}
          a dedicated blockchain auditor and researcher with one year of professional experience in the field. I hold a Bachelor's degree in Computer Science and have honed my skills in auditing and analyzing blockchain protocols to ensure security and efficiency. Currently, I'm contributing to the innovative and decentralized data economy project{" "}
          <a
            href="https://oceanprotocol.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer link link--metis"
          >
            @oceanprotocol,
          </a>{" "}
          and I'm passionate about advancing blockchain technology and its applications.
        </div>
        <div className="w-full md:w-1/2 h-[40vh] md:h-[60vh] bg-[url('/my-pic.png')] bg-cover bg-center rounded-3xl"></div>
      </div>
      <div className="w-full border-t-[1px] border-[#292c1c] mt-4 md:mt-0"></div>
    </div>
  );
};

export default About;
