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

  if (!filteredBlogs.length) {
    return (
      <div className="max-w-[460px] mx-auto py-20 text-center text-gray-400">
        <p className="text-lg font-bold">No results found</p>
        <p className="mt-2">
          It seems we can&apos;t find any results based on your search. Try
          other keywords and we sure you will succeed!
        </p>
      </div>
    );
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </section>
  );
};
