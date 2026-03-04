import Navbar from "@/components/Global/Navbar";

export default function StudioCafePage() {
    return (
        <main className="min-h-screen bg-[brand-bg] text-white font-sans selection:bg-brand-red selection:text-white">
            <Navbar />
            <section className="flex flex-col items-center justify-center min-h-screen px-6 lg:px-24">
                <h1 className="text-5xl md:text-7xl font-semibold text-center">
                    Studio Cafe
                </h1>
                <p className="mt-4 text-white/60 text-lg text-center max-w-xl">
                    Coming soon — this page is under construction.
                </p>
            </section>
        </main>
    );
}

