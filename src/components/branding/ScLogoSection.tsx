"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScLogoSection() {
  const bulletPoints = [
    { text: "S & C – The initials, seamlessly merged" },
    {
      text: "Eagle form – Introduced for numerological significance, representing vision, power, and elevation",
    },
  ];

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          {/* Left: Text Content */}
          <motion.div
            className="w-full lg:w-[50%] flex flex-col gap-6 lg:pl-[80px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Section Label */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="text-[#021B2A] uppercase text-[18px] tracking-[0.1em] font-semibold"
              style={{ fontFamily: "Urbanist" }}
            >
              THE LOGO INTEGRATES:
            </motion.p>

            {/* Bullet Points */}
            <div className="flex flex-col gap-5">
              {bulletPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, delay: i * 0.1 },
                    },
                  }}
                  className="flex items-start gap-3"
                >
                  {/* Square bullet (14x14, color #3B4B43) */}
                  <div
                    className="flex-shrink-0 mt-1"
                    style={{
                      width: "14px",
                      height: "14px",
                      backgroundColor: "#3B4B43",
                    }}
                  />
                  <p
                    className="text-[18px] leading-[26px] tracking-[0.02em] font-normal text-[#021B2A]"
                    style={{ fontFamily: "Urbanist", fontWeight: 400 }}
                  >
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* S + C + Eagle Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              className="flex items-center justify-start   mt-4"
            >
              <div
                className="flex items-center justify-center px-6 py-4 bg-[#1C3A32]"
                style={{
                  width: "fit-content",
                  minWidth: "min(250px, 90vw)",
                }}
              >
                <span
                  className="text-[32px] md:text-[42px] font-semibold leading-[100%] tracking-[0] whitespace-nowrap"
                  style={{
                    fontFamily: "Urbanist",
                    fontWeight: 600,
                    color: "#E2C797",
                  }}
                >
                  S + C = Eagle
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: golden_ratio.jpg */}
          <motion.div
            className="w-full lg:w-[50%] flex justify-center lg:justify-end pr-0 lg:pr-[80px]"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[500px] aspect-[5/4] rounded-none overflow-hidden">
              <Image
                src="/branding/studiocafe/golden_ratio.jpg"
                alt="Golden Ratio Logo Construction"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 500px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

