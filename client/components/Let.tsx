"use client";
import { useState } from "react";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";

const LetConnect = () => {
  const [copied, setCopied] = useState(false);

  const email = "laraichemohamed@gmail.com";
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };
  return (
    <section className='dark:text-brand-white text-brand-black flex items-center justify-center flex-col h-[40vh] contactPage'>
      <h1 className='lg:display-m md:text-8xl sm:text-6xl xsm:text-5xl text-center font-semibold tracking-tighter'>
        Let&apos;s talk !
      </h1>
      <button
        className='bg-brand-black text-brand-white flex items-center gap-3 py-3 px-6 rounded'
        onClick={handleCopy}>
        {email}{" "}
        {copied ? (
          <TbCopyCheck className='text-green-500 w-6 h-6' />
        ) : (
          <TbCopy className=' w-6 h-6' />
        )}
      </button>
    </section>
  );
};

export default LetConnect;
