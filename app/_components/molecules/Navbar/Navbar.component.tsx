import { GitHubIcon, LinkedInIcon } from "@app/_public/Icons";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className='navbar bg-neutral text-neutral-content w-full lg:w-11/12 mx-auto lg:rounded-b-lg'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box w-52'
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='navbar-center flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          {" "}
          Ferhat Saritas{" "}
        </Link>
      </div>
      <div className='navbar-end flex gap-4'>
        <Link href='' className='btn btn-secondary btn-square' target='_blank'>
          <span className='w-10'>
            <LinkedInIcon />
          </span>
        </Link>
        <Link
          href='https://github.com/FerhatSaritas'
          target='_blank'
          className='btn btn-accent btn-square'
        >
          <span className='w-10'>
            <GitHubIcon />
          </span>
        </Link>
      </div>
    </div>
  );
};

