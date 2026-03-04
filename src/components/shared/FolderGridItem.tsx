"use client";

import { Easing, motion } from "framer-motion";
import Image from "next/image";

export type FolderGridItemProps = {
    title: string;
    href?: string;
};

export const folderContainerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

export const folderItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
};

export default function FolderGridItem({ title, href = "#" }: FolderGridItemProps) {
    return (
        <motion.a
            href={href}
            variants={folderItemVariants}
            whileHover="hover"
            className="group flex flex-col items-center justify-center gap-5 p-8 cursor-pointer rounded-2xl transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
        >
            {/* Folder Icon with open/close animation */}
            <motion.div
                variants={{ hover: { scale: 1.08 } }}
                transition={{ duration: 0.25 }}
                className="relative w-20 h-20 md:w-24 md:h-24"
            >
                {/* Closed folder */}
                <motion.div
                    className="absolute inset-0"
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hover: { opacity: 0, y: -6 },
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/folder.svg"
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </motion.div>

                {/* Unfolded folder */}
                <motion.div
                    className="absolute inset-0"
                    variants={{
                        visible: { opacity: 0, y: 6 },
                        hover: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                >
                    <Image
                        src="/assets/unfold.svg"
                        alt={title}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </motion.div>

            {/* Title */}
            <motion.p
                variants={{ hover: { y: -3 } }}
                transition={{ duration: 0.25 }}
                className="text-white text-center text-lg md:text-xl font-medium"
            >
                {title}
            </motion.p>
        </motion.a>
    );
}

