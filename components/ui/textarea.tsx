import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "w-full min-h-[120px] resize-y rounded-[12px] border border-line-strong bg-[rgba(5,8,22,.6)] px-4 py-3.5 text-[15px] text-ink-0 placeholder:text-ink-3",
        "transition-colors duration-200 outline-none",
        "focus:border-brand-cyan focus:bg-[rgba(0,212,255,.04)]",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

export { Textarea };
