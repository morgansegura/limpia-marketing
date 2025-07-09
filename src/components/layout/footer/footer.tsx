import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./footer.css";

type TFooterProps = {
  children?: ReactNode;
  className?: ReactNode;
};

export function Footer({ children, className }: TFooterProps) {
  return <footer className={cn("footer", className)}>{children}</footer>;
}
