import Link from "next/link";
import React from "react";

const Thanks = () => {
  return (
    <div className='h-[85vh] font-ls  dark:text-brand-white text-brand-black'>
      <div className='h-[70vh] flex items-center justify-center flex-col animate__animated animate__backInDown'>
        <h1 className='display-xl'>Thank you</h1>
        <p className='text-lg mt-3'>
          Your message has been sent to us succesfully we will surely reply you
          in a timeframe of 24 hours
        </p>
        <div className='flex items-center justify-center gap-10 mt-10'>
          <Link
            href='/projects'
            className='py-3 px-6 bg-brand-light-black text-brand-white ease-in duration-150 rounded-sm font-medium '>
            Projects
          </Link>
          <a
            href='https://wa.link/tfszlu'
            target='_blank'
            className='py-3 px-10 bg-brand-red hover:bg-red-400 border-2 border-brand-red hover:border-red-400 ease-in duration-150 rounded-sm font-medium text-brand-white'>
            Can&apos;t wait the 24 hours ?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
