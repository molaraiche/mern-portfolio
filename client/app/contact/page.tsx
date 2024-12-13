"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import { formSchema } from "@/schema/formSchema";
import { useRouter } from "next/navigation";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const router = useRouter();
  const formHandler = async (e: FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse({
      name,
      email,
      message,
    });
    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors({
        name: formattedErrors.name?._errors[0],
        email: formattedErrors.email?._errors[0],
        message: formattedErrors.message?._errors[0],
      });
    } else {
      await axios.post("https://api.molaraiche.com/api/contact/send", {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      router.push("/thank-you");
    }
  };
  return (
    <section className=' dark:text-white font-fm flex flex-col justify-center min-h-[85vh]'>
      <div className=''>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='display-m'>Contact</h1>
          <p className='text-center font-medium font-quicksand'>
            Let&apos;s connect to explore your ideas and discuss how we can
            collaborate to solve your challenges and create a lasting legacy
          </p>
        </div>
        <div className=''>
          <form
            onSubmit={formHandler}
            className='flex flex-col items-center justify-center font-quicksand gap-4 p-5 w-full'>
            <div className='flex flex-col items-center w-full'>
              <input
                type='text'
                placeholder='Your Name'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='h-10 outline-none dark:border-grey-500 border-2 rounded-md border-black-400 w-[60%] bg-transparent pl-2'
              />
              <p className='text-red-500 font-semibold mb-2'>{errors.name}</p>
            </div>
            <div className='flex flex-col items-center w-full'>
              <input
                type='email'
                placeholder='Your Email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='h-10 outline-none dark:border-grey-500 border-2 rounded-md border-black-400 w-[60%] bg-transparent pl-2'
              />
              <p className='text-red-500 font-semibold mb-2'>{errors.email}</p>
            </div>
            <div className='flex flex-col items-center w-full'>
              <textarea
                name='message'
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='min-h-24 outline-none dark:border-grey-500 border-2 rounded-md border-black-400 w-[60%] resize-x-0 bg-transparent pl-2'
              />
              <p className='text-red-500 font-semibold mb-2'>
                {errors.message}
              </p>
            </div>
            <div className='flex items-center justify-center my-4'>
              <button className='py-3  px-10 font-semibold bg-grey-500 hover:bg-black-400 hover:text-white dark:bg-black-400 dark:text-white rounded-lg dark:hover:bg-grey-500 dark:hover:text-black ease-in duration-150'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
