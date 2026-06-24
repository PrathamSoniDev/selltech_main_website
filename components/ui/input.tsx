import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "w-full rounded-[12px] border border-line-strong bg-[rgba(5,8,22,.6)] px-4 py-3.5 text-[15px] text-ink-0 placeholder:text-ink-3",
        "transition-colors duration-200 outline-none",
        "focus:border-brand-cyan focus:bg-[rgba(0,212,255,.04)]",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
