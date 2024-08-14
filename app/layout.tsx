import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Zubair Dev",
    template: "%s | Portfolio"
  },
  description: "Front end Web Developer knows Next js & React js building modern and responsive web applications",
  twitter: {
    card: "summary_large_image"
  },
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="ahrefs-site-verification" content="b7daf56d826617ba520f3d96d1791f3428dc203a10431fbcf84464559a807808">
      </head>
      <body className={GeistSans.className}>
        <div className='text-slate-100 max-w-3xl mx-auto py-16 px-8'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
