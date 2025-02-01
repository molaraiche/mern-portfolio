import { SiReaddotcv } from "react-icons/si";
const resumeLink =
  "https://docs.google.com/document/d/1cyNEi2iPMT7VvgnVwX4QpNQGqn7bviDqb25BzOgZYQw/edit?usp=sharing";
const Resume = () => {
  return (
    <a
      href={resumeLink}
      target='_blank'
      className='flex items-center gap-2 text-brand-white bg-brand-red py-2 px-6 rounded cursor-pointer'
      title='Read Resume'>
      <SiReaddotcv />
      <span className='lg:block hidden'>Resume</span>
    </a>
  );
};

export default Resume;
