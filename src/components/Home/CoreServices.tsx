"use client";

import FolderGridItem, {
  folderContainerVariants,
} from "@/components/shared/FolderGridItem";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";

const services = [
  { title: "Logo Design" },
  { title: "Branding" },
  { title: "Package Design" },
  { title: "Website Development" },
  { title: "App Development" },
  { title: "Digital Marketing" },
];

export default function CoreServices() {
  return (
    <section
      className="relative w-full py-24 px-6 lg:px-24"
      style={{ background: "rgba(2, 29, 45, 1)" }}
    >
      <SectionHeading title="Our Core Services" className="mb-16" />

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
        variants={folderContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
      >
        {services.map((service) => (
          <FolderGridItem key={service.title} title={service.title} href="#" />
        ))}
      </motion.div>
    </section>
  );
}

