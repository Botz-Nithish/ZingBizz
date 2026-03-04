"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScHero() {
  return (
    <section className="w-full relative h-[100vh] bg-[#F5F5F5] overflow-hidden">
      <div className="w-full relative h-full flex justify-center items-center">
        {/* Main Hero Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/branding/studiocafe/herosection.jpg"
            alt="ZingBizz Hero Landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* Bouncing Down Arrow Indicator */}
        <motion.button
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="absolute bottom-[45px] left-1/2 -translate-x-1/2 z-10 w-[37px] h-[18.5px] flex items-center justify-center cursor-pointer"
          animate={{ y: [0, 15, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="Scroll to About section"
        >
          <svg
            width="37"
            height="19"
            viewBox="0 0 37 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2L18.5 16L35 2"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </div>
    </section>
  );
}

