import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface BadgeProps {
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
  outline?: boolean;
}

export const Badge = ({
  children,
  color = "neutral",
  outline = false,
}: PropsWithChildren<BadgeProps>) => {
  return (
    <div
      className={classNames(
        "badge",
        { "badge-outline": outline },
        `badge-${color}`
      )}
    >
      {children}
    </div>
  );
};

