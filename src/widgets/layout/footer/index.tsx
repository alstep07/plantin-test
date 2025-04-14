import * as React from "react";
import { Container, Separator } from "@/shared/ui";
import { links } from "./links";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="pb-4 md:pb-[82px]">
      <Container>
        <div className="flex flex-col md:flex-row text-center items-center justify-center md:justify-between gap-6 text-sm md:text-xs text-grey-700">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6">
            {links.map((link, index) => {
              const isLast = index === links.length - 1;

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
            <p>©Copyright&nbsp;©&nbsp;2020&nbsp;PlantIn. All&nbsp;rights&nbsp;reserved</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
