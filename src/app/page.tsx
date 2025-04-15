import { PageLayout, HeroBanner } from "@/widgets/common";

export default function Home() {
  return (
    <PageLayout
      paths={[
        { label: "Home", href: "/" },
        { label: "Blog" },
      ]}
    >
      <HeroBanner />
    </PageLayout>
  );
}
