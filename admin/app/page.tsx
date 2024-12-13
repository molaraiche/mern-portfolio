"use client";
import Button from "@/components/Button";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";
const Admin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const adminHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api.molaraiche.com/api/admin/login",
        { email, password }
      );
      const { token } = await response.data;
      Cookies.set("token", token, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });
      router.push("/board/projects");
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("🚫 Invalid login credentials. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };
  return (
    <section className='bg-black h-screen text-white lg:container lg:mx-auto py-2 px-4'>
      <div className='flex items-center justify-center h-[50vh]'>
        <h1 className='text-4xl font-bold text-center font-fm display-m'>
          Admin
        </h1>
      </div>
      <div className='flex items-center justify-center'>
        <form
          onSubmit={adminHandler}
          className='flex flex-col items-center justify-center w-full max-w-md'>
          <div className='flex flex-col mb-5 w-full'>
            <input
              type='text'
              placeholder='Identify'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-black rounded-[10px] border outline-none border-grey-50 text-brand-white h-14 pl-2 w-full'
            />
          </div>
          <div className='flex flex-col mb-5 w-full'>
            <input
              type='password'
              placeholder='Pass'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-black border border-grey-50 text-white rounded-[10px] outline-none h-14 pl-2 w-full'
            />
          </div>
          <div className='flex items-center justify-center gap-5 flex-col-reverse md:flex-row'>
            <Button
              EType={"link"}
              linkPath='http://molaraiche.com/'
              target='_blank'
              label='Portfolio'
              className='text-white bg-black'
            />
            <Button
              EType={"button"}
              type='submit'
              label='Login'
              className='text-white bg-black-400'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Admin;
