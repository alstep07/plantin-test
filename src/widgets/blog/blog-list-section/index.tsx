import { Blog, BlogCard } from "@/entities/blog";
import { cn } from "@/lib/utils";
import { Separator } from "@/shared/ui";

interface BlogListSectionProps {
  title?: string;
  blogs: Blog[];
  blogSize: "medium" | "large";
  withSeparator?: boolean;
}

export const BlogListSection: React.FC<BlogListSectionProps> = ({
  title,
  blogs,
  blogSize,
  withSeparator = false,
}) => {
  const gridClassName = cn(
    "grid grid-cols-1 gap-8 md:grid-cols-2",
    blogSize === "medium" && "lg:grid-cols-3",
  );

  return (
    <section className="flex flex-col gap-4">
      {withSeparator && <Separator className="mb-2 md:mb-4 bg-grey-300" />}
      {title && <h2 className="text-xs font-bold text-grey-700 uppercase">{title}</h2>}
      <div className={gridClassName}> 
        {blogs.map((blog) => (
          <BlogCard key={blog.id} {...blog} size={blogSize} />
        ))}
      </div>
    </section>
  );
};
