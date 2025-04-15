import * as React from "react";

import { cn } from "@/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  endicon?: React.ReactNode;
}

function Input({ className, type, endicon, ...props }: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "pl-4 py-2.5 md:py-4 pr-10 md:pr-14 placeholder:text-grey-600 selection:bg-primary bg-white dark:bg-input/30 border-input flex h-10 md:h-14 w-full min-w-0 rounded-md shadow-sm text-base transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      />
      {endicon && (
        <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2">
          {endicon}
        </div>
      )}
    </div>
  );
}

export { Input };
