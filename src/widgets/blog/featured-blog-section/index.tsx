import { Blog, BlogCard } from "@/entities/blog";
import { RibbonBadge } from "@/shared/ui";

interface FeaturedBlogSectionProps {
  label: string;
  blog: Blog;
}

export const FeaturedBlogSection: React.FC<FeaturedBlogSectionProps> = ({
  label,
  blog,
}) => {
  return (
    <section className="flex flex-col gap-4">
      <RibbonBadge label={label} />
      <BlogCard {...blog} orientation="horizontal" size="large" />
    </section>
  );
};
