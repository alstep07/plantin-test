import { SearchParams } from "@/shared/types";
import { getParamsSearchValue } from "@/lib/utils";
import { PageLayout, HeroBanner } from "@/widgets/common";
import { FeaturedBlogSection, FilteredBlogsList } from "@/widgets/blog";
import { blogs } from "@/entities/blog";
import { BlogCategory } from "@/entities/blog/model/schema";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchValue = await getParamsSearchValue(searchParams);

  const featuredBlog = blogs.find((blog) =>
    blog.categories.includes(BlogCategory.FEATURED),
  );

  return (
    <PageLayout paths={[{ label: "Home", href: "/" }, { label: "Blog" }]}>
      <HeroBanner />
      <div className="pt-4.5 md:pt-12">
        {!!searchValue && <FilteredBlogsList searchValue={searchValue} />}
        {!searchValue && (
          <>
            <div className="">
              {featuredBlog && (
                <FeaturedBlogSection label="New" blog={featuredBlog} />
              )}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
}
