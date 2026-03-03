"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-300",
        "rounded-full border border-white/5",
        isScrolled
          ? "bg-[#000E17]/50 backdrop-blur-md shadow-lg"
          : "bg-[#000E17]/20 backdrop-blur-sm"
      )}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center ml-6 gap-2 relative">
          <Image
            src="/assets/logo.svg"
            alt="ZingBizz Logo"
            width={48}
            height={48}
            className="w-8 h-8"
          />
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Our Works", "About Us", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-white relative group text-sm font-medium transition-colors"
            >
              {item}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right: CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 bg-black hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-colors"
        >
          Let's Talk
          <Image
            src="/assets/upright-vector.svg"
            alt="Arrow"
            width={12}
            height={12}
            className="w-3 h-3"
          />
        </motion.button>
      </nav>
    </motion.header>
  );
}
