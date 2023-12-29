import { NavLinkProps } from "@app/_constants";
import classNames from "classnames";
import Link from "next/link";
import { PropsWithChildren } from "react";

export const NavLink = ({
  children,
  href,
  color = "primary",
}: PropsWithChildren<NavLinkProps>) => {
  return (
    <Link
      href={href}
      className={classNames("link", `link-${color}`, "link-hover")}
    >
      {children}
    </Link>
  );
};

