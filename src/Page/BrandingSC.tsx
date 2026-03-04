import Navbar from "@/components/Global/Navbar";
import ScHero from "@/components/branding/ScHero";
import ScAbout from "@/components/branding/ScAbout";
import ScApproach from "@/components/branding/ScApproach";
import ScLogoSection from "@/components/branding/ScLogoSection";
import ScPaletteSection from "@/components/branding/ScPaletteSection";
import ScApplications from "@/components/branding/ScApplications";
import Footer from "@/components/Global/Footer";

export default function BrandingSCPage() {
  return (
    <main className="min-h-screen bg-[#EAE5D7] text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <ScHero />
      <ScAbout />
      <ScApproach />
      <ScLogoSection />
      <ScPaletteSection />
      <ScApplications />
      <Footer />
    </main>
  );
}

