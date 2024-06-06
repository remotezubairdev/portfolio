import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Portfolio | Zubair Dev",
  description: "Front-end Web Developer knows Nextjs & Reactjs building modern web applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className='text-slate-100 max-w-3xl mx-auto py-16 px-8'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
