import { Footer, AppHeader } from "@/widgets/layout";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AppHeader />
      <main className="flex-1">
      </main>
      <Footer />
    </div>
  );
}
