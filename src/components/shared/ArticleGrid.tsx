"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type Article = {
    id: string;
    category: string;
    date: string;
    title: string;
    imageSrc: string;
};

type ArticleGridProps = {
    title: string;
    subtitle?: string;
    articles: Article[];
    ctaLabel?: string;
    ctaHref?: string;
};

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

function ArrowIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            className={className}
            width="32"
            height="32"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
        >
            <path
                d="M2.5 8H12.5M12.5 8L9.25 4.75M12.5 8L9.25 11.25"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArticleCard({ article }: { article: Article }) {
    return (
        <motion.article
            variants={item}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="overflow-hidden cursor-default"
        >
            <div className="relative w-full rounded-3xl text-[rgba(2,27,42,1)] aspect-[16/9]">
                <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1536px) 340px, (min-width: 1024px) 300px, 80vw"
                />
            </div>

            <div className="pl-2 py-6 md:py-7 text-left">
                <div className="flex items-center justify-start gap-3 mb-4">
                    <span className="inline-flex items-center rounded-full border border-[rgba(2,27,42,1)] px-3 py-1 text-xs font-medium">
                        {article.category}
                    </span>
                    <span className="text-xs">{article.date}</span>
                </div>

                <h3 className="text-lg md:text-xl leading-snug line-clamp-3">
                    {article.title}
                </h3>
            </div>
        </motion.article>
    );
}

export default function ArticleGrid({
    title,
    subtitle,
    articles,
    ctaLabel = "See All Articles",
    ctaHref = "#",
}: ArticleGridProps) {
    return (
        <section className="w-full bg-[#F8F9FA] py-24 px-6 lg:px-14 xl:px-16 text-[#373737]">
            <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-3 text-base md:text-xl font-bold">{subtitle}</p>
                        )}
                    </div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-80px" }}
                    className="mt-12"
                >
                    {/* Mobile: horizontal scroller. Desktop: grid */}
                    <div className="flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
                        {articles.map((a) => (
                            <div
                                key={a.id}
                                className="min-w-[78vw] sm:min-w-[420px] lg:min-w-0 snap-start"
                            >
                                <ArticleCard article={a} />
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
                    className="mt-12 flex justify-start"
                >
                    <motion.a
                        href={ctaHref}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center justify-center gap-3 bg-[#021D2D] text-white px-7 py-4 rounded-full font-semibold shadow-[0_10px_24px_rgba(2,29,45,0.22)] w-fit"
                    >
                        <span>{ctaLabel}</span>
                        <motion.span
                            variants={{ hover: { x: 4 } }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="inline-flex"
                        >
                            <ArrowIcon />
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}

