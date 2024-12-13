import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
const Home = () => {
  return (
    <section className='lg:h-[85vh] min-h-[85vh] flex flex-col justify-center  relative font-fm'>
      <div className='flex items-center justify-center 2xl:flex-row flex-col'>
        <TextGenerateEffect
          className='2xl:display-2xl xl:display-xl lg:display-xl md:display-m sm:display-m xsm:h2'
          words='Developement Custom Websites.'
        />
        <div className=' 2xl:absolute right-80 top-80 lg:my-0 my-4'>
          <Link
            href='#projects'
            className='lg:p-8 p-4 uppercase rounded-[144px] font-semibold text-xl bg-grey-50  dark:bg-black-400 dark:text-white flex items-center justify-center animate__animated animate__pulse animate__delay-3s animate__infinite'>
            Scroll Down
            <MdKeyboardArrowDown className=' w-6 h-6 animate__animated  animate__flash animate__delay-5s animate__infinite' />
          </Link>
        </div>
      </div>
      <div className=' my-10 flex justify-between relative lg:px-10 lg:my-2 lg:flex-row flex-col-reverse gap-10 dark:text-white'>
        <div className=' lg:my-0 md:my-0 sm:my-0 xsm:my-32 flex justify-center flex-col'>
          <h4 className='font-semibold text-2xl'>Let&apos;s Talk</h4>
          <a
            href='mailto:laraichemohamed@gmail.com'
            target='_blank'
            className='font-medium text-xl font-quicksand my-2'>
            laraichemohamed@gmail.com
          </a>
        </div>
        <div className=' xl:absolute right-10 -top-28 flex items-center justify-center xl:mt-3'>
          <p className='w-[371px] h-[84px] font-medium text-lg font-quicksand'>
            I&apos;m <strong>Mohamed</strong>, a web developer creating custom
            websites and interactive apps to boost your online presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
