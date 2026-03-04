"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const ACCENT_COLOR = "rgba(80, 167, 220, 1)";
const CARD_BG = "rgba(0, 43, 70, 1)";

const testimonials = [
    {
        id: 1,
        quote:
            "It's a no brainer to work with someone so talented, dedicated and professional.\n\nRight from project planning to budget and delivering on time, @Pon Siva has always been on top of it! His understanding of what style the clients like and his delivery on that is 100%. So far we have worked with him for more than 10+ projects and will definitely work with him for more!",
        author: "Sonakshi Senthil",
        role: "YourCue, Co-founder",
        mention: "@Pon Siva",
    },
    {
        id: 2,
        quote:
            "Working with @Pon Siva has been an incredible experience. The attention to detail and creative vision brought to every project is unmatched. Highly recommended for anyone looking for top-tier design and development work that truly delivers results.",
        author: "Aravind Kumar",
        role: "Nexus Ventures, CEO",
        mention: "@Pon Siva",
    },
    {
        id: 3,
        quote:
            "I've worked with many agencies but none have matched the quality and professionalism that @Pon Siva brings. From ideation to final delivery, every step was handled with care and precision. A true partner in every sense.",
        author: "Priya Ramesh",
        role: "CloudStack, Product Lead",
        mention: "@Pon Siva",
    },
    {
        id: 4,
        quote:
            "Exceptional talent and work ethic. @Pon Siva delivered our project on time and on budget, exceeding every expectation we had. The final product has received outstanding feedback from all our stakeholders.",
        author: "Vikram Nair",
        role: "DigitalFirst, CMO",
        mention: "@Pon Siva",
    },
];

function renderQuoteText(
    text: string,
    mention: string,
    accentColor: string
): React.ReactNode[] {
    const paragraphs = text.split("\n\n");
    return paragraphs.map((para, pIdx) => {
        if (!para) return null;
        const parts = para.split(mention);
        return (
            <p
                key={pIdx}
                className="text-base leading-relaxed text-white/90 mb-4 last:mb-0 text-justify"
            >
                {parts.map((part, i) => (
                    <span key={i}>
                        {part}
                        {i < parts.length - 1 && (
                            <span style={{ color: accentColor }} className="font-medium">
                                {mention}
                            </span>
                        )}
                    </span>
                ))}
            </p>
        );
    });
}

function ProfileIcon() {
    return (
        <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "rgba(255,255,255,0.18)" }}
        >
            <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="12" cy="8" r="4" fill="rgba(255,255,255,0.7)" />
                <path
                    d="M4 20c0-4 3.582-7 8-7s8 3 8 7"
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                />
            </svg>
        </div>
    );
}

function TestimonialCard({
    testimonial,
    index,
}: {
    testimonial: (typeof testimonials)[0];
    index: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
            className="flex-shrink-0 w-[85vw] sm:w-[360px] md:w-[420px] rounded-2xl p-5 sm:p-7 flex flex-col gap-4 cursor-default"
            style={{ background: CARD_BG }}
        >
            {/* Quote icon */}
            <Image
                src="/assets/testim.svg"
                alt="quote"
                width={40}
                height={38}
                className="select-none"
            />

            {/* Body text */}
            <div className="flex-1">
                {renderQuoteText(testimonial.quote, testimonial.mention, ACCENT_COLOR)}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 ">
                <ProfileIcon />
                <div>
                    <p className="font-semibold text-sm" style={{ color: ACCENT_COLOR }}>
                        {testimonial.author}
                    </p>
                    <p
                        className="text-xs"
                        style={{ color: ACCENT_COLOR, opacity: 0.8 }}
                    >
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

function NavButton({
    direction,
    onClick,
}: {
    direction: "left" | "right";
    onClick: () => void;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="w-11 h-11 flex items-center justify-center rounded-sm focus:outline-none"
            style={{
                background: hovered ? "#e02020" : "rgba(41, 118, 167, 1)",
                transition: "background-color 0.2s ease",
                border: "1px solid rgba(255,255,255,0.15)",
            }}
            aria-label={direction === "left" ? "Previous testimonial" : "Next testimonial"}
        >
            <Image
                src="/assets/arrow.svg"
                alt=""
                width={19}
                height={13}
                className={direction === "left" ? "rotate-180" : ""}
            />
        </button>
    );
}

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    const CARD_W = 420;
    const GAP = 24;

    const scrollTo = (index: number) => {
        if (!trackRef.current) return;
        const clamped = Math.max(0, Math.min(index, testimonials.length - 1));
        setCurrentIndex(clamped);
        trackRef.current.scrollTo({
            left: clamped * (CARD_W + GAP),
            behavior: "smooth",
        });
    };

    return (
        <section className="relative w-full  overflow-hidden py-20 px-6 lg:px-24">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                {/* ── LEFT: Sticky header + nav ── */}
                <div className="flex-shrink-0 lg:w-[260px] lg:sticky mb-24 lg:top-24 lg:self-start flex flex-col gap-2">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold text-white  uppercase "
                        >
                            TESTIMONIALS
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl lg:text-5xl font-bold leading-tight text-white"
                        >
                            What our happy clients say about us
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex gap-3"
                    >
                        <NavButton direction="left" onClick={() => scrollTo(currentIndex - 1)} />
                        <NavButton direction="right" onClick={() => scrollTo(currentIndex + 1)} />
                    </motion.div>
                </div>

                {/* ── RIGHT: Scrollable card track ── */}
                <div className="flex-1 overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={t.id} testimonial={t} index={i} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

