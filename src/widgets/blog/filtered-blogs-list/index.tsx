"use client";

import { useMemo } from "react";
import { isBlogMatchingSearch } from "@/features/blog";
import { BlogCard, blogs } from "@/entities/blog";

interface FilteredBlogsListProps {
  searchValue: string;
}

export const FilteredBlogsList: React.FC<FilteredBlogsListProps> = ({
  searchValue,
}) => {
  const filteredBlogs = useMemo(() => {
    if (!searchValue) {
      return blogs;
    }

    return blogs.filter((blog) => isBlogMatchingSearch(blog, searchValue));
  }, [searchValue]);

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
};
