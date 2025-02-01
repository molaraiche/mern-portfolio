import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "404 | Page Not Found | Mohamed Laraiche",
  description:
    "Oops! The page you're looking for could not be found. Visit Mohamed Laraiche's homepage to explore professional web development services.",
  keywords:
    "404, Page Not Found, Error Page, Mohamed Laraiche, Frontend Developer, Web Development, Freelance Developer, Next.js, Tailwind CSS, TypeScript",
  authors: [{ name: "Mohamed Laraiche", url: "https://molaraiche.com" }],
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "404 | Page Not Found | Mohamed Laraiche",
    type: "website",
    url: "https://molaraiche.com/404",
    description:
      "This page could not be found. Head back to the homepage to learn more about my professional web development services.",
    siteName: "Mohamed Laraiche",
    images: [
      {
        url: "https://molaraiche.com/molaraiche.jpg",
        width: 1200,
        height: 630,
        alt: "404 Not Found - Mohamed Laraiche",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 | Page Not Found | Mohamed Laraiche",
    description:
      "The page you're looking for doesn't exist. Visit the homepage for more information on web development services by Mohamed Laraiche.",
    images: ["https://molaraiche.com/molaraiche.jpg"],
  },
};

const NotFound = () => {
  return (
    <div className='h-[85vh] flex items-center justify-center flex-col dark:text-white'>
      <div className=' w-[80%] flex items-center justify-center rounded-md '>
        <h1 className='display-2xl drop-shadow-md font-ls'>404</h1>
      </div>
      <div className='w-full flex items-center justify-center flex-col'>
        <h1 className='lg:text-5xl font-bold my-10 text-center px-[2%] font-quicksand w-full'>
          This page does not exist.
        </h1>
        <div className='flex items-center justify-center'>
          <Link
            href='/'
            className='py-3 px-10 rounded-xl font-semibold font-quicksand bg-grey-500 text-brand-black'>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
