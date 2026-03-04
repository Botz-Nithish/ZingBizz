"use client";

import ArticleGrid, { Article } from "@/components/shared/ArticleGrid";

const articles: Article[] = [
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

export default function ExploreArticles() {
  return (
    <ArticleGrid
      title="Explore Our Articles"
      subtitle="Design thinking, conversion wins, and growth tactics. We're sharing everything we've learned building brands that actually grow."
      articles={articles}
      ctaLabel="See All Articles"
    />
  );
}

