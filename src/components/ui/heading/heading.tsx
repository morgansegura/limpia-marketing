import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import "./heading.css";

type THeadingProps = {
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  size?: "2xl" | "xl" | "lg" | "base" | "sm" | "xs";
  align?: "default" | "center" | "right";
};

export function Heading({
  as = "h1",
  align = "default",
  children,
  className,
  size = "xl",
}: THeadingProps) {
  const Component = as;
  return (
    <Component
      className={cn("heading", className)}
      data-heading-align={align}
      data-heading-size={size}
    >
      {children}
    </Component>
  );
}
