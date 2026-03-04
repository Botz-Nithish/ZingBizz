"use client";

import FolderGridItem, {
  folderContainerVariants,
} from "@/components/shared/FolderGridItem";
import SectionHeading from "@/components/shared/SectionHeading";
import { motion } from "framer-motion";

type Work = {
  title: string;
  href?: string;
};

type SeeOtherWorksProps = {
  works: Work[];
};

export default function SeeOtherWorks({ works }: SeeOtherWorksProps) {
  return (
    <section
      className="relative w-full py-24 px-6 lg:px-24"
      style={{ background: "rgba(2, 29, 45, 1)" }}
    >
      <SectionHeading title="See Other Works" className="mb-16" />

      <motion.div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        variants={folderContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
      >
        {works.map((work) => (
          <FolderGridItem
            key={work.title}
            title={work.title}
            href={work.href ?? "#"}
          />
        ))}
      </motion.div>
    </section>
  );
}

