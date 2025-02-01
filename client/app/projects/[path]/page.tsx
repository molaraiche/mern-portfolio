import { getProjectByPath } from "@/api/projects";
import type { Metadata } from "next";
import { FaGithub } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import NotFound from "@/app/not-found";
import { projectType } from "@/types/project";
import ContentCard from "@/components/ContentCard";
import { TypingAnimation } from "@/components/ui/typing-animation";
import moment from "moment";
type Params = Promise<{ path: string }>;
export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { path } = await params;

  const project = await getProjectByPath(path);

  if (!project) {
    return {
      title: "Project Not Found | Mohamed Laraiche",
      description:
        "The project you are looking for is unavailable or may have been removed. Explore other projects in my portfolio.",
      openGraph: {
        title: "Project Not Found | Mohamed Laraiche",
        description:
          "The project you are looking for is unavailable or may have been removed. Check out other projects in my portfolio.",
        url: `https://molaraiche.com/projects/${path}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Project Not Found | Mohamed Laraiche",
        description:
          "The project you are looking for is unavailable. Discover other projects in my portfolio.",
      },
    };
  }

  return {
    title: `${project.title} | Mohamed Laraiche`,
    description: `${project.overview}`,
    openGraph: {
      title: `${project.title} | Mohamed Laraiche`,
      description: `${project.overview}`,
      url: `https://molaraiche.com/projects/${path}`,
      type: "website",
      images: [
        {
          url: project.main?.url || "https://www.molaraiche.com/molaraiche.jpg",
          width: 1200,
          height: 630,
          alt: `${project.title} thumbnail`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Mohamed Laraiche`,
      description: `${project.overview}`,
      images: [
        project.main?.url || "https://www.molaraiche.com/molaraiche.jpg",
      ],
    },
  };
}

const ProjectDetails = async ({ params }: { params: Params }) => {
  const { path } = await params;
  const project: projectType | null = await getProjectByPath(path);

  if (!project) {
    return <NotFound />;
  }

  return (
    <section className='lg:h-screen '>
      <div className='flex h-[15vh] items-center lg:justify-between md:justify-between sm:justify-between justify-center flex-wrap'>
        <div className='flex items-center justify-center gap-5 font-quicksand'>
          {project.title && (
            <TypingAnimation
              className='2xl:display-xl xl:display-xl lg:display-xl md:display-m sm:text-8xl xsm:text-5xl text-center font-ls 
          text-brand-light-black dark:text-brand-white'>
              {project.title}
            </TypingAnimation>
          )}
        </div>
        <div className='flex gap-5 '>
          {project.source && (
            <a
              href={project.source}
              target='_blank'
              className='flex items-center gap-3 bg-brand-light-black text-brand-white py-2 px-4 rounded dark:bg-brand-white dark:text-brand-black font-medium '
              title={`${project.title} source code`}>
              <FaGithub />
              Source
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              className='flex items-center gap-3 bg-brand-red text-brand-white py-2 px-4 rounded font-medium '
              title={`${project.title} Live Demo`}>
              <IoEye /> Live Demo
            </a>
          )}
        </div>
      </div>
      <div className='w-full flex justify-center items-center gap-10 lg:flex-nowrap flex-wrap py-5 lg:my-0 my-8'>
        {project.brief && (
          <ContentCard title={"Brief"} Content={project.brief} />
        )}
        {project.process && (
          <ContentCard title={"Process"} Content={project.process} />
        )}
        {project.solution && (
          <ContentCard title={"Problem"} Content={project.solution} />
        )}
        {project.stack && (
          <ContentCard title={"Stack"} Content={project.stack} />
        )}
      </div>
      <div className='flex items-center md:justify-between justify-center h-[20vh] md:flex-nowrap flex-wrap-reverse gap-3 md:gap-10'>
        {project.date && (
          <div className='text-brand-black dark:text-brand-white font-semibold'>
            Created {moment(project.date).format("LL")}
          </div>
        )}
        {project.category && (
          <div className='bg-brand-black text-brand-white dark:bg-brand-white dark:text-brand-black w-fit py-2 px-6 rounded font-bold'>
            {project.category}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
