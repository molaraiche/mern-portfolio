import { getAllProjects } from "@/api/server";
import Button from "@/components/Button";
import Delete from "@/components/Delete";
import { projectType } from "@/types/project";
import Link from "next/link";
import { FaInbox } from "react-icons/fa6";

const Projects = async () => {
  const projects = await getAllProjects();

  return (
    <section className='h-screen flex items-center justify-center flex-col w-full px-10'>
      <div className='flex items-center justify-start w-full px-10'>
        <Link
          href='/board/inbox'
          className='font-semibold flex items-center gap-1'>
          <span>
            <FaInbox />
          </span>
          Inbox
        </Link>
      </div>
      <div className='flex justify-end my-5 px-10 w-full'>
        <Button
          EType='link'
          label='Add New Project'
          linkPath='/board/projects/add'
          target='_parent'
        />
      </div>

      <div className='overflow-x-auto w-full'>
        <table className='min-w-full border-collapse border border-brand-white rounded-xl'>
          <thead>
            <tr className='bg-brand-blue'>
              <th className='border border-brand-white px-4 py-2 text-left w-[90%]'>
                Project Title
              </th>
              <th className='border border-brand-white px-4 py-2 text-left w-[10%]'>
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project: projectType) => (
              <tr key={project._id} className='hover:border-brand-white'>
                <td className='border border-brand-white px-4 py-2 font-semibold'>
                  {project.title}
                </td>
                <td className='border border-brand-white px-4 py-2 flex items-center justify-center gap-3'>
                  <Delete id={project._id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Projects;
