import { PropsWithChildren } from "react";

export interface TooltipProps {
  color?: "neutral" | "primary" | "secondary" | "accent" | "ghost" | "link";
}

export const Tooltip = ({
  children,
  color = "primary",
}: PropsWithChildren<TooltipProps>) => {
  return (
    <div className={`tooltip tooltip-${color}`} data-tip='hello'>
      {children}
    </div>
  );
};

