"use client";
import Image from "next/image";
import Mode from "./Mode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const path = usePathname();

  const menuHandler = () => setMenu(!menu);
  const closeMenu = () => setMenu(true);
  return (
    <section className='flex items-center justify-between h-[15vh] font-fm'>
      <div>
        <Link href='/' onClick={closeMenu}>
          <h1 className='font-fm text-3xl font-bold dark:hidden block'>
            molaraiche.®
          </h1>
          <h1 className='font-fm text-3xl font-bold text-white hidden dark:block'>
            molaraiche.®
          </h1>
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <nav
          className={`bg-black dark:bg-black-400 text-white flex justify-center items-center lg:w-fit w-full lg:rounded-[80px] py-2 px-3 lg:static absolute top-[15vh] lg:h-fit h-[75vh]  lg:gap-0 gap-10 right-0 left-0 lg:flex-row flex-col ease-in-out duration-300 lg:translate-x-0 z-50 ${
            menu ? "-translate-x-[200%]" : "translate-x-0"
          } `}>
          <Link
            href='/'
            onClick={closeMenu}
            className={`  flex items-center justify-center 
                       lg:text-xl text-3xl font-medium
                        ${
                          path === "/" ? "bg-white text-black" : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            Home
          </Link>
          <Link
            href='/projects'
            onClick={closeMenu}
            className={` 
                         lg:text-xl text-3xl font-medium flex items-center justify-center gap-3
                        ${
                          path === "/projects"
                            ? "bg-white text-black"
                            : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            Projects
          </Link>
          <Link
            href='/about'
            onClick={closeMenu}
            className={` flex items-center justify-center
                         lg:text-xl text-3xl font-medium
                        ${
                          path === "/about"
                            ? "bg-white text-black"
                            : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            About
          </Link>
          <Link
            href='/contact'
            onClick={closeMenu}
            className={` flex items-center justify-center
                         lg:text-xl text-3xl font-medium
                        ${
                          path === "/contact"
                            ? "bg-white text-black"
                            : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            Contact
          </Link>
        </nav>

        <Mode />
        <div className='lg:hidden block'>
          {menu ? (
            <>
              <Image
                src={"/menu-dark.svg"}
                alt=''
                className='dark:hidden block cursor-pointer'
                width={56}
                height={56}
                onClick={menuHandler}
              />
              <Image
                src={"/menu-light.svg"}
                alt=''
                className='hidden dark:block  cursor-pointer'
                width={56}
                height={56}
                onClick={menuHandler}
              />
            </>
          ) : (
            <>
              <Image
                src={"/close-menu-dark.svg"}
                alt=''
                className='dark:hidden block cursor-pointer'
                width={56}
                height={56}
                onClick={menuHandler}
              />
              <Image
                src={"/close-menu-light.svg"}
                alt=''
                className='hidden dark:block cursor-pointer '
                width={56}
                height={56}
                onClick={menuHandler}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
