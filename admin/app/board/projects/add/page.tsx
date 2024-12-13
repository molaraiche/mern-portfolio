"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    source: "",
    live: "",
    brief: "",
    description: "",
    path: "",
    category: "",
    features: [] as string[],
    thumbnail: null as File | null,
    logo: null as File | null,
    tech: [] as File[],
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
    } else if (name === "tech") {
      setForm({ ...form, tech: Array.from(files) });
    }
  };

  const addFeatureHandler = (feature: string) => {
    setForm({ ...form, features: [...form.features, feature] });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !form.title ||
      !form.source ||
      !form.live ||
      !form.brief ||
      !form.description ||
      !form.path ||
      !form.category ||
      !form.features.length ||
      !form.thumbnail ||
      !form.logo ||
      !form.tech.length
    ) {
      toast.info("Please fill all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("source", form.source);
    formData.append("live", form.live);
    formData.append("brief", form.brief);
    formData.append("description", form.description);
    formData.append("path", form.path);
    formData.append("category", form.category);
    formData.append("features", JSON.stringify(form.features));
    formData.append("thumbnail", form.thumbnail);
    formData.append("logo", form.logo);
    formData.append("hot", form.hot ? "true" : "false");

    form.tech.forEach((file) => formData.append("tech", file));

    try {
      await axios.post(
        "https://api.molaraiche.com/api/projects/addProject",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      toast.success("project has been added !");

      setForm({
        title: "",
        source: "",
        live: "",
        brief: "",
        description: "",
        path: "",
        category: "",
        features: [],
        thumbnail: null,
        logo: null,
        tech: [],
        hot: false,
      });
      router.refresh();
    } catch (error) {
      console.error("Error adding project:", error);
      toast.error("Failed to add the project. Please try again.");
    }
  };
  const removeFeatureHandler = (indexToRemove: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      features: prevForm.features.filter((_, index) => index !== indexToRemove),
    }));
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
            name='description'
            className='min-h-[100px] resize-none w-1/2 border border-white'
            placeholder='Description'
            value={form.description}
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

        {/* Features */}
        <div className='flex items-center justify-center w-full gap-3'>
          <input
            type='text'
            className='w-full border border-white'
            placeholder='Features'
            name='features'
            id='features'
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const target = e.target as HTMLInputElement;
                if (target.value.trim()) {
                  addFeatureHandler(target.value.trim());
                  target.value = "";
                }
              }
            }}
          />
        </div>

        {/* Thumbnail, Logo, Tech */}
        <div className='flex items-center justify-between my-3'>
          <label htmlFor='thumbnail' className='flex items-center'>
            {form.thumbnail ? form.thumbnail.name : "Upload Thumbnail"}
            <input
              type='file'
              name='thumbnail'
              id='thumbnail'
              onChange={onFileChangeHandler}
              className=''
            />
          </label>
          <label htmlFor='logo' className='flex items-center'>
            {form.logo ? form.logo.name : "Upload Logo"}
            <input
              type='file'
              name='logo'
              id='logo'
              onChange={onFileChangeHandler}
            />
          </label>
          <label htmlFor='tech' className='flex items-center'>
            Upload Tech Files
            <input
              type='file'
              name='tech'
              id='tech'
              multiple
              onChange={onFileChangeHandler}
            />
          </label>
        </div>

        {/* Hot, Category, Path */}
        <div
          className='flex items-center justify-between w-full my-3
      '>
          <label htmlFor='hot'>Hot:</label>
          <select
            name='hot'
            id='hot'
            className='w-full p-3 bg-black border border-white mx-1'
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
        <div className='flex items-center justify-between my-3 w-full'>
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
          <input
            type='reset'
            className='bg-red-500 text-white rounded border border-white font-semibold'
            onClick={() =>
              setForm({
                title: "",
                source: "",
                live: "",
                brief: "",
                description: "",
                path: "",
                category: "",
                features: [],
                thumbnail: null,
                logo: null,
                tech: [],
                hot: false,
              })
            }
          />
          <button className='bg-black-400 text-white py-2 px-6 rounded font-semibold w-[100%]'>
            Create
          </button>
        </div>
      </form>

      {/* Features List */}
      <div className='mt-5 w-full flex flex-col px-10'>
        <h3 className='font-bold font-fm'>Features Added:</h3>
        <ul className='my-4'>
          {form.features.map((feature, index) => (
            <li key={index} className='flex items-center gap-3'>
              <span>{feature}</span>
              <button
                type='button'
                onClick={() => removeFeatureHandler(index)}
                className='text-red-500 hover:text-red-700 font-semibold'>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Add;
