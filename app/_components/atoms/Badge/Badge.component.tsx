import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface BadgeProps {
  color?:
    | "neutral"
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "link"
    | "success"
    | "warning"
    | "error"
    | "info";
  outline?: boolean;
}

export const Badge = ({
  children,
  color = "neutral",
  outline = false,
}: PropsWithChildren<BadgeProps>) => {
  const classes = classNames(
    "badge",
    {
      "badge-outline": outline,
    },
    { "badge-primary": color === "primary" },
    { "badge-secondary": color === "secondary" },
    { "badge-accent": color === "accent" },
    { "badge-ghost": color === "ghost" },
    { "badge-neutral": color === "neutral" },
    { "badge-link": color === "link" },
    { "badge-info": color === "info" },
    { "badge-success": color === "success" },
    { "badge-error": color === "error" },
    { "badge-warning": color === "warning" }
  );
  return <div className={classes}>{children}</div>;
};

