"use client";

import Image from "next/image";

export default function TCLogo() {
    return (
        <section className="w-full bg-white flex flex-col px-[80px] pt-0 pb-[80px] gap-[60px]">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="flex-1 max-w-[500px] flex flex-col gap-[24px]">
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
                        The Techcora mark is constructed on a circular grid system.
                    </p>

                    <p
                        className="leading-[150%] tracking-[0%]"
                        style={{
                            fontFamily: "Urbanist",
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#292929",
                        }}
                    >
                        Inspired by the core of the Earth, the circular form filled with gradient dots symbolizes depth, complexity, and precision, mirroring Techcora&apos;s mission to explore and master the intricate layers of modern tech.
                    </p>

                    <p
                        className="leading-[150%] tracking-[0%]"
                        style={{
                            fontFamily: "Urbanist",
                            fontSize: 16,
                            fontWeight: 400,
                            color: "#292929",
                        }}
                    >
                        At the center, the negative space forms the letter &ldquo;T&rdquo;, a bold and minimal statement of identity. The surrounding dot matrix suggests a tech-driven universe — data points, code nodes, and connectivity — all converging toward a central idea: Techcora is built on deep tech intelligence.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-end">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        <Image
                            src="/branding/techcora/techcoraLogo.jpg"
                            alt="Techcora Circular Grid System"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 500px"
                        />
                    </div>
                </div>
            </div>

            {/* Logo Grid Showcase */}
            <div className="flex flex-col gap-[16px] w-full">
                {/* Top Row: 2 Boxes */}
                <div className="flex flex-col md:flex-row gap-[16px] w-full h-auto md:h-[260px]">
                    {/* Black Box */}
                    <div
                        className="flex-[1.08] flex items-center justify-center rounded-[8px]"
                        style={{ backgroundColor: "#000000" }}
                    >
                        <div className="relative w-[300px] h-[100px]">
                            <Image
                                src="/branding/techcora/logo.svg"
                                alt="Techcora Logo 1"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Orange Box (now with logo3.svg) */}
                    <div
                        className="flex-1 flex flex-col items-center justify-center rounded-[8px]"
                        style={{ backgroundColor: "#F85419" }}
                    >
                        <div className="relative w-full h-full p-[20px]">
                            <Image
                                src="/branding/techcora/logo3.svg"
                                alt="Lead India to Supremacy Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Row: 3 Boxes */}
                <div className="flex flex-col md:flex-row gap-[16px] w-full h-auto md:h-[200px]">
                    {/* White Box */}
                    <div
                        className="flex-1 flex items-center justify-center rounded-[8px] box-border"
                        style={{ backgroundColor: "#FFFFFF", border: "1px solid #000000" }}
                    >
                        <div className="relative w-[200px] h-[60px]">
                            <Image
                                src="/branding/techcora/logo2.png"
                                alt="Techcora Logo 2"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* Gray Box */}
                    <div
                        className="flex-1 flex items-center justify-center rounded-[8px]"
                        style={{ backgroundColor: "#5D5D5D" }}
                    >
                        <div className="relative w-[200px] h-[60px]">
                            <Image
                                src="/branding/techcora/logo3.png"
                                alt="Techcora Logo 3"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    {/* White Box */}
                    <div
                        className="flex-1 flex items-center justify-center rounded-[8px] box-border"
                        style={{ backgroundColor: "#FFFFFF", border: "1px solid #000000" }}
                    >
                        <div className="relative w-[200px] h-[60px]">
                            <Image
                                src="/branding/techcora/logo4.png"
                                alt="Techcora Logo 4"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
