"use client";
import Image from "next/image";
import Mode from "./Mode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Resume from "./Resume";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const path = usePathname();

  const menuHandler = () => setMenu(!menu);
  const closeMenu = () => setMenu(true);
  return (
    <section className='flex items-center justify-between h-[15vh] font-ls'>
      <div className='flex items-center justify-center mt-1'>
        <Link href='/' onClick={closeMenu}>
          <Image
            src='/logo-dark.svg'
            alt='molaraiche business logo'
            className='hidden dark:block'
            width={250}
            height={250}
          />
          <Image
            src='/logo-light.svg'
            alt='molaraiche business logo'
            className='dark:hidden block'
            width={250}
            height={250}
          />
        </Link>
      </div>
      <div className='flex items-center gap-4'>
        <nav
          className={`bg-brand-light-black text-brand-white flex justify-center items-center lg:w-fit w-full lg:rounded-[80px] py-2 px-3 lg:static absolute top-[15vh] lg:h-fit h-[75vh]  lg:gap-0 gap-10 right-0 left-0 lg:flex-row flex-col ease-in-out duration-300 lg:translate-x-0 z-50 ${
            menu ? "-translate-x-[200%]" : "translate-x-0"
          } `}>
          <Link
            href='/'
            onClick={closeMenu}
            className={`  flex items-center justify-center 
                       lg:text-xl text-3xl font-medium
                        ${
                          path === "/"
                            ? "bg-brand-white text-brand-black"
                            : "text-grey-500"
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
                            ? "bg-brand-white text-brand-black"
                            : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            Projects
          </Link>

          <Link
            href='/contact'
            onClick={closeMenu}
            className={` flex items-center justify-center
                         lg:text-xl text-3xl font-medium
                        ${
                          path === "/contact"
                            ? "bg-brand-white text-brand-black"
                            : "text-grey-500"
                        } py-2 px-6 rounded-[48px]`}>
            Contact
          </Link>
        </nav>

        <Mode />
        <Resume />
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
