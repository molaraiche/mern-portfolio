import type { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk, Quicksand } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from "@/components/Navbar";
import "animate.css";
import BackTop from "@/components/BackTop";
import { Analytics } from "@vercel/analytics/react";
const fm = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fm",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});
export const metadata: Metadata = {
  title: "Mohamed Laraiche | Freelancer Full-Stack Web Developer",
  description:
    "I am Mohamed Laraiche, a professional freelancer specializing in full-stack web development. I create dynamic, scalable websites and applications using TypeScript, Next.js, Tailwind CSS, and the MERN stack. I offer custom solutions for e-commerce, portfolio websites, and businesses seeking a strong online presence.",
  authors: [{ name: "Mohamed Laraiche", url: "https://molaraiche.com" }],
  keywords:
    "Freelancer Developer, Full-Stack Web Development, MERN Stack, Next.js, TypeScript, Tailwind CSS, Firebase, GraphQL, REST API, Web Development Services, Responsive Design, UI/UX, SEO, E-commerce Solutions, Remote Freelance Work, Portfolio Websites",
  category: "Web Development",
  openGraph: {
    title: "Mohamed Laraiche | Freelancer Full-Stack Web Developer",
    type: "website",
    url: "https://molaraiche.com",
    description:
      "Professional freelancer specializing in full-stack web development. I build responsive, dynamic, and scalable websites with TypeScript, Next.js, Tailwind CSS, and the MERN stack. I help businesses and individuals succeed online.",
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
    title: "Mohamed Laraiche | Freelancer Full-Stack Web Developer",
    description:
      "Professional freelancer specializing in full-stack web development. I create responsive, scalable websites tailored to your business needs.",
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
      <body className={`${fm.variable} ${quicksand.variable} antialiased`}>
        <ThemeProvider>
          <main className=' dark:bg-black'>
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
