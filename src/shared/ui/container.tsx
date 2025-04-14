import { cn } from "@/lib/utils"

export const Container = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1106px] px-4", className)}
      {...props}
    />
  )
}
