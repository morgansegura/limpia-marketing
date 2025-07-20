import { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./section.css";

type TSectionProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
};

export function Section({
  as = "section",
  children,
  className,
}: TSectionProps) {
  const Component = as;

  return <Component className={cn("section", className)}>{children}</Component>;
}
