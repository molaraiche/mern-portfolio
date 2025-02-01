import Link from "next/link";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import ProjectCard from "./ProjectCard";
import { getAllProjects } from "@/api/projects";
import { projectType } from "@/types/project";

const Projects = async () => {
  const projects = await getAllProjects();
  return (
    <section
      id='projects'
      className='text-brand-black dark:text-white font-ls my-12'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='display-m tracking-tighter'>Projects</h1>
        <Link
          href='/projects'
          className='flex items-center justify-center gap-2 text-xl font-semibold'>
          More <MdOutlineArrowRightAlt />
        </Link>
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
              thumbnail={project.thumbnail}
              category={project.category}
              live={project.live}
            />
          ))}
      </div>
    </section>
  );
};

export default Projects;
