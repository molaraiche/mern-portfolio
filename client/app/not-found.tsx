import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Page Not Found | Mohamed Laraiche",
  description:
    "Oops! The page you're looking for does not exist. Return to the homepage of Mohamed Laraiche, a professional freelancer specializing in web development.",
  keywords:
    "404, Not Found, Page Not Found, Mohamed Laraiche, Web Developer, Freelance, Full-Stack Development, Error Page",
  authors: [{ name: "Mohamed Laraiche", url: "https://molaraiche.com" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Page Not Found | Mohamed Laraiche",
    type: "website",
    url: "https://molaraiche.com/404",
    description:
      "This page does not exist. Head back to the homepage for more information on professional web development services.",
    images: [
      {
        url: "https://www.molaraiche.com/molaraiche.jpg",
        width: 1200,
        height: 630,
        alt: "Not Found Thumbnail - Mohamed Laraiche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Mohamed Laraiche",
    description:
      "Oops! The page you're looking for does not exist. Return to the homepage of Mohamed Laraiche for web development services.",
    images: ["https://www.molaraiche.com/molaraiche.jpg"],
  },
};

const NotFound = () => {
  return (
    <div className='h-[85vh] flex items-center justify-center flex-col dark:text-white'>
      <div className=' w-[80%] flex items-center justify-center rounded-md '>
        <h1 className='display-2xl drop-shadow-md font-fm'>404</h1>
      </div>
      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='lg:text-5xl font-bold my-10 text-center px-[2%] font-quicksand w-full'>
          This page does not exist.
        </h1>
        <div className='flex items-center justify-center'>
          <Link
            href='/'
            className='py-3 px-10 rounded-xl font-semibold font-quicksand bg-grey-500 text-black'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
