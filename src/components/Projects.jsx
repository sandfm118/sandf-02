import { motion, useAnimation } from "framer-motion";
import React from "react";

const Projects = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-[5vh] rounded-3xl Chakra-Petch ">
      <div className="w-full px-[3vw] border-b-[1px] pb-[2vw] border-zinc-700">
        <h1 className="text-[5vw]  tracking-tight link link--metis relative cursor-pointer w-[20vw]">
          Projects
        </h1>
      </div>
      <div className="px-[3vw] ">
        <div className="cards w-full flex gap-[1vw] my-10 mb-20 mx-20 ">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-[40%] h-[35vh] rounded-xl relative  border-[1px] border-sky-600"
          >
            <div className="absolute flex z-[9] overflow-hidden -translate-x-1/2 top-[20%] translate-y-1/2 text-[7vw] Chakra-Petch leading-none tracking-tighter left-full">
              {"PROFILE".split("").map((item, index) => (
                <motion.span
                  key={`fyde-${index}`}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl relative">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sandfm118.github.io/profile-01/"
              >
                <img
                  className="w-full h-full bg-cover absolute top-0 left-0"
                  src="./01.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" text-3xl mx-5 my-3 flex flex-row ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sandfm118/profile-01"
              >
                <img className="w-8 h-8 mr-4" src="./github.png" alt="github" />
              </a>
              <div className="w-48 h-16 mr-28 ">Profile-01</div>
              <div className=" text-lg flex flex-row">
                Live{" "}
                <img className="w-4 h-4 ml-3" src="./live.png" alt="live" />{" "}
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-[40%] h-[35vh] rounded-xl relative  border-[1px] border-sky-600"
          >
            <div className="absolute z-[9] flex overflow-hidden translate-x-1/2 top-[20%] translate-y-1/2 text-[7vw] Chakra-Petch leading-none tracking-tighter right-full">
              {"MATRIX".split("").map((item, index) => (
                <motion.span
                  key={`vise-${index}`}
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden relative">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sandfm118.github.io/MATRIX/"
              >
                <img
                  className="w-full h-full bg-cover absolute top-0 left-0"
                  src="./Matrix.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" text-3xl mx-5 my-3 flex flex-row ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sandfm118/MATRIX"
              >
                <img className="w-8 h-8 mr-4" src="./github.png" alt="github" />
              </a>
              <div className="w-48 h-16 mr-28 ">Matrix1</div>
              <div className=" text-lg flex flex-row">
                Live{" "}
                <img className="w-4 h-4 ml-3" src="./live.png" alt="live" />{" "}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-[1vw] my-10 mx-20  mb-20  ">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer w-[40%] h-[35vh] rounded-xl relative  border-[1px] border-sky-600"
          >
            <div className="absolute flex z-[9] overflow-hidden -translate-x-1/2 top-[20%] translate-y-1/2 text-[7vw] Chakra-Petch leading-none tracking-tighter left-full">
              {"CLICK-EFFECT".split("").map((item, index) => (
                <motion.span
                  key={`fyde-${index}`}
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden relative">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://sandfm118.github.io/click-and-move-effect/"
              >
                <img
                  className="w-full h-full bg-cover absolute top-0 left-0"
                  src="./click-effect.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" text-3xl mx-5 my-3 flex flex-row ">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/sandfm118/click-and-move-effect"
              >
                <img className="w-8 h-8 mr-4" src="./github.png" alt="github" />
              </a>
              <div className="w-48 h-16 mr-28 ">Click-Effect</div>
              <div className=" text-lg flex flex-row">
                Live{" "}
                <img className="w-4 h-4 ml-3" src="./live.png" alt="live" />{" "}
              </div>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer w-[40%] h-[35vh] rounded-xl relative  border-[1px] border-sky-600"
          >
            <div className="absolute z-[9] flex overflow-hidden translate-x-1/2 top-[20%] translate-y-1/2 text-[7vw] Chakra-Petch leading-none tracking-tighter right-full">
              {"SANDF".split("").map((item, index) => (
                <motion.span
                  key={`vise-${index}`}
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden relative">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/SANDF_M17"
              >
                <img
                  className="w-full h-full bg-cover absolute top-0 left-0"
                  src="./sandf-web-page.png"
                  alt=""
                />
              </a>
            </div>
            <div className=" text-3xl mx-5 my-3 flex flex-row ">
              <a target="_blank" rel="noopener noreferrer" href="">
                <img className="w-8 h-8 mr-4" src="./github.png" alt="github" />
              </a>
              <div className="w-48 h-16 mr-28 ">Snadf</div>
              <div className="text-lg flex flex-row">
                Live{" "}
                <img className="w-4 h-4 ml-3" src="./live.png" alt="live" />{" "}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
