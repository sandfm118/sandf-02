
import React from "react";
import gsap from "gsap/all";

const Empty = () => {
  const skills = [
    {
      title: "Security Audits",
      image: "/audit.webp",
      description:
        "Expertise in auditing smart contracts to identify vulnerabilities and ensure robust security.",
      link: "https://chain.link/education-hub/how-to-audit-smart-contract#:~:text=During%20a%20smart%20contract%20audit,both%20automated%20and%20manual%20processes.",
    },
    {
      title: "Decentralized Finance ",
      image: "/defi.webp",
      description:
        "Proficiency in building and securing DeFi applications, including decentralized ",
      link: "https://chain.link/education/defi",
    },
    {
      title: "Consensus Algorithm Development",
      image: "/consensus.webp",
      description:
        "In-depth understanding of consensus mechanisms like Proof of Stake (PoS),",
      link: "https://ethereum.org/en/developers/docs/consensus-mechanisms/",
    },
    {
      title: "Blockchain Interoperability",
      image: "/interopr.webp",
      description:
        "Cross-chain communication and interoperability solutions like Polkadot,",
      link: "https://medium.com/@FxisAi/how-does-blockchain-interoperability-work-and-why-is-it-important-7f8b3a486c03#:~:text=Blockchain%20interoperability%20refers%20to%20the,without%20the%20need%20for%20intermediaries.",
    },
    {
      title: "Blockchain Research and Innovation",
      image: "/research.webp",
      description:
        "Conducting cutting-edge research in blockchain technology, consensus ",
      link: "https://ieeexplore.ieee.org/document/9154065",
    },
    {
      title: "Scalability Solutions",
      image: "/scalability.webp",
      description:
        "Developing and implementing Layer 2 scaling solutions such as state channels,",
      link: "https://ethereum.org/en/developers/docs/scaling/",
    },
  ];

  return (
    <div>
      <div
        id="thx"
        className="empty w-full h-screen overflow-hidden Chakra-Petch"
      >
        <div
          className="hover-it w-full h-full bg-[url('/2.jpg')] bg-cover bg-center"
          data-scroll
          data-scroll-speed=".5"
        >
          <div className="hover-skill opacity-[0] flex flex-col items-center w-full h-full justify-between">
          
            <div className="flex flex-wrap items-center justify-center w-full h-full gap-4 p-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="w-full  md:w-[30vw] h-auto md:h-[40vh] rounded-xl flex flex-col backdrop-blur-[3px] items-center border-[1px] border-sky-600 p-4"
                >
                  <div className="w-full h-[20vh] md:w-[15vw] md:h-[20vh] flex items-center justify-center">
                    <img
                      className=" w-[20vw] h-[12vh] md:w-[10vw] md:h-[12vh] m-4 "
                      src={skill.image}
                      alt={skill.title}
                    />
                  </div>
                  <div className="text-2xl md:text-2xl uppercase mt-3 mb-1 text-center">
                    {skill.title}
                  </div>
                  <div className="text-center text-sm md:text-base px-2 md:px-4">
                    {skill.description}
                  </div>
                  <div className="h-10 w-full md:w-28 border-[1px] border-[#0241ff] rounded-xl text-center my-3 bg-[#000000] flex items-center justify-center">
                    <a target="_blank"
              rel="noopener noreferrer" href={skill.link} className="text-white">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;
