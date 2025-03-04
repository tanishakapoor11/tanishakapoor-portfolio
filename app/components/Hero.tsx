"use client";
import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex ml-24 mr-10 mt-20 items-center h-full justify-between"
    >
      <div className="w-[50%] flex flex-col">
        <h1 className="font-montserrat text-[72px] text-white font-[700] ">
          Hey!
        </h1>
        <h1 className="font-montserrat text-[72px] text-white font-[700] ">
          I am{" "}
          <motion.span className="font-ms-madi text-[85px] text-[#0D47A1]">
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
          className="mt-6 w-[25%] flex gap-2 items-center justify-center relative px-6 py-4 rounded-4xl bg-[#ffffff20] cursor-pointer shadow-[0px_2px_6px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20 hover:before:opacity-40 hover:bg-[#1E944E] transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className="font-montserrat text-[10px] font-[700] uppercase text-white opacity-100 tracking-[2px]">
            See my work
          </p>
          <MoveRight size={12} strokeWidth={3} />
        </motion.button>
      </div>
      <div className="flex flex-col gap-5">
        <ul className="flex flex-col gap-5">
            <motion.li className="flex items-center justify-center h-10 w-10 rounded-4xl bg-[#ffffff20] cursor-pointer shadow-[0px_2px_6px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20 hover:before:opacity-40 hover:bg-[#7F5AF0] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
                <Linkedin size={24} strokeWidth={2} />
            </motion.li>
            <motion.li className="flex items-center justify-center h-10 w-10 rounded-4xl bg-[#ffffff20] cursor-pointer shadow-[0px_2px_6px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20 hover:before:opacity-40 hover:bg-[#7F5AF0] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
                <Github size={24} strokeWidth={2} />
            </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Hero;
