import { Skeleton } from "@/shared/ui";

export const BlogSkeleton: React.FC = () => {
  return (
    <div>
      <Skeleton className="h-[240px]" />
      <Skeleton className="mt-[22px] h-3 max-w-[150px]" rounded="xs" />
      <Skeleton className="mt-5 h-6 max-w-[223px]" rounded="xs" />
      <Skeleton className="mt-2 h-[78px]" rounded="xs" />
    </div>
  );
};

interface BlogListLoaderProps {
  count?: number;
}

export const BlogListLoader: React.FC<BlogListLoaderProps> = ({
  count = 3,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <BlogSkeleton key={index} />
      ))}
    </div>
  );
};
