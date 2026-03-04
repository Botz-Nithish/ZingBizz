"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const HighlightedWord = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="inline-block  cursor-default px-0.5"
      style={{
        background: "linear-gradient(to top, #F00000, #F00000)",
        backgroundSize: hovered ? "100% 100%" : "100% 4px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        transition: "background-size 0.3s ease, color 0.3s ease",
        color: hovered ? "#ffffff" : "#373737",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
};

export default function QuickIntro() {
  const text = "We are a full-service design and development agency helping businesses build a strong presence in the digital world.".split(" ");

  return (
    <section className="relative w-full min-h-screen bg-[#F8F9FA] py-32 px-6 lg:px-24 flex flex-col items-start justify-center">
      {/* Top Left Logo */}
      <div className="absolute top-24 left-6 lg:left-24">
        <Image
          src="/assets/quickintro-image.png"
          alt="ZingBizz Agency"
          width={150}
          height={40}
          className="h-10 w-auto object-contain"
        />
      </div>

      {/* Main Typography Area */}
      <div className="max-w-6xl">
        <motion.h2
          className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.3] text-[#373737]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05,
              },
            },
            hidden: {},
          }}
        >
          {text.map((word, index) => {
            const isHighlighted = word.replace(/[^a-zA-Z]/g, "") === "design" || word.replace(/[^a-zA-Z]/g, "") === "development";

            return (
              <motion.span
                key={index}
                className="inline-block font-bold mr-[0.25em] mb-[0.1em]"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                {isHighlighted ? (
                  <HighlightedWord>{word}</HighlightedWord>
                ) : (
                  word
                )}
              </motion.span>
            );
          })}
        </motion.h2>
      </div>
    </section>
  );
}

