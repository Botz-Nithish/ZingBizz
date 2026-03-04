"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Global/Navbar";
import Hero from "@/components/Home/Hero";
import QuickIntro from "@/components/Home/QuickIntro";
import CoreServices from "@/components/Home/CoreServices";
import Experience from "@/components/Home/Experience";
import AreWeGoodFit from "@/components/Home/AreWeGoodFit";
import Footer from "@/components/Global/Footer";
import LazySection from "@/components/shared/LazySection";

// Code-split: chunk is NOT fetched until LazySection triggers
const TestimonialCarousel = dynamic(
    () => import("@/components/Home/TestimonialCarousel"),
    { ssr: false }
);

// Code-split: chunk is NOT fetched until LazySection triggers
const Tetris = dynamic(() => import("@/components/Home/Tetris"), {
    ssr: false,
});

export default function HomePage() {
    return (
        <main className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <Hero />
            <QuickIntro />
            <CoreServices />
            <Experience />

            {/* Only mounts + fetches JS when user scrolls within 400px */}
            <LazySection fallbackClassName="min-h-[600px] bg-brand-bg">
                <TestimonialCarousel />
            </LazySection>

            <AreWeGoodFit />

            {/* Only mounts + fetches JS when user scrolls within 400px */}
            <LazySection fallbackClassName="min-h-screen bg-[#001929]">
                <Tetris />
            </LazySection>

            <Footer />
        </main>
    );
}

