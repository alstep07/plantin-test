import { Logo, MenuIcon } from "@/shared/icons";
import { Container, IconButton } from "@/shared/ui";
import Link from "next/link";

export const AppHeaderMobile: React.FC = () => {
  return (
    <header className="z-1 sticky top-0 right-0 left-0 py-4 block md:hidden shadow-md bg-white">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <IconButton size="sm">
            <MenuIcon />
          </IconButton>
        </div>
      </Container>
    </header>
  );
};
