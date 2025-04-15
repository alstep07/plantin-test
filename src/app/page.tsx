import { SearchParams } from "@/shared/types";
import { getParamsSearchValue } from "@/lib/utils";
import { PageLayout, HeroBanner, CTABanner } from "@/widgets/common";
import { BlogListSection, FeaturedBlogSection } from "@/widgets/blog";
import { FilteredBlogsList } from "@/features/blog";
import { blogs, BlogCategory, BlogListLoader } from "@/entities/blog";

export const runtime = "edge";
export const dynamic = "force-dynamic";
export const revalidate = 3600;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const searchValue = await getParamsSearchValue(searchParams);

  const featuredBlog = blogs.find((blog) =>
    blog.categories.includes(BlogCategory.FEATURED),
  );

  const topOfTheDayBlogs = blogs.filter((blog) =>
    blog.categories.includes(BlogCategory.TOP_OF_THE_DAY),
  );

  const interestingBlogs = blogs.filter((blog) =>
    blog.categories.includes(BlogCategory.INTERESTING),
  );

  const otherBlogs = blogs.filter((blog) => !blog.categories.length);

  return (
    <PageLayout paths={[{ label: "Home", href: "/" }, { label: "Blog" }]}>
      <HeroBanner />
      <div className="pt-4.5 md:pt-12">
        {searchValue ? (
          <FilteredBlogsList searchValue={searchValue} />
        ) : (
          <>
            <div className="flex flex-col gap-6 md:gap-14">
              {!!featuredBlog && (
                <FeaturedBlogSection label="New" blog={featuredBlog} />
              )}
              {!!topOfTheDayBlogs.length && (
                <BlogListSection
                  title="Top of the day"
                  blogs={topOfTheDayBlogs}
                  blogSize="large"
                  withSeparator
                />
              )}
              {!!interestingBlogs.length && (
                <BlogListSection
                  title="Interesting"
                  blogs={interestingBlogs}
                  blogSize="medium"
                  withSeparator
                />
              )}
              <CTABanner />
              {!!otherBlogs.length && (
                <BlogListSection blogs={otherBlogs} blogSize="medium" />
              )}
              <div className="hidden lg:block">
                <BlogListLoader count={3} />
              </div>
              <div className="hidden md:block lg:hidden">
                <BlogListLoader count={2} />
              </div>
              <div className="block md:hidden">
                <BlogListLoader count={1} />
              </div>
            </div>
          </>
        )}
      </div>
    </PageLayout>
  );
}
