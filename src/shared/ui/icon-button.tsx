import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const iconButtonVariants = cva(
  "flex items-center justify-center rounded-sm text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 cursor-pointer",
  {
    variants: {
      size: {
        sm: "size-8",
        md: "size-10",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

function IconButton({
  className,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(iconButtonVariants({ size, className }))}
      {...props}
    />
  )
}

export { IconButton, iconButtonVariants }
