import { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./page.css";

type TPageProps = {
  children?: ReactNode;
  className?: ReactNode;
};

export function Page({ children, className }: TPageProps) {
  return <div className={cn("page", className)}>{children}</div>;
}
