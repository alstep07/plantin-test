import Link from "next/link";
import { UserIcon, SearchIcon } from "@/shared/icons";
import { Container, IconButton } from "@/shared/ui";
import { headerLinks } from "./data";

export const AppHeaderDesktop: React.FC = () => {
  return (
    <header className="z-1 bg-white top-0 py-5 hidden md:block sticky shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {headerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-grey-900 hover:text-primary-400 font-[500] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-6">
            <IconButton size="md" aria-label="Search">
              <SearchIcon />
            </IconButton>
            <IconButton size="md" aria-label="User menu">
              <UserIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
};
