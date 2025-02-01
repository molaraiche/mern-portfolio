"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectType } from "@/types/project";
import "aos/dist/aos.css";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AOS: any;

const ProjectCard = ({
  title,
  thumbnail,
  brief,
  category,
  path,
}: projectType) => {
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
        <div className='flex items-center justify-center rounded bg-brand-light-black dark:bg-brand-white'>
          <Image
            src={thumbnail?.url || "/placeholder.png"}
            alt={brief || "Project thumbnail"}
            width={800}
            height={600}
            className='object-cover rounded w-full'
          />
        </div>

        <h3 className='text-4xl font-semibold ml-4 dark:text-brand-white text-brand-black mt-6'>
          {title}
        </h3>
        <p className='text-xl font-medium ml-4 mt-1.5 font-quicksand text-brand-white bg-brand-light-black w-fit px-4 py-2 rounded'>
          {category}
        </p>
      </Link>
    </div>
  );
};

export default ProjectCard;
