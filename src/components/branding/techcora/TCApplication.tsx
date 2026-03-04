"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function TCApplication() {
    const imgVariants = {
        hidden: { opacity: 0, scaleY: 0.95 },
        visible: {
            opacity: 1,
            scaleY: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section className="w-full bg-white flex flex-col px-[80px] pb-[80px] gap-[40px]">
            {/* Text Header */}
            <div className="flex flex-col gap-[16px] max-w-[800px]">
                <h3
                    className="uppercase leading-[100%] tracking-[0%]"
                    style={{
                        fontFamily: "Urbanist",
                        fontSize: 18,
                        fontWeight: 600,
                        color: "#292929",
                    }}
                >
                    A SYSTEM BUILT FROM CORE:
                </h3>

                <p
                    className="leading-[150%] tracking-[0%]"
                    style={{
                        fontFamily: "Urbanist",
                        fontSize: 16,
                        fontWeight: 400,
                        color: "#292929",
                    }}
                >
                    The logo would have a variety of applications in the future and should be working in various types of displays from digital to laser engraving. To ensure proper perception the logo is created in different formats without changing the essence of Techcora.
                </p>
            </div>

            {/* Applications Grid */}
            <div className="flex flex-col gap-[30px] w-full">
                {/* Row 1: App Icon */}
                <motion.div
                    className="relative w-full h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/techcora/appIcon.jpg"
                        alt="Techcora App Icon"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 2: Stationary & Door Sign */}
                <motion.div
                    className="flex flex-col md:flex-row gap-[30px] w-full h-auto md:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <div className="relative flex-1 w-full h-[400px] md:h-full">
                        <Image
                            src="/branding/techcora/stationary.jpg"
                            alt="Techcora Stationary"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="relative flex-1 w-full h-[400px] md:h-full">
                        <Image
                            src="/branding/techcora/doorSign.jpg"
                            alt="Techcora Door Sign"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                {/* Row 3: F1 Car */}
                <motion.div
                    className="relative w-full h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/techcora/f1Apex.jpg"
                        alt="Techcora F1 Car"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>

                {/* Row 4: Poster & Spaceship */}
                <motion.div
                    className="flex flex-col md:flex-row gap-[30px] w-full h-auto md:h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <div className="relative flex-1 w-full h-[400px] md:h-full">
                        <Image
                            src="/branding/techcora/poster.jpg"
                            alt="Techcora Poster"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="relative flex-1 w-full h-[400px] md:h-full">
                        <Image
                            src="/branding/techcora/spaceship.jpg"
                            alt="Techcora Spaceship"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

                {/* Row 5: Brand Guidelines */}
                <motion.div
                    className="relative w-full h-[600px]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={imgVariants}
                >
                    <Image
                        src="/branding/techcora/brandGuidelines.jpg"
                        alt="Techcora Brand Guidelines"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </motion.div>
            </div>
        </section>
    );
}
