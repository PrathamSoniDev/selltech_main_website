"use client";

import { motion, type HTMLMotionProps, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
};

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  as?: "div" | "section" | "h2" | "h3" | "p" | "li" | "article";
}

/**
 * Lightweight scroll-reveal wrapper using Framer Motion's
 * `whileInView` — no GSAP plug-in required.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0% -8% 0%" }}
      variants={defaultVariants}
      transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export const aurora =
  "bg-clip-text text-transparent [background-image:linear-gradient(120deg,#00D4FF_0%,#22D3EE_35%,#8B5CF6_75%,#E879F9_100%)]";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dot" />
      {children}
    </span>
  );
}
