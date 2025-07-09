import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./header.css";

type THeaderProps = {
  children?: ReactNode;
  className?: string;
};

export function Header({ children, className }: THeaderProps) {
  return <header className={cn("header", className)}>{children}</header>;
}
