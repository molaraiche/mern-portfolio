import { getProjectByPath } from "@/api/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaRegHandPointRight } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import NotFound from "@/app/not-found";
import { projectType } from "@/types/project";
import { imgProps } from "@/types/type";

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
      description: "The requested project could not be found.",
      openGraph: {
        title: "Project Not Found | Mohamed Laraiche",
        description: "The requested project could not be found.",
        url: `https://molaraiche.com/projects/${path}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Project Not Found | Mohamed Laraiche",
        description: "The requested project could not be found.",
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
    <section className='dark:text-white font-fm'>
      <div className='min-h-screen lg:container lg:mx-auto md:px-14 sm:px-10 xsm:px-4 text-light flex flex-col items-center justify-center pt-40 pb-20'>
        <div className='flex flex-col items-center justify-center my-10'>
          <div className='flex items-center justify-center gap-5'>
            <h1 className='lg:text-5xl md:text-4xl sm:text-4xl xsm:text-4xl font-bold'>
              {project.title}
            </h1>
            <a
              href={project.source}
              title='Source code'
              target='_blank'
              className={`${
                project.source ? "cursor-pointer" : "cursor-not-allowed"
              } flex items-center justify-center`}
              rel='noreferrer'>
              <FaGithub className='w-[24px] h-[24px] hover:scale-110 hover:text-secondary' />
            </a>
          </div>
          <p className='mt-6 text-center font-quicksand'>
            {project.brief || "No brief provided."}
          </p>
        </div>

        <div className='w-full flex items-center justify-center'>
          <a href={project.live} target='_blank' title='click to see live demo'>
            <Image
              src={project.thumbnail?.url || ""}
              alt={project.brief}
              width={600}
              height={400}
              className='object-cover rounded-lg md:hidden sm:block'
            />
          </a>
          <iframe
            src={project.live}
            className='w-[80%] h-[500px] overflow-x-hidden rounded-xl 2xl:block xl:block lg:block md:block hidden'></iframe>
        </div>

        <div className='flex flex-col w-full my-10'>
          <div className='w-full flex items-center justify-center min-h-[30vh] h-auto my-5'>
            <div className='mt-10'>
              <h2 className='text-3xl font-bold leading-[56px]'>Description</h2>
              <p className='text-xl mt-4 font-quicksand'>
                {project.description}
              </p>
            </div>
          </div>
          <div className=''>
            <h2 className='text-3xl font-bold '>Features</h2>
            <div className='my-4 '>
              {project.features?.map((feat) => (
                <div
                  className='flex items-center gap-2 my-1.5 font-semibold font-quicksand'
                  key={feat}>
                  <FaRegHandPointRight className='w-4 h-4' />
                  {feat}
                </div>
              ))}
            </div>
          </div>
          <div className='flex flex-wrap flex-col my-3'>
            <h2 className='text-3xl font-bold '>Tech Stack</h2>
            <div className='flex flex-wrap justify-center'>
              {project.tech && project.tech.length > 0 ? (
                project.tech.map((tech: imgProps) =>
                  typeof tech.url === "string" ? (
                    <Image
                      src={tech.url}
                      alt='tech stack used in building this website'
                      key={tech.public_id}
                      width={100}
                      height={100}
                      className='bg-light p-5 rounded-3xl my-5'
                    />
                  ) : (
                    <p key={tech.public_id} className='text-center'>
                      Invalid tech stack entry
                    </p>
                  )
                )
              ) : (
                <div className='flex items-center justify-center w-full'>
                  <p className='text-center font-semibold my-5 font-3xl'>
                    No tech stack provided.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center gap-10 mt-10'>
          <Link
            href='/contact'
            className='w-48 h-12 flex items-center justify-center rounded-xl bg-secondary border border-transparent text-center font-semibold hover:opacity-2 border-black-400 bg-black-400 text-white text-base'>
            Let&apos;s work together !
          </Link>
          <a
            href={project.live}
            target='_blank'
            className='w-48 h-12 flex items-center justify-center rounded-xl text-center bg-grey-50 border border-black font-semibold text-base gap-2 text-black'
            rel='noreferrer'>
            <IoEye className='w-6 h-6' />
            Live Preview
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
