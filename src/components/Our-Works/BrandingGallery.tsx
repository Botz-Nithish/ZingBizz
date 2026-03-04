"use client";

import { motion, useInView, type Easing } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type BrandingGalleryProps = {
  images: GalleryImage[];
};

/** Alternate slide-in: even images from the left, odd from the right */
function getVariants(index: number) {
  const fromX = index % 2 === 0 ? -80 : 80;
  return {
    hidden: { opacity: 0, x: fromX },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };
}

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={getVariants(index)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="relative w-full overflow-hidden shadow-lg"
      style={{ aspectRatio: "16/9" }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </motion.div>
  );
}

export default function BrandingGallery({ images }: BrandingGalleryProps) {
  return (
    <section className="relative w-full py-16">
      <div className="w-full md:w-[85%] lg:w-[80%] mx-auto flex flex-col gap-6 md:gap-8 px-4 md:px-0">
        {images.map((image, index) => (
          <GalleryItem key={image.src} image={image} index={index} />
        ))}
      </div>
    </section>
  );
}

