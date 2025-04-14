import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const skeletonVariants = cva(
  "bg-grey-10 animate-pulse",
  {
    variants: {
      rounded: {
        xs: "rounded-xs",
        md: "rounded-md",
      },
    },
    defaultVariants: {
      rounded: "md",
    },
  }
)

function Skeleton({ className, rounded, ...props }: React.ComponentProps<"div"> & VariantProps<typeof skeletonVariants>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(skeletonVariants({ rounded, className }))}
      {...props}
    />
  )
}

export { Skeleton }
