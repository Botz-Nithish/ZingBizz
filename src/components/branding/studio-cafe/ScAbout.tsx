"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScAbout() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="w-full bg-white relative">
      <div className="w-full max-w-[1440px] mx-auto overflow-hidden px-6 md:px-12 lg:px-0 lg:py-24 py-12">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-0">
          {/* Text Content */}
          <motion.div
            className="w-full lg:w-[60%] flex flex-col gap-4 lg:ml-[80px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h2
              variants={textVariants}
              className="font-semibold text-[#021B2A] text-2xl md:text-3xl lg:text-[42px] leading-tight lg:leading-[100%]"
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                letterSpacing: "0%",
              }}
            >
              Studio Café
            </motion.h2>
            <motion.h3
              variants={textVariants}
              className="font-semibold text-[#021B2A] text-2xl md:text-3xl lg:text-[28px] leading-snug lg:leading-[40.6px] "
              style={{ fontFamily: "Urbanist" }}
            >
              Branding
            </motion.h3>

            <motion.div variants={textVariants} className="mt-8 lg:mt-[80px]">
              <span
                className="font-semibold text-[#001929] uppercase tracking-wider text-base md:text-lg lg:text-[18px]"
                style={{ fontFamily: "Urbanist" }}
              >
                BRIEF
              </span>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="font-normal text-[#001929] text-base lg:text-[18px] leading-relaxed lg:leading-[26px] tracking-[0.02em] max-w-full lg:max-w-[650px] -mt-2 lg:-mt-4"
              style={{
                fontFamily: "Urbanist",
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              Studio café is a one of a kind café with multiple themes and a
              shared kitchen. The client had a vision which needed the
              sophistication of a café and the simplicity of the studio. To
              personalize the brand further and for numerological significance,
              the client requested that the logo subtly incorporate an eagle
              element.
            </motion.p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            className="w-full lg:w-[40%] flex justify-center lg:justify-end pr-0 lg:pr-[80px] lg:mt-[100px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[520px] h-auto md:h-[380px] lg:w-[520px] lg:h-[380px] rounded-none overflow-hidden shadow-lg flex-shrink-0 aspect-square md:aspect-auto">
              <Image
                src="/branding/studiocafe/about_cafe.jpg"
                alt="Studio Cafe Exterior Front View"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 520px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

