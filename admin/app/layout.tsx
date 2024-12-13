import { Metadata } from "next";
import "./globals.css";
import { Familjen_Grotesk, Quicksand } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const metadata: Metadata = {
  title: "Admin | molaraiche",
};
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${quicksand.variable} ${fm.variable} bg-brand-blue min-h-screen `}>
        <main>
          {children}
          <ToastContainer position='bottom-right' />
        </main>
      </body>
    </html>
  );
}
