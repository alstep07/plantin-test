import { Blog } from "@/entities/blog";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import Image from "next/image";

export interface BlogCardProps extends Blog {
  orientation?: "horizontal" | "vertical";
  size?: "medium" | "large";
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  content,
  readDurationMinutes,
  createdAt,
  orientation = "vertical",
  size = "medium",
}) => {
  const formattedDate = format(createdAt, "MMM d");
  const formattedReadDuration = `${readDurationMinutes} min read`;

  return (
    <article
      className={cn(
        "group cursor-pointer transition-all duration-300 overflow-hidden",
        orientation === "horizontal" ? "grid grid-cols-2" : "",
        size === "large" ? "gap-8" : "gap-4",
      )}
    >
      <div>
        {/* <Image src={image} alt={title} width={100} height={100} /> */}
      </div>
      <div>
        <h3 className={cn("font-bold", size === "large" ? "text-xl" : "text-")}>
          {title}
        </h3>
        <p className="">{formattedDate}</p>
        <p className="">{formattedReadDuration}</p>
        <p className="">{content}</p>
      </div>
    </article>
  );
};
