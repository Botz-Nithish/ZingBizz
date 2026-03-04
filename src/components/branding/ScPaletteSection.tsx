"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ScPaletteSection() {
  return (
    <section className="w-full relative overflow-hidden bg-white">
      <div className="w-full">
        {/* Coffee Cup Image Full Width */}
        <motion.div
          className="relative w-full aspect-[21/9] min-h-[300px] lg:min-h-[500px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/branding/studiocafe/cofeecup.jpg"
            alt="Colour Palette Coffee Cups"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Overlapping Title */}
          <div className="absolute top-0 left-0 w-full pt-10 md:pt-16 lg:pt-[100px] flex justify-center pointer-events-none">
            <motion.p
              className="text-[#000000] uppercase text-center"
              style={{
                fontFamily: "Urbanist",
                fontWeight: 600,
                fontSize: "18px",
                lineHeight: "30px",
                letterSpacing: "0.03em",
              }}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Colour Palette
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

