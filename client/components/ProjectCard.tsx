"use client";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectType } from "@/types/project";
import "aos/dist/aos.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AOS: any;

const ProjectCard = ({ title, logo, brief, category, path }: projectType) => {
  const colors = useMemo(
    () => [
      "#7A19F3",
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FFFF33",
      "#FF33FF",
      "#33FFFF",
    ],
    []
  );

  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, [colors]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      (async () => {
        const AOSModule = await import("aos");
        AOS = AOSModule.default;
        AOS.init();
      })();
    }
  }, []);

  return (
    <div data-aos='fade-down' data-aos-duration='5000'>
      <Link href={`/projects/${path}`} className='flex flex-col'>
        <div
          className='flex items-center justify-center rounded-[32px] xl:w-[592px] xl:h-[586px] lg:w-[482px] lg:h-[586px] md:w-[328px] md:h-[354px] sm:w-[343px] sm:h-[363px] xsm:w-[323px] xsm:h-[343px]'
          style={{ backgroundColor: bgColor }}>
          <Image
            src={logo?.url || "/placeholder.png"}
            alt={brief || "Project thumbnail"}
            width={481}
            height={474}
            className='object-cover lg:w-[481px] lg:h-[474px] md:w-[279px] md:h-[275px] sm:w-[268px] sm:h-[264px] xsm:w-[268px] xsm:h-[264px] rounded-[32px]'
          />
        </div>
        <h3 className='text-xl font-semibold ml-4 dark:text-white mt-6'>
          {title}
        </h3>
        <p className='text-xl font-medium ml-4 mt-1.5 font-quicksand dark:text-white'>
          {category}
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
