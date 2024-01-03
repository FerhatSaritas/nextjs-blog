import classNames from "classnames";
import { PropsWithChildren } from "react";

export interface DividerProps {
  horizontal?: boolean;
}

export const Divider = ({
  children,
  horizontal,
}: PropsWithChildren<DividerProps>) => {
  return (
    <div
      className={classNames("divider", { "divider-horizontal": horizontal })}
    >
      {children}
    </div>
  );
};

