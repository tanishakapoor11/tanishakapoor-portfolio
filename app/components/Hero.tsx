"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col ml-24 mt-20 justify-center h-full w-[50%]"
    >
      <h1 className="font-montserrat text-[72px] text-white font-[700] ">
        Hey!
      </h1>
      <h1 className="font-montserrat text-[72px] text-white font-[700] ">
        I am{" "}
        <motion.span
          className="font-ms-madi text-[85px] text-[#0D47A1]"
          // style={{
          //   backgroundImage:
          //     "linear-gradient(270deg, #1B5E20, #001F3F, #0D47A1, #1B5E20)",
          //   backgroundSize: "500% 500%",
          // }}
          // animate={{
          //   backgroundPosition: [
          //     "0% 50%",
          //     "25% 50%",
          //     "50% 50%",
          //     "75% 50%",
          //     "100% 50%",
          //     "0% 50%",
          //   ],
          //   textShadow: [
          //     "0px 0px 4px #1B5E20",
          //     "0px 0px 6px #0D47A1",
          //     "0px 0px 6px #001F3F",
          //     "0px 0px 4px #1B5E20",
          //   ],
          // }}
          // transition={{
          //   duration: 12,
          //   repeat: Infinity,
          //   ease: "easeInOut",
          // }}
        >
          Tanisha Kapoor
        </motion.span>
      </h1>
      <p className="font-montserrat text-lg text-gray-300 mt-2">
        Just like the <span className="font-[700]">Northern Lights</span>, I
        create{" "}
        <motion.span
          className="text-transparent bg-clip-text font-[500]"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #4CAF50, #00A8E8, #7F5AF0, #185A9D, #4CAF50)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            textShadow: [
              "0px 0px 5px #4CAF50",
              "0px 0px 10px #00A8E8",
              "0px 0px 5px #7F5AF0",
              "0px 0px 10px #185A9D",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          fluid
        </motion.span>
        ,{" "}
        <motion.span
          className="text-transparent bg-clip-text font-[500]"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #4CAF50, #00A8E8, #7F5AF0, #185A9D, #4CAF50)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            textShadow: [
              "0px 0px 5px #4CAF50",
              "0px 0px 10px #00A8E8",
              "0px 0px 5px #7F5AF0",
              "0px 0px 10px #185A9D",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          breathtaking
        </motion.span>
        , and{" "}
        <motion.span
          className="text-transparent bg-clip-text font-[500]"
          style={{
            backgroundImage:
              "linear-gradient(270deg, #4CAF50, #00A8E8, #7F5AF0, #185A9D, #4CAF50)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            textShadow: [
              "0px 0px 5px #4CAF50",
              "0px 0px 10px #00A8E8",
              "0px 0px 5px #7F5AF0",
              "0px 0px 10px #185A9D",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          unforgettable
        </motion.span>{" "}
        digital experiences.
      </p>
      <motion.button
        className="mt-6 w-[25%] flex gap-2 items-center justify-center relative font-montserrat text-[10px] font-[700] uppercase text-white opacity-100 tracking-[2px] px-6 py-4 rounded-4xl bg-[#ffffff20] cursor-pointer shadow-[0px_2px_6px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20 hover:before:opacity-40 hover:bg-[#1E944E] transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See My Work
      </motion.button>
    </motion.div>
  );
};

export default Hero;
