import { Blog } from "../model";

export const isBlogMatchingSearch = (
  blog: Blog,
  searchValue: string,
): boolean => {
  const normalizedSearch = searchValue.toLowerCase();
  return (
    blog.title.toLowerCase().includes(normalizedSearch) ||
    blog.content.toLowerCase().includes(normalizedSearch)
  );
};
