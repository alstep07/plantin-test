import { BreadCrumbs, BreadCrumbsProps, Container } from "@/shared/ui";
import { AppHeaderMobile } from "./header-mobile";
import { AppHeaderDesktop } from "./header-desktop";
import { Footer } from "./footer";
import { HomeLink } from "./home-link";

interface PageLayoutProps {
  children: React.ReactNode;
  paths?: BreadCrumbsProps["paths"];
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, paths }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <AppHeaderMobile />
      <AppHeaderDesktop />
      <main className="flex-1 pt-4">
        <Container>
          {paths && (
            <>
              <div className="hidden md:block">
                <BreadCrumbs paths={paths} />
              </div>
              <div className="block md:hidden">
                <HomeLink />
              </div>
            </>
          )}
          <div className="mt-6 md:mt-12">{children}</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
