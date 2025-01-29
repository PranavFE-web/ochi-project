import { motion } from "framer-motion";
import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
function LandingPage() {
  return (
    <div data-scroll data-scroll-speed="-.3 " className="w-full h-screen bg-zinc-800 pt-1 text-white">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-baseline ">
              {index===1 &&(<motion.div initial={{width:0}} 
              animate={{width:"9vw"}}
              transition={{ease:[0.76,0,0.24,1]}}
               className="w-[9vw] h-[6vw] relative-top-[1vw] bg-red-500"></motion.div>)}
              <h1 className=" flex item-center uppercase text-[9vw] h-full leading-[7.5vw]  tracking-tighter  font-bold ">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-300 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first first pitch to the IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="Start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-500 font-light text-md uppercase  rounded-full ">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaLongArrowAltUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
