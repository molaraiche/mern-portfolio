"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
const BackTop = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const path = usePathname();

  return (
    <div
      className={` ${
        path === "/" || path === "/projects" ? "flex" : "hidden"
      } dark:white bg-brand-light-black  fixed bottom-14 lg:right-24 right-10 lg:w-20 lg:h-20 w-12 h-12 items-center justify-center rounded-full shadow-lg cursor-pointer  transition`}
      onClick={handleScrollToTop}>
      <Image
        src='./top-arrow-white.svg'
        alt='to top arrow'
        width={34}
        height={34}
      />
    </div>
  );
};

export default BackTop;
