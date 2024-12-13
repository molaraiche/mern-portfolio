import Image from "next/image";

const About = () => {
  const year = new Date().getFullYear();
  return (
    <section className='dark:text-white font-fm min-h-[85vh] flex flex-col  justify-center'>
      <div className='flex items-center justify-between lg:flex-row md:flex-row flex-col'>
        <div className='flex flex-col lg:w-1/2 md:w-1/2 w-full'>
          <div className=''>
            <h1 className='display-m'>About</h1>
          </div>
          <div className='my-4'>
            <p className=' lg:mt-0 md:mt-0 mt-10 font-quicksand'>
              I am a self-taught web developer with over {year - 2021} years of
              experience in building high-performance websites and web
              applications. My expertise includes Next.js, Tailwind CSS,
              TypeScript, and the MERN stack. I specialize in using modern
              technologies for both frontend and backend development, with a
              focus on delivering scalable and efficient solutions.
            </p>
            <p className=' mt-2 font-quicksand'>
              On the backend, I work with Express.js and MongoDB, creating
              robust APIs and server-side applications. I also have experience
              with end-to-end testing using Cypress and efficiently retrieving
              data from GraphQL APIs with Apollo Client.
            </p>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 w-full flex items-center justify-center lg:mt-0 md:mt-0 my-5'>
          <Image
            src='./nomad-white.svg'
            className='hidden dark:block object-cover lg:w-[350px] md:w-[400px] w-[300px]'
            alt=''
            width={400}
            height={400}
          />
          <Image
            src='./nomad-black.svg'
            className='black dark:hidden object-cover lg:w-[350px] md:w-[400px] w-[300px]'
            alt=''
            width={600}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
