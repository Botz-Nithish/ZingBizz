"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  return (
    <motion.header
      suppressHydrationWarning
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl transition-all duration-300",
        "rounded-4xl border border-white/5",
        mounted && isScrolled
          ? "bg-[#000E17]/50 backdrop-blur-md shadow-lg"
          : "bg-[#000E17]/20 backdrop-blur-sm"
      )}
    >
      <nav className="flex items-center  justify-between px-6 py-4">
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

        {/* Center: Navigation Links — desktop only */}
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

        {/* Right: CTA Button + Hamburger */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-black hover:bg-white/20 border border-white/10 px-5 py-2.5 rounded-full text-white text-sm font-bold transition-colors"
          >
            Let&apos;s Talk
            <Image
              src="/assets/upright-vector.svg"
              alt="Arrow"
              width={12}
              height={12}
              className="w-3 h-3"
            />
          </motion.button>

          {/* Hamburger button — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — only rendered after mount to avoid SSR mismatch */}
      {mounted && menuOpen && (
        <div className="md:hidden px-6 py-4 flex flex-col gap-4 border-t border-white/10 rounded-b-2xl">
          {["Our Works", "About Us", "Blog"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-white text-sm font-medium py-2 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
}
