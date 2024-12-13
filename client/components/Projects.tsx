import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/api/projects";
import { projectType } from "@/types/project";

const Projects = async () => {
  const projects = await getAllProjects();
  return (
    <section id='projects' className='text-black dark:text-white font-fm my-12'>
      <div className=''>
        <div className='flex justify-between flex-col'>
          <h1 className='display-m'>Projects</h1>
          <p className='lg:w-[522px] md:w-[392px] w-full mt-3 text-lg font-quicksand font-medium px-3'>
            I build custom websites and web applications that combine
            pixel-perfect designs, responsive layouts, and SEO optimization.
            Each project is crafted to align with your unique goals and bring
            your vision to life.
          </p>
        </div>
        <div className='flex items-center justify-end'>
          <Link
            href='/projects'
            className='flex items-center justify-center gap-2 text-xl font-semibold'>
            More <MdOutlineArrowRightAlt />
          </Link>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-24 place-items-center mt-10 '>
        {projects
          .filter((project: projectType) => project.hot)
          .map((project: projectType) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              brief={project.brief}
              path={project.path}
              logo={project.logo}
              category={project.category}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
