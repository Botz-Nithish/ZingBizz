"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type OurWorksHeaderProps = {
  title: string;
};

export default function OurWorksHeader({ title }: OurWorksHeaderProps) {
  return (
    <section
      className="relative w-full min-h-[40vh] flex flex-col justify-end pb-12"
      style={{
        background:
          "radial-gradient(100% 100% at 50% 0%, #085C90 0%, #021D2D 61.06%, #00090F 100%)",
      }}
    >
      {/* Bottom: folder icon + title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="flex flex-row items-center gap-5 w-[80%] mx-auto"
      >
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src="/assets/folder.svg"
            alt={title}
            fill
            className="object-contain"
          />
        </div>

        <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}

