import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

import "./container.css";

type TContainerProps = {
  children: ReactNode;
  className?: string;
  variant?: "default" | "fluid";
  hasSpacing?: boolean;
};

export function Container({
  children,
  className,
  variant = "default",
  hasSpacing = true,
}: TContainerProps) {
  return (
    <div
      className={cn("container", className)}
      data-container-variant={variant}
      data-container-spacing={hasSpacing}
    >
      {children}
    </div>
  );
}
