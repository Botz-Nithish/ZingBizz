import Navbar from "@/components/global/Navbar";
import Hero from "@/components/Home/Hero";
import QuickIntro from "@/components/Home/QuickIntro";
import CoreServices from "@/components/Home/CoreServices";
import Experience from "@/components/Home/Experience";
import TestimonialCarousel from "@/components/Home/TestimonialCarousel";
import AreWeGoodFit from "@/components/Home/AreWeGoodFit";
import Footer from "@/components/Global/Footer";
import Tetris from "@/components/Home/Tetris";

export default function HomePage() {
    return (
        <main className="min-h-screen bg-brand-bg text-white font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <Hero />
            <QuickIntro />
            <CoreServices />
            <Experience />
            <TestimonialCarousel />
            <AreWeGoodFit />
            <Tetris/>
            <Footer />
        </main>
    );
}
