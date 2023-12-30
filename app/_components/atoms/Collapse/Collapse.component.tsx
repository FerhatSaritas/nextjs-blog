import { PropsWithChildren } from "react";

export interface CollapseProps {
  title: string;
}

export const Collapse = ({
  children,
  title,
}: PropsWithChildren<CollapseProps>) => {
  return (
    <div
      tabIndex={0}
      className='collapse collapse-plus border border-base-300 bg-base-200'
    >
      <input type='checkbox' />
      <div className='collapse-title text-xl font-medium'>{title}</div>
      <div className='collapse-content'>
        <p>{children}</p>
      </div>
    </div>
  );
};

