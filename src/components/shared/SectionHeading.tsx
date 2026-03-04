"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
    titleClassName?: string;
    subtitleClassName?: string;
};

export default function SectionHeading({
    title,
    subtitle,
    className,
    align = "left",
    titleClassName,
    subtitleClassName,
}: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
                align === "center" ? "text-center" : "text-left",
                className
            )}
        >
            <h2
                className={cn(
                    "text-white text-4xl md:text-5xl font-semibold",
                    titleClassName
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "mt-3 text-base md:text-lg text-white/70",
                        subtitleClassName
                    )}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}

