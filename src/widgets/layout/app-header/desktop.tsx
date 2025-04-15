import Link from "next/link";
import { UserIcon, SearchIcon } from "@/shared/icons";
import { Container, IconButton } from "@/shared/ui";
import { links } from "./data";

export const AppHeaderDesktop: React.FC = () => {
  return (
    <header className="top-0 py-5 hidden md:block sticky shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <nav className="flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {links.map((link) => (
                <li key={link.href}>
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
            <IconButton size="md">
              <SearchIcon />
            </IconButton>
            <IconButton size="md">
              <UserIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </header>
  );
};
