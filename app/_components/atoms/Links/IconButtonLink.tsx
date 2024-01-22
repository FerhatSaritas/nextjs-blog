import { ButtonLinkProps } from "@app/_constants";
import Link from "next/link";

export const IconButtonLink = ({ icon, href }: ButtonLinkProps) => (
  <Link
    href={href}
    className='btn btn-neutral text-neutral-content btn-square'
    target='_blank'
  >
    <span className='w-7'>{icon}</span>
  </Link>
);

