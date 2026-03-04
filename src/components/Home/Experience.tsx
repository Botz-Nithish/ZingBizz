"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

// Animated counter hook
function useCountUp(target: number, inView: boolean) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `> ${Math.floor(v)}`);

  useEffect(() => {
    if (inView) spring.set(target);
  }, [inView, target, spring]);

  return display;
}

const metrics = [
  { icon: "/assets/heart.svg", label: "Experience", value: 8, suffix: "Y" },
  { icon: "/assets/project-complete.svg", label: "Projects Completed", value: 600, suffix: "" },
  { icon: "/assets/smiley.svg", label: "Happy Clients", value: 100, suffix: "" },
];

function MetricCard({ icon, label, value, suffix, inView }: {
  icon: string; label: string; value: number; suffix: string; inView: boolean;
}) {
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  const display = useTransform(spring, (v) => `> ${Math.floor(v)}${suffix}`);

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, value, spring, suffix]);

  return (
    <motion.div
      className="flex flex-col gap-2"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
      }}
    >
      {/* Icon + Label row */}
      <div className="flex items-center gap-3">
        {/* Icon circle background */}
        <div className="w-14 h-14 bg-white/20 rounded-full border border-white/30 flex items-center justify-center shrink-0">
          <div className="relative w-8 h-8">
            <Image src={icon} alt={label} fill className="object-contain" />
          </div>
        </div>
        <p className="text-white text-xl ">{label}</p>
      </div>

      {/* Large count number */}
      <motion.p className="text-white text-3xl sm:text-4xl md:text-5xl ml-0 sm:ml-14 leading-none">
        {display}
      </motion.p>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ background: "rgba(2, 29, 45, 1)" }}
    >
      {/* Metrics Row — above the arch */}
      <div className="relative z-10 px-6 lg:px-24 pt-24 pb-16">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-10 lg:gap-16 max-w-5xl mx-auto"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} inView={inView} />
          ))}
        </motion.div>
      </div>

      {/* Arch shape with content overlaid inside */}
      <div className="relative w-full">
        {/* Background: Ellipse + radial gradient fill */}
        <div className="relative w-full">
          <Image
            src="/assets/ellipse.svg"
            alt="Arch"
            width={1440}
            height={200}
            className="w-full"
          />
        </div>

        {/* Content absolutely positioned on top, centered inside the arch area */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-32 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.3 }}
          >
            <h2 className="text-white text-5xl md:text-7xl font-semibold leading-tight mb-2">
              We are here
            </h2>
            <h2 className="text-white text-5xl md:text-7xl font-semibold leading-tight mb-6">
              to change the game
            </h2>
            <p className="text-white/60 text-lg md:text-xl mb-10">
              Reach us to discover how we can help you
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-black hover:bg-white hover:text-black border border-white/ text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300"
            >
              Let's Talk
              <svg className="hover:stroke-black" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

