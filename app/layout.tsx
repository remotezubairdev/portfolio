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
  author: "Zubair Dev",
  keywords: "front end web developer portfolio | web developer | html | css | tailwind css | freelancer | zubair dev | zubair dev portfolio | zubair dev portfolio website",
  twitter: {
    card: "summary_large_image"
  },
  openGraph: {
    title: "Portfolio | Zubair Dev",
    description: "Front end Web Developer knows Next js & React js building modern and responsive web applications"
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
      <body className={GeistSans.className}>
        <div className='text-slate-100 max-w-3xl mx-auto py-16 px-8'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
