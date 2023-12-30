import className from "classnames";
import React, { PropsWithChildren } from "react";

export interface ButtonProps {
  onClick: () => void;
  outline: boolean;
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
  active?: boolean;
  classes?: string;
  state?: "info" | "success" | "warning" | "error";
  disabled?: boolean;
}

export const Button = ({
  onClick,
  active,
  classes,
  color = "neutral",
  state,
  outline,
  disabled = false,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className(
        "btn",
        { "btn-active": active },
        { "btn-outline": outline },
        `btn-${color}`,
        state && `btn-${state}`,
        classes
      )}
    >
      {children}
    </button>
  );
};

