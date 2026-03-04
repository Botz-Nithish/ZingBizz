"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DOT_SIZE = 51.61;
const DOTS_PER_ROW = 14;

function DotRow({ className = "" }: { className?: string }) {
    return (
        <div className={`flex justify-between w-full ${className}`}>
            {Array.from({ length: DOTS_PER_ROW }).map((_, i) => (
                <motion.div
                    key={i}
                    className="rounded-full flex-shrink-0"
                    style={{
                        width: DOT_SIZE,
                        height: DOT_SIZE,
                        backgroundColor: "#F85419",
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                />
            ))}
        </div>
    );
}

export default function TCApproach() {
    return (
        <section
            id="tc-approach"
            className="w-full bg-white overflow-hidden"
            style={{ fontFamily: "Urbanist" }}
        >
            {/* Top text section */}
            <div className="flex justify-between items-start px-[80px] pt-[60px] pb-[50px]">
                {/* Left — Title & Subtitle */}
                <div>
                    <h2
                        className="leading-[100%] tracking-[0%]"
                        style={{
                            fontSize: 42,
                            fontWeight: 600,
                            color: "#021B2A",
                        }}
                    >
                        Techcora
                    </h2>
                    <p
                        className="mt-[11px] leading-[40.6px] tracking-[0%]"
                        style={{
                            fontSize: 28,
                            fontWeight: 600,
                            color: "#021B2A",
                        }}
                    >
                        Branding
                    </p>
                </div>

                {/* Right — Description */}
                <p
                    className="leading-[26px] tracking-[2%] max-w-[738px]"
                    style={{
                        fontSize: 18,
                        fontWeight: 400,
                        color: "#001929",
                    }}
                >
                    Techcora is an ambitious company in India which is planning to build a
                    group of world-changing companies from India in Software, Robotics,
                    Rockets, and Energy. We helped them to craft an edgy brand identity
                    which translates their bold vision.
                </p>
            </div>

            {/* Dot grid section */}
            <div className="px-[80px] flex flex-col gap-[30px] pb-[30px]">
                {/* Row 1 */}
                <DotRow />

                {/* Row 2 */}
                <DotRow />

                {/* Rows 3–4 combined: 3 dots stacked on each side, text centered */}
                <div className="flex w-full">
                    {/* Left column: 2 rows of 3 dots each */}
                    <div className="flex flex-col justify-between flex-shrink-0">
                        {[0, 1].map((row) => (
                            <div key={`left-${row}`} className="flex gap-[35px]">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={`r${row + 3}l-${i}`}
                                        className="rounded-full"
                                        style={{
                                            width: DOT_SIZE,
                                            height: DOT_SIZE,
                                            backgroundColor: "#F85419",
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    {/* Center: APPROACH label + heading */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <span
                            className="uppercase text-center tracking-[3%]"
                            style={{
                                fontSize: 18,
                                fontWeight: 600,
                                lineHeight: "30px",
                                color: "#021B2A",
                            }}
                        >
                            APPROACH
                        </span>
                        <h3
                            className="text-center leading-[100%] tracking-[0%] mt-[8px]"
                            style={{
                                fontSize: 42,
                                fontWeight: 600,
                                color: "#021B2A",
                            }}
                        >
                            The inspiration of this identity
                            <br />
                            emerged from the team&rsquo;s deep dive
                            <br />
                            into the core of technology.
                        </h3>
                    </div>

                    {/* Right column: 2 rows of 3 dots each */}
                    <div className="flex flex-col justify-between flex-shrink-0">
                        {[0, 1].map((row) => (
                            <div key={`right-${row}`} className="flex gap-[35px]">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <motion.div
                                        key={`r${row + 3}r-${i}`}
                                        className="rounded-full"
                                        style={{
                                            width: DOT_SIZE,
                                            height: DOT_SIZE,
                                            backgroundColor: "#F85419",
                                        }}
                                        initial={{ scale: 0, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true, amount: 0.3 }}
                                        transition={{ duration: 0.4, delay: i * 0.03, ease: "easeOut" }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 5 */}
                <DotRow />
            </div>

            {/* Identity Communication Section — dark rectangle */}
            <div
                className="mx-[80px] mt-[60px] relative overflow-hidden flex"
                style={{
                    backgroundColor: "#0A0A0A",
                    height: 325, // 60px top + 265px image height = 325px total height
                }}
            >
                {/* Left text content */}
                <div className="relative z-10 flex flex-col px-[80px] py-[60px]">
                    <h3
                        className="leading-[100%] tracking-[0%]"
                        style={{
                            fontFamily: "Urbanist",
                            fontSize: 32,
                            fontWeight: 600,
                            color: "#F85419",
                            width: 472, // Prevent line break as per Figma
                        }}
                    >
                        The identity needed to communicate
                    </h3>

                    <ul className="mt-[30px] flex flex-col gap-[16px]">
                        {["Technical depth", "Structured thinking", "Scalability", "Future-readiness"].map((item) => (
                            <li key={item} className="flex items-center gap-[14px]">
                                <span
                                    className="rounded-full flex-shrink-0"
                                    style={{
                                        width: 16,
                                        height: 16,
                                        backgroundColor: "#F85419",
                                    }}
                                />
                                <span
                                    className="tracking-[2%]"
                                    style={{
                                        fontFamily: "Urbanist",
                                        fontSize: 16,
                                        fontWeight: 400,
                                        color: "#FFFFFF",
                                    }}
                                >
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right image — positioned exactly as per Figma mockup */}
                <div
                    className="absolute"
                    style={{
                        width: 732,
                        height: 265,
                        top: 60,
                        left: 518,
                    }}
                >
                    <Image
                        src="/branding/techcora/dotsWorld.png"
                        alt="Techcora dots world visualization"
                        fill
                        className="object-cover object-left-top"
                        sizes="732px"
                    />
                </div>
            </div>
        </section>
    );
}
