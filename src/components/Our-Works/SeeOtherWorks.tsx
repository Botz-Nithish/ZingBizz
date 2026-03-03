"use client";

import { Easing, motion } from "framer-motion";
import Image from "next/image";

type Work = {
  title: string;
  href?: string;
};

type SeeOtherWorksProps = {
  works: Work[];
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as Easing },
  },
};

export default function SeeOtherWorks({ works }: SeeOtherWorksProps) {
  return (
    <section
      className="relative w-full py-24 px-6 lg:px-24"
      style={{ background: "rgba(2, 29, 45, 1)" }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-16"
      >
        <h2 className="text-white text-4xl md:text-5xl font-semibold">
          See Other Works
        </h2>
      </motion.div>

      {/* Works Grid: 2-col on mobile, 4-col on large screens */}
      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {works.map((work) => (
          <motion.a
            key={work.title}
            href={work.href ?? "#"}
            variants={itemVariants}
            whileHover="hover"
            className="group flex flex-col items-center justify-center gap-5 p-8 cursor-pointer rounded-2xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {/* Folder Icon */}
            <motion.div
              variants={{
                hover: { scale: 1.08 },
              }}
              transition={{ duration: 0.25 }}
              className="relative w-20 h-20 md:w-24 md:h-24"
            >
              {/* Closed folder */}
              <motion.div
                className="absolute inset-0"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hover: { opacity: 0, y: -6 },
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Image
                  src="/assets/folder.svg"
                  alt={work.title}
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Unfolded folder */}
              <motion.div
                className="absolute inset-0"
                variants={{
                  visible: { opacity: 0, y: 6 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                <Image
                  src="/assets/unfold.svg"
                  alt={work.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.p
              variants={{ hover: { y: -3 } }}
              transition={{ duration: 0.25 }}
              className="text-white text-center text-lg md:text-xl font-medium"
            >
              {work.title}
            </motion.p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
