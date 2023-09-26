import { default as ProfilePicture } from "@app/_public/assets/profile.jpg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className='navbar bg-neutral text-neutral-content w-full lg:w-11/12 mx-auto rounded-lg my-4'>
      <div className='flex-1'>
        <a className='btn btn-ghost normal-case text-xl'> Insight </a>
      </div>
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
          <div className='w-10 rounded-full'>
            <Image src={ProfilePicture} width={32} alt='Profile' />
          </div>
        </label>
        <ul
          tabIndex={0}
          className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52'
        >
          <li>
            <a className='justify-between'>
              Profile
              <span className='badge'>New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
