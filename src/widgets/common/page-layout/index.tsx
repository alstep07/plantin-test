import { Container } from "@/shared/ui";
import { AppHeaderMobile } from "./header-mobile";
import { AppHeaderDesktop } from "./header-desktop";
import { Footer } from "./footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AppHeaderMobile />
      <AppHeaderDesktop />
      <main className="flex-1">
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
