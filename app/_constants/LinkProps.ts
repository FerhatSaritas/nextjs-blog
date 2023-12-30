import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface NavLinkProps extends LinkProps {
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
}

export interface ButtonLinkProps extends LinkProps {
  icon: ReactNode;
}

