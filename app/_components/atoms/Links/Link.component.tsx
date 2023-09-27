import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface LinkProps {
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
}

export const Link = ({
  children,
  color = "primary",
}: PropsWithChildren<LinkProps>) => {
  return (
    <a className={classNames("link", `link-${color}`, "link-hover")}>
      {children}
    </a>
  );
};

