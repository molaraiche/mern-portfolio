import { TypingAnimation } from "./ui/typing-animation";

const Home = () => {
  return (
    <section className='h-[85vh] flex items-center justify-between'>
      <div className='flex flex-col items-center justify-between h-[85vh]'>
        <div className=' h-[65vh] flex items-center justify-center'>
          <TypingAnimation className='2xl:display-xl xl:display-xl lg:display-xl md:display-m sm:text-8xl xsm:text-5xl text-center text-brand-light-black dark:text-brand-white'>
            Hi, I&apos;m Mohamed a Frontend Developer.
          </TypingAnimation>
        </div>
      </div>
    </section>
  );
};

export default Home;
