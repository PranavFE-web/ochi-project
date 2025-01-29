import { motion, useAnimate } from "framer-motion";
import React from "react";

function Featured() {
  const cards=[useAnimate(),useAnimate()];
  const handleHover=()=>{
    cards[index].start({})
  }
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHoverStart={()=>handleHover(0)} className="cardContainer relative w-1/2 h-[75vh]">
            <h1 className=" absolute right-0 flex translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-serif leading-none tracking-tighter text-8xl">
              {" "}
              {"FYDE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <div className="cardContainer  relative w-1/2 h-[75vh] ">
            <h1 className=" absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2  z-[9] font-serif leading-none tracking-tighter text-8xl">
              {"VISE".split("").map((item, index) => (
                <span>{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
