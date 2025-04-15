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
  imageSrc,
  orientation = "vertical",
  size = "medium",
}) => {
  const formattedDate = format(createdAt, "MMM d");
  const formattedReadDuration = `${readDurationMinutes} min read`;

  return (
    <article
      className={cn(
        "group cursor-pointer transition-all duration-300 overflow-hidden",
        orientation === "horizontal"
          ? "grid grid-cols-1 md:grid-cols-2 gap-8"
          : "gap-4",
      )}
    >
      <div className="relative w-full aspect-[1.43] rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-grey-400">
          {formattedDate} · {formattedReadDuration}
        </p>
        <h3
          className={cn(
            "font-bold",
            size === "large" ? "text-lg lg:text-2xl" : "text-lg",
          )}
        >
          {title}
        </h3>
        <p
          title={content}
          className={cn(
            "text-grey-800 text-ellipsis overflow-hidden",
            orientation === "horizontal" && "line-clamp-5",
            size === "large" && orientation === "vertical" && "line-clamp-2",
            size === "medium" && orientation === "vertical" && "line-clamp-3",
          )}
        >
          {content}
        </p>
      </div>
    </article>
  );
};
