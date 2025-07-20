import { ReactNode } from "react";

export type TNavItem = {
  label: string;
  title: string;
  href: string;
  onClick: () => void;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
};
