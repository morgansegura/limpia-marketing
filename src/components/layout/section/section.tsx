import { JSX, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

import "./section.css";

type TSectionProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  className?: string;
  title?: { as?: "h1" | "h2" | "h3"; children: ReactNode };
  description?: string;
};

export function Section({
  as = "section",
  children,
  className,
  description,
  title,
}: TSectionProps) {
  const Component = as;
  const Title = title?.as || "h1";

  return (
    <Component className={cn("section", className)}>
      {!!title ? (
        <header>
          <Title className="section-title">{title.children}</Title>
        </header>
      ) : null}
      {!!title ? <p className="section-description">{description}</p> : null}
      <div className="section-main">{children}</div>
    </Component>
  );
}
