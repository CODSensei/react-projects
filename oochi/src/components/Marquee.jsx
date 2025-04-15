import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.2"
      className="w-full py-20 rounded-t-3xl bg-[#004d43]"
    >
      <div className="text border-y-2 border-zinc-300 flex justify-center overflow-hidden gap-15 whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[17vw] uppercase pt-12 leading-none font-['Futura-Bold'] font-semibold "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 5,
            repeat: Infinity,
          }}
          className="text-[17vw] uppercase pt-12 leading-none font-['Futura-Bold'] font-semibold "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
