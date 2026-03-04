"use client";

import ArticleGrid, { Article } from "@/components/shared/ArticleGrid";

type RelatedBlogsProps = {
  blogs: Article[];
};

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  return (
    <ArticleGrid
      title="Related Blogs"
      articles={blogs}
      ctaLabel="See All Articles"
    />
  );
}

