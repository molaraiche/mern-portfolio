import { getAllMails } from "@/api/server";
import DeleteMsg from "@/components/DeleteMsg";
import { mailType } from "@/types/mails";
import Link from "next/link";
import { GrProjects } from "react-icons/gr";

const Projects = async () => {
  const Mails = await getAllMails();
  return (
    <section className='min-h-screen flex items-center justify-center flex-col w-full px-10'>
      <div className='flex items-center justify-start w-full px-10 h-[10vh]'>
        <Link
          href='/board/projects'
          className='font-semibold flex items-center gap-1'>
          <span>
            <GrProjects />
          </span>
          Projects
        </Link>
      </div>

      <div className='overflow-x-auto w-full'>
        <table className='min-w-full border-collapse border border-brand-white rounded-xl'>
          <thead>
            <tr className='bg-brand-blue'>
              <th className='border border-brand-white px-4 py-2 text-left w-[20%]'>
                Project Title
              </th>
              <th className='border border-brand-white px-4 py-2 text-left w-[20%]'>
                Email
              </th>
              <th className='border border-brand-white px-4 py-2 text-left w-[50%]'>
                Message
              </th>
              <th className='border border-brand-white px-4 py-2 text-left w-[10%]'>
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
            {Mails.map((project: mailType) => (
              <tr key={project._id} className='hover:border-brand-white'>
                <td className='border border-brand-white px-4 py-2 font-semibold'>
                  {project.name}
                </td>
                <td className='border border-brand-white px-4 py-2 font-semibold'>
                  {project.email}
                </td>
                <td className='border border-brand-white px-4 py-2 font-semibold'>
                  {project.message}
                </td>
                <td className='border border-brand-white px-4 py-2 flex items-center justify-center gap-3'>
                  <DeleteMsg id={project._id} />
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
