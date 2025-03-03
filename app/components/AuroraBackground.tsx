"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawStars();
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.95)";

      for (let i = 0; i < 360; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1.5;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 10);
        ctx.fill();
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark Night Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#010B17] via-[#021B2D] to-[#01030A]" />

      {/* Stars Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-85" />

      {/* Adjusted Aurora Beams (Now Diagonal) */}
      <motion.div
        className="absolute top-[-20%] left-[30%] w-[70vw] h-[100vh] bg-gradient-to-br from-[#5EF387] via-[#3ABFE3] to-transparent opacity-20 blur-[80px] rounded-bl-[40%] rounded-tr-[50%] rotate-180"
        animate={{ x: ["0%", "5%", "-5%"], y: ["0%", "10%", "-5%"], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[-5%] left-[20%] w-[100vw] h-[60vh] bg-gradient-to-br from-[#64E9EE] via-[#1E944E] to-transparent opacity-20 blur-[100px] rotate-220"
        animate={{ x: ["2%", "-2%", "2%"], y: ["5%", "-5%", "5%"], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[-40%] left-[80%] w-[5vw] h-[100vh] bg-gradient-to-br from-[#8EFBA2] via-[#2DBA7A] to-transparent opacity-30 blur-[30px] rotate-130"
        animate={{ x: ["3%", "-3%", "3%"], y: ["5%", "-5%", "5%"], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[0%] left-[45%] w-[10vw] h-[80vh] bg-gradient-to-br from-[#8EFBA2] via-[#2DBA7A] to-transparent opacity-25 blur-[60px] rotate-80"
        animate={{ x: ["3%", "-3%", "3%"], y: ["8%", "-8%", "8%"], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[10%] left-[80%] w-[5vw] h-[100vh] bg-gradient-to-br from-[#8EFBA2] via-[#2DBA7A] to-transparent opacity-25 blur-[40px] rotate-130"
        animate={{ x: ["3%", "-3%", "3%"], y: ["5%", "-5%", "5%"], opacity: [0.3, 0.45, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      />
    </div>
  );
}
