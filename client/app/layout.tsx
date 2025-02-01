import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, League_Spartan } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import "animate.css";
import BackTop from "@/components/BackTop";
import { Analytics } from "@vercel/analytics/react";

const LS = League_Spartan({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-ls",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});
export const metadata: Metadata = {
  title: "Mohamed Laraiche | Frontend Developer",
  description:
    "I am Mohamed Laraiche, a frontend developer based in Chichaoua, Morocco. I specialize in building modern, responsive websites and web applications using Next.js, Tailwind CSS, and TypeScript. Let's create something extraordinary together.",
  authors: [{ name: "Mohamed Laraiche", url: "https://molaraiche.com" }],
  keywords:
    "Frontend Developer, Next.js, Tailwind CSS, TypeScript, Responsive Design, UI/UX Development, Web Applications, Modern Web Development, Remote Work, Morocco Developer",
  category: "Frontend Development",
  openGraph: {
    title: "Mohamed Laraiche | Frontend Developer",
    type: "website",
    url: "https://molaraiche.com",
    description:
      "I’m Mohamed Laraiche, a frontend developer from Chichaoua, Morocco. I craft modern, responsive websites and web applications using Next.js, Tailwind CSS, and TypeScript.",
    siteName: "Mohamed Laraiche",
    images: [
      {
        url: "https://molaraiche.com/molaraiche.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Laraiche Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Laraiche | Frontend Developer",
    description:
      "I am Mohamed Laraiche, a frontend developer specializing in Next.js, Tailwind CSS, and TypeScript. Let’s collaborate to build modern and responsive websites.",
    images: ["https://molaraiche.com/molaraiche.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${LS.variable} ${quicksand.variable} antialiased`}>
        <ThemeProvider>
          <main className='bg-brand-white dark:bg-brand-black'>
            <section className='lg:container lg:mx-auto py-2 md:px-14 sm:px-10 xsm:px-4 relative'>
              <Navbar />
              {children}
              <BackTop />
            </section>
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
