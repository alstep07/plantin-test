import * as React from "react";
import Link from "next/link";
import { Container, Separator } from "@/shared/ui";
import { footerLinks } from "./data";

export const Footer: React.FC = () => {
  return (
    <footer className="py-4 md:pb-[82px]">
      <Container>
        <div className="flex flex-col md:flex-row text-center items-center lg:items-stretch justify-center md:justify-between gap-6 text-sm md:text-xs text-grey-700">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            {footerLinks.map((link, index) => {
              const isLast = index === footerLinks.length - 1;

              return (
                <React.Fragment key={link.id}>
                  <Link key={link.id} href={link.href}>
                    {link.label}
                  </Link>
                  {!isLast && (
                    <Separator
                      orientation="vertical"
                      className="hidden lg:flex"
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
          <div className="flex flex-col gap-6">
            <p>©2025&nbsp;PlantIn. All&nbsp;rights&nbsp;reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
