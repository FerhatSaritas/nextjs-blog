import { BreadCrumbType } from "@app/_constants/BreadCrumbType";
import Link from "next/link";

export interface BreadcrumbProps {
  crumbs: BreadCrumbType[];
}

export const Breadcrumb = ({ crumbs }: BreadcrumbProps) => {
  return (
    <div className='text-sm breadcrumbs'>
      <ul>
        {crumbs.map((element) => (
          <li>
            {element?.link ? (
              <Link href={element.link}>{element.name}</Link>
            ) : (
              element.name
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

