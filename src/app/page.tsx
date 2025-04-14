import { Button } from "@/shared/ui";
import { Footer, AppHeader } from "@/widgets/layout";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AppHeader />
      <main className="flex-1">
        <h1 className="text-primary-main text-4xl font-bold">Plant In</h1>
        <Button>Get Started</Button>
      </main>
      <Footer />
    </div>
  );
}
