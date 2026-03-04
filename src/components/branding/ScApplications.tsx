"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScApplications() {
  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full bg-white relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[80px] py-12 lg:py-24">
        {/* Section Heading */}
        <div className="mb-8 lg:mb-16 text-center">
          <h2
            className="font-semibold text-[#000000] uppercase tracking-[0.03em] text-base lg:text-[18px]"
            style={{ fontFamily: "Urbanist" }}
          >
            APPLICATIONS
          </h2>
        </div>

        {/* Image Grid */}
        <div className="flex flex-col gap-8 lg:gap-16">
          {/* Row 1 */}
          <motion.div
            className="w-full aspect-video md:aspect-[128/72] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={imageVariants}
          >
            <Image
              src="/branding/studiocafe/cofeecup2.jpg"
              alt="Studio Cafe Cups"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1280px"
            />
          </motion.div>

          {/* Row 2 */}
          <motion.div
            className="w-full aspect-video md:aspect-[128/72] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={imageVariants}
          >
            <Image
              src="/branding/studiocafe/paperBag.jpg"
              alt="Studio Cafe Paper Bag"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1280px"
            />
          </motion.div>

          {/* Row 3 - Split Columns */}
          <div className="flex flex-col md:flex-row ">
            <motion.div
              className="w-full md:w-1/2 aspect-square relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={imageVariants}
            >
              <Image
                src="/branding/studiocafe/iced1.jpg"
                alt="Iced Coffee Poster 1"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 620px"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 aspect-square relative overflow-hidden group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }}
              variants={imageVariants}
            >
              <Image
                src="/branding/studiocafe/iced2.jpg"
                alt="Iced Coffee Poster 2"
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 620px"
              />
            </motion.div>
          </div>

          {/* Row 4 */}
          <motion.div
            className="w-full aspect-video md:aspect-[128/72] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={imageVariants}
          >
            <Image
              src="/branding/studiocafe/menu.jpg"
              alt="Studio Cafe Menu Mockup"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1280px"
            />
          </motion.div>

          {/* Row 5 */}
          <motion.div
            className="w-full aspect-video md:aspect-[128/72] relative overflow-hidden group"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={imageVariants}
          >
            <Image
              src="/branding/studiocafe/menu2.jpg"
              alt="Studio Cafe Brand Guidelines"
              fill
              className="object-cover transition-transform duration-500 hover:scale-[1.02]"
              sizes="(max-width: 1440px) 100vw, 1280px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

