"use client";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import { PiSquaresFour } from "react-icons/pi";
import { MdInbox } from "react-icons/md";
import { usePathname } from "next/navigation";
import { SiWelcometothejungle } from "react-icons/si";
import Logout from "@/components/Logout";

const SideBar = () => {
  const path = usePathname();
  const [sideBar, setSideBar] = useState(false);
  const sideBarHandler = () => setSideBar(!sideBar);
  const closeSideBar = () => setSideBar(false);
  return (
    <div
      className={`w-[20%] flex items-center justify-between bg-[#1B2B3D] h-screen absolute left-0 z-10 flex-col ease-in duration-200 ${
        sideBar ? "translate-x-[0%]" : "-translate-x-[100%]"
      } `}>
      <div className='flex justify-end w-full absolute top-16 -right-7'>
        {sideBar ? (
          <AiOutlineMenuFold
            className='text-brand-red w-8 h-8 cursor-pointer'
            onClick={sideBarHandler}
          />
        ) : (
          <AiOutlineMenuUnfold
            className='text-brand-red w-8 h-8 cursor-pointer'
            onClick={sideBarHandler}
          />
        )}
      </div>
      <div className='h-screen flex  flex-col w-full items-center justify-center '>
        <Link
          onClick={closeSideBar}
          href='/admin/board'
          className={` ${
            path === "/admin/board" ? "text-brand-red" : "text-brand-white"
          } flex justify-between w-[100px] items-center gap-2`}>
          <SiWelcometothejungle className='w-14 h-14 text-brand-red' />
          <span className='w-full'>Welcome</span>
        </Link>
        <Link
          onClick={closeSideBar}
          href='/admin/board/projects'
          className={` ${
            path === "/admin/board/projects"
              ? "text-brand-red"
              : "text-brand-white"
          } flex justify-between w-[100px] items-center gap-2`}>
          <PiSquaresFour className='w-14 h-14 text-brand-red' />
          <span className='w-full'>Projects</span>
        </Link>
        <Link
          onClick={closeSideBar}
          href='/admin/board/inbox'
          className={` ${
            path === "/admin/board/inbox"
              ? "text-brand-red"
              : "text-brand-white"
          } flex justify-between w-[100px] items-center gap-2`}>
          <MdInbox className='w-14 h-14 ' />{" "}
          <span className='w-full'>Inbox</span>
        </Link>
      </div>
      <Logout />
    </div>
  );
};

export default SideBar;
