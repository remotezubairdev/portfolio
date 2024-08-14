import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Portfolio | Zubair Dev",
    template: "%s | Portfolio"
  },
  description: "Welcome to my website! I'm an aspiring front-end web developer creating visually appealing and functional web experiences. Although I'm still building my skills in HTML, CSS, and JavaScript, Next JS, React JS etc. I’m enthusiastic about learning and applying modern frameworks like React.js and Next.js to craft engaging digital solutions. Whether you need a simple landing page or a fresh design for your site, I'm dedicated to delivering creative and effective results as I continue to grow in the field. Let’s work together to bring your web ideas to life!",
  authors: [
    {
      name: "Zubair Dev",
    },
  ],
  keywords: "front end web developer portfolio | web developer | html | css | tailwind css | freelancer | zubair dev | zubair dev portfolio | zubair dev portfolio website",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "Zubair Dev - Front End Web Developer | Portfolio",
    description: "Zubair Dev is a skilled front end web developer with expertise in Next.js and React.js. Check out my portfolio showcasing modern and responsive web applications.",
    siteName: "Zubair Dev",
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
