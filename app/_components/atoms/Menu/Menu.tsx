import Link from "next/link";

export const Menu = () => (
  <ul
    tabIndex={0}
    className='menu menu-sm font-mono dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52'
  >
    <li>
      <Link href='/about-me'>About Me</Link>
    </li>
  </ul>
);

export default Menu;

