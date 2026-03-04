"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScApproach() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const listItems = [
    "Premium yet warm",
    "Contemporary yet timeless",
    "Symbolic yet subtle",
  ];

  return (
    <section className="w-full relative bg-[#EAE5D7]">
      {/* Banner Area */}
      <div className="w-full bg-[#373737] py-12 lg:h-[180px] lg:py-0 flex flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="flex flex-col gap-2"
        >
          <motion.span
            variants={textVariants}
            className="font-semibold text-white/80 uppercase tracking-widest text-sm lg:text-[18px]"
            style={{ fontFamily: "Urbanist" }}
          >
            APPROACH
          </motion.span>
          <motion.h2
            variants={textVariants}
            className="font-semibold text-white text-2xl md:text-3xl lg:text-[42px] leading-tight"
            style={{ fontFamily: "Urbanist" }}
          >
            Not just a café, a curated environment
          </motion.h2>
        </motion.div>
      </div>

      {/* Content Area */}
      <div className="w-full bg-[#EAE5D7] pt-12 pb-0 lg:pt-[60px] px-6 md:px-12 lg:px-[80px]">
        {/* Text Section */}
        <div className="flex flex-col lg:flex-row justify-between mb-12 lg:mb-24 gap-10 lg:gap-0 max-w-[1280px] mx-auto">
          <motion.div
            className="w-full lg:w-[374px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={textVariants}
          >
            <p
              className="font-semibold text-[#3B4B43] text-xl md:text-2xl lg:text-[28px] leading-snug lg:leading-[40.6px]"
              style={{ fontFamily: "Urbanist" }}
            >
              The challenge was to create a mark that felt...
            </p>
          </motion.div>

          <motion.div
            className="w-full lg:max-w-md flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {listItems.map((item, index) => (
              <motion.div
                key={index}
                variants={textVariants}
                className="flex items-start"
              >
                <div className="w-3 h-3 lg:w-[14px] lg:h-[14px] bg-[#3B4B43] inline-block mr-4 flex-shrink-0 mt-2" />
                <p
                  className="font-semibold text-[#3B4B43] text-xl md:text-2xl lg:text-[28px] leading-snug lg:leading-[40.6px]"
                  style={{ fontFamily: "Urbanist" }}
                >
                  {item}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Combined Side-by-Side Images */}
        <motion.div
          className="flex flex-col md:flex-row w-full max-w-[1280px] mx-auto mb-10"
          initial={{ opacity: 0, scaleY: 0.95 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <div className="w-full md:w-1/2 aspect-[64/72] relative">
            <Image
              src="/branding/studiocafe/approach1.jpg"
              alt="Sketching cafe logo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 640px"
            />
          </div>
          <div className="w-full md:w-1/2 aspect-[64/72] relative mt-4 md:mt-0">
            <Image
              src="/branding/studiocafe/approach2.jpg"
              alt="Finalizing cafe logos"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 640px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

