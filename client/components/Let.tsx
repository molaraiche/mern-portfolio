const LetConnect = () => {
  return (
    <section className='dark:text-white flex items-center justify-center flex-col h-[40vh] contactPage'>
      <h1 className='lg:display-m md:text-8xl sm:text-6xl xsm:text-5xl text-center font-semibold'>
        Let&apos;s talk !
      </h1>
      <a
        href='https://calendly.com/molaraiche/service-needed'
        target='_blank'
        className='py-2 px-4 w-[200px] h-[92px] flex items-center justify-center rounded-[144px] bg-black dark:bg-black-400 text-white mt-10 cursor-pointer font-medium'>
        Book a call
      </a>
    </section>
  );
};

export default LetConnect;
