"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MoveDown } from 'lucide-react';
import { motion } from "framer-motion";

const Navbar = () => {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className="mt-10 mx-12 flex items-start">
        <div
          className="w-10 h-10 flex items-center justify-center font-lavishly text-5xl cursor-pointer"
          onClick={() => handleLogoClick}
        >
          T
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex gap-8 font-orbitron text-sm font-[300] uppercase">
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Work</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </div>
      <div className="flex justify-end mr-12">
        <motion.button
        className="flex gap-2 items-center justify-center relative font-montserrat text-[10px] font-[700] uppercase text-white opacity-100 tracking-[2px] px-6 py-4 rounded-4xl bg-[#ffffff20] cursor-pointer shadow-[0px_2px_6px_rgba(255,255,255,0.2)] before:content-[''] before:absolute before:inset-0 before:bg-noise before:opacity-20 hover:before:opacity-40 hover:bg-[#1E944E] transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}>
          <p className="font-montserrat text-[10px] font-[700] uppercase text-white opacity-100 tracking-[2px]">
            Download Resume
          </p>
          <MoveDown size={12} strokeWidth={3} />
        </motion.button>
      </div>
    </div>
  );
};

export default Navbar;
