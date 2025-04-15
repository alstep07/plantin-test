import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Fragment } from "react";

function Breadcrumb({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-grey-600 flex flex-wrap items-center gap-2 text-sm break-words sm:gap-2.5",
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn("hover:text-foreground transition-colors", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5 text-grey-400", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

export interface BreadCrumbsProps {
  paths: {
    label: string;
    href?: string;
  }[];
}

export const BreadCrumbs = ({ paths }: BreadCrumbsProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={`${path.label}-${index}`}>
            <BreadcrumbItem>
              <BreadcrumbLink href={path.href}>{path.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
