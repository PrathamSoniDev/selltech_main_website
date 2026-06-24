import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-[0.01em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg-0",
  {
    variants: {
      variant: {
        primary:
          "text-[#04060f] [background:linear-gradient(180deg,#fff,#dfe9ff)] [box-shadow:0_14px_50px_rgba(0,212,255,.25),inset_0_-2px_0_rgba(0,0,0,.18)] hover:-translate-y-0.5 hover:[box-shadow:0_22px_60px_rgba(0,212,255,.42)]",
        ghost:
          "text-ink-0 border border-line-strong bg-[rgba(10,14,32,.4)] backdrop-blur-md hover:bg-[rgba(20,28,56,.7)] hover:border-brand-cyan",
        outline:
          "border border-line-strong bg-transparent text-ink-1 hover:border-brand-cyan hover:text-ink-0",
      },
      size: {
        default: "px-[22px] py-3.5",
        sm: "px-4 py-2.5 text-[13px]",
        lg: "px-[26px] py-4 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
