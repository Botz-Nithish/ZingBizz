"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse values
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Transforms for parallax effects (different depths)
  const x1 = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);
  const y1 = useTransform(smoothY, [-0.5, 0.5], [-15, 15]);

  const x2 = useTransform(smoothX, [-0.5, 0.5], [20, -20]);
  const y2 = useTransform(smoothY, [-0.5, 0.5], [20, -20]);

  const x3 = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const y3 = useTransform(smoothY, [-0.5, 0.5], [10, -10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -0.5 to 0.5
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen w-full flex flex-col justify-end overflow-hidden pb-12 pt-32 px-6 lg:px-24"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 0%, #085C90 0%, #021D2D 61.06%, #00090F 100%)",
      }}
    >
      {/* Central Graphic Area */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px]">
          {/* Glowing Sphere */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[90%] w-[38%] h-[38%] z-10 pointer-events-none rounded-full">
            <Image
              src="/assets/circle1.svg"
              alt="Glowing Circle Background"
              fill
              className="object-contain relative"
              style={{
                filter:
                  "drop-shadow(0 0 15px rgba(12, 185, 243, 1)) drop-shadow(0 0 30px rgba(12, 185, 243, 1)) drop-shadow(0 0 60px rgba(12, 185, 243, 0.8)) drop-shadow(0 0 100px rgba(12, 185, 243, 0.5))",
              }}
              priority
            />
            <Image
              src="/assets/circle.svg"
              alt="Glowing Circle Foreground"
              fill
              className="object-contain relative"
              priority
            />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[85%] h-[90%] z-0"
          >
            <Image
              src="/assets/hero-hand.png"
              alt="Hand holding sphere"
              fill
              className="object-contain object-bottom"
              priority
            />
          </motion.div>

          {/* Floating Text: Design — top of orb */}
          <motion.div
            className="absolute top-[0%] left-1/2 -translate-x-1/2 z-20"
            style={{ x: x1, y: y1 }}
          >
            <span className="text-white font-mono tracking-wider text-sm md:text-base drop-shadow-md whitespace-nowrap">
              // Design
            </span>
          </motion.div>

          {/* Floating Text: Development — left of orb */}
          <motion.div
            className="absolute top-[35%] -left-10 md:-left-14 z-20"
            style={{ x: x2, y: y2 }}
          >
            <span className="text-white font-mono tracking-wider text-sm md:text-base drop-shadow-md whitespace-nowrap">
              // Development
            </span>
          </motion.div>

          {/* Floating Text: Marketing — right of orb */}
          <motion.div
            className="absolute top-[35%] -right-10 md:-right-14 z-20"
            style={{ x: x3, y: y3 }}
          >
            <span className="text-white font-mono tracking-wider text-sm md:text-base drop-shadow-md whitespace-nowrap">
              // Marketing
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 w-full mt-auto flex flex-col gap-4">
        {/* Heading + CTA in the same row, ABOVE the line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 sm:gap-0 px-6 lg:px-24">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1
              className="font-sans font-medium text-3xl sm:text-4xl md:text-[48px] leading-[100%] tracking-[0%]"
              style={{
                background:
                  "linear-gradient(90deg, #FFFFFF 41.5%, #999999 56%, #FFFFFF 70.5%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Tech-Driven Creativity,
              <br /> Unlimited Possibilities
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="shrink-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#021D2D",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg border border-transparent hover:border-white transition-colors duration-300"
            >
              See What We Do
            </motion.button>
          </motion.div>
        </div>

        {/* Divider line — below heading and button */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="w-full h-[1px] bg-white origin-left"
        />
      </div>
    </section>
  );
}

