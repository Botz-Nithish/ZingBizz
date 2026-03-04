import Navbar from "@/components/Global/Navbar";
import BrandingGallery, {
  GalleryImage,
} from "@/components/Our-Works/BrandingGallery";
import OurWorksHeader from "@/components/Our-Works/OurWorksHeader";
import SeeOtherWorks from "@/components/Our-Works/SeeOtherWorks";
import RelatedBlogs from "@/components/Our-Works/RelatedBlogs";
import Footer from "@/components/Global/Footer";

const images: GalleryImage[] = [
  { src: "/our-works/branding/11Academy.png", alt: "11 Academy" },
  { src: "/our-works/branding/HarshitaChordia.png", alt: "Harshita Chordia" },
  { src: "/our-works/branding/MadrasTV.png", alt: "Madras TV" },
  { src: "/our-works/branding/Mithra.png", alt: "Mithra" },
  { src: "/our-works/branding/Pasiaaru.png", alt: "Pasiaaru" },
  { src: "/our-works/branding/PrabivacPumps.png", alt: "Prabivac Pumps" },
  { src: "/our-works/branding/StudioCafe.png", alt: "Studio Cafe" },
  { src: "/our-works/branding/SuseeEnterprise.png", alt: "Susee Enterprise" },
  { src: "/our-works/branding/Techcora.png", alt: "Techcora" },
  { src: "/our-works/branding/YourCue.png", alt: "YourCue" },
];
type Blogs = {
  id: string;
  category: string;
  date: string;
  title: string;
  imageSrc: string;
};

const blogs: Blogs[] = [
  {
    id: "digital-marketing",
    category: "Resources",
    date: "Nov 26, 2024",
    title: "What is Digital Marketing? A Comprehensive Guide",
    imageSrc: "/assets/Article-Image.png",
  },
  {
    id: "digital-marketing-2",
    category: "Resources",
    date: "Nov 26, 2024",
    title: "What is Digital Marketing? A Comprehensive Guide",
    imageSrc: "/assets/Article-Image.png",
  },
  {
    id: "digital-marketing-3",
    category: "Resources",
    date: "Nov 26, 2024",
    title: "What is Digital Marketing? A Comprehensive Guide",
    imageSrc: "/assets/Article-Image.png",
  },
  {
    id: "digital-marketing-4",
    category: "Resources",
    date: "Nov 26, 2024",
    title: "What is Digital Marketing? A Comprehensive Guide",
    imageSrc: "/assets/Article-Image.png",
  },
];

export default function BrandingPage() {
  return (
    <main className="min-h-screen bg-[rgba(237,246,251,1)] text-white font-sans selection:bg-brand-red selection:text-white">
      <Navbar />
      <OurWorksHeader title="Branding" />
      <BrandingGallery images={images} />
      <RelatedBlogs blogs={blogs} />
      <SeeOtherWorks
        works={[
          { title: "Branding", href: "/our-works/branding" },
          { title: "Logo Design", href: "/our-works/logo" },
          { title: "Packaging", href: "/our-works/packaging" },
          { title: "Web Design", href: "/our-works/web" },
        ]}
      />
      <Footer />
    </main>
  );
}

