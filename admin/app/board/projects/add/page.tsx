"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { FaUpload } from "react-icons/fa6";

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    source: "",
    live: "",
    brief: "",
    stack: "",
    process: "",
    solution: "",
    path: "",
    category: "",
    date: "",
    thumbnail: null as File | null,
    hot: false,
  });
  const router = useRouter();
  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onFileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (!files || files.length === 0) return;

    if (name === "thumbnail" || name === "logo") {
      setForm({ ...form, [name]: files[0] });
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.title || !form.thumbnail) {
      toast.info("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("source", form.source);
    formData.append("live", form.live);
    formData.append("brief", form.brief);
    formData.append("solution", form.solution);
    formData.append("stack", form.stack);
    formData.append("process", form.process);
    formData.append("path", form.path);
    formData.append("category", form.category);
    formData.append("thumbnail", form.thumbnail);
    formData.append("hot", form.hot ? "true" : "false");
    formData.append("date", form.date);

    try {
      await axios.post(
        "https://api.molaraiche.com/api/projects/addProject",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success("Project has been added!");

      setForm({
        title: "",
        source: "",
        live: "",
        brief: "",
        solution: "",
        process: "",
        stack: "",
        path: "",
        category: "",
        thumbnail: null,
        date: "",
        hot: false,
      });
      router.refresh();
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add the project. Please try again.");
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center flex-col w-full form font-quicksand px-20 '>
      <div className='h1 font-fm h-[10vh]'>Add New Project</div>
      <form
        className='min-h-[90vh] flex items-center justify-center flex-col my-10'
        onSubmit={submitHandler}>
        {/* Title, Source, Live */}
        <div className='flex gap-5 w-full my-3'>
          <input
            type='text'
            name='title'
            placeholder='Title'
            className='border border-white'
            value={form.title}
            onChange={onChangeHandler}
          />
          <input
            type='text'
            name='source'
            placeholder='Source'
            className='border border-white'
            value={form.source}
            onChange={onChangeHandler}
          />
          <input
            type='text'
            name='live'
            placeholder='Live'
            className='border border-white'
            value={form.live}
            onChange={onChangeHandler}
          />
        </div>

        {/* Description, Brief */}
        <div className='flex gap-5 items-center justify-between w-full my-3'>
          <textarea
            name='process'
            className='min-h-[100px] resize-none w-1/2 border border-white'
            placeholder='Process'
            value={form.process}
            onChange={onChangeHandler}
          />
          <textarea
            name='solution'
            className='min-h-[100px] resize-none w-1/2 border border-white'
            placeholder='Solution'
            value={form.solution}
            onChange={onChangeHandler}
          />
          <textarea
            name='stack'
            className='min-h-[100px] resize-none w-1/2 border border-white'
            placeholder='Stack'
            value={form.stack}
            onChange={onChangeHandler}
          />

          <textarea
            name='brief'
            className='min-h-[100px] resize-none w-1/2 border border-white'
            placeholder='Brief'
            value={form.brief}
            onChange={onChangeHandler}
          />
        </div>

        {/* Thumbnail, Logo, Tech */}
        <div className='my-3 w-full '>
          <label
            htmlFor='thumbnail'
            className='flex justify-center my-3 items-center border py-2 px-40 rounded bg-brand-light-black'
            title='Upload Thumbnail Image'>
            {form.thumbnail ? (
              form.thumbnail.name
            ) : (
              <p className='flex items-center gap-1 justify-center'>
                {" "}
                <FaUpload />
                Thumbnail
              </p>
            )}
            <input
              type='file'
              name='thumbnail'
              id='thumbnail'
              onChange={onFileChangeHandler}
              className='hidden'
            />
          </label>
        </div>

        {/* Hot, Category, Path */}
        <div
          className='flex flex-col  justify-between w-full my-3
      '>
          <label htmlFor='hot' className='my-1'>
            Hot:
          </label>
          <select
            name='hot'
            id='hot'
            className='w-full p-3 bg-brand-light-black border border-white mx-1 rounded'
            value={form.hot ? "true" : "false"}
            onChange={(e) =>
              setForm({
                ...form,
                hot: e.target.value === "true",
              })
            }>
            <option value='false'>False</option>
            <option value='true'>True</option>
          </select>
        </div>
        <div className='w-full my-3 '>
          <label htmlFor='Date'>Creation Date:</label>
          <input
            type='date'
            className='border border-white my-1 text-brand-white date-icon-white'
            name='date'
            id='Date'
            onChange={onChangeHandler}
          />
        </div>
        <div className='flex items-center justify-between gap-3 my-3 w-full'>
          <input
            type='text'
            placeholder='Category'
            className='border border-white'
            onChange={onChangeHandler}
            value={form.category}
            name='category'
          />
          <input
            type='text'
            placeholder='Path'
            onChange={onChangeHandler}
            className='border border-white'
            value={form.path}
            name='path'
          />
        </div>

        {/* Submit and Reset */}
        <div className='my-10 flex items-center justify-center gap-5 w-full'>
          <button className='bg-brand-red text-white py-2 px-6 rounded font-semibold w-[100%]'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
