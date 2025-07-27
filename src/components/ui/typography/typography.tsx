import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "./typography.css";

type TTypographyProps = {
  as?: "p" | "div" | "span";
  children?: ReactNode;
  className?: string;
  size?: "sm" | "base" | "lg";
  variant?: "default" | "caption" | "display";
};

export function Typography({
  as = "div",
  children,
  className,
  size = "base",
  variant = "default",
}: TTypographyProps) {
  const Component = as;
  return (
    <Component
      className={cn("typography", className)}
      data-typography-size={size}
      data-typography-variant={variant}
    >
      {children}
    </Component>
  );
}
